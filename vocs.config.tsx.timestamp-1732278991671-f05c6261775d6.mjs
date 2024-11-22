// vocs.config.tsx
import { defineConfig } from "file:///Users/jameslawton/Coding/docs-v2/node_modules/.pnpm/vocs@https+++codeload.github.com+0xsequence+vocs+tar.gz+09f0f67135a711bba973e7d452a5b8854223e_73fmzff4o7zutzpjaufes33tqe/node_modules/vocs/_lib/index.js";

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
        text: "React",
        link: "/solutions/wallets/sequence-kit/overview",
        match: "/solutions/wallets/sequence-kit/overview"
      },
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
      {
        text: "Infrastructure API",
        link: "/api/infrastructure/overview",
        match: "/api/infrastructure/overview"
      },
      { text: "Node Gateway", link: "/api/node-gateway", match: "/api/node-gateway" }
    ]
  },
  {
    text: "Support",
    items: [
      { text: "Support", link: "/support" },
      { text: "Changelog", link: "https://0xsequence.featurebase.app/" },
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
                },
                {
                  text: "Stytch Setup",
                  link: "/solutions/builder/embedded-wallet/stytch-configuration"
                },
                {
                  text: "Guest Wallet Setup",
                  link: "/solutions/builder/embedded-wallet/guest-wallet-configuration"
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
                  text: "Token Verification",
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
            {
              text: "Custom Configuration",
              link: "/solutions/wallets/sequence-kit/custom-configuration"
            },
            {
              text: "Sequence Pay",
              collapsed: false,
              items: [
                { text: "On-ramp", link: "/solutions/wallets/sequence-kit/on-ramp" },
                { text: "Checkout", link: "/solutions/wallets/sequence-kit/checkout" }
              ]
            },
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
                { text: "Starter", link: "/solutions/marketplaces/orderbook/starter" }
              ]
            }
          ]
        },
        {
          text: "Sequence Pay",
          collapsed: true,
          items: [
            {
              text: "Fiat On-ramps",
              link: "/solutions/payments/onramps/fiat-on-ramps",
              match: "/solutions/payments/onramps/fiat-on-ramps"
            },
            {
              text: "Smart Swaps",
              link: "/solutions/payments/smart-swaps"
            },
            {
              text: "Checkout",
              link: "/solutions/payments/nft-checkout"
            }
          ]
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
            },
            {
              text: "Deploy a Soulbound Token Contract",
              link: "/solutions/collectibles/contracts/deploy-soulbound-token"
            },
            {
              text: "Deploy a Primary Sales Contract",
              link: "/solutions/collectibles/contracts/deploy-primary-sales-contract"
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
          text: "Ethers v6 Support",
          link: "/solutions/technical-references/ethers-v6-migration"
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
          link: "/guides/jelly-forest-unity-guide"
          // items: [
          //   { text: 'Introduction', link: '/guides/jelly-forest-unity-guidee#intro-to-jelly-forest' },
          //   { text: 'Build a Game Loop', link: '/guides/jelly-forest-unity-guide#build-a-game-loop' },
          //   { text: 'Integrate Embedded Wallets', link: '/guides/jelly-forest-unity-guide#integrate-social-sign-in-and-sequences-embedded-wallet-solution' },
          //   { text: 'Deploy Collectibles', link: '/guides/jelly-forest-unity-guide#deploy-a-collectibles-contract' },
          //   { text: 'Deploy Remote Minter', link: '/guides/jelly-forest-unity-guide#deploy-a-remote-minter'},
          //   { text: 'Minting Tokens to Inventory', link: '/guides/jelly-forest-unity-guide#mint-in-game-tokens-to-the-players-inventory' },
          //   { text: 'Purchase Collectibles with ERC20 Tokens', link: '/guides/jelly-forest-unity-guide#burn-in-game-tokens-in-exchange-for-others' },
          //   { text: 'Building an In-game Shop', link: '/guides/jelly-forest-unity-guide#building-the-shop-pages-and-setting-the-minting-requirements' },
          //   { text: 'Leverage Purchased Items In-game', link: '/guides/jelly-forest-unity-guide#leverage-purchased-items-in-game' },
          // ]
        },
        {
          text: "Building Transaction Heavy Games with Unity",
          collapsed: true,
          link: "/guides/building-transaction-heavy-games-with-unity"
        },
        {
          text: "How to sell On-Chain Items in your Unreal Project",
          collapsed: true,
          link: "/guides/unreal-primary-sales"
        },
        {
          text: "How to do Primary Sales for On-Chain Items in Unity",
          collapsed: true,
          link: "/guides/unity-primary-sales"
        },
        {
          text: "How to build a Game with Unreal Engine",
          collapsed: true,
          link: "/guides/unreal-ew-guide"
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
        },
        {
          text: "Sell your Game Items via a Web Shop",
          collapsed: true,
          link: "/guides/primary-sales"
        },
        {
          text: "Create NFT Drop Sales",
          collapsed: true,
          link: "/guides/primary-drop-sales-erc721"
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
                {
                  text: "Federated Accounts",
                  link: "/sdk/unity/authentication/federated-accounts"
                }
              ]
            },
            { text: "Write to blockchain", link: "/sdk/unity/write-to-blockchain" },
            { text: "Read from Blockchain", link: "/sdk/unity/read-from-blockchain" },
            { text: "Sign Messages", link: "/sdk/unity/sign-messages" },
            { text: "Recovering Sessions", link: "/sdk/unity/recovering-sessions" },
            { text: "Session Management", link: "/sdk/unity/session-management" },
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
            {
              text: "Authentication",
              collapsed: false,
              items: [
                { text: "Introduction", link: "/sdk/unreal/authentication/intro" },
                { text: "Email + OTP", link: "/sdk/unreal/authentication/email" },
                { text: "OIDC - Social Sign In", link: "/sdk/unreal/authentication/oidc" },
                { text: "PlayFab", link: "/sdk/unreal/authentication/playfab" },
                { text: "Guest", link: "/sdk/unreal/authentication/guest" },
                {
                  text: "Federated Accounts",
                  link: "/sdk/unreal/authentication/federated-accounts"
                }
              ]
            },
            { text: "Sequence Wallet", link: "/sdk/unreal/api" },
            { text: "Managing Session", link: "/sdk/unreal/managing-session" },
            { text: "Read from Blockchain", link: "/sdk/unreal/read-from-blockchain" },
            { text: "Write to Blockchain", link: "/sdk/unreal/write-to-blockchain" },
            { text: "Working with Blueprint", link: "/sdk/unreal/working-with-blueprint" },
            { text: "On-Ramp Funds via Credit Card", link: "/sdk/unreal/onboard-user-funds" },
            { text: "Advanced Blockchain Interactions", link: "/sdk/unreal/advanced" },
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
        { text: "Endpoints", link: "/api/transactions/endpoints" },
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
        { text: "Endpoints", link: "/api/indexer/endpoints" },
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
        { text: "Endpoints", link: "/api/analytics/endpoints" },
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
        { text: "Endpoints", link: "/api/metadata/endpoints" },
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
      text: "Infrastructure",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/infrastructure/overview" },
        { text: "Endpoints", link: "/api/infrastructure/endpoints" }
      ]
    },
    {
      text: "Marketplace",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/marketplace/overview" },
        { text: "Endpoints", link: "/api/marketplace/endpoints" },
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
        { text: "Changelog", link: "https://0xsequence.featurebase.app/" },
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
import ViteYaml from "file:///Users/jameslawton/Coding/docs-v2/node_modules/.pnpm/@modyfi+vite-plugin-yaml@1.1.0_rollup@4.24.0_vite@5.4.9_@types+node@22.7.7_/node_modules/@modyfi/vite-plugin-yaml/dist/index.js";
var vocs_config_default = defineConfig({
  title: "Sequence",
  iconUrl: { light: "/img/favicon.ico", dark: "/img/favicon.ico" },
  logoUrl: {
    light: "/img/sequence-composite-light.svg",
    dark: "/img/sequence-composite-dark.svg"
  },
  vite: {
    ssr: {
      noExternal: ["@docsearch/react"]
    },
    plugins: [ViteYaml()]
  },
  // rootDir: '.',
  basePath: "/",
  topNav,
  sidebar,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuaW1wb3J0IFZpdGVZYW1sIGZyb20gJ0Btb2R5Zmkvdml0ZS1wbHVnaW4teWFtbCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdTZXF1ZW5jZScsXG5cbiAgaWNvblVybDogeyBsaWdodDogJy9pbWcvZmF2aWNvbi5pY28nLCBkYXJrOiAnL2ltZy9mYXZpY29uLmljbycgfSxcbiAgbG9nb1VybDoge1xuICAgIGxpZ2h0OiAnL2ltZy9zZXF1ZW5jZS1jb21wb3NpdGUtbGlnaHQuc3ZnJyxcbiAgICBkYXJrOiAnL2ltZy9zZXF1ZW5jZS1jb21wb3NpdGUtZGFyay5zdmcnLFxuICB9LFxuICB2aXRlOiB7XG4gICAgc3NyOiB7XG4gICAgICBub0V4dGVybmFsOiBbJ0Bkb2NzZWFyY2gvcmVhY3QnXSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtWaXRlWWFtbCgpXSxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIHRoZW1lOiB7XG4gICAgLy8gYWNjZW50Q29sb3I6IHtcbiAgICAvLyAgIGxpZ2h0OiAnIzQ0MkNBOCcsXG4gICAgLy8gICBkYXJrOiAnIzk5QURFRCcsXG4gICAgLy8gfSxcbiAgICBjb2xvclNjaGVtZTogJ2RhcmsnLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgZm9udEZhbWlseToge1xuICAgICAgICBkZWZhdWx0OiAnSW50ZXInLFxuICAgICAgICAvLyBtb25vOiAnUm9ib3RvIE1vbm8nXG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgIGxpZ2h0OiAnI2YwZjBmMCcsXG4gICAgICAgICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgICB9LFxuICAgICAgICAvLyBiYWNrZ3JvdW5kNToge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZERhcms6IHtcbiAgICAgICAgLy8gICBsaWdodDogJyNkZGRkZGQnLFxuICAgICAgICAvLyAgIGRhcms6ICcjMTUxNTE1J1xuICAgICAgICAvLyB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFtZXNsYXd0b24vQ29kaW5nL2RvY3MtdjJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qYW1lc2xhd3Rvbi9Db2RpbmcvZG9jcy12Mi9uYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2phbWVzbGF3dG9uL0NvZGluZy9kb2NzLXYyL25hdi50c1wiO2ltcG9ydCB0eXBlIHsgU2lkZWJhciwgVG9wTmF2IH0gZnJvbSAndm9jcydcblxuZXhwb3J0IGNvbnN0IHRvcE5hdiA9IFtcbiAge1xuICAgIHRleHQ6ICdTb2x1dGlvbnMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyJyxcbiAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdPbmJvYXJkJyxcbiAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdNb25ldGl6ZScsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL21vbmV0aXphdGlvbi1vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy9tb25ldGl6YXRpb24tb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ1Bvd2VyJywgbGluazogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnIH0sXG4gICAgICAvLyB7IHRleHQ6ICdDaGFpbiBTdXBwb3J0JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvY2hhaW4tc3VwcG9ydCcsIG1hdGNoOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9jaGFpbi1zdXBwb3J0JyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnUmVzb3VyY2VzJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnR3VpZGVzJywgbGluazogJy9ndWlkZXMvZ3VpZGUtb3ZlcnZpZXcnLCBtYXRjaDogJy9ndWlkZXMvZ3VpZGUtb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdUZW1wbGF0ZXMnLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZS1vdmVydmlldycsIG1hdGNoOiAnL2d1aWRlcy90ZW1wbGF0ZS1vdmVydmlldycgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1NES3MnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdVbml0eScsIGxpbms6ICcvc2RrL3VuaXR5L292ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL3VuaXR5L292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnVW5yZWFsJywgbGluazogJy9zZGsvdW5yZWFsL292ZXJ2aWV3JywgbWF0Y2g6ICcvc2RrL3VucmVhbC9vdmVydmlldycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1JlYWN0JyxcbiAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1R5cGVzY3JpcHQnLFxuICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnR28nLCBsaW5rOiAnL3Nkay9nby9vdmVydmlldycsIG1hdGNoOiAnL3Nkay9nby9vdmVydmlldycgfSxcbiAgICAgIC8vIHsgdGV4dDogJ0FuZHJvaWQnLCBsaW5rOiAnL3Nkay9hbmRyb2lkJywgbWF0Y2g6ICcvc2RrL2FuZHJvaWQnIH0sXG4gICAgICB7IHRleHQ6ICdNb2JpbGUnLCBsaW5rOiAnL3Nkay9tb2JpbGUnLCBtYXRjaDogJy9zZGsvbW9iaWxlJyB9LFxuICAgICAgLy8geyB0ZXh0OiAnaU9TJywgbGluazogJy9zZGsvaU9TJywgbWF0Y2g6ICcvc2RrL2lPUycgfVxuICAgIF0sXG4gIH0sXG5cbiAgLy8gcmVwbGFjZSBsaW5rcy5cbiAge1xuICAgIHRleHQ6ICdBUElzJyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnVHJhbnNhY3Rpb25zIEFQSScsXG4gICAgICAgIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ0FuYWx5dGljcyBBUEknLCBsaW5rOiAnL2FwaS9hbmFseXRpY3Mvb3ZlcnZpZXcnLCBtYXRjaDogJy9hcGkvYW5hbHl0aWNzL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnSW5kZXhlciBBUEknLCBsaW5rOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JywgbWF0Y2g6ICcvYXBpL2luZGV4ZXIvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdNZXRhZGF0YSBBUEknLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9vdmVydmlldycsIG1hdGNoOiAnL2FwaS9tZXRhZGF0YS9vdmVydmlldycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ01hcmtldHBsYWNlIEFQSScsXG4gICAgICAgIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL292ZXJ2aWV3JyxcbiAgICAgICAgbWF0Y2g6ICcvYXBpL21hcmtldHBsYWNlL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdJbmZyYXN0cnVjdHVyZSBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS9pbmZyYXN0cnVjdHVyZS9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL2FwaS9pbmZyYXN0cnVjdHVyZS9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnTm9kZSBHYXRld2F5JywgbGluazogJy9hcGkvbm9kZS1nYXRld2F5JywgbWF0Y2g6ICcvYXBpL25vZGUtZ2F0ZXdheScgfSxcbiAgICBdLFxuICB9LFxuXG4gIHtcbiAgICB0ZXh0OiAnU3VwcG9ydCcsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1N1cHBvcnQnLCBsaW5rOiAnL3N1cHBvcnQnIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmZlYXR1cmViYXNlLmFwcC8nIH0sXG4gICAgICB7IHRleHQ6ICdSZXN0cmljdGVkIFJlZ2lvbnMnLCBsaW5rOiAnL3N1cHBvcnQvcmVzdHJpY3RlZC1yZWdpb25zJyB9LFxuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICB7IHRleHQ6IFwiV2UncmUgaGlyaW5nIVwiLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgXSxcbiAgfSxcbl0gYXMgVG9wTmF2XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyID0ge1xuICAvLyBPdmVydmlld1xuICAnL3NvbHV0aW9ucyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnR2V0dGluZyBTdGFydGVkJyxcbiAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZ2V0dGluZy1zdGFydGVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdPbmJvYXJkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFbWJlZGRlZCBXYWxsZXQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvcXVpY2tzdGFydCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NldHVwJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnR29vZ2xlIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L2dvb2dsZS1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBcHBsZSBTZXR1cCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldC9hcHBsZS1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdQbGF5RmFiIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L3BsYXlmYWItY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU3R5dGNoIFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L3N0eXRjaC1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdHdWVzdCBXYWxsZXQgU2V0dXAnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9lbWJlZGRlZC13YWxsZXQvZ3Vlc3Qtd2FsbGV0LWNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL2F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdVc2UgV2FsbGV0cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy91c2Utd2FsbGV0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQWNjb3VudCBGZWRlcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL2FjY291bnQtZmVkZXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnTWFuYWdlIFNlc3Npb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL21hbmFnZS1zZXNzaW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPbi1yYW1wJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvb24tcmFtcCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnRmVlIE9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvZmVlLW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1Rva2VuIFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy92ZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIFJlY2VpcHRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL3RyYW5zYWN0aW9uLXJlY2VpcHRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0FyY2hpdGVjdHVyZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL292ZXJ2aWV3JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBY3Rpb24gUGF5bG9hZHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL2FjdGlvbi1wYXlsb2FkcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVzcG9uc2UgUGF5bG9hZHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL3Jlc3BvbnNlLXBheWxvYWRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdUcnVzdCBDb250cmFjdCBSZWNvdmVyeSBGbG93JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS90cnVzdC1jb250cmFjdC1yZWNvdmVyeS1mbG93JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdFbmNsYXZlIFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvZW5jbGF2ZS12ZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0ludGVudHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL2ludGVudHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTWlncmF0aW5nIHRvIFNlcXVlbmNlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvbWlncmF0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9mYXEnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdTZXF1ZW5jZSBLaXQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ3VzdG9tIENvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9jdXN0b20tY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgUGF5JyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPbi1yYW1wJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvb24tcmFtcCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDaGVja291dCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L2NoZWNrb3V0JyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ3VzdG9tIENvbm5lY3RvcnMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9jdXN0b20tY29ubmVjdG9ycycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdXYWxsZXQgTGlua2luZycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvbGluay13YWxsZXRzL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSW50ZWdyYXRpb24gR3VpZGUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2xpbmstd2FsbGV0cy9pbnRlZ3JhdGlvbi1ndWlkZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVW5pdmVyc2FsIFdhbGxldCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvcXVpY2tzdGFydCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb25uZWN0IFdhbGxldCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvY29ubmVjdC13YWxsZXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0F1dGhlbnRpY2F0ZSBVc2VycyB3aXRoIE1lc3NhZ2UgU2lnbmF0dXJlJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9hdXRoLWFkZHJlc3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NpZ24tbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnTm8td2FsbGV0IGNvbmZpcm1hdGlvbiBzaWduYXR1cmVzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZXNzaW9uLWtleXMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgVHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLXRyYW5zYWN0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtZXJjMjAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgRVJDLTcyMSAoTkZUKSBUb2tlbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtZXJjNzIxJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy0xMTU1IChDb2xsZWN0aWJsZSkgVG9rZW5zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9zZW5kLWVyYzExNTUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgYSBCYXRjaCBvZiBUcmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtYmF0Y2gtdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdCdWlsZGluZyBCYWNrZW5kcyB3aXRoIFNlcXVlbmNlJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9idWlsZGluZy1iYWNrZW5kcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAge3RleHQ6ICdTZXF1ZW5jZSBLaXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvc2VxdWVuY2Uta2l0J30sXG4gICAgICAgICAgICB7IHRleHQ6ICdTdXBwb3J0ZWQgUGxhdGZvcm1zJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L3BsYXRmb3JtcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZpYXQgT24tUmFtcHMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZmlhdC1vbi1yYW1wcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0tleSBNYW5hZ2VtZW50JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2tleS1tYW5hZ2VtZW50JyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01vbmV0aXplJyxcbiAgICAgIC8vIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbW9uZXRpemF0aW9uLW92ZXJ2aWV3JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ01hcmtldHBsYWNlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdXaGl0ZS1sYWJlbCBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy93aGl0ZS1sYWJlbC1tYXJrZXRwbGFjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQnVpbGQgeW91ciBDdXN0b20gTWFya2V0cGxhY2UnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1N0YXJ0ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvb3JkZXJib29rL3N0YXJ0ZXInIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgUGF5JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0ZpYXQgT24tcmFtcHMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9wYXltZW50cy9vbnJhbXBzL2ZpYXQtb24tcmFtcHMnLFxuICAgICAgICAgICAgICBtYXRjaDogJy9zb2x1dGlvbnMvcGF5bWVudHMvb25yYW1wcy9maWF0LW9uLXJhbXBzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTbWFydCBTd2FwcycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3BheW1lbnRzL3NtYXJ0LXN3YXBzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDaGVja291dCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3BheW1lbnRzL25mdC1jaGVja291dCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1Bvd2VyJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRGVwbG95YWJsZSBDb250cmFjdHMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcGxveSBhIENvbGxlY3RpYmxlIENvbnRyYWN0JyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktYW4taXRlbS1jb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgSW4tR2FtZSBJdGVtcyBhbmQgQWNoaWV2ZW1lbnRzIChFUkMxMTU1KScsIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvOTAwLW1pbnQtaXRlbXMtZnJvbS1FUkMxMTU1J30sXG4gICAgICAgICAgICAvLyB7dGV4dDogJ01pbnQgRGlnaXRhbCBDb2xsZWN0aWJsZXMgKEVSQzcyMSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMi1taW50LWNvbGxlY3RpYmxlcy1mcm9tLUVSQzcyMSd9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRGVwbG95IGFuIEluLUdhbWUgQ3VycmVuY3kgKEVSQzIwKScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LUVSQzIwLWN1cnJlbmN5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdEZXBsb3kgYSBTb3VsYm91bmQgVG9rZW4gQ29udHJhY3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1zb3VsYm91bmQtdG9rZW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcGxveSBhIFByaW1hcnkgU2FsZXMgQ29udHJhY3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1wcmltYXJ5LXNhbGVzLWNvbnRyYWN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbnMnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvY29sbGVjdGlvbnMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1F1ZXJ5aW5nIEJsb2NrY2hhaW4gRGF0YScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnSW5kZXhlcicsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvaW5kZXhlcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci93ZWJob29rcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIE1hbmFnZXInLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RyYW5zYWN0aW9uLW1hbmFnZXIvb3ZlcnZpZXcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0FuYWx5dGljcycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9hbmFseXRpY3MnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0dhcyBTcG9uc29yc2hpcCcsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9nYXMtdGFuaycsXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvbm9kZS1nYXRld2F5JyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWludGVyJywgbGluazogJy9zb2x1dGlvbnMvbWludGVyJyB9XG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgdGV4dDogJ1NlcXVlbmNlIEJ1aWxkZXInLFxuICAgIC8vICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gICBtYXRjaDogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVjaG5pY2FsIFJlZmVyZW5jZXMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnQ2hhaW4gU3VwcG9ydCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2NoYWluLXN1cHBvcnQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ0VJUDUxODkgdnMuIDQzMzcnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy81MTg5LTQzMzcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2h5IFNtYXJ0IENvbnRyYWN0IFdhbGxldHM/JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy93YWxsZXQtY29udHJhY3RzL3doeScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXRoZXJzIHY2IFN1cHBvcnQnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2V0aGVycy12Ni1taWdyYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NvbnRyYWN0IEludGVybmFscycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3ltZW50JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL2RlcGxveW1lbnQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZXF1ZW5jZSB2MScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3knLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvZGVwbG95JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgRmFjdG9yeScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvd2FsbGV0LWZhY3RvcnknLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBDb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS93YWxsZXQtY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyB7dGV4dDogJ1RyYW5zYWN0aW9uIEVuY29kaW5nJywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxLzA3LXRyYW5zYWN0aW9uLWVuY29kaW5nJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NpZ25hdHVyZSBFbmNvZGluZycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvc2lnbmF0dXJlLWVuY29kaW5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgQ29udGV4dCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvd2FsbGV0LWNvbnRleHQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgdjInLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyL2RlcGxveScgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YyL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ29udHJhY3QgQXVkaXRzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL2NvbnRyYWN0LWF1ZGl0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG5cbiAgJy9ndWlkZXMnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0d1aWRlcycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIEdhbWUgd2l0aCBXZWJHTCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjYXZpYXRvci13ZWIzLWdhbWUtd2l0aC13ZWJnbCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1Byb2plY3QgU2V0dXAgV2l0aCBXZWJwYWNrJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMS1wcm9qZWN0LXNldHVwLXdpdGgtd2VicGFjaycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0ludGVncmF0ZSBTZXF1ZW5jZSBLaXQgV2l0aCBXYWFTJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMi1pbnRlZ3JhdGUtc2VxdWVuY2Uta2l0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IGEgQ29sbGVjdGlibGVzIENvbnRyYWN0JywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjMy1kZXBsb3ktYS1jb2xsZWN0aWJsZXMtY29udHJhY3QnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBSZW1vdGUgTWludGVyJywgbGluazogJy9ndWlkZXMvd2ViZ2wtZ3VpZGUjNC1kZXBsb3ktYS1yZW1vdGUtbWludGVyLS1taW50LWluLWdhbWUtYWNoaWV2ZW1lbnQtdG9rZW5zJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTGV2ZXJhZ2UgSXRlbXMgSW4tZ2FtZScsIGxpbms6ICcvZ3VpZGVzL3dlYmdsLWd1aWRlIzUtbGV2ZXJhZ2UtaXRlbXMtaW4tZ2FtZScgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0J1cm4gSW4tZ2FtZSBBY2hpZXZlbWVudCBUb2tlbnMnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM2LWJ1cm4taW4tZ2FtZS1hY2hpZXZlbWVudC10b2tlbnMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICcoT3B0aW9uYWwpIEludGVncmF0ZSBFbWJlZGRlZCBXYWxsZXQgSW50byBTZXF1ZW5jZSBLaXQnLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZSM3LW9wdGlvbmFsLWludGVncmF0ZS1lbWJlZGRlZC13YWxsZXQtaW50by1zZXF1ZW5jZS1raXQnIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkIGEgVW5pdHkgR2FtZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL2plbGx5LWZvcmVzdC11bml0eS1ndWlkZScsXG4gICAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvZ3VpZGVzL2plbGx5LWZvcmVzdC11bml0eS1ndWlkZWUjaW50cm8tdG8tamVsbHktZm9yZXN0JyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQnVpbGQgYSBHYW1lIExvb3AnLCBsaW5rOiAnL2d1aWRlcy9qZWxseS1mb3Jlc3QtdW5pdHktZ3VpZGUjYnVpbGQtYS1nYW1lLWxvb3AnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdJbnRlZ3JhdGUgRW1iZWRkZWQgV2FsbGV0cycsIGxpbms6ICcvZ3VpZGVzL2plbGx5LWZvcmVzdC11bml0eS1ndWlkZSNpbnRlZ3JhdGUtc29jaWFsLXNpZ24taW4tYW5kLXNlcXVlbmNlcy1lbWJlZGRlZC13YWxsZXQtc29sdXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgQ29sbGVjdGlibGVzJywgbGluazogJy9ndWlkZXMvamVsbHktZm9yZXN0LXVuaXR5LWd1aWRlI2RlcGxveS1hLWNvbGxlY3RpYmxlcy1jb250cmFjdCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSBSZW1vdGUgTWludGVyJywgbGluazogJy9ndWlkZXMvamVsbHktZm9yZXN0LXVuaXR5LWd1aWRlI2RlcGxveS1hLXJlbW90ZS1taW50ZXInfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ01pbnRpbmcgVG9rZW5zIHRvIEludmVudG9yeScsIGxpbms6ICcvZ3VpZGVzL2plbGx5LWZvcmVzdC11bml0eS1ndWlkZSNtaW50LWluLWdhbWUtdG9rZW5zLXRvLXRoZS1wbGF5ZXJzLWludmVudG9yeScgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1B1cmNoYXNlIENvbGxlY3RpYmxlcyB3aXRoIEVSQzIwIFRva2VucycsIGxpbms6ICcvZ3VpZGVzL2plbGx5LWZvcmVzdC11bml0eS1ndWlkZSNidXJuLWluLWdhbWUtdG9rZW5zLWluLWV4Y2hhbmdlLWZvci1vdGhlcnMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdCdWlsZGluZyBhbiBJbi1nYW1lIFNob3AnLCBsaW5rOiAnL2d1aWRlcy9qZWxseS1mb3Jlc3QtdW5pdHktZ3VpZGUjYnVpbGRpbmctdGhlLXNob3AtcGFnZXMtYW5kLXNldHRpbmctdGhlLW1pbnRpbmctcmVxdWlyZW1lbnRzJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTGV2ZXJhZ2UgUHVyY2hhc2VkIEl0ZW1zIEluLWdhbWUnLCBsaW5rOiAnL2d1aWRlcy9qZWxseS1mb3Jlc3QtdW5pdHktZ3VpZGUjbGV2ZXJhZ2UtcHVyY2hhc2VkLWl0ZW1zLWluLWdhbWUnIH0sXG4gICAgICAgICAgLy8gXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0J1aWxkaW5nIFRyYW5zYWN0aW9uIEhlYXZ5IEdhbWVzIHdpdGggVW5pdHknLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9idWlsZGluZy10cmFuc2FjdGlvbi1oZWF2eS1nYW1lcy13aXRoLXVuaXR5JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIb3cgdG8gc2VsbCBPbi1DaGFpbiBJdGVtcyBpbiB5b3VyIFVucmVhbCBQcm9qZWN0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvdW5yZWFsLXByaW1hcnktc2FsZXMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdyB0byBkbyBQcmltYXJ5IFNhbGVzIGZvciBPbi1DaGFpbiBJdGVtcyBpbiBVbml0eScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3VuaXR5LXByaW1hcnktc2FsZXMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdyB0byBidWlsZCBhIEdhbWUgd2l0aCBVbnJlYWwgRW5naW5lJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbGluazogJy9ndWlkZXMvdW5yZWFsLWV3LWd1aWRlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIENvbGxlY3RpYmxlIE1pbnRpbmcgU2VydmljZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MnLFxuICAgICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzI21pbnQtY29sbGVjdGlibGVzLXVzaW5nLWEtZ2FzbGVzcy1zZXJ2ZXJsZXNzLXRyYW5zYWN0aW9ucy1hcGknLCBtYXRjaDogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyNtaW50LWNvbGxlY3RpYmxlcy11c2luZy1hLWdhc2xlc3Mtc2VydmVybGVzcy10cmFuc2FjdGlvbnMtYXBpJ30sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdTZXR1cCBDbG91ZGZsYXJlIEVudmlyb25tZW50JywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMxLXNldHVwLWNsb3VkZmxhcmUtZW52aXJvbm1lbnQtd2l0aC13cmFuZ2xlci1jbGktYW5kLWRlcGxveS1hLXRlc3QnLCBtYXRjaDogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMxLXNldHVwLWNsb3VkZmxhcmUtZW52aXJvbm1lbnQtd2l0aC13cmFuZ2xlci1jbGktYW5kLWRlcGxveS1hLXRlc3QnfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0RlcGxveSwgU3BvbnNvciAmIFVwZGF0ZSBNZXRhZGF0YSBGb3IgYW4gRVJDMTE1NScsIGxpbms6ICcvZ3VpZGVzL21pbnQtY29sbGVjdGlibGVzLXNlcnZlcmxlc3MjMi1kZXBsb3ktc3BvbnNvci1hbmQtdXBkYXRlLW1ldGFkYXRhLWZvci1hbi1lcmMxMTU1LWNvbnRyYWN0LXdpdGgtc2VxdWVuY2UtYnVpbGRlcid9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnVXNlIEV0aEF1dGhQcm9vZiB0byBQcmV2ZW50IEVPQSBERG9TJywgbGluazogJy9ndWlkZXMvbWludC1jb2xsZWN0aWJsZXMtc2VydmVybGVzcyMzLXVzZS1ldGhhdXRocHJvb2YtdG8tcHJldmVudC1lb2EtZGRvcycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ01pbnQgYSBDb2xsZWN0aWJsZSBUbyBXYWxsZXQnLCBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzIzQtbWludC1hLWNvbGxlY3RpYmxlLXRvLXdhbGxldCcgfSxcbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTWFuYWdlIENvbGxlY3Rpb24gTWV0YWRhdGEnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZScsXG4gICAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ09idGFpbiBhIFNlY3JldCBBUEkgS2V5JywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjMS1vYnRhaW4tYS1zZWNyZXQtYXBpLWtleSd9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQ3JlYXRlIENvbGxlY3Rpb24nLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSMyLWNyZWF0ZS1jb2xsZWN0aW9uLWZyb20tYS1jdXJsLXJlcXVlc3QnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdDcmVhdGUgVG9rZW4nLCBsaW5rOiAnL2d1aWRlcy9tZXRhZGF0YS1ndWlkZSMzLWNyZWF0ZS10b2tlbi11c2luZy10b2tlbmlkJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQ3JlYXRlIEFzc2V0JywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNC1jcmVhdGUtYXNzZXQtdXNpbmctdG9rZW5pZCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1N0b3JlIGFuIEltYWdlJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNS1zdG9yZS1pbWFnZS1hc3NldCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1VwZGF0ZSB0byBOb24tcHJpdmF0ZScsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzYtdXBkYXRlLW5vbi1wcml2YXRlLXRva2VuJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnUHVibGlzaCBDb2xsZWN0aW9uJywgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUjNy1wdWJsaXNoLWNvbGxlY3Rpb24tZnJvbS1hLWN1cmwtcmVxdWVzdCcgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1JlbmRlciBBc3NldCBmcm9tIEFQSScsIGxpbms6ICcvZ3VpZGVzL21ldGFkYXRhLWd1aWRlIzgtcmVuZGVyLWFzc2V0LWZyb20tYXBpLXB1YmxpY2x5JyB9LFxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIFRyZWFzdXJlIENoZXN0IHdpdGggQUkgTWludGluZycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3RyZWFzdXJlLWNoZXN0LWd1aWRlJyxcbiAgICAgICAgICAvLyBpdGVtczogW1xuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnU2VxdWVuY2UgQnVpbGRlciBDb25zb2xlIFNpZ251cCAmIFByb2plY3QgQ3JlYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzEtYnVpbGRlci1jb25zb2xlLXNpZ251cC0tcHJvamVjdC1jcmVhdGlvbicgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0FjY2VzcyBLZXkgTWFuYWdlbWVudCcsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjMi1hY2Nlc3Mta2V5LW1hbmFnZW1lbnQnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdTZXF1ZW5jZSBLaXQgaW50ZWdyYXRpb24nLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzMtc2VxdWVuY2Uta2l0LWludGVncmF0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnaWZyYW1lLXRvLURhcHAgQ29tbXVuaWNhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNC1pZnJhbWUtdG8tZGFwcC1jb21tdW5pY2F0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnRGVwbG95IGEgQ29udHJhY3QgJiBTcG9uc29yIEdhcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNS1kZXBsb3ktYS1jb250cmFjdC0tc3BvbnNvci1nYXMnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdEZXBsb3kgYSBDbG91ZGZsYXJlIFdvcmtlcicsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNi1kZXBsb3ktYS1jbG91ZGZsYXJlLXdvcmtlcicgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ0dlbmVyYXRpbmcgQUkgUHJvbXB0cyAmIEltYWdlcycsIGxpbms6ICcvZ3VpZGVzL2xvb3Rib3gtZ3VpZGUjNy1nZW5lcmF0aW5nLWFpLXByb21wdHMtLWltYWdlcycgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1N0b3JlIE1lZGlhIFRvIFNlcXVlbmNlIE1ldGFkYXRhIFNlcnZpY2UnLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzgtc3RvcmUtbWVkaWEtdG8tc2VxdWVuY2UtbWV0YWRhdGEtc2VydmljZScgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ1NlY3VyaW5nIFlvdXIgQ2xvdWRmbGFyZSBXb3JrZXInLCBsaW5rOiAnL2d1aWRlcy9sb290Ym94LWd1aWRlIzktc2VjdXJpbmcteW91ci1jbG91ZGZsYXJlLXdvcmtlcicgfSxcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJyhPcHRpb25hbCkgTmFpdmUgTWludCBSZXN0cmljdGlvbiBQZXIgV2FsbGV0JywgbGluazogJy9ndWlkZXMvbG9vdGJveC1ndWlkZSMxMC1vcHRpb25hbC1uYWl2ZS1taW50LXJlc3RyaWN0aW9uLXBlci13YWxsZXQnIH0sXG5cbiAgICAgICAgICAvLyBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQnVpbGQgYSBCYWNrZW5kIFRyYW5zYWN0aW9uIFNlcnZpY2UnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9idWlsZGluZy1yZWxheWluZy1zZXJ2ZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0xldmVyYWdlIFNlcXVlbmNlIEFuYWx5dGljcyBBUEkgaW4gRHVuZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL2FuYWx5dGljcy1ndWlkZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQnVpbGQgYW4gRW1iZWRkZWQgV2FsbGV0IExpbmtpbmcgU2VydmljZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvbGluay13YWxsZXRzL2ludGVncmF0aW9uLWd1aWRlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIEN1c3RvbSBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZScsXG4gICAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgICAvLyAgIHsgdGV4dDogJ01pbnRpbmcnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjMS1taW50aW5nJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnV2FsbGV0IEF1dGhlbnRpY2F0aW9uJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzItd2FsbGV0LWF1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnQmxvY2tjaGFpbiBRdWVyaWVzJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzMtYmxvY2tjaGFpbi1xdWVyaWVzJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnTXVsdGktd2FsbGV0IHR5cGVzJywgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlIzQtbXVsdGktd2FsbGV0LXR5cGVzJyB9LFxuICAgICAgICAgIC8vICAgeyB0ZXh0OiAnUmVxdWVzdCBDcmVhdGlvbicsIGxpbms6ICcvZ3VpZGVzL2N1c3RvbS1tYXJrZXRwbGFjZSM1LXJlcXVlc3QtY3JlYXRpb24nIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICdPcmRlciBBY2NlcHRpbmcnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjNi1vcmRlci1hY2NlcHRpbmcnIH0sXG4gICAgICAgICAgLy8gICB7IHRleHQ6ICcoT3B0aW9uYWwpIEVuYWJsZSBFbWJlZGRlZCBXYWxsZXQnLCBsaW5rOiAnL2d1aWRlcy9jdXN0b20tbWFya2V0cGxhY2UjNy1vcHRpb25hbC1pbnRlZ3JhdGUtZW1iZWRkZWQtd2FsbGV0LWludG8tc2VxdWVuY2Uta2l0JyB9LFxuICAgICAgICAgIC8vIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdTZWxsIHlvdXIgR2FtZSBJdGVtcyB2aWEgYSBXZWIgU2hvcCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3ByaW1hcnktc2FsZXMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NyZWF0ZSBORlQgRHJvcCBTYWxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGVzL3ByaW1hcnktZHJvcC1zYWxlcy1lcmM3MjEnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdJbnRlZ3JhdGUgdG9rZW4gcmV3YXJkcyBpbnRvIHlvdXIgRGlzY29yZCBzZXJ2ZXInLFxuICAgIC8vICAgbGluazogJy9ndWlkZXMvZGlzY29yZCdcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdUZW1wbGF0ZXMnLFxuICAgICAgbGluazogJy9ndWlkZXMvdGVtcGxhdGUtb3ZlcnZpZXcnLFxuICAgICAgLy8gaXRlbXM6IFtcbiAgICAgIC8vICAgeyB0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0IERlbW8nLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtZW1iZWRkZWQtd2FsbGV0JyB9LFxuICAgICAgLy8gICB7IHRleHQ6ICdCdWlsZCBhIEJhY2tlbmQgVHJhbnNhY3Rpb24gTWFuYWdlcicsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlcy9idWlsZGluZy1yZWxheWluZy1zZXJ2ZXInIH1cbiAgICAgIC8vICAgLy8geyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJIERlbW8nLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvdGVtcGxhdGUtbWFya2V0cGxhY2UtYXBpJyB9XG4gICAgICAvLyBdXG4gICAgfSxcbiAgXSxcblxuICAvLyBTREtzXG4gICcvc2RrJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHYW1lIEVuZ2luZScsXG4gICAgICAvLyBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1VuaXR5JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbWF0Y2g6ICcvc2RrL3VuaXR5L292ZXJ2aWV3JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bml0eS9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NldHVwJywgbGluazogJy9zZGsvdW5pdHkvc2V0dXAnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBdXRoZW50aWNhdGlvbicsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnSW50cm9kdWN0aW9uJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vaW50cm8nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRW1haWwgKyBPVFAnLCBsaW5rOiAnL3Nkay91bml0eS9hdXRoZW50aWNhdGlvbi9lbWFpbCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPSURDIC0gU29jaWFsIFNpZ24gSW4nLCBsaW5rOiAnL3Nkay91bml0eS9hdXRoZW50aWNhdGlvbi9vaWRjJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1BsYXlGYWInLCBsaW5rOiAnL3Nkay91bml0eS9hdXRoZW50aWNhdGlvbi9wbGF5ZmFiJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0d1ZXN0JywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vZ3Vlc3QnIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0ZlZGVyYXRlZCBBY2NvdW50cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3Nkay91bml0eS9hdXRoZW50aWNhdGlvbi9mZWRlcmF0ZWQtYWNjb3VudHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV3JpdGUgdG8gYmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5L3dyaXRlLXRvLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWFkIGZyb20gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VuaXR5L3JlYWQtZnJvbS1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2lnbiBNZXNzYWdlcycsIGxpbms6ICcvc2RrL3VuaXR5L3NpZ24tbWVzc2FnZXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWNvdmVyaW5nIFNlc3Npb25zJywgbGluazogJy9zZGsvdW5pdHkvcmVjb3ZlcmluZy1zZXNzaW9ucycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1Nlc3Npb24gTWFuYWdlbWVudCcsIGxpbms6ICcvc2RrL3VuaXR5L3Nlc3Npb24tbWFuYWdlbWVudCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09uLVJhbXAgRnVuZHMgdmlhIENyZWRpdCBDYXJkJywgbGluazogJy9zZGsvdW5pdHkvb25ib2FyZC11c2VyLWZ1bmRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWFya2V0cGxhY2UnLCBsaW5rOiAnL3Nkay91bml0eS9tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0Nvbm5lY3Qgd2l0aCBFeHRlcm5hbCBXYWxsZXRzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdW5pdHkvY29ubmVjdGluZy1leHRlcm5hbC13YWxsZXRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdVcGdyYWRpbmcgZnJvbSB2MiB0byB2MycsIGxpbms6ICcvc2RrL3VuaXR5L3YyLXRvLXYzLXVwZ3JhZGUtZ3VpZGUnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXYWxsZXQgVUknLCBsaW5rOiAnL3Nkay91bml0eS93YWxsZXQtdWknIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdEZXBsb3kgQ29udHJhY3RzJywgbGluazogJy9zZGsvdW5pdHkvZGVwbG95LWNvbnRyYWN0cycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0FkdmFuY2VkIEJsb2NrY2hhaW4gSW50ZXJhY3Rpb25zJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2ludHJvZHVjdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXYWxsZXRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvd2FsbGV0cycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDbGllbnRzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvY2xpZW50cycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdUcmFuc2ZlcnMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC90cmFuc2ZlcnMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ29udHJhY3RzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvY29udHJhY3RzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1Rva2VucycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3Rva2VucycgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdVbnJlYWwnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBtYXRjaDogJy9zZGsvdW5yZWFsL292ZXJ2aWV3JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay91bnJlYWwvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvaW5zdGFsbGF0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVXBncmFkaW5nJywgbGluazogJy9zZGsvdW5yZWFsL3VwZ3JhZGluZycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NldHVwJywgbGluazogJy9zZGsvdW5yZWFsL3NldHVwJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRpb24nLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvc2RrL3VucmVhbC9hdXRoZW50aWNhdGlvbi9pbnRybycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdFbWFpbCArIE9UUCcsIGxpbms6ICcvc2RrL3VucmVhbC9hdXRoZW50aWNhdGlvbi9lbWFpbCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPSURDIC0gU29jaWFsIFNpZ24gSW4nLCBsaW5rOiAnL3Nkay91bnJlYWwvYXV0aGVudGljYXRpb24vb2lkYycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdQbGF5RmFiJywgbGluazogJy9zZGsvdW5yZWFsL2F1dGhlbnRpY2F0aW9uL3BsYXlmYWInIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnR3Vlc3QnLCBsaW5rOiAnL3Nkay91bnJlYWwvYXV0aGVudGljYXRpb24vZ3Vlc3QnIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0ZlZGVyYXRlZCBBY2NvdW50cycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3Nkay91bnJlYWwvYXV0aGVudGljYXRpb24vZmVkZXJhdGVkLWFjY291bnRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlcXVlbmNlIFdhbGxldCcsIGxpbms6ICcvc2RrL3VucmVhbC9hcGknIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2luZyBTZXNzaW9uJywgbGluazogJy9zZGsvdW5yZWFsL21hbmFnaW5nLXNlc3Npb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWFkIGZyb20gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VucmVhbC9yZWFkLWZyb20tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dyaXRlIHRvIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bnJlYWwvd3JpdGUtdG8tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dvcmtpbmcgd2l0aCBCbHVlcHJpbnQnLCBsaW5rOiAnL3Nkay91bnJlYWwvd29ya2luZy13aXRoLWJsdWVwcmludCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ09uLVJhbXAgRnVuZHMgdmlhIENyZWRpdCBDYXJkJywgbGluazogJy9zZGsvdW5yZWFsL29uYm9hcmQtdXNlci1mdW5kcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0FkdmFuY2VkIEJsb2NrY2hhaW4gSW50ZXJhY3Rpb25zJywgbGluazogJy9zZGsvdW5yZWFsL2FkdmFuY2VkJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUGFja2FnaW5nJywgbGluazogJy9zZGsvdW5yZWFsL3BhY2thZ2luZycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNb2JpbGUnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgLy8geyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc2RrL2FuZHJvaWQnIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmVhY3QgTmF0aXZlJywgbGluazogJy9zZGsvbW9iaWxlJyB9LFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAge1xuICAgICAgdGV4dDogJ1dlYjMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb25uZWN0IFdhbGxldCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL2Nvbm5lY3Qtd2FsbGV0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9hdXRoLWFkZHJlc3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpZ25pbmcgJiBWZXJpZnlpbmcgTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zaWduLW1lc3NhZ2UnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdOby13YWxsZXQgY29uZmlybWF0aW9uIHNpZ25hdHVyZXMnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZXNzaW9uLWtleXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmRpbmcgVHJhbnNhY3Rpb25zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC10cmFuc2FjdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbmRpbmcgRVJDLTIwIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjMjAnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kaW5nIEVSQy03MjEgKE5GVCkgVG9rZW5zJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1lcmM3MjEnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIEVSQy0xMTU1IChDb2xsZWN0aWJsZSkgVG9rZW5zJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1lcmMxMTU1JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZW5kaW5nIGEgQmF0Y2ggb2YgVHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2VuZC1iYXRjaC10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkaW5nIEJhY2tlbmRzIHdpdGggU2VxdWVuY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9idWlsZGluZy1iYWNrZW5kcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbm5lY3RvcnMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2FnbWknLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2FnbWknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmFpbmJvd0tpdCcsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9yYWluYm93LWtpdCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXZWIzIE9uYm9hcmQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViMy1vbmJvYXJkJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dlYjMgUmVhY3QgVjYnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViMy1yZWFjdC12NicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXZWIzTW9kYWwnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvd2ViM21vZGFsJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvY29ubmVjdG9ycy9GQVEnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnR28nLFxuICAgICAgICAgIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JyxcbiAgICAgICAgICBpdGVtczogW3sgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnIH1dLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDb21tb24gUXVlc3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnSG93IGRvIEkgZG8gc2lnbmF0dXJlIHZhbGlkYXRpb24/JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvYXV0aC1hZGRyZXNzJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8gYXBpc1xuICAnL2FwaSc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnVHJhbnNhY3Rpb25zJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnRW5kcG9pbnRzJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2VuZHBvaW50cycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnRmV0Y2ggRmVlIE9wdGlvbnMnLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvZXhhbXBsZXMvZmV0Y2gtZmVlLW9wdGlvbnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9leGFtcGxlcy9zZW5kLXRyYW5zYWN0aW9ucycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0ZldGNoIFRyYW5zYWN0aW9uIFJlY2VpcHRzJyxcbiAgICAgICAgICAgICAgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL2ZldGNoLXRyYW5zYWN0aW9uLXJlY2VpcHRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnSW5kZXhlcicsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2FwaS9pbmRleGVyL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnRW5kcG9pbnRzJywgbGluazogJy9hcGkvaW5kZXhlci9lbmRwb2ludHMnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZldGNoIFRva2VucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvZmV0Y2gtdG9rZW5zJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVHJhbnNhY3Rpb24gSGlzdG9yeScsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdHJhbnNhY3Rpb24taGlzdG9yeScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1VuaXF1ZSBUb2tlbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3VuaXF1ZS10b2tlbnMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdUcmFuc2FjdGlvbiBIaXN0b3J5IFRva2VuIENvbnRyYWN0JyxcbiAgICAgICAgICAgICAgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy90cmFuc2F0aW9uLWhpc3RvcnktdG9rZW4tY29udHJhY3QnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ05hdGl2ZSBOZXR3b3JrIEJhbGFuY2UnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL25hdGl2ZS1uZXR3b3JrLWJhbGFuY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ01ldGFkYXRhIFRpcHMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL21ldGFkYXRhLXRpcHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXZWJob29rcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvd2ViaG9vay1saXN0ZW5lcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1N1YnNjcmlwdGlvbnMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3N1YnNjcmlwdGlvbnMnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQW5hbHl0aWNzJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRW5kcG9pbnRzJywgbGluazogJy9hcGkvYW5hbHl0aWNzL2VuZHBvaW50cycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9leGFtcGxlcy93YWxsZXRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWFya2V0cGxhY2VzJywgbGluazogJy9hcGkvYW5hbHl0aWNzL2V4YW1wbGVzL21hcmtldHBsYWNlJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ01ldGFkYXRhJyxcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvYXBpL21ldGFkYXRhL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdFbmRwb2ludHMnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9lbmRwb2ludHMnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1Rva2VuIE1ldGFkYXRhJywgbGluazogJy9hcGkvbWV0YWRhdGEvdG9rZW4tbWV0YWRhdGEnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb250cmFjdCBNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhL2NvbnRyYWN0LW1ldGFkYXRhJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUkVTVCBBUEknLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9yZXN0LWFwaScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdJbmZyYXN0cnVjdHVyZScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9pbmZyYXN0cnVjdHVyZS9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRW5kcG9pbnRzJywgbGluazogJy9hcGkvaW5mcmFzdHJ1Y3R1cmUvZW5kcG9pbnRzJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnRW5kcG9pbnRzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZW5kcG9pbnRzJyB9LFxuXG4gICAgICAgIC8vIHsgdGV4dDogJ1NjaGVtYScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL3NjaGVtYScgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvYXBpJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL29yZGVyYm9vay10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDcmVhdGluZyBNYXJrZXQgT3JkZXJzICYgTGlzdGluZ3MnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9vcmRlcmJvb2stdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXQgVG9wIE9yZGVycycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC10b3Atb3JkZXJzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IE9yZGVyYm9vaycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC1vcmRlcmJvb2snIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXQgVXNlciBBY3Rpdml0aWVzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LXVzZXItYWN0aXZpdGllcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9ub2RlLWdhdGV3YXknIH1dLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8gU3VwcG9ydFxuICAnL3N1cHBvcnQnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1N1cHBvcnQnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnU3VwcG9ydCcsIGxpbms6ICcvc3VwcG9ydCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ2hhbmdlbG9nJywgbGluazogJ2h0dHBzOi8vMHhzZXF1ZW5jZS5mZWF0dXJlYmFzZS5hcHAvJyB9LFxuICAgICAgICB7IHRleHQ6ICdSZXN0cmljdGVkIFJlZ2lvbnMnLCBsaW5rOiAnL3N1cHBvcnQvcmVzdHJpY3RlZC1yZWdpb25zJyB9LFxuICAgICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICAgIHsgdGV4dDogXCJXZSdyZSBoaXJpbmchXCIsIGxpbms6ICdodHRwczovL2hvcml6b24uaW8vY2FyZWVycycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyIEFkbWluJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1Byb2plY3QgTWFuYWdlbWVudCcsIGxpbms6ICcvc3VwcG9ydC9idWlsZGVyL3Byb2plY3QtbWFuYWdlbWVudCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnUHJvamVjdCBTZXR0aW5ncycsIGxpbms6ICcvc3VwcG9ydC9idWlsZGVyL3Byb2plY3Qtc2V0dGluZ3MnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59IGFzIFNpZGViYXJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjs7O0FDRXRCLElBQU0sU0FBUztBQUFBLEVBQ3BCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxFQUFFLE1BQU0sU0FBUyxNQUFNLDZCQUE2QixPQUFPLDRCQUE0QjtBQUFBO0FBQUEsSUFFekY7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFVBQVUsTUFBTSwwQkFBMEIsT0FBTyx5QkFBeUI7QUFBQSxNQUNsRixFQUFFLE1BQU0sYUFBYSxNQUFNLDZCQUE2QixPQUFPLDRCQUE0QjtBQUFBLElBQzdGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1B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TUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsZ0JBQ0w7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0EsRUFBRSxNQUFNLFdBQVcsTUFBTSxzREFBc0Q7QUFBQSxnQkFDL0U7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixXQUFXO0FBQUEsY0FDWCxPQUFPO0FBQUEsZ0JBQ0w7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFB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QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUVI7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVdSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBY1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFVUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gs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
