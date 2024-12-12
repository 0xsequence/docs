import{d as c,j as e,e as i}from"./index-DQFoQAFR.js";/* empty css                                */const r={title:"Deploying a Web3 Game Item Contract in Sequence Builder",description:"This guide provides a detailed walkthrough on setting up and deploying a Web3 Game Item contract in Builder. It discusses the differences between ERC721 and ERC1155 contracts, walks through the steps of deploying a contract."};function s(n){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"how-to-deploy-an-item-collection-contract-in-sequence-builder",children:["How to Deploy an Item Collection Contract in Sequence Builder",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-deploy-an-item-collection-contract-in-sequence-builder",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"This guide walks through how to setup and deploy a Web3 Game Item contract in Builder."}),`
`,e.jsxs(i,{type:"warning",children:[e.jsx(t.p,{children:"Prerequisite: Create a Project"}),e.jsxs(t.p,{children:["This guide assumes that you have already ",e.jsx(t.a,{href:"/solutions/builder/getting-started",children:"signed up for Builder and created a Project"}),"."]})]}),`
`,e.jsxs(t.h4,{id:"erc721-vs-erc1155",children:["ERC721 vs. ERC1155",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#erc721-vs-erc1155",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Both contracts mint NFTs, but ERC721, being the earlier standard, has gained widespread adoption, particularly in digital collectibles. Known for its simplicity and ease to audit for security, ERC721 tokens are distinct, contributing to their recognition in various NFT marketplaces. Typically you would use an ERC721 contract if: you're dealing with the single same asset, multiplied, or a multiplicity of 1 item with many in a collection"}),`
`,e.jsxs(t.p,{children:["Example ",e.jsx(t.code,{children:"ERC721"}),": ",e.jsx(t.a,{href:"https://etherscan.io/token/0xed5af388653567af2f388e6224dc7c4b3241c544",children:"Azuki"})]}),`
`,e.jsx(t.p,{children:"In contrast, ERC1155 offers versatility with efficient batch operations for both fungible and non-fungible tokens in a single contract, where typically you would be dealing with a multiplicity of a many items to many quanties relationship. However, this flexibility introduces complexity, necessitating careful security attention."}),`
`,e.jsxs(t.p,{children:["Example ",e.jsx(t.code,{children:"ERC1155"}),": ",e.jsx(t.a,{href:"https://polygonscan.com/token/0x631998e91476da5b870d741192fc5cbc55f5a52e",children:"Skyweaver"})]}),`
`,e.jsxs(t.h2,{id:"step-1-navigate-to-contracts",children:["Step 1: Navigate to contracts",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-1-navigate-to-contracts",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Start by selecting your ",e.jsx(t.code,{children:"project"})," in the top left and corner for what you want to create the collectible for, and head to the ",e.jsx(t.code,{children:"contracts"})," section and select ",e.jsx(t.code,{children:"+ Deploy new contract"})]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/deploy_new_contract.png",alt:"select project and new contract"})}),`
`,e.jsxs(t.h2,{id:"step-2-choose-your-collectible-type",children:["Step 2: Choose your collectible type",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-2-choose-your-collectible-type",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Then make your choice of Web3 Game Item Collection (ERC1155) or NFT Collection (ERC721), for this example we'll walk you through a Web3 Game Item Collection (ERC1155)"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/select_web3_game_item.png",alt:"select game item"})}),`
`,e.jsx(i,{type:"warning",children:e.jsxs(t.p,{children:["The only difference in deployment between an ",e.jsx(t.code,{children:"ERC1155"})," vs ",e.jsx(t.code,{children:"ERC721"}),` is that you
add a `,e.jsx(t.code,{children:"symbol"})," to an ERC721 NFT Collection"]})}),`
`,e.jsxs(t.h2,{id:"step-3-specify-contract-details",children:["Step 3: Specify contract details",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-3-specify-contract-details",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Complete the contract details by specifying a ",e.jsx(t.code,{children:"Contract Name"})," and ",e.jsx(t.code,{children:"Owner"})," for your contract, with the option to input Royalties. Make sure the Owner address is the Sequence Wallet in the top-right hand corner and that you have funds in this wallet on mainnet, otherwise on testnet - we sponsor these transactions for you."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/deploy_game_item.png",alt:"deploy game item"})}),`
`,e.jsxs(i,{type:"danger",children:[e.jsx(t.p,{children:"Note:"}),e.jsxs(t.p,{children:["While you can change the ",e.jsx(t.code,{children:"name"})," later in the builder interface where it will update across the sequence stack, popular explorers do not reindex the information, so what you put first remains"]})]}),`
`,e.jsxs(t.h2,{id:"step-4-deploy-your-contract",children:["Step 4: Deploy your contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-4-deploy-your-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Deploy your contract from the popup window at ",e.jsx(t.a,{href:"http://sequence.app/sign-transaction",children:"http://sequence.app/sign-transaction"}),", and sign the message by selecting ",e.jsx(t.code,{children:"confirm"})]}),`
`,e.jsx("img",{src:"/img/collectibles/sign_deploy_transaction.png",width:"200",alt:"Deploy your contract by signing the message in the popup window from the Sequence Wallet"}),`
`,e.jsx(i,{type:"info",children:e.jsx(t.p,{children:"All testnets will be free to transact on."})}),`
`,e.jsxs(t.h3,{id:"optional-add-a-minter-role-to-the-contract",children:["Optional: Add a Minter Role to the contract",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optional-add-a-minter-role-to-the-contract",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Sequence contracts have Access Control options by default. In some cases, you may want to grant a specific address permissions in order to call various functions such as ",e.jsx(t.code,{children:"mint()"}),"."]}),`
`,e.jsxs(t.p,{children:["First start by selecting your contract you just deployed in the ",e.jsx(t.code,{children:"contracts"})," section"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/select_deployed_contract.png",alt:"select contract"})}),`
`,e.jsxs(t.p,{children:["Next, head to the ",e.jsx(t.code,{children:"Write Contract"})," section"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/select_item_write_contract.png",alt:"write contract"})}),`
`,e.jsxs(t.p,{children:["In the ",e.jsx(t.code,{children:"grantRole"})," section of the write contract tab navigation"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/grant_role_game_item.png",alt:"grant role"})}),`
`,e.jsx(t.p,{children:"Complete with the following details:"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"bytes32 role"}),": ",e.jsx(t.code,{children:"0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"}),`
`,e.jsx(t.code,{children:"address account"}),": ",e.jsx(t.code,{children:"<Wallet Address>"})]}),`
`,e.jsx(t.p,{children:"Where the wallet address is the address that you would like to give permissions to mint to, specifically any Sequence wallet."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/copy_address_game_item.png",alt:"copy address"})}),`
`,e.jsxs(t.p,{children:["Complete by selecting ",e.jsx(t.code,{children:"write"})," and signing the transaction in the popup window, like before"]}),`
`,e.jsxs(t.p,{children:["With a confirmation message showing ",e.jsx(t.code,{children:"Response Success"})]}),`
`,e.jsx(i,{type:"info",children:e.jsxs(t.p,{children:["The role string inputted is the result of ",e.jsx(t.code,{children:'solidityPackedKeccak256("MINTER_ROLE")'}),` in
solidity or `,e.jsx(t.code,{children:'ethers.solidityPackedKeccak256(ethers.toUtf8Bytes("MINTER_ROLE"))'}),`
in javascript`]})}),`
`,e.jsx(i,{type:"tip",children:e.jsxs(t.p,{children:[`It's a typical pattern to use offchain compute like a cloudflare worker with a
relayer wallet sending transactions, which would be inputted in the account
field, more on how to accomplish this
`,e.jsx(t.a,{href:"/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api",children:"here"})]})}),`
`,e.jsxs(t.h2,{id:"step-6-mint-tokens-to-your-wallet-address",children:["Step 6: Mint tokens to your wallet address",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-6-mint-tokens-to-your-wallet-address",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Navigate to the ",e.jsx(t.code,{children:"mint"})," card in the ",e.jsx(t.code,{children:"Write Contract"})," section and input the ",e.jsx(t.code,{children:"to"})," being the wallet address you would like to receive the token to, the ",e.jsx(t.code,{children:"tokenId"})," (typically starting at 0), and ",e.jsx(t.code,{children:"amount"})," of tokens, and finally the ",e.jsx(t.code,{children:"data"})," section you can just input ",e.jsx(t.code,{children:"0x00"}),", which typically represent Additional data with no specified format."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/mint_game_item.png",alt:"mint tokens"})}),`
`,e.jsxs(t.h2,{id:"step-7-confirm-your-minted-collectible",children:["Step 7: Confirm your minted collectible",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-7-confirm-your-minted-collectible",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"And you're done!"}),`
`,e.jsxs(t.p,{children:["You can view the transactions submitted to the blockchain for your wallet address in the ",e.jsx(t.code,{children:"Transactions"})," tab navigation"]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/collectibles/transactions_game_items.png",alt:"view currency transactions"})})]})}function l(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{l as default,r as frontmatter};
