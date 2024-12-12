import{d as i,j as e}from"./index-C-ai72IW.js";const s={title:"Sequence Indexer - Blockchain Token and NFT Data Query Tool",description:"The Sequence Indexer is a web3 service for querying blockchain token and NFT data from Ethereum-compatible networks. It automatically indexes ERC20, ERC721, and ERC1155 tokens, with high reliability and low latency."};function a(t){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"indexer",children:["Indexer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#indexer",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"The Sequence Indexer is a modular web3 service that makes it easy to query blockchain token and NFT data from Ethereum-compatible networks. The Indexer automatically indexes every ERC20, ERC721 and ERC1155 token from Ethereum-compatible chains."}),`
`,e.jsxs(n.p,{children:[`The Sequence Indexer is a powerful tool that can be used to build wallets, games, and dapps that
need to query on-chain data. It is designed to be fast, reliable, and easy to use. It leverages
the `,e.jsx(n.a,{href:"/api/node-gateway",children:"Sequence Node Gateway"}),` which monitors nodes health, intelligently routes
requests to the available nodes and caches the most recent request responses. This means that Node
providers going down are no longer a problem, as the Node Gateway will automatically route to a
healthy provider making sure that Indexer always stays at the top of the chain with no downtime.`]}),`
`,e.jsx(n.p,{children:`The other benefit of using the Indexer is that it is using built in-house, next-generation, LSM-tree
based databases to store the data. It makes it super fast to query and index data. The data is
available in real-time with low latency. You can query it using a simple REST API or one of our SDKs.`}),`
`,e.jsxs(n.p,{children:[`The Indexer API allows you to query all token balances, history and other information for
all Ethereum compatible chains. In order to make it one go to place for all your token data needs,
we have included `,e.jsx(n.a,{href:"/api/metadata/overview",children:"Sequence Metadata"}),` support for all tokens. This means that
you can easily render tokens in your apps, games, or wallets without the need to fetch metadata from
a separate API.`]}),`
`,e.jsx(n.p,{children:`In fact, the Sequence Wallet uses the Indexer behind the scenes so it can seamlessly
render all token information in any wallet. But of course, the Indexer is a modular piece
of infrastructure, and you may use it directly from your dapp, game, or even from
a server.`}),`
`,e.jsx(n.strong,{children:"Features:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Super-fast API to query all token balances, history, metadata and NFTs with multi-chain support"}),`
`,e.jsx(n.li,{children:"Real-time indexing of ERC20, ERC721 and ERC1155 transactions across EVM-compatible chains"}),`
`,e.jsx(n.li,{children:"Automatically detects all tokens on the chain, without the need for a contract registry"}),`
`,e.jsx(n.li,{children:"Resilient to node failures and chain re-organizations"}),`
`,e.jsx(n.li,{children:"Easily listen for specific events and transactions on-chain accurately with a simple API"}),`
`,e.jsx(n.li,{children:"Built-in token / nft metadata support to easily render tokens in your apps / games"}),`
`,e.jsx(n.li,{children:"High uptime and availability"}),`
`]}),`
`,e.jsxs(n.h2,{id:"supported-networks--endpoints",children:["Supported Networks & Endpoints",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported-networks--endpoints",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["You can see the ",e.jsx(n.a,{href:"/solutions/technical-references/chain-support",children:"full list of supported networks here"}),"."]}),`
`,e.jsxs(n.h2,{id:"getting-started",children:["Getting Started",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Here are a few example queries you can make to a blockchain from your dapp, game, or wallet:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/indexer/examples/fetch-tokens",children:"Fetch all tokens & NFTS in any wallet including all metadata"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/indexer/examples/transaction-history",children:"Fetch the transaction history for any wallet address"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/indexer/examples/unique-tokens",children:"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/indexer/examples/unique-tokens",children:`What is the total token supply of an ERC20 token? What is the total token supply of
all the ERC1155 tokens in a particular contract?`})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/indexer/examples/transation-history-token-contract",children:"Fetch the transaction history for any token contract address"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/api/indexer/examples/webhook-listener",children:"Listen to transactions for particular tokens/contracts/addresses via webhooks"})}),`
`]})]})}function o(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{o as default,s as frontmatter};
