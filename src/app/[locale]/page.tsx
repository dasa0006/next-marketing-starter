import IndexPage from "@/components/pages/Index";
import { ParamsProps } from "@/types";
import { setRequestLocale } from "next-intl/server";

export default async function Page({ params }: ParamsProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <IndexPage />;
}
