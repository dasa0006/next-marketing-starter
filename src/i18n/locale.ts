import baseDa from "../../messages/base/da.json";
import baseEn from "../../messages/base/en.json";
import customDa from "../../messages/custom/da.json";
import customEn from "../../messages/custom/en.json";

export const locales = ["en", "da"] as const;
export const defaultLocale = "en";
export const localePrefix = "as-needed";

const baseMessages: Record<string, unknown> = { en: baseEn, da: baseDa };
const customMessages: Record<string, unknown> = { en: customEn, da: customDa };

export function loadMessages(locale: string): Record<string, unknown> {
  return { ...(baseMessages[locale] as Record<string, unknown>), ...(customMessages[locale] as Record<string, unknown>) };
}
