import { Trans, useLingui } from "@lingui/react/macro";
import { SmartLink } from "./SmartLink";

export const SupportSection = () => {
  const {
    t,
    i18n: { locale },
  } = useLingui();
  const lang = locale === "en" ? "" : locale;
  return (
    <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
      <div className="flex flex-col gap-1 py-5">
        <h3 className="text-3xl text-themed-primary font-bold">
          <Trans>Support</Trans>
        </h3>
        <p className="text-md leading-6 font-medium max-w-xl dark:text-white-80 text-black-80 mr-8">
          <Trans>
            Get help with our stellar support team, community and knowledge base. Please feel free to reach out with any
            specific questions.
          </Trans>
        </p>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-5 md:flex-row flex-col">
        <ChangeLogItem
          link="https://0xsequence.featurebase.app/"
          title={t`Changelog`}
          body={t`See what we've been working on and keep up to date.`}
        />
        <CommunityItem
          link="https://discord.gg/sequence"
          title={t`Community`}
          body={t`Join our Discord community to learn from others building on Sequence.`}
        />
        <ChatItem
          link="https://go.crisp.chat/chat/embed/?website_id=9ef4395b-6bb1-4645-8e02-6071d89290a1"
          title={t`Contact our team`}
          body={t`Reach out to our team to get support on your integration or how you can partner with Sequence.`}
        />
        <SupportItem
          link={`${lang}/support`}
          title={t`Support`}
          body={t`Browse our support pages which has everything from FAQs, to our token directory, and other resources.`}
        />
      </div>
    </section>
  );
};

const SupportItem = ({ title, body, link }: { title: string; body: string; link: string }) => (
  <div className="md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6">{body}</p>
    </div>
    <SmartLink
      href={link}
      className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary"
    >
      <Trans>Get Support</Trans>
    </SmartLink>
  </div>
);

const ChatItem = ({ title, body, link }: { title: string; body: string; link: string }) => (
  <div className="md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6">{body}</p>
    </div>
    <SmartLink
      href={link}
      className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary"
    >
      <Trans>Contact us</Trans>
    </SmartLink>
  </div>
);

const ChangeLogItem = ({ title, body, link }: { title: string; body: string; link: string }) => (
  <div className="md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6">{body}</p>
    </div>
    <SmartLink
      href={link}
      className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary"
    >
      <Trans>View Updates</Trans>
    </SmartLink>
  </div>
);

const CommunityItem = ({ title, body, link }: { title: string; body: string; link: string }) => (
  <div className="md:w-[calc(50%-20px)] border-t dark:border-white-10 border-black-10 flex flex-col gap-3 py-5">
    <div>
      <p className="text-themed-primary font-bold text-xl leading-7">{title}</p>
      <p className="text-themed-secondary font-medium text-sm leading-5 md:pr-0 pr-6">{body}</p>
    </div>
    <SmartLink
      href={link}
      className="hover-fade px-5 py-3 dark:bg-white-15 bg-black-7 rounded-full w-fit text-sm leading-5 font-bold text-themed-primary"
    >
      <Trans>Join us</Trans>
    </SmartLink>
  </div>
);
