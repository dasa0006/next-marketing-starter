import { locales, defaultLocale, loadMessages } from "../src/i18n/locale";

export default {
  defaultLocale,
  messagesByLocale: Object.fromEntries(
    locales.map((locale) => [locale, loadMessages(locale)])
  ),
} as const;
