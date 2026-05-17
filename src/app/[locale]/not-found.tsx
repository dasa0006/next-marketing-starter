"use client";

import { Link } from "@/i18n/navigation";
import { MaxWidthWrapper } from "@/components/layout/maxWidthWrapper/MaxWidthWrapper";
import { useTranslations } from "next-intl";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");

  return (
    <MaxWidthWrapper>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-feedback-error/10">
          <span className="text-3xl font-bold text-feedback-error">404</span>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t("title")}
        </h1>

        <p className="mt-4 max-w-md text-base text-text-secondary">
          {t("description")}
        </p>

        <Link
          href={"/"}
          className="mt-8 inline-flex items-center gap-2 rounded-pill bg-brand-primary px-6 py-3 text-sm font-semibold text-text-on-brand transition-colors hover:bg-brand-primary-hover"
        >
          {t("backHome")}
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
