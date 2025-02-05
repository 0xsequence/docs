const { execSync } = require('node:child_process')
const fs = require('node:fs').promises
const path = require('node:path')
const FrenglishSDK = require('frenglish').default
require('dotenv').config()

const FRENGLISH_API_KEY = process.env.FRENGLISH_API_KEY
const BASE_PATH = 'docs/pages'
const ORIGIN_LANGUAGE_DIR = 'docs/pages'
const EXCLUDED_TRANSLATION_PATH = [
  'docs/pages/ja',
  'docs/pages/api',
  'docs/pages/guides',
  'docs/pages/sdk',
  'docs/pages/solutions',
  'docs/pages/support',
  'docs/pages/solutions/chainlist',
]

const frenglish = new FrenglishSDK(FRENGLISH_API_KEY)

const isVerbose = process.argv.includes('--v') || process.argv.includes('--verbose')
const shouldTranslateAllFiles = process.argv.includes('--translate-all')

function log(...args) {
  if (isVerbose) console.log(...args)
}

function getAllFiles() {
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

function getChangedFiles() {
  log('Getting changed files from git status in:', ORIGIN_LANGUAGE_DIR)

  try {
    const grepExcludedPaths = EXCLUDED_TRANSLATION_PATH.map((path) => `:!${path}`).join(' ')
    const gitCommand = `git status --porcelain "${ORIGIN_LANGUAGE_DIR}" ${grepExcludedPaths} | awk '{print $2}'`

    const files = execSync(gitCommand, { encoding: 'utf8' }).trim().split('\n').filter(Boolean) // Remove empty strings

    log('Files to translate:', files)
    process.exit(1)
    return files
  } catch (error) {
    console.error('Error fetching changed files:', error.message)
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

      const translatedFilePath = originalFile.replace(BASE_PATH, path.join(BASE_PATH, language))
      await fs.mkdir(path.dirname(translatedFilePath), { recursive: true })

      if (content.length > 0) {
        await fs.writeFile(
          translatedFilePath,
          content.replace('../components', '../../components'),
          'utf8',
        )
        log(`Translated file written: ${translatedFilePath}`)
      } else {
        console.warn(`Empty content for file: ${fileId}. Skipping.`)
      }
    }
  }
}

async function main() {
  const filesToTranslate = shouldTranslateAllFiles ? getAllFiles() : getChangedFiles()
  if (filesToTranslate.length === 0) {
    console.warn('No files to translate')
    process.exit(1)
  }

  const translationContent = await translateFiles(filesToTranslate)
  if (translationContent) {
    await writeTranslatedFiles(translationContent, filesToTranslate)
  }
}

main()
