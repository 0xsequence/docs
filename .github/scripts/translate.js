const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

// ==================================================================================================
// 🔧 REQUIRED CONFIGURATION – YOU MUST MODIFY THESE VALUES TO CONFIGURE THEIR TRANSLATION PATHS 🔧
// ==================================================================================================

// Path to your original language files (e.g., English source content)
const ORIGIN_LANGUAGE_DIR = path.resolve('.');

// Path where translated files will be saved (Base directory)
const TRANSLATION_OUTPUT_DIR = path.resolve('.');

// List of files or directories to exclude from processing
const EXCLUDED_FILES = ['package.json', 'package-lock.json', 'node_modules', 'docs.json'];

// ============================================================
// MODIFY BELOW THIS LINE FOR CUSTOM GITHUB ACTIONS
// ============================================================

(async () => {
    const sdkModule = await import('@frenglish/sdk');
    const FrenglishSDK = sdkModule.FrenglishSDK;
    if (!FrenglishSDK) throw new Error('FrenglishSDK not found in module exports.');

    const FRENGLISH_API_KEY = process.env.FRENGLISH_API_KEY;
    if (!FRENGLISH_API_KEY) {
        console.error('❌  FRENGLISH_API_KEY environment variable not set. Aborting action.');
        process.exit(1);
    }
    const frenglish = FrenglishSDK(FRENGLISH_API_KEY);

    async function getDefaultBranch() {
        try {
            const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}`, {
                headers: {
                    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            const data = await response.json();
            return data.default_branch;
        } catch (error) {
            console.error(`❌  Failed to retrieve default branch: ${error.message}`);
            return 'main';
        }
    }

    async function isSupportedFile(filePath) {
        try {
            const relativeToOrigin = path.relative(ORIGIN_LANGUAGE_DIR, path.resolve(filePath));
            if (relativeToOrigin.startsWith('..') || relativeToOrigin === '') {
                return false;
            }

            if (EXCLUDED_FILES.some(excluded => filePath.includes(excluded))) {
                console.log(`⏭️  Skipping (excluded): ${filePath}`);
                return false;
            }

            const config = await frenglish.getDefaultConfiguration();
            const languageCodes = await frenglish.getSupportedLanguages();
            const originLanguage = config.originLanguage.toLowerCase();

            const pathParts = filePath.split(path.sep);
            const languageDirIndex = pathParts.findIndex(part =>
                part.toLowerCase() === originLanguage ||
                languageCodes.some(lang => lang.toLowerCase() === part.toLowerCase())
            );

            if (languageDirIndex !== -1 && pathParts[languageDirIndex].toLowerCase() !== originLanguage) {
                console.log(`⏭️  Skipping (translated dir): ${filePath}`);
                return false;
            }

            const supportedFileTypes = await frenglish.getSupportedFileTypes();
            const validFileTypes = supportedFileTypes.filter(type => type && type.length > 0);
            const ext = path.extname(filePath).toLowerCase().replace('.', '');

            const isSupported = ext && validFileTypes.includes(ext);
            return isSupported;
        } catch (error) {
            console.error(`❌  Error checking file support for ${filePath}: ${error.message}`);
            return false;
        }
    }

    // Compares files changed in a PR (or files changed with a commit directly to default branch)
    async function getChangedFiles() {
        try {
            const isPR = !!process.env.GITHUB_BASE_REF;
            const currentBranch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF.replace('refs/heads/', '');
            const defaultBranch = await getDefaultBranch();

            if (!isPR && currentBranch !== defaultBranch) {
                return [];
            }

            // Figure out what we’re diffing against
            const baseBranch = isPR ? process.env.GITHUB_BASE_REF : defaultBranch;

            let baseSha;
            if (isPR) {
                execSync(`git fetch --depth=1 origin ${baseBranch}:${baseBranch}`);
                baseSha = execSync(`git merge-base ${baseBranch} HEAD`).toString().trim();
            } else {
                baseSha = process.env.GITHUB_EVENT_BEFORE || execSync('git rev-parse HEAD^').toString().trim();
            }

            console.log(`🔀  Diff base: ${baseBranch} @ ${baseSha}`);
            console.log(`🔝  Head     : ${currentBranch} @ HEAD`);

            const output = execSync(`git diff --diff-filter=ACM --name-only ${baseSha} HEAD`).toString().trim();
            const changedFiles = output ? output.split('\n') : [];
            const supportedFiles = [];

            for (const file of changedFiles) {
                if (await isSupportedFile(file)) supportedFiles.push(file);
            }

            console.log(`📦  Files queued for translation (${supportedFiles.length}): ${supportedFiles.join(', ') || 'None'}`);
            return supportedFiles;
        } catch (error) {
            console.error(`❌  Error getting changed files: ${error.message}`);
            return [];
        }
    }

    async function translateAndWriteFiles() {
        try {
            const config = await frenglish.getDefaultConfiguration();
            const originLanguage = config.originLanguage.toLowerCase();
            const filesToTranslate = await getChangedFiles();

            if (!filesToTranslate.length) {
                console.log('ℹ️  No eligible files found for translation. Exiting.');
                return;
            }

            const fileContents = await Promise.all(filesToTranslate.map(async (file) => {
                try {
                    const content = await fs.readFile(file, 'utf-8');
                    // Use path relative to ORIGIN_LANGUAGE_DIR as the fileId
                    const fileId = path.relative(ORIGIN_LANGUAGE_DIR, file);
                    return { fileId: fileId, content: content };
                } catch (readError) {
                    console.error(`❌ Error reading file ${file}:`, readError.message);
                    return null;
                }
            }));

            const validFileContents = fileContents.filter(fc => fc !== null);
            if (validFileContents.length === 0) {
                console.log('⚠️  No readable file contents detected. Exiting.');
                return;
            }

            const filenames = validFileContents.map(file => file.fileId);
            const contents = validFileContents.map(file => file.content);

            console.log(`🚀  Initiating translation for ${filenames.length} file(s).`);
            const translation = await frenglish.translate(contents, false, filenames);
            console.log(`📤  Translation request submitted. ID: ${translation.translationId}`);

            for (const languageData of translation.content) {
                const language = languageData.language;
                // Skip writing files for the origin language if they are returned
                if (language === originLanguage) {
                    console.log(`⏩  Skipping origin language (${language}).`);
                    continue;
                }

                const languageOutputDir = path.join(TRANSLATION_OUTPUT_DIR, language);
                try {
                    await fs.mkdir(languageOutputDir, { recursive: true });
                } catch (mkdirError) {
                    console.error(`❌  Unable to create directory ${languageOutputDir}: ${mkdirError.message}`);
                    continue;
                }

                for (const translatedFile of languageData.files) {
                    const translatedFilePath = path.join(languageOutputDir, translatedFile.fileId);

                    try {
                        await fs.mkdir(path.dirname(translatedFilePath), { recursive: true });
                    } catch (mkdirError) {
                        console.error(`❌  Unable to create subdirectory ${path.dirname(translatedFilePath)}: ${mkdirError.message}`);
                        continue;
                    }

                    // Write the file content if not empty
                    if (translatedFile.content && translatedFile.content.length > 0) {
                        try {
                            await fs.writeFile(translatedFilePath, translatedFile.content, 'utf8');
                            console.log(`✅  Written: ${translatedFilePath}`);
                        } catch (writeError) {
                            console.error(`❌  Error writing ${translatedFilePath}: ${writeError.message}`);
                        }
                    } else {
                        console.warn(`⚠️  Empty content for ${translatedFile.fileId} (${language}). Skipping.`);
                    }
                }
            }

            console.log('🏁  Translation workflow complete. Git operations will be handled by the Action.');
        } catch (error) {
            console.error('❌  Translation process failed:', error);
            if (error.response?.data) {
                console.error('🔍  Frenglish API details:', error.response.data);
            }
            process.exit(1);
        }
    }

    translateAndWriteFiles();
})();