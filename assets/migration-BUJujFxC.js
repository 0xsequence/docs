import{d as s,j as e}from"./index-BSmzt2_j.js";const a={title:"Migrating from another provider to Sequence Embedded Wallets",description:"Migrating from another wallet to a sequence embedded wallet"};function n(t){const i={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"migration-guide-moving-to-sequence-embedded-wallets",children:["Migration Guide: Moving to Sequence Embedded Wallets",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#migration-guide-moving-to-sequence-embedded-wallets",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.h2,{id:"overview",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"This document provides guidance for users migrating from other providers (such as Thirdweb, Venly, etc.) to Sequence's Embedded Wallets. The primary recommended approach is a Just-In-Time (JIT) migration pattern, which occurs when users log in for the first time after the migration."}),`
`,e.jsxs(i.h2,{id:"just-in-time-migration-process",children:["Just-In-Time Migration Process",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#just-in-time-migration-process",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The JIT migration process is designed to smoothly transition users from their existing wallet provider to Sequence Embedded Wallets with minimal disruption to their experience. This process occurs automatically when a user logs in for the first time after the migration has been implemented where the process looks like the following:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.strong,{children:"User Authentication"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"When a user attempts to log in, user authenticates with their desired social provider or email using the Sequence Embedded Wallets SDK."}),`
`,e.jsx(i.li,{children:"Once the user is authenticated, the authenticated user data such as email address, username, or other unique user identifier along with the sequence wallet address is passed to your backend."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.strong,{children:"Database Lookup and Update"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Update your user database with a 'sequenceWallet' column."}),`
`,e.jsx(i.li,{children:"The database is queried with the unique user identifier to retrieve the corresponding user's record."}),`
`,e.jsx(i.li,{children:"The system checks if a 'sequenceWallet' already exists for this user. If so, no actoin is taken."}),`
`,e.jsx(i.li,{children:`If no Sequence wallet address is found:
a. The passed sequence wallet is inserted in the 'sequenceWallet' column.`}),`
`,e.jsx(i.li,{children:"If a user doesn't exist in the database, insert the passed information as a net-new user."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.strong,{children:"Asset Migration"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"After the user is successfully logged in, the system checks if asset migration has already occurred."}),`
`,e.jsx(i.li,{children:"If not, a prompt is displayed to the user, explaining the need to migrate their assets from their old wallet to the new Sequence Embedded Wallet."}),`
`,e.jsx(i.li,{children:"The user logs in to the previous provider as a one-time event, and migrates the desired assets to their new sequence wallet."}),`
`,e.jsx(i.li,{children:"We suggest using Sequence's Indexer to query the relevant assets to display these along with amounts to the user for ease of migration."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.p,{children:"Please get in touch with any questions if your migration is more complex and we are happy to help."})]})}function o(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{o as default,a as frontmatter};
