// vocs.config.tsx
import { defineConfig } from "file:///Users/jameslawton/Coding/docs-v2/node_modules/.pnpm/vocs@https+++codeload.github.com+0xsequence+vocs+tar.gz+e5a4f08955a9f897696239e91065d4b578532_uzxwbpivel5i4unz3sywvgfpmi/node_modules/vocs/_lib/index.js";

// nav.ts
var topNav = [
  {
    text: "Solutions",
    items: [
      {
        text: "Sequence Builder",
        link: "/solutions/builder/overview",
        match: "/solutions/builder/overview"
      },
      {
        text: "Onboard",
        link: "/solutions/wallets/overview",
        match: "/solutions/wallets/overview"
      },
      {
        text: "Monetize",
        link: "/solutions/monetization-overview",
        match: "/solutions/monetization-overview"
      },
      { text: "Power", link: "/solutions/power-overview", match: "/solutions/power-overview" }
      // { text: 'Chain Support', link: '/solutions/technical-references/chain-support', match: '/solutions/technical-references/chain-support' },
    ]
  },
  {
    text: "Resources",
    items: [
      { text: "Guides", link: "/guides/guide-overview", match: "/guides/guide-overview" },
      { text: "Templates", link: "/guides/template-overview", match: "/guides/template-overview" }
    ]
  },
  {
    text: "SDKs",
    items: [
      { text: "Unity", link: "/sdk/unity/overview", match: "/sdk/unity/overview" },
      { text: "Unreal", link: "/sdk/unreal/overview", match: "/sdk/unreal/overview" },
      {
        text: "Typescript",
        link: "/sdk/typescript/guides/overview",
        match: "/sdk/typescript/guides/overview"
      },
      { text: "Go", link: "/sdk/go/overview", match: "/sdk/go/overview" },
      // { text: 'Android', link: '/sdk/android', match: '/sdk/android' },
      { text: "Mobile", link: "/sdk/mobile", match: "/sdk/mobile" }
      // { text: 'iOS', link: '/sdk/iOS', match: '/sdk/iOS' }
    ]
  },
  // replace links.
  {
    text: "APIs",
    items: [
      {
        text: "Transactions API",
        link: "/api/transactions/overview",
        match: "/api/transactions/overview"
      },
      { text: "Analytics API", link: "/api/analytics/overview", match: "/api/analytics/overview" },
      { text: "Indexer API", link: "/api/indexer/overview", match: "/api/indexer/overview" },
      { text: "Metadata API", link: "/api/metadata/overview", match: "/api/metadata/overview" },
      {
        text: "Marketplace API",
        link: "/api/marketplace/overview",
        match: "/api/marketplace/overview"
      },
      { text: "Node Gateway", link: "/api/node-gateway", match: "/api/node-gateway" }
    ]
  },
  {
    text: "Support",
    items: [
      { text: "Support", link: "/support" },
      { text: "Changelog", link: "https://0xsequence.canny.io/changelog" },
      { text: "Restricted Regions", link: "/support/restricted-regions" },
      { text: "Token Directory", link: "/support/token-directory" },
      { text: "FAQ", link: "https://support.sequence.xyz" },
      { text: "Discord", link: "https://discord.gg/sequence" },
      { text: "We're hiring!", link: "https://horizon.io/careers" },
      { text: "Contact Us", link: "https://support.sequence.xyz" }
    ]
  }
];
var sidebar = {
  // Overview
  "/solutions": [
    {
      text: "Overview",
      link: "/solutions/builder/overview"
    },
    {
      text: "Getting Started",
      link: "/solutions/builder/getting-started"
    },
    {
      text: "Onboard",
      items: [
        { text: "Overview", link: "/solutions/wallets/overview" },
        {
          text: "Embedded Wallet",
          collapsed: false,
          items: [
            { text: "Overview", link: "/solutions/wallets/embedded-wallet/overview" },
            { text: "Quickstart", link: "/solutions/wallets/embedded-wallet/quickstart" },
            {
              text: "Setup",
              collapsed: true,
              items: [
                { text: "Configuration", link: "/solutions/builder/embedded-wallet" },
                {
                  text: "Google Setup",
                  link: "/solutions/builder/embedded-wallet/google-configuration"
                },
                {
                  text: "Apple Setup",
                  link: "/solutions/builder/embedded-wallet/apple-configuration"
                },
                {
                  text: "PlayFab Setup",
                  link: "/solutions/builder/embedded-wallet/playfab-configuration"
                }
              ]
            },
            {
              text: "Examples",
              collapsed: true,
              items: [
                {
                  text: "Authentication",
                  link: "/solutions/wallets/embedded-wallet/examples/authentication"
                },
                {
                  text: "Use Wallets",
                  link: "/solutions/wallets/embedded-wallet/examples/use-wallets"
                },
                {
                  text: "Account Federation",
                  link: "/solutions/wallets/embedded-wallet/examples/account-federation"
                },
                {
                  text: "Manage Sessions",
                  link: "/solutions/wallets/embedded-wallet/examples/manage-sessions"
                },
                { text: "On-ramp", link: "/solutions/wallets/embedded-wallet/examples/on-ramp" },
                {
                  text: "Fee Options",
                  link: "/solutions/wallets/embedded-wallet/examples/fee-options"
                },
                {
                  text: "Verification",
                  link: "/solutions/wallets/embedded-wallet/examples/verification"
                },
                {
                  text: "Transaction Receipts",
                  link: "/solutions/wallets/embedded-wallet/examples/transaction-receipts"
                }
              ]
            },
            {
              text: "Architecture",
              collapsed: true,
              items: [
                {
                  text: "Overview",
                  link: "/solutions/wallets/embedded-wallet/architecture/overview"
                },
                {
                  text: "Action Payloads",
                  link: "/solutions/wallets/embedded-wallet/architecture/action-payloads"
                },
                {
                  text: "Response Payloads",
                  link: "/solutions/wallets/embedded-wallet/architecture/response-payloads"
                },
                {
                  text: "Trust Contract Recovery Flow",
                  link: "/solutions/wallets/embedded-wallet/architecture/trust-contract-recovery-flow"
                },
                {
                  text: "Enclave Verification",
                  link: "/solutions/wallets/embedded-wallet/architecture/enclave-verification"
                },
                {
                  text: "Intents",
                  link: "/solutions/wallets/embedded-wallet/architecture/intents"
                }
              ]
            },
            {
              text: "Migrating to Sequence",
              link: "/solutions/wallets/embedded-wallet/migration"
            },
            { text: "FAQ", link: "/solutions/wallets/embedded-wallet/faq" }
          ]
        },
        {
          text: "Sequence Kit",
          collapsed: false,
          items: [
            { text: "Overview", link: "/solutions/wallets/sequence-kit/overview" },
            { text: "Quickstart", link: "/solutions/wallets/sequence-kit/getting-started" },
            { text: "Configuration", link: "/solutions/wallets/sequence-kit/configuration" },
            { text: "On-ramp", link: "/solutions/wallets/sequence-kit/on-ramp" },
            { text: "Checkout", link: "/solutions/wallets/sequence-kit/checkout" },
            {
              text: "Custom Connectors",
              link: "/solutions/wallets/sequence-kit/custom-connectors"
            }
          ]
        },
        {
          text: "Wallet Linking",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/link-wallets/overview" },
            {
              text: "Integration Guide",
              link: "/solutions/wallets/link-wallets/integration-guide"
            }
          ]
        },
        {
          text: "Universal Wallet",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/wallets/universal-wallet/overview" },
            { text: "Quickstart", link: "/solutions/wallets/universal-wallet/quickstart" },
            {
              text: "Examples",
              collapsed: true,
              items: [
                {
                  text: "Connect Wallet",
                  link: "/solutions/wallets/universal-wallet/examples/connect-wallet"
                },
                {
                  text: "Authenticate Users with Message Signature",
                  link: "/solutions/wallets/universal-wallet/examples/auth-address"
                },
                {
                  text: "Signing & Verifying Messages",
                  link: "/solutions/wallets/universal-wallet/examples/sign-message"
                },
                {
                  text: "No-wallet confirmation signatures",
                  link: "/solutions/wallets/universal-wallet/examples/session-keys"
                },
                {
                  text: "Sending Transactions",
                  link: "/solutions/wallets/universal-wallet/examples/send-transaction"
                },
                {
                  text: "Sending ERC-20 Tokens",
                  link: "/solutions/wallets/universal-wallet/examples/send-erc20"
                },
                {
                  text: "Sending ERC-721 (NFT) Tokens",
                  link: "/solutions/wallets/universal-wallet/examples/send-erc721"
                },
                {
                  text: "Sending ERC-1155 (Collectible) Tokens",
                  link: "/solutions/wallets/universal-wallet/examples/send-erc1155"
                },
                {
                  text: "Sending a Batch of Transactions",
                  link: "/solutions/wallets/universal-wallet/examples/send-batch-transactions"
                },
                {
                  text: "Building Backends with Sequence",
                  link: "/solutions/wallets/universal-wallet/examples/building-backends"
                }
              ]
            },
            //  {text: 'Sequence Kit', link: '/solutions/wallets/universal-wallet/sequence-kit'},
            { text: "Supported Platforms", link: "/solutions/wallets/universal-wallet/platforms" },
            { text: "Fiat On-Ramps", link: "/solutions/wallets/universal-wallet/fiat-on-ramps" },
            { text: "Key Management", link: "/solutions/wallets/universal-wallet/key-management" }
          ]
        }
      ]
    },
    {
      text: "Monetize",
      // collapsed: true,
      items: [
        { text: "Overview", link: "/solutions/monetization-overview" },
        {
          text: "Marketplaces",
          collapsed: true,
          items: [
            {
              text: "White-label Marketplace",
              link: "/solutions/marketplaces/white-label-marketplace"
            },
            {
              text: "Build your Custom Marketplace",
              collapsed: true,
              items: [
                { text: "Overview", link: "/solutions/marketplaces/orderbook/overview" },
                { text: "Quickstart", link: "/solutions/marketplaces/orderbook/quickstart" }
              ]
            }
          ]
        },
        {
          text: "Fiat On-ramps",
          link: "/solutions/payments/onramps/fiat-on-ramps",
          match: "/solutions/payments/onramps/fiat-on-ramps"
        }
      ]
    },
    {
      text: "Power",
      items: [
        { text: "Overview", link: "/solutions/power-overview" },
        {
          text: "Deployable Contracts",
          collapsed: true,
          items: [
            { text: "Overview", link: "/solutions/builder/contracts" },
            {
              text: "Deploy a Collectible Contract",
              link: "/solutions/collectibles/contracts/deploy-an-item-collection"
            },
            // {text: 'Mint In-Game Items and Achievements (ERC1155)', link: '/solutions/collectibles/contracts/900-mint-items-from-ERC1155'},
            // {text: 'Mint Digital Collectibles (ERC721)', link: '/solutions/collectibles/contracts/902-mint-collectibles-from-ERC721'},
            {
              text: "Deploy an In-Game Currency (ERC20)",
              link: "/solutions/collectibles/contracts/deploy-ERC20-currency"
            }
          ]
        },
        {
          text: "Manage Collections",
          link: "/solutions/builder/collections"
        },
        {
          text: "Querying Blockchain Data",
          collapsed: false,
          items: [
            { text: "Indexer", link: "/solutions/builder/indexer" },
            { text: "Webhooks", link: "/solutions/builder/webhooks" }
          ]
        },
        {
          text: "Transaction Manager",
          link: "/solutions/transaction-manager/overview"
        },
        {
          text: "Analytics",
          link: "/solutions/builder/analytics"
        },
        {
          text: "Gas Sponsorship",
          link: "/solutions/builder/gas-tank"
        },
        {
          text: "Node Gateway",
          link: "/solutions/builder/node-gateway"
        }
        // { text: 'Minter', link: '/solutions/minter' }
      ]
    },
    // {
    //   text: 'Sequence Builder',
    //   link: '/solutions/builder/overview',
    //   match: '/solutions/builder/overview',
    // },
    {
      text: "Technical References",
      items: [
        { text: "Chain Support", link: "/solutions/technical-references/chain-support" },
        // { text: 'EIP5189 vs. 4337', link: '/solutions/technical-references/5189-4337' },
        {
          text: "Why Smart Contract Wallets?",
          link: "/solutions/technical-references/wallet-contracts/why"
        },
        {
          text: "Contract Internals",
          collapsed: true,
          items: [
            { text: "Deployment", link: "/solutions/technical-references/internals/deployment" },
            {
              text: "Sequence v1",
              collapsed: true,
              items: [
                { text: "Deploy", link: "/solutions/technical-references/internals/v1/deploy" },
                {
                  text: "Wallet Factory",
                  link: "/solutions/technical-references/internals/v1/wallet-factory"
                },
                {
                  text: "Wallet Configuration",
                  link: "/solutions/technical-references/internals/v1/wallet-configuration"
                },
                // {text: 'Transaction Encoding', link: '/solutions/technical-references/internals/v1/07-transaction-encoding'},
                {
                  text: "Signature Encoding",
                  link: "/solutions/technical-references/internals/v1/signature-encoding"
                },
                {
                  text: "Wallet Context",
                  link: "/solutions/technical-references/internals/v1/wallet-context"
                }
              ]
            },
            {
              text: "Sequence v2",
              collapsed: true,
              items: [
                { text: "Deploy", link: "/solutions/technical-references/internals/v2/deploy" },
                {
                  text: "Wallet Configuration",
                  link: "/solutions/technical-references/internals/v2/configuration"
                }
              ]
            },
            {
              text: "Contract Audits",
              link: "/solutions/technical-references/internals/contract-audits"
            }
          ]
        }
      ]
    }
  ],
  "/guides": [
    {
      text: "Guides",
      collapsed: false,
      items: [
        {
          text: "Build a Game with WebGL",
          collapsed: true,
          link: "/guides/webgl-guide"
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
          text: "Build a Unity Game",
          collapsed: true,
          link: "/guides/unity-guide"
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
          text: "Build a Collectible Minting Service",
          collapsed: true,
          link: "/guides/mint-collectibles-serverless"
          // items: [
          //   { text: 'Introduction', link: '/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api', match: '/guides/mint-collectibles-serverless#mint-collectibles-using-a-gasless-serverless-transactions-api'},
          //   { text: 'Setup Cloudflare Environment', link: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test', match: '/guides/mint-collectibles-serverless#1-setup-cloudflare-environment-with-wrangler-cli-and-deploy-a-test'},
          //   { text: 'Deploy, Sponsor & Update Metadata For an ERC1155', link: '/guides/mint-collectibles-serverless#2-deploy-sponsor-and-update-metadata-for-an-erc1155-contract-with-sequence-builder'},
          //   { text: 'Use EthAuthProof to Prevent EOA DDoS', link: '/guides/mint-collectibles-serverless#3-use-ethauthproof-to-prevent-eoa-ddos' },
          //   { text: 'Mint a Collectible To Wallet', link: '/guides/mint-collectibles-serverless#4-mint-a-collectible-to-wallet' },
          // ]
        },
        {
          text: "Manage Collection Metadata",
          collapsed: true,
          link: "/guides/metadata-guide"
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
          text: "Build a Treasure Chest with AI Minting",
          collapsed: true,
          link: "/guides/treasure-chest-guide"
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
          text: "Build a Backend Transaction Service",
          collapsed: true,
          link: "/guides/building-relaying-server"
        },
        {
          text: "Leverage Sequence Analytics API in Dune",
          collapsed: true,
          link: "/guides/analytics-guide"
        },
        {
          text: "Build an Embedded Wallet Linking Service",
          collapsed: true,
          link: "/solutions/wallets/link-wallets/integration-guide"
        },
        {
          text: "Build a Custom Marketplace",
          collapsed: true,
          link: "/guides/custom-marketplace"
          // items: [
          //   { text: 'Minting', link: '/guides/custom-marketplace#1-minting' },
          //   { text: 'Wallet Authentication', link: '/guides/custom-marketplace#2-wallet-authentication' },
          //   { text: 'Blockchain Queries', link: '/guides/custom-marketplace#3-blockchain-queries' },
          //   { text: 'Multi-wallet types', link: '/guides/custom-marketplace#4-multi-wallet-types' },
          //   { text: 'Request Creation', link: '/guides/custom-marketplace#5-request-creation' },
          //   { text: 'Order Accepting', link: '/guides/custom-marketplace#6-order-accepting' },
          //   { text: '(Optional) Enable Embedded Wallet', link: '/guides/custom-marketplace#7-optional-integrate-embedded-wallet-into-sequence-kit' },
          // ]
        }
      ]
    },
    // {
    //   text: 'Integrate token rewards into your Discord server',
    //   link: '/guides/discord'
    // },
    {
      text: "Templates",
      link: "/guides/template-overview"
      // items: [
      //   { text: 'Embedded Wallet Demo', link: '/guides/templates/template-embedded-wallet' },
      //   { text: 'Build a Backend Transaction Manager', link: '/guides/templates/building-relaying-server' }
      //   // { text: 'Marketplace API Demo', link: '/guides/templates/template-marketplace-api' }
      // ]
    }
  ],
  // SDKs
  "/sdk": [
    {
      text: "Game Engine",
      // collapsed: true,
      items: [
        {
          text: "Unity",
          collapsed: true,
          match: "/sdk/unity/overview",
          items: [
            { text: "Overview", link: "/sdk/unity/overview" },
            { text: "Installation", link: "/sdk/unity/installation" },
            { text: "Setup", link: "/sdk/unity/setup" },
            {
              text: "Authentication",
              collapsed: false,
              items: [
                { text: "Introduction", link: "/sdk/unity/authentication/intro" },
                { text: "Email + OTP", link: "/sdk/unity/authentication/email" },
                { text: "OIDC - Social Sign In", link: "/sdk/unity/authentication/oidc" },
                { text: "PlayFab", link: "/sdk/unity/authentication/playfab" },
                { text: "Guest", link: "/sdk/unity/authentication/guest" },
                { text: "FederatedAccounts", link: "/sdk/unity/authentication/federated-accounts" }
              ]
            },
            { text: "Write to blockchain", link: "/sdk/unity/write-to-blockchain" },
            { text: "Read from Blockchain", link: "/sdk/unity/read-from-blockchain" },
            { text: "Sign Messages", link: "/sdk/unity/sign-messages" },
            { text: "Recovering Sessions", link: "/sdk/unity/recovering-sessions" },
            { text: "On-Ramp Funds via Credit Card", link: "/sdk/unity/onboard-user-funds" },
            { text: "Marketplace", link: "/sdk/unity/marketplace" },
            {
              text: "Connect with External Wallets",
              link: "/sdk/unity/connecting-external-wallets"
            },
            { text: "Upgrading from v2 to v3", link: "/sdk/unity/v2-to-v3-upgrade-guide" },
            { text: "Wallet UI", link: "/sdk/unity/wallet-ui" },
            { text: "Deploy Contracts", link: "/sdk/unity/deploy-contracts" },
            {
              text: "Advanced Blockchain Interactions",
              collapsed: true,
              items: [
                { text: "Introduction", link: "/sdk/unity/Advanced/introduction" },
                { text: "Wallets", link: "/sdk/unity/Advanced/wallets" },
                { text: "Clients", link: "/sdk/unity/Advanced/clients" },
                { text: "Transfers", link: "/sdk/unity/Advanced/transfers" },
                { text: "Contracts", link: "/sdk/unity/Advanced/contracts" },
                { text: "Tokens", link: "/sdk/unity/Advanced/tokens" }
              ]
            }
          ]
        },
        {
          text: "Unreal",
          collapsed: true,
          match: "/sdk/unreal/overview",
          items: [
            { text: "Overview", link: "/sdk/unreal/overview" },
            { text: "Installation", link: "/sdk/unreal/installation" },
            { text: "Upgrading", link: "/sdk/unreal/upgrading" },
            { text: "Setup", link: "/sdk/unreal/setup" },
            { text: "Authentication", link: "/sdk/unreal/authentication" },
            { text: "Sequence Wallet", link: "/sdk/unreal/api" },
            { text: "Managing Session", link: "/sdk/unreal/managing-session" },
            { text: "Read from Blockchain", link: "/sdk/unreal/read-from-blockchain" },
            { text: "Write to Blockchain", link: "/sdk/unreal/write-to-blockchain" },
            { text: "On-Ramp Funds via Credit Card", link: "/sdk/unreal/onboard-user-funds" },
            { text: "Advanced Blockchain Intereactions", link: "/sdk/unreal/advanced" },
            { text: "Packaging", link: "/sdk/unreal/packaging" }
          ]
        }
      ]
    },
    {
      text: "Mobile",
      items: [
        // { text: 'Android', link: '/sdk/android' },
        // { text: 'iOS', link: '/sdk/iOS' },
        { text: "React Native", link: "/sdk/mobile" }
      ]
    },
    {
      text: "Web3",
      items: [
        {
          text: "TypeScript",
          collapsed: true,
          items: [
            { text: "Overview", link: "/sdk/typescript/guides/overview" },
            { text: "Connect Wallet", link: "/sdk/typescript/guides/connect-wallet" },
            {
              text: "Authenticate Users with Message Signature",
              link: "/sdk/typescript/guides/auth-address"
            },
            { text: "Signing & Verifying Messages", link: "/sdk/typescript/guides/sign-message" },
            {
              text: "No-wallet confirmation signatures",
              link: "/sdk/typescript/guides/session-keys"
            },
            { text: "Sending Transactions", link: "/sdk/typescript/guides/send-transaction" },
            { text: "Sending ERC-20 Tokens", link: "/sdk/typescript/guides/send-erc20" },
            { text: "Sending ERC-721 (NFT) Tokens", link: "/sdk/typescript/guides/send-erc721" },
            {
              text: "Sending ERC-1155 (Collectible) Tokens",
              link: "/sdk/typescript/guides/send-erc1155"
            },
            {
              text: "Sending a Batch of Transactions",
              link: "/sdk/typescript/guides/send-batch-transactions"
            },
            {
              text: "Building Backends with Sequence",
              link: "/sdk/typescript/guides/building-backends"
            },
            {
              text: "Wallet Connectors",
              collapsed: true,
              items: [
                { text: "Overview", link: "/sdk/typescript/connectors/overview" },
                { text: "Wagmi", link: "/sdk/typescript/connectors/wagmi" },
                { text: "RainbowKit", link: "/sdk/typescript/connectors/rainbow-kit" },
                { text: "Web3 Onboard", link: "/sdk/typescript/connectors/web3-onboard" },
                { text: "Web3 React V6", link: "/sdk/typescript/connectors/web3-react-v6" },
                { text: "Web3Modal", link: "/sdk/typescript/connectors/web3modal" },
                { text: "FAQ", link: "/sdk/typescript/connectors/FAQ" }
              ]
            }
          ]
        },
        {
          text: "Go",
          link: "/sdk/go/overview",
          items: [{ text: "Overview", link: "/sdk/go/overview" }]
        }
      ]
    },
    {
      text: "Common Questions",
      collapsed: true,
      items: [
        {
          text: "How do I do signature validation?",
          link: "/solutions/wallets/universal-wallet/examples/auth-address"
        }
        // ...
      ]
    }
  ],
  // apis
  "/api": [
    {
      text: "Transactions",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/transactions/overview" },
        { text: "Installation", link: "/api/transactions/installation" },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Fetch Fee Options", link: "/api/transactions/examples/fetch-fee-options" },
            { text: "Send Transactions", link: "/api/transactions/examples/send-transactions" },
            {
              text: "Fetch Transaction Receipts",
              link: "/api/transactions/examples/fetch-transaction-receipts"
            }
          ]
        }
      ]
    },
    {
      text: "Indexer",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/indexer/overview" },
        { text: "Installation", link: "/api/indexer/installation" },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Fetch Tokens", link: "/api/indexer/examples/fetch-tokens" },
            { text: "Transaction History", link: "/api/indexer/examples/transaction-history" },
            { text: "Unique Tokens", link: "/api/indexer/examples/unique-tokens" },
            {
              text: "Transaction History Token Contract",
              link: "/api/indexer/examples/transation-history-token-contract"
            },
            {
              text: "Native Network Balance",
              link: "/api/indexer/examples/native-network-balance"
            },
            { text: "Metadata Tips", link: "/api/indexer/metadata-tips" },
            { text: "Webhooks", link: "/api/indexer/examples/webhook-listener" },
            { text: "Subscriptions", link: "/api/indexer/examples/subscriptions" }
          ]
        }
      ]
    },
    {
      text: "Analytics",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/analytics/overview" },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Wallets", link: "/api/analytics/examples/wallets" },
            { text: "Marketplaces", link: "/api/analytics/examples/marketplace" }
          ]
        }
      ]
    },
    {
      text: "Metadata",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/metadata/overview" },
        {
          text: "Examples",
          collapsed: false,
          items: [
            { text: "Token Metadata", link: "/api/metadata/token-metadata" },
            { text: "Contract Metadata", link: "/api/metadata/contract-metadata" },
            { text: "REST API", link: "/api/metadata/rest-api" }
          ]
        }
      ]
    },
    {
      text: "Marketplace",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/marketplace/overview" },
        // { text: 'Schema', link: '/api/marketplace/schema' },
        // { text: 'Marketplace API', link: '/api/marketplace/api' },
        {
          text: "Examples",
          collapsed: false,
          link: "/api/marketplace/examples/orderbook-transactions",
          items: [
            {
              text: "Creating Market Orders & Listings",
              link: "/api/marketplace/examples/orderbook-transactions"
            },
            { text: "Get Top Orders", link: "/api/marketplace/examples/get-top-orders" },
            { text: "Get Orderbook", link: "/api/marketplace/examples/get-orderbook" },
            { text: "Get User Activities", link: "/api/marketplace/examples/get-user-activities" }
          ]
        }
      ]
    },
    {
      text: "Node Gateway",
      collapsed: false,
      items: [{ text: "Overview", link: "/api/node-gateway" }]
    }
  ],
  // Support
  "/support": [
    {
      text: "Support",
      items: [
        { text: "Support", link: "/support" },
        { text: "Changelog", link: "https://0xsequence.canny.io/changelog" },
        { text: "Restricted Regions", link: "/support/restricted-regions" },
        { text: "FAQ", link: "https://support.sequence.xyz" },
        { text: "Token Directory", link: "/support/token-directory" },
        { text: "Discord", link: "https://discord.gg/sequence" },
        { text: "We're hiring!", link: "https://horizon.io/careers" },
        { text: "Contact Us", link: "https://support.sequence.xyz" }
      ]
    },
    {
      text: "Sequence Builder Admin",
      items: [
        { text: "Project Management", link: "/support/builder/project-management" },
        { text: "Project Settings", link: "/support/builder/project-settings" }
      ]
    }
  ]
};

