import { i18n } from "@lingui/core";

import { messages as en } from "./docs/locales/en";
import { messages as ja } from "./docs/locales/ja";

i18n.load("en", en);
i18n.load("ja", ja);

/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there are
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */
export async function loadCatalog(locale: string) {
  const messages = locale === "ja" ? ja : en;

  i18n.loadAndActivate({ locale, messages });
}
