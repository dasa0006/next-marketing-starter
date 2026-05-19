import { CookieBanner } from "@/components/layout/cookieBanner/CookieBanner";
import SiteFooter from "@/components/layout/siteFooter/SiteFooter";
import SiteHeader from "@/components/layout/siteHeader/SiteHeader";
import { routing } from "@/i18n/routing";
import { getPageMetadata } from "@/lib/seo";
import { fontVariables } from "@/lib/styles/fonts";
import { Params, ParamsProps } from "@/types";
import { hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { Providers } from "../(providers)";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ParamsProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Metadata");

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    ...getPageMetadata(locale, ""),
  };
}

type Props = {
  children: React.ReactNode;
  params: Params;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        <Providers locale={locale} messages={messages}>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
