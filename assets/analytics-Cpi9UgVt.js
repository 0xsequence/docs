import{d as i,j as e}from"./index-DEt6L3cR.js";const r={title:"Sequence Builder Analytics - Key Insights and Metrics",description:"Sequence's analytics feature allows users to easily track key metrics in Sequence Builder without additional work. By using Sequence SDKs/APIs, analytics events are sent to Databeat for real-time storage and visualization."};function a(n){const t={a:"a",aside:"aside",div:"div",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",p:"p",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"analytics",children:["Analytics",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#analytics",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:`When you use Sequence, via our SDKs, to build your application, you can see key insights in Sequence Builder.
You don't need to do any additional work to see valuable metrics about your project, such as the number
of connected wallets or daily transaction requests.`}),`
`,e.jsx(t.aside,{"data-callout":"tip",children:e.jsxs(t.p,{children:["You can also query your analytics programatically or connect to services like Dune via our ",e.jsx(t.a,{href:"/api/analytics/overview",children:"APIs"}),"."]})}),`
`,e.jsxs(t.h4,{id:"how-it-works",children:["How it works",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-works",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:`When requests are made with Sequence SDKs/APIs, analytics events are fired and sent to our internal analytics system, Databeat.
Databeat anonymizes the data and stores it in a secure database designed for high-volume, real-time applications. The metrics you see in Builder are
queried from the database, in real-time, for your project and presented in insightful visualizations.`}),`
`,e.jsxs(t.h2,{id:"overview",children:["Overview",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:`In the Overview tab of Builder, you will see the key, high-level metrics for your project. Metric cards will show the total value for that metric, and
clicking on one will change the chart to show time-series data for that metric.`}),`
`,e.jsx(t.aside,{"data-callout":"tip",children:e.jsxs(t.p,{children:["You also have the option to look back at your data beyond the default ",e.jsx(t.strong,{children:"Last 30 days"}),`
by toggling the filter in the top right corner.`]})}),`
`,e.jsxs(t.h4,{id:"wallets-connected",children:["Wallets connected",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wallets-connected",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.em,{children:"Wallets connected"})," represents the count of distinct wallet addresses connected via Sequence SDKs for the selected time period."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_analytics_wallets_connected.png",alt:"Sequence Builder analytics wallets connected"})}),`
`,e.jsxs(t.h4,{id:"marketplace-transactions",children:["Marketplace transactions",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#marketplace-transactions",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.em,{children:"Marketplace transactions"})," shows the total number of buy and sell events that occure via the Sequence Marketplace API."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_analytics_market_txns.png",alt:"Sequence Builder analytics marketplace transactions"})}),`
`,e.jsxs(t.h4,{id:"transaction-requests",children:["Transaction requests",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-requests",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.em,{children:"Transaction requests"})," represents the total number of transactions sent by wallets associated with the project."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/img/builder/builder_analytics_txn_requests.png",alt:"Sequence Builder analytics transaction requests"})})]})}function c(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{c as default,r as frontmatter};
