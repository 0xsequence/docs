import{d as a,j as e}from"./index-C6pC_EDa.js";const r={title:"Enclave Verification Methods - Simple vs. Complex",description:"The WaaS enclave's security hinges on code integrity verification using verified enclaves."};function n(i){const s={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"enclave-verification",children:["Enclave verification",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enclave-verification",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"The WaaS enclave's security relies on code integrity verification."}),`
`,e.jsx(s.p,{children:"You have two verification options for a running enclave based on your risk tolerance and technical resources."}),`
`,e.jsxs(s.h2,{id:"simple-verification-method",children:["Simple Verification Method",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#simple-verification-method",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"requirements",children:["Requirements",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requirements",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The verification process works only on Linux or macOS systems. You must have updated versions of these tools installed and set up locally:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://www.docker.com/",children:"Docker"})}),`
`,e.jsx(s.li,{children:"git"}),`
`,e.jsx(s.li,{children:"make"}),`
`]}),`
`,e.jsxs(s.h3,{id:"determine-the-pcr0",children:["Determine the PCR0",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#determine-the-pcr0",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Visit this page in your browser or through curl: ",e.jsx(s.a,{href:"https://waas.sequence.app/status",children:"https://waas.sequence.app/status"}),"."]}),`
`,e.jsxs(s.p,{children:["Take note of ",e.jsx(s.code,{children:"ver"})," and ",e.jsx(s.code,{children:"pcr0"})," values for later use."]}),`
`,e.jsx(s.p,{children:"Sample output may appear like:"}),`
`,e.jsxs(s.p,{children:["Remember that the checksum can vary between runs, as it verifies the ",e.jsx(s.strong,{children:"file's"})," integrity. Conversely, the PCR0 for the same ",e.jsx(s.strong,{children:"code"})," remains constant, as demonstrated in the example above."]}),`
`,e.jsx(s.p,{children:"Sample output might look like:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'  "healthOK": true,'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'  "startTime": "2024-04-08T17:06:20.177514099Z",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'  "uptime": 167168,'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'  "ver": "v1.1.1",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'  "pcr0": "77541a3d09cdf2728417c1537d190be0998cc84f8aec95a4f1e823c91a007d97f276c2453be7f653fd73fb862b42fcee"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h3,{id:"build-the-enclave-file",children:["Build the enclave file",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build-the-enclave-file",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Clone the repository locally, substituting ",e.jsx(s.code,{children:"v1.1.1"})," with the value of ",e.jsx(s.code,{children:"ver"})," from the previous step:"]}),`
`]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"git clone -b v1.1.1 https://github.com/0xsequence/waas-authenticator.git"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cd waas-authenticator"})})]})}),`
`,e.jsxs(s.ol,{start:"2",children:[`
`,e.jsx(s.li,{children:"Run the following command, again substituting the version as before:"}),`
`]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"make VERSION=v1.1.1 eif"})})})}),`
`,e.jsxs(s.ol,{start:"3",children:[`
`,e.jsx(s.li,{children:"Compare the output of the command with the previously noted PCR0 value, for example:"}),`
`]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Output written into /out/waas-auth.v1.1.1.eif"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'BootMeasurement: Sha384 { ... }: {"HashAlgorithm": "Sha384 { ... }", "PCR0": "77541a3d09cdf2728417c1537d190be0998cc84f8aec95a4f1e823c91a007d97f276c2453be7f653fd73fb862b42fcee", "PCR1": "b7ada9ee8a3fa0a2c74c23ddd04a58f0b095d0465327b2d8461b9b81bcbc7236563ff0326c8614fe9205669636955199", "PCR2": "365294f408bcc5913b44110544bb611255d05666f89fd182900330bc117744fa563c2afcf74808b719ac7a29492099c6"}'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SHA256 checksum:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"3843b48b32b98fa311cbcd1604c0c6931f03c75075212e8bb4c06d02a3d53509  waas-auth.v1.1.1.eif"})})]})}),`
`,e.jsxs(s.p,{children:["Please note that the checksum might differ between runs as it's only used to verify the integrity of the ",e.jsx(s.strong,{children:"file"}),". However, the PCR0 for the same ",e.jsx(s.strong,{children:"code"})," will always be the same, as can be seen in the example above."]}),`
`,e.jsxs(s.h2,{id:"complex-verification-method",children:["Complex Verification Method",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#complex-verification-method",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:['The simple method allows us to compare the PCR0 of the created enclave file with the "live" enclave. This is not foolproof. A mere comparison of two values provides no real evidence. The enclave could have been tampered with, and what we see could be an illusion. Indeed, the PCR0 values for each release are available to the public (',e.jsx(s.a,{href:"https://github.com/0xsequence/waas-authenticator/releases",children:"https://github.com/0xsequence/waas-authenticator/releases"}),")."]}),`
`,e.jsxs(s.p,{children:["Here, ",e.jsx(s.em,{children:"cryptographic attestation"})," becomes necessary. We have not published tools for validation yet, but you can perform it using this AWS guide (",e.jsx(s.a,{href:"https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html",children:"https://docs.aws.amazon.com/enclaves/latest/user/verify-root.html"}),")."]}),`
`,e.jsxs(s.p,{children:["Every enclave request returns the attestation document. It comes in a Base64-encoded format in the ",e.jsx(s.code,{children:"X-Attestation-Document"})," response header. A request may also include a ",e.jsx(s.code,{children:"X-Attestation-Nonce"})," header. It contains a value that will be signed and included in the attestation document."]}),`
`,e.jsx(s.p,{children:"For example, you can get the attestation document by running:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"curl -si https://waas.sequence.app/health -H X-Attestation-Nonce:0123456789abcdef | grep x-attestation-document"})})})})]})}function c(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{c as default,r as frontmatter};
