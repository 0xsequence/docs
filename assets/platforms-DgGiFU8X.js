import{d as t,j as e}from"./index-B6YpGWgd.js";const a={title:"Sequence - Web3 Gaming Platform - Unreal SDK - Packaging",description:"Documentation for Unreal packaging for the Sequence infrastructure stack for web3 gaming."};function r(i){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"packaging",children:["Packaging",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#packaging",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"To set your system up for Packaging please refer to the following links:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/packaging-unreal-engine-projects?application_version=5.3",children:"Windows and MacOS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/packaging-android-projects-in-unreal-engine?application_version=5.3",children:"Android"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/packaging-ios-projects-in-unreal-engine?application_version=5.3",children:"iOS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/hardware-and-software-specifications-for-unreal-engine",children:"Mac Specific Software Requirements"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine",children:"Setting up Visual Studio for Unreal on Windows"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"hardware-requirements",children:["Hardware Requirements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hardware-requirements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For Hardware Requirements with Unreal please refer to ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/hardware-and-software-specifications-for-unreal-engine?application_version=5.3",children:"these docs"})]}),`
`,e.jsxs(n.h2,{id:"packaging-for-ios",children:["Packaging for iOS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#packaging-for-ios",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"provisioning",children:["Provisioning",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#provisioning",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For iOS apps you also need to setup provisioning, ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-ios-tvos-and-ipados-provisioning-profiles-and-signing-certificates-for-unreal-engine-projects?application_version=5.3",children:"following these docs"})]}),`
`,e.jsxs(n.h3,{id:"social-sign-in",children:["Social Sign In",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#social-sign-in",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Google"}),": Please ensure you have a proper [GoogleClientID] set in ",e.jsx(n.code,{children:"[YourProject/Config/SequenceConfig.ini]"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Apple"}),": Please ensure you have a proper [AppleClientID] set in ",e.jsx(n.code,{children:"[YourProject/Config/SequenceConfig.ini]"}),", be sure you register and set your bundle identifier properly for your app"]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Apple Specific Requirements"})}),`
`,e.jsx(n.p,{children:"For Apple sign in to work please be sure to register the [RedirectUrl] in [YourProject/Config/SequenceConfig.ini] appropriately for your app."}),`
`,e.jsxs(n.h2,{id:"packaging-for-android",children:["Packaging for Android",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#packaging-for-android",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"android-sdk--ndk",children:["Android SDK / NDK",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#android-sdk--ndk",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`When setting up your project to build for Android you'll need to update the following settings:
In ProjectSettings/Android SDK
Set SDK API Level to Android-34
Set NDK API Level to anything in the range [26,33] (We recommend using android-32)`}),`
`,e.jsxs(n.h3,{id:"social-sign-in-1",children:["Social Sign In",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#social-sign-in-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Google:"})," In order to be able to properly use Google Auth, create and place the Keystore file by following ",e.jsx(n.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/signing-android-projects-for-release-on-the-google-play-store-with-unreal-engine?application_version=5.1",children:"these instructions"}),"."]}),`
`,e.jsxs(n.p,{children:["You will also need to generate an [Android client ID] and a [Web Application client ID] for your application. And place the [Web Application client ID] in the ",e.jsx(n.code,{children:"[YourProject/Config/SequenceConfig.ini]"}),", [GoogleClientID] field."]}),`
`,e.jsxs(n.p,{children:["Refer to ",e.jsx(n.a,{href:"https://developers.google.com/identity/one-tap/android/get-started#api-console",children:"these docs"})," to generate [Android client ID] and [Web Application client ID]."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://https://developers.google.com/android/guides/client-auth?hl=es-419",children:"This guide"})," helps explain how to collect SHA-1 key fingerprints for the [Android client ID]."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Apple:"})," Please ensure you have a proper [AppleClientID] set in ",e.jsx(n.code,{children:"[YourProject/Config/SequenceConfig.ini]"})]}),`
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
`]})]})}function s(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{s as default,a as frontmatter};
