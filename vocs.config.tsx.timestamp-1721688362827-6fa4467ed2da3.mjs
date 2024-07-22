// vocs.config.tsx
import { defineConfig } from "file:///home/mwm/Projects/sequence-v2/docs-v2/node_modules/.pnpm/vocs@1.0.0-alpha.45_@types+react@18.2.75_react-dom@18.2.0_react@18.2.0_rollup@4.14.1_typescript@5.4.4/node_modules/vocs/_lib/index.js";

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
                }
              ]
            },
            {
              text: "Examples",
              collapsed: true,
              items: [
                {
                  text: "Use Wallets",
                  link: "/solutions/wallets/embedded-wallet/examples/use-wallets"
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
                  text: "Validation",
                  link: "/solutions/wallets/embedded-wallet/examples/validation"
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
            { text: "Authentication", link: "/sdk/unity/authentication" },
            { text: "Write to blockchain", link: "/sdk/unity/write-to-blockchain" },
            { text: "Read from Blockchain", link: "/sdk/unity/read-from-blockchain" },
            { text: "Sign Messages", link: "/sdk/unity/sign-messages" },
            { text: "Recovering Sessions", link: "/sdk/unity/recovering-sessions" },
            { text: "Deploy Contracts", link: "/sdk/unity/deploy-contracts" },
            { text: "On-Ramp Funds via Credit Card", link: "/sdk/unity/onboard-user-funds" },
            {
              text: "Connect with External Wallets",
              link: "/sdk/unity/connecting-external-wallets"
            },
            { text: "Wallet UI", link: "/sdk/unity/wallet-ui" },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1NlcXVlbmNlJyxcblxuICAvLyBvZ0ltYWdlVXJsOiB7XG4gIC8vICAgJy8nOiAnL29nLWltYWdlLnBuZycsXG4gIC8vICAgJy9kb2NzJzpcbiAgLy8gICAgICdodHRwczovL3ZvY3MuZGV2L2FwaS9vZz9sb2dvPSVsb2dvJnRpdGxlPSV0aXRsZSZkZXNjcmlwdGlvbj0lZGVzY3JpcHRpb24nLFxuICAvLyAgICcvb3Atc3RhY2snOlxuICAvLyAgICAgJ2h0dHBzOi8vdm9jcy5kZXYvYXBpL29nP2xvZ289JWxvZ28mdGl0bGU9JXRpdGxlJmRlc2NyaXB0aW9uPSVkZXNjcmlwdGlvbicsXG4gIC8vIH0sXG4gIGljb25Vcmw6IHsgbGlnaHQ6ICcvaW1nL2Zhdmljb24uaWNvJywgZGFyazogJy9pbWcvZmF2aWNvbi5pY28nIH0sXG4gIGxvZ29Vcmw6IHtcbiAgICBsaWdodDogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWxpZ2h0LnN2ZycsXG4gICAgZGFyazogJy9pbWcvc2VxdWVuY2UtY29tcG9zaXRlLWRhcmsuc3ZnJyxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIC8vIE5PVEU6IHRha2luZyB1cCB2YWx1YWJsZSBzcGFjZSwgd2lsbCBtb3ZlIHRob3NlXG4gIC8vIHRvIGZvb3RlciBhbmQgb3RoZXIgc2VjdGlvbnNcbiAgLy8gc29jaWFsczogW1xuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdnaXRodWInLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS8weHNlcXVlbmNlJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGljb246ICdkaXNjb3JkJyxcbiAgLy8gICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgaWNvbjogJ3gnLFxuICAvLyAgICAgbGluazogJ2h0dHBzOi8veC5jb20vMHhzZXF1ZW5jZScsXG4gIC8vICAgfSxcbiAgLy8gXSxcblxuICB0aGVtZToge1xuICAgIC8vIGFjY2VudENvbG9yOiB7XG4gICAgLy8gICBsaWdodDogJyM0NDJDQTgnLFxuICAgIC8vICAgZGFyazogJyM5OUFERUQnLFxuICAgIC8vIH0sXG4gICAgY29sb3JTY2hlbWU6ICdkYXJrJyxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgZGVmYXVsdDogJ0ludGVyJyxcbiAgICAgICAgLy8gbW9ubzogJ1JvYm90byBNb25vJ1xuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBsaWdodDogJyNmMGYwZjAnLFxuICAgICAgICAgIGRhcms6ICcjMTExMTExJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYmFja2dyb3VuZDU6IHtcbiAgICAgICAgLy8gICBsaWdodDogJyNkZGRkZGQnLFxuICAgICAgICAvLyAgIGRhcms6ICcjMTExMTExJyxcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGJhY2tncm91bmREYXJrOiB7XG4gICAgICAgIC8vICAgbGlnaHQ6ICcjZGRkZGRkJyxcbiAgICAgICAgLy8gICBkYXJrOiAnIzE1MTUxNSdcbiAgICAgICAgLy8gfVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbXdtL1Byb2plY3RzL3NlcXVlbmNlLXYyL2RvY3MtdjJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL213bS9Qcm9qZWN0cy9zZXF1ZW5jZS12Mi9kb2NzLXYyL25hdi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9td20vUHJvamVjdHMvc2VxdWVuY2UtdjIvZG9jcy12Mi9uYXYudHNcIjtpbXBvcnQgdHlwZSB7IFNpZGViYXIsIFRvcE5hdiB9IGZyb20gJ3ZvY3MnXG5cbmV4cG9ydCBjb25zdCB0b3BOYXYgPSBbXG4gIHtcbiAgICB0ZXh0OiAnU29sdXRpb25zJyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgQnVpbGRlcicsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnT25ib2FyZCcsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnTW9uZXRpemUnLFxuICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9tb25ldGl6YXRpb24tb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvbW9uZXRpemF0aW9uLW92ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdQb3dlcicsIGxpbms6ICcvc29sdXRpb25zL3Bvd2VyLW92ZXJ2aWV3JywgbWF0Y2g6ICcvc29sdXRpb25zL3Bvd2VyLW92ZXJ2aWV3JyB9LFxuICAgICAgLy8geyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnLCBtYXRjaDogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvY2hhaW4tc3VwcG9ydCcgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1Jlc291cmNlcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ0d1aWRlcycsIGxpbms6ICcvZ3VpZGVzL2d1aWRlLW92ZXJ2aWV3JywgbWF0Y2g6ICcvZ3VpZGVzL2d1aWRlLW92ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnVGVtcGxhdGVzJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnLCBtYXRjaDogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdTREtzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnVW5pdHknLCBsaW5rOiAnL3Nkay91bml0eS9vdmVydmlldycsIG1hdGNoOiAnL3Nkay91bml0eS9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1VucmVhbCcsIGxpbms6ICcvc2RrL3VucmVhbC9vdmVydmlldycsIG1hdGNoOiAnL3Nkay91bnJlYWwvb3ZlcnZpZXcnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUeXBlc2NyaXB0JyxcbiAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ0dvJywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvZ28vb3ZlcnZpZXcnIH0sXG4gICAgICAvLyB7IHRleHQ6ICdBbmRyb2lkJywgbGluazogJy9zZGsvYW5kcm9pZCcsIG1hdGNoOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgICAgeyB0ZXh0OiAnTW9iaWxlJywgbGluazogJy9zZGsvbW9iaWxlJywgbWF0Y2g6ICcvc2RrL21vYmlsZScgfSxcbiAgICAgIC8vIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycsIG1hdGNoOiAnL3Nkay9pT1MnIH1cbiAgICBdLFxuICB9LFxuXG4gIC8vIHJlcGxhY2UgbGlua3MuXG4gIHtcbiAgICB0ZXh0OiAnQVBJcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9ucyBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9hcGkvdHJhbnNhY3Rpb25zL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdBbmFseXRpY3MgQVBJJywgbGluazogJy9hcGkvYW5hbHl0aWNzL292ZXJ2aWV3JywgbWF0Y2g6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ0luZGV4ZXIgQVBJJywgbGluazogJy9hcGkvaW5kZXhlci9vdmVydmlldycsIG1hdGNoOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnLCBtYXRjaDogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9hcGkvbm9kZS1nYXRld2F5JywgbWF0Y2g6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSxcbiAgICBdLFxuICB9LFxuXG4gIHtcbiAgICB0ZXh0OiAnU3VwcG9ydCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmNhbm55LmlvL2NoYW5nZWxvZycgfSxcbiAgICAgIHsgdGV4dDogJ1Jlc3RyaWN0ZWQgUmVnaW9ucycsIGxpbms6ICcvc3VwcG9ydC9yZXN0cmljdGVkLXJlZ2lvbnMnIH0sXG4gICAgICB7IHRleHQ6ICdUb2tlbiBEaXJlY3RvcnknLCBsaW5rOiAnL3N1cHBvcnQvdG9rZW4tZGlyZWN0b3J5JyB9LFxuICAgICAgeyB0ZXh0OiAnRkFRJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICB7IHRleHQ6ICdEaXNjb3JkJywgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9zZXF1ZW5jZScgfSxcbiAgICAgIHsgdGV4dDogXCJXZSdyZSBoaXJpbmchXCIsIGxpbms6ICdodHRwczovL2hvcml6b24uaW8vY2FyZWVycycgfSxcbiAgICAgIHsgdGV4dDogJ0NvbnRhY3QgVXMnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICBdLFxuICB9LFxuXSBhcyBUb3BOYXZcblxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSB7XG4gIC8vIE92ZXJ2aWV3XG4gICcvc29sdXRpb25zJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdPdmVydmlldycsXG4gICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdHZXR0aW5nIFN0YXJ0ZWQnLFxuICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nZXR0aW5nLXN0YXJ0ZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ09uYm9hcmQnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCcsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9xdWlja3N0YXJ0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2V0dXAnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ29uZmlndXJhdGlvbicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdHb29nbGUgU2V0dXAnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9lbWJlZGRlZC13YWxsZXQvZ29vZ2xlLWNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0FwcGxlIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L2FwcGxlLWNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1VzZSBXYWxsZXRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL3VzZS13YWxsZXRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgU2Vzc2lvbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvbWFuYWdlLXNlc3Npb25zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ09uLXJhbXAnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9vbi1yYW1wJyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdGZWUgT3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9mZWUtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVmFsaWRhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy92YWxpZGF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdWZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdUcmFuc2FjdGlvbiBSZWNlaXB0cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy90cmFuc2FjdGlvbi1yZWNlaXB0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBcmNoaXRlY3R1cmUnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ092ZXJ2aWV3JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9vdmVydmlldycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQWN0aW9uIFBheWxvYWRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9hY3Rpb24tcGF5bG9hZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1Jlc3BvbnNlIFBheWxvYWRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9yZXNwb25zZS1wYXlsb2FkcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVHJ1c3QgQ29udHJhY3QgUmVjb3ZlcnkgRmxvdycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvdHJ1c3QtY29udHJhY3QtcmVjb3ZlcnktZmxvdycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnRW5jbGF2ZSBWZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL2VuY2xhdmUtdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdJbnRlbnRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS9pbnRlbnRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2ZhcScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1NlcXVlbmNlIEtpdCcsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb25maWd1cmF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09uLXJhbXAnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9vbi1yYW1wJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ2hlY2tvdXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9jaGVja291dCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0N1c3RvbSBDb25uZWN0b3JzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvY3VzdG9tLWNvbm5lY3RvcnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2FsbGV0IExpbmtpbmcnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2xpbmstd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0ludGVncmF0aW9uIEd1aWRlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9saW5rLXdhbGxldHMvaW50ZWdyYXRpb24tZ3VpZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1VuaXZlcnNhbCBXYWxsZXQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3F1aWNrc3RhcnQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2Nvbm5lY3Qtd2FsbGV0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBdXRoZW50aWNhdGUgVXNlcnMgd2l0aCBNZXNzYWdlIFNpZ25hdHVyZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYXV0aC1hZGRyZXNzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTaWduaW5nICYgVmVyaWZ5aW5nIE1lc3NhZ2VzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zaWduLW1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ05vLXdhbGxldCBjb25maXJtYXRpb24gc2lnbmF0dXJlcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2Vzc2lvbi1rZXlzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC10cmFuc2FjdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtMjAgVG9rZW5zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzIwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzcyMScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1lcmMxMTU1JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIGEgQmF0Y2ggb2YgVHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWJhdGNoLXRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQnVpbGRpbmcgQmFja2VuZHMgd2l0aCBTZXF1ZW5jZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYnVpbGRpbmctYmFja2VuZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gIHt0ZXh0OiAnU2VxdWVuY2UgS2l0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3NlcXVlbmNlLWtpdCd9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU3VwcG9ydGVkIFBsYXRmb3JtcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9wbGF0Zm9ybXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdGaWF0IE9uLVJhbXBzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2ZpYXQtb24tcmFtcHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdLZXkgTWFuYWdlbWVudCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9rZXktbWFuYWdlbWVudCcgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNb25ldGl6ZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL21vbmV0aXphdGlvbi1vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnV2hpdGUtbGFiZWwgTWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvd2hpdGUtbGFiZWwtbWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIHlvdXIgQ3VzdG9tIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9vdmVydmlldycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9xdWlja3N0YXJ0JyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0ZpYXQgT24tcmFtcHMnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3BheW1lbnRzL29ucmFtcHMvZmlhdC1vbi1yYW1wcycsXG4gICAgICAgICAgbWF0Y2g6ICcvc29sdXRpb25zL3BheW1lbnRzL29ucmFtcHMvZmlhdC1vbi1yYW1wcycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1Bvd2VyJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRGVwbG95YWJsZSBDb250cmFjdHMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcGxveSBhIENvbGxlY3RpYmxlIENvbnRyYWN0JyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktYW4taXRlbS1jb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgSW4tR2FtZSBJdGVtcyBhbmQgQWNoaWV2ZW1lbnRzIChFUkMxMTU1KScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAwLW1pbnQtaXRlbXMtZnJvbS1FUkMxMTU1J30sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgRGlnaXRhbCBDb2xsZWN0aWJsZXMgKEVSQzcyMSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMi1taW50LWNvbGxlY3RpYmxlcy1mcm9tLUVSQzcyMSd9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRGVwbG95IGFuIEluLUdhbWUgQ3VycmVuY3kgKEVSQzIwKScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LUVSQzIwLWN1cnJlbmN5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbnMnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29sbGVjdGlvbnMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1F1ZXJ5aW5nIEJsb2NrY2hhaW4gRGF0YScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW5kZXhlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvaW5kZXhlcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci93ZWJob29rcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIE1hbmFnZXInLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RyYW5zYWN0aW9uLW1hbmFnZXIvb3ZlcnZpZXcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0FuYWx5dGljcycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9hbmFseXRpY3MnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0dhcyBTcG9uc29yc2hpcCcsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nYXMtdGFuaycsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvbm9kZS1nYXRld2F5JyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWludGVyJywgbGluazogJy9zb2x1dGlvbnMvbWludGVyJyB9XG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXInLFxuICAgIC8vICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gICBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsIFJlZmVyZW5jZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ0VJUDUxODkgdnMuIDQzMzcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy81MTg5LTQzMzcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2h5IFNtYXJ0IENvbnRyYWN0IFdhbGxldHM/JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzL3doeScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQ29udHJhY3QgSW50ZXJuYWxzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0RlcGxveW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvZGVwbG95bWVudCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NlcXVlbmNlIHYxJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RlcGxveScsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS9kZXBsb3knIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBGYWN0b3J5JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtZmFjdG9yeScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL3dhbGxldC1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIHt0ZXh0OiAnVHJhbnNhY3Rpb24gRW5jb2RpbmcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvMDctdHJhbnNhY3Rpb24tZW5jb2RpbmcnfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbmF0dXJlIEVuY29kaW5nJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS9zaWduYXR1cmUtZW5jb2RpbmcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBDb250ZXh0JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtY29udGV4dCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZXF1ZW5jZSB2MicsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3knLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjIvZGVwbG95JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjIvY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb250cmFjdCBBdWRpdHMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvY29udHJhY3QtYXVkaXRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcblxuICAnL2d1aWRlcyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR3VpZGVzJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgR2FtZSB3aXRoIFdlYkdMJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUnLFxuICAgICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSNhdmlhdG9yLXdlYjMtZ2FtZS13aXRoLXdlYmdsJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnUHJvamVjdCBTZXR1cCBXaXRoIFdlYnBhY2snLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSMxLXByb2plY3Qtc2V0dXAtd2l0aC13ZWJwYWNrJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnSW50ZWdyYXRlIFNlcXVlbmNlIEtpdCBXaXRoIFdhYVMnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSMyLWludGVncmF0ZS1zZXF1ZW5jZS1raXQnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBDb2xsZWN0aWJsZXMgQ29udHJhY3QnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSMzLWRlcGxveS1hLWNvbGxlY3RpYmxlcy1jb250cmFjdCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSBhIFJlbW90ZSBNaW50ZXInLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM0LWRlcGxveS1hLXJlbW90ZS1taW50ZXItLW1pbnQtaW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdMZXZlcmFnZSBJdGVtcyBJbi1nYW1lJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjNS1sZXZlcmFnZS1pdGVtcy1pbi1nYW1lJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQnVybiBJbi1nYW1lIEFjaGlldmVtZW50IFRva2VucycsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzYtYnVybi1pbi1nYW1lLWFjaGlldmVtZW50LXRva2VucycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJyhPcHRpb25hbCkgSW50ZWdyYXRlIEVtYmVkZGVkIFdhbGxldCBJbnRvIFNlcXVlbmNlIEtpdCcsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzctb3B0aW9uYWwtaW50ZWdyYXRlLWVtYmVkZGVkLXdhbGxldC1pbnRvLXNlcXVlbmNlLWtpdCcgfSxcbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQnVpbGQgYSBVbml0eSBHYW1lJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUnLFxuICAgICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRyby10by1qZWxseS1mb3Jlc3QnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdCdWlsZCBhIEdhbWUgTG9vcCcsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1aWxkLWEtZ2FtZS1sb29wJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnSW50ZWdyYXRlIEVtYmVkZGVkIFdhbGxldHMnLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNpbnRlZ3JhdGUtc29jaWFsLXNpZ24taW4tYW5kLXNlcXVlbmNlcy1lbWJlZGRlZC13YWxsZXQtc29sdXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgQ29sbGVjdGlibGVzJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjZGVwbG95LWEtY29sbGVjdGlibGVzLWNvbnRyYWN0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IFJlbW90ZSBNaW50ZXInLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNkZXBsb3ktYS1yZW1vdGUtbWludGVyJ30sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdNaW50aW5nIFRva2VucyB0byBJbnZlbnRvcnknLCBsaW5rOiAnL2d1aWRlcy91bml0eS1ndWlkZSNtaW50LWluLWdhbWUtdG9rZW5zLXRvLXRoZS1wbGF5ZXJzLWludmVudG9yeScgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1B1cmNoYXNlIENvbGxlY3RpYmxlcyB3aXRoIEVSQzIwIFRva2VucycsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1cm4taW4tZ2FtZS10b2tlbnMtaW4tZXhjaGFuZ2UtZm9yLW90aGVycycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0J1aWxkaW5nIGFuIEluLWdhbWUgU2hvcCcsIGxpbms6ICcvZ3VpZGVzL3VuaXR5LWd1aWRlI2J1aWxkaW5nLXRoZS1zaG9wLXBhZ2VzLWFuZC1zZXR0aW5nLXRoZS1taW50aW5nLXJlcXVpcmVtZW50cycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0xldmVyYWdlIFB1cmNoYXNlZCBJdGVtcyBJbi1nYW1lJywgbGluazogJy9ndWlkZXMvdW5pdHktZ3VpZGUjbGV2ZXJhZ2UtcHVyY2hhc2VkLWl0ZW1zLWluLWdhbWUnIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgQ29sbGVjdGlibGUgTWludGluZyBTZXJ2aWNlJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcycsXG4gICAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjbWludC1jb2xsZWN0aWJsZXMtdXNpbmctYS1nYXNsZXNzLXNlcnZlcmxlc3MtdHJhbnNhY3Rpb25zLWFwaScsIG1hdGNoOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzI21pbnQtY29sbGVjdGlibGVzLXVzaW5nLWEtZ2FzbGVzcy1zZXJ2ZXJsZXNzLXRyYW5zYWN0aW9ucy1hcGknfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1NldHVwIENsb3VkZmxhcmUgRW52aXJvbm1lbnQnLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzEtc2V0dXAtY2xvdWRmbGFyZS1lbnZpcm9ubWVudC13aXRoLXdyYW5nbGVyLWNsaS1hbmQtZGVwbG95LWEtdGVzdCcsIG1hdGNoOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzEtc2V0dXAtY2xvdWRmbGFyZS1lbnZpcm9ubWVudC13aXRoLXdyYW5nbGVyLWNsaS1hbmQtZGVwbG95LWEtdGVzdCd9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95LCBTcG9uc29yICYgVXBkYXRlIE1ldGFkYXRhIEZvciBhbiBFUkMxMTU1JywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMyLWRlcGxveS1zcG9uc29yLWFuZC11cGRhdGUtbWV0YWRhdGEtZm9yLWFuLWVyYzExNTUtY29udHJhY3Qtd2l0aC1zZXF1ZW5jZS1idWlsZGVyJ30sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdVc2UgRXRoQXV0aFByb29mIHRvIFByZXZlbnQgRU9BIEREb1MnLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzMtdXNlLWV0aGF1dGhwcm9vZi10by1wcmV2ZW50LWVvYS1kZG9zJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTWludCBhIENvbGxlY3RpYmxlIFRvIFdhbGxldCcsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjNC1taW50LWEtY29sbGVjdGlibGUtdG8td2FsbGV0JyB9LFxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbiBNZXRhZGF0YScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnT2J0YWluIGEgU2VjcmV0IEFQSSBLZXknLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSMxLW9idGFpbi1hLXNlY3JldC1hcGkta2V5J30sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdDcmVhdGUgQ29sbGVjdGlvbicsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzItY3JlYXRlLWNvbGxlY3Rpb24tZnJvbS1hLWN1cmwtcmVxdWVzdCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0NyZWF0ZSBUb2tlbicsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzMtY3JlYXRlLXRva2VuLXVzaW5nLXRva2VuaWQnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdDcmVhdGUgQXNzZXQnLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSM0LWNyZWF0ZS1hc3NldC11c2luZy10b2tlbmlkJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnU3RvcmUgYW4gSW1hZ2UnLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSM1LXN0b3JlLWltYWdlLWFzc2V0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnVXBkYXRlIHRvIE5vbi1wcml2YXRlJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNi11cGRhdGUtbm9uLXByaXZhdGUtdG9rZW4nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdQdWJsaXNoIENvbGxlY3Rpb24nLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSM3LXB1Ymxpc2gtY29sbGVjdGlvbi1mcm9tLWEtY3VybC1yZXF1ZXN0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnUmVuZGVyIEFzc2V0IGZyb20gQVBJJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjOC1yZW5kZXItYXNzZXQtZnJvbS1hcGktcHVibGljbHknIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgVHJlYXN1cmUgQ2hlc3Qgd2l0aCBBSSBNaW50aW5nJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvdHJlYXN1cmUtY2hlc3QtZ3VpZGUnLFxuICAgICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyIENvbnNvbGUgU2lnbnVwICYgUHJvamVjdCBDcmVhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMS1idWlsZGVyLWNvbnNvbGUtc2lnbnVwLS1wcm9qZWN0LWNyZWF0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQWNjZXNzIEtleSBNYW5hZ2VtZW50JywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSMyLWFjY2Vzcy1rZXktbWFuYWdlbWVudCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1NlcXVlbmNlIEtpdCBpbnRlZ3JhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMy1zZXF1ZW5jZS1raXQtaW50ZWdyYXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdpZnJhbWUtdG8tRGFwcCBDb21tdW5pY2F0aW9uJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM0LWlmcmFtZS10by1kYXBwLWNvbW11bmljYXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBDb250cmFjdCAmIFNwb25zb3IgR2FzJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM1LWRlcGxveS1hLWNvbnRyYWN0LS1zcG9uc29yLWdhcycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSBhIENsb3VkZmxhcmUgV29ya2VyJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM2LWRlcGxveS1hLWNsb3VkZmxhcmUtd29ya2VyJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnR2VuZXJhdGluZyBBSSBQcm9tcHRzICYgSW1hZ2VzJywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSM3LWdlbmVyYXRpbmctYWktcHJvbXB0cy0taW1hZ2VzJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnU3RvcmUgTWVkaWEgVG8gU2VxdWVuY2UgTWV0YWRhdGEgU2VydmljZScsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjOC1zdG9yZS1tZWRpYS10by1zZXF1ZW5jZS1tZXRhZGF0YS1zZXJ2aWNlJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnU2VjdXJpbmcgWW91ciBDbG91ZGZsYXJlIFdvcmtlcicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjOS1zZWN1cmluZy15b3VyLWNsb3VkZmxhcmUtd29ya2VyJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnKE9wdGlvbmFsKSBOYWl2ZSBNaW50IFJlc3RyaWN0aW9uIFBlciBXYWxsZXQnLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzEwLW9wdGlvbmFsLW5haXZlLW1pbnQtcmVzdHJpY3Rpb24tcGVyLXdhbGxldCcgfSxcblxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIEJhY2tlbmQgVHJhbnNhY3Rpb24gU2VydmljZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL2J1aWxkaW5nLXJlbGF5aW5nLXNlcnZlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTGV2ZXJhZ2UgU2VxdWVuY2UgQW5hbHl0aWNzIEFQSSBpbiBEdW5lJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvYW5hbHl0aWNzLWd1aWRlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhbiBFbWJlZGRlZCBXYWxsZXQgTGlua2luZyBTZXJ2aWNlJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9saW5rLXdhbGxldHMvaW50ZWdyYXRpb24tZ3VpZGUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgQ3VzdG9tIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTWludGluZycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSMxLW1pbnRpbmcnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdXYWxsZXQgQXV0aGVudGljYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjMi13YWxsZXQtYXV0aGVudGljYXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdCbG9ja2NoYWluIFF1ZXJpZXMnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjMy1ibG9ja2NoYWluLXF1ZXJpZXMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdNdWx0aS13YWxsZXQgdHlwZXMnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjNC1tdWx0aS13YWxsZXQtdHlwZXMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdSZXF1ZXN0IENyZWF0aW9uJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzUtcmVxdWVzdC1jcmVhdGlvbicgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ09yZGVyIEFjY2VwdGluZycsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM2LW9yZGVyLWFjY2VwdGluZycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJyhPcHRpb25hbCkgRW5hYmxlIEVtYmVkZGVkIFdhbGxldCcsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM3LW9wdGlvbmFsLWludGVncmF0ZS1lbWJlZGRlZC13YWxsZXQtaW50by1zZXF1ZW5jZS1raXQnIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdJbnRlZ3JhdGUgdG9rZW4gcmV3YXJkcyBpbnRvIHlvdXIgRGlzY29yZCBzZXJ2ZXInLFxuICAgIC8vICAgbGluazogJy9ndWlkZXMvZGlzY29yZCdcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZW1wbGF0ZXMnLFxuICAgICAgbGluazogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnLFxuICAgICAgLy8gaXRlbXM6IFtcbiAgICAgIC8vICAgeyB0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0IERlbW8nLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtZW1iZWRkZWQtd2FsbGV0JyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdCdWlsZCBhIEJhY2tlbmQgVHJhbnNhY3Rpb24gTWFuYWdlcicsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy9idWlsZGluZy1yZWxheWluZy1zZXJ2ZXInIH1cbiAgICAgIC8vICAgLy8geyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJIERlbW8nLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtbWFya2V0cGxhY2UtYXBpJyB9XG4gICAgICAvLyBdXG4gICAgfSxcbiAgXSxcblxuICAvLyBTREtzXG4gICcvc2RrJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHYW1lIEVuZ2luZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1VuaXR5JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbWF0Y2g6ICcvc2RrL3VuaXR5L292ZXJ2aWV3JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bml0eS9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NldHVwJywgbGluazogJy9zZGsvdW5pdHkvc2V0dXAnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdBdXRoZW50aWNhdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV3JpdGUgdG8gYmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5L3dyaXRlLXRvLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWFkIGZyb20gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5L3JlYWQtZnJvbS1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2lnbiBNZXNzYWdlcycsIGxpbms6ICcvc2RrL3VuaXR5L3NpZ24tbWVzc2FnZXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWNvdmVyaW5nIFNlc3Npb25zJywgbGluazogJy9zZGsvdW5pdHkvcmVjb3ZlcmluZy1zZXNzaW9ucycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0RlcGxveSBDb250cmFjdHMnLCBsaW5rOiAnL3Nkay91bml0eS9kZXBsb3ktY29udHJhY3RzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnT24tUmFtcCBGdW5kcyB2aWEgQ3JlZGl0IENhcmQnLCBsaW5rOiAnL3Nkay91bml0eS9vbmJvYXJkLXVzZXItZnVuZHMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb25uZWN0IHdpdGggRXh0ZXJuYWwgV2FsbGV0cycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3VuaXR5L2Nvbm5lY3RpbmctZXh0ZXJuYWwtd2FsbGV0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0IFVJJywgbGluazogJy9zZGsvdW5pdHkvd2FsbGV0LXVpJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQWR2YW5jZWQgQmxvY2tjaGFpbiBJbnRlcmFjdGlvbnMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvaW50cm9kdWN0aW9uJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC93YWxsZXRzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NsaWVudHMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC9jbGllbnRzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RyYW5zZmVycycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3RyYW5zZmVycycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDb250cmFjdHMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC9jb250cmFjdHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVG9rZW5zJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvdG9rZW5zJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1VucmVhbCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIG1hdGNoOiAnL3Nkay91bnJlYWwvb3ZlcnZpZXcnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3VucmVhbC9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvc2RrL3VucmVhbC9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdVcGdyYWRpbmcnLCBsaW5rOiAnL3Nkay91bnJlYWwvdXBncmFkaW5nJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2V0dXAnLCBsaW5rOiAnL3Nkay91bnJlYWwvc2V0dXAnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdBdXRoZW50aWNhdGlvbicsIGxpbms6ICcvc2RrL3VucmVhbC9hdXRoZW50aWNhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlcXVlbmNlIFdhbGxldCcsIGxpbms6ICcvc2RrL3VucmVhbC9hcGknIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2luZyBTZXNzaW9uJywgbGluazogJy9zZGsvdW5yZWFsL21hbmFnaW5nLXNlc3Npb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWFkIGZyb20gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VucmVhbC9yZWFkLWZyb20tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dyaXRlIHRvIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bnJlYWwvd3JpdGUtdG8tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09uLVJhbXAgRnVuZHMgdmlhIENyZWRpdCBDYXJkJywgbGluazogJy9zZGsvdW5yZWFsL29uYm9hcmQtdXNlci1mdW5kcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0FkdmFuY2VkIEJsb2NrY2hhaW4gSW50ZXJlYWN0aW9ucycsIGxpbms6ICcvc2RrL3VucmVhbC9hZHZhbmNlZCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1BhY2thZ2luZycsIGxpbms6ICcvc2RrL3VucmVhbC9wYWNrYWdpbmcnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTW9iaWxlJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIC8vIHsgdGV4dDogJ0FuZHJvaWQnLCBsaW5rOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgICAgICAvLyB7IHRleHQ6ICdpT1MnLCBsaW5rOiAnL3Nkay9pT1MnIH0sXG4gICAgICAgIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL21vYmlsZScgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRleHQ6ICdXZWIzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVHlwZVNjcmlwdCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9jb25uZWN0LXdhbGxldCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0F1dGhlbnRpY2F0ZSBVc2VycyB3aXRoIE1lc3NhZ2UgU2lnbmF0dXJlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvYXV0aC1hZGRyZXNzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTaWduaW5nICYgVmVyaWZ5aW5nIE1lc3NhZ2VzJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2lnbi1tZXNzYWdlJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTm8td2FsbGV0IGNvbmZpcm1hdGlvbiBzaWduYXR1cmVzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2Vzc2lvbi1rZXlzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtdHJhbnNhY3Rpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWVyYzIwJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2VuZGluZyBFUkMtNzIxIChORlQpIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjNzIxJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjMTE1NScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBhIEJhdGNoIG9mIFRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtYmF0Y2gtdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZGluZyBCYWNrZW5kcyB3aXRoIFNlcXVlbmNlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvYnVpbGRpbmctYmFja2VuZHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBDb25uZWN0b3JzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dhZ21pJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3dhZ21pJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JhaW5ib3dLaXQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvcmFpbmJvdy1raXQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2ViMyBPbmJvYXJkJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3dlYjMtb25ib2FyZCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXZWIzIFJlYWN0IFY2JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3dlYjMtcmVhY3QtdjYnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2ViM01vZGFsJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3dlYjNtb2RhbCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvRkFRJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0dvJyxcbiAgICAgICAgICBsaW5rOiAnL3Nkay9nby9vdmVydmlldycsXG4gICAgICAgICAgaXRlbXM6IFt7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JyB9XSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29tbW9uIFF1ZXN0aW9ucycsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdyBkbyBJIGRvIHNpZ25hdHVyZSB2YWxpZGF0aW9uPycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2F1dGgtYWRkcmVzcycsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuXG4gIC8vIGFwaXNcbiAgJy9hcGknOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1RyYW5zYWN0aW9ucycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZldGNoIEZlZSBPcHRpb25zJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL2ZldGNoLWZlZS1vcHRpb25zJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2VuZCBUcmFuc2FjdGlvbnMnLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvZXhhbXBsZXMvc2VuZC10cmFuc2FjdGlvbnMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdGZXRjaCBUcmFuc2FjdGlvbiBSZWNlaXB0cycsXG4gICAgICAgICAgICAgIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9leGFtcGxlcy9mZXRjaC10cmFuc2FjdGlvbi1yZWNlaXB0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0luZGV4ZXInLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvaW5kZXhlci9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9hcGkvaW5kZXhlci9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZldGNoIFRva2VucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvZmV0Y2gtdG9rZW5zJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVHJhbnNhY3Rpb24gSGlzdG9yeScsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdHJhbnNhY3Rpb24taGlzdG9yeScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1VuaXF1ZSBUb2tlbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3VuaXF1ZS10b2tlbnMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdUcmFuc2FjdGlvbiBIaXN0b3J5IFRva2VuIENvbnRyYWN0JyxcbiAgICAgICAgICAgICAgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy90cmFuc2F0aW9uLWhpc3RvcnktdG9rZW4tY29udHJhY3QnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ05hdGl2ZSBOZXR3b3JrIEJhbGFuY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL25hdGl2ZS1uZXR3b3JrLWJhbGFuY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ01ldGFkYXRhIFRpcHMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL21ldGFkYXRhLXRpcHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXZWJob29rcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvd2ViaG9vay1saXN0ZW5lcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1N1YnNjcmlwdGlvbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3N1YnNjcmlwdGlvbnMnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQW5hbHl0aWNzJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9leGFtcGxlcy93YWxsZXRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWFya2V0cGxhY2VzJywgbGluazogJy9hcGkvYW5hbHl0aWNzL2V4YW1wbGVzL21hcmtldHBsYWNlJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01ldGFkYXRhJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL21ldGFkYXRhL292ZXJ2aWV3JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdUb2tlbiBNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhL3Rva2VuLW1ldGFkYXRhJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ29udHJhY3QgTWV0YWRhdGEnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9jb250cmFjdC1tZXRhZGF0YScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1JFU1QgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvcmVzdC1hcGknIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTWFya2V0cGxhY2UnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbWFya2V0cGxhY2Uvb3ZlcnZpZXcnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ1NjaGVtYScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL3NjaGVtYScgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvYXBpJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL29yZGVyYm9vay10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDcmVhdGluZyBNYXJrZXQgT3JkZXJzICYgTGlzdGluZ3MnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9vcmRlcmJvb2stdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXQgVG9wIE9yZGVycycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC10b3Atb3JkZXJzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IE9yZGVyYm9vaycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC1vcmRlcmJvb2snIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXQgVXNlciBBY3Rpdml0aWVzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LXVzZXItYWN0aXZpdGllcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9ub2RlLWdhdGV3YXknIH1dLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8gU3VwcG9ydFxuICAnL3N1cHBvcnQnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1N1cHBvcnQnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnU3VwcG9ydCcsIGxpbms6ICcvc3VwcG9ydCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ2hhbmdlbG9nJywgbGluazogJ2h0dHBzOi8vMHhzZXF1ZW5jZS5jYW5ueS5pby9jaGFuZ2Vsb2cnIH0sXG4gICAgICAgIHsgdGV4dDogJ1Jlc3RyaWN0ZWQgUmVnaW9ucycsIGxpbms6ICcvc3VwcG9ydC9yZXN0cmljdGVkLXJlZ2lvbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgICB7IHRleHQ6ICdUb2tlbiBEaXJlY3RvcnknLCBsaW5rOiAnL3N1cHBvcnQvdG9rZW4tZGlyZWN0b3J5JyB9LFxuICAgICAgICB7IHRleHQ6ICdEaXNjb3JkJywgbGluazogJ2h0dHBzOi8vZGlzY29yZC5nZy9zZXF1ZW5jZScgfSxcbiAgICAgICAgeyB0ZXh0OiBcIldlJ3JlIGhpcmluZyFcIiwgbGluazogJ2h0dHBzOi8vaG9yaXpvbi5pby9jYXJlZXJzJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXIgQWRtaW4nLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnUHJvamVjdCBNYW5hZ2VtZW50JywgbGluazogJy9zdXBwb3J0L2J1aWxkZXIvcHJvamVjdC1tYW5hZ2VtZW50JyB9LFxuICAgICAgICB7IHRleHQ6ICdQcm9qZWN0IFNldHRpbmdzJywgbGluazogJy9zdXBwb3J0L2J1aWxkZXIvcHJvamVjdC1zZXR0aW5ncycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbn0gYXMgU2lkZWJhclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsb0JBQW9COzs7QUNFdEIsSUFBTSxTQUFTO0FBQUEsRUFDcEI7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEs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QUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsV0FBVztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVdSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVlSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFRUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBV1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFjUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsUUFDUjtB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
