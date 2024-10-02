import { useEffect, useState } from 'react'
import './style.css'

interface TabbedContentProps {
  labels: string[]
}

function hideInactiveTabs(document: Document, activeTab: number): void {
  const tabsContent = document.querySelectorAll('.tabbed-content__content')

  tabsContent.forEach((content, index) => {
    if (content instanceof HTMLElement) {
      content.classList.add('hidden')
      if (index === activeTab) {
        content.classList.remove('hidden')
      }
    }
  })
}

// To use this component and have it work correctly, you must encapsulate the content you want to hide and show in divs with the class "tabbed-content__content" in the order in which you send the labels.
const TabbedContent = ({ labels }: TabbedContentProps) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (index: number) => {
    setActiveTab(index)
  }

  useEffect(() => {
    hideInactiveTabs(document, activeTab)
  }, [activeTab])

  return (
    <div>
      <div className="tabbed-content__menu">
        {labels.map((label, index) => (
          <button
            key={label}
            className={`tabbed-content__menu-button ${index === activeTab ? 'tabbed-content__menu-button--active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TabbedContent
