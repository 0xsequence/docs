import { useEffect, useState, type ReactElement } from 'react'
import TopNavButton from './components/TopNavButton'
import BuilderAuthenticationButton from './components/BuilderAuthenticationButton'
import { DocSearch } from './components/DocSearch'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { loadCatalog } from './utils/i18n'

const Layout = ({ children }: { children: ReactElement | string }) => {
  const searchProps = {
    appId: 'DMWSOFTW3G',
    apiKey: 'e9c479d9f3bc64c4ba3e848097dceeeb',
    indexName: 'sequence',
  }
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const isJapanese = window.location.pathname.startsWith('/ja')
    const catalog = isJapanese ? 'ja' : 'en'

    loadCatalog(catalog).then(() => setLoading(false))
  })

  if (isLoading) return null

  return (
    <I18nProvider i18n={i18n}>
      <div>
        <DocSearch {...searchProps} />
        <div className="container mx-auto px-4 flex justify-between items-center">
          <TopNavButton />
          <BuilderAuthenticationButton />
        </div>
        {children}
      </div>
    </I18nProvider>
  )
}

export default Layout
