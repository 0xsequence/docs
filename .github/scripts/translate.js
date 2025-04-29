const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

// ============================================================
// 🔧 REQUIRED CONFIGURATION – USERS MUST MODIFY THESE VALUES
// ============================================================

// Path to your original language files (e.g., English source content)
const ORIGIN_LANGUAGE_DIR = path.resolve('./src/locales/en'); 

// Path where translated files will be saved (Base directory)
const TRANSLATION_OUTPUT_DIR = path.resolve('./src/locales');

// List of files or directories to exclude from processing
const EXCLUDED_FILES = ['package.json', 'package-lock.json', 'node_modules'];

// ============================================================
// DO NOT MODIFY BELOW THIS LINE UNLESS YOU KNOW WHAT YOU'RE DOING
// ============================================================

(async () => {
    // Dynamically import the ESM-only module
    const sdkModule = await import('@frenglish/sdk');
    const FrenglishSDK = sdkModule.FrenglishSDK;
    if (!FrenglishSDK) throw new Error('FrenglishSDK not found in module exports.');

    // Retrieve the API key from environment variable
    const FRENGLISH_API_KEY = process.env.FRENGLISH_API_KEY;
    if (!FRENGLISH_API_KEY) {
        console.error('Error: FRENGLISH_API_KEY environment variable not set.');
        process.exit(1);
    }
    const frenglish = FrenglishSDK(FRENGLISH_API_KEY);

    async function getDefaultBranch() {
        try {
            const repo = process.env.GITHUB_REPOSITORY;
            const token = process.env.GITHUB_TOKEN;
            if (!repo || !token) {
                console.warn('GITHUB_REPOSITORY or GITHUB_TOKEN not set. Defaulting branch to "main".');
                return 'main';
            }
            const response = await fetch(`https://api.github.com/repos/${repo}`, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            if (!response.ok) {
                throw new Error(`GitHub API request failed: ${response.statusText}`);
            }
            const data = await response.json();
            return data.default_branch || 'main';
        } catch (error) {
            console.error('Error getting default branch:', error.message);
            console.warn('Defaulting branch to "main".');
            return 'main'; // Fallback
        }
    }

    async function isSupportedFile(filePath) {
        try {
            // Ensure the file is within the intended source directory structure for relative path logic
            const relativeToOrigin = path.relative(ORIGIN_LANGUAGE_DIR, path.resolve(filePath));
            if (relativeToOrigin.startsWith('..') || relativeToOrigin === '') {
                 // console.log(`Skipping file outside ORIGIN_LANGUAGE_DIR or the directory itself: ${filePath}`);
                 return false;
            }

            // Check against general excluded files/paths
            if (EXCLUDED_FILES.some(excluded => filePath.includes(excluded))) {
                console.log(`File ${filePath} is explicitly excluded.`);
                return false;
            }

            // Check extension against Frenglish supported types
            const supportedFileTypes = await frenglish.getSupportedFileTypes();
            const validFileTypes = supportedFileTypes.filter(type => type && type.length > 0);
            const ext = path.extname(filePath).toLowerCase().replace('.', '');

            const isSupported = ext && validFileTypes.includes(ext);
            // console.log(`File: ${filePath}, Extension: ${ext}, Supported: ${isSupported}`);
            return isSupported;

        } catch (error) {
            console.error(`Error checking file support for ${filePath}:`, error.message);
            return false; // Treat errors as unsupported
        }
    }

    async function getChangedFiles() {
        try {
            const defaultBranch = await getDefaultBranch();
            const currentBranch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME; // GITHUB_REF_NAME is better for non-PR pushes
            
            if (!currentBranch) {
                console.error("Could not determine the current branch name.");
                return [];
            }

            console.log(`Default branch: ${defaultBranch}`);
            console.log(`Current branch: ${currentBranch}`);

            // Fetch necessary refs without fetching everything
            execSync(`git fetch --no-tags --prune --depth=1 origin +refs/heads/${defaultBranch}:refs/remotes/origin/${defaultBranch}`);
            execSync(`git fetch --no-tags --prune --depth=1 origin +refs/heads/${currentBranch}:refs/remotes/origin/${currentBranch}`);

            console.log(`Getting changed files between origin/${defaultBranch} and origin/${currentBranch}...`);
            // Use the three-dot diff which compares the tip of the current branch with the merge base
            const diffCommand = `git diff --name-only --diff-filter=ACM origin/${defaultBranch}...origin/${currentBranch}`;
            console.log(`Running diff: ${diffCommand}`);
            const output = execSync(diffCommand).toString().trim();
            
            const changedFiles = output ? output.split('\n') : [];
            console.log('All changed files in diff:', changedFiles);

            // Filter only files within the ORIGIN_LANGUAGE_DIR
            const relevantFiles = changedFiles.filter(file => {
                 const resolvedFile = path.resolve(file);
                 const resolvedOriginDir = path.resolve(ORIGIN_LANGUAGE_DIR);
                 return resolvedFile.startsWith(resolvedOriginDir + path.sep);
            });
            console.log(`Files within ORIGIN_LANGUAGE_DIR (${ORIGIN_LANGUAGE_DIR}):`, relevantFiles);

            const supportedFiles = [];
            for (const file of relevantFiles) {
                if (await isSupportedFile(file)) {
                    supportedFiles.push(file);
                }
            }
            console.log('Supported changed files in origin language dir:', supportedFiles);
            return supportedFiles;
        } catch (error) {
            console.error('Error getting changed files:', error.message);
            // Attempt to log stderr for more context if execSync failed
             if (error.stderr) {
                console.error('Git stderr:', error.stderr.toString());
            }
             if (error.stdout) {
                console.error('Git stdout:', error.stdout.toString());
            }
            return []; // Return empty on error
        }
    }

    async function translateAndWriteFiles() {
        try {
            const config = await frenglish.getDefaultConfiguration();
            const originLanguage = config.originLanguage.toLowerCase();
            const filesToTranslate = await getChangedFiles();

            if (!filesToTranslate || filesToTranslate.length === 0) {
                console.log('No supported files found in the diff within the origin language directory to translate.');
                return; // Exit gracefully if no files need translation
            }

            // Prepare content for translation
            const fileContents = await Promise.all(filesToTranslate.map(async (file) => {
                try {
                    const content = await fs.readFile(file, 'utf-8');
                    // Use path relative to ORIGIN_LANGUAGE_DIR as the fileId
                    const fileId = path.relative(ORIGIN_LANGUAGE_DIR, file);
                    return { fileId: fileId, content: content };
                } catch (readError) {
                    console.error(`Error reading file ${file}:`, readError.message);
                    return null; // Handle file read errors
                }
            }));

            // Filter out any nulls from read errors
            const validFileContents = fileContents.filter(fc => fc !== null);
            if (validFileContents.length === 0) {
                console.log('No valid file contents could be read for translation.');
                return;
            }

            const filenames = validFileContents.map(file => file.fileId);
            const contents = validFileContents.map(file => file.content);

            console.log(`Initiating translation for ${filenames.length} files:`, filenames);
            const translation = await frenglish.translate(contents, false, filenames);
            console.log(`Translation requested with ID: ${translation.translationId}`);

            // --- GIT CONFIG REMOVED ---

            // Process translated content
            for (const languageData of translation.content) {
                const language = languageData.language;
                // Skip writing files for the origin language if they are returned
                if (language === originLanguage) {
                    console.log(`Skipping write for origin language: ${language}`);
                    continue;
                }

                const languageOutputDir = path.join(TRANSLATION_OUTPUT_DIR, language);
                try {
                    await fs.mkdir(languageOutputDir, { recursive: true });
                    // console.log(`Ensured output directory exists for ${language}: ${languageOutputDir}`);
                } catch (mkdirError) {
                    console.error(`Error creating directory ${languageOutputDir}:`, mkdirError.message);
                    continue; // Skip this language if directory creation fails
                }

                for (const translatedFile of languageData.files) {
                    // Construct the full path for the translated file
                    const translatedFilePath = path.join(languageOutputDir, translatedFile.fileId);

                    // Ensure the subdirectory for the file exists (e.g., for nested structures)
                    try {
                        await fs.mkdir(path.dirname(translatedFilePath), { recursive: true });
                    } catch (mkdirError) {
                        console.error(`Error creating subdirectory ${path.dirname(translatedFilePath)}:`, mkdirError.message);
                        continue; // Skip this file if subdirectory creation fails
                    }
                    
                    // Write the file content if not empty
                    if (translatedFile.content && translatedFile.content.length > 0) {
                        try {
                            await fs.writeFile(translatedFilePath, translatedFile.content, 'utf8');
                            console.log(`Translated file written: ${translatedFilePath}`);
                            // --- GIT ADD REMOVED ---
                        } catch (writeError) {
                            console.error(`Error writing translated file ${translatedFilePath}:`, writeError.message);
                        }
                    } else {
                        console.warn(`Empty content for translated file: ${translatedFile.fileId} in language ${language}. Skipping write.`);
                    }
                }
            }

            // --- GIT STATUS CHECK, COMMIT, PUSH REMOVED ---
            console.log("Translation file writing complete. Git operations will be handled by the workflow.");

        } catch (error) {
            console.error('Error during translation and file writing process:', error);
            if (error.response && error.response.data) { // Log Frenglish API errors if available
                console.error('Frenglish API Error Details:', error.response.data);
            }
            process.exit(1); // Exit with error code
        }
    }

    // Run the modified translation process
    translateAndWriteFiles();
})();