import{d as l,j as e}from"./index-DEt6L3cR.js";const a={title:"Sequence - Web3 Gaming Platform - Unreal SDK Installation",description:"Documentation for Unreal SDK Installation for the Sequence infrastructure stack for web3 gaming."};function i(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"installation",children:["Installation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"manual",children:["Manual",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#manual",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Navigate to the root directory of your Unreal project using a file management system or command line and create a ",e.jsx(n.code,{children:"Plugins"})," folder (if you don't already have one)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.a,{href:"https://github.com/0xsequence/sequence-unreal/releases",children:["Download & unzip the ",e.jsx(n.code,{children:"SequencePlugin"})]}),". Copy the ",e.jsx(n.code,{children:"SequencePlugin"})," folder into the ",e.jsx(n.code,{children:"Plugins"})," folder in your Unreal project's root directory."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Launch your project, then allow it to update the UProject Settings."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["To find the ",e.jsx(n.code,{children:"SequencePlugin"})," content folder in your content drawer enable show plugin content: ",e.jsx(n.code,{children:"Content Drawer > Settings > Show Plugin Content"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"using-epic-games-marketplace",children:["Using Epic Games marketplace",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-epic-games-marketplace",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"To get started with the Sequence SDK for Unreal, follow the link below."}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.unrealengine.com/marketplace/en-US/product/sequence-embedded-wallets",children:"https://www.unrealengine.com/marketplace/en-US/product/sequence-embedded-wallets"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:'Click "Free" to add the plugin to your purchased Assets'}),`
`,e.jsx(n.li,{children:'Click "Open in Launcher"'}),`
`,e.jsx(n.li,{children:'Click "Install to Engine", select the engine version, then "Install"'}),`
`,e.jsx(n.li,{children:"Open your project in Unreal Editor"}),`
`,e.jsxs(n.li,{children:["Navigate to ",e.jsx(n.code,{children:"Edit > Plugins"})]}),`
`,e.jsxs(n.li,{children:["Search for the ",e.jsx(n.code,{children:"SequencePlugin"})," and enable it"]}),`
`,e.jsx(n.li,{children:"Restart the Unreal Editor so the changes can take effect"}),`
`,e.jsxs(n.li,{children:["To find the ",e.jsx(n.code,{children:"SequencePlugin"})," content folder in your content drawer enable show engine content: ",e.jsx(n.code,{children:"Content Drawer > Settings > Show Engine Content"})]}),`
`]}),`
`,e.jsxs(n.h2,{id:"adding-privatedependencymodule",children:["Adding PrivateDependencyModule",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#adding-privatedependencymodule",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"yourprojectbuildcs",children:["YourProject.Build.cs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#yourprojectbuildcs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["In your Project's Build.cs file (",e.jsx(n.a,{href:"https://forums.unrealengine.com/t/where-are-build-cs-and-target-cs/302665",children:"where to find"}),') please check the private Dependency module such that it includes "SequencePlugin":']}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    public "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SequenceTest"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(ReadOnlyTargetRules Target) : "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"base"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(Target)"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        PCHUsage "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" PCHUsageMode.UseExplicitOrSharedPCHs;"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		PublicDependencyModuleNames."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"AddRange"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" string[] { "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Core"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"CoreUObject"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Engine"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"InputCore"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" });"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        //The line below is what you want"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"		PrivateDependencyModuleNames."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"AddRange"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"new"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" string[] { "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"SequencePlugin"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" });"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"		// Uncomment if you are using Slate UI"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'		// PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"		// Uncomment if you are using online features"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'		// PrivateDependencyModuleNames.Add("OnlineSubsystem");'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"		// To include OnlineSubsystemSteam, add it to the plugins section in your uproject file with the Enabled attribute set to true"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"	}"})})]})})]})}function t(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{t as default,a as frontmatter};
