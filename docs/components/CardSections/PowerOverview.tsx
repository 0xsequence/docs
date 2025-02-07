import clsx from 'clsx'
import * as ICONS from '../Landing/icons'
import { useLingui } from '@lingui/react/macro'

export const PowerOverview = () => {
  const { t } = useLingui()
  return (
    <section className="flex flex-col gap-5 border-t border-black-10">
      <div className="flex md:flex-row flex-col gap-4">
        <SolutionsGroup
          theme="black"
          heading={t`Contract Deployments`}
          items={[
            {
              icon: 'SequenceIcon',
              title: t`ERC20`,
              body: t`Standard, audited smart contract for deploying an ERC20 fungible token through Sequence Builder.`,
              link: `/solutions/collectibles/contracts/deploy-ERC20-currency`,
            },
            {
              icon: 'CollectiblesIcon',
              title: t`ERC721`,
              body: t`Deploy standard, audited non-fungible (ERC721) tokens through Sequence Builder`,
              link: `/solutions/collectibles/contracts/deploy-an-item-collection`,
            },
            {
              icon: 'CollectiblesIcon',
              title: t`ERC1155`,
              body: t`Deploy standard, audited semi-fungible (ERC1155) which we helped coauthor through Sequence Builder`,
              link: `/solutions/collectibles/contracts/deploy-an-item-collection`,
            },
            {
              icon: 'MinterIcon',
              title: t`Link any contracts`,
              body: t`Upload any custom contract by providing the ABI and manage from Sequence Builder.`,
              link: `/solutions/builder/contracts`,
            },
          ]}
        />
        <SolutionsGroup
          theme="purple"
          heading={t`Build your game`}
          items={[
            {
              icon: 'AnalyticsIcon',
              title: t`Analytics`,
              body: t`Track every aspect of activity, retention, and more within your games.`,
              link: `/solutions/builder/analytics`,
            },
            {
              icon: 'CollectiblesIcon',
              title: t`Metadata Management`,
              body: t`Update your collections metadata via a UI or at scale using the metadata API.`,
              link: `/solutions/builder/collections`,
            },
            {
              icon: 'IndexerIcon',
              title: t`Indexer`,
              body: t`Performantly query wallets and contracts to use in your game or app.`,
              link: `/solutions/builder/indexer`,
            },
            {
              icon: 'AirdropperIcon',
              title: t`Webhooks`,
              body: t`Deploy webhooks that listen to any arbitrary event across blockchains by providing an https callback`,
              link: `/solutions/builder/webhooks`,
            },
          ]}
        />
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-1/2">
          <SolutionsGroup
            theme="green"
            heading={t`Blockchain Utilities`}
            items={[
              {
                icon: 'MarketplaceIcon',
                title: t`Gas Sponsorship`,
                body: t`Utilize our gas sponsorship service in order to cover transactions fees for your endusers so they never have to think about the blockchain.`,
                link: `/solutions/builder/gas-tank`,
              },
              {
                icon: 'NodeGatewayIcon',
                title: t`Node Gateway`,
                body: t`Leverage our autoscaling node service, automatically load balanced for your application.`,
                link: `/solutions/builder/node-gateway`,
              },
              {
                icon: 'WalletIcon',
                title: t`Transaction Manager`,
                body: t`Scalable transactions with batching, access-control, parallelization, automatic reorg management with our transactions API.`,
                link: `/solutions/transaction-manager/overview`,
              },
            ]}
          />
        </div>
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
