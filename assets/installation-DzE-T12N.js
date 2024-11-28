import{d as t,j as e}from"./index-B-rvoaPX.js";const o={title:"Installing Sequence Unity SDK - Package Manager vs. Manual Installation",description:"To install the Sequence Unity SDK, the recommended method is using OpenUPM or Package Manager UI."};function i(a){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"installation",children:["Installation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"package-manager---recommended",children:["Package Manager - Recommended",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#package-manager---recommended",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"openupm",children:["OpenUPM",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#openupm",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://openupm.com/#get-started-with-cli-optional",children:"Install OpenUPM"})}),`
`,e.jsx(n.li,{children:"Open a command line at the root of your Unity project"}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"openupm add xyz.0xsequence.waas-unity"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"or-using-package-manager-ui",children:["or using Package Manager UI",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#or-using-package-manager-ui",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Ensure you have Git 2.14.0 or above installed on your machine"}),`
`,e.jsx(n.li,{children:"Open Package Manager (Window > Package Manager)"}),`
`,e.jsx(n.li,{children:'Click the "+" icon in the Package Manager window > "Add package from git URL..."'}),`
`,e.jsxs(n.li,{children:["Paste this url and click Add or press Enter on your keyboard ",e.jsx(n.code,{children:"https://github.com/0xsequence/sequence-unity.git?path=/Packages/Sequence-Unity"})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"setup",children:["Setup",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setup",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Open Package Manager (Window > Package Manager)"}),`
`,e.jsx(n.li,{children:'From Package Manager, click on "Samples"'}),`
`,e.jsxs(n.li,{children:[`Import "Setup" from Samples
`,e.jsx(n.img,{src:"/img/unity/unity-import-setup.png",alt:"Setup"})]}),`
`]}),`
`,e.jsx(n.p,{children:"a) This will import a Resources folder with the SequenceConfig scriptable object (more on this in Setup)."}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Import ",e.jsx(n.code,{children:"TMP Essentials"})," (if you haven't already). Note: Unity should prompt you to do this automatically if you attempt to Play or Build with a TextMeshPro object in your scene."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/unity/unity-import-tmpro.png",alt:"Import TMPro"})}),`
`,e.jsxs(n.h3,{id:"samples",children:["Samples",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#samples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In addition to this documentation, we've also provided you with a few samples to help with using our SDK."}),`
`,e.jsx(n.p,{children:"These can be found by:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Opening Package Manager"}),`
`,e.jsx(n.li,{children:'Finding our SDK "Sequence WaaS SDK"'}),`
`,e.jsx(n.li,{children:'Click on "Samples"'}),`
`,e.jsx(n.li,{children:'Click "Import" next to any sample you wish to install. This will create a Samples folder under Assets and import the sample there. The sample will be completely mutable as it lives within your Assets folder.'}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/unity/unity-package-manager-samples.png",alt:"Samples"})}),`
`,e.jsx(n.p,{children:'The second sample "Demo Scene" is sample scene that showcases some of the features of our SDK. It serves as a useful supplement to the documentation.'}),`
`,e.jsx(n.p,{children:'The third sample "Useful Scripts" contains useful scripts and Prefabs that make integrating the SDK easier.'}),`
`,e.jsxs(n.h2,{id:"manual",children:["Manual",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manual",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Installing via Package Manager will put the SDK in a read-only state - note: you will still be able to modify the UI when using Package Manager."}),`
`,e.jsx(n.p,{children:"For most use cases, this is ideal. However, we recognize that some advanced users will want the flexibility to edit the SDK as they see fit."}),`
`,e.jsx(n.p,{children:"Please note that if you do chose this route that updating the SDK will become more challenging because any changes you make will be overwritten and these changes can easily go unnoticed in a version control system. In general, we feel it is safer to import the SDK in read-only mode via Package Manager and write wrappers to extend as needed, but we empower you to work with our SDK how you see fit."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Add ",e.jsx(n.a,{href:"https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.0/manual/index.html",children:"Newtonsoft.json"}),` to your project (if it isn't there already) via package manager. Click on the "+" icon in the Package Manager window > "Add package by name..." and add `,e.jsx(n.code,{children:"com.unity.nuget.newtonsoft-json"}),"."]}),`
`,e.jsxs(n.li,{children:["Download ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unity/releases",children:"the latest release of the Sequence Unity SDK UnityPackage"})]}),`
`,e.jsxs(n.li,{children:["Drag the ",e.jsx(n.code,{children:".unitypackage"})," file into your project window and import it"]}),`
`,e.jsxs(n.li,{children:["Import ",e.jsx(n.code,{children:"TMP Essentials"})," (if you haven't already). Note: Unity should prompt you to do this automatically if you attempt to Play or Build with a TextMeshPro object in your scene."]}),`
`]})]})}function r(a={}){const{wrapper:n}={...t(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{r as default,o as frontmatter};
