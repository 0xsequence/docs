import { useState, useEffect } from 'react'
// @ts-ignore
import { retrieveProjectAccessKey } from '../retrieveProjectAccessKey'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

const importSpec = async (specType: any) => {
  switch (specType) {
    case 'analytics':
      // need to change to analytics once deployed
      return (await import('../../../docs/pages/api/analytics/analytics.gen.yaml')).default
    case 'indexer':
      return (await import('../../../docs/pages/api/indexer/indexer.gen.yaml')).default
    case 'marketplace':
      return (await import('../../../docs/pages/api/marketplace/marketplace.gen.yaml')).default
    case 'metadata':
      return (await import('../../../docs/pages/api/metadata/metadata.gen.yaml')).default
    case 'infrastructure':
        return (await import('../../../docs/pages/api/api/api.gen.yaml')).default
    case 'transactions':
      // need to change to transactions once deployed
      return (await import('../../../docs/pages/api/relayer/relayer.gen.yaml')).default

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
          apiKey: {
            token: apiKey,
          },
        },
        defaultOpenAllTags: true
      })
    }

    setupAuth()
  }, [specType]) // {{ edit_5 }}

  // @ts-ignore
  return <ApiReferenceReact configuration={config} />
}

export default APIComponent
