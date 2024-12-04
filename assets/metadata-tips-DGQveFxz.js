import{d as s,j as e}from"./index-CpFhgZ0i.js";const o={title:"Controlling Spam with Metadata Options in Sequence Indexer RPC Calls",description:"The Metadata Tips & Notes on Spam guide explains how Sequence Indexer and Metadata services capture blockchain data in real-time, following ERC20, ERC721, and ERC1155 standards.",sidebar_label:"Metadata Tips & Spam"};function a(n){const t={a:"a",code:"code",div:"div",em:"em",h1:"h1",header:"header",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"metadata-tips--notes-on-spam",children:["Metadata Tips & Notes on Spam",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metadata-tips--notes-on-spam",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.p,{children:[`The Sequence Indexer and Sequence Metadata services will pick up everything and anything
that is published on a blockchain. Our services are designed to provide data in real-time
as blocks are mined, and adhere to all popular ERC20, ERC721 and ERC1155 metadata
standards so things `,e.jsx(t.em,{children:"just work"}),"."]}),`
`,e.jsx(t.p,{children:`This is very helpful for your applications to be able to have access to the complete set of data
on-chain, but it also means it will include spam tokens when querying with default settings.`}),`
`,e.jsxs(t.p,{children:["To combat spam, we introduced ",e.jsx(t.code,{children:"metadataOptions"}),` arguments which can be passed to Indexer RPC
calls to control the results returned.`]}),`
`,e.jsxs(t.p,{children:[`The Sequence Metadata service keeps track of contracts which are "verified" by checking popular
sources like Coingecko, OpenSea, Sequence Builder (`,e.jsx(t.a,{href:"https://sequence.build",children:"https://sequence.build"}),`) and the Sequence Token
Directory (`,e.jsx(t.a,{href:"https://github.com/0xsequence/token-directory",children:"https://github.com/0xsequence/token-directory"}),`). By calling the Indexer RPC methods with
`,e.jsx(t.code,{children:'"metadataOptions": { "verifiedOnly": true }'}),`, any contract address which has not been verified, will
be omitted from the results. We recommend using this option all the time, but, the downside is
if your project's contracts are unverified, then they will also be omitted from the results. To help
with this, your options are to get verified with one of the sources above, or in your RPC calls to pass
`,e.jsx(t.code,{children:'"metadataOptions": { "verifiedOnly": true, "includeContracts": ["0x631998e91476DA5B870D741192fc5Cbc55F5a52E", "0x8bb759bb68995343ff1e9d57ac85ff5c5fb79334"] }'}),`
as an example.`]})]})}function r(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{r as default,o as frontmatter};
