import{d as t,j as e,e as r}from"./index-C7MgXwJy.js";/* empty css                                */const d={title:"Configuring Google OAuth Client for Embedded Wallet Integration",description:"Learn how to configure Google OAuth client for your Embedded Wallet instance. Follow steps to create OAuth Client ID for web, Android, or iOS applications."};function o(n){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"google-configuration-for-embedded-wallet",children:["Google Configuration for Embedded Wallet",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#google-configuration-for-embedded-wallet",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"In order to have Google auth integrated into your Embedded Wallet instance, you should configure a Google OAuth client in the Google Developer Console. Depending on whether you are integrating Embedded Wallet into a native mobile, desktop, or web application, you should pick the correct configuration accordingly."}),`
`,e.jsxs(i.h2,{id:"create-oauth-client-id",children:["Create OAuth Client ID",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-oauth-client-id",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["To start with, access the ",e.jsx(i.a,{href:"https://console.cloud.google.com/",children:"Google Developer Console"})," and navigate to APIs & Services > Credentials. Once there, select Create Credentials > OAuth Client ID. If you haven't yet, you might have to also configure your OAuth Consent Screen to be able to move forward."]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/img/embedded_wallet/google/1.png",alt:"Google Developer Console Credentials"})}),`
`,e.jsx(i.p,{children:"Depending on your application type, pick the Web Application, iOS or Android option:"}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/img/embedded_wallet/google/2.png",alt:"Application Type"})}),`
`,e.jsx(i.p,{children:"Remaining steps will depend on the application type you are configuring for."}),`
`,e.jsxs(i.h2,{id:"configure-web-application",children:["Configure Web Application",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configure-web-application",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"If you are configuring your Client ID for a web application, you must provide the following:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Application name"}),`
`,e.jsx(i.li,{children:"Authorized JavaScript origins: A list of domains that will be whitelisted for interacting with this Client ID."}),`
`,e.jsx(i.li,{children:"Authorized redirect URIs: A list of redirect URIs that the user will be redirected to on successful authentication, Sequence SDKs will by default redirect to the same page that loads the SDK."}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/img/embedded_wallet/google/3.png",alt:"Web Application Configuration"})}),`
`,e.jsx(r,{type:"info",children:e.jsxs(i.p,{children:["If you are adding a localhost address with a port (i.e. ",e.jsx(i.code,{children:"localhost:4444"}),") to the list of authorized origins, you must also add ",e.jsx(i.code,{children:"localhost"})," only without the port name for it to work during testing."]})}),`
`,e.jsxs(i.h2,{id:"configure-android-application",children:["Configure Android Application",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configure-android-application",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"If you are configuring your Client ID for an Android application, you must provide the following:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Application name"}),`
`,e.jsx(i.li,{children:"Package name: This is the unique application package name for your Android project."}),`
`,e.jsxs(i.li,{children:["SHA-1 Certificate Fingerprint: This is the SHA-1 fingerprint for your application bundle, you can follow the instructions on the screen to generate this using ",e.jsx(i.code,{children:"keytool"}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/img/embedded_wallet/google/4.png",alt:"Android Application Configuration"})}),`
`,e.jsxs(i.h2,{id:"configure-ios-application",children:["Configure iOS Application",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configure-ios-application",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"If you are configuring your Client ID for an iOS application, you must provide the following:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Application name"}),`
`,e.jsx(i.li,{children:"Bundle ID: This is the unique bundle identifier for your iOS project."}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/img/embedded_wallet/google/5.png",alt:"iOS Application Configuration"})}),`
`,e.jsxs(i.h2,{id:"get-your-client-id",children:["Get Your Client ID",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-your-client-id",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Once you create your application, you will be presented with a Client ID. Copy it and use it as your login provider Client ID in Sequence Builder."}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/img/embedded_wallet/google/6.png",alt:"Client ID"})})]})}function c(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{c as default,d as frontmatter};
