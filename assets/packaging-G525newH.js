import{d as r,j as e}from"./index-CvNRvsv1.js";const o={title:"Sequence - Web3 Gaming Platform - Unreal SDK - Packaging",description:"Documentation for Unreal packaging for the Sequence infrastructure stack for web3 gaming."};function t(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"packaging",children:["Packaging",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#packaging",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"To set your system up for Packaging please refer to the following links:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/packaging-unreal-engine-projects?application_version=5.3",children:"Windows and macOS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine",children:"Setting up Visual Studio for Unreal on Windows"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/packaging-android-projects-in-unreal-engine?application_version=5.3",children:"Android"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/packaging-ios-projects-in-unreal-engine?application_version=5.3",children:"iOS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/hardware-and-software-specifications-for-unreal-engine",children:"Mac Specific Software Requirements"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"ios",children:["iOS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ios",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For iOS apps you also need to setup provisioning, ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-ios-tvos-and-ipados-provisioning-profiles-and-signing-certificates-for-unreal-engine-projects?application_version=5.3",children:"following these docs"})]}),`
`,e.jsxs(n.h2,{id:"android",children:["Android",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#android",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`When setting up your project to build for Android you'll need to update the following settings:
In ProjectSettings/Android SDK
Set SDK API Level to Android-34
Set NDK API Level to anything in the range [26,33] (We personally used android-32)`}),`
`,e.jsxs(n.h2,{id:"hardware-requirements",children:["Hardware Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hardware-requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For Hardware Requirements with Unreal please refer to ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/hardware-and-software-specifications-for-unreal-engine?application_version=5.3",children:"these docs"})]}),`
`,e.jsxs(n.h2,{id:"unreal-and-xcode-specifics",children:["Unreal and Xcode Specifics",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unreal-and-xcode-specifics",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"During the Unreal Package process in the event a code signing error occurs you can take the following steps within XCode to get your packaged .app file"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"After packaging the project in Unreal, open the Xcode project (Sequence-unreal folder -> Intermediate -> ProjectFilesIOS -> SequenceUnreal.xcodeproj)"}),`
`,e.jsx(n.li,{children:"Click on the project name on the left hand side to open up project settings"}),`
`,e.jsx(n.li,{children:"Click the Build Phase Tab"}),`
`,e.jsx(n.li,{children:"Click on the ‘+’ icon at the top left"}),`
`,e.jsx(n.li,{children:"Select Run Script"}),`
`,e.jsx(n.li,{children:"Drag the new run script to one below from the last item in the phase list"}),`
`,e.jsx(n.li,{children:"Expand the run script"}),`
`,e.jsxs(n.li,{children:["In the script box, add the following command: ",e.jsx(n.code,{children:"xattr -cr /[path-to-your-project]/[your-project-name]/Binaries/IOS/Payload/[your-project-name.app]"})]}),`
`,e.jsx(n.li,{children:"Click on the Build Settings tab"}),`
`,e.jsx(n.li,{children:"Click on each item under the Architectures header that contains macOS and hit the delete key"}),`
`,e.jsx(n.li,{children:"Click on the General tab"}),`
`,e.jsx(n.li,{children:"Click on Mac and Applevision Pro under supported destinations and hit the delete key"}),`
`,e.jsx(n.li,{children:"Now the project can be built (if the build fails at first, wait a few moments then try again. It can sometimes take a bit before the build registers the run script)"}),`
`,e.jsx(n.li,{children:"Once you have finished running the project, and want to make changes to the code, REMEMBER to delete this xcodeproj file in the sequence-unreal folder to ensure that a new xcodeproj is creating when you packaging the project again."}),`
`]})]})}function s(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default,o as frontmatter};
