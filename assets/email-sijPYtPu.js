import{d as s,j as e}from"./index-DVlcOfx1.js";const a={title:"Email + OTP",description:"undefined"};function t(i){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"email--otp",children:["Email + OTP",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#email--otp",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Available on all platforms, email sign in provides the user with a One-Time-Password (OTP) challenge - a 6 digit code emailed to the entered address for the user to enter on the next page."}),`
`,e.jsxs(n.p,{children:["First, you'll want to ",e.jsx(n.a,{href:"/solutions/builder/embedded-wallet",children:"enable email sign in for your project in the builder"}),"."]}),`
`,e.jsxs(n.p,{children:["If you're using the built-in ",e.jsx(n.code,{children:"LoginPanel"}),", the UI will manage email + OTP sign in for you automatically."]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Don't forget to subscribe to the ",e.jsx(n.code,{children:"SequenceWallet.OnWalletCreated"})," event to receive your newly created wallet!"]})}),`
`,e.jsxs(n.h2,{id:"custom-integrations",children:["Custom Integrations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-integrations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Otherwise, you'll want to call the ",e.jsx(n.code,{children:"Login(string email)"})," async Task on ",e.jsx(n.code,{children:"SequenceLogin"})," to initiate authentication with the API; this will send the OTP challenge to the specified email."]}),`
`,e.jsxs(n.p,{children:["Once the user has input their OTP code, you'll want to call the ",e.jsx(n.code,{children:"Login(string email, string code)"})," async Task on ",e.jsx(n.code,{children:"SequenceLogin"})," to finish authenticating the user."]}),`
`,e.jsx(n.p,{children:"Relevant events include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OnMFAEmailSent"})," - this event includes a string specifying the email where the OTP was sent"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OnMFAEmailFailedToSend"})," - this event includes two strings: the email where the OTP was requested and the error message"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"OnLoginFailed"})," - this event includes: the error message string, the ",e.jsx(n.code,{children:"LoginMethod"})," that was used, and the email string associated with the login attempt"]}),`
`]}),`
`]})]})}function d(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{d as default,a as frontmatter};
