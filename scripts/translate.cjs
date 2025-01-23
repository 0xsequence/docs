const { execSync } = require('node:child_process')
const fs = require('node:fs').promises
const path = require('node:path')
const FrenglishSDK = require('frenglish').default

const FRENGLISH_API_KEY =
  process.env.FRENGLISH_API_KEY
const ORIGIN_LANGUAGE_DIR = 'docs/pages/en' // Adjust this to your origin language directory
const frenglish = new FrenglishSDK(FRENGLISH_API_KEY)

async function getChangedFiles() {
  // Fallback: get all files in the origin language directory
  console.log('Getting all files from:', ORIGIN_LANGUAGE_DIR)
  const allFiles = execSync(`find ${ORIGIN_LANGUAGE_DIR} -type f`).toString().trim().split('\n')

  // Filter out files from chainlist directory
  const filteredFiles = allFiles.filter(
    (file) => !file.includes('/chainlist/') && file.endsWith('.mdx'),
  )

  console.log('Files to translate:', filteredFiles)
  return filteredFiles
}

async function main() {
  try {
    // Step 1: Prepare files
    const filesToTranslate = await getChangedFiles()

    // Skip if no files to translate
    if (filesToTranslate.length === 0) {
      console.log('No files to translate')
      return
    }

    const fileContents = await Promise.all(
      filesToTranslate.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        return { fileId: path.basename(file), content }
      }),
    )

    const filenames = fileContents.map((file) => file.fileId)
    const contents = fileContents.map((file) => file.content)

    // Step 2: Request translation

    const translation = await frenglish.translate(contents, false, filenames)
    console.log(`Translation requested with ID: ${translation.translationId}`)

    // Step 3: Retrieve translated content
    const translatedContent = translation.content

    // Step 4: Save translated files
    for (const languageData of translatedContent) {
      const language = languageData.language
      const translatedFiles = languageData.files

      for (const translatedFile of translatedFiles) {
        const translatedFilePath = path.join(
          '/Users/jameslawton/Coding/docs-v2/docs/',
          language,
          translatedFile.fileId,
        )
        await fs.mkdir(path.dirname(translatedFilePath), { recursive: true })
        await fs.writeFile(translatedFilePath, translatedFile.content)
        console.log(`Translated file written: ${translatedFilePath}`)
      }
    }
  } catch (error) {
    console.error('Error during translation process:', error)
    process.exit(1)
  }
}

main()