// vocs.config.tsx
var vocs_config_default = defineConfig({
  title: "Sequence",
  projectAccessKey: "TEST ACCESS KEY",
  markdown: {
    remarkPlugins: [
      remarkMath
    ]
  },
  // ogImageUrl: {
  //   '/': '/og-image.png',
  //   '/docs':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  //   '/op-stack':
  //     'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  // },
  iconUrl: { light: "/img/favicon.ico", dark: "/img/favicon.ico" },
  logoUrl: {
    light: "/img/sequence-composite-light.svg",
    dark: "/img/sequence-composite-dark.svg"
  },
  // rootDir: '.',
  basePath: "/",
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
    colorScheme: "dark",
    variables: {
      fontFamily: {
        default: "Inter"
        // mono: 'Roboto Mono'
      },
      color: {
        background: {
          light: "#f0f0f0",
          dark: "#111111"
        }
        // background5: {
        //   light: '#dddddd',
        //   dark: '#111111',
        // }
        // backgroundDark: {
        //   light: '#dddddd',
        //   dark: '#151515'
        // }
      }
    }
  }
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcbiAgcHJvamVjdEFjY2Vzc0tleTogXCJURVNUIEFDQ0VTUyBLRVlcIixcblxuICBtYXJrZG93bjogeyBcbiAgICByZW1hcmtQbHVnaW5zOiBbIFxuICAgICAgcmVtYXJrTWF0aCBcbiAgICBdIFxuICB9LCBcblxuXG5cbiAgLy8gb2dJbWFnZVVybDoge1xuICAvLyAgICcvJzogJy9vZy1pbWFnZS5wbmcnLFxuICAvLyAgICcvZG9jcyc6XG4gIC8vICAgICAnaHR0cHM6Ly92b2NzLmRldi9hcGkvb2c/bG9nbz0lbG9nbyZ0aXRsZT0ldGl0bGUmZGVzY3JpcHRpb249JWRlc2NyaXB0aW9uJyxcbiAgLy8gICAnL29wLXN0YWNrJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyB9LFxuICBpY29uVXJsOiB7IGxpZ2h0OiAnL2ltZy9mYXZpY29uLmljbycsIGRhcms6ICcvaW1nL2Zhdmljb24uaWNvJyB9LFxuICBsb2dvVXJsOiB7XG4gICAgbGlnaHQ6ICcvaW1nL3NlcXVlbmNlLWNvbXBvc2l0ZS1saWdodC5zdmcnLFxuICAgIGRhcms6ICcvaW1nL3NlcXVlbmNlLWNvbXBvc2l0ZS1kYXJrLnN2ZycsXG4gIH0sXG5cbiAgLy8gcm9vdERpcjogJy4nLFxuICBiYXNlUGF0aDogJy8nLFxuXG4gIHRvcE5hdixcbiAgc2lkZWJhcixcblxuICAvLyBOT1RFOiB0YWtpbmcgdXAgdmFsdWFibGUgc3BhY2UsIHdpbGwgbW92ZSB0aG9zZVxuICAvLyB0byBmb290ZXIgYW5kIG90aGVyIHNlY3Rpb25zXG4gIC8vIHNvY2lhbHM6IFtcbiAgLy8gICB7XG4gIC8vICAgICBpY29uOiAnZ2l0aHViJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vMHhzZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBpY29uOiAnZGlzY29yZCcsXG4gIC8vICAgICBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3NlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICd4JyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL3guY29tLzB4c2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vIF0sXG5cbiAgdGhlbWU6IHtcbiAgICAvLyBhY2NlbnRDb2xvcjoge1xuICAgIC8vICAgbGlnaHQ6ICcjNDQyQ0E4JyxcbiAgICAvLyAgIGRhcms6ICcjOTlBREVEJyxcbiAgICAvLyB9LFxuICAgIGNvbG9yU2NoZW1lOiAnZGFyaycsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBmb250RmFtaWx5OiB7XG4gICAgICAgIGRlZmF1bHQ6ICdJbnRlcicsXG4gICAgICAgIC8vIG1vbm86ICdSb2JvdG8gTW9ubydcbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgbGlnaHQ6ICcjZjBmMGYwJyxcbiAgICAgICAgICBkYXJrOiAnIzExMTExMScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJhY2tncm91bmQ1OiB7XG4gICAgICAgIC8vICAgbGlnaHQ6ICcjZGRkZGRkJyxcbiAgICAgICAgLy8gICBkYXJrOiAnIzExMTExMScsXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBiYWNrZ3JvdW5kRGFyazoge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxNTE1MTUnXG4gICAgICAgIC8vIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9qYW1lc2xhd3Rvbi9Db2RpbmcvZG9jcy12MlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2phbWVzbGF3dG9uL0NvZGluZy9kb2NzLXYyL25hdi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvamFtZXNsYXd0b24vQ29kaW5nL2RvY3MtdjIvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBTaWRlYmFyLCBUb3BOYXYgfSBmcm9tICd2b2NzJ1xuXG5leHBvcnQgY29uc3QgdG9wTmF2ID0gW1xuICB7XG4gICAgdGV4dDogJ1NvbHV0aW9ucycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXInLFxuICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICAgICAgbWF0Y2g6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ09uYm9hcmQnLFxuICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JyxcbiAgICAgICAgbWF0Y2g6ICcvc29sdXRpb25zL3dhbGxldHMvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ01vbmV0aXplJyxcbiAgICAgICAgbGluazogJy9zb2x1dGlvbnMvbW9uZXRpemF0aW9uLW92ZXJ2aWV3JyxcbiAgICAgICAgbWF0Y2g6ICcvc29sdXRpb25zL21vbmV0aXphdGlvbi1vdmVydmlldycsXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnUG93ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy9wb3dlci1vdmVydmlldycsIG1hdGNoOiAnL3NvbHV0aW9ucy9wb3dlci1vdmVydmlldycgfSxcbiAgICAgIC8vIHsgdGV4dDogJ0NoYWluIFN1cHBvcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9jaGFpbi1zdXBwb3J0JywgbWF0Y2g6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdSZXNvdXJjZXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdHdWlkZXMnLCBsaW5rOiAnL2d1aWRlcy9ndWlkZS1vdmVydmlldycsIG1hdGNoOiAnL2d1aWRlcy9ndWlkZS1vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1RlbXBsYXRlcycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JywgbWF0Y2g6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnU0RLcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1VuaXR5JywgbGluazogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdVbnJlYWwnLCBsaW5rOiAnL3Nkay91bnJlYWwvb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvdW5yZWFsL292ZXJ2aWV3JyB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnVHlwZXNjcmlwdCcsXG4gICAgICAgIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL292ZXJ2aWV3JyxcbiAgICAgICAgbWF0Y2g6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdHbycsIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL2dvL292ZXJ2aWV3JyB9LFxuICAgICAgLy8geyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnLCBtYXRjaDogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAgIHsgdGV4dDogJ01vYmlsZScsIGxpbms6ICcvc2RrL21vYmlsZScsIG1hdGNoOiAnL3Nkay9tb2JpbGUnIH0sXG4gICAgICAvLyB7IHRleHQ6ICdpT1MnLCBsaW5rOiAnL3Nkay9pT1MnLCBtYXRjaDogJy9zZGsvaU9TJyB9XG4gICAgXSxcbiAgfSxcblxuICAvLyByZXBsYWNlIGxpbmtzLlxuICB7XG4gICAgdGV4dDogJ0FQSXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUcmFuc2FjdGlvbnMgQVBJJyxcbiAgICAgICAgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL292ZXJ2aWV3JyxcbiAgICAgICAgbWF0Y2g6ICcvYXBpL3RyYW5zYWN0aW9ucy9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnQW5hbHl0aWNzIEFQSScsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldycsIG1hdGNoOiAnL2FwaS9hbmFseXRpY3Mvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdJbmRleGVyIEFQSScsIGxpbms6ICcvYXBpL2luZGV4ZXIvb3ZlcnZpZXcnLCBtYXRjaDogJy9hcGkvaW5kZXhlci9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ01ldGFkYXRhIEFQSScsIGxpbms6ICcvYXBpL21ldGFkYXRhL292ZXJ2aWV3JywgbWF0Y2g6ICcvYXBpL21ldGFkYXRhL292ZXJ2aWV3JyB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJJyxcbiAgICAgICAgbGluazogJy9hcGkvbWFya2V0cGxhY2Uvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9hcGkvbWFya2V0cGxhY2Uvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ05vZGUgR2F0ZXdheScsIGxpbms6ICcvYXBpL25vZGUtZ2F0ZXdheScsIG1hdGNoOiAnL2FwaS9ub2RlLWdhdGV3YXknIH0sXG4gICAgXSxcbiAgfSxcblxuICB7XG4gICAgdGV4dDogJ1N1cHBvcnQnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdTdXBwb3J0JywgbGluazogJy9zdXBwb3J0JyB9LFxuICAgICAgeyB0ZXh0OiAnQ2hhbmdlbG9nJywgbGluazogJ2h0dHBzOi8vMHhzZXF1ZW5jZS5jYW5ueS5pby9jaGFuZ2Vsb2cnIH0sXG4gICAgICB7IHRleHQ6ICdSZXN0cmljdGVkIFJlZ2lvbnMnLCBsaW5rOiAnL3N1cHBvcnQvcmVzdHJpY3RlZC1yZWdpb25zJyB9LFxuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICB7IHRleHQ6IFwiV2UncmUgaGlyaW5nIVwiLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgXSxcbiAgfSxcbl0gYXMgVG9wTmF2XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyID0ge1xuICAvLyBPdmVydmlld1xuICAnL3NvbHV0aW9ucyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnR2V0dGluZyBTdGFydGVkJyxcbiAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZ2V0dGluZy1zdGFydGVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdPbmJvYXJkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFbWJlZGRlZCBXYWxsZXQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvcXVpY2tzdGFydCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NldHVwJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnR29vZ2xlIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L2dvb2dsZS1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBcHBsZSBTZXR1cCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldC9hcHBsZS1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdQbGF5RmFiIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L3BsYXlmYWItY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvYXV0aGVudGljYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1VzZSBXYWxsZXRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL3VzZS13YWxsZXRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBY2NvdW50IEZlZGVyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvYWNjb3VudC1mZWRlcmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgU2Vzc2lvbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvbWFuYWdlLXNlc3Npb25zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ09uLXJhbXAnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9vbi1yYW1wJyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdGZWUgT3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9mZWUtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL3ZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVHJhbnNhY3Rpb24gUmVjZWlwdHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvdHJhbnNhY3Rpb24tcmVjZWlwdHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXJjaGl0ZWN0dXJlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdPdmVydmlldycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvb3ZlcnZpZXcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0FjdGlvbiBQYXlsb2FkcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvYWN0aW9uLXBheWxvYWRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdSZXNwb25zZSBQYXlsb2FkcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvcmVzcG9uc2UtcGF5bG9hZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1RydXN0IENvbnRyYWN0IFJlY292ZXJ5IEZsb3cnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL3RydXN0LWNvbnRyYWN0LXJlY292ZXJ5LWZsb3cnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0VuY2xhdmUgVmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9lbmNsYXZlLXZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnSW50ZW50cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvaW50ZW50cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdNaWdyYXRpbmcgdG8gU2VxdWVuY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9taWdyYXRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2ZhcScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1NlcXVlbmNlIEtpdCcsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb25maWd1cmF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09uLXJhbXAnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9vbi1yYW1wJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ2hlY2tvdXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9jaGVja291dCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0N1c3RvbSBDb25uZWN0b3JzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY3VzdG9tLWNvbm5lY3RvcnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2FsbGV0IExpbmtpbmcnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2xpbmstd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0ludGVncmF0aW9uIEd1aWRlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9saW5rLXdhbGxldHMvaW50ZWdyYXRpb24tZ3VpZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1VuaXZlcnNhbCBXYWxsZXQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3F1aWNrc3RhcnQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2Nvbm5lY3Qtd2FsbGV0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMgd2l0aCBNZXNzYWdlIFNpZ25hdHVyZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYXV0aC1hZGRyZXNzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTaWduaW5nICYgVmVyaWZ5aW5nIE1lc3NhZ2VzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zaWduLW1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2Vzc2lvbi1rZXlzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC10cmFuc2FjdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtMjAgVG9rZW5zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzIwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzcyMScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1lcmMxMTU1JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIGEgQmF0Y2ggb2YgVHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWJhdGNoLXRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYnVpbGRpbmctYmFja2VuZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gIHt0ZXh0OiAnU2VxdWVuY2UgS2l0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3NlcXVlbmNlLWtpdCd9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU3VwcG9ydGVkIFBsYXRmb3JtcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9wbGF0Zm9ybXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdGaWF0IE9uLVJhbXBzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2ZpYXQtb24tcmFtcHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdLZXkgTWFuYWdlbWVudCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9rZXktbWFuYWdlbWVudCcgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNb25ldGl6ZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL21vbmV0aXphdGlvbi1vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnV2hpdGUtbGFiZWwgTWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvd2hpdGUtbGFiZWwtbWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIHlvdXIgQ3VzdG9tIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9vdmVydmlldycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9xdWlja3N0YXJ0JyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0ZpYXQgT24tcmFtcHMnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3BheW1lbnRzL29ucmFtcHMvZmlhdC1vbi1yYW1wcycsXG4gICAgICAgICAgbWF0Y2g6ICcvc29sdXRpb25zL3BheW1lbnRzL29ucmFtcHMvZmlhdC1vbi1yYW1wcycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1Bvd2VyJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRGVwbG95YWJsZSBDb250cmFjdHMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcGxveSBhIENvbGxlY3RpYmxlIENvbnRyYWN0JyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktYW4taXRlbS1jb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgSW4tR2FtZSBJdGVtcyBhbmQgQWNoaWV2ZW1lbnRzIChFUkMxMTU1KScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAwLW1pbnQtaXRlbXMtZnJvbS1FUkMxMTU1J30sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgRGlnaXRhbCBDb2xsZWN0aWJsZXMgKEVSQzcyMSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMi1taW50LWNvbGxlY3RpYmxlcy1mcm9tLUVSQzcyMSd9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRGVwbG95IGFuIEluLUdhbWUgQ3VycmVuY3kgKEVSQzIwKScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LUVSQzIwLWN1cnJlbmN5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbnMnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29sbGVjdGlvbnMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1F1ZXJ5aW5nIEJsb2NrY2hhaW4gRGF0YScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW5kZXhlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvaW5kZXhlcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci93ZWJob29rcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIE1hbmFnZXInLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RyYW5zYWN0aW9uLW1hbmFnZXIvb3ZlcnZpZXcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0FuYWx5dGljcycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9hbmFseXRpY3MnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0dhcyBTcG9uc29yc2hpcCcsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nYXMtdGFuaycsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvbm9kZS1nYXRld2F5JyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWludGVyJywgbGluazogJy9zb2x1dGlvbnMvbWludGVyJyB9XG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXInLFxuICAgIC8vICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gICBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsIFJlZmVyZW5jZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ0VJUDUxODkgdnMuIDQzMzcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy81MTg5LTQzMzcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2h5IFNtYXJ0IENvbnRyYWN0IFdhbGxldHM/JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzL3doeScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQ29udHJhY3QgSW50ZXJuYWxzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0RlcGxveW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvZGVwbG95bWVudCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NlcXVlbmNlIHYxJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RlcGxveScsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS9kZXBsb3knIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBGYWN0b3J5JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtZmFjdG9yeScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL3dhbGxldC1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIHt0ZXh0OiAnVHJhbnNhY3Rpb24gRW5jb2RpbmcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvMDctdHJhbnNhY3Rpb24tZW5jb2RpbmcnfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbmF0dXJlIEVuY29kaW5nJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS9zaWduYXR1cmUtZW5jb2RpbmcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBDb250ZXh0JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtY29udGV4dCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZXF1ZW5jZSB2MicsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3knLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjIvZGVwbG95JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjIvY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb250cmFjdCBBdWRpdHMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvY29udHJhY3QtYXVkaXRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcblxuICAnL2d1aWRlcyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR3VpZGVzJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgR2FtZSB3aXRoIFdlYkdMJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUnLFxuICAgICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNhdmlhdG9yLXdlYjMtZ2FtZS13aXRoLXdlYmdsJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnUHJvamVjdCBTZXR1cCBXaXRoIFdlYnBhY2snLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSMxLXByb2plY3Qtc2V0dXAtd2l0aC13ZWJwYWNrJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnSW50ZWdyYXRlIFNlcXVlbmNlIEtpdCBXaXRoIFdhYVMnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSMyLWludGVncmF0ZS1zZXF1ZW5jZS1raXQnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBDb2xsZWN0aWJsZXMgQ29udHJhY3QnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSMzLWRlcGxveS1hLWNvbGxlY3RpYmxlcy1jb250cmFjdCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSBhIFJlbW90ZSBNaW50ZXInLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM0LWRlcGxveS1hLXJlbW90ZS1taW50ZXItLW1pbnQtaW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdMZXZlcmFnZSBJdGVtcyBJbi1nYW1lJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjNS1sZXZlcmFnZS1pdGVtcy1pbi1nYW1lJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQnVybiBJbi1nYW1lIEFjaGlldmVtZW50IFRva2VucycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzYtYnVybi1pbi1nYW1lLWFjaGlldmVtZW50LXRva2VucycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJyhPcHRpb25hbCkgSW50ZWdyYXRlIEVtYmVkZGVkIFdhbGxldCBJbnRvIFNlcXVlbmNlIEtpdCcsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzctb3B0aW9uYWwtaW50ZWdyYXRlLWVtYmVkZGVkLXdhbGxldC1pbnRvLXNlcXVlbmNlLWtpdCcgfSxcbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQnVpbGQgYSBVbml0eSBHYW1lJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUnLFxuICAgICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRyby10by1qZWxseS1mb3Jlc3QnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdCdWlsZCBhIEdhbWUgTG9vcCcsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1aWxkLWEtZ2FtZS1sb29wJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnSW50ZWdyYXRlIEVtYmVkZGVkIFdhbGxldHMnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRlZ3JhdGUtc29jaWFsLXNpZ24taW4tYW5kLXNlcXVlbmNlcy1lbWJlZGRlZC13YWxsZXQtc29sdXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgQ29sbGVjdGlibGVzJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjZGVwbG95LWEtY29sbGVjdGlibGVzLWNvbnRyYWN0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IFJlbW90ZSBNaW50ZXInLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNkZXBsb3ktYS1yZW1vdGUtbWludGVyJ30sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdNaW50aW5nIFRva2VucyB0byBJbnZlbnRvcnknLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNtaW50LWluLWdhbWUtdG9rZW5zLXRvLXRoZS1wbGF5ZXJzLWludmVudG9yeScgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1B1cmNoYXNlIENvbGxlY3RpYmxlcyB3aXRoIEVSQzIwIFRva2VucycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1cm4taW4tZ2FtZS10b2tlbnMtaW4tZXhjaGFuZ2UtZm9yLW90aGVycycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0J1aWxkaW5nIGFuIEluLWdhbWUgU2hvcCcsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1aWxkaW5nLXRoZS1zaG9wLXBhZ2VzLWFuZC1zZXR0aW5nLXRoZS1taW50aW5nLXJlcXVpcmVtZW50cycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0xldmVyYWdlIFB1cmNoYXNlZCBJdGVtcyBJbi1nYW1lJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjbGV2ZXJhZ2UtcHVyY2hhc2VkLWl0ZW1zLWluLWdhbWUnIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgQ29sbGVjdGlibGUgTWludGluZyBTZXJ2aWNlJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcycsXG4gICAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjbWludC1jb2xsZWN0aWJsZXMtdXNpbmctYS1nYXNsZXNzLXNlcnZlcmxlc3MtdHJhbnNhY3Rpb25zLWFwaScsIG1hdGNoOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzI21pbnQtY29sbGVjdGlibGVzLXVzaW5nLWEtZ2FzbGVzcy1zZXJ2ZXJsZXNzLXRyYW5zYWN0aW9ucy1hcGknfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1NldHVwIENsb3VkZmxhcmUgRW52aXJvbm1lbnQnLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzEtc2V0dXAtY2xvdWRmbGFyZS1lbnZpcm9ubWVudC13aXRoLXdyYW5nbGVyLWNsaS1hbmQtZGVwbG95LWEtdGVzdCcsIG1hdGNoOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzEtc2V0dXAtY2xvdWRmbGFyZS1lbnZpcm9ubWVudC13aXRoLXdyYW5nbGVyLWNsaS1hbmQtZGVwbG95LWEtdGVzdCd9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95LCBTcG9uc29yICYgVXBkYXRlIE1ldGFkYXRhIEZvciBhbiBFUkMxMTU1JywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMyLWRlcGxveS1zcG9uc29yLWFuZC11cGRhdGUtbWV0YWRhdGEtZm9yLWFuLWVyYzExNTUtY29udHJhY3Qtd2l0aC1zZXF1ZW5jZS1idWlsZGVyJ30sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdVc2UgRXRoQXV0aFByb29mIHRvIFByZXZlbnQgRU9BIEREb1MnLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzMtdXNlLWV0aGF1dGhwcm9vZi10by1wcmV2ZW50LWVvYS1kZG9zJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTWludCBhIENvbGxlY3RpYmxlIFRvIFdhbGxldCcsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjNC1taW50LWEtY29sbGVjdGlibGUtdG8td2FsbGV0JyB9LFxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbiBNZXRhZGF0YScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnT2J0YWluIGEgU2VjcmV0IEFQSSBLZXknLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSMxLW9idGFpbi1hLXNlY3JldC1hcGkta2V5J30sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdDcmVhdGUgQ29sbGVjdGlvbicsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzItY3JlYXRlLWNvbGxlY3Rpb24tZnJvbS1hLWN1cmwtcmVxdWVzdCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0NyZWF0ZSBUb2tlbicsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzMtY3JlYXRlLXRva2VuLXVzaW5nLXRva2VuaWQnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdDcmVhdGUgQXNzZXQnLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSM0LWNyZWF0ZS1hc3NldC11c2luZy10b2tlbmlkJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnU3RvcmUgYW4gSW1hZ2UnLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSM1LXN0b3JlLWltYWdlLWFzc2V0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnVXBkYXRlIHRvIE5vbi1wcml2YXRlJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNi11cGRhdGUtbm9uLXByaXZhdGUtdG9rZW4nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdQdWJsaXNoIENvbGxlY3Rpb24nLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSM3LXB1Ymxpc2gtY29sbGVjdGlvbi1mcm9tLWEtY3VybC1yZXF1ZXN0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnUmVuZGVyIEFzc2V0IGZyb20gQVBJJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjOC1yZW5kZXItYXNzZXQtZnJvbS1hcGktcHVibGljbHknIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgVHJlYXN1cmUgQ2hlc3Qgd2l0aCBBSSBNaW50aW5nJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvdHJlYXN1cmUtY2hlc3QtZ3VpZGUnLFxuICAgICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyIENvbnNvbGUgU2lnbnVwICYgUHJvamVjdCBDcmVhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMS1idWlsZGVyLWNvbnNvbGUtc2lnbnVwLS1wcm9qZWN0LWNyZWF0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQWNjZXNzIEtleSBNYW5hZ2VtZW50JywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSMyLWFjY2Vzcy1rZXktbWFuYWdlbWVudCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1NlcXVlbmNlIEtpdCBpbnRlZ3JhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMy1zZXF1ZW5jZS1raXQtaW50ZWdyYXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdpZnJhbWUtdG8tRGFwcCBDb21tdW5pY2F0aW9uJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM0LWlmcmFtZS10by1kYXBwLWNvbW11bmljYXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBDb250cmFjdCAmIFNwb25zb3IgR2FzJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM1LWRlcGxveS1hLWNvbnRyYWN0LS1zcG9uc29yLWdhcycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSBhIENsb3VkZmxhcmUgV29ya2VyJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM2LWRlcGxveS1hLWNsb3VkZmxhcmUtd29ya2VyJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnR2VuZXJhdGluZyBBSSBQcm9tcHRzICYgSW1hZ2VzJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM3LWdlbmVyYXRpbmctYWktcHJvbXB0cy0taW1hZ2VzJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnU3RvcmUgTWVkaWEgVG8gU2VxdWVuY2UgTWV0YWRhdGEgU2VydmljZScsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjOC1zdG9yZS1tZWRpYS10by1zZXF1ZW5jZS1tZXRhZGF0YS1zZXJ2aWNlJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnU2VjdXJpbmcgWW91ciBDbG91ZGZsYXJlIFdvcmtlcicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjOS1zZWN1cmluZy15b3VyLWNsb3VkZmxhcmUtd29ya2VyJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnKE9wdGlvbmFsKSBOYWl2ZSBNaW50IFJlc3RyaWN0aW9uIFBlciBXYWxsZXQnLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzEwLW9wdGlvbmFsLW5haXZlLW1pbnQtcmVzdHJpY3Rpb24tcGVyLXdhbGxldCcgfSxcblxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIEJhY2tlbmQgVHJhbnNhY3Rpb24gU2VydmljZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL2J1aWxkaW5nLXJlbGF5aW5nLXNlcnZlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTGV2ZXJhZ2UgU2VxdWVuY2UgQW5hbHl0aWNzIEFQSSBpbiBEdW5lJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvYW5hbHl0aWNzLWd1aWRlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhbiBFbWJlZGRlZCBXYWxsZXQgTGlua2luZyBTZXJ2aWNlJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9saW5rLXdhbGxldHMvaW50ZWdyYXRpb24tZ3VpZGUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgQ3VzdG9tIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTWludGluZycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSMxLW1pbnRpbmcnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdXYWxsZXQgQXV0aGVudGljYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjMi13YWxsZXQtYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdCbG9ja2NoYWluIFF1ZXJpZXMnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjMy1ibG9ja2NoYWluLXF1ZXJpZXMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdNdWx0aS13YWxsZXQgdHlwZXMnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjNC1tdWx0aS13YWxsZXQtdHlwZXMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdSZXF1ZXN0IENyZWF0aW9uJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzUtcmVxdWVzdC1jcmVhdGlvbicgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ09yZGVyIEFjY2VwdGluZycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM2LW9yZGVyLWFjY2VwdGluZycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJyhPcHRpb25hbCkgRW5hYmxlIEVtYmVkZGVkIFdhbGxldCcsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM3LW9wdGlvbmFsLWludGVncmF0ZS1lbWJlZGRlZC13YWxsZXQtaW50by1zZXF1ZW5jZS1raXQnIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdJbnRlZ3JhdGUgdG9rZW4gcmV3YXJkcyBpbnRvIHlvdXIgRGlzY29yZCBzZXJ2ZXInLFxuICAgIC8vICAgbGluazogJy9ndWlkZXMvZGlzY29yZCdcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZW1wbGF0ZXMnLFxuICAgICAgbGluazogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnLFxuICAgICAgLy8gaXRlbXM6IFtcbiAgICAgIC8vICAgeyB0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0IERlbW8nLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtZW1iZWRkZWQtd2FsbGV0JyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdCdWlsZCBhIEJhY2tlbmQgVHJhbnNhY3Rpb24gTWFuYWdlcicsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy9idWlsZGluZy1yZWxheWluZy1zZXJ2ZXInIH1cbiAgICAgIC8vICAgLy8geyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJIERlbW8nLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtbWFya2V0cGxhY2UtYXBpJyB9XG4gICAgICAvLyBdXG4gICAgfSxcbiAgXSxcblxuICAvLyBTREtzXG4gICcvc2RrJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHYW1lIEVuZ2luZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1VuaXR5JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbWF0Y2g6ICcvc2RrL3VuaXR5L292ZXJ2aWV3JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bml0eS9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NldHVwJywgbGluazogJy9zZGsvdW5pdHkvc2V0dXAnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBdXRoZW50aWNhdGlvbicsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vaW50cm8nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRW1haWwgKyBPVFAnLCBsaW5rOiAnL3Nkay91bml0eS9hdXRoZW50aWNhdGlvbi9lbWFpbCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPSURDIC0gU29jaWFsIFNpZ24gSW4nLCBsaW5rOiAnL3Nkay91bml0eS9hdXRoZW50aWNhdGlvbi9vaWRjJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1BsYXlGYWInLCBsaW5rOiAnL3Nkay91bml0eS9hdXRoZW50aWNhdGlvbi9wbGF5ZmFiJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0d1ZXN0JywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vZ3Vlc3QnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRmVkZXJhdGVkQWNjb3VudHMnLCBsaW5rOiAnL3Nkay91bml0eS9hdXRoZW50aWNhdGlvbi9mZWRlcmF0ZWQtYWNjb3VudHMnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV3JpdGUgdG8gYmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5L3dyaXRlLXRvLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWFkIGZyb20gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5L3JlYWQtZnJvbS1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2lnbiBNZXNzYWdlcycsIGxpbms6ICcvc2RrL3VuaXR5L3NpZ24tbWVzc2FnZXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWNvdmVyaW5nIFNlc3Npb25zJywgbGluazogJy9zZGsvdW5pdHkvcmVjb3ZlcmluZy1zZXNzaW9ucycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09uLVJhbXAgRnVuZHMgdmlhIENyZWRpdCBDYXJkJywgbGluazogJy9zZGsvdW5pdHkvb25ib2FyZC11c2VyLWZ1bmRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UnLCBsaW5rOiAnL3Nkay91bml0eS9tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0Nvbm5lY3Qgd2l0aCBFeHRlcm5hbCBXYWxsZXRzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdW5pdHkvY29ubmVjdGluZy1leHRlcm5hbC13YWxsZXRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdVcGdyYWRpbmcgZnJvbSB2MiB0byB2MycsIGxpbms6ICcvc2RrL3VuaXR5L3YyLXRvLXYzLXVwZ3JhZGUtZ3VpZGUnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXYWxsZXQgVUknLCBsaW5rOiAnL3Nkay91bml0eS93YWxsZXQtdWknIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3kgQ29udHJhY3RzJywgbGluazogJy9zZGsvdW5pdHkvZGVwbG95LWNvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0FkdmFuY2VkIEJsb2NrY2hhaW4gSW50ZXJhY3Rpb25zJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2ludHJvZHVjdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXYWxsZXRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvd2FsbGV0cycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDbGllbnRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvY2xpZW50cycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdUcmFuc2ZlcnMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC90cmFuc2ZlcnMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ29udHJhY3RzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvY29udHJhY3RzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1Rva2VucycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3Rva2VucycgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdVbnJlYWwnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBtYXRjaDogJy9zZGsvdW5yZWFsL292ZXJ2aWV3JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bnJlYWwvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvaW5zdGFsbGF0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVXBncmFkaW5nJywgbGluazogJy9zZGsvdW5yZWFsL3VwZ3JhZGluZycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NldHVwJywgbGluazogJy9zZGsvdW5yZWFsL3NldHVwJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQXV0aGVudGljYXRpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZXF1ZW5jZSBXYWxsZXQnLCBsaW5rOiAnL3Nkay91bnJlYWwvYXBpJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWFuYWdpbmcgU2Vzc2lvbicsIGxpbms6ICcvc2RrL3VucmVhbC9tYW5hZ2luZy1zZXNzaW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVhZCBmcm9tIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bnJlYWwvcmVhZC1mcm9tLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXcml0ZSB0byBCbG9ja2NoYWluJywgbGluazogJy9zZGsvdW5yZWFsL3dyaXRlLXRvLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPbi1SYW1wIEZ1bmRzIHZpYSBDcmVkaXQgQ2FyZCcsIGxpbms6ICcvc2RrL3VucmVhbC9vbmJvYXJkLXVzZXItZnVuZHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdBZHZhbmNlZCBCbG9ja2NoYWluIEludGVyZWFjdGlvbnMnLCBsaW5rOiAnL3Nkay91bnJlYWwvYWR2YW5jZWQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdQYWNrYWdpbmcnLCBsaW5rOiAnL3Nkay91bnJlYWwvcGFja2FnaW5nJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01vYmlsZScsXG4gICAgICBpdGVtczogW1xuICAgICAgICAvLyB7IHRleHQ6ICdBbmRyb2lkJywgbGluazogJy9zZGsvYW5kcm9pZCcgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJyB9LFxuICAgICAgICB7IHRleHQ6ICdSZWFjdCBOYXRpdmUnLCBsaW5rOiAnL3Nkay9tb2JpbGUnIH0sXG4gICAgICBdLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0ZXh0OiAnV2ViMycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1R5cGVTY3JpcHQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0Nvbm5lY3QgV2FsbGV0JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvY29ubmVjdC13YWxsZXQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMgd2l0aCBNZXNzYWdlIFNpZ25hdHVyZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL2F1dGgtYWRkcmVzcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2lnbmluZyAmIFZlcmlmeWluZyBNZXNzYWdlcycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NpZ24tbWVzc2FnZScgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3Nlc3Npb24ta2V5cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2VuZGluZyBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLXRyYW5zYWN0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2VuZGluZyBFUkMtMjAgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1lcmMyMCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmRpbmcgRVJDLTcyMSAoTkZUKSBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWVyYzcyMScgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgRVJDLTExNTUgKENvbGxlY3RpYmxlKSBUb2tlbnMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWVyYzExNTUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWJhdGNoLXRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL2J1aWxkaW5nLWJhY2tlbmRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgQ29ubmVjdG9ycycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9vdmVydmlldycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXYWdtaScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy93YWdtaScgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdSYWluYm93S2l0JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3JhaW5ib3cta2l0JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dlYjMgT25ib2FyZCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy93ZWIzLW9uYm9hcmQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2ViMyBSZWFjdCBWNicsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy93ZWIzLXJlYWN0LXY2JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dlYjNNb2RhbCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy93ZWIzbW9kYWwnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL0ZBUScgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdHbycsXG4gICAgICAgICAgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnLFxuICAgICAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay9nby9vdmVydmlldycgfV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NvbW1vbiBRdWVzdGlvbnMnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIb3cgZG8gSSBkbyBzaWduYXR1cmUgdmFsaWRhdGlvbj8nLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9hdXRoLWFkZHJlc3MnLFxuICAgICAgICB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcblxuICAvLyBhcGlzXG4gICcvYXBpJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdUcmFuc2FjdGlvbnMnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvaW5zdGFsbGF0aW9uJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdGZXRjaCBGZWUgT3B0aW9ucycsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9leGFtcGxlcy9mZXRjaC1mZWUtb3B0aW9ucycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmQgVHJhbnNhY3Rpb25zJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL3NlbmQtdHJhbnNhY3Rpb25zJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRmV0Y2ggVHJhbnNhY3Rpb24gUmVjZWlwdHMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvZXhhbXBsZXMvZmV0Y2gtdHJhbnNhY3Rpb24tcmVjZWlwdHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdJbmRleGVyJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2luZGV4ZXIvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvYXBpL2luZGV4ZXIvaW5zdGFsbGF0aW9uJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdGZXRjaCBUb2tlbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL2ZldGNoLXRva2VucycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1RyYW5zYWN0aW9uIEhpc3RvcnknLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3RyYW5zYWN0aW9uLWhpc3RvcnknIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdVbmlxdWUgVG9rZW5zJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy91bmlxdWUtdG9rZW5zJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnVHJhbnNhY3Rpb24gSGlzdG9yeSBUb2tlbiBDb250cmFjdCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdHJhbnNhdGlvbi1oaXN0b3J5LXRva2VuLWNvbnRyYWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdOYXRpdmUgTmV0d29yayBCYWxhbmNlJyxcbiAgICAgICAgICAgICAgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9uYXRpdmUtbmV0d29yay1iYWxhbmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdNZXRhZGF0YSBUaXBzJywgbGluazogJy9hcGkvaW5kZXhlci9tZXRhZGF0YS10aXBzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2ViaG9va3MnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3dlYmhvb2stbGlzdGVuZXInIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTdWJzY3JpcHRpb25zJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9zdWJzY3JpcHRpb25zJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0FuYWx5dGljcycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9hbmFseXRpY3Mvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL2FwaS9hbmFseXRpY3MvZXhhbXBsZXMvd2FsbGV0cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ01hcmtldHBsYWNlcycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9leGFtcGxlcy9tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNZXRhZGF0YScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnVG9rZW4gTWV0YWRhdGEnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS90b2tlbi1tZXRhZGF0YScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0IE1ldGFkYXRhJywgbGluazogJy9hcGkvbWV0YWRhdGEvY29udHJhY3QtbWV0YWRhdGEnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSRVNUIEFQSScsIGxpbms6ICcvYXBpL21ldGFkYXRhL3Jlc3QtYXBpJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01hcmtldHBsYWNlJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL292ZXJ2aWV3JyB9LFxuICAgICAgICAvLyB7IHRleHQ6ICdTY2hlbWEnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9zY2hlbWEnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2FwaScgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9vcmRlcmJvb2stdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ3JlYXRpbmcgTWFya2V0IE9yZGVycyAmIExpc3RpbmdzJyxcbiAgICAgICAgICAgICAgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvb3JkZXJib29rLXRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IFRvcCBPcmRlcnMnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9nZXQtdG9wLW9yZGVycycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0dldCBPcmRlcmJvb2snLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9nZXQtb3JkZXJib29rJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IFVzZXIgQWN0aXZpdGllcycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC11c2VyLWFjdGl2aXRpZXMnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTm9kZSBHYXRld2F5JyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW3sgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbm9kZS1nYXRld2F5JyB9XSxcbiAgICB9LFxuICBdLFxuXG4gIC8vIFN1cHBvcnRcbiAgJy9zdXBwb3J0JzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdTdXBwb3J0JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICAgIHsgdGV4dDogJ0NoYW5nZWxvZycsIGxpbms6ICdodHRwczovLzB4c2VxdWVuY2UuY2FubnkuaW8vY2hhbmdlbG9nJyB9LFxuICAgICAgICB7IHRleHQ6ICdSZXN0cmljdGVkIFJlZ2lvbnMnLCBsaW5rOiAnL3N1cHBvcnQvcmVzdHJpY3RlZC1yZWdpb25zJyB9LFxuICAgICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICAgIHsgdGV4dDogXCJXZSdyZSBoaXJpbmchXCIsIGxpbms6ICdodHRwczovL2hvcml6b24uaW8vY2FyZWVycycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyIEFkbWluJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1Byb2plY3QgTWFuYWdlbWVudCcsIGxpbms6ICcvc3VwcG9ydC9idWlsZGVyL3Byb2plY3QtbWFuYWdlbWVudCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnUHJvamVjdCBTZXR0aW5ncycsIGxpbms6ICcvc3VwcG9ydC9idWlsZGVyL3Byb2plY3Qtc2V0dGluZ3MnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59IGFzIFNpZGViYXJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjs7O0FDRXRCLElBQU0sU0FBUztBQUFBLEVBQ3BCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxFQUFFLE1BQU0sU0FBUyxNQUFNLDZCQUE2QixPQUFPLDRCQUE0QjtBQUFBO0FBQUEsSUFFekY7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFVBQVUsTUFBTSwwQkFBMEIsT0FBTyx5QkFBeUI7QUFBQSxNQUNsRixFQUFFLE1BQU0sYUFBYSxNQUFNLDZCQUE2QixPQUFPLDRCQUE0QjtBQUFBLElBQzdGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxTQUFTLE1BQU0sdUJBQXVC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LFVBQ1gsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVlSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFRUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBV1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFjUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVVSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNUjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0EsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQTtBQUFB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
