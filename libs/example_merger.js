import * as fs from 'node:fs'
import path from 'node:path'
import * as yaml from 'js-yaml'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const loadOpenAPIDocument = (filePath) => {
  try {
    const file = fs.readFileSync(filePath, 'utf8')
    return yaml.load(file)
  } catch (error) {
    console.error(`Error loading OpenAPI document from ${filePath}:`, error)
    throw error
  }
}

const saveOpenAPIDocument = (filePath, document) => {
  try {
    const yamlStr = yaml.dump(document)
    fs.writeFileSync(filePath, yamlStr, 'utf8')
    console.log('OpenAPI document updated with examples!')
  } catch (error) {
    console.error(`Error saving OpenAPI document to ${filePath}:`, error)
    throw error
  }
}

const addExamplesToOpenAPI = (doc, examples) => {
  for (const [endpoint, example] of Object.entries(examples)) {
    const path = doc.paths[endpoint]
    if (!path) {
      console.warn(path, 'not defined in examples')
      continue
    }

    for (const [exampleName, ex] of Object.entries(example)) {
      if (ex.request && Object.keys(ex.request).length > 0) {
        const response = path.post.requestBody
        response.content['application/json'].examples = {}
        response.content['application/json'].examples[exampleName] = {}
        response.content['application/json'].examples[exampleName].value = ex.request
        response.content['application/json'].examples[exampleName].summary = ex.summary
      }

      if (ex.response && Object.keys(ex.response).length > 0) {
        const response = path.post.responses['200']
        response.content['application/json'].examples = {}
        response.content['application/json'].examples[exampleName] = {}
        response.content['application/json'].examples[exampleName].value = ex.response
        response.content['application/json'].examples[exampleName].summary = ex.summary
      }
    }
  }
}

export const merge = (openApiFilepath) => {
  // /docs/pages/api/marketplace/marketplace.gen.yaml
  const openAPIDoc = loadOpenAPIDocument(openApiFilepath)

  const dir = path.dirname(openApiFilepath)

  // expect to live inside same directory as generated openapi
  // /docs/pages/api/marketplace/examples.json
  const examplesPath = path.join(dir, 'examples.json')

  // do nothing if examples.json file does not exist
  if (fs.existsSync(examplesPath)) {
    const reqResponseExamples = JSON.parse(fs.readFileSync(examplesPath).toString())

    addExamplesToOpenAPI(openAPIDoc, reqResponseExamples)

    saveOpenAPIDocument(openApiFilepath, openAPIDoc)
  } else {
    console.log(examplesPath, 'does not exist')
  }
}

yargs(hideBin(process.argv))
  .command(
    'merge <input...>',
    'merge request/response examples with generated openapi document',
    () => {},
    (argv) => {
      argv.input.forEach((filePath) => {
        merge(filePath)
        console.log(filePath, 'updated')
      })
    },
  )
  .demandCommand(1)
  .parse()
