const { execSync } = require('node:child_process')
const fs = require('node:fs').promises
const path = require('node:path')
const FrenglishSDK = require('frenglish').default

const ORIGIN_LANGUAGE_DIR = 'pages/test-folder-translations' // Adjust this to your origin language directory
const FRENGLISH_API_KEY = process.env.FRENGLISH_API_KEY
const frenglish = new FrenglishSDK(FRENGLISH_API_KEY)

async function getChangedFiles() {
  try {
    // First, try to get changed files between the last two commits
    console.log('Attempting to get changed files from git diff...')
    const output = execSync('git diff --name-only HEAD^ HEAD').toString().trim()
    const changedFiles = output.split('\n').filter((file) => file.startsWith(ORIGIN_LANGUAGE_DIR))
    console.log('Changed files:', changedFiles)

    if (changedFiles.length > 0) {
      return changedFiles
    }
    console.log(
      'No changed files found in the origin language directory. Falling back to all files.',
    )
  } catch (error) {
    console.log('Error getting changed files:', error.message)
    console.log('Falling back to all files in the origin language directory.')
  }

  // Fallback: get all files in the origin language directory
  console.log('Getting all files from:', ORIGIN_LANGUAGE_DIR)
  const allFiles = execSync(`find ${ORIGIN_LANGUAGE_DIR} -type f`).toString().trim().split('\n')
  console.log('All files:', allFiles)
  return allFiles
}

async function main() {
  try {
    const filesToTranslate = await getChangedFiles()

    if (filesToTranslate.length === 0) {
      console.log('No files to translate')
      return
    }

    console.log('Files to translate:', filesToTranslate)

    const fileContents = await Promise.all(
      filesToTranslate.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        return { fileId: path.basename(file), content }
      }),
    )

    const filenames = fileContents.map((file) => file.fileId)
    const contents = fileContents.map((file) => file.content)

    console.log('Initiating translation...')
    console.log('contents', contents)

    // Adjust the translate call based on the SDK's expected parameters
    const translation = await frenglish.translate(contents, false, filenames)
    console.log(`Translation requested with ID: ${translation.translationId}`)

    for (const languageData of translation.content) {
      const language = languageData.language
      const translatedFiles = languageData.files

      console.log('language', language)
      console.log('translatedFiles', translatedFiles)

      for (const translatedFile of translatedFiles) {
        const originalFile = filesToTranslate.find(
          (file) => path.basename(file) === translatedFile.fileId,
        )
        if (originalFile) {
          const translatedFilePath = originalFile.replace('/', `/${language}/`)
          await fs.mkdir(path.dirname(translatedFilePath), { recursive: true })
          await fs.writeFile(translatedFilePath, translatedFile.content)
          console.log(`Translated file written: ${translatedFilePath}`)
        } else {
          console.warn(`Original file not found for translated file: ${translatedFile.fileId}`)
        }
      }
    }
  } catch (error) {
    console.error('Error during translation process:', error)
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', await error.response.text())
    }
    process.exit(1)
  }
}

main()
