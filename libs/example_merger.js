#!/usr/bin/env node

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
  // Check if the document title contains 'Metadata'
  if (doc.info.title.includes('Metadata')) {
    doc.tags = [
      {
        name: 'public',
        description:
          'Endpoints accessible by passing your project-access-key in the header. This is injected whenever you login automatically.',
      },
      {
        name: 'secret',
        description:
          'Endpoints that require a Sequence service token intended to be secret. You can manually generate one on Sequence Builder and pass it as a Bearer Token.',
      },
    ]
  }

  for (const [endpoint, example] of Object.entries(examples)) {
    const path = doc.paths[endpoint]
    if (!path) {
      console.warn(path, 'not defined in examples')
      continue
    }

    for (const [exampleName, ex] of Object.entries(example)) {
      if (ex.request && Object.keys(ex.request).length > 0) {
        const response = path.post.requestBody
        response.content['application/json'].example = ex.request
      }

      if (ex.response && Object.keys(ex.response).length > 0) {
        const response = path.post.responses['200']
        response.content['application/json'].example = ex.response
      }

      if (ex.description && Object.keys(ex.description).length > 0) {
        path.post.description = ex.description
      }

      if (ex.tag && Object.keys(ex.tag).length > 0) {
        path.post.tags = {}
        path.post.tags = ex.tag
      }
    }
  }
}

export const merge = (openApiFilepath) => {
  // /docs/pages/api/marketplace/rpc.gen.yaml
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
