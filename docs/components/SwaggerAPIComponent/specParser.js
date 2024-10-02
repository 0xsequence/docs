import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function parseOpenAPISpec(specPath) {
  // Read the OpenAPI spec file
  const specContent = await fs.readFile(specPath, 'utf8');
  const spec = JSON.parse(specContent);

  // Initialize an object to store endpoints by tag
  const specsByTag = {
    metadata: { ...spec, paths: {} },
    analytics: { ...spec, paths: {} },
    marketplace: { ...spec, paths: {} },
    relayer: { ...spec, paths: {} },
    api: { ...spec, paths: {} },
    indexer: { ...spec, paths: {} }
  };

  // Iterate through the paths in the spec
  for (const [path, methods] of Object.entries(spec.paths)) {
    for (const [method, details] of Object.entries(methods)) {
      const tags = details.tags || [];
      
      // Add the endpoint to the corresponding tag(s)
      tags.forEach(tag => {
        if (specsByTag.hasOwnProperty(tag)) {
          if (!specsByTag[tag].paths[path]) {
            specsByTag[tag].paths[path] = {};
          }
          specsByTag[tag].paths[path][method] = details;
        }
      });
    }
  }

  // Create output directory if it doesn't exist
  const outputDir = path.join(__dirname, 'output');
  try {
    await fs.mkdir(outputDir);
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }

  // Write separate files for each tag
  for (const [tag, tagSpec] of Object.entries(specsByTag)) {
    // Remove empty paths
    if (Object.keys(tagSpec.paths).length === 0) {
      continue;
    }

    // Update the info object with tag-specific title and description
    tagSpec.info = {
      ...tagSpec.info,
      title: `${tagSpec.info.title} - ${tag.charAt(0).toUpperCase() + tag.slice(1)} API`,
      description: `${tagSpec.info.description}\n\nThis specification covers the ${tag} endpoints of the API.`
    };

    // Ensure the spec is valid by including only relevant schema components
    tagSpec.components = { 
      schemas: {},
      securitySchemes: {
        ApiKeyAuth: {
          description: "Project access key for authenticating requests, get an access key at https://sequence.build",
          in: "header",
          name: "X-Access-Key",
          type: "apiKey"
        }
      }
    };

    const usedSchemas = new Set();

    // Helper function to recursively find schema references
    const findSchemaRefs = (obj) => {
      if (typeof obj !== 'object' || obj === null) return;
      if (obj.$ref && obj.$ref.startsWith('#/components/schemas/')) {
        usedSchemas.add(obj.$ref.split('/').pop());
      }
      Object.values(obj).forEach(findSchemaRefs);
    };

    // Find all schema references used in this tag's paths
    findSchemaRefs(tagSpec.paths);

    // Add used schemas and their dependencies
    const addSchema = (schemaName) => {
      if (spec.components.schemas[schemaName]) {
        tagSpec.components.schemas[schemaName] = spec.components.schemas[schemaName];
        findSchemaRefs(tagSpec.components.schemas[schemaName]);
      }
    };

    usedSchemas.forEach(addSchema);

    // Add global security requirement
    tagSpec.security = [{ ApiKeyAuth: [] }];

    // Write the OpenAPI spec for this tag
    const outputPath = path.join(outputDir, `${tag}-openapi.json`);
    await fs.writeFile(outputPath, JSON.stringify(tagSpec, null, 2));
    console.log(`Created ${outputPath}`);
  }
}

// Usage
const specPath = './swaggerspec.json'; // Update this path to your OpenAPI spec file
parseOpenAPISpec(specPath);

export { parseOpenAPISpec };