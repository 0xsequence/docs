import { useState } from 'react'
// import SyntaxHighlighter from 'react-syntax-highlighter';

import { CopyIcon } from '../Landing/icons'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../Tooltip/Tooltip'

type CodeTabsProps = {
  tabs: {
    label: string
    content: string
  }[]
}

const CodeTabs: React.FC<CodeTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

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

        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger className="code-tabs__access-key">
              <span className="pt-5">
                {localStorage.getItem('sequenceProjectAccessKey') ===
                'AQAAAAAAADVH8R2AGuQhwQ1y8NaEf1T7PJM' ? (
                  <div>
                    <p className="code-tabs__accessKeyText">Using Sample Access Key</p>
                  </div>
                ) : (
                  <div>
                    <p className="code-tabs__accessKeyText">Using Your Own Access Key</p>
                  </div>
                )}
              </span>
            </TooltipTrigger>
            <TooltipContent style={{ backgroundColor: '#111111' }}>
              <p>
                {localStorage.getItem('sequenceProjectAccessKey') ===
                'AQAAAAAAADVH8R2AGuQhwQ1y8NaEf1T7PJM' ? (
                  <>
                    We use a sample access key in order to authenticate your requests. <br /> Please
                    create an account on{' '}
                    <a className="font-bold underline" href="https://sequence.build">
                      Sequence Builder
                    </a>{' '}
                    and login with your wallet
                    <br />
                    in order to use your own project credentials.
                  </>
                ) : (
                  <>Injecting your own project access key into the code below.</>
                )}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <button
          onClick={handleCopy}
          className={`copy-button ${copied ? 'copied' : ''}`}
          aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? '✓' : <CopyIcon />}
        </button>
      </div>
      <div className="code-tabs__">
        <pre id="code-content">
          <SyntaxHighlighter
            className="code-content"
            language={tabs[activeTab].label.toLowerCase()}
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
