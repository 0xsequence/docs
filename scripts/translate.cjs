const { execSync } = require('node:child_process')
const fs = require('node:fs').promises
const path = require('node:path')
const FrenglishSDK = require('frenglish').default
require('dotenv').config()

const FRENGLISH_API_KEY = process.env.FRENGLISH_API_KEY
const ORIGIN_LANGUAGE_DIR = 'docs/pages'
const EXCLUDED_TRANSLATION_PATH = ['docs/pages/ja', 'docs/pages/solutions/chainlist']

const frenglish = new FrenglishSDK(FRENGLISH_API_KEY)

const isVerbose = process.argv.includes('--v') || process.argv.includes('--verbose')

function log(...args) {
  if (isVerbose) console.log(...args)
}

function getChangedFiles() {
  log('Getting all files from:', ORIGIN_LANGUAGE_DIR)

  try {
    const grepExcludedPaths = EXCLUDED_TRANSLATION_PATH.map((path) => `-e ${path}`).join(' ')
    const findCommand = `find "${ORIGIN_LANGUAGE_DIR}" -type f -name "*.mdx" | grep -v ${grepExcludedPaths}`

    const files = execSync(findCommand, { encoding: 'utf8' }).trim().split('\n').filter(Boolean) // Remove empty strings

    log('Files to translate:', files)
    return files
  } catch (error) {
    console.error('Error fetching files:', error.message)
    return []
  }
}

async function translateFiles(files) {
  try {
    const fileContents = await Promise.all(
      files.map(async (file) => ({
        fileId: path.basename(file),
        content: await fs.readFile(file, 'utf-8'),
      })),
    )

    const filenames = fileContents.map((file) => file.fileId)
    const contents = fileContents.map((file) => file.content)

    const translation = await frenglish.translate(contents, false, filenames)
    log(`Translation requested with ID: ${translation.translationId}`)

    return translation.content
  } catch (error) {
    console.error('Error during translation process:', error)
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', await error.response.text())
    }
    process.exit(1)
  }
}

async function writeTranslatedFiles(translationContent, filesToTranslate) {
  for (const { language, files: translatedFiles } of translationContent) {
    for (const { fileId, content } of translatedFiles) {
      const originalFile = filesToTranslate.find((file) => path.basename(file) === fileId)
      if (!originalFile) {
        console.warn(`Original file not found for translated file: ${fileId}`)
        continue
      }

      const translatedFilePath = originalFile.replace(
        ORIGIN_LANGUAGE_DIR,
        path.join(ORIGIN_LANGUAGE_DIR, language),
      )
      await fs.mkdir(path.dirname(translatedFilePath), { recursive: true })

      if (content.length > 0) {
        await fs.writeFile(translatedFilePath, content, 'utf8')
        log(`Translated file written: ${translatedFilePath}`)
      } else {
        console.warn(`Empty content for file: ${fileId}. Skipping.`)
      }
    }
  }
}

async function main() {
  const filesToTranslate = getChangedFiles()
  if (filesToTranslate.length === 0) {
    console.warn('No files to translate')
    return
  }

  const translationContent = await translateFiles(filesToTranslate)
  if (translationContent) {
    await writeTranslatedFiles(translationContent, filesToTranslate)
  }
}

// async function main() {
//   try {
//     const filesToTranslate = getChangedFiles();
//
//     if (filesToTranslate.length === 0) {
//       log("No files to translate");
//       return;
//     }
//
//     log(filesToTranslate);
//
//     const fileContents = await Promise.all(
//       filesToTranslate.map(async (file) => {
//         const content = await fs.readFile(file, "utf-8");
//         log("content AAA", content);
//         return { fileId: path.basename(file), content };
//       })
//     );
//
//     const filenames = fileContents.map((file) => file.fileId);
//     const contents = fileContents.map((file) => file.content);
//
//     // Adjust the translate call based on the SDK's expected parameters
//     // log("before translate contents", contents);
//     const translation = await frenglish.translate(contents, false, filenames);
//     log(`Translation requested with ID: ${translation.translationId} `);
//
//     for (const languageData of translation.content) {
//       const language = languageData.language;
//       const translatedFiles = languageData.files;
//       // log("translation.content ", translation.content);
//
//       for (const translatedFile of translatedFiles) {
//         const originalFile = filesToTranslate.find((file) => path.basename(file) === translatedFile.fileId);
//         if (originalFile) {
//           const translatedFilePath = originalFile.replace(
//             ORIGIN_LANGUAGE_DIR,
//             path.join(ORIGIN_LANGUAGE_DIR, language)
//           );
//           await fs.mkdir(path.dirname(translatedFilePath), { recursive: true });
//           if (translatedFile.content.length > 0) {
//             await fs.writeFile(translatedFilePath, translatedFile.content, "utf8");
//             log(`Translated file written: ${translatedFilePath} `);
//           } else {
//             console.warn(`Empty content for file: ${translatedFile.fileId}.Skipping.`);
//           }
//         } else {
//           console.warn(`Original file not found for translated file: ${translatedFile.fileId} `);
//         }
//       }
//     }
//   } catch (error) {
//     console.error("Error during translation process:", JSON.stringify(error));
//     if (error.response) {
//       console.error("Response status:", error.response.status);
//       console.error("Response data:", await error.response.text());
//     }
//     process.exit(1);
//   }
// }

main()
