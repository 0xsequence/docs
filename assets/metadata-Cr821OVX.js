import{d as s,j as e}from"./index-CvNRvsv1.js";const o={title:"Sequence Metadata API - Documentation and Endpoints",description:"The Sequence Metadata API service allows for querying, managing, and updating collections, token & NFT metadata for Ethereum-compatible chains. To access, obtain a Service Account & Token through Sequence Builder Console."};function a(n){const t={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"metadata-api",children:["Metadata API",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metadata-api",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.aside,{"data-callout":"note",children:e.jsx(t.p,{children:e.jsx(t.a,{href:"https://0xsequence.redoc.ly/tag/metadata",children:"Metadata API documentation and endpoints"})})}),`
`,e.jsx(t.p,{children:"The Sequence Metadata API service offers a simple and fast API to query, manage, and update collections, token & NFT metadata for Ethereum-compatible chains."}),`
`,e.jsx(t.aside,{"data-callout":"info",children:e.jsxs(t.p,{children:["Our Metadata service is managed through ",e.jsx(t.a,{href:"HTTPS://SEQUENCE.BUILD",children:"Sequence Builder Console"})," and requires a Service Account & Token in order to call the corresponding endpoints. Please follow the ",e.jsx(t.a,{href:"/api/metadata#obtaining-a-service-account--token",children:"section"})," below prior to calling the endpoints"]})}),`
`,e.jsxs(t.h2,{id:"obtaining-a-service-account--token",children:["Obtaining a Service Account & Token",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#obtaining-a-service-account--token",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Since the Metadata API requires write access in order to update on-chain state, you will need to first obtain a Service Account & Token to call this from your backend. Importantly, this is a secret key and should not be exposed publicly."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Create a New Project using our ",e.jsx(t.a,{href:"https://sequence.build",children:"Builder"}),". Navigate to Settings > API Keys > Add Service Account."]}),`
`,e.jsx(t.li,{children:"In the modal that pops up, click the dropdown for Permission and change to Write. After completed click Add."}),`
`,e.jsx(t.li,{children:"On the next screen, you will be given your Secret API Token. Copy the key and store it securely as it is not possible to see it again. Once this is done, click Confirm and you are all set to utilize the API."}),`
`]}),`
`,e.jsx(t.p,{children:"Keep in mind, in contrast to our Public API Access key - this Secret API Token should be stored securely and not be used publicly. You will pass this token as a normal JWT in the Request Headers as X-Access-Key"}),`
`,e.jsxs(t.h2,{id:"creating-collections-tokens-and-managing-metadata",children:["Creating Collections, Tokens, and Managing Metadata",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-collections-tokens-and-managing-metadata",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The below steps walk through an end to end example utilizing our Metadata API in order to deploy an NFT collection, create tokens within that collection, and deploy asset metadata to such as an image to that token."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsxs(t.a,{href:"https://0xsequence.redoc.ly/tag/metadata#operation/metadata-CreateCollection",children:["Call ",e.jsx(t.code,{children:"CreateCollection"})," endpoint"]})," - ensure you pass in the Secret Service Token created in the prior section."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"CreateToken"})," - use returned collectionId from previous request"]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"CreateAsset"})," - use collectionId and your tokenId"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["set ",e.jsx(t.code,{children:"metadataField"})," (assetType) to one of the following",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"image"}),`
`,e.jsx(t.li,{children:"animation_url"}),`
`,e.jsx(t.li,{children:"audio"}),`
`,e.jsx(t.li,{children:"video"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Upload file with PUT method to this endpoint ",e.jsx(t.code,{children:"PUT {metadata-server}/projects/{projectId}/collections/{collectionId}/tokens/{tokenId}/upload/{assetIdOrAssetType}"}),'- use assetId that is returned in step 3 OR, you can pass assetType, such as "image"']}),`
`]}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["For example you can upload to ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/1/upload/image",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/1/upload/image"}),' which will find the asset of the type "image" for the token, and will upload there.',`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["You can also pass in the assetId if you prefer, i.e., PUT ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/assets/1/upload",children:"https://metadata.sequence.app/projects/486/collections/1/assets/1/upload"})]}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"Asset types include: image, audio, video, animation_url"}),`
`]}),`
`,e.jsxs(t.ol,{start:"5",children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Asset is now privately accessible with JWT token at ",e.jsx(t.code,{children:"GET {metadata-server}/projects/{projectID}/collections/{collectionID}/tokens/{tokenID}/asset/{assetType}"})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["for example: ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/1/asset/image",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/1/asset/image"})]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"PublishCollection"})," -- this sets the collection to be accessible by the public"]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"GetCollection"})," -- will return both baseURIs for contract and token level metadata."]}),`
`]}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Collection-level metadata (aka contract-level) metadata: ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1",children:"https://metadata.sequence.app/projects/486/collections/1"})," or ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1.json",children:"https://metadata.sequence.app/projects/486/collections/1.json"})]}),`
`,e.jsxs(t.li,{children:["Token-level metadata: ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/%7BtokenId%7D",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/{tokenId}"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["ie. ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/1",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/1"})," or ",e.jsx(t.a,{href:"https://metadata.sequence.app/projects/486/collections/1/tokens/1.json",children:"https://metadata.sequence.app/projects/486/collections/1/tokens/1.json"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.ol,{start:"8",children:[`
`,e.jsx(t.li,{children:"Finally, to use the metadata in your contract, simply update your contract's metadata base URIs to the values above, and everything will simply work."}),`
`]}),`
`,e.jsxs(t.p,{children:[`Below is an architecture demonstrating the steps above of how an NFT collection (ERC721 or ERC1155) is created and managed.
`,e.jsx(t.img,{src:"/img/metadata/metadata_api_architecture.png",alt:"Sequence Support"})]}),`
`,e.jsxs(t.h2,{id:"pricing--usage",children:["Pricing & Usage",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pricing--usage",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["The Sequence Metadata is available for free with moderate request limits, but if your project requires higher limits, please contact the ",e.jsx(t.a,{href:"https://sequence.xyz",children:"Sequence"})," team."]})]})}function c(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{c as default,o as frontmatter};
