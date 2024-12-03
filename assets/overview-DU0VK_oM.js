import{d as i,j as e}from"./index-C7MgXwJy.js";const r={title:"Sequence - Web3 Gaming Platform - Embedded Wallet Architecture",description:"Documentation for Embedded Wallet Architecture for the Sequence infrastructure stack for web3 gaming."};function a(n){const t={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"overview",children:["Overview",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.h2,{id:"embedded-wallet-architecture",children:["Embedded Wallet Architecture",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-wallet-architecture",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Sequence Embedded Wallets are native smart contract multisig wallets. The configuration of the multisig is 2/2, where both parties are required to sign in order to submit a transaction."}),`
`,e.jsx(t.p,{children:"Unlike the more traditional MPC architecture where the keys are first created together and then separated, Sequence WaaS keys are always kept separate and never have to be combined to sign."}),`
`,e.jsx(t.p,{children:"On top of this core security layer, Sequence WaaS architecture offers additional protections:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Sequence Auth:"})," Running in an encrypted AWS Nitro Enclave, Sequence Auth acts as the first signer and it's locked into the latest publicly audited version by Quantstamp. Sequence doesn't have the ability to access the enclave or push updates to it without Quantstamp's approval."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Sequence Guard:"})," Running independently from Sequence Auth, Guard is capable of reviewing both the user's identity and intent before signing transactions."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"OpenID Connect Compatibility:"})," Sequence WaaS leverages established OpenID Connect providers such as Google, Apple and any other provider that follows the same protocol. Unlike any other solution on the market, WaaS also allows developers to leverage their own OIDC identifiers with these services."]}),`
`]}),`
`,e.jsxs(t.h2,{id:"sequence-auth",children:["Sequence Auth",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-auth",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Sequence Auth is an API service that runs on the ",e.jsx(t.a,{href:"https://aws.amazon.com/ec2/nitro/nitro-enclaves/",children:"AWS Nitro Enclaves"})," platform and provides an authentication signer which contributes to the 2/2 multisig configuration per user wallet. Sequence Auth provides a simple way to add account creation, login, session management, and wallet support to your app, enabling applications to provide traditional web experiences (i.e. social login, email login, etc.) while providing access to crypto wallets to interact with smart contracts."]}),`
`,e.jsxs(t.h3,{id:"waas-configuration-key",children:["WaaS Configuration Key",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#waas-configuration-key",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"For every new instance, a WaaS Configuration Key is used to authenticate an App or Game Client. This provides access to the blockchain through the WaaS SDK via the generated intents sent to Sequence Auth. Within a configuration key multiple Login Provider client ID's can be registered, which each individually determine the wallet addresses generated per Provider. This means, if a client ID for a Login Provider (e.g. Google or Apple) is shared across instances, users using the same Login Provider with authentication credentials will yield the same address."}),`
`,e.jsxs(t.h3,{id:"wallet-private-keys",children:["Wallet Private Keys",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallet-private-keys",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Wallet private keys are stored encrypted using a split responsibility strategy between Sequence and Quantstamp:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Sequence is able to access only the encrypted blobs stored in the database with no means of decryption."}),`
`,e.jsxs(t.li,{children:["Quantstamp owns and operates the ",e.jsx(t.a,{href:"https://aws.amazon.com/kms/",children:"KMS"})," (AWS hardware security module) used to encrypt the wallet key data. They have no way to export the key material and no access to the encrypted data itself."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"waas-enclave",children:["Waas Enclave",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#waas-enclave",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The WaaS Enclave is the only entity able to use the encrypted wallet data. Its security is guaranteed by:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"The AWS Nitro hypervisor generates and signs a cryptographic attestation based on the actually running enclave code. The document includes a PCR0 (a hash of the enclave code) signed by the Amazon Public Key Infrastructure."}),`
`,e.jsx(t.li,{children:"The KMS operated by the Trusted Third Party specifies a policy that only allows access to the cryptographic operations if the attestation is valid and the PCR0 hash of the enclave matches the expected value. This means that any - even the smallest - change to the enclave will result in a different attestation and PCR0 hash, effectively invalidating it."}),`
`,e.jsxs(t.li,{children:["The enclave code is open source and anyone may audit it and verify that the service uses the exact audited version of the source code. ",e.jsx(t.a,{href:"/solutions/wallets/embedded-wallet/architecture/enclave-verification",children:"Learn more about verification"}),"."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Sequence Auth source code is ",e.jsx(t.a,{href:"https://github.com/0xsequence/waas-authenticator",children:"publicly available and independently audited"}),", and the safeguards described above ensure it cannot be tampered with by any party."]}),`
`,e.jsxs(t.h2,{id:"sequence-guard",children:["Sequence Guard",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-guard",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Sequence Guard is a service hosted by Sequence and is the other key of the wallets which contributes to the 2/2 configuration per wallet. It's meant to be another line of defense, verifying not only user's ",e.jsx(t.em,{children:"identity"})," but also their ",e.jsx(t.em,{children:"intent"}),". It achieves this in two different ways:"]}),`
`,e.jsx(t.p,{children:"1 - Limits and allowlists: you can (from the development dashboard) configure what kind of actions are allowed, this means that the guard will only sign transactions within these constraints. For example, you can define that only NFT contract X can be called, and the guard will enforce that no other transactions can take place."}),`
`,e.jsxs(t.p,{children:["2 - Authenticating the user: the Sequence Guard will authenticate the user ",e.jsx(t.strong,{children:"independently of Sequence Auth"}),", it performs this action either by using a 3rd party OAuth 2.0 id token (from Meta, Google, X, etc.) or by directly communicating with the user via email/phone number with an OTP code. The direct communication is not always required and, when it does happen, it's seamless and branded with your project details."]}),`
`,e.jsxs(t.h3,{id:"threat-model",children:["Threat model",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#threat-model",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["With these safeguards in place wallets are ",e.jsx(t.strong,{children:"safe"})," against the following scenarios:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Sequence.app backend is compromised, or guard keys are leaked: in this scenario, the user's identity must still be verified by Sequence Auth."}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Sequence Auth is compromised: in this scenario the Sequence Guard protects the wallets, because it independently authenticates the user, an attacker in this scenario wouldn't be able to access any wallets."}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"The model also provides partial protection against the scenario:"}),`
`,e.jsxs(t.ol,{start:"3",children:[`
`,e.jsx(t.li,{children:"Partner frontend is compromised, or MITM on the partner side: If an attacker were to be able to vulnerate the frontend of the partner, it could gain access to wallets at the time of login, but it cannot gain access to wallets of users who are currently inactive. This means that recovery from such a scenario is possible, with limited damage."}),`
`]}),`
`,e.jsxs(t.h2,{id:"simplified-data-flow",children:["Simplified Data Flow",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#simplified-data-flow",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Below we illustrate the data flow of a common use case such as signing a transaction via embedded wallets."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/diagrams/waas/waas-flow.png",alt:"data-flow-architecture"})}),`
`,e.jsx(t.aside,{"data-callout":"note",children:e.jsx(t.p,{children:`Simplified layout describing the lifecycle of a transaction on the WaaS system.
Blue: Software provided by the partner
Orange: Software provided by Sequence but run and managed by the partner
Yellow: Software provided and run by Sequence in a secure AWS Nitro Enclave
Green: Software provided and run by Sequence`})}),`
`,e.jsxs(t.h4,{id:"1-generation-of-the-intent",children:["1. Generation of the Intent",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-generation-of-the-intent",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:'The user interacts with the client to "do something" that requires an action on behalf of the wallet (i.e. send some USDC or call a contract method).'}),`
`,e.jsxs(t.p,{children:["The client asks the ",e.jsx(t.code,{children:"WaaS SDK"})," to generate an intent for such an action; this intent is signed with the session keys of the client. This session key is a generated key that is only valid while that OAuth session is valid. Every intent sent to the WaaS backend is first signed by this session key to validate that there is an active, authenticated session on the user side."]}),`
`,e.jsxs(t.h4,{id:"2-sdk-forwards-intent-to-sequence-auth",children:["2. SDK Forwards Intent to Sequence Auth",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-sdk-forwards-intent-to-sequence-auth",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:`The intent and its corresponding signature are sent to the Sequence Auth service running on an AWS Nitro Enclave.
Sequence Auth asks WaaS API to build a transaction for the given intent and then validates that the transaction does not deviate from the original intent. On successful validation, Sequence Auth signs the transaction and forwards the transaction, intent, and signature to the WaaS API.`}),`
`,e.jsxs(t.h4,{id:"4-waas-api-collects-signature-from-sequence-guard",children:["4. WaaS API Collects Signature from Sequence Guard",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-waas-api-collects-signature-from-sequence-guard",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:'WaaS API receives a "half-signed" transaction request, alongside an intent that has been signed by the client. It needs to collect one more signature before being able to relay the transaction, so it calls Sequence Guard.'}),`
`,e.jsxs(t.h4,{id:"5-sequence-guard-authenticates-the-user",children:["5. Sequence Guard Authenticates the User",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-sequence-guard-authenticates-the-user",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Sequence Guard receives a signature request for a given wallet. It verifies that the intent exists, corresponds to the transaction, and has been signed by a valid session. If everything is correct, it signs the transaction."}),`
`,e.jsxs(t.h4,{id:"6-relay-and-transaction-receipt",children:["6. Relay and Transaction Receipt",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#6-relay-and-transaction-receipt",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["WaaS API relays the transaction and waits for the receipt. The resulting ",e.jsx(t.code,{children:"txHash"})," is piped back to the client."]})]})}function o(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{o as default,r as frontmatter};
