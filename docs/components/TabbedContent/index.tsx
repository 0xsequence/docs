import {useEffect, useState, useRef} from 'react'
import './style.css'

interface TabbedContentProps {
  labels: string[];
  children: React.ReactNode;
}

// To use this component and have it work correctly, you must encapsulate the content you want to hide and show in divs with the class "tabbed-content__content" in the order in which you send the labels.
const TabbedContent = ({ labels, children }: TabbedContentProps) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (index: number) => {
    setActiveTab(index)
  }

  useEffect(() => {
    hideInactiveTabs(document, activeTab)
  }, [activeTab])

  function hideInactiveTabs(document: Document, activeTab: number): void {
    const children = parentRef.current?.children;
    if (children === undefined) {
      return;
    }

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.add('hidden')
      if (i === activeTab) {
        child.classList.remove('hidden')
      }
    }
  }

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
      <div ref={parentRef}>
        {children}
      </div>
    </div>
  )
}

export default TabbedContent
