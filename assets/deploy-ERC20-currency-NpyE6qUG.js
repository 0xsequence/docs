import{d as s,j as e,e as i}from"./index-C1I6LFNT.js";/* empty css                                */const a={title:"Creating In-Game Currency with ERC20 Tokens - A Step-by-Step Guide",description:"Learn how to create your own in-game currency by deploying and minting from an ERC20 contract. Understand the difference between fungible and non-fungible tokens."};function r(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"how-to-deploy-in-game-currency-in-sequence-builder",children:["How to Deploy in-game Currency in Sequence Builder",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-deploy-in-game-currency-in-sequence-builder",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"introduction",children:["Introduction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In this guide, we'll walk you through the process of creating your own in-game currency through deploying and minting from an ERC20 contract."}),`
`,e.jsx(n.p,{children:"Currency tokens add new and interesting dimensions to in-game economies, transactions, and player interactions to unlock and distribute value."}),`
`,e.jsxs(n.h4,{id:"what-is-an-erc20-token",children:["What is an ERC20 token?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-an-erc20-token",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["An ERC20 token is a digital coin - what makes it special is that it follows a ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/",children:"set of rules called ERC20"}),", making it easy to use in different places on the internet. These tokens often represent value or be used for specific purposes. Unlike the other common token - NFT's, these tokens are fungible."]}),`
`,e.jsxs(n.h4,{id:"fungibility-vs-non-fungibility",children:["Fungibility vs Non-Fungibility",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fungibility-vs-non-fungibility",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"This is the key distinction to understand."}),`
`,e.jsx(n.p,{children:"Fungible tokens (like ERC20 tokens) are interchangeable, and each unit is the same as every other unit, just like dollars or euros. They can easily be split or combined into different quantities."}),`
`,e.jsx(n.p,{children:"Non-fungible tokens (like ERC721 tokens) represent unique items with individual properties, such as digital art or collectibles. Each token is distinct and not directly exchangeable with another on a like-for-like basis."}),`
`,e.jsxs(i,{type:"warning",children:[e.jsx(n.p,{children:"Prerequisite: Create a Project"}),e.jsxs(n.p,{children:["This guide assumes that you have already ",e.jsx(n.a,{href:"/solutions/builder/getting-started",children:"signed up for Builder and created a Project"}),"."]})]}),`
`,e.jsxs(n.h2,{id:"step-1-navigate-to-contracts",children:["Step 1: Navigate to contracts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-1-navigate-to-contracts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Start by selecting your ",e.jsx(n.code,{children:"project"})," in the top left and corner for what you want to create the currency for, and head to the ",e.jsx(n.code,{children:"contracts"})," section and select ",e.jsx(n.code,{children:"+ Deploy new contract"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/select_project_new_contract.png",alt:"select project and new contract"})}),`
`,e.jsxs(n.h2,{id:"step-2-select-currency-token",children:["Step 2: Select Currency Token",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-2-select-currency-token",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Click ",e.jsx(n.code,{children:"View more contracts"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/view_more_contracts.png",alt:"view more contracts"})}),`
`,e.jsxs(n.p,{children:["Select the Currency Token contract and click ",e.jsx(n.code,{children:"deploy"})," to deploy your Sequence audited contract"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/select_currency_deploy.png",alt:"select currency and deploy button"})}),`
`,e.jsxs(n.h2,{id:"step-3-specify-contract-details",children:["Step 3: Specify contract details",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-3-specify-contract-details",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Complete the contract details by specifying a ",e.jsx(n.code,{children:"name"})," and ",e.jsx(n.code,{children:"symbol"})," for your contract."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/currency_contract_details.png",alt:"select currency and deploy button"})}),`
`,e.jsxs(i,{type:"danger",children:[e.jsx(n.p,{children:"Note:"}),e.jsxs(n.p,{children:["While you can change the ",e.jsx(n.code,{children:"name"})," and ",e.jsx(n.code,{children:"symbol"})," later in the builder interface where it will update across the sequence stack, popular explorers do not reindex the information, so what you put first remains"]})]}),`
`,e.jsxs(n.h2,{id:"step-4-deploy-your-contract",children:["Step 4: Deploy your contract",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-4-deploy-your-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Deploy your contract from the popup window at ",e.jsx(n.a,{href:"http://sequence.app/sign-transaction",children:"http://sequence.app/sign-transaction"}),", and sign the message by selecting ",e.jsx(n.code,{children:"confirm"})]}),`
`,e.jsx("img",{src:"/img/collectibles/sign_deploy_transaction.png",width:"200"}),`
`,e.jsx(i,{type:"info",children:e.jsx(n.p,{children:"All testnets will be free to transact on"})}),`
`,e.jsxs(n.h2,{id:"step-5-add-a-minter-role-to-the-contract",children:["Step 5: Add a Minter Role to the contract",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-5-add-a-minter-role-to-the-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["First start by selecting your contract you just deployed in the ",e.jsx(n.code,{children:"contracts"})," section"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/select_contract.png",alt:"select contract"})}),`
`,e.jsxs(n.p,{children:["Next, head to the ",e.jsx(n.code,{children:"Write Contract"})," section"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/select_write_contract.png",alt:"write contract"})}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.code,{children:"grantRole"})," section of the write contract tab navigation, complete with the following details:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"bytes32 role"}),": ",e.jsx(n.code,{children:"0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6"}),`
`,e.jsx(n.code,{children:"address account"}),": ",e.jsx(n.code,{children:"<Wallet Address>"})]}),`
`,e.jsx(n.p,{children:"Where the wallet address is just copied from the top right hand corner to be able to send tokens to your wallet"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/copy_address.png",alt:"copy address"})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/grant_role.png",alt:"grant role"})}),`
`,e.jsxs(n.p,{children:["Complete by selecting ",e.jsx(n.code,{children:"write"})," and signing the transaction in the popup window, like before"]}),`
`,e.jsxs(n.p,{children:["With a confirmation message showing ",e.jsx(n.code,{children:"Response Success"})]}),`
`,e.jsx(i,{type:"info",children:e.jsxs(n.p,{children:["The role string inputted is the result of ",e.jsx(n.code,{children:'solidityPackedKeccak256("MINTER_ROLE")'}),` in
solidity or `,e.jsx(n.code,{children:'ethers.solidityPackedKeccak256(ethers.toUtf8Bytes("MINTER_ROLE"))'}),`
in javascript`]})}),`
`,e.jsx(i,{type:"tip",children:e.jsxs(n.p,{children:["It's a typical pattern to use offchain compute like a cloudflare worker with a relayer wallet sending transactions, which would be inputted in the account field, more on how to accomplish this ",e.jsx(n.a,{href:"/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api",children:"here"})]})}),`
`,e.jsxs(n.h2,{id:"step-6-mint-tokens-to-your-wallet-address",children:["Step 6: Mint tokens to your wallet address",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-6-mint-tokens-to-your-wallet-address",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Navigate to the ",e.jsx(n.code,{children:"mint"})," card in the ",e.jsx(n.code,{children:"Write Contract"})," section and input your wallet address that you would like to receive tokens to and amount of tokens in 18 decimals. So for 100 tokens you would input: ",e.jsx(n.code,{children:"100000000000000000000"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/mint_currency.png",alt:"mint tokens"})}),`
`,e.jsxs(n.h2,{id:"step-7-confirm-your-minted-currency",children:["Step 7: Confirm your minted currency",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-7-confirm-your-minted-currency",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"And you're done!"}),`
`,e.jsxs(n.p,{children:["You can view the transactions submitted to the blockchain for your wallet address in the ",e.jsx(n.code,{children:"Transactions"})," tab navigation"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/collectibles/view_currency_transactions.png",alt:"view currency transactions"})})]})}function d(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default,a as frontmatter};
