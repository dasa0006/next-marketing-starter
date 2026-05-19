import { LEGAL_ROUTES } from "./routes";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

export const NAVIGATION = {
  navLinks: [
    { label: "Product", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Docs", href: "#" },
  ] satisfies NavLink[],
  ctas: [
    { label: "Sign in", href: "#", variant: "secondary" } as HeaderCTA,
    { label: "Get started", href: "#", variant: "primary" } as HeaderCTA,
  ],
  legalLinks: [
    { label: "Privacy Policy", href: LEGAL_ROUTES.PRIVACY },
    { label: "Terms of Service", href: LEGAL_ROUTES.TERMS },
    { label: "Cookie Policy", href: LEGAL_ROUTES.COOKIE_POLICY },
  ] satisfies NavLink[],
};
