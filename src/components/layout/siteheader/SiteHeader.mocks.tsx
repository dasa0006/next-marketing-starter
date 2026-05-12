import { SiteHeaderProps } from "./SiteHeader.types";

const base: SiteHeaderProps = {
  navLinks: [
    { label: "Product", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Docs", href: "#" },
  ],
  ctas: [
    { label: "Sign in", href: "#", variant: "secondary" },
    { label: "Get started", href: "#", variant: "primary" },
  ],
  variant: "solid",
};

export const mockSiteHeaderProps = base;

export const mockSiteHeaderTransparent: SiteHeaderProps = {
  ...base,
  variant: "transparent",
};

export const mockSiteHeaderMinimal: SiteHeaderProps = {
  ctas: [{ label: "Get started", href: "#", variant: "primary" }],
};

export const mockSiteHeaderNavOnly: SiteHeaderProps = {
  navLinks: base.navLinks,
};

export const mockSiteHeaderWithLocaleSwitcher: SiteHeaderProps = {
  navLinks: base.navLinks,
  showLocaleSwitcher: true,
  ctas: [{ label: "Get started", href: "#", variant: "primary" }],
};
