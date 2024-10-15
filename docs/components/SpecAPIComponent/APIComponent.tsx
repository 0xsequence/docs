import { useState, useEffect } from 'react'
// @ts-ignore
import { retrieveProjectAccessKey } from '../retrieveProjectAccessKey'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

const importSpec = async (specType: any) => {
  switch (specType) {
    case 'analytics':
      return (await import('./output/analytics-openapi.json')).default
    case 'indexer':
      return (await import('./output/indexer-openapi.json')).default
    case 'marketplace':
      return (await import('./output/marketplace-openapi.json')).default
    case 'metadata':
      return (await import('./output/metadata-openapi.json')).default
    case 'transactions':
      return (await import('./output/relayer-openapi.json')).default

    // Add more cases for other spec types as needed
    default:
      throw new Error(`Invalid spec type: ${specType}`)
  }
}

function APIComponent({ specType }: any) { 
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
          // @ts-ignore
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

  // @ts-ignore
  return <ApiReferenceReact configuration={config} />
}

export default APIComponent
