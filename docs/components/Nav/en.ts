import { i18n } from "@lingui/core";
import { messages } from "../../locales/en";
i18n.loadAndActivate({ locale: "en", messages });

export const topNavEn = [
  {
    text: i18n._("Solutions"),
    items: [
      {
        text: i18n._("Sequence Builder"),
        link: "/solutions/builder/overview",
        match: "/solutions/builder/overview",
      },
      {
        text: i18n._("Onboard"),
        link: "/solutions/wallets/overview",
        match: "/solutions/wallets/overview",
      },
      {
        text: i18n._("Monetize"),
        link: "/solutions/monetization-overview",
        match: "/solutions/monetization-overview",
      },
      { text: i18n._("Power"), link: "/solutions/power-overview", match: "/solutions/power-overview" },
    ],
  },
  {
    text: i18n._("Resources"),
    items: [
      { text: i18n._("Guides"), link: "/guides/guide-overview", match: "/guides/guide-overview" },
      {
        text: i18n._("Templates"),
        link: "/guides/template-overview",
        match: "/guides/template-overview",
      },
    ],
  },
  {
    text: i18n._("SDKs"),
    items: [
      { text: i18n._("Unity"), link: "/sdk/unity/overview", match: "/sdk/unity/overview" },
      { text: i18n._("Unreal"), link: "/sdk/unreal/introduction", match: "/sdk/unreal/introduction" },
      {
        text: i18n._("React"),
        link: "/solutions/wallets/sequence-kit/overview",
        match: "/solutions/wallets/sequence-kit/overview",
      },
      {
        text: i18n._("Typescript"),
        link: "/sdk/typescript/guides/overview",
        match: "/sdk/typescript/guides/overview",
      },
      { text: i18n._("Go"), link: "/sdk/go/overview", match: "/sdk/go/overview" },
      // { text: i18n._('Android'), link: '/sdk/android', match: '/sdk/android' },
      { text: i18n._("Mobile"), link: "/sdk/mobile", match: "/sdk/mobile" },
      // { text: i18n._('iOS'), link: '/sdk/iOS', match: '/sdk/iOS' }
    ],
  },
  {
    text: i18n._("APIs"),
    items: [
      {
        text: i18n._("Transactions API"),
        link: "/api/transactions/overview",
        match: "/api/transactions/overview",
      },
      {
        text: i18n._("Analytics API"),
        link: "/api/analytics/overview",
        match: "/api/analytics/overview",
      },
      { text: i18n._("Indexer API"), link: "/api/indexer/overview", match: "/api/indexer/overview" },
      { text: i18n._("Metadata API"), link: "/api/metadata/overview", match: "/api/metadata/overview" },
      {
        text: i18n._("Marketplace API"),
        link: "/api/marketplace/overview",
        match: "/api/marketplace/overview",
      },
      {
        text: i18n._("Infrastructure API"),
        link: "/api/infrastructure/overview",
        match: "/api/infrastructure/overview",
      },
      {
        text: i18n._("Builder API"),
        link: "/api/builder/overview",
        match: "/api/builder/overview",
      },
      { text: i18n._("Node Gateway"), link: "/api/node-gateway", match: "/api/node-gateway" },
    ],
  },
  {
    text: i18n._("Support"),
    items: [
      { text: i18n._("Support"), link: "/support" },
      { text: i18n._("Integrated Chains"), link: "/solutions/technical-references/chain-support/" },
      { text: i18n._("Changelog"), link: "https://0xsequence.featurebase.app/" },
      { text: i18n._("Restricted Regions"), link: "/support/restricted-regions" },
      { text: i18n._("Token Directory"), link: "/support/token-directory" },
      { text: i18n._("FAQ"), link: "https://support.sequence.xyz" },
      { text: i18n._("Discord"), link: "https://discord.gg/sequence" },
      { text: i18n._("We're hiring!"), link: "https://horizon.io/careers" },
      { text: i18n._("Contact Us"), link: "https://support.sequence.xyz" },
    ],
  },
];

