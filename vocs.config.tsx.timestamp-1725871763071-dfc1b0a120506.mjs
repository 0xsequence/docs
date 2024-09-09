// vocs.config.tsx
import { defineConfig } from 'file:///Users/jameslawton/Coding/docs-v2/node_modules/.pnpm/vocs@https+++codeload.github.com+0xsequence+vocs+tar.gz+e5a4f08955a9f897696239e91065d4b578532_uzxwbpivel5i4unz3sywvgfpmi/node_modules/vocs/_lib/index.js'

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
      // { text: 'Chain Support', link: '/solutions/technical-references/chain-support', match: '/solutions/technical-references/chain-support' },
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
      { text: 'Unreal', link: '/sdk/unreal/overview', match: '/sdk/unreal/overview' },
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
      { text: 'Node Gateway', link: '/api/node-gateway', match: '/api/node-gateway' },
    ],
  },
  {
    text: 'Support',
    items: [
      { text: 'Support', link: '/support' },
      { text: 'Changelog', link: 'https://0xsequence.canny.io/changelog' },
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
                  text: 'Account Federation',
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
                  text: 'Token Verification',
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
            { text: 'Configuration', link: '/solutions/wallets/sequence-kit/configuration' },
            { text: 'On-ramp', link: '/solutions/wallets/sequence-kit/on-ramp' },
            { text: 'Checkout', link: '/solutions/wallets/sequence-kit/checkout' },
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
              link: '/solutions/marketplaces/white-label-marketplace',
            },
            {
              text: 'Build your Custom Marketplace',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/solutions/marketplaces/orderbook/overview' },
                { text: 'Quickstart', link: '/solutions/marketplaces/orderbook/quickstart' },
              ],
            },
          ],
        },
        {
          text: 'Fiat On-ramps',
          link: '/solutions/payments/onramps/fiat-on-ramps',
          match: '/solutions/payments/onramps/fiat-on-ramps',
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
          text: 'Build a Game with WebGL',
          collapsed: true,
          link: '/guides/webgl-guide',
          // items: [
          //   { text: 'Introduction', link: '/guides/webgl-guide#aviator-web3-game-with-webgl' },
          //   { text: 'Project Setup With Webpack', link: '/guides/webgl-guide#1-project-setup-with-webpack' },
          //   { text: 'Integrate Sequence Kit With WaaS', link: '/guides/webgl-guide#2-integrate-sequence-kit' },
          //   { text: 'Deploy a Collectibles Contract', link: '/guides/webgl-guide#3-deploy-a-collectibles-contract' },
          //   { text: 'Deploy a Remote Minter', link: '/guides/webgl-guide#4-deploy-a-remote-minter--mint-in-game-achievement-tokens' },
          //   { text: 'Leverage Items In-game', link: '/guides/webgl-guide#5-leverage-items-in-game' },
          //   { text: 'Burn In-game Achievement Tokens', link: '/guides/webgl-guide#6-burn-in-game-achievement-tokens' },
          //   { text: '(Optional) Integrate Embedded Wallet Into Sequence Kit', link: '/guides/webgl-guide#7-optional-integrate-embedded-wallet-into-sequence-kit' },
          // ]
        },
        {
          text: 'Build a Unity Game',
          collapsed: true,
          link: '/guides/unity-guide',
          // items: [
          //   { text: 'Introduction', link: '/guides/unity-guide#intro-to-jelly-forest' },
          //   { text: 'Build a Game Loop', link: '/guides/unity-guide#build-a-game-loop' },
          //   { text: 'Integrate Embedded Wallets', link: '/guides/unity-guide#integrate-social-sign-in-and-sequences-embedded-wallet-solution' },
          //   { text: 'Deploy Collectibles', link: '/guides/unity-guide#deploy-a-collectibles-contract' },
          //   { text: 'Deploy Remote Minter', link: '/guides/unity-guide#deploy-a-remote-minter'},
          //   { text: 'Minting Tokens to Inventory', link: '/guides/unity-guide#mint-in-game-tokens-to-the-players-inventory' },
          //   { text: 'Purchase Collectibles with ERC20 Tokens', link: '/guides/unity-guide#burn-in-game-tokens-in-exchange-for-others' },
          //   { text: 'Building an In-game Shop', link: '/guides/unity-guide#building-the-shop-pages-and-setting-the-minting-requirements' },
          //   { text: 'Leverage Purchased Items In-game', link: '/guides/unity-guide#leverage-purchased-items-in-game' },
          // ]
        },
        {
          text: 'Build a Collectible Minting Service',
          collapsed: true,
          link: '/guides/mint-collectibles-serverless',
          // items: [
          //   { text: 'Introduction', link: '/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api', match: '/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api'},
          //   { text: 'Setup Cloudflare Environment', link: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test', match: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test'},
          //   { text: 'Deploy, Sponsor & Update Metadata For an ERC1155', link: '/guides/mint-collectibles-serverless#2-deploy-sponsor-and-update-metadata-for-an-erc1155-contract-with-sequence-builder'},
          //   { text: 'Use EthAuthProof to Prevent EOA DDoS', link: '/guides/mint-collectibles-serverless#3-use-ethauthproof-to-prevent-eoa-ddos' },
          //   { text: 'Mint a Collectible To Wallet', link: '/guides/mint-collectibles-serverless#4-mint-a-collectible-to-wallet' },
          // ]
        },
        {
          text: 'Manage Collection Metadata',
          collapsed: true,
          link: '/guides/metadata-guide',
          // items: [
          //   { text: 'Obtain a Secret API Key', link: '/guides/metadata-guide#1-obtain-a-secret-api-key'},
          //   { text: 'Create Collection', link: '/guides/metadata-guide#2-create-collection-from-a-curl-request' },
          //   { text: 'Create Token', link: '/guides/metadata-guide#3-create-token-using-tokenid' },
          //   { text: 'Create Asset', link: '/guides/metadata-guide#4-create-asset-using-tokenid' },
          //   { text: 'Store an Image', link: '/guides/metadata-guide#5-store-image-asset' },
          //   { text: 'Update to Non-private', link: '/guides/metadata-guide#6-update-non-private-token' },
          //   { text: 'Publish Collection', link: '/guides/metadata-guide#7-publish-collection-from-a-curl-request' },
          //   { text: 'Render Asset from API', link: '/guides/metadata-guide#8-render-asset-from-api-publicly' },
          // ]
        },
        {
          text: 'Build a Treasure Chest with AI Minting',
          collapsed: true,
          link: '/guides/treasure-chest-guide',
          // items: [
          //   { text: 'Sequence Builder Console Signup & Project Creation', link: '/guides/lootbox-guide#1-builder-console-signup--project-creation' },
          //   { text: 'Access Key Management', link: '/guides/lootbox-guide#2-access-key-management' },
          //   { text: 'Sequence Kit integration', link: '/guides/lootbox-guide#3-sequence-kit-integration' },
          //   { text: 'iframe-to-Dapp Communication', link: '/guides/lootbox-guide#4-iframe-to-dapp-communication' },
          //   { text: 'Deploy a Contract & Sponsor Gas', link: '/guides/lootbox-guide#5-deploy-a-contract--sponsor-gas' },
          //   { text: 'Deploy a Cloudflare Worker', link: '/guides/lootbox-guide#6-deploy-a-cloudflare-worker' },
          //   { text: 'Generating AI Prompts & Images', link: '/guides/lootbox-guide#7-generating-ai-prompts--images' },
          //   { text: 'Store Media To Sequence Metadata Service', link: '/guides/lootbox-guide#8-store-media-to-sequence-metadata-service' },
          //   { text: 'Securing Your Cloudflare Worker', link: '/guides/lootbox-guide#9-securing-your-cloudflare-worker' },
          //   { text: '(Optional) Naive Mint Restriction Per Wallet', link: '/guides/lootbox-guide#10-optional-naive-mint-restriction-per-wallet' },
          // ]
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
        {
          text: 'Build a Custom Marketplace',
          collapsed: true,
          link: '/guides/custom-marketplace',
          // items: [
          //   { text: 'Minting', link: '/guides/custom-marketplace#1-minting' },
          //   { text: 'Wallet Authentication', link: '/guides/custom-marketplace#2-wallet-authentication' },
          //   { text: 'Blockchain Queries', link: '/guides/custom-marketplace#3-blockchain-queries' },
          //   { text: 'Multi-wallet types', link: '/guides/custom-marketplace#4-multi-wallet-types' },
          //   { text: 'Request Creation', link: '/guides/custom-marketplace#5-request-creation' },
          //   { text: 'Order Accepting', link: '/guides/custom-marketplace#6-order-accepting' },
          //   { text: '(Optional) Enable Embedded Wallet', link: '/guides/custom-marketplace#7-optional-integrate-embedded-wallet-into-sequence-kit' },
          // ]
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
                { text: 'Email + OTP', link: '/sdk/unity/authentication/email' },
                { text: 'OIDC - Social Sign In', link: '/sdk/unity/authentication/oidc' },
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
          match: '/sdk/unreal/overview',
          items: [
            { text: 'Overview', link: '/sdk/unreal/overview' },
            { text: 'Installation', link: '/sdk/unreal/installation' },
            { text: 'Upgrading', link: '/sdk/unreal/upgrading' },
            { text: 'Setup', link: '/sdk/unreal/setup' },
            { text: 'Authentication', link: '/sdk/unreal/authentication' },
            { text: 'Sequence Wallet', link: '/sdk/unreal/api' },
            { text: 'Managing Session', link: '/sdk/unreal/managing-session' },
            { text: 'Read from Blockchain', link: '/sdk/unreal/read-from-blockchain' },
            { text: 'Write to Blockchain', link: '/sdk/unreal/write-to-blockchain' },
            { text: 'On-Ramp Funds via Credit Card', link: '/sdk/unreal/onboard-user-funds' },
            { text: 'Advanced Blockchain Intereactions', link: '/sdk/unreal/advanced' },
            { text: 'Packaging', link: '/sdk/unreal/packaging' },
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
      text: 'Marketplace',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/api/marketplace/overview' },
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
        { text: 'Changelog', link: 'https://0xsequence.canny.io/changelog' },
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
const vocs_config_default = defineConfig({
  title: 'Sequence',
  // ogImageUrl: {
  //   '/': '/og-image.png',
  //   '/docs':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  //   '/op-stack':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  // },
  iconUrl: { light: '/img/favicon.ico', dark: '/img/favicon.ico' },
  logoUrl: {
    light: '/img/sequence-composite-light.svg',
    dark: '/img/sequence-composite-dark.svg',
  },
  // rootDir: '.',
  basePath: '/',
  topNav,
  sidebar,
  // NOTE: taking up valuable space, will move those
  // to footer and other sections
  // socials: [
  //   {
  //     icon: 'github',
  //     link: 'https://github.com/0xsequence',
  //   },
  //   {
  //     icon: 'discord',
  //     link: 'https://discord.gg/sequence',
  //   },
  //   {
  //     icon: 'x',
  //     link: 'https://x.com/0xsequence',
  //   },
  // ],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcblxuICAvLyBvZ0ltYWdlVXJsOiB7XG4gIC8vICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIC8vICAgJy9kb2NzJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyAgICcvb3Atc3RhY2snOlxuICAvLyAgICAgJ2h0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvbicsXG4gIC8vIH0sXG4gIGljb25Vcmw6IHsgbGlnaHQ6ICcvaW1nL2Zhdmljb24uaWNvJywgZGFyazogJy9pbWcvZmF2aWNvbi5pY28nIH0sXG4gIGxvZ29Vcmw6IHtcbiAgICBsaWdodDogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWxpZ2h0LnN2ZycsXG4gICAgZGFyazogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWRhcmsuc3ZnJyxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIC8vIE5PVEU6IHRha2luZyB1cCB2YWx1YWJsZSBzcGFjZSwgd2lsbCBtb3ZlIHRob3NlXG4gIC8vIHRvIGZvb3RlciBhbmQgb3RoZXIgc2VjdGlvbnNcbiAgLy8gc29jaWFsczogW1xuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdnaXRodWInLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS8weHNlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdkaXNjb3JkJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ3gnLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8veC5jb20vMHhzZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gXSxcblxuICB0aGVtZToge1xuICAgIC8vIGFjY2VudENvbG9yOiB7XG4gICAgLy8gICBsaWdodDogJyM0NDJDQTgnLFxuICAgIC8vICAgZGFyazogJyM5OUFERUQnLFxuICAgIC8vIH0sXG4gICAgY29sb3JTY2hlbWU6ICdkYXJrJyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgZGVmYXVsdDogJ0ludGVyJyxcbiAgICAgICAgLy8gbW9ubzogJ1JvYm90byBNb25vJ1xuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBsaWdodDogJyNmMGYwZjAnLFxuICAgICAgICAgIGRhcms6ICcjMTExMTExJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYmFja2dyb3VuZDU6IHtcbiAgICAgICAgLy8gICBsaWdodDogJyNkZGRkZGQnLFxuICAgICAgICAvLyAgIGRhcms6ICcjMTExMTExJyxcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGJhY2tncm91bmREYXJrOiB7XG4gICAgICAgIC8vICAgbGlnaHQ6ICcjZGRkZGRkJyxcbiAgICAgICAgLy8gICBkYXJrOiAnIzE1MTUxNSdcbiAgICAgICAgLy8gfVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2phbWVzbGF3dG9uL0NvZGluZy9kb2NzLXYyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamFtZXNsYXd0b24vQ29kaW5nL2RvY3MtdjIvbmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qYW1lc2xhd3Rvbi9Db2RpbmcvZG9jcy12Mi9uYXYudHNcIjtpbXBvcnQgdHlwZSB7IFNpZGViYXIsIFRvcE5hdiB9IGZyb20gJ3ZvY3MnXG5cbmV4cG9ydCBjb25zdCB0b3BOYXYgPSBbXG4gIHtcbiAgICB0ZXh0OiAnU29sdXRpb25zJyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgQnVpbGRlcicsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnT25ib2FyZCcsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnTW9uZXRpemUnLFxuICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9tb25ldGl6YXRpb24tb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvbW9uZXRpemF0aW9uLW92ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdQb3dlcicsIGxpbms6ICcvc29sdXRpb25zL3Bvd2VyLW92ZXJ2aWV3JywgbWF0Y2g6ICcvc29sdXRpb25zL3Bvd2VyLW92ZXJ2aWV3JyB9LFxuICAgICAgLy8geyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnLCBtYXRjaDogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvY2hhaW4tc3VwcG9ydCcgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1Jlc291cmNlcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ0d1aWRlcycsIGxpbms6ICcvZ3VpZGVzL2d1aWRlLW92ZXJ2aWV3JywgbWF0Y2g6ICcvZ3VpZGVzL2d1aWRlLW92ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnVGVtcGxhdGVzJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnLCBtYXRjaDogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdTREtzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnVW5pdHknLCBsaW5rOiAnL3Nkay91bml0eS9vdmVydmlldycsIG1hdGNoOiAnL3Nkay91bml0eS9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1VucmVhbCcsIGxpbms6ICcvc2RrL3VucmVhbC9vdmVydmlldycsIG1hdGNoOiAnL3Nkay91bnJlYWwvb3ZlcnZpZXcnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUeXBlc2NyaXB0JyxcbiAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ0dvJywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvZ28vb3ZlcnZpZXcnIH0sXG4gICAgICAvLyB7IHRleHQ6ICdBbmRyb2lkJywgbGluazogJy9zZGsvYW5kcm9pZCcsIG1hdGNoOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgICAgeyB0ZXh0OiAnTW9iaWxlJywgbGluazogJy9zZGsvbW9iaWxlJywgbWF0Y2g6ICcvc2RrL21vYmlsZScgfSxcbiAgICAgIC8vIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycsIG1hdGNoOiAnL3Nkay9pT1MnIH1cbiAgICBdLFxuICB9LFxuXG4gIC8vIHJlcGxhY2UgbGlua3MuXG4gIHtcbiAgICB0ZXh0OiAnQVBJcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9ucyBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9hcGkvdHJhbnNhY3Rpb25zL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdBbmFseXRpY3MgQVBJJywgbGluazogJy9hcGkvYW5hbHl0aWNzL292ZXJ2aWV3JywgbWF0Y2g6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ0luZGV4ZXIgQVBJJywgbGluazogJy9hcGkvaW5kZXhlci9vdmVydmlldycsIG1hdGNoOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnLCBtYXRjaDogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9hcGkvbm9kZS1nYXRld2F5JywgbWF0Y2g6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSxcbiAgICBdLFxuICB9LFxuXG4gIHtcbiAgICB0ZXh0OiAnU3VwcG9ydCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmNhbm55LmlvL2NoYW5nZWxvZycgfSxcbiAgICAgIHsgdGV4dDogJ1Jlc3RyaWN0ZWQgUmVnaW9ucycsIGxpbms6ICcvc3VwcG9ydC9yZXN0cmljdGVkLXJlZ2lvbnMnIH0sXG4gICAgICB7IHRleHQ6ICdUb2tlbiBEaXJlY3RvcnknLCBsaW5rOiAnL3N1cHBvcnQvdG9rZW4tZGlyZWN0b3J5JyB9LFxuICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICB7IHRleHQ6ICdEaXNjb3JkJywgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9zZXF1ZW5jZScgfSxcbiAgICAgIHsgdGV4dDogXCJXZSdyZSBoaXJpbmchXCIsIGxpbms6ICdodHRwczovL2hvcml6b24uaW8vY2FyZWVycycgfSxcbiAgICAgIHsgdGV4dDogJ0NvbnRhY3QgVXMnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICBdLFxuICB9LFxuXSBhcyBUb3BOYXZcblxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSB7XG4gIC8vIE92ZXJ2aWV3XG4gICcvc29sdXRpb25zJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdPdmVydmlldycsXG4gICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdHZXR0aW5nIFN0YXJ0ZWQnLFxuICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nZXR0aW5nLXN0YXJ0ZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ09uYm9hcmQnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCcsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9xdWlja3N0YXJ0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2V0dXAnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ29uZmlndXJhdGlvbicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdHb29nbGUgU2V0dXAnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9lbWJlZGRlZC13YWxsZXQvZ29vZ2xlLWNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0FwcGxlIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L2FwcGxlLWNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1BsYXlGYWIgU2V0dXAnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9lbWJlZGRlZC13YWxsZXQvcGxheWZhYi1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBdXRoZW50aWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9hdXRoZW50aWNhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVXNlIFdhbGxldHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvdXNlLXdhbGxldHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0FjY291bnQgRmVkZXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9hY2NvdW50LWZlZGVyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ01hbmFnZSBTZXNzaW9ucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9tYW5hZ2Utc2Vzc2lvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT24tcmFtcCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL29uLXJhbXAnIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0ZlZSBPcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL2ZlZS1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdUb2tlbiBWZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdUcmFuc2FjdGlvbiBSZWNlaXB0cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy90cmFuc2FjdGlvbi1yZWNlaXB0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBcmNoaXRlY3R1cmUnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ092ZXJ2aWV3JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9vdmVydmlldycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQWN0aW9uIFBheWxvYWRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9hY3Rpb24tcGF5bG9hZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1Jlc3BvbnNlIFBheWxvYWRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9yZXNwb25zZS1wYXlsb2FkcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVHJ1c3QgQ29udHJhY3QgUmVjb3ZlcnkgRmxvdycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvdHJ1c3QtY29udHJhY3QtcmVjb3ZlcnktZmxvdycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnRW5jbGF2ZSBWZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL2VuY2xhdmUtdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdJbnRlbnRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9pbnRlbnRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ01pZ3JhdGluZyB0byBTZXF1ZW5jZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L21pZ3JhdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZmFxJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgS2l0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L2dldHRpbmctc3RhcnRlZCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9jb25maWd1cmF0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnT24tcmFtcCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L29uLXJhbXAnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDaGVja291dCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L2NoZWNrb3V0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ3VzdG9tIENvbm5lY3RvcnMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9jdXN0b20tY29ubmVjdG9ycycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdXYWxsZXQgTGlua2luZycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvbGluay13YWxsZXRzL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSW50ZWdyYXRpb24gR3VpZGUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2xpbmstd2FsbGV0cy9pbnRlZ3JhdGlvbi1ndWlkZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVW5pdmVyc2FsIFdhbGxldCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvcXVpY2tzdGFydCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb25uZWN0IFdhbGxldCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvY29ubmVjdC13YWxsZXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0F1dGhlbnRpY2F0ZSBVc2VycyB3aXRoIE1lc3NhZ2UgU2lnbmF0dXJlJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9hdXRoLWFkZHJlc3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NpZ24tbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnTm8td2FsbGV0IGNvbmZpcm1hdGlvbiBzaWduYXR1cmVzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZXNzaW9uLWtleXMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgVHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLXRyYW5zYWN0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtZXJjMjAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgRVJDLTcyMSAoTkZUKSBUb2tlbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtZXJjNzIxJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy0xMTU1IChDb2xsZWN0aWJsZSkgVG9rZW5zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzExNTUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtYmF0Y2gtdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdCdWlsZGluZyBCYWNrZW5kcyB3aXRoIFNlcXVlbmNlJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9idWlsZGluZy1iYWNrZW5kcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAge3RleHQ6ICdTZXF1ZW5jZSBLaXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvc2VxdWVuY2Uta2l0J30sXG4gICAgICAgICAgICB7IHRleHQ6ICdTdXBwb3J0ZWQgUGxhdGZvcm1zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3BsYXRmb3JtcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZpYXQgT24tUmFtcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZmlhdC1vbi1yYW1wcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0tleSBNYW5hZ2VtZW50JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2tleS1tYW5hZ2VtZW50JyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01vbmV0aXplJyxcbiAgICAgIC8vIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbW9uZXRpemF0aW9uLW92ZXJ2aWV3JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ01hcmtldHBsYWNlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdXaGl0ZS1sYWJlbCBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy93aGl0ZS1sYWJlbC1tYXJrZXRwbGFjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQnVpbGQgeW91ciBDdXN0b20gTWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL3F1aWNrc3RhcnQnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRmlhdCBPbi1yYW1wcycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvcGF5bWVudHMvb25yYW1wcy9maWF0LW9uLXJhbXBzJyxcbiAgICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvcGF5bWVudHMvb25yYW1wcy9maWF0LW9uLXJhbXBzJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnUG93ZXInLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9wb3dlci1vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdEZXBsb3lhYmxlIENvbnRyYWN0cycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29udHJhY3RzJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRGVwbG95IGEgQ29sbGVjdGlibGUgQ29udHJhY3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1hbi1pdGVtLWNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHt0ZXh0OiAnTWludCBJbi1HYW1lIEl0ZW1zIGFuZCBBY2hpZXZlbWVudHMgKEVSQzExNTUpJywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDAtbWludC1pdGVtcy1mcm9tLUVSQzExNTUnfSxcbiAgICAgICAgICAgIC8vIHt0ZXh0OiAnTWludCBEaWdpdGFsIENvbGxlY3RpYmxlcyAoRVJDNzIxKScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAyLW1pbnQtY29sbGVjdGlibGVzLWZyb20tRVJDNzIxJ30sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdEZXBsb3kgYW4gSW4tR2FtZSBDdXJyZW5jeSAoRVJDMjApJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktRVJDMjAtY3VycmVuY3knLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcGxveSBhIFByaW1hcnkgU2FsZXMgQ29udHJhY3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1wcmltYXJ5LXNhbGVzLWNvbnRyYWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbnMnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29sbGVjdGlvbnMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1F1ZXJ5aW5nIEJsb2NrY2hhaW4gRGF0YScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW5kZXhlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvaW5kZXhlcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci93ZWJob29rcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIE1hbmFnZXInLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RyYW5zYWN0aW9uLW1hbmFnZXIvb3ZlcnZpZXcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0FuYWx5dGljcycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9hbmFseXRpY3MnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0dhcyBTcG9uc29yc2hpcCcsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nYXMtdGFuaycsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvbm9kZS1nYXRld2F5JyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWludGVyJywgbGluazogJy9zb2x1dGlvbnMvbWludGVyJyB9XG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXInLFxuICAgIC8vICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gICBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsIFJlZmVyZW5jZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ0VJUDUxODkgdnMuIDQzMzcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy81MTg5LTQzMzcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2h5IFNtYXJ0IENvbnRyYWN0IFdhbGxldHM/JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzL3doeScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXRoZXJzIHY2IFN1cHBvcnQnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2V0aGVycy12Ni1taWdyYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NvbnRyYWN0IEludGVybmFscycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3ltZW50JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL2RlcGxveW1lbnQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZXF1ZW5jZSB2MScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3knLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvZGVwbG95JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgRmFjdG9yeScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvd2FsbGV0LWZhY3RvcnknLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBDb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyB7dGV4dDogJ1RyYW5zYWN0aW9uIEVuY29kaW5nJywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxLzA3LXRyYW5zYWN0aW9uLWVuY29kaW5nJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ25hdHVyZSBFbmNvZGluZycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvc2lnbmF0dXJlLWVuY29kaW5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgQ29udGV4dCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvd2FsbGV0LWNvbnRleHQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgdjInLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyL2RlcGxveScgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ29udHJhY3QgQXVkaXRzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL2NvbnRyYWN0LWF1ZGl0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG5cbiAgJy9ndWlkZXMnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0d1aWRlcycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIEdhbWUgd2l0aCBXZWJHTCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjYXZpYXRvci13ZWIzLWdhbWUtd2l0aC13ZWJnbCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1Byb2plY3QgU2V0dXAgV2l0aCBXZWJwYWNrJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMS1wcm9qZWN0LXNldHVwLXdpdGgtd2VicGFjaycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0ludGVncmF0ZSBTZXF1ZW5jZSBLaXQgV2l0aCBXYWFTJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMi1pbnRlZ3JhdGUtc2VxdWVuY2Uta2l0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IGEgQ29sbGVjdGlibGVzIENvbnRyYWN0JywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMy1kZXBsb3ktYS1jb2xsZWN0aWJsZXMtY29udHJhY3QnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBSZW1vdGUgTWludGVyJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjNC1kZXBsb3ktYS1yZW1vdGUtbWludGVyLS1taW50LWluLWdhbWUtYWNoaWV2ZW1lbnQtdG9rZW5zJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTGV2ZXJhZ2UgSXRlbXMgSW4tZ2FtZScsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzUtbGV2ZXJhZ2UtaXRlbXMtaW4tZ2FtZScgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0J1cm4gSW4tZ2FtZSBBY2hpZXZlbWVudCBUb2tlbnMnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM2LWJ1cm4taW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICcoT3B0aW9uYWwpIEludGVncmF0ZSBFbWJlZGRlZCBXYWxsZXQgSW50byBTZXF1ZW5jZSBLaXQnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM3LW9wdGlvbmFsLWludGVncmF0ZS1lbWJlZGRlZC13YWxsZXQtaW50by1zZXF1ZW5jZS1raXQnIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgVW5pdHkgR2FtZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjaW50cm8tdG8tamVsbHktZm9yZXN0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQnVpbGQgYSBHYW1lIExvb3AnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNidWlsZC1hLWdhbWUtbG9vcCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0ludGVncmF0ZSBFbWJlZGRlZCBXYWxsZXRzJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjaW50ZWdyYXRlLXNvY2lhbC1zaWduLWluLWFuZC1zZXF1ZW5jZXMtZW1iZWRkZWQtd2FsbGV0LXNvbHV0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IENvbGxlY3RpYmxlcycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2RlcGxveS1hLWNvbGxlY3RpYmxlcy1jb250cmFjdCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSBSZW1vdGUgTWludGVyJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjZGVwbG95LWEtcmVtb3RlLW1pbnRlcid9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTWludGluZyBUb2tlbnMgdG8gSW52ZW50b3J5JywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjbWludC1pbi1nYW1lLXRva2Vucy10by10aGUtcGxheWVycy1pbnZlbnRvcnknIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdQdXJjaGFzZSBDb2xsZWN0aWJsZXMgd2l0aCBFUkMyMCBUb2tlbnMnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNidXJuLWluLWdhbWUtdG9rZW5zLWluLWV4Y2hhbmdlLWZvci1vdGhlcnMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdCdWlsZGluZyBhbiBJbi1nYW1lIFNob3AnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNidWlsZGluZy10aGUtc2hvcC1wYWdlcy1hbmQtc2V0dGluZy10aGUtbWludGluZy1yZXF1aXJlbWVudHMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdMZXZlcmFnZSBQdXJjaGFzZWQgSXRlbXMgSW4tZ2FtZScsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2xldmVyYWdlLXB1cmNoYXNlZC1pdGVtcy1pbi1nYW1lJyB9LFxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIENvbGxlY3RpYmxlIE1pbnRpbmcgU2VydmljZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MnLFxuICAgICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzI21pbnQtY29sbGVjdGlibGVzLXVzaW5nLWEtZ2FzbGVzcy1zZXJ2ZXJsZXNzLXRyYW5zYWN0aW9ucy1hcGknLCBtYXRjaDogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyNtaW50LWNvbGxlY3RpYmxlcy11c2luZy1hLWdhc2xlc3Mtc2VydmVybGVzcy10cmFuc2FjdGlvbnMtYXBpJ30sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdTZXR1cCBDbG91ZGZsYXJlIEVudmlyb25tZW50JywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMxLXNldHVwLWNsb3VkZmxhcmUtZW52aXJvbm1lbnQtd2l0aC13cmFuZ2xlci1jbGktYW5kLWRlcGxveS1hLXRlc3QnLCBtYXRjaDogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMxLXNldHVwLWNsb3VkZmxhcmUtZW52aXJvbm1lbnQtd2l0aC13cmFuZ2xlci1jbGktYW5kLWRlcGxveS1hLXRlc3QnfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSwgU3BvbnNvciAmIFVwZGF0ZSBNZXRhZGF0YSBGb3IgYW4gRVJDMTE1NScsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjMi1kZXBsb3ktc3BvbnNvci1hbmQtdXBkYXRlLW1ldGFkYXRhLWZvci1hbi1lcmMxMTU1LWNvbnRyYWN0LXdpdGgtc2VxdWVuY2UtYnVpbGRlcid9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnVXNlIEV0aEF1dGhQcm9vZiB0byBQcmV2ZW50IEVPQSBERG9TJywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMzLXVzZS1ldGhhdXRocHJvb2YtdG8tcHJldmVudC1lb2EtZGRvcycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ01pbnQgYSBDb2xsZWN0aWJsZSBUbyBXYWxsZXQnLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzQtbWludC1hLWNvbGxlY3RpYmxlLXRvLXdhbGxldCcgfSxcbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTWFuYWdlIENvbGxlY3Rpb24gTWV0YWRhdGEnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZScsXG4gICAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ09idGFpbiBhIFNlY3JldCBBUEkgS2V5JywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjMS1vYnRhaW4tYS1zZWNyZXQtYXBpLWtleSd9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQ3JlYXRlIENvbGxlY3Rpb24nLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSMyLWNyZWF0ZS1jb2xsZWN0aW9uLWZyb20tYS1jdXJsLXJlcXVlc3QnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdDcmVhdGUgVG9rZW4nLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSMzLWNyZWF0ZS10b2tlbi11c2luZy10b2tlbmlkJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQ3JlYXRlIEFzc2V0JywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNC1jcmVhdGUtYXNzZXQtdXNpbmctdG9rZW5pZCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1N0b3JlIGFuIEltYWdlJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNS1zdG9yZS1pbWFnZS1hc3NldCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1VwZGF0ZSB0byBOb24tcHJpdmF0ZScsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzYtdXBkYXRlLW5vbi1wcml2YXRlLXRva2VuJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnUHVibGlzaCBDb2xsZWN0aW9uJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNy1wdWJsaXNoLWNvbGxlY3Rpb24tZnJvbS1hLWN1cmwtcmVxdWVzdCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1JlbmRlciBBc3NldCBmcm9tIEFQSScsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzgtcmVuZGVyLWFzc2V0LWZyb20tYXBpLXB1YmxpY2x5JyB9LFxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIFRyZWFzdXJlIENoZXN0IHdpdGggQUkgTWludGluZycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3RyZWFzdXJlLWNoZXN0LWd1aWRlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnU2VxdWVuY2UgQnVpbGRlciBDb25zb2xlIFNpZ251cCAmIFByb2plY3QgQ3JlYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzEtYnVpbGRlci1jb25zb2xlLXNpZ251cC0tcHJvamVjdC1jcmVhdGlvbicgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0FjY2VzcyBLZXkgTWFuYWdlbWVudCcsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMi1hY2Nlc3Mta2V5LW1hbmFnZW1lbnQnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdTZXF1ZW5jZSBLaXQgaW50ZWdyYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzMtc2VxdWVuY2Uta2l0LWludGVncmF0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnaWZyYW1lLXRvLURhcHAgQ29tbXVuaWNhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNC1pZnJhbWUtdG8tZGFwcC1jb21tdW5pY2F0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IGEgQ29udHJhY3QgJiBTcG9uc29yIEdhcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNS1kZXBsb3ktYS1jb250cmFjdC0tc3BvbnNvci1nYXMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBDbG91ZGZsYXJlIFdvcmtlcicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNi1kZXBsb3ktYS1jbG91ZGZsYXJlLXdvcmtlcicgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0dlbmVyYXRpbmcgQUkgUHJvbXB0cyAmIEltYWdlcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNy1nZW5lcmF0aW5nLWFpLXByb21wdHMtLWltYWdlcycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1N0b3JlIE1lZGlhIFRvIFNlcXVlbmNlIE1ldGFkYXRhIFNlcnZpY2UnLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzgtc3RvcmUtbWVkaWEtdG8tc2VxdWVuY2UtbWV0YWRhdGEtc2VydmljZScgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1NlY3VyaW5nIFlvdXIgQ2xvdWRmbGFyZSBXb3JrZXInLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzktc2VjdXJpbmcteW91ci1jbG91ZGZsYXJlLXdvcmtlcicgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJyhPcHRpb25hbCkgTmFpdmUgTWludCBSZXN0cmljdGlvbiBQZXIgV2FsbGV0JywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSMxMC1vcHRpb25hbC1uYWl2ZS1taW50LXJlc3RyaWN0aW9uLXBlci13YWxsZXQnIH0sXG5cbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQnVpbGQgYSBCYWNrZW5kIFRyYW5zYWN0aW9uIFNlcnZpY2UnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9idWlsZGluZy1yZWxheWluZy1zZXJ2ZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0xldmVyYWdlIFNlcXVlbmNlIEFuYWx5dGljcyBBUEkgaW4gRHVuZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL2FuYWx5dGljcy1ndWlkZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQnVpbGQgYW4gRW1iZWRkZWQgV2FsbGV0IExpbmtpbmcgU2VydmljZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvbGluay13YWxsZXRzL2ludGVncmF0aW9uLWd1aWRlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIEN1c3RvbSBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZScsXG4gICAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ01pbnRpbmcnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjMS1taW50aW5nJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnV2FsbGV0IEF1dGhlbnRpY2F0aW9uJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzItd2FsbGV0LWF1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQmxvY2tjaGFpbiBRdWVyaWVzJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzMtYmxvY2tjaGFpbi1xdWVyaWVzJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTXVsdGktd2FsbGV0IHR5cGVzJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzQtbXVsdGktd2FsbGV0LXR5cGVzJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnUmVxdWVzdCBDcmVhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM1LXJlcXVlc3QtY3JlYXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdPcmRlciBBY2NlcHRpbmcnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjNi1vcmRlci1hY2NlcHRpbmcnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICcoT3B0aW9uYWwpIEVuYWJsZSBFbWJlZGRlZCBXYWxsZXQnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjNy1vcHRpb25hbC1pbnRlZ3JhdGUtZW1iZWRkZWQtd2FsbGV0LWludG8tc2VxdWVuY2Uta2l0JyB9LFxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiAnSW50ZWdyYXRlIHRva2VuIHJld2FyZHMgaW50byB5b3VyIERpc2NvcmQgc2VydmVyJyxcbiAgICAvLyAgIGxpbms6ICcvZ3VpZGVzL2Rpc2NvcmQnXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVtcGxhdGVzJyxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JyxcbiAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAvLyAgIHsgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLWVtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnQnVpbGQgYSBCYWNrZW5kIFRyYW5zYWN0aW9uIE1hbmFnZXInLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvYnVpbGRpbmctcmVsYXlpbmctc2VydmVyJyB9XG4gICAgICAvLyAgIC8vIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSSBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScgfVxuICAgICAgLy8gXVxuICAgIH0sXG4gIF0sXG5cbiAgLy8gU0RLc1xuICAnL3Nkayc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR2FtZSBFbmdpbmUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdVbml0eScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIG1hdGNoOiAnL3Nkay91bml0eS9vdmVydmlldycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL3Nkay91bml0eS9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvc2RrL3VuaXR5L3NldHVwJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRpb24nLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uL2ludHJvJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VtYWlsICsgT1RQJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vZW1haWwnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT0lEQyAtIFNvY2lhbCBTaWduIEluJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vb2lkYycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdQbGF5RmFiJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vcGxheWZhYicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdHdWVzdCcsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uL2d1ZXN0JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdGZWRlcmF0ZWQgQWNjb3VudHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vZmVkZXJhdGVkLWFjY291bnRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dyaXRlIHRvIGJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS93cml0ZS10by1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVhZCBmcm9tIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS9yZWFkLWZyb20tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpZ24gTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay91bml0eS9zaWduLW1lc3NhZ2VzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVjb3ZlcmluZyBTZXNzaW9ucycsIGxpbms6ICcvc2RrL3VuaXR5L3JlY292ZXJpbmctc2Vzc2lvbnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZXNzaW9uIE1hbmFnZW1lbnQnLCBsaW5rOiAnL3Nkay91bml0eS9zZXNzaW9uLW1hbmFnZW1lbnQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPbi1SYW1wIEZ1bmRzIHZpYSBDcmVkaXQgQ2FyZCcsIGxpbms6ICcvc2RrL3VuaXR5L29uYm9hcmQtdXNlci1mdW5kcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ01hcmtldHBsYWNlJywgbGluazogJy9zZGsvdW5pdHkvbWFya2V0cGxhY2UnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb25uZWN0IHdpdGggRXh0ZXJuYWwgV2FsbGV0cycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3VuaXR5L2Nvbm5lY3RpbmctZXh0ZXJuYWwtd2FsbGV0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVXBncmFkaW5nIGZyb20gdjIgdG8gdjMnLCBsaW5rOiAnL3Nkay91bml0eS92Mi10by12My11cGdyYWRlLWd1aWRlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0IFVJJywgbGluazogJy9zZGsvdW5pdHkvd2FsbGV0LXVpJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRGVwbG95IENvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L2RlcGxveS1jb250cmFjdHMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBZHZhbmNlZCBCbG9ja2NoYWluIEludGVyYWN0aW9ucycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC9pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3dhbGxldHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2xpZW50cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2NsaWVudHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVHJhbnNmZXJzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvdHJhbnNmZXJzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2NvbnRyYWN0cycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdUb2tlbnMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC90b2tlbnMnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVW5yZWFsJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbWF0Y2g6ICcvc2RrL3VucmVhbC9vdmVydmlldycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdW5yZWFsL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9zZGsvdW5yZWFsL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1VwZ3JhZGluZycsIGxpbms6ICcvc2RrL3VucmVhbC91cGdyYWRpbmcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvc2RrL3VucmVhbC9zZXR1cCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0F1dGhlbnRpY2F0aW9uJywgbGluazogJy9zZGsvdW5yZWFsL2F1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2VxdWVuY2UgV2FsbGV0JywgbGluazogJy9zZGsvdW5yZWFsL2FwaScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ01hbmFnaW5nIFNlc3Npb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvbWFuYWdpbmctc2Vzc2lvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1JlYWQgZnJvbSBCbG9ja2NoYWluJywgbGluazogJy9zZGsvdW5yZWFsL3JlYWQtZnJvbS1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV3JpdGUgdG8gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VucmVhbC93cml0ZS10by1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnT24tUmFtcCBGdW5kcyB2aWEgQ3JlZGl0IENhcmQnLCBsaW5rOiAnL3Nkay91bnJlYWwvb25ib2FyZC11c2VyLWZ1bmRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQWR2YW5jZWQgQmxvY2tjaGFpbiBJbnRlcmVhY3Rpb25zJywgbGluazogJy9zZGsvdW5yZWFsL2FkdmFuY2VkJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUGFja2FnaW5nJywgbGluazogJy9zZGsvdW5yZWFsL3BhY2thZ2luZycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNb2JpbGUnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgLy8geyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmVhY3QgTmF0aXZlJywgbGluazogJy9zZGsvbW9iaWxlJyB9LFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGV4dDogJ1dlYjMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb25uZWN0IFdhbGxldCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL2Nvbm5lY3Qtd2FsbGV0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9hdXRoLWFkZHJlc3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zaWduLW1lc3NhZ2UnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdOby13YWxsZXQgY29uZmlybWF0aW9uIHNpZ25hdHVyZXMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZXNzaW9uLWtleXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmRpbmcgVHJhbnNhY3Rpb25zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC10cmFuc2FjdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmRpbmcgRVJDLTIwIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjMjAnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1lcmM3MjEnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy0xMTU1IChDb2xsZWN0aWJsZSkgVG9rZW5zJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1lcmMxMTU1JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIGEgQmF0Y2ggb2YgVHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1iYXRjaC10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkaW5nIEJhY2tlbmRzIHdpdGggU2VxdWVuY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9idWlsZGluZy1iYWNrZW5kcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbm5lY3RvcnMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2FnbWknLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2FnbWknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmFpbmJvd0tpdCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9yYWluYm93LWtpdCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXZWIzIE9uYm9hcmQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViMy1vbmJvYXJkJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dlYjMgUmVhY3QgVjYnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViMy1yZWFjdC12NicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXZWIzTW9kYWwnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViM21vZGFsJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9GQVEnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnR28nLFxuICAgICAgICAgIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JyxcbiAgICAgICAgICBpdGVtczogW3sgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnIH1dLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb21tb24gUXVlc3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG93IGRvIEkgZG8gc2lnbmF0dXJlIHZhbGlkYXRpb24/JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYXV0aC1hZGRyZXNzJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8gYXBpc1xuICAnL2FwaSc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnVHJhbnNhY3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnRmV0Y2ggRmVlIE9wdGlvbnMnLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvZXhhbXBsZXMvZmV0Y2gtZmVlLW9wdGlvbnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9leGFtcGxlcy9zZW5kLXRyYW5zYWN0aW9ucycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0ZldGNoIFRyYW5zYWN0aW9uIFJlY2VpcHRzJyxcbiAgICAgICAgICAgICAgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL2ZldGNoLXRyYW5zYWN0aW9uLXJlY2VpcHRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnSW5kZXhlcicsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2FwaS9pbmRleGVyL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnRmV0Y2ggVG9rZW5zJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9mZXRjaC10b2tlbnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdUcmFuc2FjdGlvbiBIaXN0b3J5JywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy90cmFuc2FjdGlvbi1oaXN0b3J5JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVW5pcXVlIFRva2VucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdW5pcXVlLXRva2VucycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIEhpc3RvcnkgVG9rZW4gQ29udHJhY3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3RyYW5zYXRpb24taGlzdG9yeS10b2tlbi1jb250cmFjdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTmF0aXZlIE5ldHdvcmsgQmFsYW5jZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvbmF0aXZlLW5ldHdvcmstYmFsYW5jZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgVGlwcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvbWV0YWRhdGEtdGlwcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy93ZWJob29rLWxpc3RlbmVyJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU3Vic2NyaXB0aW9ucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvc3Vic2NyaXB0aW9ucycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdBbmFseXRpY3MnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvYW5hbHl0aWNzL292ZXJ2aWV3JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdXYWxsZXRzJywgbGluazogJy9hcGkvYW5hbHl0aWNzL2V4YW1wbGVzL3dhbGxldHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdNYXJrZXRwbGFjZXMnLCBsaW5rOiAnL2FwaS9hbmFseXRpY3MvZXhhbXBsZXMvbWFya2V0cGxhY2UnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTWV0YWRhdGEnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1Rva2VuIE1ldGFkYXRhJywgbGluazogJy9hcGkvbWV0YWRhdGEvdG9rZW4tbWV0YWRhdGEnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb250cmFjdCBNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhL2NvbnRyYWN0LW1ldGFkYXRhJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUkVTVCBBUEknLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9yZXN0LWFwaScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnU2NoZW1hJywgbGluazogJy9hcGkvbWFya2V0cGxhY2Uvc2NoZW1hJyB9LFxuICAgICAgICAvLyB7IHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9hcGknIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvb3JkZXJib29rLXRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0NyZWF0aW5nIE1hcmtldCBPcmRlcnMgJiBMaXN0aW5ncycsXG4gICAgICAgICAgICAgIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL29yZGVyYm9vay10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0dldCBUb3AgT3JkZXJzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LXRvcC1vcmRlcnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXQgT3JkZXJib29rJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LW9yZGVyYm9vaycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0dldCBVc2VyIEFjdGl2aXRpZXMnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9nZXQtdXNlci1hY3Rpdml0aWVzJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ05vZGUgR2F0ZXdheScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFt7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScgfV0sXG4gICAgfSxcbiAgXSxcblxuICAvLyBTdXBwb3J0XG4gICcvc3VwcG9ydCc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnU3VwcG9ydCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdTdXBwb3J0JywgbGluazogJy9zdXBwb3J0JyB9LFxuICAgICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmNhbm55LmlvL2NoYW5nZWxvZycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmVzdHJpY3RlZCBSZWdpb25zJywgbGluazogJy9zdXBwb3J0L3Jlc3RyaWN0ZWQtcmVnaW9ucycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICAgIHsgdGV4dDogJ1Rva2VuIERpcmVjdG9yeScsIGxpbms6ICcvc3VwcG9ydC90b2tlbi1kaXJlY3RvcnknIH0sXG4gICAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyB9LFxuICAgICAgICB7IHRleHQ6IFwiV2UncmUgaGlyaW5nIVwiLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0NvbnRhY3QgVXMnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnU2VxdWVuY2UgQnVpbGRlciBBZG1pbicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdQcm9qZWN0IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3N1cHBvcnQvYnVpbGRlci9wcm9qZWN0LW1hbmFnZW1lbnQnIH0sXG4gICAgICAgIHsgdGV4dDogJ1Byb2plY3QgU2V0dGluZ3MnLCBsaW5rOiAnL3N1cHBvcnQvYnVpbGRlci9wcm9qZWN0LXNldHRpbmdzJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufSBhcyBTaWRlYmFyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7OztBQ0V0QixJQUFNLFNBQVM7QUFBQSxFQUNwQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FB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cUM7QUFBQSxnQkFDcEU7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsZ0JBQ0w7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0EsRUFBRSxNQUFNLFdBQVcsTUFBTSxzREFBc0Q7QUFBQSxnQkFDL0U7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsZ0JBQ0w7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0EsRUFBRSxNQUFNLE9BQU8sTUFBTSx5Q0FBeUM7QUFBQSxVQUNoRTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLDJDQUEyQztBQUFBLFlBQ3JFLEVBQUUsTUFBTSxjQUFjLE1BQU0sa0RBQWtEO0FBQUEsWUFDOUUsRUFBRSxNQUFNLGlCQUFpQixNQUFNLGdEQUFnRDtBQUFBLFlBQy9FLEVBQUUsTUFBTSxXQUFXLE1BQU0sMENBQTBDO0FBQUEsWUFDbkUsRUFBRSxNQUFNLFlBQVksTUFBTSwyQ0FBMkM7QUFBQSxZQUNyRTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBRUE7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sMkNBQTJDO0FBQUEsWUFDckU7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLCtDQUErQztBQUFBLFlBQ3pFLEVBQUUsTUFBTSxjQUFjLE1BQU0saURBQWlEO0FBQUEsWUFDN0U7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFdBQVc7QUFBQSxjQUNYLE9BQU87QUFBQSxnQkFDTDtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBO0FBQUEsWUFFQSxFQUFFLE1BQU0sdUJBQXVCLE1BQU0sZ0RBQWdEO0FBQUEsWUFDckYsRUFBRSxNQUFNLGlCQUFpQixNQUFNLG9EQUFvRDtBQUFBLFlBQ25GLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxxREFBcUQ7QUFBQSxVQUN2RjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQTtBQUFBLE1BRU4sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSxtQ0FBbUM7QUFBQSxRQUM3RDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLGNBQ1gsT0FBTztBQUFBLGdCQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sNkNBQTZDO0FBQUEsZ0JBQ3ZFLEVBQUUsTUFBTSxjQUFjLE1BQU0sK0NBQStDO0FBQUEsY0FDN0U7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSw0QkFBNEI7QUFBQSxRQUN0RDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSwrQkFBK0I7QUFBQSxZQUN6RDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQTtBQUFBO0FBQUEsWUFHQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sV0FBVyxNQUFNLDZCQUE2QjtBQUFBLFlBQ3RELEVBQUUsTUFBTSxZQUFZLE1BQU0sOEJBQThCO0FBQUEsVUFDMUQ7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFFQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQTtBQUFBLE1BRUY7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTUE7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxnREFBZ0Q7QUFBQTtBQUFBLFFBRS9FO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLGNBQWMsTUFBTSx1REFBdUQ7QUFBQSxZQUNuRjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLGNBQ1gsT0FBTztBQUFBLGdCQUNMLEVBQUUsTUFBTSxVQUFVLE1BQU0sc0RBQXNEO0FBQUEsZ0JBQzlFO0FBQUEsa0JBQ0UsTUFBTTtBQUFBLGtCQUNOLE1BQU07QUFBQSxnQkFDUjtBQUFBLGdCQUNBO0FBQUEsa0JBQ0UsTUFBTTtBQUFBLGtCQUNOLE1BQU07QUFBQSxnQkFDUjtBQUFBO0FBQUEsZ0JBRUE7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsZ0JBQ0wsRUFBRSxNQUFNLFVBQVUsTUFBTSxzREFBc0Q7QUFBQSxnQkFDOUU7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxXQUFXO0FBQUEsSUFDVDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBV1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWVI7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVFSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFXUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVVI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1SO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBO0FBQUEsTUFFTixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSxzQkFBc0I7QUFBQSxZQUNoRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sMEJBQTBCO0FBQUEsWUFDeEQsRUFBRSxNQUFNLFNBQVMsTUFBTSxtQkFBbUI7QUFBQSxZQUMxQztBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLGNBQ1gsT0FBTztBQUFBLGdCQUNMLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxrQ0FBa0M7QUFBQSxnQkFDaEUsRUFBRSxNQUFNLGVBQWUsTUFBTSxrQ0FBa0M7QUFBQSxnQkFDL0QsRUFBRSxNQUFNLHlCQUF5QixNQUFNLGlDQUFpQztBQUFBLGdCQUN4RSxFQUFFLE1BQU0sV0FBVyxNQUFNLG9DQUFvQztBQUFBLGdCQUM3RCxFQUFFLE1BQU0sU0FBUyxNQUFNLGtDQUFrQztBQUFBLGdCQUN6RDtBQUFBLGtCQUNFLE1BQU07QUFBQSxrQkFDTixNQUFNO0FBQUEsZ0JBQ1I7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0EsRUFBRSxNQUFNLHVCQUF1QixNQUFNLGlDQUFpQztBQUFBLFlBQ3RFLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSxrQ0FBa0M7QUFBQSxZQUN4RSxFQUFFLE1BQU0saUJBQWlCLE1BQU0sMkJBQTJCO0FBQUEsWUFDMUQsRUFBRSxNQUFNLHVCQUF1QixNQUFNLGlDQUFpQztBQUFBLFlBQ3RFLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxnQ0FBZ0M7QUFBQSxZQUNwRSxFQUFFLE1BQU0saUNBQWlDLE1BQU0sZ0NBQWdDO0FBQUEsWUFDL0UsRUFBRSxNQUFNLGVBQWUsTUFBTSx5QkFBeUI7QUFBQSxZQUN0RDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBLEVBQUUsTUFBTSwyQkFBMkIsTUFBTSxvQ0FBb0M7QUFBQSxZQUM3RSxFQUFFLE1BQU0sYUFBYSxNQUFNLHVCQUF1QjtBQUFBLFlBQ2xELEVBQUUsTUFBTSxvQkFBb0IsTUFBTSw4QkFBOEI7QUFBQSxZQUNoRTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLGNBQ1gsT0FBTztBQUFBLGdCQUNMLEVBQUUsTUFBTSxnQkFBZ0IsTUFBTSxtQ0FBbUM7QUFBQSxnQkFDakUsRUFBRSxNQUFNLFdBQVcsTUFBTSw4QkFBOEI7QUFBQSxnQkFDdkQsRUFBRSxNQUFNLFdBQVcsTUFBTSw4QkFBOEI7QUFBQSxnQkFDdkQsRUFBRSxNQUFNLGFBQWEsTUFBTSxnQ0FBZ0M7QUFBQSxnQkFDM0QsRUFBRSxNQUFNLGFBQWEsTUFBTSxnQ0FBZ0M7QUFBQSxnQkFDM0QsRUFBRSxNQUFNLFVBQVUsTUFBTSw2QkFBNkI7QUFBQSxjQUN2RDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sdUJBQXVCO0FBQUEsWUFDakQsRUFBRSxNQUFNLGdCQUFnQixNQUFNLDJCQUEyQjtBQUFBLFlBQ3pELEVBQUUsTUFBTSxhQUFhLE1BQU0sd0JBQXdCO0FBQUEsWUFDbkQsRUFBRSxNQUFNLFNBQVMsTUFBTSxvQkFBb0I7QUFBQSxZQUMzQyxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sNkJBQTZCO0FBQUEsWUFDN0QsRUFBRSxNQUFNLG1CQUFtQixNQUFNLGtCQUFrQjtBQUFBLFlBQ25ELEVBQUUsTUFBTSxvQkFBb0IsTUFBTSwrQkFBK0I7QUFBQSxZQUNqRSxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sbUNBQW1DO0FBQUEsWUFDekUsRUFBRSxNQUFNLHVCQUF1QixNQUFNLGtDQUFrQztBQUFBLFlBQ3ZFLEVBQUUsTUFBTSxpQ0FBaUMsTUFBTSxpQ0FBaUM7QUFBQSxZQUNoRixFQUFFLE1BQU0scUNBQXFDLE1BQU0sdUJBQXVCO0FBQUEsWUFDMUUsRUFBRSxNQUFNLGFBQWEsTUFBTSx3QkFBd0I7QUFBQSxVQUNyRDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQTtBQUFBO0FBQUEsUUFHTCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sY0FBYztBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLElBRUE7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLGtDQUFrQztBQUFBLFlBQzVELEVBQUUsTUFBTSxrQkFBa0IsTUFBTSx3Q0FBd0M7QUFBQSxZQUN4RTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBLEVBQUUsTUFBTSxnQ0FBZ0MsTUFBTSxzQ0FBc0M7QUFBQSxZQUNwRjtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBLEVBQUUsTUFBTSx3QkFBd0IsTUFBTSwwQ0FBMEM7QUFBQSxZQUNoRixFQUFFLE1BQU0seUJBQXlCLE1BQU0sb0NBQW9DO0FBQUEsWUFDM0UsRUFBRSxNQUFNLGdDQUFnQyxNQUFNLHFDQUFxQztBQUFBLFlBQ25GO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsZ0JBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSxzQ0FBc0M7QUFBQSxnQkFDaEUsRUFBRSxNQUFNLFNBQVMsTUFBTSxtQ0FBbUM7QUFBQSxnQkFDMUQsRUFBRSxNQUFNLGNBQWMsTUFBTSx5Q0FBeUM7QUFBQSxnQkFDckUsRUFBRSxNQUFNLGdCQUFnQixNQUFNLDBDQUEwQztBQUFBLGdCQUN4RSxFQUFFLE1BQU0saUJBQWlCLE1BQU0sMkNBQTJDO0FBQUEsZ0JBQzFFLEVBQUUsTUFBTSxhQUFhLE1BQU0sdUNBQXVDO0FBQUEsZ0JBQ2xFLEVBQUUsTUFBTSxPQUFPLE1BQU0saUNBQWlDO0FBQUEsY0FDeEQ7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLFlBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUFBLFFBQ3hEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQTtBQUFBLE1BRUY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSw2QkFBNkI7QUFBQSxRQUN2RCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0saUNBQWlDO0FBQUEsUUFDL0Q7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxxQkFBcUIsTUFBTSwrQ0FBK0M7QUFBQSxZQUNsRixFQUFFLE1BQU0scUJBQXFCLE1BQU0sK0NBQStDO0FBQUEsWUFDbEY7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sd0JBQXdCO0FBQUEsUUFDbEQsRUFBRSxNQUFNLGdCQUFnQixNQUFNLDRCQUE0QjtBQUFBLFFBQzFEO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0scUNBQXFDO0FBQUEsWUFDbkUsRUFBRSxNQUFNLHVCQUF1QixNQUFNLDRDQUE0QztBQUFBLFlBQ2pGLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxzQ0FBc0M7QUFBQSxZQUNyRTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0EsRUFBRSxNQUFNLGlCQUFpQixNQUFNLDZCQUE2QjtBQUFBLFlBQzVELEVBQUUsTUFBTSxZQUFZLE1BQU0seUNBQXlDO0FBQUEsWUFDbkUsRUFBRSxNQUFNLGlCQUFpQixNQUFNLHNDQUFzQztBQUFBLFVBQ3ZFO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLFlBQVksTUFBTSwwQkFBMEI7QUFBQSxRQUNwRDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLFdBQVcsTUFBTSxrQ0FBa0M7QUFBQSxZQUMzRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sc0NBQXNDO0FBQUEsVUFDdEU7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLHlCQUF5QjtBQUFBLFFBQ25EO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sK0JBQStCO0FBQUEsWUFDL0QsRUFBRSxNQUFNLHFCQUFxQixNQUFNLGtDQUFrQztBQUFBLFlBQ3JFLEVBQUUsTUFBTSxZQUFZLE1BQU0seUJBQXlCO0FBQUEsVUFDckQ7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLDRCQUE0QjtBQUFBO0FBQUE7QUFBQSxRQUd0RDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQSxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sMkNBQTJDO0FBQUEsWUFDM0UsRUFBRSxNQUFNLGlCQUFpQixNQUFNLDBDQUEwQztBQUFBLFlBQ3pFLEVBQUUsTUFBTSx1QkFBdUIsTUFBTSxnREFBZ0Q7QUFBQSxVQUN2RjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU8sQ0FBQyxFQUFFLE1BQU0sWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQUEsSUFDekQ7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLFlBQVk7QUFBQSxJQUNWO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sV0FBVyxNQUFNLFdBQVc7QUFBQSxRQUNwQyxFQUFFLE1BQU0sYUFBYSxNQUFNLHdDQUF3QztBQUFBLFFBQ25FLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSw4QkFBOEI7QUFBQSxRQUNsRSxFQUFFLE1BQU0sT0FBTyxNQUFNLCtCQUErQjtBQUFBLFFBQ3BELEVBQUUsTUFBTSxtQkFBbUIsTUFBTSwyQkFBMkI7QUFBQSxRQUM1RCxFQUFFLE1BQU0sV0FBVyxNQUFNLDhCQUE4QjtBQUFBLFFBQ3ZELEVBQUUsTUFBTSxpQkFBaUIsTUFBTSw2QkFBNkI7QUFBQSxRQUM1RCxFQUFFLE1BQU0sY0FBYyxNQUFNLCtCQUErQjtBQUFBLE1BQzdEO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSxzQ0FBc0M7QUFBQSxRQUMxRSxFQUFFLE1BQU0sb0JBQW9CLE1BQU0sb0NBQW9DO0FBQUEsTUFDeEU7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QURwMUJBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1AsU0FBUyxFQUFFLE9BQU8sb0JBQW9CLE1BQU0sbUJBQW1CO0FBQUEsRUFDL0QsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQTtBQUFBLEVBR0EsVUFBVTtBQUFBLEVBRVY7QUFBQSxFQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW1CQSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtMLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxNQUNULFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQTtBQUFBLE1BRVg7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNMLFlBQVk7QUFBQSxVQUNWLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxRQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVUY7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
