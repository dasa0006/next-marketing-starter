import { SITE_CONFIG } from "@/lib/config/site";
import { locales, defaultLocale } from "@/i18n/locale";
import type { Metadata } from "next";

export function getPageMetadata(locale: string, pathname: string): Metadata {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, "");
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const url = `${baseUrl}/${locale}${cleanPath}`;
  const ogImage = `${baseUrl}${SITE_CONFIG.ogImage}`;

  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = `${baseUrl}/${loc}${cleanPath}`;
  }
  languages["x-default"] = `${baseUrl}/${defaultLocale}${cleanPath}`;

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: SITE_CONFIG.twitterHandle,
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      images: [ogImage],
    },
  };
}
