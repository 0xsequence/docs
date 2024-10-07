import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function parseOpenAPISpec(specPath) {
  // Read the OpenAPI spec file
  const specContent = await fs.readFile(specPath, 'utf8')
  const spec = JSON.parse(specContent)

  // Initialize an object to store endpoints by tag
  const specsByTag = {
    metadata: { ...spec, paths: {} },
    analytics: { ...spec, paths: {} },
    marketplace: { ...spec, paths: {} },
    relayer: { ...spec, paths: {} },
    api: { ...spec, paths: {} },
    indexer: { ...spec, paths: {} },
  }

  // Object to store servers for each tag
  const serversByTag = {}

  // Iterate through the paths in the spec
  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const [method, details] of Object.entries(methods)) {
      const tags = details.tags || []

      // Add the endpoint to the corresponding tag(s)
      tags.forEach((tag) => {
        if (specsByTag.hasOwnProperty(tag)) {
          if (!specsByTag[tag].paths[path]) {
            specsByTag[tag].paths[path] = {}
          }
          specsByTag[tag].paths[path][method] = details

          // Check for servers in the operation
          if (details.servers) {
            if (!serversByTag[tag]) {
              serversByTag[tag] = new Set()
            }
            details.servers.forEach((server) => serversByTag[tag].add(JSON.stringify(server)))
          }
        }
      })
    }
  }

  // Create output directory if it doesn't exist
  const outputDir = path.join(__dirname, 'output')
  try {
    await fs.mkdir(outputDir)
  } catch (error) {
    if (error.code !== 'EEXIST') throw error
  }

  // Write separate files for each tag
  for (const [tag, tagSpec] of Object.entries(specsByTag)) {
    // Remove empty paths
    if (Object.keys(tagSpec.paths).length === 0) {
      continue
    }

    // Update the info object with tag-specific title and description
    tagSpec.info = {
      ...tagSpec.info,
      title: `${tagSpec.info.title} - ${tag.charAt(0).toUpperCase() + tag.slice(1)} API`,
      description: `${tagSpec.info.description}\n\nThis specification covers the ${tag} endpoints of the API.`,
    }

    // Update servers for this tag
    if (serversByTag[tag]) {
      tagSpec.servers = Array.from(serversByTag[tag]).map(JSON.parse)
    } else {
      // If no specific servers for this tag, use the top-level servers
      tagSpec.servers = spec.servers
    }

    // Ensure the spec is valid by including only relevant schema components
    tagSpec.components = {
      schemas: {},
      securitySchemes: {
        ApiKeyAuth: {
          description:
            'Project access key for authenticating requests, get an access key at https://sequence.build',
          in: 'header',
          name: 'X-Access-Key',
          type: 'apiKey',
        },
      },
    }

    const usedSchemas = new Set()

    // Helper function to recursively find schema references
    const findSchemaRefs = (obj) => {
      if (typeof obj !== 'object' || obj === null) return
      if (obj.$ref?.startsWith('#/components/schemas/')) {
        usedSchemas.add(obj.$ref.split('/').pop())
      }
      Object.values(obj).forEach(findSchemaRefs)
    }

    // Find all schema references used in this tag's paths
    findSchemaRefs(tagSpec.paths)

    // Add used schemas and their dependencies
    const addSchema = (schemaName) => {
      if (spec.components.schemas[schemaName]) {
        tagSpec.components.schemas[schemaName] = spec.components.schemas[schemaName]
        findSchemaRefs(tagSpec.components.schemas[schemaName])
      }
    }

    usedSchemas.forEach(addSchema)

    // Add global security requirement
    tagSpec.security = [{ ApiKeyAuth: [] }]

    // Write the OpenAPI spec for this tag
    const outputPath = path.join(outputDir, `${tag}-openapi.json`)
    await fs.writeFile(outputPath, JSON.stringify(tagSpec, null, 2))
    console.log(`Created ${outputPath}`)
  }

  // Update the top-level spec with all servers
  const allServers = new Set()
  Object.values(serversByTag).forEach((servers) =>
    servers.forEach((server) => allServers.add(server)),
  )
  spec.servers = Array.from(allServers).map(JSON.parse)

  // Write the updated top-level spec
  const updatedSpecPath = path.join(outputDir, 'updated-openapi.json')
  await fs.writeFile(updatedSpecPath, JSON.stringify(spec, null, 2))
  console.log(`Created ${updatedSpecPath}`)
}

// Usage
const specPath = './swaggerspec.json'
parseOpenAPISpec(specPath)

export { parseOpenAPISpec }
