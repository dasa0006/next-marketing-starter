import { useTranslations } from "next-intl";

export const NewComp = () => {
  const t = useTranslations("IndexPage");

  return <div>{t("content")}</div>;
};
