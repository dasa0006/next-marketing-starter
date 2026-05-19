import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale, localePrefix } from "./locale";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
});