export const sidebarEn = {
  // Overview
  '/solutions': [
    {
      text: i18n._('Overview'),
      link: '/solutions/builder/overview',
    },
    {
      text: i18n._('Getting Started'),
      link: '/solutions/builder/getting-started',
    },
    {
      text: i18n._('Onboard'),
      items: [
        { text: i18n._('Overview'), link: '/solutions/wallets/overview' },
        {
          text: i18n._('Ecosystem Wallets'),
          collapsed: false,
          items: [
            { text: i18n._('Overview'), link: '/solutions/wallets/ecosystem/overview' },
            { text: i18n._('Configuration'), link: '/solutions/wallets/ecosystem/configuration' },
            {
              text: i18n._('Cross-App Integration'),
              link: '/solutions/wallets/ecosystem/cross-app',
            },
          ],
        },
        {
          text: i18n._('Embedded Wallet'),
          collapsed: false,
          items: [
            { text: i18n._('Overview'), link: '/solutions/wallets/embedded-wallet/overview' },
            { text: i18n._('Quickstart'), link: '/solutions/wallets/embedded-wallet/quickstart' },
            {
              text: i18n._('Setup'),
              collapsed: true,
              items: [
                { text: i18n._('Configuration'), link: '/solutions/builder/embedded-wallet' },
                {
                  text: i18n._('Google Setup'),
                  link: '/solutions/builder/embedded-wallet/google-configuration',
                },
                {
                  text: i18n._('Apple Setup'),
                  link: '/solutions/builder/embedded-wallet/apple-configuration',
                },
                {
                  text: i18n._('PlayFab Setup'),
                  link: '/solutions/builder/embedded-wallet/playfab-configuration',
                },
                {
                  text: i18n._('Stytch Setup'),
                  link: '/solutions/builder/embedded-wallet/stytch-configuration',
                },
                {
                  text: i18n._('Guest Wallet Setup'),
                  link: '/solutions/builder/embedded-wallet/guest-wallet-configuration',
                },
              ],
            },
            {
              text: i18n._('Examples'),
              collapsed: true,
              items: [
                {
                  text: i18n._('Authentication'),
                  link: '/solutions/wallets/embedded-wallet/examples/authentication',
                },
                {
                  text: i18n._('Use Wallets'),
                  link: '/solutions/wallets/embedded-wallet/examples/use-wallets',
                },
                {
                  text: i18n._('Multi-account Support'),
                  link: '/solutions/wallets/embedded-wallet/examples/account-federation',
                },
                {
                  text: i18n._('Manage Sessions'),
                  link: '/solutions/wallets/embedded-wallet/examples/manage-sessions',
                },
                {
                  text: i18n._('On-ramp'),
                  link: '/solutions/wallets/embedded-wallet/examples/on-ramp',
                },
                {
                  text: i18n._('Fee Options'),
                  link: '/solutions/wallets/embedded-wallet/examples/fee-options',
                },
                {
                  text: i18n._('Backend Verification'),
                  link: '/solutions/wallets/embedded-wallet/examples/verification',
                },
                {
                  text: i18n._('Transaction Receipts'),
                  link: '/solutions/wallets/embedded-wallet/examples/transaction-receipts',
                },
              ],
            },
            {
              text: i18n._('Architecture'),
              collapsed: true,
              items: [
                {
                  text: i18n._('Overview'),
                  link: '/solutions/wallets/embedded-wallet/architecture/overview',
                },
                {
                  text: i18n._('Action Payloads'),
                  link: '/solutions/wallets/embedded-wallet/architecture/action-payloads',
                },
                {
                  text: i18n._('Response Payloads'),
                  link: '/solutions/wallets/embedded-wallet/architecture/response-payloads',
                },
                {
                  text: i18n._('Trust Contract Recovery Flow'),
                  link: '/solutions/wallets/embedded-wallet/architecture/trust-contract-recovery-flow',
                },
                {
                  text: i18n._('Enclave Verification'),
                  link: '/solutions/wallets/embedded-wallet/architecture/enclave-verification',
                },
                {
                  text: i18n._('Intents'),
                  link: '/solutions/wallets/embedded-wallet/architecture/intents',
                },
              ],
            },
            {
              text: i18n._('Migrating to Sequence'),
              link: '/solutions/wallets/embedded-wallet/migration',
            },
            { text: i18n._('FAQ'), link: '/solutions/wallets/embedded-wallet/faq' },
          ],
        },
        {
          text: i18n._('Sequence Kit'),
          collapsed: false,
          items: [
            { text: i18n._('Overview'), link: '/solutions/wallets/sequence-kit/overview' },
            { text: i18n._('Quickstart'), link: '/solutions/wallets/sequence-kit/getting-started' },
            {
              text: i18n._('Custom Configuration'),
              link: '/solutions/wallets/sequence-kit/custom-configuration',
            },
            {
              text: i18n._('Sequence Pay'),
              collapsed: false,
              items: [
                { text: i18n._('Checkout'), link: '/solutions/wallets/sequence-kit/checkout' },
                {
                  text: i18n._('Smart Swaps'),
                  link: '/solutions/wallets/sequence-kit/smart-swaps',
                },
                { text: i18n._('On-ramp'), link: '/solutions/wallets/sequence-kit/on-ramp' },
              ],
            },
            {
              text: i18n._('Custom Connectors'),
              link: '/solutions/wallets/sequence-kit/custom-connectors',
            },
          ],
        },
        {
          text: i18n._('Wallet Linking'),
          collapsed: true,
          items: [
            { text: i18n._('Overview'), link: '/solutions/wallets/link-wallets/overview' },
            {
              text: i18n._('Integration Guide'),
              link: '/solutions/wallets/link-wallets/integration-guide',
            },
          ],
        },
        {
          text: i18n._('Universal Wallet'),
          collapsed: true,
          items: [
            { text: i18n._('Overview'), link: '/solutions/wallets/universal-wallet/overview' },
            { text: i18n._('Quickstart'), link: '/solutions/wallets/universal-wallet/quickstart' },
            {
              text: i18n._('Examples'),
              collapsed: true,
              items: [
                {
                  text: i18n._('Connect Wallet'),
                  link: '/solutions/wallets/universal-wallet/examples/connect-wallet',
                },
                {
                  text: i18n._('Authenticate Users with Message Signature'),
                  link: '/solutions/wallets/universal-wallet/examples/auth-address',
                },
                {
                  text: i18n._('Signing & Verifying Messages'),
                  link: '/solutions/wallets/universal-wallet/examples/sign-message',
                },
                {
                  text: i18n._('No-wallet confirmation signatures'),
                  link: '/solutions/wallets/universal-wallet/examples/session-keys',
                },
                {
                  text: i18n._('Sending Transactions'),
                  link: '/solutions/wallets/universal-wallet/examples/send-transaction',
                },
                {
                  text: i18n._('Sending ERC-20 Tokens'),
                  link: '/solutions/wallets/universal-wallet/examples/send-erc20',
                },
                {
                  text: i18n._('Sending ERC-721 (NFT) Tokens'),
                  link: '/solutions/wallets/universal-wallet/examples/send-erc721',
                },
                {
                  text: i18n._('Sending ERC-1155 (Collectible) Tokens'),
                  link: '/solutions/wallets/universal-wallet/examples/send-erc1155',
                },
                {
                  text: i18n._('Sending a Batch of Transactions'),
                  link: '/solutions/wallets/universal-wallet/examples/send-batch-transactions',
                },
                {
                  text: i18n._('Building Backends with Sequence'),
                  link: '/solutions/wallets/universal-wallet/examples/building-backends',
                },
              ],
            },
            //  {text: i18n._('Sequence Kit'), link: '/solutions/wallets/universal-wallet/sequence-kit'},
            {
              text: i18n._('Supported Platforms'),
              link: '/solutions/wallets/universal-wallet/platforms',
            },
            {
              text: i18n._('Fiat On-Ramps'),
              link: '/solutions/wallets/universal-wallet/fiat-on-ramps',
            },
            {
              text: i18n._('Key Management'),
              link: '/solutions/wallets/universal-wallet/key-management',
            },
          ],
        },
      ],
    },
    {
      text: i18n._('Monetize'),
      // collapsed: true,
      items: [
        { text: i18n._('Overview'), link: '/solutions/monetization-overview' },
        {
          text: i18n._('Marketplaces'),
          collapsed: true,
          items: [
            {
              text: i18n._('White-label Marketplace'),
              collapsed: true,
              items: [
                {
                  text: i18n._('Overview'),
                  link: '/guides/custom-marketplace',
                },
                {
                  text: i18n._('Sell your ERC-1155 Game Items via a Web Shop'),
                  collapsed: true,
                  link: '/guides/primary-sales',
                },
                {
                  text: i18n._('Create NFT Drop Sales'),
                  collapsed: true,
                  link: '/guides/primary-drop-sales-erc721',
                },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   text: i18n._('Integrate token rewards into your Discord server'),
    //   link: '/guides/discord'
    // },
    {
      text: i18n._('Templates'),
      link: '/guides/template-overview',
      // items: [
      //   { text: i18n._('Embedded Wallet Demo'), link: '/guides/templates/template-embedded-wallet' },
      //   { text: i18n._('Build a Backend Transaction Manager'), link: '/guides/templates/building-relaying-server' }
      //   // { text: i18n._('Marketplace API Demo'), link: '/guides/templates/template-marketplace-api' }
      // ]
    },
  ],

  // // SDKs
  '/sdk': [
    {
      text: i18n._('Game Engine'),
      // collapsed: true,
      items: [
        {
          text: i18n._('Unity'),
          collapsed: true,
          match: '/sdk/unity/overview',
          items: [
            { text: i18n._('Overview'), link: '/sdk/unity/overview' },
            { text: i18n._('Installation'), link: '/sdk/unity/installation' },
            { text: i18n._('Setup'), link: '/sdk/unity/setup' },
            {
              text: i18n._('Authentication'),
              collapsed: false,
              items: [
                { text: i18n._('Introduction'), link: '/sdk/unity/authentication/intro' },
                { text: i18n._('Email OTP'), link: '/sdk/unity/authentication/email' },
                { text: i18n._('Social Sign In'), link: '/sdk/unity/authentication/oidc' },
                { text: i18n._('PlayFab'), link: '/sdk/unity/authentication/playfab' },
                { text: i18n._('Guest'), link: '/sdk/unity/authentication/guest' },
                {
                  text: i18n._('Federated Accounts'),
                  link: '/sdk/unity/authentication/federated-accounts',
                },
              ],
            },
            { text: i18n._('Write to blockchain'), link: '/sdk/unity/write-to-blockchain' },
            { text: i18n._('Read from Blockchain'), link: '/sdk/unity/read-from-blockchain' },
            { text: i18n._('Sign Messages'), link: '/sdk/unity/sign-messages' },
            { text: i18n._('Recovering Sessions'), link: '/sdk/unity/recovering-sessions' },
            { text: i18n._('Session Management'), link: '/sdk/unity/session-management' },
            {
              text: i18n._('On-Ramp Funds via Credit Card'),
              link: '/sdk/unity/onboard-user-funds',
            },
            {
              text: i18n._('Peer to Peer Trading / Marketplace'),
              collapsed: false,
              items: [
                { text: i18n._('Introduction'), link: '/sdk/unity/marketplace/intro' },
                { text: i18n._('Reading Orders'), link: '/sdk/unity/marketplace/reading-orders' },
                { text: i18n._('Filling Orders'), link: '/sdk/unity/marketplace/filling-orders' },
                { text: i18n._('Checkout UI'), link: '/sdk/unity/marketplace/checkout-ui' },
              ],
            },
            { text: i18n._('Currency Swaps'), link: '/sdk/unity/currency-swaps' },
            {
              text: i18n._('Connect with External Wallets'),
              link: '/sdk/unity/connecting-external-wallets',
            },
            { text: i18n._('Upgrading from v2 to v3'), link: '/sdk/unity/v2-to-v3-upgrade-guide' },
            { text: i18n._('Wallet UI'), link: '/sdk/unity/wallet-ui' },
            { text: i18n._('Deploy Contracts'), link: '/sdk/unity/deploy-contracts' },
            {
              text: i18n._('Advanced Blockchain Interactions'),
              collapsed: true,
              items: [
                { text: i18n._('Introduction'), link: '/sdk/unity/Advanced/introduction' },
                { text: i18n._('Wallets'), link: '/sdk/unity/Advanced/wallets' },
                { text: i18n._('Clients'), link: '/sdk/unity/Advanced/clients' },
                { text: i18n._('Transfers'), link: '/sdk/unity/Advanced/transfers' },
                { text: i18n._('Contracts'), link: '/sdk/unity/Advanced/contracts' },
                { text: i18n._('Tokens'), link: '/sdk/unity/Advanced/tokens' },
              ],
            },
          ],
        },
        {
          text: i18n._('Unreal'),
          collapsed: true,
          match: '/sdk/unreal/introduction',
          items: [
            { text: i18n._('Introduction'), link: '/sdk/unreal/introduction' },
            { text: i18n._('Installation'), link: '/sdk/unreal/installation' },
            { text: i18n._('Configuration'), link: '/sdk/unreal/configuration' },
            { text: i18n._('Blueprint Subsystems'), link: '/sdk/unreal/subsystems' },
            { text: i18n._('Bootstrap your Game'), link: '/sdk/unreal/bootstrap_game' },
            { text: i18n._('Sign-In UI'), link: '/sdk/unreal/user_interfaces' },
            { text: i18n._('Authenticate Users'), link: '/sdk/unreal/authentication' },
            { text: i18n._('Write to Blockchain'), link: '/sdk/unreal/write-to-blockchain' },
            { text: i18n._('Read from Blockchain'), link: '/sdk/unreal/read-from-blockchain' },
            { text: i18n._('On-Ramp via Credit Card'), link: '/sdk/unreal/onboard-user-funds' },
            { text: i18n._('Advanced Blockchain Interactions'), link: '/sdk/unreal/advanced' },
            { text: i18n._('Platform Requirements'), link: '/sdk/unreal/platforms' },
          ],
        },
      ],
    },
    {
      text: i18n._('Mobile'),
      items: [
        // { text: i18n._('Android'), link: '/sdk/android' },
        // { text: i18n._('iOS'), link: '/sdk/iOS' },
        { text: i18n._('React Native'), link: '/sdk/mobile' },
      ],
    },
    {
      text: i18n._('Web3'),
      items: [
        {
          text: i18n._('TypeScript'),
          collapsed: true,
          items: [
            { text: i18n._('Overview'), link: '/sdk/typescript/guides/overview' },
            { text: i18n._('Connect Wallet'), link: '/sdk/typescript/guides/connect-wallet' },
            {
              text: i18n._('Authenticate Users with Message Signature'),
              link: '/sdk/typescript/guides/auth-address',
            },
            {
              text: i18n._('Signing & Verifying Messages'),
              link: '/sdk/typescript/guides/sign-message',
            },
            {
              text: i18n._('No-wallet confirmation signatures'),
              link: '/sdk/typescript/guides/session-keys',
            },
            {
              text: i18n._('Sending Transactions'),
              link: '/sdk/typescript/guides/send-transaction',
            },
            { text: i18n._('Sending ERC-20 Tokens'), link: '/sdk/typescript/guides/send-erc20' },
            {
              text: i18n._('Sending ERC-721 (NFT) Tokens'),
              link: '/sdk/typescript/guides/send-erc721',
            },
            {
              text: i18n._('Sending ERC-1155 (Collectible) Tokens'),
              link: '/sdk/typescript/guides/send-erc1155',
            },
            {
              text: i18n._('Sending a Batch of Transactions'),
              link: '/sdk/typescript/guides/send-batch-transactions',
            },
            {
              text: i18n._('Building Backends with Sequence'),
              link: '/sdk/typescript/guides/building-backends',
            },
            {
              text: i18n._('Wallet Connectors'),
              collapsed: true,
              items: [
                { text: i18n._('Overview'), link: '/sdk/typescript/connectors/overview' },
                { text: i18n._('Wagmi'), link: '/sdk/typescript/connectors/wagmi' },
                { text: i18n._('RainbowKit'), link: '/sdk/typescript/connectors/rainbow-kit' },
                { text: i18n._('Web3 Onboard'), link: '/sdk/typescript/connectors/web3-onboard' },
                { text: i18n._('Web3 React V6'), link: '/sdk/typescript/connectors/web3-react-v6' },
                { text: i18n._('Web3Modal'), link: '/sdk/typescript/connectors/web3modal' },
                { text: i18n._('FAQ'), link: '/sdk/typescript/connectors/FAQ' },
              ],
            },
          ],
        },
        {
          text: i18n._('Go'),
          link: '/sdk/go/overview',
          items: [{ text: i18n._('Overview'), link: '/sdk/go/overview' }],
        },
      ],
    },
    {
      text: i18n._('Common Questions'),
      collapsed: true,
      items: [
        {
          text: i18n._('How do I do signature validation?'),
          link: '/solutions/wallets/universal-wallet/examples/auth-address',
        },
        // ...
      ],
    },
  ],

  // apis
  '/api': [
    {
      text: i18n._('Transactions'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/api/transactions/overview' },
        { text: i18n._('Installation'), link: '/api/transactions/installation' },
        { text: i18n._('API References'), link: '/api/transactions/endpoints' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          items: [
            {
              text: i18n._('Fetch Fee Options'),
              link: '/api/transactions/examples/fetch-fee-options',
            },
            {
              text: i18n._('Send Transactions'),
              link: '/api/transactions/examples/send-transactions',
            },
            {
              text: i18n._('Fetch Transaction Receipts'),
              link: '/api/transactions/examples/fetch-transaction-receipts',
            },
          ],
        },
      ],
    },
    {
      text: i18n._('Indexer'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/api/indexer/overview' },
        { text: i18n._('Installation'), link: '/api/indexer/installation' },
        { text: i18n._('API References'), link: '/api/indexer/endpoints' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          items: [
            { text: i18n._('Fetch Tokens'), link: '/api/indexer/examples/fetch-tokens' },
            {
              text: i18n._('Transaction History'),
              link: '/api/indexer/examples/transaction-history',
            },
            { text: i18n._('Unique Tokens'), link: '/api/indexer/examples/unique-tokens' },
            {
              text: i18n._('Transaction History Token Contract'),
              link: '/api/indexer/examples/transation-history-token-contract',
            },
            {
              text: i18n._('Native Network Balance'),
              link: '/api/indexer/examples/native-network-balance',
            },
            { text: i18n._('Metadata Tips'), link: '/api/indexer/metadata-tips' },
            { text: i18n._('Webhooks'), link: '/api/indexer/examples/webhook-listener' },
            { text: i18n._('Subscriptions'), link: '/api/indexer/examples/subscriptions' },
          ],
        },
      ],
    },
    {
      text: i18n._('Analytics'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/api/analytics/overview' },
        { text: i18n._('API References'), link: '/api/analytics/endpoints' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          items: [
            { text: i18n._('Wallets'), link: '/api/analytics/examples/wallets' },
            { text: i18n._('Marketplaces'), link: '/api/analytics/examples/marketplace' },
          ],
        },
      ],
    },
    {
      text: i18n._('Metadata'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/api/metadata/overview' },
        { text: i18n._('API References'), link: '/api/metadata/endpoints' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          items: [
            { text: i18n._('Token Metadata'), link: '/api/metadata/token-metadata' },
            { text: i18n._('Contract Metadata'), link: '/api/metadata/contract-metadata' },
            { text: i18n._('REST API'), link: '/api/metadata/rest-api' },
          ],
        },
      ],
    },
    {
      text: i18n._('Infrastructure'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/api/infrastructure/overview' },
        { text: i18n._('API References'), link: '/api/infrastructure/endpoints' },
      ],
    },
    {
      text: i18n._('Builder'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/api/builder/overview' },
        { text: i18n._('API References'), link: '/api/builder/endpoints' },
      ],
    },
    {
      text: i18n._('Marketplace'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/api/marketplace/overview' },
        { text: i18n._('API References'), link: '/api/marketplace/endpoints' },

        // { text: i18n._('Schema'), link: '/api/marketplace/schema' },
        // { text: i18n._('Marketplace API'), link: '/api/marketplace/api' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          link: '/api/marketplace/examples/orderbook-transactions',
          items: [
            {
              text: i18n._('Creating Market Orders & Listings'),
              link: '/api/marketplace/examples/orderbook-transactions',
            },
            { text: i18n._('Get Top Orders'), link: '/api/marketplace/examples/get-top-orders' },
            { text: i18n._('Get Orderbook'), link: '/api/marketplace/examples/get-orderbook' },
            {
              text: i18n._('Get User Activities'),
              link: '/api/marketplace/examples/get-user-activities',
            },
          ],
        },
      ],
    },
    {
      text: i18n._('Node Gateway'),
      collapsed: false,
      items: [{ text: i18n._('Overview'), link: '/api/node-gateway' }],
    },
  ],

  // guides
  '/guides': [
    {
      text: i18n._('Guides'),
      collapsed: false,
      items: [
        {
          text: i18n._('Game Developers'),
          collapsed: true,
          items: [
            { text: i18n._('Build a Game with WebGL'), collapsed: true, link: '/guides/webgl-guide' },
            {
              text: i18n._('Build a Unity Game'),
              collapsed: true,
              link: '/guides/jelly-forest-unity-guide',
            },
            {
              text: i18n._('Building Transaction Heavy Games with Unity'),
              collapsed: true,
              link: '/guides/building-transaction-heavy-games-with-unity',
            },
            {
              text: i18n._('How to build a Game with Unreal Engine'),
              collapsed: true,
              link: '/guides/unreal-ew-guide',
            },
            {
              text: i18n._('Using Unity IAP to Sell NFTs'),
              collapsed: true,
              link: '/guides/using-unity-iap-to-sell-nfts',
            },
            {
              text: i18n._('How to sell On-Chain Items in your Unreal Project'),
              collapsed: true,
              link: '/guides/unreal-primary-sales',
            },
            {
              text: i18n._('How to do Primary Sales for On-Chain Items in Unity'),
              collapsed: true,
              link: '/guides/unity-primary-sales',
            },
            {
              text: i18n._('Build a Telegram Mini-Game in Unity'),
              collapsed: true,
              link: '/guides/unity-webgl-telegram',
            },
            {
              text: i18n._('Build a Telegram Mini-App with Sequence'),
              collapsed: true,
              link: '/guides/telegram-integration',
            },
          ],
        },
        {
          text: i18n._('Blockchain Integrations'),
          collapsed: true,
          items: [
            {
              text: i18n._('Build a Collectible Minting Service'),
              collapsed: true,
              link: '/guides/mint-collectibles-serverless',
            },
            { text: i18n._('Manage Collection Metadata'), collapsed: true, link: '/guides/metadata-guide' },
            {
              text: i18n._('Build a Treasure Chest with AI Minting'),
              collapsed: true,
              link: '/guides/treasure-chest-guide',
            },
            {
              text: i18n._('Build a Backend Transaction Service'),
              collapsed: true,
              link: '/guides/building-relaying-server',
            },
            {
              text: i18n._('Leverage Sequence Analytics API in Dune'),
              collapsed: true,
              link: '/guides/analytics-guide',
            },
            {
              text: i18n._('Build an Embedded Wallet Linking Service'),
              collapsed: true,
              link: '/solutions/wallets/link-wallets/integration-guide',
            },
          ],
        },
        {
          text: i18n._('Marketplaces & Primary Sales'),
          collapsed: true,
          items: [
            {
              text: i18n._('Build a Custom Marketplace'),
              collapsed: true,
              link: '/guides/custom-marketplace',
            },
            {
              text: i18n._('Sell your ERC-1155 Game Items via a Web Shop'),
              collapsed: true,
              link: '/guides/primary-sales',
            },
            {
              text: i18n._('Create NFT Drop Sales'),
              collapsed: true,
              link: '/guides/primary-drop-sales-erc721',
            },
          ],
        },
      ],
    },
    {
      text: i18n._('Templates'),
      link: '/guides/template-overview',
    },
  ],

  // Support
  '/support': [
    {
      text: i18n._('Support'),
      items: [
        { text: i18n._('Support'), link: '/support' },
        { text: i18n._('Changelog'), link: 'https://0xsequence.featurebase.app/' },
        { text: i18n._('Restricted Regions'), link: '/support/restricted-regions' },
        { text: i18n._('FAQ'), link: 'https://support.sequence.xyz' },
        { text: i18n._('Token Directory'), link: '/support/token-directory' },
        { text: i18n._('Discord'), link: 'https://discord.gg/sequence' },
        { text: i18n._("We're hiring!"), link: 'https://horizon.io/careers' },
        { text: i18n._('Contact Us'), link: 'https://support.sequence.xyz' },
      ],
    },
    {
      text: i18n._('Sequence Builder Admin'),
      items: [
        { text: i18n._('Project Management'), link: '/support/builder/project-management' },
        { text: i18n._('Project Settings'), link: '/support/builder/project-settings' },
      ],
    },
  ],
}
