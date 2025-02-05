import clsx from 'clsx'
import * as ICONS from './icons'
import { Trans, useLingui } from '@lingui/react/macro'

export const SolutionsSection = () => {
  const {
    t,
    i18n: { locale },
  } = useLingui()
  const lang = locale === 'en' ? '' : locale
  return (
    <section className="flex flex-col gap-5 border-t border-black-10">
      <div className="flex flex-col gap-1 py-5">
        <h3 className="text-3xl text-themed-primary font-bold">
          <Trans>Solutions</Trans>
        </h3>
        <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8">
          <Trans>
            Follow our solution guides to boost your game's onboarding experience, unlock new ways
            to monetize and power your game with the Sequence platform.
          </Trans>
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <SolutionsGroup
          theme="purple"
          heading={t`Onboard players`}
          items={[
            {
              icon: 'WalletIcon',
              title: t`Embedded Wallet`,
              body: t`Gasless Transactions. No popups. Deliver a seamless experience for both web2 and web3 players with Sequence embedded into your game or app, compatible with nearly any platform or game engine.`,
              link: `${lang}/solutions/wallets/embedded-wallet/overview`,
            },
            {
              icon: 'MinterIcon',
              title: t`Sequence Kit`,
              body: t`Built on top of wagmi, onboard web2 users or native crypto users with an existing wallet to your web game or app.`,
              link: `${lang}/solutions/wallets/sequence-kit/overview`,
            },
            {
              icon: 'CollectiblesIcon',
              title: t`Ecosystem`,
              body: t`Create ecosystem wallets for your entire ecosystem through Sequence as well as enable external applications to connect to your embedded ecosystem wallet - all with the same address across chains & apps.`,
              link: `${lang}/solutions/wallets/ecosystem/overview`,
            },
            {
              icon: 'WalletIcon',
              title: t`Universal Wallet`,
              body: t`Easily onboard web3-native players with a complete Universal Wallet.`,
              link: `${lang}/solutions/wallets/universal-wallet/overview`,
            },
          ]}
        />
        <SolutionsGroup
          theme="green"
          heading={t`Earn more revenue`}
          items={[
            {
              icon: 'MarketplaceIcon',
              title: t`White-Label Marketplace`,
              body: t`Launch an in-game collectibles marketplace within minutes.`,
              link: `${lang}/solutions/marketplaces/white-label-marketplace/overview`,
            },
            {
              icon: 'SequenceIcon',
              title: t`Marketplace APIs`,
              body: t`Integrate custom in-game marketplaces with our APIs.`,
              link: `${lang}/solutions/marketplaces/orderbook/overview`,
            },
            {
              icon: 'CartIcon',
              title: t`Sequence Pay`,
              body: t`An integrated payment solution designed to simplify and enhance the transaction experience within Web3 games. It combines multiple payment functionalities into a cohesive SDK available for Unity, Unreal, and React.`,
              link: `${lang}/solutions/payments/overview`,
            },
          ]}
        />
        <SolutionsGroup
          theme="yellow"
          heading={t`Power your game`}
          items={[
            {
              icon: 'IndexerIcon',
              title: t`Indexer`,
              body: t`Performantly query wallets and contracts to use in your game or app.`,
              link: `${lang}/solutions/builder/indexer`,
            },
            {
              icon: 'CollectiblesIcon',
              title: t`Contracts & Collectibles`,
              body: t`Import any contract or deploy a new one with our audited smart contract suite. Manage your collection metadata at scale.`,
              link: `${lang}/solutions/collectibles/contracts/deploy-an-item-collection`,
            },
            {
              icon: 'AnalyticsIcon',
              title: t`Analytics`,
              body: t`Track every aspect of web3 activity within your games.`,
              link: `${lang}/solutions/builder/analytics`,
            },
            {
              icon: 'MinterIcon',
              title: t`Transaction Manager`,
              body: t`Scalable transactions with batching, access-control, parallelization, automatic reorg management with our transactions API.`,
              link: `${lang}/solutions/transactions-api/overview`,
            },
          ]}
        />
      </div>
    </section>
  )
}

const SolutionsGroup = ({
  heading,
  items,
  theme,
}: {
  heading: string
  items: {
    icon: keyof typeof ICONS
    title: string
    body: string
    link: string
  }[]
  theme: 'purple' | 'green' | 'yellow'
}) => {
  return (
    <div className="flex-1 h-fit shrink-0 rounded-xl dark:bg-white-10 bg-white overflow-hidden">
      <div className="flex flex-col gap-3 p-4 relative">
        <div
          className={clsx('absolute inset-0 opacity-20 z-0 pointer-events-none', {
            'dark:bg-gradient-to-b from-[#3400A0] to-transparent': theme === 'purple',
            'dark:bg-gradient-to-b from-[#0A3F16] to-transparent': theme === 'green',
            'dark:bg-gradient-to-b from-[#897031] to-transparent': theme === 'yellow',
          })}
        />
        <p className="px-4 font-bold text-themed-primary z-10">{heading}</p>
        {items.map((item, index) => {
          const IconComponent = ICONS[item.icon]

          return (
            <a
              key={index}
              href={item.link}
              className="hover-fade p-4 rounded-md z-10 dark:bg-white-10 bg-black-7"
            >
              <div className="flex gap-2">
                <p className="flex items-start gap-2 text-xl leading-7 font-bold text-themed-primary">
                  <span className="mt-1">
                    <IconComponent />
                  </span>
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
