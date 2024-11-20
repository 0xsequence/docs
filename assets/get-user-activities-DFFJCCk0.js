import{d as n,j as s}from"./index-C0cnaLUr.js";const c={title:"Sequence - Web3 Gaming Platform - Marketplace Protocol - Marketplace UserActivities API",description:"The Marketplace API for the getUserActivities endpoint for the Sequence infrastructure stack for web3 gaming."};function r(i){const e={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"getuseractivities",children:["GetUserActivities",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getuseractivities",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Enables you to retrieve activity data for a specific user, including orders and trades. With the use of the ",s.jsx(e.code,{children:"GetUserActivities"})," api developers can build custom and personalized social or tracking experiences to follow certain users in various interfaces."]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/img/marketplace/activities.png",alt:"GetUserActivities"})}),`
`,s.jsxs(e.h3,{id:"example",children:["Example",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"GetUserActivities"})," for a user with specific token IDs:"]}),`
`,s.jsxs(e.div,{className:"code-group",children:[s.jsx(e.div,{"data-title":"cURL",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"cURL","data-lang":"shell",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"curl"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -X"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" POST"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -H"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Content-Type: application/json"'}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://marketplace-api.sequence.app/arbitrum-sepolia/rpc/Marketplace/GetUserActivities"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -d"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '{"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "orderbookContractAddress": "0xB537a160472183f2150d42EB1c3DD6684A55f74c",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "collectionAddress": "0x1693ffc74edbb50d6138517fe5cd64fd1c917709",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "currencyAddresses": ['})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    ],"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "userAddress": "0xC2Be9CF6D9ee4fd211f88620760e829792659b16",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "tokenIDs": ["1"]'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"}'"})})]})})}),s.jsx(e.div,{"data-title":"TypeScript",children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"TypeScript","data-lang":"js",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Works in both a Webapp (browser) or Node.js:"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" fetch "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "cross-fetch"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"async"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" () "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" res"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" fetch"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'    "https://marketplace-api.sequence.app/arbitrum-sepolia/rpc/Marketplace/GetUserActivities"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      method: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"POST"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      headers: {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "Content-Type"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"application/json"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      },"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      body: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"JSON"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"stringify"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "orderbookContractAddress"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xB537a160472183f2150d42EB1c3DD6684A55f74c"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "collectionAddress"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1693ffc74edbb50d6138517fe5cd64fd1c917709"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "currencyAddresses"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'            "0xa9c88358862211870db6f18bc9b3f6e4f8b3eae7"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        ],"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "userAddress"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xC2Be9CF6D9ee4fd211f88620760e829792659b16"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'        "tokenIDs"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": ["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      }),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  );"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"res"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" res."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"json"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"());"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})();"})})]})})})]}),`
`,s.jsxs(e.h3,{id:"schema",children:["Schema",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#schema",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Request: POST /api/Marketplace/GetUserActivities"}),`
`,s.jsx(e.li,{children:"Content-Type: application/json"}),`
`,s.jsxs(e.li,{children:["Body (in JSON):",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderbookContractAddress"})," (string) -- the address of the protocol contract."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"collectionAddress"})," (string) -- the address of the NFT collection."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"currencyAddresses"})," (string[]) -- an array of currency contract addresses."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"userAddress"})," (string) -- the address of the user whose activities are being queried."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenIDs"})," (string[]) -- an array of token IDs to filter the activities by."]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:["Response (in JSON):",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"page"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"page"})," (i32) -- number of the page"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pageSize"})," (i32) -- number of orders on the page"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"more"})," (bool) -- if there are more orders"]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orders"}),` (OrderbookOrder[])
[`,`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderId"})," (string) -- order id"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenContract"})," (string) -- the collection contract"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"tokenId"})," (string) -- the tokenId of the collection in the order"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"isListing"})," (bool) -- is true if it's a listing for sale, or false if it's an offer"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"quantity"})," (string) -- the number of tokens the order is for"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"quantityRemaining"})," (string) -- the number of tokens after the order"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"currencyAddress"})," (string) -- the currency the token is trading in"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"pricePerToken"})," (string) -- the price per token"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"expiry"})," (string) -- the expiry of when the order is no longer valid"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderStatus"})," (OrderStatus) -- the status of the order as an enum fom ",s.jsx(e.code,{children:'"OPEN"'}),", ",s.jsx(e.code,{children:'"CLOSED"'}),", ",s.jsx(e.code,{children:'"CANCELLED"'})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"createdBy"})," (string) -- the address the order was created by"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"createdAt"})," (uint64) -- the time the order was created"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"orderbookContractAddress"}),` (string) -- the orderbook contract address
]`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function a(i={}){const{wrapper:e}={...n(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(r,{...i})}):r(i)}export{a as default,c as frontmatter};
