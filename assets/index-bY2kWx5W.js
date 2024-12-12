import{d as o,j as e}from"./index-C-ai72IW.js";const t={title:"Configuring Sequence Embedded Wallet in Builder",description:"Configure a Sequence Embedded Wallet in Builder to easily onboard users to your games by integrating OAuth accounts. Learn how to set up login providers like Google Auth and Apple Auth, specify allowed origins for security, set up a recovery wallet, create an initial configuration."};function r(n){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"embedded-wallet-configuration",children:["Embedded Wallet Configuration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-wallet-configuration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.p,{children:["You can configure a ",e.jsx(i.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"Sequence Embedded Wallet"})," in Builder and integrate your own OAuth accounts to enable easy onboarding to your games. Configuration page in Builder ",e.jsx(i.a,{href:"https://sequence.build/project/default/embedded-wallet",children:"is available here"}),"."]}),`
`,e.jsx(i.p,{children:"The following sections will explain the various ways to configure using an Embedded Wallet in Builder:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/solutions/builder/embedded-wallet#login-providers",children:"Login Providers"}),": Web2 based authentication providers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/solutions/builder/embedded-wallet#allowed-origins",children:"Allowed Origins"}),": Specify allowed URL origins to call your Embedded Wallet instance from to prevent configuration key misuse"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/solutions/builder/embedded-wallet#recovery-wallet",children:"Recovery Wallet"}),": In the event of a wallet ownership turnover for a compromised wallet, specify a recovery wallet to obtain ownership of embedded wallet instance post Trust recovery process"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/solutions/builder/embedded-wallet#initial-configuration-password",children:"Initial Configuration Password"}),": Create a password to secure your Embedded Wallet project instance in Builder"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/solutions/builder/embedded-wallet#configuration-changes",children:"Configuration Changes"}),": Update configuration details at anypoint with password protection"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/solutions/builder/embedded-wallet#sdk-integrations",children:"SDK Integrations"}),": Sequence SDK products that allow developers to implement an Embedded Wallet across platforms"]}),`
`]}),`
`,e.jsxs(i.h2,{id:"login-providers",children:["Login Providers",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#login-providers",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Sequence Embedded Wallet supports a multitude of login providers such as email, various social logins, and guest wallets. For social logins, you must go through the configuration process for the provider to retrieve a client specific ID to pass into Sequence Builder. We recommend visiting the specific login provider's configuration page for more information on the setup process."}),`
`,e.jsxs(i.h2,{id:"allowed-origins",children:["Allowed Origins",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#allowed-origins",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"This additional security measure will prevent unauthorized usage of your WaaS configuration outside of domains you whitelisted. Add any development and production URLs under Allowed Origins. By default all subpaths under theses hosts will be allowed."}),`
`,e.jsxs(i.p,{children:["You must define allowed origins with a valid scheme (i.e. ",e.jsx(i.code,{children:"https"}),")."]}),`
`,e.jsxs(i.h2,{id:"recovery-wallet",children:["Recovery Wallet",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#recovery-wallet",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Embedded Wallet requires the public address for a recovery wallet that you control. This recovery wallet will be used for recovering user wallets in a disaster scenario where a wallet has been compromised, so it must be controlled by you and must be kept safe at all times."}),`
`,e.jsx(i.p,{children:"We recommend that:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["You use a secure, multisig wallet such as ",e.jsx(i.a,{href:"https://safe.global/",children:"Gnosis Safe"})," for setting up the wallet"]}),`
`,e.jsx(i.li,{children:"You ensure you have at least 2, ideally 3+ signers configured and required for every transaction"}),`
`,e.jsx(i.li,{children:"Every signer is protected by a hardware wallet"}),`
`]}),`
`,e.jsx(i.p,{children:"Once the recovery wallet is setup properly, provide the public address for it. Recovery wallet cannot be modified once your configuration is saved."}),`
`,e.jsxs(i.h2,{id:"initial-configuration-password",children:["Initial Configuration Password",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#initial-configuration-password",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Once you have all information prepared, go ahead and create your Embedded Wallet configuration. During initial setup, Builder will prompt you to assign a password to the Embedded Wallet. This password will be required for all subsequent modifications to your Embedded Wallet configuration, so it must be stored safely."}),`
`,e.jsxs(i.h2,{id:"configuration-changes",children:["Configuration Changes",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-changes",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:'To make modifications to your Embedded Wallet configuration, navigate to the Embedded Wallet section again and make the necessary changes. Then click "Save Configuration" and enter your recovery wallet password to deploy the changes.'}),`
`,e.jsxs(i.h2,{id:"sdk-integrations",children:["SDK Integrations",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sdk-integrations",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Now that you have your Embedded Wallet configuration up, go ahead and follow our guides on how to integrate with the SDKs:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"/solutions/wallets/embedded-wallet/overview",children:"TypeScript SDK"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"/sdk/unity/overview",children:"Unity SDK"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"/sdk/unreal/introduction",children:"Unreal SDK"})}),`
`]})]})}function l(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{l as default,t as frontmatter};
