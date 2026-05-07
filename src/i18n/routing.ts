import { SITE_CONFIG } from "@/lib/config/site";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SITE_CONFIG.locales,

  // Used when no locale matches
  defaultLocale: SITE_CONFIG.defaultLocale,
  localePrefix: "as-needed",
});
