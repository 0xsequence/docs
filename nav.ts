import type { Sidebar, TopNav } from 'vocs'

export const topNav = [
  {
    text: 'Solutions',
    items: [
      {
        text: 'Sequence Builder',
        link: '/solutions/builder/overview',
        match: '/solutions/builder/overview',
      },
      {
        text: 'Onboard',
        link: '/solutions/wallets/overview',
        match: '/solutions/wallets/overview',
      },
      {
        text: 'Monetize',
        link: '/solutions/monetization-overview',
        match: '/solutions/monetization-overview',
      },
      { text: 'Power', link: '/solutions/power-overview', match: '/solutions/power-overview' },
    ],
  },
  {
    text: 'Resources',
    items: [
      { text: 'Guides', link: '/guides/guide-overview', match: '/guides/guide-overview' },
      { text: 'Templates', link: '/guides/template-overview', match: '/guides/template-overview' },
    ],
  },
  {
    text: 'SDKs',
    items: [
      { text: 'Unity', link: '/sdk/unity/overview', match: '/sdk/unity/overview' },
      { text: 'Unreal', link: '/sdk/unreal/introduction', match: '/sdk/unreal/introduction' },
      {
        text: 'React',
        link: '/solutions/wallets/sequence-kit/overview',
        match: '/solutions/wallets/sequence-kit/overview',
      },
      {
        text: 'Typescript',
        link: '/sdk/typescript/guides/overview',
        match: '/sdk/typescript/guides/overview',
      },
      { text: 'Go', link: '/sdk/go/overview', match: '/sdk/go/overview' },
      // { text: 'Android', link: '/sdk/android', match: '/sdk/android' },
      { text: 'Mobile', link: '/sdk/mobile', match: '/sdk/mobile' },
      // { text: 'iOS', link: '/sdk/iOS', match: '/sdk/iOS' }
    ],
  },

  // replace links.
  {
    text: 'APIs',
    items: [
      {
        text: 'Transactions API',
        link: '/api/transactions/overview',
        match: '/api/transactions/overview',
      },
      { text: 'Analytics API', link: '/api/analytics/overview', match: '/api/analytics/overview' },
      { text: 'Indexer API', link: '/api/indexer/overview', match: '/api/indexer/overview' },
      { text: 'Metadata API', link: '/api/metadata/overview', match: '/api/metadata/overview' },
      {
        text: 'Marketplace API',
        link: '/api/marketplace/overview',
        match: '/api/marketplace/overview',
      },
      {
        text: 'Infrastructure API',
        link: '/api/infrastructure/overview',
        match: '/api/infrastructure/overview',
      },
      {
        text: 'Builder API',
        link: '/api/builder/overview',
        match: '/api/builder/overview',
      },
      { text: 'Node Gateway', link: '/api/node-gateway', match: '/api/node-gateway' },
    ],
  },

  {
    text: 'Support',
    items: [
      { text: 'Support', link: '/support' },
      { text: 'Integrated Chains', link: '/solutions/technical-references/chain-support/' },
      { text: 'Changelog', link: 'https://0xsequence.featurebase.app/' },
      { text: 'Restricted Regions', link: '/support/restricted-regions' },
      { text: 'Token Directory', link: '/support/token-directory' },
      { text: 'FAQ', link: 'https://support.sequence.xyz' },
      { text: 'Discord', link: 'https://discord.gg/sequence' },
      { text: "We're hiring!", link: 'https://horizon.io/careers' },
      { text: 'Contact Us', link: 'https://support.sequence.xyz' },
    ],
  },
] as TopNav

