import { Suspense, lazy, useEffect, useState } from 'react'
import type { DocSearchProps } from '@docsearch/react'
import '@docsearch/css'

let hydrating = true

export function useHydrated() {
  const [hydrated, setHydrated] = useState(() => !hydrating)
  useEffect(() => {
    hydrating = false
    setHydrated(true)
  }, [])
  return hydrated
}

const OriginalDocSearch = lazy(() =>
  import('@docsearch/react').then((module) => ({
    default: module.DocSearch,
  })),
)

export function DocSearch(docSearchProps: DocSearchProps) {
  const hydrated = useHydrated()

  if (!hydrated) {
    return <div className="h-9" />
  }

  return (
    <Suspense fallback={<div className="h-9" />}>
      <div className=".DocSearch .DocSearch-Button">
        <OriginalDocSearch {...docSearchProps} />
      </div>
    </Suspense>
  )
}
