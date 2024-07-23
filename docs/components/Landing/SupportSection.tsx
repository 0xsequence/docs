import { SmartLink } from './SmartLink'

export const SupportSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Support</h3>
      <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8">
        Get help with our stellar support team, community and knowledge base. Please feel free to reach out with any specific questions.
      </p>
    </div>
    <div className="flex flex-wrap gap-x-10 gap-y-5 md:flex-row flex-col">
      <ChangeLogItem
        link="https://0xsequence.canny.io/changelog"
        title="Changelog"
        body="See what we've been working on and keep up to date."
      />
      <CommunityItem
        link="https://discord.gg/sequence"
        title="Community"
        body="Join our Discord community to learn from others building on Sequence."
      />
      <ChatItem
        link="https://go.crisp.chat/chat/embed/?website_id=9ef4395b-6bb1-4645-8e02-6071d89290a1"
        title="Contact our team"
        body="Reach out to our team to get support on your integration or how you can partner with Sequence."
      />
      <SupportItem
        link="/support"
        title="Support"
        body="Browse our support pages which has everything from FAQs, to our token directory, and other resources."
      />
    </div>
  </section>
)

const SupportItem = ({
  title,
  body,
  link,
}: {
  title: string
  body: string
  link: string
}) => (
  <div className="md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6">{body}</p>
    </div>
    <SmartLink
      href={link}
      className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary"
    >
      Get Support
    </SmartLink>
  </div>
)

const ChatItem = ({
  title,
  body,
  link,
}: {
  title: string
  body: string
  link: string
}) => (
  <div className="md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6">{body}</p>
    </div>
    <SmartLink
      href={link}
      className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary"
    >
      Contact us
    </SmartLink>
  </div>
)


const ChangeLogItem = ({
  title,
  body,
  link,
}: {
  title: string
  body: string
  link: string
}) => (
  <div className="md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6">{body}</p>
    </div>
    <SmartLink
      href={link}
      className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary"
    >
      View Updates
    </SmartLink>
  </div>
)

const CommunityItem = ({
  title,
  body,
  link,
}: {
  title: string
  body: string
  link: string
}) => (
  <div className="md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6">{body}</p>
    </div>
    <SmartLink
      href={link}
      className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary"
    >
      Join us
    </SmartLink>
  </div>
)
