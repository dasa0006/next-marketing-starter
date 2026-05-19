import AboutPage from "@/components/pages/About";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";
import { getPageMetadata } from "@/lib/seo";
import { ParamsProps } from "@/types";
import { getTranslations, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ParamsProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage.metadata");

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    ...getPageMetadata(locale, "/about"),
  };
}

export default async function Page({ params }: ParamsProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: `/${locale}` },
          { name: "About", path: `/${locale}/about` },
        ]}
      />
      <AboutPage />
    </>
  );
}
