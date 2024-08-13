import { SmartLink } from './Landing/SmartLink'

export const TemplatesOverview = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Templates</h3>
      <p className="text-md leading-6 font-medium dark:text-white-80 text-black-80 mr-8">
        Kickstart your Sequence integration with our open source code demos, examples, and
        boilerplates to accelerate your time to market.
      </p>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <h4 className="text-2xl text-themed-primary font-bold pt-5">Onboarding</h4>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <TemplateCard
        title="Sequence Kit w/ Embedded Wallet for React Boilerplate"
        body="Example boilerplate showcasing embedded wallet integrated with Sequence Kit in a simple React application."
        link="https://github.com/0xsequence/kit-embedded-wallet-react-boilerplate"
        demolink="https://kit-embedded-wallet-react-boilerplate.pages.dev/"
      />

      <TemplateCard
        title="Sequence Kit w/ Embedded Wallet for NextJS Boilerplate"
        body="Example boilerplate showcasing embedded wallet integrated with Sequence Kit in a simple NextJS application."
        link="https://github.com/0xsequence/kit-embedded-wallet-nextjs-boilerplate"
        demolink="https://kit-embedded-wallet-nextjs-boilerplate.pages.dev/"
      />
      <TemplateCard
        title="Embedded Wallet Boilerplate for Wallet Verification on a backend."
        body="Example for your web application to verify the ownership of an Embedded Wallet by passing a JWT and validating against the Sequence API."
        link="https://github.com/0xsequence-demos/embedded-wallet-verify-session"
      />

      <TemplateCard
        title="End to End playground for Sequence Kit"
        body="Example implementation in React & NextJS showcasing various common patterns using Sequence Kit such as signingv messages, sending transactions, displaying inventory, or minting an NFT."
        link="https://github.com/0xsequence/kit/tree/master/examples"
        demolink="https://0xsequence.github.io/kit/"
      />
      <TemplateCard
        title="Embedded Wallet Demo using Wallet Linking"
        body="Example application to allow players to link other EOA wallets they own for transferring assets or for verification purposes. The demo can be used by clicking EOA Link via the demo button below to see the flow."
        link="https://github.com/0xsequence-demos/demo-waas-wallet-link"
        demolink="https://0xsequence.github.io/demo-waas-auth/"
      />
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <h4 className="text-2xl text-themed-primary font-bold">Monetization</h4>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <TemplateCard
        title="Custom Marketplace Boilerplate"
        body="Open-source boilerplate of our white-label marketplace leveraging our marketplace APIs that can be completely customized to fit your game or use case."
        link="https://github.com/0xsequence/marketplace-boilerplate"
        demolink="https://marketplace-boilerplate.pages.dev/"
      />
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <h4 className="text-2xl text-themed-primary font-bold">APIs</h4>
    </div>
    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <TemplateCard
        title="Transactions API Template using a Cloudflare Worker"
        body="Example template for integrators allow users to mint collectibles using the Sequence Transactions API for gasless serverless transactions for infrastructure that can scale elastically."
        link="https://github.com/0xsequence-demos/template-cloudflare-worker-sequence-transactions-api"
      />
    </div>
  </section>
)

const TemplateCard = ({
  title,
  body,
  link,
  deployLink,
  image,
  demolink,
}: {
  title: string
  body: string
  link: string
  deployLink?: string
  image?: string
  demolink?: string
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 dark:bg-white-10 bg-white rounded-xl md:w-[calc(50%-8px)]">
      {image && (
        <div className="rounded-md overflow-hidden w-full aspect-[2]">
          <img src={image} className="object-cover w-full h-full" />
        </div>
      )}
      <p className="text-xl leading-7 text-themed-primary font-bold">{title}</p>
      <p className="text-themed-secondary text-md font-medium leading-6">{body}</p>
      <div className="flex gap-4">
        <SmartLink
          href={link}
          className="hover-fade rounded-md dark:bg-white-15 bg-black-7 px-4 py-3 text-themed-primary text-sm font-bold w-fit"
        >
          Repo
        </SmartLink>
        {demolink && (
          <SmartLink
            href={demolink}
            className="hover-fade rounded-md dark:bg-white-15 bg-black-7 px-4 py-3 text-themed-primary text-sm font-bold w-fit"
          >
            Demo
          </SmartLink>
        )}
        {deployLink && (
          <SmartLink
            href={deployLink}
            className="hover-fade rounded-md dark:bg-white-15 bg-black-7 px-4 py-3 text-themed-primary text-sm font-bold w-fit"
          >
            Deploy
          </SmartLink>
        )}
      </div>
    </div>
  )
}
