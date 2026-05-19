export type SiteHeaderVariant = "solid" | "transparent";

export interface SiteHeaderProps {
  variant?: SiteHeaderVariant;
  showLocaleSwitcher?: boolean;
  className?: string;
}
