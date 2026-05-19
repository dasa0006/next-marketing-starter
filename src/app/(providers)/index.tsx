"use client";

import { SITE_CONFIG } from "@/lib/config/site";
import { ConsentProvider } from "@/lib/consent";
import type { AbstractIntlMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone={SITE_CONFIG.timezone}
      >
        <ConsentProvider>{children}</ConsentProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
