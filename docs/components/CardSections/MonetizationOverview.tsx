import clsx from 'clsx'
import * as ICONS from '../Landing/icons'

export const MonetizationOverview = () => (
  <section className="flex flex-col gap-5 border-t border-black-10">
    <div className="flex md:flex-row flex-col gap-4">
      <SolutionsGroup
        theme="green"
        heading="Sequence Pay"
        icon='CartIcon'
        items={[
          {
            title: 'Overview',
            body: 'Sequence Pay is an integrated payment solution designed to simplify and enhance the transaction experience within Web3 games. It combines multiple payment functionalities into a cohesive SDK available for Unity, Unreal, and React. ',
            link: '/solutions/payments/overview',
          },
          {
            title: 'Checkout',
            body: 'Purchase NFTs using any cryptocurrency, transfer funds between wallets, or pay with credit/debit cards.',
            link: '/solutions/wallets/sequence-kit/checkout',
          },
          {
            title: 'Smart Swaps',
            body: 'Automatically swap between currencies on the same chain with batched transactions to optimize UX and reduce gas costs.',
            link: '/solutions/wallets/sequence-kit/smart-swaps',
          },
          {
            title: 'Fiat On-Ramp',
            body: 'Enable users to purchase cryptocurrencies with credit or debit cards using region-optimized providers like Transak.',
            link: '/solutions/wallets/sequence-kit/on-ramp',
          },
          // {
          //   icon: 'CartIcon',
          //   title: 'Primary Sales',
          //   body: 'Introducing Jelly Forest: a blockchain-enabled 2D runner game with social sign in, an in-game store, a backend transaction manager and more - all built in Unity using the Sequence platform.',
          //   link: '/guides/unity-guide',
          // },
        ]}
      />
      <SolutionsGroup
        theme="purple"
        heading="White-Label Marketplace"
        icon='MarketplaceIcon'
        items={[
          {
            title: 'Enforce Royalties',
            body: 'Enforcing royalties with ERC-2981 to choosing the best trading mechanism for your community, setting fees, and more',
            link: '/solutions/marketplaces/white-label-marketplace/guide/',
          },
          {
            title: 'Aggregrate Listings',
            body: 'Aggregate listings from major platforms like OpenSea or LooksRare, providing you with the benefit of existing liquidity without relinquishing control of the gaming experience.',
            link: '/solutions/marketplaces/white-label-marketplace/guide/',
          },
          {
            title: 'Leverage your Custom Token',
            body: 'List your collectibles using your custom token to increase utility and engagement.',
            link: '/solutions/marketplaces/white-label-marketplace/guide/',
          },
          {
            title: 'Video Walkthrough',
            body: 'Watch as a Sequence team member curates both Skyweaver and Azuki into a custom marketplace by customizing themes and features in the Sequence Builder',
            link: '/solutions/marketplaces/white-label-marketplace/video-walkthrough/',
          },
        ]}
      />
    </div>
    <div className="flex md:flex-row flex-col gap-4">
      <div className="md:w-1/2">
        <SolutionsGroup
          theme="black"
          heading="Custom Marketplace"
          icon='MinterIcon'
          items={[
            {
              title: 'Marketplace APIs',
              body: 'Leverage our marketplace APIs to build your own custom marketplace with the Sequence Market protocol.',
              link: 'https://docs.sequence.xyz/api/marketplace/endpoints',
            },
            {
              title: 'Sequence Market Protocol',
              body: 'Fully audited, open source, and available on all chains Sequence supports at 0xB537a160472183f2150d42EB1c3DD6684A55f74c. The Sequence Market Protocol is a fully scalable and efficient marketplace protocol utilized by organizations such as Ubisoft.',
              link: 'https://github.com/0xsequence/marketplace-contracts/tree/master',
            },
            {
              title: 'Starter Marketplace',
              body: 'Instead of starting from scratch, use our starter marketplace as a template to build your own custom marketplace.',
              link: '/solutions/marketplaces/orderbook/starter',
            },
          ]}
        />
      </div>
    </div>
  </section>
)

const SolutionsGroup = ({
  heading,
  items,
  theme,
  icon,
}: {
  heading: string
  icon: keyof typeof ICONS
  items: {
    title: string
    body: string
    link: string
  }[]
  theme: 'purple' | 'green' | 'yellow' | 'black'
}) => {
  return (
    <div className="flex-1 h-fit shrink-0 rounded-xl dark:bg-white-10 bg-white overflow-hidden">
      <div className="flex flex-col gap-3 p-4 relative">
        <div
          className={clsx('absolute inset-0 opacity-20 z-0 pointer-events-none', {
            'dark:bg-gradient-to-b from-[#3400A0] to-transparent': theme === 'purple',
            'dark:bg-gradient-to-b from-[#0A3F16] to-transparent': theme === 'green',
            'dark:bg-gradient-to-b from-[#897031] to-transparent': theme === 'yellow',
            'dark:bg-gradient-to-b from-[#000000] to-transparent': theme === 'black',
          })}
        />
        <div className="flex items-center gap-2 px-4">
        {ICONS[icon]({ className: "mt-1" })}

          <p className="font-bold text-themed-primary z-10">{heading}</p>
        </div>
        
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              className="hover-fade p-4 rounded-md z-10 dark:bg-white-10 bg-black-7"
            >
              <div className="flex gap-2">
                <p className="flex items-start gap-2 text-xl leading-7 font-bold text-themed-primary">
                  {item.title}
                </p>
              </div>
              <p className="text-themed-secondary text-sm font-medium">{item.body}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}