export const sidebar = {
  // Overview
  '/solutions': [
    {
      text: 'Overview',
      link: '/solutions/builder/overview',
    },
    {
      text: 'Getting Started',
      link: '/solutions/builder/getting-started',
    },
    {
      text: 'Onboard',
      items: [
        { text: 'Overview', link: '/solutions/wallets/overview' },
        {
          text: 'Ecosystem Wallets',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/solutions/wallets/ecosystem/overview' },
            { text: 'Configuration', link: '/solutions/wallets/ecosystem/configuration' },
            { text: 'Cross-App Integration', link: '/solutions/wallets/ecosystem/cross-app' },
          ],
        },
        {
          text: 'Embedded Wallet',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/solutions/wallets/embedded-wallet/overview' },
            { text: 'Quickstart', link: '/solutions/wallets/embedded-wallet/quickstart' },
            {
              text: 'Setup',
              collapsed: true,
              items: [
                { text: 'Configuration', link: '/solutions/builder/embedded-wallet' },
                {
                  text: 'Google Setup',
                  link: '/solutions/builder/embedded-wallet/google-configuration',
                },
                {
                  text: 'Apple Setup',
                  link: '/solutions/builder/embedded-wallet/apple-configuration',
                },
                {
                  text: 'PlayFab Setup',
                  link: '/solutions/builder/embedded-wallet/playfab-configuration',
                },
                {
                  text: 'Stytch Setup',
                  link: '/solutions/builder/embedded-wallet/stytch-configuration',
                },
                {
                  text: 'Guest Wallet Setup',
                  link: '/solutions/builder/embedded-wallet/guest-wallet-configuration',
                },
              ],
            },
            {
              text: 'Examples',
              collapsed: true,
              items: [
                {
                  text: 'Authentication',
                  link: '/solutions/wallets/embedded-wallet/examples/authentication',
                },
                {
                  text: 'Use Wallets',
                  link: '/solutions/wallets/embedded-wallet/examples/use-wallets',
                },
                {
                  text: 'Multi-account Support',
                  link: '/solutions/wallets/embedded-wallet/examples/account-federation',
                },
                {
                  text: 'Manage Sessions',
                  link: '/solutions/wallets/embedded-wallet/examples/manage-sessions',
                },
                { text: 'On-ramp', link: '/solutions/wallets/embedded-wallet/examples/on-ramp' },
                {
                  text: 'Fee Options',
                  link: '/solutions/wallets/embedded-wallet/examples/fee-options',
                },
                {
                  text: 'Backend Verification',
                  link: '/solutions/wallets/embedded-wallet/examples/verification',
                },
                {
                  text: 'Transaction Receipts',
                  link: '/solutions/wallets/embedded-wallet/examples/transaction-receipts',
                },
              ],
            },
            {
              text: 'Architecture',
              collapsed: true,
              items: [
                {
                  text: 'Overview',
                  link: '/solutions/wallets/embedded-wallet/architecture/overview',
                },
                {
                  text: 'Action Payloads',
                  link: '/solutions/wallets/embedded-wallet/architecture/action-payloads',
                },
                {
                  text: 'Response Payloads',
                  link: '/solutions/wallets/embedded-wallet/architecture/response-payloads',
                },
                {
                  text: 'Trust Contract Recovery Flow',
                  link: '/solutions/wallets/embedded-wallet/architecture/trust-contract-recovery-flow',
                },
                {
                  text: 'Enclave Verification',
                  link: '/solutions/wallets/embedded-wallet/architecture/enclave-verification',
                },
                {
                  text: 'Intents',
                  link: '/solutions/wallets/embedded-wallet/architecture/intents',
                },
              ],
            },
            {
              text: 'Migrating to Sequence',
              link: '/solutions/wallets/embedded-wallet/migration',
            },
            { text: 'FAQ', link: '/solutions/wallets/embedded-wallet/faq' },
          ],
        },
        {
          text: 'Sequence Kit',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/solutions/wallets/sequence-kit/overview' },
            { text: 'Quickstart', link: '/solutions/wallets/sequence-kit/getting-started' },
            {
              text: 'Custom Configuration',
              link: '/solutions/wallets/sequence-kit/custom-configuration',
            },
            {
              text: 'Sequence Pay',
              collapsed: false,
              items: [
                { text: 'Checkout', link: '/solutions/wallets/sequence-kit/checkout' },
                { text: 'Smart Swaps', link: '/solutions/wallets/sequence-kit/smart-swaps' },
                { text: 'On-ramp', link: '/solutions/wallets/sequence-kit/on-ramp' },
              ],
            },

            {
              text: 'Custom Connectors',
              link: '/solutions/wallets/sequence-kit/custom-connectors',
            },
          ],
        },

        {
          text: 'Wallet Linking',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/solutions/wallets/link-wallets/overview' },
            {
              text: 'Integration Guide',
              link: '/solutions/wallets/link-wallets/integration-guide',
            },
          ],
        },
      ],
    },
    {
      text: 'Monetize',
      // collapsed: true,
      items: [
        { text: 'Overview', link: '/solutions/monetization-overview' },
        {
          text: 'Marketplaces',
          collapsed: true,
          items: [
            {
              text: 'White-label Marketplace',
              collapsed: true,
              items: [
                {
                  text: 'Overview',
                  link: '/solutions/marketplaces/white-label-marketplace/overview',
                  collapsed: true,
                },
                {
                  text: 'Guide',
                  link: '/solutions/marketplaces/white-label-marketplace/guide',
                  collapsed: true,
                },
                {
                  text: 'Video Walkthrough',
                  link: '/solutions/marketplaces/white-label-marketplace/video-walkthrough',
                  collapsed: true,
                },
              ],
            },
            {
              text: 'Build your Custom Marketplace',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/solutions/marketplaces/orderbook/overview' },
                { text: 'Starter Template', link: '/solutions/marketplaces/orderbook/starter' },
              ],
            },
          ],
        },
        {
          text: 'Sequence Pay',
          collapsed: false,
          items: [
            {
              text: 'Overview',
              link: '/solutions/payments/overview',
            },
            { text: 'Checkout', link: '/solutions/wallets/sequence-kit/checkout' },
            { text: 'Smart Swaps', link: '/solutions/wallets/sequence-kit/smart-swaps' },
            { text: 'On-ramp', link: '/solutions/wallets/sequence-kit/on-ramp' },
          ],
        },
      ],
    },
    {
      text: 'Power',
      items: [
        { text: 'Overview', link: '/solutions/power-overview' },
        {
          text: 'Deployable Contracts',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/solutions/builder/contracts' },
            {
              text: 'Deploy a Collectible Contract',
              link: '/solutions/collectibles/contracts/deploy-an-item-collection',
            },
            // {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
            // {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
            {
              text: 'Deploy an In-Game Currency (ERC20)',
              link: '/solutions/collectibles/contracts/deploy-ERC20-currency',
            },
            {
              text: 'Deploy a Soulbound Token Contract',
              link: '/solutions/collectibles/contracts/deploy-soulbound-token',
            },
            {
              text: 'Deploy a Primary Sales Contract',
              link: '/solutions/collectibles/contracts/deploy-primary-sales-contract',
            },
          ],
        },
        {
          text: 'Manage Collections',
          link: '/solutions/builder/collections',
        },
        {
          text: 'Querying Blockchain Data',
          collapsed: false,
          items: [
            { text: 'Indexer', link: '/solutions/builder/indexer' },
            { text: 'Webhooks', link: '/solutions/builder/webhooks' },
          ],
        },
        {
          text: 'Transaction Manager',
          link: '/solutions/transaction-manager/overview',
        },
        {
          text: 'Analytics',
          link: '/solutions/builder/analytics',
        },
        {
          text: 'Gas Sponsorship',
          link: '/solutions/builder/gas-tank',
        },

        {
          text: 'Node Gateway',
          link: '/solutions/builder/node-gateway',
        },
        // { text: 'Minter', link: '/solutions/minter' }
      ],
    },
    // {
    //   text: 'Sequence Builder',
    //   link: '/solutions/builder/overview',
    //   match: '/solutions/builder/overview',
    // },
    {
      text: 'Technical References',
      items: [
        { text: 'Chain Support', link: '/solutions/technical-references/chain-support' },
        // { text: 'EIP5189 vs. 4337', link: '/solutions/technical-references/5189-4337' },
        {
          text: 'Why Smart Contract Wallets?',
          link: '/solutions/technical-references/wallet-contracts/why',
        },
        {
          text: 'Ethers v6 Support',
          link: '/solutions/technical-references/ethers-v6-migration',
        },
        {
          text: 'Contract Internals',
          collapsed: true,
          items: [
            { text: 'Deployment', link: '/solutions/technical-references/internals/deployment' },
            {
              text: 'Sequence v1',
              collapsed: true,
              items: [
                { text: 'Deploy', link: '/solutions/technical-references/internals/v1/deploy' },
                {
                  text: 'Wallet Factory',
                  link: '/solutions/technical-references/internals/v1/wallet-factory',
                },
                {
                  text: 'Wallet Configuration',
                  link: '/solutions/technical-references/internals/v1/wallet-configuration',
                },
                // {text: 'Transaction Encoding', link: '/solutions/technical-references/internals/v1/07-transaction-encoding'},
                {
                  text: 'Signature Encoding',
                  link: '/solutions/technical-references/internals/v1/signature-encoding',
                },
                {
                  text: 'Wallet Context',
                  link: '/solutions/technical-references/internals/v1/wallet-context',
                },
              ],
            },
            {
              text: 'Sequence v2',
              collapsed: true,
              items: [
                { text: 'Deploy', link: '/solutions/technical-references/internals/v2/deploy' },
                {
                  text: 'Wallet Configuration',
                  link: '/solutions/technical-references/internals/v2/configuration',
                },
              ],
            },
            {
              text: 'Contract Audits',
              link: '/solutions/technical-references/internals/contract-audits',
            },
          ],
        },
      ],
    },
  ],

  '/guides': [
    {
      text: 'Guides',
      collapsed: false,
      items: [
        {
          text: 'Game Developers',
          collapsed: true,
          items: [
            { text: 'Build a Game with WebGL', 
              collapsed: true, 
              link: '/guides/webgl-guide'
            },
            {
              text: 'Build a Game with Unity',
              collapsed: true,
              link: '/guides/jelly-forest-unity-guide',
            },
            {
              text: 'Building Transaction Heavy Games with Unity',
              collapsed: true,
              link: '/guides/building-transaction-heavy-games-with-unity',
            },
            {
              text: 'Build a Game with Unreal Engine',
              collapsed: true,
              link: '/guides/unreal-ew-guide',
            },
            {
              text: 'Using Unity IAP to Sell NFTs',
              collapsed: true,
              link: '/guides/using-unity-iap-to-sell-nfts',
            },
            {
              text: 'How to do Primary Sales for On-Chain Items in Unity',
              collapsed: true,
              link: '/guides/unity-primary-sales',
            },
            {
              text: 'Build a Telegram Mini-Game in Unity',
              collapsed: true,
              link: '/guides/unity-webgl-telegram',
            },
            {
              text: 'Build a Telegram Mini-App with Sequence',
              collapsed: true,
              link: '/guides/telegram-integration',
            },
          ],
        },
        {
          text: 'Blockchain Integrations',
          collapsed: true,
          items: [
            {
              text: 'Build a Collectible Minting Service',
              collapsed: true,
              link: '/guides/mint-collectibles-serverless',
            },
            { text: 'Manage Collection Metadata', collapsed: true, link: '/guides/metadata-guide' },
            {
              text: 'Build a Treasure Chest with AI Minting',
              collapsed: true,
              link: '/guides/treasure-chest-guide',
            },
            {
              text: 'Build a Backend Transaction Service',
              collapsed: true,
              link: '/guides/building-relaying-server',
            },
            {
              text: 'Leverage Sequence Analytics API in Dune',
              collapsed: true,
              link: '/guides/analytics-guide',
            },
            {
              text: 'Build an Embedded Wallet Linking Service',
              collapsed: true,
              link: '/solutions/wallets/link-wallets/integration-guide',
            },
          ],
        },
        {
          text: 'Marketplaces & Primary Sales',
          collapsed: true,
          items: [
            {
              text: 'Build a Custom Marketplace',
              collapsed: true,
              link: '/guides/custom-marketplace',
            },
            {
              text: 'Sell your ERC-1155 Game Items via a Web Shop',
              collapsed: true,
              link: '/guides/primary-sales',
            },
            {
              text: 'Create NFT Drop Sales',
              collapsed: true,
              link: '/guides/primary-drop-sales-erc721',
            },
          ],
        },
      ],
    },
    // {
    //   text: 'Integrate token rewards into your Discord server',
    //   link: '/guides/discord'
    // },
    {
      text: 'Templates',
      link: '/guides/template-overview',
      // items: [
      //   { text: 'Embedded Wallet Demo', link: '/guides/templates/template-embedded-wallet' },
      //   { text: 'Build a Backend Transaction Manager', link: '/guides/templates/building-relaying-server' }
      //   // { text: 'Marketplace API Demo', link: '/guides/templates/template-marketplace-api' }
      // ]
    },
  ],

  // SDKs
  '/sdk': [
    {
      text: 'Game Engine',
      // collapsed: true,
      items: [
        {
          text: 'Unity',
          collapsed: true,
          match: '/sdk/unity/overview',
          items: [
            { text: 'Overview', link: '/sdk/unity/overview' },
            { text: 'Installation', link: '/sdk/unity/installation' },
            { text: 'Setup', link: '/sdk/unity/setup' },
            { text: 'Bootstrap your Game', link: '/sdk/unity/bootstrap_game' },
            {
              text: 'Authentication',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/sdk/unity/authentication/intro' },
                { text: 'Email OTP', link: '/sdk/unity/authentication/email' },
                { text: 'Social Sign In', link: '/sdk/unity/authentication/oidc' },
                { text: 'PlayFab', link: '/sdk/unity/authentication/playfab' },
                { text: 'Guest', link: '/sdk/unity/authentication/guest' },
                {
                  text: 'Federated Accounts',
                  link: '/sdk/unity/authentication/federated-accounts',
                },
              ],
            },
            { text: 'Write to blockchain', link: '/sdk/unity/write-to-blockchain' },
            { text: 'Read from Blockchain', link: '/sdk/unity/read-from-blockchain' },
            { text: 'Sign Messages', link: '/sdk/unity/sign-messages' },
            { text: 'Recovering Sessions', link: '/sdk/unity/recovering-sessions' },
            { text: 'Session Management', link: '/sdk/unity/session-management' },
            { text: 'On-Ramp Funds via Credit Card', link: '/sdk/unity/onboard-user-funds' },
            { 
              text: 'Peer to Peer Trading / Marketplace',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/sdk/unity/marketplace/intro' },
                { text: 'Reading Orders', link: '/sdk/unity/marketplace/reading-orders' },
                { text: 'Filling Orders', link: '/sdk/unity/marketplace/filling-orders' },
                { text: 'Checkout UI', link: '/sdk/unity/marketplace/checkout-ui' },
              ]
            },
            { text: 'Currency Swaps', link: '/sdk/unity/currency-swaps' },
            {
              text: 'Connect with External Wallets',
              link: '/sdk/unity/connecting-external-wallets',
            },
            { text: 'Upgrading from v2 to v3', link: '/sdk/unity/v2-to-v3-upgrade-guide' },
            { text: 'Wallet UI', link: '/sdk/unity/wallet-ui' },
            { text: 'Deploy Contracts', link: '/sdk/unity/deploy-contracts' },
            {
              text: 'Advanced Blockchain Interactions',
              collapsed: true,
              items: [
                { text: 'Introduction', link: '/sdk/unity/Advanced/introduction' },
                { text: 'Wallets', link: '/sdk/unity/Advanced/wallets' },
                { text: 'Clients', link: '/sdk/unity/Advanced/clients' },
                { text: 'Transfers', link: '/sdk/unity/Advanced/transfers' },
                { text: 'Contracts', link: '/sdk/unity/Advanced/contracts' },
                { text: 'Tokens', link: '/sdk/unity/Advanced/tokens' },
              ],
            },
          ],
        },
        {
          text: 'Unreal',
          collapsed: true,
          match: '/sdk/unreal/introduction',
          items: [
            { text: 'Introduction', link: '/sdk/unreal/introduction' },
            { text: 'Quickstart', link: '/sdk/unreal/quickstart' },
            { text: 'Installation', link: '/sdk/unreal/installation' },
            { text: 'Configuration', link: '/sdk/unreal/configuration' },
            { text: 'Blueprint Subsystems', link: '/sdk/unreal/subsystems' },
            { text: "Bootstrap your Game", link: "/sdk/unreal/bootstrap_game" },
            { text: 'Sign-In UI', link: '/sdk/unreal/user_interfaces' },
            { text: 'Authenticate Users', link: '/sdk/unreal/authentication' },
            { text: 'Write to Blockchain', link: '/sdk/unreal/write-to-blockchain' },
            { text: 'Read from Blockchain', link: '/sdk/unreal/read-from-blockchain' },
            { text: 'On-Ramp with Credit Card', link: '/sdk/unreal/onboard-user-funds' },
            { text: 'Advanced Blockchain Interactions', link: '/sdk/unreal/advanced' },
            { text: 'Platform Requirements', link: '/sdk/unreal/platforms' },
          ],
        },
      ],
    },
    {
      text: 'Mobile',
      items: [
        // { text: 'Android', link: '/sdk/android' },
        // { text: 'iOS', link: '/sdk/iOS' },
        { text: 'React Native', link: '/sdk/mobile' },
      ],
    },

    {
      text: 'Web3',
      items: [
        {
          text: 'TypeScript',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/sdk/typescript/guides/overview' },
            { text: 'Connect Wallet', link: '/sdk/typescript/guides/connect-wallet' },
            {
              text: 'Authenticate Users with Message Signature',
              link: '/sdk/typescript/guides/auth-address',
            },
            { text: 'Signing & Verifying Messages', link: '/sdk/typescript/guides/sign-message' },
            {
              text: 'No-wallet confirmation signatures',
              link: '/sdk/typescript/guides/session-keys',
            },
            { text: 'Sending Transactions', link: '/sdk/typescript/guides/send-transaction' },
            { text: 'Sending ERC-20 Tokens', link: '/sdk/typescript/guides/send-erc20' },
            { text: 'Sending ERC-721 (NFT) Tokens', link: '/sdk/typescript/guides/send-erc721' },
            {
              text: 'Sending ERC-1155 (Collectible) Tokens',
              link: '/sdk/typescript/guides/send-erc1155',
            },
            {
              text: 'Sending a Batch of Transactions',
              link: '/sdk/typescript/guides/send-batch-transactions',
            },
            {
              text: 'Building Backends with Sequence',
              link: '/sdk/typescript/guides/building-backends',
            },
            {
              text: 'Wallet Connectors',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/sdk/typescript/connectors/overview' },
                { text: 'Wagmi', link: '/sdk/typescript/connectors/wagmi' },
                { text: 'RainbowKit', link: '/sdk/typescript/connectors/rainbow-kit' },
                { text: 'Web3 Onboard', link: '/sdk/typescript/connectors/web3-onboard' },
                { text: 'Web3 React V6', link: '/sdk/typescript/connectors/web3-react-v6' },
                { text: 'Web3Modal', link: '/sdk/typescript/connectors/web3modal' },
                { text: 'FAQ', link: '/sdk/typescript/connectors/FAQ' },
              ],
            },
          ],
        },
        {
          text: 'Go',
          link: '/sdk/go/overview',
          items: [{ text: 'Overview', link: '/sdk/go/overview' }],
        },
      ],
    }
  ],

  // apis
  '/api': [
    {
      text: 'Transactions',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/transactions/overview' },
        { text: 'Installation', link: '/api/transactions/installation' },
        { text: 'API References', link: '/api/transactions/endpoints' },
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Fetch Fee Options', link: '/api/transactions/examples/fetch-fee-options' },
            { text: 'Send Transactions', link: '/api/transactions/examples/send-transactions' },
            {
              text: 'Fetch Transaction Receipts',
              link: '/api/transactions/examples/fetch-transaction-receipts',
            },
          ],
        },
      ],
    },
    {
      text: 'Indexer',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/indexer/overview' },
        { text: 'Installation', link: '/api/indexer/installation' },
        { text: 'API References', link: '/api/indexer/endpoints' },
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Fetch Tokens', link: '/api/indexer/examples/fetch-tokens' },
            { text: 'Transaction History', link: '/api/indexer/examples/transaction-history' },
            { text: 'Unique Tokens', link: '/api/indexer/examples/unique-tokens' },
            {
              text: 'Transaction History Token Contract',
              link: '/api/indexer/examples/transation-history-token-contract',
            },
            {
              text: 'Native Network Balance',
              link: '/api/indexer/examples/native-network-balance',
            },
            { text: 'Metadata Tips', link: '/api/indexer/metadata-tips' },
            { text: 'Webhooks', link: '/api/indexer/examples/webhook-listener' },
            { text: 'Subscriptions', link: '/api/indexer/examples/subscriptions' },
          ],
        },
      ],
    },
    {
      text: 'Analytics',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/analytics/overview' },
        { text: 'API References', link: '/api/analytics/endpoints' },
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Wallets', link: '/api/analytics/examples/wallets' },
            { text: 'Marketplaces', link: '/api/analytics/examples/marketplace' },
          ],
        },
      ],
    },
    {
      text: 'Metadata',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/metadata/overview' },
        { text: 'API References', link: '/api/metadata/endpoints' },
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Token Metadata', link: '/api/metadata/token-metadata' },
            { text: 'Contract Metadata', link: '/api/metadata/contract-metadata' },
            { text: 'REST API', link: '/api/metadata/rest-api' },
          ],
        },
      ],
    },
    {
      text: 'Infrastructure',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/infrastructure/overview' },
        { text: 'API References', link: '/api/infrastructure/endpoints' },
      ],
    },
    {
      text: 'Builder',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/builder/overview' },
        { text: 'API References', link: '/api/builder/endpoints' },
      ],
    },
    {
      text: 'Marketplace',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/marketplace/overview' },
        { text: 'API References', link: '/api/marketplace/endpoints' },

        // { text: 'Schema', link: '/api/marketplace/schema' },
        // { text: 'Marketplace API', link: '/api/marketplace/api' },
        {
          text: 'Examples',
          collapsed: false,
          link: '/api/marketplace/examples/orderbook-transactions',
          items: [
            {
              text: 'Creating Market Orders & Listings',
              link: '/api/marketplace/examples/orderbook-transactions',
            },
            { text: 'Get Top Orders', link: '/api/marketplace/examples/get-top-orders' },
            { text: 'Get Orderbook', link: '/api/marketplace/examples/get-orderbook' },
            { text: 'Get User Activities', link: '/api/marketplace/examples/get-user-activities' },
          ],
        },
      ],
    },
    {
      text: 'Node Gateway',
      collapsed: false,
      items: [{ text: 'Overview', link: '/api/node-gateway' }],
    },
  ],

  // Support
  '/support': [
    {
      text: 'Support',
      items: [
        { text: 'Support', link: '/support' },
        { text: 'Changelog', link: 'https://0xsequence.featurebase.app/' },
        { text: 'Restricted Regions', link: '/support/restricted-regions' },
        { text: 'FAQ', link: 'https://support.sequence.xyz' },
        { text: 'Token Directory', link: '/support/token-directory' },
        { text: 'Discord', link: 'https://discord.gg/sequence' },
        { text: "We're hiring!", link: 'https://horizon.io/careers' },
        { text: 'Contact Us', link: 'https://support.sequence.xyz' },
      ],
    },
    {
      text: 'Sequence Builder Admin',
      items: [
        { text: 'Project Management', link: '/support/builder/project-management' },
        { text: 'Project Settings', link: '/support/builder/project-settings' },
      ],
    },
  ],
} as Sidebar
