import{d as t,j as e}from"./index-C0cnaLUr.js";const s={title:"Sequence - Web3 Gaming Platform - Unreal SDK Installation",description:"Documentation for Unreal SDK Installation for the Sequence infrastructure stack for web3 gaming."};function r(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"installation",children:["Installation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"using-sequences-unreal-boilerplate",children:["Using Sequence's Unreal Boilerplate",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-sequences-unreal-boilerplate",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/0xsequence/unreal-embedded-wallet-boilerplate",children:"Download our Boilerplate from GitHub"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Install the Unreal Engine version 5.4, if you don't have it already."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Open the Boilerplate Project and visit our ",e.jsx(n.a,{href:"/guides/unreal-ew-guide",children:"Unreal Boilerplate Guide"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"using-the-latest-github-release",children:["Using the latest GitHub Release",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-the-latest-github-release",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Download the latest release .zip file from ",e.jsx(n.a,{href:"https://github.com/0xsequence/sequence-unreal/releases",children:"Release from GitHub."})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Navigate to the root directory of your Unreal project using a file management system or command line and create a ",e.jsx(n.code,{children:"Plugins"})," folder, if you don't already have one."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Unzip the downloaded file and copy the ",e.jsx(n.code,{children:"SequencePlugin"})," folder into your project's ",e.jsx(n.code,{children:"Plugins"})," folder."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Launch your project, then allow it to update the UProject Settings."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["To find the ",e.jsx(n.code,{children:"SequencePlugin"})," content folder in your content drawer enable show plugin content: ",e.jsx(n.code,{children:"Content Drawer > Settings > Show Plugin Content"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"using-epic-games-marketplace",children:["Using Epic Games Marketplace",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-epic-games-marketplace",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Visit the ",e.jsx(n.a,{href:"https://www.unrealengine.com/marketplace/en-US/product/sequence-embedded-wallets",children:"Epic Games Marketplace"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'Click "Free" to add the plugin to your purchased Assets.'}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'Click "Open in Launcher", and install the Plugin for your Engine version.'}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Open your project, navigate to ",e.jsx(n.code,{children:"Edit > Plugins"}),", and enable the ",e.jsx(n.code,{children:"SequencePlugin"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Restart the Unreal Editor so the changes can take effect"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["To find the ",e.jsx(n.code,{children:"SequencePlugin"})," content folder in your content drawer enable show engine content: ",e.jsx(n.code,{children:"Content Drawer > Settings > Show Engine Content"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"upgrading-to-unreal-54",children:["Upgrading to Unreal 5.4",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upgrading-to-unreal-54",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Before updating, please backup any configuration data stored in ",e.jsx(n.code,{children:"PluginConfig/Config.h"})," or ",e.jsx(n.code,{children:"Config/Config.h"}),". Once backed up, delete the entire SequencePlugin directory. Replace it with the new updated version of the plugin."]}),`
`,e.jsx(n.p,{children:"If your project is currently on 5.2 or 5.3, then for this version you'll want to upgrade to 5.4."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Close the Unreal Editor and your your Code Editor"}),`
`,e.jsx(n.li,{children:'Right click on your Unreal Project file > "Switch Unreal Engine Version" (you may need to click "Show more options"), choose 5.4 and confirm'}),`
`,e.jsx(n.li,{children:"Open your code editor and rebuild your source code"}),`
`]}),`
`,e.jsxs(n.p,{children:["As a way of future proofing we recommend installing Visual Studio 2022 in accordance with ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine",children:"these docs"})," as Unreal 5.4 and onward will be dropping support for Visual Studio 2019."]})]})}function o(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{o as default,s as frontmatter};
