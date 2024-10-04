import { useState, useEffect } from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import { retrieveProjectAccessKey } from '../retrieveProjectAccessKey'
import indexerJson from './output/indexer-openapi.json'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'


function APIComponent() {
  const [config, setConfig] = useState({
    spec: {
      content: indexerJson,
    },
  });

  useEffect(() => {
    async function setupAuth() {
      const apiKey = await retrieveProjectAccessKey();
      setConfig(prevConfig => ({
        ...prevConfig,
        authentication: {
          preferredSecurityScheme: 'ApiKeyAuth',
          apiKey: {
            token: apiKey,
          },
        },
      }));
    }

    setupAuth();
  }, []);

  return <ApiReferenceReact configuration={config} />;
}

// Dynamic import function for swagger JSON
// const importSwaggerJson = async (specType) => {
//   switch (specType) {
//     case 'indexer':
//       return (await import('./output/indexer-openapi.json')).default
//     // Add more cases for other spec types as needed
//     default:
//       throw new Error(`Invalid spec type: ${specType}`)
//   }
// }

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
