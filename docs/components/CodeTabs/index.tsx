import { useState } from "react";

type CodeTabsProps = {
  tabs: {
    label: string,
    content: string,
  }[];
};

const CodeTabs: React.FC<CodeTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = tabs[activeTab].content;
    navigator.clipboard.writeText(code).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error("Error to copy the code: ", err);
      }
    );
  };

  return (
    <div className="code-tabs">
      <div className="code-tabs__tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`code-tabs__tab-button ${
              index === activeTab ? "active" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
        <button
          className={`code-tabs__copy-button ${copied ? "copied" : ""}`}
          onClick={handleCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="code-tabs__code-content">
        <pre>
          <code>{tabs[activeTab].content}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeTabs;
