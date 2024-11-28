import{d as s,j as e}from"./index-W_7fMDgX.js";const a={title:"Sequence Builder Analytics - Key Insights and Metrics",description:"Sequence's analytics feature allows users to easily track key metrics in Sequence Builder without additional work. By using Sequence SDKs/APIs, analytics events are sent to Databeat for real-time storage and visualization."};function t(i){const n={a:"a",aside:"aside",br:"br",div:"div",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"analytics",children:["Analytics",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#analytics",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:`When you use Sequence, via our SDKs, to build your application, you can see key insights in Sequence Builder.
You don't need to do any additional work to see valuable metrics about your project, such as the number
of connected wallets, active users or daily transaction requests.`}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["You can also query your analytics programatically or connect to services like Dune via our ",e.jsx(n.a,{href:"/api/analytics/overview",children:"APIs"}),"."]})}),`
`,e.jsxs(n.h4,{id:"how-it-works",children:["How it works",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-works",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`When requests are made with Sequence SDKs/APIs, analytics events are fired and sent to our internal analytics system, Databeat.
Databeat anonymizes the data and stores it in a secure database designed for high-volume, real-time applications. The metrics you see in Builder are
queried from the database, in real-time, for your project and presented in insightful visualizations.`}),`
`,e.jsx(n.p,{children:"All metrics and graphs are given under five categories which you can see each in different tabs in the Analytics section:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Summary"}),`
`,e.jsx(n.li,{children:"Acquisition"}),`
`,e.jsx(n.li,{children:"Engagement"}),`
`,e.jsx(n.li,{children:"Retention"}),`
`,e.jsx(n.li,{children:"Monetization"}),`
`]}),`
`,e.jsxs(n.h2,{id:"summary",children:["Summary",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#summary",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`The Summary enables you to check all the most relevant metrics of your project with a quick glance. It gives you high-level metrics that you can then explore in more detail in the other tabs.
In this tab, you’ll see the following metrics:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Total unique users:"})," Counts all unique users logged into your app lifetime-to-date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Daily active users:"})," A user is considered active once they log in to your app by connecting their wallet. This time series chart shows the daily active users for the last 90 days."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Average daily active users:"})," Shows the average daily active users lifetime-to-date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Average stickiness:"})," It measures the percentage of monthly active users (MAU) interacting with your app daily. It is calculated as Daily active users (DAU) / monthly active users (MAU)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Total transacting users:"})," The total number of users buying or selling assets in your marketplace. This only considers users transacting in your marketplace, deployed via Builder. It won’t include users transacting in other marketplaces."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/builder/builder_analytics_summary.png",alt:"Sequence Builder analytics summary"})}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsx(n.p,{children:`In summary tab, almost all metrics are given for your app's lifetime. But you have the option to look at your data for different time periods
by toggling the filter in the top right corner in the other sections. The default value is the last 30 days for all date filters.`})}),`
`,e.jsxs(n.h2,{id:"acquisition",children:["Acquisition",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#acquisition",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"This section includes all relevant metrics for new users coming into your app with a variety of dimensions."}),`
`,e.jsxs(n.p,{children:["In this tab, you will see the total. monthly, weekly and daily new users. A user is considered new when they log in to your app for the first time.",e.jsx(n.br,{}),`
`,`Total new users counts the total number of new users coming into your app for the selected time period which can be set using the filter in the top right corner.
Monthly, weekly or daily new users are time series charts showing new users logging in over the selected time period.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/builder/builder_analytics_acquisition.png",alt:"Sequence Builder analytics acquisition"})}),`
`,e.jsxs(n.h2,{id:"engagement",children:["Engagement",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#engagement",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`The Engagement tab shows the main metrics for user activity. You can see weekly and monthly active users, where they come from, and how they are accessing your app.
You can use the date filter in the top-right to change the timeline of your metrics.`}),`
`,e.jsx(n.p,{children:"In this tab, you’ll see the following metrics:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Monthly/Weekly Active Users:"}),` Once a user logs in to your app, they are considered active in a given period.
Monthly and Weekly Active Users charts count the total number of active users in the given period`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Monthly Active Users by Segment:"})," Counts the number of active users by segment on a monthly basis. Our segments are defined as:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"New users:"})," Users logged in for the first time in a given month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Users from previous month:"})," User returning from being active in the previous month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Old users:"})," Users who were not active in the previous month but logged in an earlier month."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Users by country/OS/device/browser:"})," Number of users broken down by each dimension for the selected time period."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/builder/builder_analytics_engagement.png",alt:"Sequence Builder analytics engagement"})}),`
`,e.jsxs(n.h2,{id:"retention",children:["Retention",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#retention",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In the Retention tab, you can see key metrics on how your app is engaging with users and getting them to come back."}),`
`,e.jsx(n.p,{children:"In this tab, you’ll see the following metrics:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avg D1/D7/D14/D28 Retention:"})," Average number of users coming back to the app after 1/7/14/28 day(s) from the day they started using the app by first seen date. These numbers are averaged for the cohorts selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Wallet Retentions:"})," % of users coming back to the app after 'd' day from the day they started using the app by first seen date. Each time series shows a different 'd' day retention and cohorts are given on the x-axis."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rolling stickiness:"})," The daily ratio of daily active users (DAU) to rolling monthly active users (MAU) which shows how frequently users are returning back to the app on a daily basis compared to the total number of unique active users over the month."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/builder/builder_analytics_retention.png",alt:"Sequence Builder analytics retention"})}),`
`,e.jsxs(n.h2,{id:"monetization",children:["Monetization",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#monetization",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In the Monetization tab, you can see and track the wallet transactions of your users. We show only the transaction requests sent by the users in the current version of our analytics dashboards, but this will expand into a more comprehensive view of all user transactions by estimating the value of transactions in USD."}),`
`,e.jsx(n.p,{children:"In this tab, you’ll find the following metrics:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Daily/Weekly/Monthly Transacting Users:"})," Number of transacting users in each segment. Our segments are defined as:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"New users:"})," Users logged in for the first time in a given month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Users from previous month:"})," User returning from being active in the previous month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Old users:"})," Users who were not active in the previous month but logged in an earlier month."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Monthly Transacting Users by Segment:"})," % of users coming back to the app after 'd' day from the day they started using the app by first seen date. Each time series shows a different 'd' day retention and cohorts are given on the x-axis."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transacting User Conversion:"})," The percentage of total users who have transacted at least once."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Monthly/Daily Total Transaction Users Conversion:"})," The percentage of monthly active users who who have transacted at least once."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Total/Monthly/Daily Transaction Requests:"})," Total number of transactions sent in a given period."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Total/Monthly/Daily Marketplace Transactions:"})," The number of transactions that have occurred on your marketplace on a daily basis."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/img/builder/builder_analytics_monetization.png",alt:"Sequence Builder analytics monetization"})})]})}function o(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{o as default,a as frontmatter};
