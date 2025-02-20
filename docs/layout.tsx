import type { ReactElement } from 'react'
import TopNavButton from './components/TopNavButton'
import BuilderAuthenticationButton from './components/BuilderAuthenticationButton'
import { DocSearch } from './components/DocSearch'

const Layout = ({ children }: { children: ReactElement | string }) => {
  const searchProps = {
    appId: 'DMWSOFTW3G',
    apiKey: 'e9c479d9f3bc64c4ba3e848097dceeeb',
    indexName: 'sequence',
  }

  return (
    <div>
      <DocSearch {...searchProps} />

      <div className="container mx-auto px-4 flex justify-between items-center">
        <TopNavButton />
        <BuilderAuthenticationButton />
      </div>
      {children}
    </div>
  )
}

export default Layout
