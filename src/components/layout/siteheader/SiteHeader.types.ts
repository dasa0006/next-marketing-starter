import { LinkButtonVariant } from "@/components/ui/linkButton/LinkButton.types";

export interface NavLinkProps {
  label: string;
  href: string;
}

export interface HeaderCTAProps {
  label: string;
  href: string;
  variant?: LinkButtonVariant;
}

export type SiteHeaderVariant = "solid" | "transparent";

export interface SiteHeaderProps {
  navLinks?: NavLinkProps[];
  ctas?: HeaderCTAProps[];
  /**
   * `solid`       — always white with a bottom border.
   * `transparent` — starts transparent (for use over a full-bleed hero),
   *                 then transitions to solid once the user scrolls.
   */
  variant?: SiteHeaderVariant;
  showLocaleSwitcher?: boolean; // ← new flag
  className?: string;
}
