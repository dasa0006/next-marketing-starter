import { AbstractIntlMessages } from "next-intl";

import baseDa from "../messages/base/da.json";
import baseEn from "../messages/base/en.json";
import customDa from "../messages/custom/da.json";
import customEn from "../messages/custom/en.json";
import { SITE_CONFIG } from "../src/lib/config/site";

const routing = {
  locales: SITE_CONFIG.locales,
  defaultLocale: SITE_CONFIG,
};

type Locale = (typeof routing.locales)[number];
type Messages = AbstractIntlMessages;
type MessagesCollection = Record<Locale, Messages>;

const baseMessages: MessagesCollection = {
  en: baseEn as Messages,
  da: baseDa as Messages,
};

const customMessages: MessagesCollection = {
  en: customEn as Messages,
  da: customDa as Messages,
};

// Factory function to merge messages per locale
const createMessages = (locale: Locale): Messages => ({
  ...baseMessages[locale],
  ...customMessages[locale],
});

export default {
  defaultLocale: routing.defaultLocale,
  messagesByLocale: {
    en: createMessages("en"),
    da: createMessages("da"),
  } satisfies Record<Locale, Messages>,
} as const;
