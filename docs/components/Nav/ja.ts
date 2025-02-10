import { i18n } from "@lingui/core";
import { messages } from "../../locales/ja";
i18n.loadAndActivate({ locale: "ja", messages });

export const topNavJa = [
  {
    text: i18n._("Overview"),
    link: "/ja/solutions/builder/overview",
  },
  {
    text: i18n._("Getting Started"),
    link: "/ja/solutions/builder/getting-started",
  },
  {
    text: i18n._("Onboard"),
    items: [
      { text: i18n._("Overview"), link: "/ja/solutions/wallets/overview" },
      {
        text: i18n._("Ecosystem Wallets"),
        collapsed: false,
        items: [
          { text: i18n._("Overview"), link: "/ja/solutions/wallets/ecosystem/overview" },
          { text: i18n._("Configuration"), link: "/ja/solutions/wallets/ecosystem/configuration" },
          { text: i18n._("Cross-App Integration"), link: "/ja/solutions/wallets/ecosystem/cross-app" },
        ],
      },
      {
        text: i18n._("Embedded Wallet"),
        collapsed: false,
        items: [
          { text: i18n._("Overview"), link: "/ja/solutions/wallets/embedded-wallet/overview" },
          { text: i18n._("Quickstart"), link: "/ja/solutions/wallets/embedded-wallet/quickstart" },
          {
            text: i18n._("Setup"),
            collapsed: true,
            items: [
              { text: i18n._("Configuration"), link: "/ja/solutions/builder/embedded-wallet" },
              {
                text: i18n._("Google Setup"),
                link: "/ja/solutions/builder/embedded-wallet/google-configuration",
              },
              {
                text: i18n._("Apple Setup"),
                link: "/ja/solutions/builder/embedded-wallet/apple-configuration",
              },
              {
                text: i18n._("PlayFab Setup"),
                link: "/ja/solutions/builder/embedded-wallet/playfab-configuration",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: i18n._("APIs"),
    items: [
      {
        text: i18n._("Transactions API"),
        link: "/ja/api/transactions/overview",
        match: "/ja/api/transactions/overview",
      },
      {
        text: i18n._("Analytics API"),
        link: "/ja/api/analytics/overview",
        match: "/ja/api/analytics/overview",
      },
      { text: i18n._("Indexer API"), link: "/ja/api/indexer/overview", match: "/ja/api/indexer/overview" },
      { text: i18n._("Metadata API"), link: "/ja/api/metadata/overview", match: "/ja/api/metadata/overview" },
      {
        text: i18n._("Marketplace API"),
        link: "/ja/api/marketplace/overview",
        match: "/ja/api/marketplace/overview",
      },
      {
        text: i18n._("Infrastructure API"),
        link: "/ja/api/infrastructure/overview",
        match: "/ja/api/infrastructure/overview",
      },
      {
        text: i18n._("Builder API"),
        link: "/ja/api/builder/overview",
        match: "/ja/api/builder/overview",
      },
      { text: i18n._("Node Gateway"), link: "/ja/api/node-gateway", match: "/ja/api/node-gateway" },
    ],
  },
  {
    text: i18n._("Support"),
    items: [
      { text: i18n._("Support"), link: "/ja/support" },
      { text: i18n._("Integrated Chains"), link: "/ja/solutions/technical-references/chain-support/" },
      { text: i18n._("Changelog"), link: "https://0xsequence.featurebase.app/" },
      { text: i18n._("Restricted Regions"), link: "/ja/support/restricted-regions" },
      { text: i18n._("Token Directory"), link: "/ja/support/token-directory" },
      { text: i18n._("FAQ"), link: "https://support.sequence.xyz" },
      { text: i18n._("Discord"), link: "https://discord.gg/sequence" },
      { text: i18n._("We're hiring!"), link: "https://horizon.io/careers" },
      { text: i18n._("Contact Us"), link: "https://support.sequence.xyz" },
    ],
  },
];

export const sidebarJa = {
  // Overview
  '/ja/solutions': [
    {
      text: i18n._('Overview'),
      link: '/ja/solutions/builder/overview',
    },
    {
      text: i18n._('Getting Started'),
      link: '/ja/solutions/builder/getting-started',
    },
    {
      text: i18n._('Onboard'),
      items: [
        { text: i18n._('Overview'), link: '/ja/solutions/wallets/overview' },
        {
          text: i18n._('Ecosystem Wallets'),
          collapsed: false,
          items: [
            { text: i18n._('Overview'), link: '/ja/solutions/wallets/ecosystem/overview' },
            {
              text: i18n._('Configuration'),
              link: '/ja/solutions/wallets/ecosystem/configuration',
            },
            {
              text: i18n._('Cross-App Integration'),
              link: '/ja/solutions/wallets/ecosystem/cross-app',
            },
          ],
        },
        {
          text: i18n._('Embedded Wallet'),
          collapsed: false,
          items: [
            { text: i18n._('Overview'), link: '/ja/solutions/wallets/embedded-wallet/overview' },
            {
              text: i18n._('Quickstart'),
              link: '/ja/solutions/wallets/embedded-wallet/quickstart',
            },
            {
              text: i18n._('Setup'),
              collapsed: true,
              items: [
                { text: i18n._('Configuration'), link: '/ja/solutions/builder/embedded-wallet' },
                {
                  text: i18n._('Google Setup'),
                  link: '/ja/solutions/builder/embedded-wallet/google-configuration',
                },
                {
                  text: i18n._('Apple Setup'),
                  link: '/ja/solutions/builder/embedded-wallet/apple-configuration',
                },
                {
                  text: i18n._('PlayFab Setup'),
                  link: '/ja/solutions/builder/embedded-wallet/playfab-configuration',
                },
                {
                  text: i18n._('Stytch Setup'),
                  link: '/ja/solutions/builder/embedded-wallet/stytch-configuration',
                },
                {
                  text: i18n._('Guest Wallet Setup'),
                  link: '/ja/solutions/builder/embedded-wallet/guest-wallet-configuration',
                },
              ],
            },
            {
              text: i18n._('Examples'),
              collapsed: true,
              items: [
                {
                  text: i18n._('Authentication'),
                  link: '/ja/solutions/wallets/embedded-wallet/examples/authentication',
                },
                {
                  text: i18n._('Use Wallets'),
                  link: '/ja/solutions/wallets/embedded-wallet/examples/use-wallets',
                },
                {
                  text: i18n._('Multi-account Support'),
                  link: '/ja/solutions/wallets/embedded-wallet/examples/account-federation',
                },
                {
                  text: i18n._('Manage Sessions'),
                  link: '/ja/solutions/wallets/embedded-wallet/examples/manage-sessions',
                },
                {
                  text: i18n._('On-ramp'),
                  link: '/ja/solutions/wallets/embedded-wallet/examples/on-ramp',
                },
                {
                  text: i18n._('Fee Options'),
                  link: '/ja/solutions/wallets/embedded-wallet/examples/fee-options',
                },
                {
                  text: i18n._('Backend Verification'),
                  link: '/ja/solutions/wallets/embedded-wallet/examples/verification',
                },
                {
                  text: i18n._('Transaction Receipts'),
                  link: '/ja/solutions/wallets/embedded-wallet/examples/transaction-receipts',
                },
              ],
            },
            {
              text: i18n._('Architecture'),
              collapsed: true,
              items: [
                {
                  text: i18n._('Overview'),
                  link: '/ja/solutions/wallets/embedded-wallet/architecture/overview',
                },
                {
                  text: i18n._('Action Payloads'),
                  link: '/ja/solutions/wallets/embedded-wallet/architecture/action-payloads',
                },
                {
                  text: i18n._('Response Payloads'),
                  link: '/ja/solutions/wallets/embedded-wallet/architecture/response-payloads',
                },
                {
                  text: i18n._('Trust Contract Recovery Flow'),
                  link: '/ja/solutions/wallets/embedded-wallet/architecture/trust-contract-recovery-flow',
                },
                {
                  text: i18n._('Enclave Verification'),
                  link: '/ja/solutions/wallets/embedded-wallet/architecture/enclave-verification',
                },
                {
                  text: i18n._('Intents'),
                  link: '/ja/solutions/wallets/embedded-wallet/architecture/intents',
                },
              ],
            },
            {
              text: i18n._('Migrating to Sequence'),
              link: '/ja/solutions/wallets/embedded-wallet/migration',
            },
            { text: i18n._('FAQ'), link: '/ja/solutions/wallets/embedded-wallet/faq' },
          ],
        },
        {
          text: i18n._('Sequence Kit'),
          collapsed: false,
          items: [
            { text: i18n._('Overview'), link: '/ja/solutions/wallets/sequence-kit/overview' },
            {
              text: i18n._('Quickstart'),
              link: '/ja/solutions/wallets/sequence-kit/getting-started',
            },
            {
              text: i18n._('Custom Configuration'),
              link: '/ja/solutions/wallets/sequence-kit/custom-configuration',
            },
            {
              text: i18n._('Sequence Pay'),
              collapsed: false,
              items: [
                { text: i18n._('Checkout'), link: '/ja/solutions/wallets/sequence-kit/checkout' },
                {
                  text: i18n._('Smart Swaps'),
                  link: '/ja/solutions/wallets/sequence-kit/smart-swaps',
                },
                { text: i18n._('On-ramp'), link: '/ja/solutions/wallets/sequence-kit/on-ramp' },
              ],
            },
            {
              text: i18n._('Custom Connectors'),
              link: '/ja/solutions/wallets/sequence-kit/custom-connectors',
            },
          ],
        },
        {
          text: i18n._('Wallet Linking'),
          collapsed: true,
          items: [
            { text: i18n._('Overview'), link: '/ja/solutions/wallets/link-wallets/overview' },
            {
              text: i18n._('Integration Guide'),
              link: '/ja/solutions/wallets/link-wallets/integration-guide',
            },
          ],
        },
        {
          text: i18n._('Universal Wallet'),
          collapsed: true,
          items: [
            { text: i18n._('Overview'), link: '/ja/solutions/wallets/universal-wallet/overview' },
            {
              text: i18n._('Quickstart'),
              link: '/ja/solutions/wallets/universal-wallet/quickstart',
            },
            {
              text: i18n._('Examples'),
              collapsed: true,
              items: [
                {
                  text: i18n._('Connect Wallet'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/connect-wallet',
                },
                {
                  text: i18n._('Authenticate Users with Message Signature'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/auth-address',
                },
                {
                  text: i18n._('Signing & Verifying Messages'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/sign-message',
                },
                {
                  text: i18n._('No-wallet confirmation signatures'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/session-keys',
                },
                {
                  text: i18n._('Sending Transactions'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/send-transaction',
                },
                {
                  text: i18n._('Sending ERC-20 Tokens'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/send-erc20',
                },
                {
                  text: i18n._('Sending ERC-721 (NFT) Tokens'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/send-erc721',
                },
                {
                  text: i18n._('Sending ERC-1155 (Collectible) Tokens'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/send-erc1155',
                },
                {
                  text: i18n._('Sending a Batch of Transactions'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/send-batch-transactions',
                },
                {
                  text: i18n._('Building Backends with Sequence'),
                  link: '/ja/solutions/wallets/universal-wallet/examples/building-backends',
                },
              ],
            },
            //  {text: i18n._('Sequence Kit'), link: '/solutions/wallets/universal-wallet/sequence-kit'},
            {
              text: i18n._('Supported Platforms'),
              link: '/ja/solutions/wallets/universal-wallet/platforms',
            },
            {
              text: i18n._('Fiat On-Ramps'),
              link: '/ja/solutions/wallets/universal-wallet/fiat-on-ramps',
            },
            {
              text: i18n._('Key Management'),
              link: '/ja/solutions/wallets/universal-wallet/key-management',
            },
          ],
        },
      ],
    },
    {
      text: i18n._('Monetize'),
      // collapsed: true,
      items: [
        { text: i18n._('Overview'), link: '/ja/solutions/monetization-overview' },
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
                  link: '/ja/guides/custom-marketplace',
                },
                {
                  text: i18n._('Sell your ERC-1155 Game Items via a Web Shop'),
                  collapsed: true,
                  link: '/ja/guides/primary-sales',
                },
                {
                  text: i18n._('Create NFT Drop Sales'),
                  collapsed: true,
                  link: '/ja/guides/primary-drop-sales-erc721',
                },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   text: i18n._('Integrate token rewards into your Discord server'),
    //   link: '/ja/guides/discord'
    // },
    {
      text: i18n._('Templates'),
      link: '/ja/guides/template-overview',
      // items: [
      //   { text: i18n._('Embedded Wallet Demo'), link: '/ja/guides/templates/template-embedded-wallet' },
      //   { text: i18n._('Build a Backend Transaction Manager'), link: '/ja/guides/templates/building-relaying-server' }
      //   // { text: i18n._('Marketplace API Demo'), link: '/ja/guides/templates/template-marketplace-api' }
      // ]
    },
  ],

  // SDKs
  '/ja/sdk': [
    {
      text: i18n._('Game Engine'),
      // collapsed: true,
      items: [
        {
          text: i18n._('Unity'),
          collapsed: true,
          match: '/sdk/unity/overview',
          items: [
            { text: i18n._('Overview'), link: '/ja/sdk/unity/overview' },
            { text: i18n._('Installation'), link: '/ja/sdk/unity/installation' },
            { text: i18n._('Setup'), link: '/ja/sdk/unity/setup' },
            {
              text: i18n._('Authentication'),
              collapsed: false,
              items: [
                { text: i18n._('Introduction'), link: '/ja/sdk/unity/authentication/intro' },
                { text: i18n._('Email OTP'), link: '/ja/sdk/unity/authentication/email' },
                { text: i18n._('Social Sign In'), link: '/ja/sdk/unity/authentication/oidc' },
                { text: i18n._('PlayFab'), link: '/ja/sdk/unity/authentication/playfab' },
                { text: i18n._('Guest'), link: '/ja/sdk/unity/authentication/guest' },
                {
                  text: i18n._('Federated Accounts'),
                  link: '/ja/sdk/unity/authentication/federated-accounts',
                },
              ],
            },
            { text: i18n._('Write to blockchain'), link: '/ja/sdk/unity/write-to-blockchain' },
            { text: i18n._('Read from Blockchain'), link: '/ja/sdk/unity/read-from-blockchain' },
            { text: i18n._('Sign Messages'), link: '/ja/sdk/unity/sign-messages' },
            { text: i18n._('Recovering Sessions'), link: '/ja/sdk/unity/recovering-sessions' },
            { text: i18n._('Session Management'), link: '/ja/sdk/unity/session-management' },
            {
              text: i18n._('On-Ramp Funds via Credit Card'),
              link: '/ja/sdk/unity/onboard-user-funds',
            },
            {
              text: i18n._('Peer to Peer Trading / Marketplace'),
              collapsed: false,
              items: [
                { text: i18n._('Introduction'), link: '/ja/sdk/unity/marketplace/intro' },
                {
                  text: i18n._('Reading Orders'),
                  link: '/ja/sdk/unity/marketplace/reading-orders',
                },
                {
                  text: i18n._('Filling Orders'),
                  link: '/ja/sdk/unity/marketplace/filling-orders',
                },
                { text: i18n._('Checkout UI'), link: '/ja/sdk/unity/marketplace/checkout-ui' },
              ],
            },
            { text: i18n._('Currency Swaps'), link: '/ja/sdk/unity/currency-swaps' },
            {
              text: i18n._('Connect with External Wallets'),
              link: '/ja/sdk/unity/connecting-external-wallets',
            },
            {
              text: i18n._('Upgrading from v2 to v3'),
              link: '/ja/sdk/unity/v2-to-v3-upgrade-guide',
            },
            { text: i18n._('Wallet UI'), link: '/ja/sdk/unity/wallet-ui' },
            { text: i18n._('Deploy Contracts'), link: '/ja/sdk/unity/deploy-contracts' },
            {
              text: i18n._('Advanced Blockchain Interactions'),
              collapsed: true,
              items: [
                { text: i18n._('Introduction'), link: '/ja/sdk/unity/Advanced/introduction' },
                { text: i18n._('Wallets'), link: '/ja/sdk/unity/Advanced/wallets' },
                { text: i18n._('Clients'), link: '/ja/sdk/unity/Advanced/clients' },
                { text: i18n._('Transfers'), link: '/ja/sdk/unity/Advanced/transfers' },
                { text: i18n._('Contracts'), link: '/ja/sdk/unity/Advanced/contracts' },
                { text: i18n._('Tokens'), link: '/ja/sdk/unity/Advanced/tokens' },
              ],
            },
          ],
        },
        {
          text: i18n._('Unreal'),
          collapsed: true,
          match: '/sdk/unreal/introduction',
          items: [
            { text: i18n._('Introduction'), link: '/ja/sdk/unreal/introduction' },
            { text: i18n._('Installation'), link: '/ja/sdk/unreal/installation' },
            { text: i18n._('Configuration'), link: '/ja/sdk/unreal/configuration' },
            { text: i18n._('Blueprint Subsystems'), link: '/ja/sdk/unreal/subsystems' },
            { text: i18n._('Bootstrap your Game'), link: '/ja/sdk/unreal/bootstrap_game' },
            { text: i18n._('Sign-In UI'), link: '/ja/sdk/unreal/user_interfaces' },
            { text: i18n._('Authenticate Users'), link: '/ja/sdk/unreal/authentication' },
            { text: i18n._('Write to Blockchain'), link: '/ja/sdk/unreal/write-to-blockchain' },
            { text: i18n._('Read from Blockchain'), link: '/ja/sdk/unreal/read-from-blockchain' },
            { text: i18n._('On-Ramp via Credit Card'), link: '/ja/sdk/unreal/onboard-user-funds' },
            { text: i18n._('Advanced Blockchain Interactions'), link: '/ja/sdk/unreal/advanced' },
            { text: i18n._('Platform Requirements'), link: '/ja/sdk/unreal/platforms' },
          ],
        },
      ],
    },
    {
      text: i18n._('Mobile'),
      items: [
        // { text: i18n._('Android'), link: '/ja/sdk/android' },
        // { text: i18n._('iOS'), link: '/ja/sdk/iOS' },
        { text: i18n._('React Native'), link: '/ja/sdk/mobile' },
      ],
    },
    {
      text: i18n._('Web3'),
      items: [
        {
          text: i18n._('TypeScript'),
          collapsed: true,
          items: [
            { text: i18n._('Overview'), link: '/ja/sdk/typescript/guides/overview' },
            { text: i18n._('Connect Wallet'), link: '/ja/sdk/typescript/guides/connect-wallet' },
            {
              text: i18n._('Authenticate Users with Message Signature'),
              link: '/ja/sdk/typescript/guides/auth-address',
            },
            {
              text: i18n._('Signing & Verifying Messages'),
              link: '/ja/sdk/typescript/guides/sign-message',
            },
            {
              text: i18n._('No-wallet confirmation signatures'),
              link: '/ja/sdk/typescript/guides/session-keys',
            },
            {
              text: i18n._('Sending Transactions'),
              link: '/ja/sdk/typescript/guides/send-transaction',
            },
            { text: i18n._('Sending ERC-20 Tokens'), link: '/ja/sdk/typescript/guides/send-erc20' },
            {
              text: i18n._('Sending ERC-721 (NFT) Tokens'),
              link: '/ja/sdk/typescript/guides/send-erc721',
            },
            {
              text: i18n._('Sending ERC-1155 (Collectible) Tokens'),
              link: '/ja/sdk/typescript/guides/send-erc1155',
            },
            {
              text: i18n._('Sending a Batch of Transactions'),
              link: '/ja/sdk/typescript/guides/send-batch-transactions',
            },
            {
              text: i18n._('Building Backends with Sequence'),
              link: '/ja/sdk/typescript/guides/building-backends',
            },
            {
              text: i18n._('Wallet Connectors'),
              collapsed: true,
              items: [
                { text: i18n._('Overview'), link: '/ja/sdk/typescript/connectors/overview' },
                { text: i18n._('Wagmi'), link: '/ja/sdk/typescript/connectors/wagmi' },
                { text: i18n._('RainbowKit'), link: '/ja/sdk/typescript/connectors/rainbow-kit' },
                {
                  text: i18n._('Web3 Onboard'),
                  link: '/ja/sdk/typescript/connectors/web3-onboard',
                },
                {
                  text: i18n._('Web3 React V6'),
                  link: '/ja/sdk/typescript/connectors/web3-react-v6',
                },
                { text: i18n._('Web3Modal'), link: '/ja/sdk/typescript/connectors/web3modal' },
                { text: i18n._('FAQ'), link: '/ja/sdk/typescript/connectors/FAQ' },
              ],
            },
          ],
        },
        {
          text: i18n._('Go'),
          link: '/ja/sdk/go/overview',
          items: [{ text: i18n._('Overview'), link: '/ja/sdk/go/overview' }],
        },
      ],
    },
    {
      text: i18n._('Common Questions'),
      collapsed: true,
      items: [
        {
          text: i18n._('How do I do signature validation?'),
          link: '/ja/solutions/wallets/universal-wallet/examples/auth-address',
        },
        // ...
      ],
    },
  ],

  // apis
  '/ja/api': [
    {
      text: i18n._('Transactions'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/ja/api/transactions/overview' },
        { text: i18n._('Installation'), link: '/ja/api/transactions/installation' },
        { text: i18n._('API References'), link: '/ja/api/transactions/endpoints' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          items: [
            {
              text: i18n._('Fetch Fee Options'),
              link: '/ja/api/transactions/examples/fetch-fee-options',
            },
            {
              text: i18n._('Send Transactions'),
              link: '/ja/api/transactions/examples/send-transactions',
            },
            {
              text: i18n._('Fetch Transaction Receipts'),
              link: '/ja/api/transactions/examples/fetch-transaction-receipts',
            },
          ],
        },
      ],
    },
    {
      text: i18n._('Indexer'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/ja/api/indexer/overview' },
        { text: i18n._('Installation'), link: '/ja/api/indexer/installation' },
        { text: i18n._('API References'), link: '/ja/api/indexer/endpoints' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          items: [
            { text: i18n._('Fetch Tokens'), link: '/ja/api/indexer/examples/fetch-tokens' },
            {
              text: i18n._('Transaction History'),
              link: '/ja/api/indexer/examples/transaction-history',
            },
            { text: i18n._('Unique Tokens'), link: '/ja/api/indexer/examples/unique-tokens' },
            {
              text: i18n._('Transaction History Token Contract'),
              link: '/ja/api/indexer/examples/transation-history-token-contract',
            },
            {
              text: i18n._('Native Network Balance'),
              link: '/ja/api/indexer/examples/native-network-balance',
            },
            { text: i18n._('Metadata Tips'), link: '/ja/api/indexer/metadata-tips' },
            { text: i18n._('Webhooks'), link: '/ja/api/indexer/examples/webhook-listener' },
            { text: i18n._('Subscriptions'), link: '/ja/api/indexer/examples/subscriptions' },
          ],
        },
      ],
    },
    {
      text: i18n._('Analytics'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/ja/api/analytics/overview' },
        { text: i18n._('API References'), link: '/ja/api/analytics/endpoints' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          items: [
            { text: i18n._('Wallets'), link: '/ja/api/analytics/examples/wallets' },
            { text: i18n._('Marketplaces'), link: '/ja/api/analytics/examples/marketplace' },
          ],
        },
      ],
    },
    {
      text: i18n._('Metadata'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/ja/api/metadata/overview' },
        { text: i18n._('API References'), link: '/ja/api/metadata/endpoints' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          items: [
            { text: i18n._('Token Metadata'), link: '/ja/api/metadata/token-metadata' },
            { text: i18n._('Contract Metadata'), link: '/ja/api/metadata/contract-metadata' },
            { text: i18n._('REST API'), link: '/ja/api/metadata/rest-api' },
          ],
        },
      ],
    },
    {
      text: i18n._('Infrastructure'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/ja/api/infrastructure/overview' },
        { text: i18n._('API References'), link: '/ja/api/infrastructure/endpoints' },
      ],
    },
    {
      text: i18n._('Builder'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/ja/api/builder/overview' },
        { text: i18n._('API References'), link: '/ja/api/builder/endpoints' },
      ],
    },
    {
      text: i18n._('Marketplace'),
      collapsed: false,
      items: [
        { text: i18n._('Overview'), link: '/ja/api/marketplace/overview' },
        { text: i18n._('API References'), link: '/ja/api/marketplace/endpoints' },

        // { text: i18n._('Schema'), link: '/ja/api/marketplace/schema' },
        // { text: i18n._('Marketplace API'), link: '/ja/api/marketplace/api' },
        {
          text: i18n._('Examples'),
          collapsed: false,
          link: '/ja/api/marketplace/examples/orderbook-transactions',
          items: [
            {
              text: i18n._('Creating Market Orders & Listings'),
              link: '/ja/api/marketplace/examples/orderbook-transactions',
            },
            { text: i18n._('Get Top Orders'), link: '/ja/api/marketplace/examples/get-top-orders' },
            { text: i18n._('Get Orderbook'), link: '/ja/api/marketplace/examples/get-orderbook' },
            {
              text: i18n._('Get User Activities'),
              link: '/ja/api/marketplace/examples/get-user-activities',
            },
          ],
        },
      ],
    },
    {
      text: i18n._('Node Gateway'),
      collapsed: false,
      items: [{ text: i18n._('Overview'), link: '/ja/api/node-gateway' }],
    },
  ],

  // guides
  '/ja/guides': [
    {
      text: i18n._('Guides'),
      collapsed: false,
      items: [
        {
          text: i18n._('Game Developers'),
          collapsed: true,
          items: [
            {
              text: i18n._('Build a Game with WebGL'),
              collapsed: true,
              link: '/ja/guides/webgl-guide',
            },
            {
              text: i18n._('Build a Unity Game'),
              collapsed: true,
              link: '/ja/guides/jelly-forest-unity-guide',
            },
            {
              text: i18n._('Building Transaction Heavy Games with Unity'),
              collapsed: true,
              link: '/ja/guides/building-transaction-heavy-games-with-unity',
            },
            {
              text: i18n._('How to build a Game with Unreal Engine'),
              collapsed: true,
              link: '/ja/guides/unreal-ew-guide',
            },
            {
              text: i18n._('Using Unity IAP to Sell NFTs'),
              collapsed: true,
              link: '/ja/guides/using-unity-iap-to-sell-nfts',
            },
            {
              text: i18n._('How to sell On-Chain Items in your Unreal Project'),
              collapsed: true,
              link: '/ja/guides/unreal-primary-sales',
            },
            {
              text: i18n._('How to do Primary Sales for On-Chain Items in Unity'),
              collapsed: true,
              link: '/ja/guides/unity-primary-sales',
            },
            {
              text: i18n._('Build a Telegram Mini-Game in Unity'),
              collapsed: true,
              link: '/ja/guides/unity-webgl-telegram',
            },
            {
              text: i18n._('Build a Telegram Mini-App with Sequence'),
              collapsed: true,
              link: '/ja/guides/telegram-integration',
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
              link: '/ja/guides/mint-collectibles-serverless',
            },
            {
              text: i18n._('Manage Collection Metadata'),
              collapsed: true,
              link: '/ja/guides/metadata-guide',
            },
            {
              text: i18n._('Build a Treasure Chest with AI Minting'),
              collapsed: true,
              link: '/ja/guides/treasure-chest-guide',
            },
            {
              text: i18n._('Build a Backend Transaction Service'),
              collapsed: true,
              link: '/ja/guides/building-relaying-server',
            },
            {
              text: i18n._('Leverage Sequence Analytics API in Dune'),
              collapsed: true,
              link: '/ja/guides/analytics-guide',
            },
            {
              text: i18n._('Build an Embedded Wallet Linking Service'),
              collapsed: true,
              link: '/ja/solutions/wallets/link-wallets/integration-guide',
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
              link: '/ja/guides/custom-marketplace',
            },
            {
              text: i18n._('Sell your ERC-1155 Game Items via a Web Shop'),
              collapsed: true,
              link: '/ja/guides/primary-sales',
            },
            {
              text: i18n._('Create NFT Drop Sales'),
              collapsed: true,
              link: '/ja/guides/primary-drop-sales-erc721',
            },
          ],
        },
      ],
    },
    {
      text: i18n._('Templates'),
      link: '/ja/guides/template-overview',
    },
  ],

  // Support
  '/ja/support': [
    {
      text: i18n._('Support'),
      items: [
        { text: i18n._('Support'), link: '/ja/support' },
        { text: i18n._('Changelog'), link: 'https://0xsequence.featurebase.app/' },
        { text: i18n._('Restricted Regions'), link: '/ja/support/restricted-regions' },
        { text: i18n._('FAQ'), link: 'https://support.sequence.xyz' },
        { text: i18n._('Token Directory'), link: '/ja/support/token-directory' },
        { text: i18n._('Discord'), link: 'https://discord.gg/sequence' },
        { text: i18n._("We're hiring!"), link: 'https://horizon.io/careers' },
        { text: i18n._('Contact Us'), link: 'https://support.sequence.xyz' },
      ],
    },
    {
      text: i18n._('Sequence Builder Admin'),
      items: [
        { text: i18n._('Project Management'), link: '/ja/support/builder/project-management' },
        { text: i18n._('Project Settings'), link: '/ja/support/builder/project-settings' },
      ],
    },
  ],
}
