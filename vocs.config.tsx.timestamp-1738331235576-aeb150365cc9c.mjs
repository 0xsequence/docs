// vocs.config.tsx
import { defineConfig } from "file:///Users/gabi/Documents/Work/Sequence/docs/node_modules/.pnpm/vocs@https+++codeload.github.com+0xsequence+vocs+tar.gz+09f0f67135a711bba973e7d452a5b8854223e_ruzfammxbxvu45nrvpzvukvxzm/node_modules/vocs/_lib/index.js";

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
      { text: "Unreal", link: "/sdk/unreal/introduction", match: "/sdk/unreal/introduction" },
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
      {
        text: "Builder API",
        link: "/api/builder/overview",
        match: "/api/builder/overview"
      },
      { text: "Node Gateway", link: "/api/node-gateway", match: "/api/node-gateway" }
    ]
  },
  {
    text: "Support",
    items: [
      { text: "Support", link: "/support" },
      { text: "Integrated Chains", link: "/solutions/technical-references/chain-support/" },
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
          text: "Ecosystem Wallets",
          collapsed: false,
          items: [
            { text: "Overview", link: "/solutions/wallets/ecosystem/overview" },
            { text: "Configuration", link: "/solutions/wallets/ecosystem/configuration" },
            { text: "Cross-App Integration", link: "/solutions/wallets/ecosystem/cross-app" }
          ]
        },
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
                  text: "Multi-account Support",
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
                  text: "Backend Verification",
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
                { text: "Checkout", link: "/solutions/wallets/sequence-kit/checkout" },
                { text: "Smart Swaps", link: "/solutions/wallets/sequence-kit/smart-swaps" },
                { text: "On-ramp", link: "/solutions/wallets/sequence-kit/on-ramp" }
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
              collapsed: true,
              items: [
                {
                  text: "Overview",
                  link: "/solutions/marketplaces/white-label-marketplace/overview",
                  collapsed: true
                },
                {
                  text: "Guide",
                  link: "/solutions/marketplaces/white-label-marketplace/guide",
                  collapsed: true
                },
                {
                  text: "Video Walkthrough",
                  link: "/solutions/marketplaces/white-label-marketplace/video-walkthrough",
                  collapsed: true
                }
              ]
            },
            {
              text: "Build your Custom Marketplace",
              collapsed: true,
              items: [
                { text: "Overview", link: "/solutions/marketplaces/orderbook/overview" },
                { text: "Starter Template", link: "/solutions/marketplaces/orderbook/starter" }
              ]
            }
          ]
        },
        {
          text: "Sequence Pay",
          collapsed: false,
          items: [
            {
              text: "Overview",
              link: "/solutions/payments/overview"
            },
            { text: "Checkout", link: "/solutions/wallets/sequence-kit/checkout" },
            { text: "Smart Swaps", link: "/solutions/wallets/sequence-kit/smart-swaps" },
            { text: "On-ramp", link: "/solutions/wallets/sequence-kit/on-ramp" }
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
          text: "Game Developers",
          collapsed: true,
          items: [
            { text: "Build a Game with WebGL", collapsed: true, link: "/guides/webgl-guide" },
            {
              text: "Build a Unity Game",
              collapsed: true,
              link: "/guides/jelly-forest-unity-guide"
            },
            {
              text: "Building Transaction Heavy Games with Unity",
              collapsed: true,
              link: "/guides/building-transaction-heavy-games-with-unity"
            },
            {
              text: "How to build a Game with Unreal Engine",
              collapsed: true,
              link: "/guides/unreal-ew-guide"
            },
            {
              text: "Using Unity IAP to Sell NFTs",
              collapsed: true,
              link: "/guides/using-unity-iap-to-sell-nfts"
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
              text: "Build a Telegram Mini-Game in Unity",
              collapsed: true,
              link: "/guides/unity-webgl-telegram"
            },
            {
              text: "Build a Telegram Mini-App with Sequence",
              collapsed: true,
              link: "/guides/telegram-integration"
            }
          ]
        },
        {
          text: "Blockchain Integrations",
          collapsed: true,
          items: [
            {
              text: "Build a Collectible Minting Service",
              collapsed: true,
              link: "/guides/mint-collectibles-serverless"
            },
            { text: "Manage Collection Metadata", collapsed: true, link: "/guides/metadata-guide" },
            {
              text: "Build a Treasure Chest with AI Minting",
              collapsed: true,
              link: "/guides/treasure-chest-guide"
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
            }
          ]
        },
        {
          text: "Marketplaces & Primary Sales",
          collapsed: true,
          items: [
            {
              text: "Build a Custom Marketplace",
              collapsed: true,
              link: "/guides/custom-marketplace"
            },
            {
              text: "Sell your ERC-1155 Game Items via a Web Shop",
              collapsed: true,
              link: "/guides/primary-sales"
            },
            {
              text: "Create NFT Drop Sales",
              collapsed: true,
              link: "/guides/primary-drop-sales-erc721"
            }
          ]
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
                { text: "Email OTP", link: "/sdk/unity/authentication/email" },
                { text: "Social Sign In", link: "/sdk/unity/authentication/oidc" },
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
            {
              text: "Peer to Peer Trading / Marketplace",
              collapsed: false,
              items: [
                { text: "Introduction", link: "/sdk/unity/marketplace/intro" },
                { text: "Reading Orders", link: "/sdk/unity/marketplace/reading-orders" },
                { text: "Filling Orders", link: "/sdk/unity/marketplace/filling-orders" },
                { text: "Checkout UI", link: "/sdk/unity/marketplace/checkout-ui" }
              ]
            },
            { text: "Currency Swaps", link: "/sdk/unity/currency-swaps" },
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
          match: "/sdk/unreal/introduction",
          items: [
            { text: "Introduction", link: "/sdk/unreal/introduction" },
            { text: "Quickstart", link: "/sdk/unreal/quickstart" },
            { text: "Installation", link: "/sdk/unreal/installation" },
            { text: "Configuration", link: "/sdk/unreal/configuration" },
            { text: "Blueprint Subsystems", link: "/sdk/unreal/subsystems" },
            { text: "Bootstrap your Game", link: "/sdk/unreal/bootstrap_game" },
            { text: "Sign-In UI", link: "/sdk/unreal/user_interfaces" },
            { text: "Authenticate Users", link: "/sdk/unreal/authentication" },
            { text: "Write to Blockchain", link: "/sdk/unreal/write-to-blockchain" },
            { text: "Read from Blockchain", link: "/sdk/unreal/read-from-blockchain" },
            { text: "On-Ramp via Credit Card", link: "/sdk/unreal/onboard-user-funds" },
            { text: "Advanced Blockchain Interactions", link: "/sdk/unreal/advanced" },
            { text: "Platform Requirements", link: "/sdk/unreal/platforms" }
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
        { text: "API References", link: "/api/transactions/endpoints" },
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
        { text: "API References", link: "/api/indexer/endpoints" },
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
        { text: "API References", link: "/api/analytics/endpoints" },
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
        { text: "API References", link: "/api/metadata/endpoints" },
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
        { text: "API References", link: "/api/infrastructure/endpoints" }
      ]
    },
    {
      text: "Builder",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/builder/overview" },
        { text: "API References", link: "/api/builder/endpoints" }
      ]
    },
    {
      text: "Marketplace",
      collapsed: false,
      items: [
        { text: "Overview", link: "/api/marketplace/overview" },
        { text: "API References", link: "/api/marketplace/endpoints" },
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
import ViteYaml from "file:///Users/gabi/Documents/Work/Sequence/docs/node_modules/.pnpm/@modyfi+vite-plugin-yaml@1.1.0_rollup@4.32.1_vite@5.4.14_@types+node@22.12.0_/node_modules/@modyfi/vite-plugin-yaml/dist/index.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgIm5hdi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndm9jcydcbmltcG9ydCB7IHNpZGViYXIsIHRvcE5hdiB9IGZyb20gJy4vbmF2J1xuaW1wb3J0IFZpdGVZYW1sIGZyb20gJ0Btb2R5Zmkvdml0ZS1wbHVnaW4teWFtbCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdTZXF1ZW5jZScsXG5cbiAgaWNvblVybDogeyBsaWdodDogJy9pbWcvZmF2aWNvbi5pY28nLCBkYXJrOiAnL2ltZy9mYXZpY29uLmljbycgfSxcbiAgbG9nb1VybDoge1xuICAgIGxpZ2h0OiAnL2ltZy9zZXF1ZW5jZS1jb21wb3NpdGUtbGlnaHQuc3ZnJyxcbiAgICBkYXJrOiAnL2ltZy9zZXF1ZW5jZS1jb21wb3NpdGUtZGFyay5zdmcnLFxuICB9LFxuICB2aXRlOiB7XG4gICAgc3NyOiB7XG4gICAgICBub0V4dGVybmFsOiBbJ0Bkb2NzZWFyY2gvcmVhY3QnXSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtWaXRlWWFtbCgpXSxcbiAgfSxcblxuICAvLyByb290RGlyOiAnLicsXG4gIGJhc2VQYXRoOiAnLycsXG5cbiAgdG9wTmF2LFxuICBzaWRlYmFyLFxuXG4gIHRoZW1lOiB7XG4gICAgLy8gYWNjZW50Q29sb3I6IHtcbiAgICAvLyAgIGxpZ2h0OiAnIzQ0MkNBOCcsXG4gICAgLy8gICBkYXJrOiAnIzk5QURFRCcsXG4gICAgLy8gfSxcbiAgICBjb2xvclNjaGVtZTogJ2RhcmsnLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgZm9udEZhbWlseToge1xuICAgICAgICBkZWZhdWx0OiAnSW50ZXInLFxuICAgICAgICAvLyBtb25vOiAnUm9ib3RvIE1vbm8nXG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgIGxpZ2h0OiAnI2YwZjBmMCcsXG4gICAgICAgICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgICB9LFxuICAgICAgICAvLyBiYWNrZ3JvdW5kNToge1xuICAgICAgICAvLyAgIGxpZ2h0OiAnI2RkZGRkZCcsXG4gICAgICAgIC8vICAgZGFyazogJyMxMTExMTEnLFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZERhcms6IHtcbiAgICAgICAgLy8gICBsaWdodDogJyNkZGRkZGQnLFxuICAgICAgICAvLyAgIGRhcms6ICcjMTUxNTE1J1xuICAgICAgICAvLyB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZ2FiaS9Eb2N1bWVudHMvV29yay9TZXF1ZW5jZS9kb2NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZ2FiaS9Eb2N1bWVudHMvV29yay9TZXF1ZW5jZS9kb2NzL25hdi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZ2FiaS9Eb2N1bWVudHMvV29yay9TZXF1ZW5jZS9kb2NzL25hdi50c1wiO2ltcG9ydCB0eXBlIHsgU2lkZWJhciwgVG9wTmF2IH0gZnJvbSAndm9jcydcblxuZXhwb3J0IGNvbnN0IHRvcE5hdiA9IFtcbiAge1xuICAgIHRleHQ6ICdTb2x1dGlvbnMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyJyxcbiAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdPbmJvYXJkJyxcbiAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy93YWxsZXRzL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdNb25ldGl6ZScsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL21vbmV0aXphdGlvbi1vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL3NvbHV0aW9ucy9tb25ldGl6YXRpb24tb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ1Bvd2VyJywgbGluazogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnLCBtYXRjaDogJy9zb2x1dGlvbnMvcG93ZXItb3ZlcnZpZXcnIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdSZXNvdXJjZXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdHdWlkZXMnLCBsaW5rOiAnL2d1aWRlcy9ndWlkZS1vdmVydmlldycsIG1hdGNoOiAnL2d1aWRlcy9ndWlkZS1vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ1RlbXBsYXRlcycsIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JywgbWF0Y2g6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnU0RLcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1VuaXR5JywgbGluazogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnIH0sXG4gICAgICB7IHRleHQ6ICdVbnJlYWwnLCBsaW5rOiAnL3Nkay91bnJlYWwvaW50cm9kdWN0aW9uJywgbWF0Y2g6ICcvc2RrL3VucmVhbC9pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdSZWFjdCcsXG4gICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L292ZXJ2aWV3JyxcbiAgICAgICAgbWF0Y2g6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUeXBlc2NyaXB0JyxcbiAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ0dvJywgbGluazogJy9zZGsvZ28vb3ZlcnZpZXcnLCBtYXRjaDogJy9zZGsvZ28vb3ZlcnZpZXcnIH0sXG4gICAgICAvLyB7IHRleHQ6ICdBbmRyb2lkJywgbGluazogJy9zZGsvYW5kcm9pZCcsIG1hdGNoOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgICAgeyB0ZXh0OiAnTW9iaWxlJywgbGluazogJy9zZGsvbW9iaWxlJywgbWF0Y2g6ICcvc2RrL21vYmlsZScgfSxcbiAgICAgIC8vIHsgdGV4dDogJ2lPUycsIGxpbms6ICcvc2RrL2lPUycsIG1hdGNoOiAnL3Nkay9pT1MnIH1cbiAgICBdLFxuICB9LFxuXG4gIC8vIHJlcGxhY2UgbGlua3MuXG4gIHtcbiAgICB0ZXh0OiAnQVBJcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9ucyBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9hcGkvdHJhbnNhY3Rpb25zL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdBbmFseXRpY3MgQVBJJywgbGluazogJy9hcGkvYW5hbHl0aWNzL292ZXJ2aWV3JywgbWF0Y2g6ICcvYXBpL2FuYWx5dGljcy9vdmVydmlldycgfSxcbiAgICAgIHsgdGV4dDogJ0luZGV4ZXIgQVBJJywgbGluazogJy9hcGkvaW5kZXhlci9vdmVydmlldycsIG1hdGNoOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgQVBJJywgbGluazogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnLCBtYXRjaDogJy9hcGkvbWV0YWRhdGEvb3ZlcnZpZXcnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdNYXJrZXRwbGFjZSBBUEknLFxuICAgICAgICBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL2FwaS9tYXJrZXRwbGFjZS9vdmVydmlldycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnSW5mcmFzdHJ1Y3R1cmUgQVBJJyxcbiAgICAgICAgbGluazogJy9hcGkvaW5mcmFzdHJ1Y3R1cmUvb3ZlcnZpZXcnLFxuICAgICAgICBtYXRjaDogJy9hcGkvaW5mcmFzdHJ1Y3R1cmUvb3ZlcnZpZXcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0J1aWxkZXIgQVBJJyxcbiAgICAgICAgbGluazogJy9hcGkvYnVpbGRlci9vdmVydmlldycsXG4gICAgICAgIG1hdGNoOiAnL2FwaS9idWlsZGVyL292ZXJ2aWV3JyxcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6ICdOb2RlIEdhdGV3YXknLCBsaW5rOiAnL2FwaS9ub2RlLWdhdGV3YXknLCBtYXRjaDogJy9hcGkvbm9kZS1nYXRld2F5JyB9LFxuICAgIF0sXG4gIH0sXG5cbiAge1xuICAgIHRleHQ6ICdTdXBwb3J0JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnU3VwcG9ydCcsIGxpbms6ICcvc3VwcG9ydCcgfSxcbiAgICAgIHsgdGV4dDogJ0ludGVncmF0ZWQgQ2hhaW5zJywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvY2hhaW4tc3VwcG9ydC8nIH0sXG4gICAgICB7IHRleHQ6ICdDaGFuZ2Vsb2cnLCBsaW5rOiAnaHR0cHM6Ly8weHNlcXVlbmNlLmZlYXR1cmViYXNlLmFwcC8nIH0sXG4gICAgICB7IHRleHQ6ICdSZXN0cmljdGVkIFJlZ2lvbnMnLCBsaW5rOiAnL3N1cHBvcnQvcmVzdHJpY3RlZC1yZWdpb25zJyB9LFxuICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgIHsgdGV4dDogJ0ZBUScsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICB7IHRleHQ6IFwiV2UncmUgaGlyaW5nIVwiLCBsaW5rOiAnaHR0cHM6Ly9ob3Jpem9uLmlvL2NhcmVlcnMnIH0sXG4gICAgICB7IHRleHQ6ICdDb250YWN0IFVzJywgbGluazogJ2h0dHBzOi8vc3VwcG9ydC5zZXF1ZW5jZS54eXonIH0sXG4gICAgXSxcbiAgfSxcbl0gYXMgVG9wTmF2XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyID0ge1xuICAvLyBPdmVydmlld1xuICAnL3NvbHV0aW9ucyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9vdmVydmlldycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnR2V0dGluZyBTdGFydGVkJyxcbiAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZ2V0dGluZy1zdGFydGVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdPbmJvYXJkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9vdmVydmlldycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFY29zeXN0ZW0gV2FsbGV0cycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2Vjb3N5c3RlbS9vdmVydmlldycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2Vjb3N5c3RlbS9jb25maWd1cmF0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ3Jvc3MtQXBwIEludGVncmF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lY29zeXN0ZW0vY3Jvc3MtYXBwJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRW1iZWRkZWQgV2FsbGV0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L3F1aWNrc3RhcnQnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZXR1cCcsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDb25maWd1cmF0aW9uJywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9lbWJlZGRlZC13YWxsZXQnIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0dvb2dsZSBTZXR1cCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldC9nb29nbGUtY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQXBwbGUgU2V0dXAnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9lbWJlZGRlZC13YWxsZXQvYXBwbGUtY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnUGxheUZhYiBTZXR1cCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldC9wbGF5ZmFiLWNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1N0eXRjaCBTZXR1cCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2VtYmVkZGVkLXdhbGxldC9zdHl0Y2gtY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnR3Vlc3QgV2FsbGV0IFNldHVwJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZW1iZWRkZWQtd2FsbGV0L2d1ZXN0LXdhbGxldC1jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBdXRoZW50aWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9hdXRoZW50aWNhdGlvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVXNlIFdhbGxldHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvZXhhbXBsZXMvdXNlLXdhbGxldHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ011bHRpLWFjY291bnQgU3VwcG9ydCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9hY2NvdW50LWZlZGVyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ01hbmFnZSBTZXNzaW9ucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy9tYW5hZ2Utc2Vzc2lvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT24tcmFtcCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL29uLXJhbXAnIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0ZlZSBPcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL2ZlZS1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdCYWNrZW5kIFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9leGFtcGxlcy92ZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIFJlY2VpcHRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2V4YW1wbGVzL3RyYW5zYWN0aW9uLXJlY2VpcHRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0FyY2hpdGVjdHVyZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL292ZXJ2aWV3JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdBY3Rpb24gUGF5bG9hZHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL2FjdGlvbi1wYXlsb2FkcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnUmVzcG9uc2UgUGF5bG9hZHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL3Jlc3BvbnNlLXBheWxvYWRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdUcnVzdCBDb250cmFjdCBSZWNvdmVyeSBGbG93JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvZW1iZWRkZWQtd2FsbGV0L2FyY2hpdGVjdHVyZS90cnVzdC1jb250cmFjdC1yZWNvdmVyeS1mbG93JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdFbmNsYXZlIFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9hcmNoaXRlY3R1cmUvZW5jbGF2ZS12ZXJpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0ludGVudHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvYXJjaGl0ZWN0dXJlL2ludGVudHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTWlncmF0aW5nIHRvIFNlcXVlbmNlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9lbWJlZGRlZC13YWxsZXQvbWlncmF0aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2VtYmVkZGVkLXdhbGxldC9mYXEnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdTZXF1ZW5jZSBLaXQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ3VzdG9tIENvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9jdXN0b20tY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgUGF5JyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDaGVja291dCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L2NoZWNrb3V0JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NtYXJ0IFN3YXBzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvc21hcnQtc3dhcHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT24tcmFtcCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L29uLXJhbXAnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDdXN0b20gQ29ubmVjdG9ycycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvc2VxdWVuY2Uta2l0L2N1c3RvbS1jb25uZWN0b3JzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1dhbGxldCBMaW5raW5nJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9saW5rLXdhbGxldHMvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdJbnRlZ3JhdGlvbiBHdWlkZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvbGluay13YWxsZXRzL2ludGVncmF0aW9uLWd1aWRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdVbml2ZXJzYWwgV2FsbGV0JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9xdWlja3N0YXJ0JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0Nvbm5lY3QgV2FsbGV0JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9leGFtcGxlcy9jb25uZWN0LXdhbGxldCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzIHdpdGggTWVzc2FnZSBTaWduYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2F1dGgtYWRkcmVzcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2lnbmluZyAmIFZlcmlmeWluZyBNZXNzYWdlcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2lnbi1tZXNzYWdlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdOby13YWxsZXQgY29uZmlybWF0aW9uIHNpZ25hdHVyZXMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3Nlc3Npb24ta2V5cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBUcmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtdHJhbnNhY3Rpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgRVJDLTIwIFRva2VucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1lcmMyMCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtNzIxIChORlQpIFRva2VucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1lcmM3MjEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1NlbmRpbmcgRVJDLTExNTUgKENvbGxlY3RpYmxlKSBUb2tlbnMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL3NlbmQtZXJjMTE1NScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBhIEJhdGNoIG9mIFRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvZXhhbXBsZXMvc2VuZC1iYXRjaC10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkaW5nIEJhY2tlbmRzIHdpdGggU2VxdWVuY2UnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2J1aWxkaW5nLWJhY2tlbmRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICB7dGV4dDogJ1NlcXVlbmNlIEtpdCcsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9zZXF1ZW5jZS1raXQnfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1N1cHBvcnRlZCBQbGF0Zm9ybXMnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQvcGxhdGZvcm1zJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRmlhdCBPbi1SYW1wcycsIGxpbms6ICcvc29sdXRpb25zL3dhbGxldHMvdW5pdmVyc2FsLXdhbGxldC9maWF0LW9uLXJhbXBzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnS2V5IE1hbmFnZW1lbnQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3VuaXZlcnNhbC13YWxsZXQva2V5LW1hbmFnZW1lbnQnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTW9uZXRpemUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL3NvbHV0aW9ucy9tb25ldGl6YXRpb24tb3ZlcnZpZXcnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTWFya2V0cGxhY2VzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1doaXRlLWxhYmVsIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdPdmVydmlldycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9tYXJrZXRwbGFjZXMvd2hpdGUtbGFiZWwtbWFya2V0cGxhY2Uvb3ZlcnZpZXcnLFxuICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0d1aWRlJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL21hcmtldHBsYWNlcy93aGl0ZS1sYWJlbC1tYXJrZXRwbGFjZS9ndWlkZScsXG4gICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVmlkZW8gV2Fsa3Rocm91Z2gnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL3doaXRlLWxhYmVsLW1hcmtldHBsYWNlL3ZpZGVvLXdhbGt0aHJvdWdoJyxcbiAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIHlvdXIgQ3VzdG9tIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9vdmVydmlldycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdTdGFydGVyIFRlbXBsYXRlJywgbGluazogJy9zb2x1dGlvbnMvbWFya2V0cGxhY2VzL29yZGVyYm9vay9zdGFydGVyJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1NlcXVlbmNlIFBheScsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnT3ZlcnZpZXcnLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9wYXltZW50cy9vdmVydmlldycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ2hlY2tvdXQnLCBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL3NlcXVlbmNlLWtpdC9jaGVja291dCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NtYXJ0IFN3YXBzJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvc21hcnQtc3dhcHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPbi1yYW1wJywgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy9zZXF1ZW5jZS1raXQvb24tcmFtcCcgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdQb3dlcicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc29sdXRpb25zL3Bvd2VyLW92ZXJ2aWV3JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0RlcGxveWFibGUgQ29udHJhY3RzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zb2x1dGlvbnMvYnVpbGRlci9jb250cmFjdHMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdEZXBsb3kgYSBDb2xsZWN0aWJsZSBDb250cmFjdCcsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2NvbGxlY3RpYmxlcy9jb250cmFjdHMvZGVwbG95LWFuLWl0ZW0tY29sbGVjdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8ge3RleHQ6ICdNaW50IEluLUdhbWUgSXRlbXMgYW5kIEFjaGlldmVtZW50cyAoRVJDMTE1NSknLCBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzLzkwMC1taW50LWl0ZW1zLWZyb20tRVJDMTE1NSd9LFxuICAgICAgICAgICAgLy8ge3RleHQ6ICdNaW50IERpZ2l0YWwgQ29sbGVjdGlibGVzIChFUkM3MjEpJywgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy85MDItbWludC1jb2xsZWN0aWJsZXMtZnJvbS1FUkM3MjEnfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0RlcGxveSBhbiBJbi1HYW1lIEN1cnJlbmN5IChFUkMyMCknLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9jb2xsZWN0aWJsZXMvY29udHJhY3RzL2RlcGxveS1FUkMyMC1jdXJyZW5jeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRGVwbG95IGEgU291bGJvdW5kIFRva2VuIENvbnRyYWN0JyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktc291bGJvdW5kLXRva2VuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdEZXBsb3kgYSBQcmltYXJ5IFNhbGVzIENvbnRyYWN0JyxcbiAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvY29sbGVjdGlibGVzL2NvbnRyYWN0cy9kZXBsb3ktcHJpbWFyeS1zYWxlcy1jb250cmFjdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTWFuYWdlIENvbGxlY3Rpb25zJyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2NvbGxlY3Rpb25zJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdRdWVyeWluZyBCbG9ja2NoYWluIERhdGEnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0luZGV4ZXInLCBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL2luZGV4ZXInIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdXZWJob29rcycsIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvd2ViaG9va3MnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdUcmFuc2FjdGlvbiBNYW5hZ2VyJyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90cmFuc2FjdGlvbi1tYW5hZ2VyL292ZXJ2aWV3JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdBbmFseXRpY3MnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvYW5hbHl0aWNzJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdHYXMgU3BvbnNvcnNoaXAnLFxuICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvZ2FzLXRhbmsnLFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTm9kZSBHYXRld2F5JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy9idWlsZGVyL25vZGUtZ2F0ZXdheScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHsgdGV4dDogJ01pbnRlcicsIGxpbms6ICcvc29sdXRpb25zL21pbnRlcicgfVxuICAgICAgXSxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyJyxcbiAgICAvLyAgIGxpbms6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLFxuICAgIC8vICAgbWF0Y2g6ICcvc29sdXRpb25zL2J1aWxkZXIvb3ZlcnZpZXcnLFxuICAgIC8vIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1RlY2huaWNhbCBSZWZlcmVuY2VzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ0NoYWluIFN1cHBvcnQnLCBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9jaGFpbi1zdXBwb3J0JyB9LFxuICAgICAgICAvLyB7IHRleHQ6ICdFSVA1MTg5IHZzLiA0MzM3JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvNTE4OS00MzM3JyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1doeSBTbWFydCBDb250cmFjdCBXYWxsZXRzPycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvd2FsbGV0LWNvbnRyYWN0cy93aHknLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V0aGVycyB2NiBTdXBwb3J0JyxcbiAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9ldGhlcnMtdjYtbWlncmF0aW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDb250cmFjdCBJbnRlcm5hbHMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnRGVwbG95bWVudCcsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy9kZXBsb3ltZW50JyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VxdWVuY2UgdjEnLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnRGVwbG95JywgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL2RlcGxveScgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IEZhY3RvcnknLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL3dhbGxldC1mYWN0b3J5JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQgQ29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy90ZWNobmljYWwtcmVmZXJlbmNlcy9pbnRlcm5hbHMvdjEvd2FsbGV0LWNvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8ge3RleHQ6ICdUcmFuc2FjdGlvbiBFbmNvZGluZycsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92MS8wNy10cmFuc2FjdGlvbi1lbmNvZGluZyd9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdTaWduYXR1cmUgRW5jb2RpbmcnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL3NpZ25hdHVyZS1lbmNvZGluZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnV2FsbGV0IENvbnRleHQnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvdGVjaG5pY2FsLXJlZmVyZW5jZXMvaW50ZXJuYWxzL3YxL3dhbGxldC1jb250ZXh0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1NlcXVlbmNlIHYyJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0RlcGxveScsIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92Mi9kZXBsb3knIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBDb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy92Mi9jb25maWd1cmF0aW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0NvbnRyYWN0IEF1ZGl0cycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc29sdXRpb25zL3RlY2huaWNhbC1yZWZlcmVuY2VzL2ludGVybmFscy9jb250cmFjdC1hdWRpdHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuXG4gICcvZ3VpZGVzJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHdWlkZXMnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnR2FtZSBEZXZlbG9wZXJzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0J1aWxkIGEgR2FtZSB3aXRoIFdlYkdMJywgY29sbGFwc2VkOiB0cnVlLCBsaW5rOiAnL2d1aWRlcy93ZWJnbC1ndWlkZScgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIGEgVW5pdHkgR2FtZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvamVsbHktZm9yZXN0LXVuaXR5LWd1aWRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZGluZyBUcmFuc2FjdGlvbiBIZWF2eSBHYW1lcyB3aXRoIFVuaXR5JyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9idWlsZGluZy10cmFuc2FjdGlvbi1oZWF2eS1nYW1lcy13aXRoLXVuaXR5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3cgdG8gYnVpbGQgYSBHYW1lIHdpdGggVW5yZWFsIEVuZ2luZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvdW5yZWFsLWV3LWd1aWRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdVc2luZyBVbml0eSBJQVAgdG8gU2VsbCBORlRzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy91c2luZy11bml0eS1pYXAtdG8tc2VsbC1uZnRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdIb3cgdG8gc2VsbCBPbi1DaGFpbiBJdGVtcyBpbiB5b3VyIFVucmVhbCBQcm9qZWN0JyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy91bnJlYWwtcHJpbWFyeS1zYWxlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnSG93IHRvIGRvIFByaW1hcnkgU2FsZXMgZm9yIE9uLUNoYWluIEl0ZW1zIGluIFVuaXR5JyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy91bml0eS1wcmltYXJ5LXNhbGVzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIFRlbGVncmFtIE1pbmktR2FtZSBpbiBVbml0eScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvdW5pdHktd2ViZ2wtdGVsZWdyYW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIGEgVGVsZWdyYW0gTWluaS1BcHAgd2l0aCBTZXF1ZW5jZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvdGVsZWdyYW0taW50ZWdyYXRpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0Jsb2NrY2hhaW4gSW50ZWdyYXRpb25zJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIGEgQ29sbGVjdGlibGUgTWludGluZyBTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9taW50LWNvbGxlY3RpYmxlcy1zZXJ2ZXJsZXNzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdNYW5hZ2UgQ29sbGVjdGlvbiBNZXRhZGF0YScsIGNvbGxhcHNlZDogdHJ1ZSwgbGluazogJy9ndWlkZXMvbWV0YWRhdGEtZ3VpZGUnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIFRyZWFzdXJlIENoZXN0IHdpdGggQUkgTWludGluZycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvdHJlYXN1cmUtY2hlc3QtZ3VpZGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0J1aWxkIGEgQmFja2VuZCBUcmFuc2FjdGlvbiBTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9idWlsZGluZy1yZWxheWluZy1zZXJ2ZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0xldmVyYWdlIFNlcXVlbmNlIEFuYWx5dGljcyBBUEkgaW4gRHVuZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvYW5hbHl0aWNzLWd1aWRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZCBhbiBFbWJlZGRlZCBXYWxsZXQgTGlua2luZyBTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL3NvbHV0aW9ucy93YWxsZXRzL2xpbmstd2FsbGV0cy9pbnRlZ3JhdGlvbi1ndWlkZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTWFya2V0cGxhY2VzICYgUHJpbWFyeSBTYWxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZCBhIEN1c3RvbSBNYXJrZXRwbGFjZScsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvY3VzdG9tLW1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdTZWxsIHlvdXIgRVJDLTExNTUgR2FtZSBJdGVtcyB2aWEgYSBXZWIgU2hvcCcsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgbGluazogJy9ndWlkZXMvcHJpbWFyeS1zYWxlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ3JlYXRlIE5GVCBEcm9wIFNhbGVzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsaW5rOiAnL2d1aWRlcy9wcmltYXJ5LWRyb3Atc2FsZXMtZXJjNzIxJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiAnSW50ZWdyYXRlIHRva2VuIHJld2FyZHMgaW50byB5b3VyIERpc2NvcmQgc2VydmVyJyxcbiAgICAvLyAgIGxpbms6ICcvZ3VpZGVzL2Rpc2NvcmQnXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnVGVtcGxhdGVzJyxcbiAgICAgIGxpbms6ICcvZ3VpZGVzL3RlbXBsYXRlLW92ZXJ2aWV3JyxcbiAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAvLyAgIHsgdGV4dDogJ0VtYmVkZGVkIFdhbGxldCBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLWVtYmVkZGVkLXdhbGxldCcgfSxcbiAgICAgIC8vICAgeyB0ZXh0OiAnQnVpbGQgYSBCYWNrZW5kIFRyYW5zYWN0aW9uIE1hbmFnZXInLCBsaW5rOiAnL2d1aWRlcy90ZW1wbGF0ZXMvYnVpbGRpbmctcmVsYXlpbmctc2VydmVyJyB9XG4gICAgICAvLyAgIC8vIHsgdGV4dDogJ01hcmtldHBsYWNlIEFQSSBEZW1vJywgbGluazogJy9ndWlkZXMvdGVtcGxhdGVzL3RlbXBsYXRlLW1hcmtldHBsYWNlLWFwaScgfVxuICAgICAgLy8gXVxuICAgIH0sXG4gIF0sXG5cbiAgLy8gU0RLc1xuICAnL3Nkayc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnR2FtZSBFbmdpbmUnLFxuICAgICAgLy8gY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdVbml0eScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIG1hdGNoOiAnL3Nkay91bml0eS9vdmVydmlldycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdW5pdHkvb3ZlcnZpZXcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL3Nkay91bml0eS9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZXR1cCcsIGxpbms6ICcvc2RrL3VuaXR5L3NldHVwJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQXV0aGVudGljYXRpb24nLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uL2ludHJvJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0VtYWlsIE9UUCcsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uL2VtYWlsJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NvY2lhbCBTaWduIEluJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vb2lkYycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdQbGF5RmFiJywgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vcGxheWZhYicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdHdWVzdCcsIGxpbms6ICcvc2RrL3VuaXR5L2F1dGhlbnRpY2F0aW9uL2d1ZXN0JyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdGZWRlcmF0ZWQgQWNjb3VudHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9zZGsvdW5pdHkvYXV0aGVudGljYXRpb24vZmVkZXJhdGVkLWFjY291bnRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dyaXRlIHRvIGJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS93cml0ZS10by1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVhZCBmcm9tIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bml0eS9yZWFkLWZyb20tYmxvY2tjaGFpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpZ24gTWVzc2FnZXMnLCBsaW5rOiAnL3Nkay91bml0eS9zaWduLW1lc3NhZ2VzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVjb3ZlcmluZyBTZXNzaW9ucycsIGxpbms6ICcvc2RrL3VuaXR5L3JlY292ZXJpbmctc2Vzc2lvbnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZXNzaW9uIE1hbmFnZW1lbnQnLCBsaW5rOiAnL3Nkay91bml0eS9zZXNzaW9uLW1hbmFnZW1lbnQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPbi1SYW1wIEZ1bmRzIHZpYSBDcmVkaXQgQ2FyZCcsIGxpbms6ICcvc2RrL3VuaXR5L29uYm9hcmQtdXNlci1mdW5kcycgfSxcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgIHRleHQ6ICdQZWVyIHRvIFBlZXIgVHJhZGluZyAvIE1hcmtldHBsYWNlJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL3Nkay91bml0eS9tYXJrZXRwbGFjZS9pbnRybycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdSZWFkaW5nIE9yZGVycycsIGxpbms6ICcvc2RrL3VuaXR5L21hcmtldHBsYWNlL3JlYWRpbmctb3JkZXJzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0ZpbGxpbmcgT3JkZXJzJywgbGluazogJy9zZGsvdW5pdHkvbWFya2V0cGxhY2UvZmlsbGluZy1vcmRlcnMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2hlY2tvdXQgVUknLCBsaW5rOiAnL3Nkay91bml0eS9tYXJrZXRwbGFjZS9jaGVja291dC11aScgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0N1cnJlbmN5IFN3YXBzJywgbGluazogJy9zZGsvdW5pdHkvY3VycmVuY3ktc3dhcHMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb25uZWN0IHdpdGggRXh0ZXJuYWwgV2FsbGV0cycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3VuaXR5L2Nvbm5lY3RpbmctZXh0ZXJuYWwtd2FsbGV0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVXBncmFkaW5nIGZyb20gdjIgdG8gdjMnLCBsaW5rOiAnL3Nkay91bml0eS92Mi10by12My11cGdyYWRlLWd1aWRlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0IFVJJywgbGluazogJy9zZGsvdW5pdHkvd2FsbGV0LXVpJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRGVwbG95IENvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L2RlcGxveS1jb250cmFjdHMnIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBZHZhbmNlZCBCbG9ja2NoYWluIEludGVyYWN0aW9ucycsXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC9pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2FsbGV0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL3dhbGxldHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ2xpZW50cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2NsaWVudHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnVHJhbnNmZXJzJywgbGluazogJy9zZGsvdW5pdHkvQWR2YW5jZWQvdHJhbnNmZXJzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NvbnRyYWN0cycsIGxpbms6ICcvc2RrL3VuaXR5L0FkdmFuY2VkL2NvbnRyYWN0cycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdUb2tlbnMnLCBsaW5rOiAnL3Nkay91bml0eS9BZHZhbmNlZC90b2tlbnMnIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVW5yZWFsJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgbWF0Y2g6ICcvc2RrL3VucmVhbC9pbnRyb2R1Y3Rpb24nLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvaW50cm9kdWN0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvc2RrL3VucmVhbC9xdWlja3N0YXJ0JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9zZGsvdW5yZWFsL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3Nkay91bnJlYWwvY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0JsdWVwcmludCBTdWJzeXN0ZW1zJywgbGluazogJy9zZGsvdW5yZWFsL3N1YnN5c3RlbXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6IFwiQm9vdHN0cmFwIHlvdXIgR2FtZVwiLCBsaW5rOiBcIi9zZGsvdW5yZWFsL2Jvb3RzdHJhcF9nYW1lXCIgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NpZ24tSW4gVUknLCBsaW5rOiAnL3Nkay91bnJlYWwvdXNlcl9pbnRlcmZhY2VzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQXV0aGVudGljYXRlIFVzZXJzJywgbGluazogJy9zZGsvdW5yZWFsL2F1dGhlbnRpY2F0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnV3JpdGUgdG8gQmxvY2tjaGFpbicsIGxpbms6ICcvc2RrL3VucmVhbC93cml0ZS10by1ibG9ja2NoYWluJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUmVhZCBmcm9tIEJsb2NrY2hhaW4nLCBsaW5rOiAnL3Nkay91bnJlYWwvcmVhZC1mcm9tLWJsb2NrY2hhaW4nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdPbi1SYW1wIHZpYSBDcmVkaXQgQ2FyZCcsIGxpbms6ICcvc2RrL3VucmVhbC9vbmJvYXJkLXVzZXItZnVuZHMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdBZHZhbmNlZCBCbG9ja2NoYWluIEludGVyYWN0aW9ucycsIGxpbms6ICcvc2RrL3VucmVhbC9hZHZhbmNlZCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1BsYXRmb3JtIFJlcXVpcmVtZW50cycsIGxpbms6ICcvc2RrL3VucmVhbC9wbGF0Zm9ybXMnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTW9iaWxlJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIC8vIHsgdGV4dDogJ0FuZHJvaWQnLCBsaW5rOiAnL3Nkay9hbmRyb2lkJyB9LFxuICAgICAgICAvLyB7IHRleHQ6ICdpT1MnLCBsaW5rOiAnL3Nkay9pT1MnIH0sXG4gICAgICAgIHsgdGV4dDogJ1JlYWN0IE5hdGl2ZScsIGxpbms6ICcvc2RrL21vYmlsZScgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRleHQ6ICdXZWIzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnVHlwZVNjcmlwdCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnQ29ubmVjdCBXYWxsZXQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9jb25uZWN0LXdhbGxldCcgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0F1dGhlbnRpY2F0ZSBVc2VycyB3aXRoIE1lc3NhZ2UgU2lnbmF0dXJlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvYXV0aC1hZGRyZXNzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTaWduaW5nICYgVmVyaWZ5aW5nIE1lc3NhZ2VzJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2lnbi1tZXNzYWdlJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTm8td2FsbGV0IGNvbmZpcm1hdGlvbiBzaWduYXR1cmVzJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvc2Vzc2lvbi1rZXlzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kaW5nIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtdHJhbnNhY3Rpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kaW5nIEVSQy0yMCBUb2tlbnMnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2d1aWRlcy9zZW5kLWVyYzIwJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2VuZGluZyBFUkMtNzIxIChORlQpIFRva2VucycsIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjNzIxJyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBFUkMtMTE1NSAoQ29sbGVjdGlibGUpIFRva2VucycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtZXJjMTE1NScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnU2VuZGluZyBhIEJhdGNoIG9mIFRyYW5zYWN0aW9ucycsXG4gICAgICAgICAgICAgIGxpbms6ICcvc2RrL3R5cGVzY3JpcHQvZ3VpZGVzL3NlbmQtYmF0Y2gtdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdCdWlsZGluZyBCYWNrZW5kcyB3aXRoIFNlcXVlbmNlJyxcbiAgICAgICAgICAgICAgbGluazogJy9zZGsvdHlwZXNjcmlwdC9ndWlkZXMvYnVpbGRpbmctYmFja2VuZHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1dhbGxldCBDb25uZWN0b3JzJyxcbiAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL292ZXJ2aWV3JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dhZ21pJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3dhZ21pJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JhaW5ib3dLaXQnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvcmFpbmJvdy1raXQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2ViMyBPbmJvYXJkJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3dlYjMtb25ib2FyZCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdXZWIzIFJlYWN0IFY2JywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3dlYjMtcmVhY3QtdjYnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2ViM01vZGFsJywgbGluazogJy9zZGsvdHlwZXNjcmlwdC9jb25uZWN0b3JzL3dlYjNtb2RhbCcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnL3Nkay90eXBlc2NyaXB0L2Nvbm5lY3RvcnMvRkFRJyB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0dvJyxcbiAgICAgICAgICBsaW5rOiAnL3Nkay9nby9vdmVydmlldycsXG4gICAgICAgICAgaXRlbXM6IFt7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvc2RrL2dvL292ZXJ2aWV3JyB9XSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQ29tbW9uIFF1ZXN0aW9ucycsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0hvdyBkbyBJIGRvIHNpZ25hdHVyZSB2YWxpZGF0aW9uPycsXG4gICAgICAgICAgbGluazogJy9zb2x1dGlvbnMvd2FsbGV0cy91bml2ZXJzYWwtd2FsbGV0L2V4YW1wbGVzL2F1dGgtYWRkcmVzcycsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIC4uLlxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuXG4gIC8vIGFwaXNcbiAgJy9hcGknOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1RyYW5zYWN0aW9ucycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgIHsgdGV4dDogJ0FQSSBSZWZlcmVuY2VzJywgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2VuZHBvaW50cycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnRmV0Y2ggRmVlIE9wdGlvbnMnLCBsaW5rOiAnL2FwaS90cmFuc2FjdGlvbnMvZXhhbXBsZXMvZmV0Y2gtZmVlLW9wdGlvbnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdTZW5kIFRyYW5zYWN0aW9ucycsIGxpbms6ICcvYXBpL3RyYW5zYWN0aW9ucy9leGFtcGxlcy9zZW5kLXRyYW5zYWN0aW9ucycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0ZldGNoIFRyYW5zYWN0aW9uIFJlY2VpcHRzJyxcbiAgICAgICAgICAgICAgbGluazogJy9hcGkvdHJhbnNhY3Rpb25zL2V4YW1wbGVzL2ZldGNoLXRyYW5zYWN0aW9uLXJlY2VpcHRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnSW5kZXhlcicsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9pbmRleGVyL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2FwaS9pbmRleGVyL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnQVBJIFJlZmVyZW5jZXMnLCBsaW5rOiAnL2FwaS9pbmRleGVyL2VuZHBvaW50cycgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdFeGFtcGxlcycsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnRmV0Y2ggVG9rZW5zJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy9mZXRjaC10b2tlbnMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdUcmFuc2FjdGlvbiBIaXN0b3J5JywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy90cmFuc2FjdGlvbi1oaXN0b3J5JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnVW5pcXVlIFRva2VucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvdW5pcXVlLXRva2VucycgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1RyYW5zYWN0aW9uIEhpc3RvcnkgVG9rZW4gQ29udHJhY3QnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS9pbmRleGVyL2V4YW1wbGVzL3RyYW5zYXRpb24taGlzdG9yeS10b2tlbi1jb250cmFjdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnTmF0aXZlIE5ldHdvcmsgQmFsYW5jZScsXG4gICAgICAgICAgICAgIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvbmF0aXZlLW5ldHdvcmstYmFsYW5jZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTWV0YWRhdGEgVGlwcycsIGxpbms6ICcvYXBpL2luZGV4ZXIvbWV0YWRhdGEtdGlwcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1dlYmhvb2tzJywgbGluazogJy9hcGkvaW5kZXhlci9leGFtcGxlcy93ZWJob29rLWxpc3RlbmVyJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU3Vic2NyaXB0aW9ucycsIGxpbms6ICcvYXBpL2luZGV4ZXIvZXhhbXBsZXMvc3Vic2NyaXB0aW9ucycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdBbmFseXRpY3MnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvYW5hbHl0aWNzL292ZXJ2aWV3JyB9LFxuICAgICAgICB7IHRleHQ6ICdBUEkgUmVmZXJlbmNlcycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9lbmRwb2ludHMnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1dhbGxldHMnLCBsaW5rOiAnL2FwaS9hbmFseXRpY3MvZXhhbXBsZXMvd2FsbGV0cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ01hcmtldHBsYWNlcycsIGxpbms6ICcvYXBpL2FuYWx5dGljcy9leGFtcGxlcy9tYXJrZXRwbGFjZScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdNZXRhZGF0YScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQVBJIFJlZmVyZW5jZXMnLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9lbmRwb2ludHMnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1Rva2VuIE1ldGFkYXRhJywgbGluazogJy9hcGkvbWV0YWRhdGEvdG9rZW4tbWV0YWRhdGEnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdDb250cmFjdCBNZXRhZGF0YScsIGxpbms6ICcvYXBpL21ldGFkYXRhL2NvbnRyYWN0LW1ldGFkYXRhJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnUkVTVCBBUEknLCBsaW5rOiAnL2FwaS9tZXRhZGF0YS9yZXN0LWFwaScgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdJbmZyYXN0cnVjdHVyZScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9pbmZyYXN0cnVjdHVyZS9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQVBJIFJlZmVyZW5jZXMnLCBsaW5rOiAnL2FwaS9pbmZyYXN0cnVjdHVyZS9lbmRwb2ludHMnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0J1aWxkZXInLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvYnVpbGRlci9vdmVydmlldycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQVBJIFJlZmVyZW5jZXMnLCBsaW5rOiAnL2FwaS9idWlsZGVyL2VuZHBvaW50cycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTWFya2V0cGxhY2UnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ092ZXJ2aWV3JywgbGluazogJy9hcGkvbWFya2V0cGxhY2Uvb3ZlcnZpZXcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0FQSSBSZWZlcmVuY2VzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZW5kcG9pbnRzJyB9LFxuXG4gICAgICAgIC8vIHsgdGV4dDogJ1NjaGVtYScsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL3NjaGVtYScgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnTWFya2V0cGxhY2UgQVBJJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvYXBpJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL29yZGVyYm9vay10cmFuc2FjdGlvbnMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDcmVhdGluZyBNYXJrZXQgT3JkZXJzICYgTGlzdGluZ3MnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FwaS9tYXJrZXRwbGFjZS9leGFtcGxlcy9vcmRlcmJvb2stdHJhbnNhY3Rpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXQgVG9wIE9yZGVycycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC10b3Atb3JkZXJzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnR2V0IE9yZGVyYm9vaycsIGxpbms6ICcvYXBpL21hcmtldHBsYWNlL2V4YW1wbGVzL2dldC1vcmRlcmJvb2snIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXQgVXNlciBBY3Rpdml0aWVzJywgbGluazogJy9hcGkvbWFya2V0cGxhY2UvZXhhbXBsZXMvZ2V0LXVzZXItYWN0aXZpdGllcycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdOb2RlIEdhdGV3YXknLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2FwaS9ub2RlLWdhdGV3YXknIH1dLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8gU3VwcG9ydFxuICAnL3N1cHBvcnQnOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1N1cHBvcnQnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnU3VwcG9ydCcsIGxpbms6ICcvc3VwcG9ydCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ2hhbmdlbG9nJywgbGluazogJ2h0dHBzOi8vMHhzZXF1ZW5jZS5mZWF0dXJlYmFzZS5hcHAvJyB9LFxuICAgICAgICB7IHRleHQ6ICdSZXN0cmljdGVkIFJlZ2lvbnMnLCBsaW5rOiAnL3N1cHBvcnQvcmVzdHJpY3RlZC1yZWdpb25zJyB9LFxuICAgICAgICB7IHRleHQ6ICdGQVEnLCBsaW5rOiAnaHR0cHM6Ly9zdXBwb3J0LnNlcXVlbmNlLnh5eicgfSxcbiAgICAgICAgeyB0ZXh0OiAnVG9rZW4gRGlyZWN0b3J5JywgbGluazogJy9zdXBwb3J0L3Rva2VuLWRpcmVjdG9yeScgfSxcbiAgICAgICAgeyB0ZXh0OiAnRGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc2VxdWVuY2UnIH0sXG4gICAgICAgIHsgdGV4dDogXCJXZSdyZSBoaXJpbmchXCIsIGxpbms6ICdodHRwczovL2hvcml6b24uaW8vY2FyZWVycycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29udGFjdCBVcycsIGxpbms6ICdodHRwczovL3N1cHBvcnQuc2VxdWVuY2UueHl6JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTZXF1ZW5jZSBCdWlsZGVyIEFkbWluJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1Byb2plY3QgTWFuYWdlbWVudCcsIGxpbms6ICcvc3VwcG9ydC9idWlsZGVyL3Byb2plY3QtbWFuYWdlbWVudCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnUHJvamVjdCBTZXR0aW5ncycsIGxpbms6ICcvc3VwcG9ydC9idWlsZGVyL3Byb2plY3Qtc2V0dGluZ3MnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59IGFzIFNpZGViYXJcbiJdLAogICJtYXBwaW5ncyI6ICI7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
