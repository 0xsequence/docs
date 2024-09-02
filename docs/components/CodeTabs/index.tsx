import { useState } from 'react'
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {ThemeProvider, Box, HelpIcon, Tooltip } from '@0xsequence/design-system'



type CodeTabsProps = {
  tabs: {
    label: string
    content: string
  }[]
}

const CodeTabs: React.FC<CodeTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleCopy = () => {
    const code = tabs[activeTab].content
    navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      },
      (err) => {
        console.error('Error to copy the code: ', err)
      },
    )
  }

  return (
    <div className="code-tabs">
      <div className="code-tabs__tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`code-tabs__tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
            
          </button>
        ))}
        <ThemeProvider>
        <Tooltip vOffset={-2}
              side="top" message={<>We use a sample access key in order to authenticate your requests. <br /> Please create an account and login with your wallet in order to use your own project credentials</>}>
               
<span className="code-tabs__access-key"><p className="code-tabs__accessKeyText">Using Sample Access Key</p></span>
              </Tooltip>
            </ThemeProvider>
        <button className={`code-tabs__copy-button ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="code-tabs__">
        <pre id="code-content" tabIndex={0}>
          <SyntaxHighlighter
            className="code-content"
            language={tabs[activeTab].label}
            style={vscDarkPlus}
          >
            {tabs[activeTab].content}
          </SyntaxHighlighter>
        </pre>
      </div>
    </div>
  )
}

export default CodeTabs
