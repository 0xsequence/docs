import{d as r,j as e,e as t}from"./index-C-ai72IW.js";/* empty css                                */const d={title:"Configuring Apple Auth for Embedded Wallet - Step-by-Step Guide",description:"Learn how to configure Apple auth for your Embedded Wallet by creating an Apple client in the Apple Developer Console. Follow step-by-step instructions to create App Identifier and App ID for iOS or web applications."};function o(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"apple-auth-configuration-for-embedded-wallet",children:["Apple Auth Configuration for Embedded Wallet",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#apple-auth-configuration-for-embedded-wallet",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"In order to have Apple auth integrated into your Embedded Wallet instance, you should configure an Apple client in the Apple Developer Console. Depending on whether you are integrating Embedded Wallet into an iOS or web application, you should pick the correct configuration accordingly."}),`
`,e.jsxs(n.h2,{id:"create-app-identifier",children:["Create App Identifier",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-app-identifier",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To start with, access the ",e.jsx(n.a,{href:"https://developer.apple.com/account/",children:"Apple Developer Console"})," and navigate to Certificates > Identifiers. Once there, click on the ",e.jsx(n.code,{children:"+"})," button to create a new identifier."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/1.png",alt:"Apple Developer Console Identifiers"})}),`
`,e.jsx(n.p,{children:"Whether you are configuring for an iOS application or not, you need an App ID. Select App IDs and click Continue."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/7.png",alt:"Apple Developer Console Identifier Creation"})}),`
`,e.jsxs(n.h2,{id:"create-app-id",children:["Create App ID",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#create-app-id",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Provide the following in the form:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Description"}),`
`,e.jsx(n.li,{children:"Bundle ID: This is the unique bundle identifier for your iOS project. If you are configuring for a web application, you can provide a placeholder value."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/5.png",alt:"Apple Developer Console App ID Creation"})}),`
`,e.jsx(n.p,{children:"Before you continue, you will need to enable the Sign In with Apple capability for the App ID. Scroll down to the Capabilities section and enable the Sign In with Apple capability."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/6.png",alt:"Apple Developer Console App ID Creation"})}),`
`,e.jsx(n.p,{children:"Click Continue, and then Register to create the App ID."}),`
`,e.jsx(n.p,{children:"At this stage if you are configuring only for an iOS application, you can skip the next section and proceed to using your Bundle ID as your Client ID in Sequence Builder."}),`
`,e.jsxs(n.h2,{id:"configure-web-services-id",children:["Configure Web Services ID",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configure-web-services-id",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["If you are configuring your Client ID for a web application, click on the ",e.jsx(n.code,{children:"+"})," sign on the Identifiers section and select the Services IDs option. Click Continue."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/2.png",alt:"Apple Developer Console Identifier Creation"})}),`
`,e.jsx(n.p,{children:"Then provide the following in the form:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Description"}),`
`,e.jsx(n.li,{children:"Identifier: This will be the client ID for your web application that you use to identify in the SDK and Sequence Builder."}),`
`]}),`
`,e.jsx(n.p,{children:"Click Continue, and then Register to create the identifier."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/3.png",alt:"Web Application Configuration"})}),`
`,e.jsx(n.p,{children:`Once created, click on the identifier that's now listed in the Identifiers section. You will now need to configure the domains and redirect URLs for the Services ID. To do so, click on the checkbox next to "Sign In with Apple" and then click on the Configure button.`}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/4.png",alt:"Web Application Configuration"})}),`
`,e.jsx(n.p,{children:"On the Web Authentication Configuration modal, provide the following:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Primary App ID: Select the App ID you created earlier."}),`
`,e.jsx(n.li,{children:"Domains and Subdomains: A list of domains that will be whitelisted for interacting with this Services ID."}),`
`,e.jsx(n.li,{children:"Return URLs: A list of redirect URIs that the user will be redirected to on successful authentication, Sequence SDKs will by default redirect to the same page that loads the SDK."}),`
`]}),`
`,e.jsx(t,{type:"info",children:e.jsxs(n.p,{children:["Apple Auth won't work without ",e.jsx(n.code,{children:"https"})," when testing locally. If you are registering a localhost address, we recommend that you use a tool such as ",e.jsx(n.a,{href:"https://ngrok.com/",children:"ngrok"})," to create a secure tunnel to your local server and use the ",e.jsx(n.code,{children:"https"})," URL provided by ngrok."]})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/8.png",alt:"Web Application Configuration"})}),`
`,e.jsx(n.p,{children:"Click Next, and then Done to complete the configuration, don't forget to click Continue to save the changes."}),`
`,e.jsx(n.p,{children:"Finally, add this new Service ID to your Apple configuration in Sequence Builder, which will now have two entries: one for the Bundle ID and one for the Service ID."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/embedded_wallet/apple/9.png",alt:"Web Application Configuration"})}),`
`,e.jsx(t,{type:"info",children:e.jsx(n.p,{children:"If you ever need to update the domains or redirect URLs for the Services ID, simply editing the identifier won't work. Due to aggressive caching by Apple, you will need to delete the identifier and create a new one with the updated values."})}),`
`,e.jsxs(n.h2,{id:"get-your-client-id",children:["Get Your Client ID",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-your-client-id",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"As mentioned above, for an iOS application, you can use the Bundle ID you created as your Client ID in Sequence Builder. For a web application and Android application, you can use the Service ID you registered with Apple."})]})}function c(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{c as default,d as frontmatter};
