import { ParamsProps } from "@/types";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

export async function generateMetadata({ params }: ParamsProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");

  return {
    title: t("metaTitle"), // "About Us" | "Acme, inc." (auto‑appended)
    description: t("metaDescription"),
  };
}

export default function AboutPage({ params }: ParamsProps) {
  const { locale } = use(params); // you can use `use()` if needed
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");

  return <h1 className="">{t("heading")}</h1>;
}
