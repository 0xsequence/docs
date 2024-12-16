// vocs.config.tsx
import { defineConfig } from 'file:///Users/jameslawton/Coding/docs-v2/node_modules/.pnpm/vocs@https+++codeload.github.com+0xsequence+vocs+tar.gz+09f0f67135a711bba973e7d452a5b8854223e_73fmzff4o7zutzpjaufes33tqe/node_modules/vocs/_lib/index.js'

// nav.ts
const topNav = [
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
]
const sidebar = {
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
        {
          text: 'Universal Wallet',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/solutions/wallets/universal-wallet/overview' },
            { text: 'Quickstart', link: '/solutions/wallets/universal-wallet/quickstart' },
            {
              text: 'Examples',
              collapsed: true,
              items: [
                {
                  text: 'Connect Wallet',
                  link: '/solutions/wallets/universal-wallet/examples/connect-wallet',
                },
                {
                  text: 'Authenticate Users with Message Signature',
                  link: '/solutions/wallets/universal-wallet/examples/auth-address',
                },
                {
                  text: 'Signing & Verifying Messages',
                  link: '/solutions/wallets/universal-wallet/examples/sign-message',
                },
                {
                  text: 'No-wallet confirmation signatures',
                  link: '/solutions/wallets/universal-wallet/examples/session-keys',
                },
                {
                  text: 'Sending Transactions',
                  link: '/solutions/wallets/universal-wallet/examples/send-transaction',
                },
                {
                  text: 'Sending ERC-20 Tokens',
                  link: '/solutions/wallets/universal-wallet/examples/send-erc20',
                },
                {
                  text: 'Sending ERC-721 (NFT) Tokens',
                  link: '/solutions/wallets/universal-wallet/examples/send-erc721',
                },
                {
                  text: 'Sending ERC-1155 (Collectible) Tokens',
                  link: '/solutions/wallets/universal-wallet/examples/send-erc1155',
                },
                {
                  text: 'Sending a Batch of Transactions',
                  link: '/solutions/wallets/universal-wallet/examples/send-batch-transactions',
                },
                {
                  text: 'Building Backends with Sequence',
                  link: '/solutions/wallets/universal-wallet/examples/building-backends',
                },
              ],
            },
            //  {text: 'Sequence Kit', link: '/solutions/wallets/universal-wallet/sequence-kit'},
            { text: 'Supported Platforms', link: '/solutions/wallets/universal-wallet/platforms' },
            { text: 'Fiat On-Ramps', link: '/solutions/wallets/universal-wallet/fiat-on-ramps' },
            { text: 'Key Management', link: '/solutions/wallets/universal-wallet/key-management' },
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
            { text: 'Build a Game with WebGL', collapsed: true, link: '/guides/webgl-guide' },
            {
              text: 'Build a Unity Game',
              collapsed: true,
              link: '/guides/jelly-forest-unity-guide',
            },
            {
              text: 'Building Transaction Heavy Games with Unity',
              collapsed: true,
              link: '/guides/building-transaction-heavy-games-with-unity',
            },
            {
              text: 'Using Unity IAP to Sell NFTs',
              collapsed: true,
              link: '/guides/using-unity-iap-to-sell-nfts',
            },
            {
              text: 'How to sell On-Chain Items in your Unreal Project',
              collapsed: true,
              link: '/guides/unreal-primary-sales',
            },
            {
              text: 'How to do Primary Sales for On-Chain Items in Unity',
              collapsed: true,
              link: '/guides/unity-primary-sales',
            },
            {
              text: 'How to build a Game with Unreal Engine',
              collapsed: true,
              link: '/guides/unreal-ew-guide',
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
            { text: 'Marketplace', link: '/sdk/unity/marketplace' },
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
            { text: 'Installation', link: '/sdk/unreal/installation' },
            { text: 'Configuration', link: '/sdk/unreal/configuration' },
            { text: 'Blueprint Subsystems', link: '/sdk/unreal/subsystems' },
            { text: 'Bootstrap your UI', link: '/sdk/unreal/user_interfaces' },
            { text: 'Authenticate Users', link: '/sdk/unreal/authentication' },
            { text: 'Write to Blockchain', link: '/sdk/unreal/write-to-blockchain' },
            { text: 'Read from Blockchain', link: '/sdk/unreal/read-from-blockchain' },
            { text: 'On-Ramp via Credit Card', link: '/sdk/unreal/onboard-user-funds' },
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
    },
    {
      text: 'Common Questions',
      collapsed: true,
      items: [
        {
          text: 'How do I do signature validation?',
          link: '/solutions/wallets/universal-wallet/examples/auth-address',
        },
        // ...
      ],
    },
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
}

// vocs.config.tsx
import ViteYaml from 'file:///Users/jameslawton/Coding/docs-v2/node_modules/.pnpm/@modyfi+vite-plugin-yaml@1.1.0_rollup@4.24.0_vite@5.4.9_@types+node@22.7.7_/node_modules/@modyfi/vite-plugin-yaml/dist/index.js'
const vocs_config_default = defineConfig({
  title: 'Sequence',
  iconUrl: { light: '/img/favicon.ico', dark: '/img/favicon.ico' },
  logoUrl: {
    light: '/img/sequence-composite-light.svg',
    dark: '/img/sequence-composite-dark.svg',
  },
  vite: {
    ssr: {
      noExternal: ['@docsearch/react'],
    },
    plugins: [ViteYaml()],
  },
  // rootDir: '.',
  basePath: '/',
  topNav,
  sidebar,
  theme: {
    // accentColor: {
    //   light: '#442CA8',
    //   dark: '#99ADED',
    // },
    colorScheme: 'dark',
    variables: {
      fontFamily: {
        default: 'Inter',
        // mono: 'Roboto Mono'
      },
      color: {
        background: {
          light: '#f0f0f0',
          dark: '#111111',
        },
        // background5: {
        //   light: '#dddddd',
        //   dark: '#111111',
        // }
        // backgroundDark: {
        //   light: '#dddddd',
        //   dark: '#151515'
        // }
      },
    },
  },
})
export { vocs_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuaW1wb3J0IFZpdGVZYW1sIGZyb20gJ0Btb2R5Zmkvdml0ZS1wbHVnaW4teWFtbCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdTZXF1ZW5jZScsXG5cbiAgaWNvblVybDogeyBsaWdodDogJy9pbWcvZmF2aWNvbi5pY28nLCBkYXJrOiAnL2ltZy9mYXZpY29uLmljbycgfSxcbiAgbG9nb1VybDoge1xuICAgIGxpZ2h0OiAnL2ltZy9zZXF1ZW5jZS1jb21wb3NpdGUtbGlnaHQuc3ZnJyxcbiAgICBkYXJrOiAnL2ltZy9zZXF1ZW5jZS1jb21wb3NpdGUtZGFyay5zdmcnLFxuICB9LFxuICB2aXRlOiB7XG4gICAgc3NyOiB7XG4gICAgICBub0V4dGVybmFsOiBbJ0Bkb2NzZWFyY2gvcmVhY3QnXSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtWaXRlWWFtbCgpXSxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIHRoZW1lOiB7XG4gICAgLy8gYWNjZW50Q29sb3I6IHtcbiAgICAvLyAgIGxpZ2h0OiAnIzQ0MkNBOCcsXG4gICAgLy8gICBkYXJrOiAnIzk5QURFRCcsXG4gICAgLy8gfSxcbiAgICBjb2xvclNjaGVtZTogJ2RhcmsnLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgZm9udEZhbWlseToge1xuICAgICAgICBkZWZhdWx0OiAnSW50ZXInLFxuICAgICAgICAvLyBtb25vOiAnUm9ib3RvIE1vbm8nXG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgIGxpZ2h0OiAnI2YwZjBmMCcsXG4gICAgICAgICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgICB9LFxuICAgICAgICAvLyBiYWNrZ3JvdW5kNToge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZERhcms6IHtcbiAgICAgICAgLy8gICBsaWdodDogJyNkZGRkZGQnLFxuICAgICAgICAvLyAgIGRhcms6ICcjMTUxNTE1J1xuICAgICAgICAvLyB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFtZXNsYXd0b24vQ29kaW5nL2RvY3MtdjJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qYW1lc2xhd3Rvbi9Db2RpbmcvZG9jcy12Mi9uYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2phbWVzbGF3dG9uL0NvZGluZy9kb2NzLXYyL25hdi50c1wiO2ltcG9ydCB0eXBlIHsgU2lkZWJhciwgVG9wTmF2IH0gZnJvbSAndm9jcydcblxuZXhwb3J0IGNvbnN0IHRvcE5hdiA9IFtcbiAge1xuICAgIHRleHQ6ICdTb2x1dGlvbnMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyJyxcbiAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdPbmJvYXJkJyxcbiAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdNb25ldGl6ZScsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL21vbmV0aXphdGlvbi1vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy9tb25ldGl6YXRpb24tb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ1Bvd2VyJywgbGluazogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdSZXNvdXJjZXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdHdWlkZXMnLCBsaW5rOiAnL2d1aWRlcy9ndWlkZS1vdmVydmlldycsIG1hdGNoOiAnL2d1aWRlcy9ndWlkZS1vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1RlbXBsYXRlcycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JywgbWF0Y2g6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnU0RLcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1VuaXR5JywgbGluazogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdVbnJlYWwnLCBsaW5rOiAnL3Nkay91bnJlYWwvaW50cm9kdWN0aW9uJywgbWF0Y2g6ICcvc2RrL3VucmVhbC9pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdSZWFjdCcsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L292ZXJ2aWV3JyxcbiAgICAgICAgbWF0Y2g6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUeXBlc2NyaXB0JyxcbiAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ0dvJywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvZ28vb3ZlcnZpZXcnIH0sXG4gICAgICAvLyB7IHRleHQ6ICdBbmRyb2lkJywgbGluazogJy9zZGsvYW5kcm9pZCcsIG1hdGNoOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgICAgeyB0ZXh0OiAnTW9iaWxlJywgbGluazogJy9zZGsvbW9iaWxlJywgbWF0Y2g6ICcvc2RrL21vYmlsZScgfSxcbiAgICAgIC8vIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycsIG1hdGNoOiAnL3Nkay9pT1MnIH1cbiAgICBdLFxuICB9LFxuXG4gIC8vIHJlcGxhY2UgbGlua3MuXG4gIHtcbiAgICB0ZXh0OiAnQVBJcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9ucyBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9hcGkvdHJhbnNhY3Rpb25zL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdBbmFseXRpY3MgQVBJJywgbGluazogJy9hcGkvYW5hbHl0aWNzL292ZXJ2aWV3JywgbWF0Y2g6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ0luZGV4ZXIgQVBJJywgbGluazogJy9hcGkvaW5kZXhlci9vdmVydmlldycsIG1hdGNoOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnLCBtYXRjaDogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnSW5mcmFzdHJ1Y3R1cmUgQVBJJyxcbiAgICAgICAgbGluazogJy9hcGkvaW5mcmFzdHJ1Y3R1cmUvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9hcGkvaW5mcmFzdHJ1Y3R1cmUvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0J1aWxkZXIgQVBJJyxcbiAgICAgICAgbGluazogJy9hcGkvYnVpbGRlci9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL2FwaS9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdOb2RlIEdhdGV3YXknLCBsaW5rOiAnL2FwaS9ub2RlLWdhdGV3YXknLCBtYXRjaDogJy9hcGkvbm9kZS1nYXRld2F5JyB9LFxuICAgIF0sXG4gIH0sXG5cbiAge1xuICAgIHRleHQ6ICdTdXBwb3J0JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnU3VwcG9ydCcsIGxpbms6ICcvc3VwcG9ydCcgfSxcbiAgICAgIHsgdGV4dDogJ0ludGVncmF0ZWQgQ2hhaW5zJywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvY2hhaW4tc3VwcG9ydC8nIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmZlYXR1cmViYXNlLmFwcC8nIH0sXG4gICAgICB7IHRleHQ6ICdSZXN0cmljdGVkIFJlZ2lvbnMnLCBsaW5rOiAnL3N1cHBvcnQvcmVzdHJpY3RlZC1yZWdpb25zJyB9LFxuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICB7IHRleHQ6IFwiV2UncmUgaGlyaW5nIVwiLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgXSxcbiAgfSxcbl0gYXMgVG9wTmF2XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyID0ge1xuICAvLyBPdmVydmlld1xuICAnL3NvbHV0aW9ucyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnR2V0dGluZyBTdGFydGVkJyxcbiAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZ2V0dGluZy1zdGFydGVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdPbmJvYXJkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFbWJlZGRlZCBXYWxsZXQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvcXVpY2tzdGFydCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NldHVwJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnR29vZ2xlIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L2dvb2dsZS1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBcHBsZSBTZXR1cCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldC9hcHBsZS1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdQbGF5RmFiIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L3BsYXlmYWItY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU3R5dGNoIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L3N0eXRjaC1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdHdWVzdCBXYWxsZXQgU2V0dXAnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9lbWJlZGRlZC13YWxsZXQvZ3Vlc3Qtd2FsbGV0LWNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL2F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdVc2UgV2FsbGV0cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy91c2Utd2FsbGV0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnTXVsdGktYWNjb3VudCBTdXBwb3J0JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL2FjY291bnQtZmVkZXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnTWFuYWdlIFNlc3Npb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL21hbmFnZS1zZXNzaW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPbi1yYW1wJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvb24tcmFtcCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnRmVlIE9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvZmVlLW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0JhY2tlbmQgVmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL3ZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVHJhbnNhY3Rpb24gUmVjZWlwdHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvdHJhbnNhY3Rpb24tcmVjZWlwdHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXJjaGl0ZWN0dXJlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdPdmVydmlldycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvb3ZlcnZpZXcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0FjdGlvbiBQYXlsb2FkcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvYWN0aW9uLXBheWxvYWRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdSZXNwb25zZSBQYXlsb2FkcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvcmVzcG9uc2UtcGF5bG9hZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1RydXN0IENvbnRyYWN0IFJlY292ZXJ5IEZsb3cnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL3RydXN0LWNvbnRyYWN0LXJlY292ZXJ5LWZsb3cnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0VuY2xhdmUgVmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9lbmNsYXZlLXZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnSW50ZW50cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvaW50ZW50cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdNaWdyYXRpbmcgdG8gU2VxdWVuY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9taWdyYXRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2ZhcScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1NlcXVlbmNlIEtpdCcsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDdXN0b20gQ29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L2N1c3RvbS1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZXF1ZW5jZSBQYXknLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NoZWNrb3V0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY2hlY2tvdXQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnU21hcnQgU3dhcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9zbWFydC1zd2FwcycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPbi1yYW1wJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvb24tcmFtcCcgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0N1c3RvbSBDb25uZWN0b3JzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY3VzdG9tLWNvbm5lY3RvcnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2FsbGV0IExpbmtpbmcnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2xpbmstd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0ludGVncmF0aW9uIEd1aWRlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9saW5rLXdhbGxldHMvaW50ZWdyYXRpb24tZ3VpZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1VuaXZlcnNhbCBXYWxsZXQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3F1aWNrc3RhcnQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2Nvbm5lY3Qtd2FsbGV0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMgd2l0aCBNZXNzYWdlIFNpZ25hdHVyZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYXV0aC1hZGRyZXNzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTaWduaW5nICYgVmVyaWZ5aW5nIE1lc3NhZ2VzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zaWduLW1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2Vzc2lvbi1rZXlzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC10cmFuc2FjdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtMjAgVG9rZW5zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzIwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzcyMScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1lcmMxMTU1JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIGEgQmF0Y2ggb2YgVHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWJhdGNoLXRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYnVpbGRpbmctYmFja2VuZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gIHt0ZXh0OiAnU2VxdWVuY2UgS2l0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3NlcXVlbmNlLWtpdCd9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU3VwcG9ydGVkIFBsYXRmb3JtcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9wbGF0Zm9ybXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdGaWF0IE9uLVJhbXBzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2ZpYXQtb24tcmFtcHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdLZXkgTWFuYWdlbWVudCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9rZXktbWFuYWdlbWVudCcgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNb25ldGl6ZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL21vbmV0aXphdGlvbi1vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnV2hpdGUtbGFiZWwgTWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ092ZXJ2aWV3JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy93aGl0ZS1sYWJlbC1tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnR3VpZGUnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL3doaXRlLWxhYmVsLW1hcmtldHBsYWNlL2d1aWRlJyxcbiAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdWaWRlbyBXYWxrdGhyb3VnaCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvd2hpdGUtbGFiZWwtbWFya2V0cGxhY2UvdmlkZW8td2Fsa3Rocm91Z2gnLFxuICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQnVpbGQgeW91ciBDdXN0b20gTWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1N0YXJ0ZXIgVGVtcGxhdGUnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL3N0YXJ0ZXInIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgUGF5JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdPdmVydmlldycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3BheW1lbnRzL292ZXJ2aWV3JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDaGVja291dCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L2NoZWNrb3V0JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU21hcnQgU3dhcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9zbWFydC1zd2FwcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09uLXJhbXAnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9vbi1yYW1wJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1Bvd2VyJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRGVwbG95YWJsZSBDb250cmFjdHMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcGxveSBhIENvbGxlY3RpYmxlIENvbnRyYWN0JyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktYW4taXRlbS1jb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgSW4tR2FtZSBJdGVtcyBhbmQgQWNoaWV2ZW1lbnRzIChFUkMxMTU1KScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAwLW1pbnQtaXRlbXMtZnJvbS1FUkMxMTU1J30sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgRGlnaXRhbCBDb2xsZWN0aWJsZXMgKEVSQzcyMSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMi1taW50LWNvbGxlY3RpYmxlcy1mcm9tLUVSQzcyMSd9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRGVwbG95IGFuIEluLUdhbWUgQ3VycmVuY3kgKEVSQzIwKScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LUVSQzIwLWN1cnJlbmN5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdEZXBsb3kgYSBTb3VsYm91bmQgVG9rZW4gQ29udHJhY3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1zb3VsYm91bmQtdG9rZW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcGxveSBhIFByaW1hcnkgU2FsZXMgQ29udHJhY3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1wcmltYXJ5LXNhbGVzLWNvbnRyYWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbnMnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29sbGVjdGlvbnMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1F1ZXJ5aW5nIEJsb2NrY2hhaW4gRGF0YScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW5kZXhlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvaW5kZXhlcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci93ZWJob29rcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIE1hbmFnZXInLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RyYW5zYWN0aW9uLW1hbmFnZXIvb3ZlcnZpZXcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0FuYWx5dGljcycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9hbmFseXRpY3MnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0dhcyBTcG9uc29yc2hpcCcsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nYXMtdGFuaycsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvbm9kZS1nYXRld2F5JyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWludGVyJywgbGluazogJy9zb2x1dGlvbnMvbWludGVyJyB9XG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXInLFxuICAgIC8vICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gICBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsIFJlZmVyZW5jZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ0VJUDUxODkgdnMuIDQzMzcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy81MTg5LTQzMzcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2h5IFNtYXJ0IENvbnRyYWN0IFdhbGxldHM/JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzL3doeScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXRoZXJzIHY2IFN1cHBvcnQnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2V0aGVycy12Ni1taWdyYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NvbnRyYWN0IEludGVybmFscycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3ltZW50JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL2RlcGxveW1lbnQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZXF1ZW5jZSB2MScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3knLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvZGVwbG95JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgRmFjdG9yeScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvd2FsbGV0LWZhY3RvcnknLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBDb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyB7dGV4dDogJ1RyYW5zYWN0aW9uIEVuY29kaW5nJywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxLzA3LXRyYW5zYWN0aW9uLWVuY29kaW5nJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ25hdHVyZSBFbmNvZGluZycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvc2lnbmF0dXJlLWVuY29kaW5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgQ29udGV4dCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvd2FsbGV0LWNvbnRleHQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgdjInLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyL2RlcGxveScgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ29udHJhY3QgQXVkaXRzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL2NvbnRyYWN0LWF1ZGl0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG5cbiAgJy9ndWlkZXMnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0d1aWRlcycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdHYW1lIERldmVsb3BlcnMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnQnVpbGQgYSBHYW1lIHdpdGggV2ViR0wnLCBjb2xsYXBzZWQ6IHRydWUsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQnVpbGQgYSBVbml0eSBHYW1lJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9qZWxseS1mb3Jlc3QtdW5pdHktZ3VpZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkaW5nIFRyYW5zYWN0aW9uIEhlYXZ5IEdhbWVzIHdpdGggVW5pdHknLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL2J1aWxkaW5nLXRyYW5zYWN0aW9uLWhlYXZ5LWdhbWVzLXdpdGgtdW5pdHknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1VzaW5nIFVuaXR5IElBUCB0byBTZWxsIE5GVHMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3VzaW5nLXVuaXR5LWlhcC10by1zZWxsLW5mdHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0hvdyB0byBzZWxsIE9uLUNoYWluIEl0ZW1zIGluIHlvdXIgVW5yZWFsIFByb2plY3QnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3VucmVhbC1wcmltYXJ5LXNhbGVzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3cgdG8gZG8gUHJpbWFyeSBTYWxlcyBmb3IgT24tQ2hhaW4gSXRlbXMgaW4gVW5pdHknLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3VuaXR5LXByaW1hcnktc2FsZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0hvdyB0byBidWlsZCBhIEdhbWUgd2l0aCBVbnJlYWwgRW5naW5lJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy91bnJlYWwtZXctZ3VpZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIGEgVGVsZWdyYW0gTWluaS1BcHAgd2l0aCBTZXF1ZW5jZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvdGVsZWdyYW0taW50ZWdyYXRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0Jsb2NrY2hhaW4gSW50ZWdyYXRpb25zJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIGEgQ29sbGVjdGlibGUgTWludGluZyBTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbiBNZXRhZGF0YScsIGNvbGxhcHNlZDogdHJ1ZSwgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIFRyZWFzdXJlIENoZXN0IHdpdGggQUkgTWludGluZycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvdHJlYXN1cmUtY2hlc3QtZ3VpZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIGEgQmFja2VuZCBUcmFuc2FjdGlvbiBTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9idWlsZGluZy1yZWxheWluZy1zZXJ2ZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0xldmVyYWdlIFNlcXVlbmNlIEFuYWx5dGljcyBBUEkgaW4gRHVuZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvYW5hbHl0aWNzLWd1aWRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZCBhbiBFbWJlZGRlZCBXYWxsZXQgTGlua2luZyBTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2xpbmstd2FsbGV0cy9pbnRlZ3JhdGlvbi1ndWlkZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTWFya2V0cGxhY2VzICYgUHJpbWFyeSBTYWxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIEN1c3RvbSBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZWxsIHlvdXIgRVJDLTExNTUgR2FtZSBJdGVtcyB2aWEgYSBXZWIgU2hvcCcsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvcHJpbWFyeS1zYWxlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ3JlYXRlIE5GVCBEcm9wIFNhbGVzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9wcmltYXJ5LWRyb3Atc2FsZXMtZXJjNzIxJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiAnSW50ZWdyYXRlIHRva2VuIHJld2FyZHMgaW50byB5b3VyIERpc2NvcmQgc2VydmVyJyxcbiAgICAvLyAgIGxpbms6ICcvZ3VpZGVzL2Rpc2NvcmQnXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVtcGxhdGVzJyxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JyxcbiAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAvLyAgIHsgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLWVtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnQnVpbGQgYSBCYWNrZW5kIFRyYW5zYWN0aW9uIE1hbmFnZXInLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvYnVpbGRpbmctcmVsYXlpbmctc2VydmVyJyB9XG4gICAgICAvLyAgIC8vIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSSBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScgfVxuICAgICAgLy8gXVxuICAgIH0sXG4gIF0sXG5cbiAgLy8gU0RLc1xuICAnL3Nkayc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR2FtZSBFbmdpbmUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdVbml0eScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIG1hdGNoOiAnL3Nkay91bml0eS9vdmVydmlldycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL3Nkay91bml0eS9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvc2RrL3VuaXR5L3NldHVwJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRpb24nLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uL2ludHJvJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VtYWlsIE9UUCcsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uL2VtYWlsJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NvY2lhbCBTaWduIEluJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vb2lkYycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdQbGF5RmFiJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vcGxheWZhYicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdHdWVzdCcsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uL2d1ZXN0JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdGZWRlcmF0ZWQgQWNjb3VudHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vZmVkZXJhdGVkLWFjY291bnRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dyaXRlIHRvIGJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS93cml0ZS10by1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVhZCBmcm9tIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS9yZWFkLWZyb20tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpZ24gTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay91bml0eS9zaWduLW1lc3NhZ2VzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVjb3ZlcmluZyBTZXNzaW9ucycsIGxpbms6ICcvc2RrL3VuaXR5L3JlY292ZXJpbmctc2Vzc2lvbnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZXNzaW9uIE1hbmFnZW1lbnQnLCBsaW5rOiAnL3Nkay91bml0eS9zZXNzaW9uLW1hbmFnZW1lbnQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPbi1SYW1wIEZ1bmRzIHZpYSBDcmVkaXQgQ2FyZCcsIGxpbms6ICcvc2RrL3VuaXR5L29uYm9hcmQtdXNlci1mdW5kcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ01hcmtldHBsYWNlJywgbGluazogJy9zZGsvdW5pdHkvbWFya2V0cGxhY2UnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb25uZWN0IHdpdGggRXh0ZXJuYWwgV2FsbGV0cycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3VuaXR5L2Nvbm5lY3RpbmctZXh0ZXJuYWwtd2FsbGV0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVXBncmFkaW5nIGZyb20gdjIgdG8gdjMnLCBsaW5rOiAnL3Nkay91bml0eS92Mi10by12My11cGdyYWRlLWd1aWRlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0IFVJJywgbGluazogJy9zZGsvdW5pdHkvd2FsbGV0LXVpJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRGVwbG95IENvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L2RlcGxveS1jb250cmFjdHMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBZHZhbmNlZCBCbG9ja2NoYWluIEludGVyYWN0aW9ucycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC9pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3dhbGxldHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2xpZW50cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2NsaWVudHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVHJhbnNmZXJzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvdHJhbnNmZXJzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2NvbnRyYWN0cycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdUb2tlbnMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC90b2tlbnMnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVW5yZWFsJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbWF0Y2g6ICcvc2RrL3VucmVhbC9pbnRyb2R1Y3Rpb24nLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvaW50cm9kdWN0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9zZGsvdW5yZWFsL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0JsdWVwcmludCBTdWJzeXN0ZW1zJywgbGluazogJy9zZGsvdW5yZWFsL3N1YnN5c3RlbXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdCb290c3RyYXAgeW91ciBVSScsIGxpbms6ICcvc2RrL3VucmVhbC91c2VyX2ludGVyZmFjZXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMnLCBsaW5rOiAnL3Nkay91bnJlYWwvYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXcml0ZSB0byBCbG9ja2NoYWluJywgbGluazogJy9zZGsvdW5yZWFsL3dyaXRlLXRvLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWFkIGZyb20gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VucmVhbC9yZWFkLWZyb20tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09uLVJhbXAgdmlhIENyZWRpdCBDYXJkJywgbGluazogJy9zZGsvdW5yZWFsL29uYm9hcmQtdXNlci1mdW5kcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0FkdmFuY2VkIEJsb2NrY2hhaW4gSW50ZXJhY3Rpb25zJywgbGluazogJy9zZGsvdW5yZWFsL2FkdmFuY2VkJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUGxhdGZvcm0gUmVxdWlyZW1lbnRzJywgbGluazogJy9zZGsvdW5yZWFsL3BsYXRmb3JtcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNb2JpbGUnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgLy8geyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmVhY3QgTmF0aXZlJywgbGluazogJy9zZGsvbW9iaWxlJyB9LFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGV4dDogJ1dlYjMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb25uZWN0IFdhbGxldCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL2Nvbm5lY3Qtd2FsbGV0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9hdXRoLWFkZHJlc3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zaWduLW1lc3NhZ2UnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdOby13YWxsZXQgY29uZmlybWF0aW9uIHNpZ25hdHVyZXMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZXNzaW9uLWtleXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmRpbmcgVHJhbnNhY3Rpb25zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC10cmFuc2FjdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmRpbmcgRVJDLTIwIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjMjAnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1lcmM3MjEnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy0xMTU1IChDb2xsZWN0aWJsZSkgVG9rZW5zJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1lcmMxMTU1JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIGEgQmF0Y2ggb2YgVHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1iYXRjaC10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkaW5nIEJhY2tlbmRzIHdpdGggU2VxdWVuY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9idWlsZGluZy1iYWNrZW5kcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbm5lY3RvcnMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2FnbWknLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2FnbWknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmFpbmJvd0tpdCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9yYWluYm93LWtpdCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXZWIzIE9uYm9hcmQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViMy1vbmJvYXJkJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dlYjMgUmVhY3QgVjYnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViMy1yZWFjdC12NicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXZWIzTW9kYWwnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViM21vZGFsJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9GQVEnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnR28nLFxuICAgICAgICAgIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JyxcbiAgICAgICAgICBpdGVtczogW3sgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnIH1dLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb21tb24gUXVlc3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG93IGRvIEkgZG8gc2lnbmF0dXJlIHZhbGlkYXRpb24/JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYXV0aC1hZGRyZXNzJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8gYXBpc1xuICAnL2FwaSc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnVHJhbnNhY3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnQVBJIFJlZmVyZW5jZXMnLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvZW5kcG9pbnRzJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdGZXRjaCBGZWUgT3B0aW9ucycsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9leGFtcGxlcy9mZXRjaC1mZWUtb3B0aW9ucycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmQgVHJhbnNhY3Rpb25zJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL3NlbmQtdHJhbnNhY3Rpb25zJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRmV0Y2ggVHJhbnNhY3Rpb24gUmVjZWlwdHMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvZXhhbXBsZXMvZmV0Y2gtdHJhbnNhY3Rpb24tcmVjZWlwdHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdJbmRleGVyJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2luZGV4ZXIvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvYXBpL2luZGV4ZXIvaW5zdGFsbGF0aW9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdBUEkgUmVmZXJlbmNlcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZW5kcG9pbnRzJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdGZXRjaCBUb2tlbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL2ZldGNoLXRva2VucycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1RyYW5zYWN0aW9uIEhpc3RvcnknLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3RyYW5zYWN0aW9uLWhpc3RvcnknIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdVbmlxdWUgVG9rZW5zJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy91bmlxdWUtdG9rZW5zJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnVHJhbnNhY3Rpb24gSGlzdG9yeSBUb2tlbiBDb250cmFjdCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdHJhbnNhdGlvbi1oaXN0b3J5LXRva2VuLWNvbnRyYWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdOYXRpdmUgTmV0d29yayBCYWxhbmNlJyxcbiAgICAgICAgICAgICAgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9uYXRpdmUtbmV0d29yay1iYWxhbmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdNZXRhZGF0YSBUaXBzJywgbGluazogJy9hcGkvaW5kZXhlci9tZXRhZGF0YS10aXBzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2ViaG9va3MnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3dlYmhvb2stbGlzdGVuZXInIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTdWJzY3JpcHRpb25zJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9zdWJzY3JpcHRpb25zJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0FuYWx5dGljcycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9hbmFseXRpY3Mvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0FQSSBSZWZlcmVuY2VzJywgbGluazogJy9hcGkvYW5hbHl0aWNzL2VuZHBvaW50cycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9leGFtcGxlcy93YWxsZXRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWFya2V0cGxhY2VzJywgbGluazogJy9hcGkvYW5hbHl0aWNzL2V4YW1wbGVzL21hcmtldHBsYWNlJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01ldGFkYXRhJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL21ldGFkYXRhL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdBUEkgUmVmZXJlbmNlcycsIGxpbms6ICcvYXBpL21ldGFkYXRhL2VuZHBvaW50cycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnVG9rZW4gTWV0YWRhdGEnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS90b2tlbi1tZXRhZGF0YScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0IE1ldGFkYXRhJywgbGluazogJy9hcGkvbWV0YWRhdGEvY29udHJhY3QtbWV0YWRhdGEnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSRVNUIEFQSScsIGxpbms6ICcvYXBpL21ldGFkYXRhL3Jlc3QtYXBpJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0luZnJhc3RydWN0dXJlJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2luZnJhc3RydWN0dXJlL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdBUEkgUmVmZXJlbmNlcycsIGxpbms6ICcvYXBpL2luZnJhc3RydWN0dXJlL2VuZHBvaW50cycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQnVpbGRlcicsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9idWlsZGVyL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdBUEkgUmVmZXJlbmNlcycsIGxpbms6ICcvYXBpL2J1aWxkZXIvZW5kcG9pbnRzJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQVBJIFJlZmVyZW5jZXMnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9lbmRwb2ludHMnIH0sXG5cbiAgICAgICAgLy8geyB0ZXh0OiAnU2NoZW1hJywgbGluazogJy9hcGkvbWFya2V0cGxhY2Uvc2NoZW1hJyB9LFxuICAgICAgICAvLyB7IHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9hcGknIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvb3JkZXJib29rLXRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0NyZWF0aW5nIE1hcmtldCBPcmRlcnMgJiBMaXN0aW5ncycsXG4gICAgICAgICAgICAgIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL29yZGVyYm9vay10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0dldCBUb3AgT3JkZXJzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LXRvcC1vcmRlcnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXQgT3JkZXJib29rJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LW9yZGVyYm9vaycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0dldCBVc2VyIEFjdGl2aXRpZXMnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9nZXQtdXNlci1hY3Rpdml0aWVzJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ05vZGUgR2F0ZXdheScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFt7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScgfV0sXG4gICAgfSxcbiAgXSxcblxuICAvLyBTdXBwb3J0XG4gICcvc3VwcG9ydCc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnU3VwcG9ydCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdTdXBwb3J0JywgbGluazogJy9zdXBwb3J0JyB9LFxuICAgICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmZlYXR1cmViYXNlLmFwcC8nIH0sXG4gICAgICAgIHsgdGV4dDogJ1Jlc3RyaWN0ZWQgUmVnaW9ucycsIGxpbms6ICcvc3VwcG9ydC9yZXN0cmljdGVkLXJlZ2lvbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgICB7IHRleHQ6ICdUb2tlbiBEaXJlY3RvcnknLCBsaW5rOiAnL3N1cHBvcnQvdG9rZW4tZGlyZWN0b3J5JyB9LFxuICAgICAgICB7IHRleHQ6ICdEaXNjb3JkJywgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9zZXF1ZW5jZScgfSxcbiAgICAgICAgeyB0ZXh0OiBcIldlJ3JlIGhpcmluZyFcIiwgbGluazogJ2h0dHBzOi8vaG9yaXpvbi5pby9jYXJlZXJzJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXIgQWRtaW4nLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnUHJvamVjdCBNYW5hZ2VtZW50JywgbGluazogJy9zdXBwb3J0L2J1aWxkZXIvcHJvamVjdC1tYW5hZ2VtZW50JyB9LFxuICAgICAgICB7IHRleHQ6ICdQcm9qZWN0IFNldHRpbmdzJywgbGluazogJy9zdXBwb3J0L2J1aWxkZXIvcHJvamVjdC1zZXR0aW5ncycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn0gYXMgU2lkZWJhclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsb0JBQW9COzs7QUNFdEIsSUFBTSxTQUFTO0FBQUEsRUFDcEI7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLEVBQUUsTUFBTSxTQUFTLE1BQU0sNkJBQTZCLE9BQU8sNEJBQTRCO0FBQUEsSUFDekY7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0Us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
