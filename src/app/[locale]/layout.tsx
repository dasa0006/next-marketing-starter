import PrimaryLayout from "@/components/layout/primaryLayout/PrimaryLayout";
import { routing } from "@/i18n/routing";
import { Params } from "@/types";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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

  return (
    <html className="h-full" lang={locale}>
      <body>
        <NextIntlClientProvider>
          <PrimaryLayout>{children}</PrimaryLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
