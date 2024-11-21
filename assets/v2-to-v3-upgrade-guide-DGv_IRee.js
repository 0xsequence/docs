import{d as a,j as e}from"./index-BkuSWJIj.js";const l={title:"Upgrading from v2 to v3",description:"undefined"};function i(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"upgrading-from-v2-to-v3",children:["Upgrading from v2 to v3",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading-from-v2-to-v3",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"installation",children:["Installation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"If you've installed via Package Manager using the git url, please perform the following:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Remove Sequence-Unity package"}),`
`,e.jsxs(n.li,{children:["Re-install using ",e.jsx(n.code,{children:"https://github.com/0xsequence/sequence-unity.git?path=/Packages/Sequence-Unity"})," as the link"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"resolving-compile-errors",children:["Resolving Compile Errors",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resolving-compile-errors",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Delete ",e.jsx(n.code,{children:"Samples/Sequence WaaS SDK/version/Setup/Editor"})," - this is now included in the SDK"]}),`
`,e.jsxs(n.li,{children:["All namespaces (using statements) that contain ",e.jsx(n.code,{children:"WaaS"})," have been replaced with ",e.jsx(n.code,{children:"Sequence.EmbeddedWallet"})]}),`
`]}),`
`,e.jsx(n.p,{children:"For example, if you have"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"using"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Sequence"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"WaaS"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"using"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Sequence"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"WaaS"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Authentication"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"using"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SequenceSDK"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"WaaS"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]})]})}),`
`,e.jsx(n.p,{children:"Replace this with"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"using"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Sequence"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"EmbeddedWallet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]})})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"WaaSTransactionQueuer"})," -> ",e.jsx(n.code,{children:"SequenceWalletTransactionQueuer"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"WaaSWallet"})," -> ",e.jsx(n.code,{children:"SequenceWallet"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["In general, any class, method, or event that contains ",e.jsx(n.code,{children:"WaaS"})," in the name and gives you a compile error has had ",e.jsx(n.code,{children:"WaaS"}),` removed from its name (with the exception of the few previously mentioned classes)
Examples:
`,e.jsx(n.code,{children:"OnWaaSWalletCreated"})," -> ",e.jsx(n.code,{children:"OnWalletCreated"}),`
`,e.jsx(n.code,{children:"WaaSSession"})," -> ",e.jsx(n.code,{children:"Session"}),`
`,e.jsx(n.code,{children:"EthWallet"})," -> ",e.jsx(n.code,{children:"EOAWallet"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["For any existing ",e.jsx(n.code,{children:"LoginPanel"})," instances"]}),`
`,e.jsxs(n.p,{children:["a. Attach the ",e.jsx(n.code,{children:"WaaSSessionManager"})," prefab (as Session Manager Prefab) under ",e.jsx(n.code,{children:"Sequence > SequenceSDK > EmbeddedWallet > WaaSSessionManager"})," (if it isn’t already there)"]}),`
`,e.jsxs(n.p,{children:["b. Attach the ",e.jsx(n.code,{children:"FederatedAuthPopupPanel"})," prefab under ",e.jsx(n.code,{children:"Sequence > SequenceFrontend > Prefabs"})]}),`
`]}),`
`]})]})}function d(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default,l as frontmatter};
