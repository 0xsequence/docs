import { useState, useEffect } from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import { retrieveProjectAccessKey } from '../retrieveProjectAccessKey'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

const importSpec = async (specType) => {
  switch (specType) {
    case 'indexer':
      return (await import('./output/indexer-openapi.json')).default
    case 'marketplace':
      return (await import('../../../docs/pages/api/marketplace/marketplace.gen.yaml')).default

    // Add more cases for other spec types as needed
    default:
      throw new Error(`Invalid spec type: ${specType}`)
  }
}

function APIComponent({ specType }) { 
  const [config, setConfig] = useState({
    spec: {
      content: null 
    },
  });

  useEffect(() => {
    async function setupAuth() {
      const apiKey = await retrieveProjectAccessKey()
      const specContent = await importSpec(specType) // {{ edit_3 }}
      setConfig({
        spec: {
          content: specContent // {{ edit_4 }}
        },
        authentication: {
          preferredSecurityScheme: 'ApiKeyAuth',
          apiKey: {
            token: apiKey,
          },
        },
      })
    }

    setupAuth()
  }, [specType]) // {{ edit_5 }}

  return <ApiReferenceReact configuration={config} />
}

// Dynamic import function for swagger JSON


// export const complete = async (swaggerUi) => {
//   const apiKey = await retrieveProjectAccessKey()
//   swaggerUi.preauthorizeApiKey('ApiKeyAuth', apiKey)
// }

// function APIComponent({ specType }) {
//   const [swaggerJson, setSwaggerJson] = useState(null)

//   useEffect(() => {
//     const fetchSwaggerJson = async () => {
//       try {
//         const json = await importSwaggerJson(specType)
//         setSwaggerJson(json)
//       } catch (error) {
//         console.error('Error loading OpenAPI schema:', error)
//       }
//     }
//     fetchSwaggerJson()
//   }, [specType])

//   if (!swaggerJson) {
//     return <div>Loading API documentation...</div>
//   }

//   return (
//     <div>
//       <SwaggerUI 
//         spec={swaggerJson} 
//         onComplete={complete} 
//         defaultModelsExpandDepth={-1} 
//       />
//     </div>
//   )
// }

export default APIComponent
