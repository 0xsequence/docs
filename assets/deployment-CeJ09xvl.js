import{d as r,j as e,e as a}from"./index-DIfCwY-e.js";/* empty css                                */const c={title:"Sequence Contract Deployment Process and Contract Overview",description:"The content discusses the deployment process of Sequence contract wallets, emphasizing their deterministic nature across EVM-compatible networks."};function i(n){const t={a:"a",div:"div",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"contract-deployment",children:["Contract Deployment",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contract-deployment",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"Sequence contract wallets are fully deterministic; a wallet will map to the same address on any network that is EVM compatible."}),`
`,e.jsx(t.p,{children:"This means that when a wallet is created, its address can be derived in advance, and it will be the same on networks like Ethereum, Arbitrum, Polygon, and others."}),`
`,e.jsxs(a,{type:"warning",children:[e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Limitations"}),e.jsx("br",{}),`
Sequence wallets `,e.jsx(t.strong,{children:"may not"})," receive the same address on chains that aren't 100% EVM compatible."]}),e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Double-check your addresses"})," before sending any assets to them."]})]}),`
`,e.jsxs(t.p,{children:["To achieve this, Sequence uses variations of ",e.jsx(t.a,{href:"https://weka.medium.com/how-to-send-ether-to-11-440-people-187e332566b7",children:"Nick's method"}),", which allows for the deployment of the same contract on multiple chains in a fully trustless way."]}),`
`,e.jsx(t.p,{children:`Nick's method is used to deploy a "deployer" contract, which is then used to deploy the core Sequence contracts.`}),`
`,e.jsx(t.p,{children:"These contracts are:"}),`
`,e.jsxs(t.h4,{id:"factory-contract",children:["Factory Contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#factory-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Creates new Sequence wallets, with an initial configuration."}),`
`,e.jsxs(t.h4,{id:"mainmodule-v1-and-v2",children:["MainModule (v1 and v2)",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mainmodule-v1-and-v2",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The main module implements the core logic of the wallet, with a fixed configuration."}),`
`,e.jsxs(t.h4,{id:"mainmoduleupgradable-v1-and-v2",children:["MainModuleUpgradable (v1 and v2)",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mainmoduleupgradable-v1-and-v2",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Similar to the MainModule, but with the ability to upgrade the configuration of the wallet."}),`
`,e.jsxs(t.h4,{id:"auxiliary-contracts",children:["Auxiliary Contracts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#auxiliary-contracts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Both v1 and v2 have auxiliary contracts that are used by the SDK to interact with the wallet; these contracts are not critical for the wallet to function, but they are required for the SDK to work."}),`
`,e.jsx(t.p,{children:"See the v1 and v2 documentation for more information on the contracts."}),`
`,e.jsx(a,{type:"info",children:e.jsxs(t.p,{children:["Notice",e.jsx("br",{}),"A complete script for deployment can be found in the ",e.jsx(t.a,{href:"https://github.com/0xsequence/live-contracts",children:"Sequence Live Contracts repository"}),"."]})}),`
`,e.jsxs(t.h2,{id:"detailed-deployment-steps",children:["Detailed Deployment Steps",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#detailed-deployment-steps",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["v1: ",e.jsx(t.a,{href:"/solutions/technical-references/internals/v1/deploy",children:"Deploy v1 Contracts"})]}),`
`,e.jsxs(t.li,{children:["v2: ",e.jsx(t.a,{href:"/solutions/technical-references/internals/v2/deploy",children:"Deploy v2 Contracts"})]}),`
`]})]})}function d(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{d as default,c as frontmatter};
