import PrimaryLayout from "@/components/layout/primaryLayout/PrimaryLayout";
import { routing } from "@/i18n/routing";
import { Params, ParamsProps } from "@/types";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

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
