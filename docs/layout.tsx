import { type ReactElement, useEffect, useState } from 'react'
import TopNavButton from './components/TopNavButton'
import BuilderAuthenticationButton from './components/BuilderAuthenticationButton'
import { DocSearch } from './components/DocSearch'
import FullScreenLoading from './components/FullScreenLoading'

const Layout = ({ children }: { children: ReactElement | string }) => {
  const [restartedSearch, setRestartedSearch] = useState(false)

  useEffect(() => {
    if (localStorage) {
      localStorage.removeItem('filterText')
      setRestartedSearch(true)
    }
  }, [])

  const searchProps = {
    appId: 'DMWSOFTW3G',
    apiKey: 'e9c479d9f3bc64c4ba3e848097dceeeb',
    indexName: 'sequence',
  }

  if (!restartedSearch) return <FullScreenLoading />

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
