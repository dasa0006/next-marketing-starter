"use client";

import { MaxWidthWrapper } from "@/components/layout/maxWidthWrapper/MaxWidthWrapper";
import { Button } from "@/components/ui/button/Button";
import { Link } from "@/i18n/navigation";
import { Home, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MaxWidthWrapper>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-feedback-error/10">
          <span className="text-3xl">!</span>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t("title")}
        </h1>

        <p className="mt-4 max-w-md text-base text-text-secondary">
          {t("description")}
        </p>

        {error.digest && (
          <p className="mt-4 text-xs text-text-muted">
            {t("reference")}: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            onClick={reset}
            leftIcon={<RotateCcw size={18} />}
            variant="primary"
          >
            {t("tryAgain")}
          </Button>

          <Link
            href={"/"}
            className="inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold text-text-secondary transition-colors hover:bg-surface-subtle hover:text-text-primary"
          >
            <Home size={16} />
            {t("backHome")}
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
