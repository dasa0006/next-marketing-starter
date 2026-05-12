import { LinkButtonVariantsProps } from "./LinkButton.types";

export const buttonBase =
  "inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export const buttonVariants: LinkButtonVariantsProps = {
  // Dark background (surface-inverted) — amber primary pops on dark
  dark: {
    primary:
      "bg-brand-accent text-text-primary hover:opacity-90 focus-visible:ring-brand-accent",
    secondary:
      "border border-border-strong text-text-inverted hover:bg-surface-raised/10 hover:border-border-strong focus-visible:ring-border-focus",
    ghost:
      "text-text-inverted/70 hover:text-text-inverted focus-visible:ring-border-focus",
  },
  // Accent background (brand-accent / amber) — dark primary for contrast
  accent: {
    primary:
      "bg-surface-inverted text-text-inverted hover:opacity-90 focus-visible:ring-surface-inverted",
    secondary:
      "border border-border-strong/30 text-text-primary hover:bg-surface-inverted/10 focus-visible:ring-border-focus",
    ghost:
      "text-text-secondary hover:text-text-primary focus-visible:ring-border-focus",
  },
  // White/light background — brand primary CTA
  white: {
    primary:
      "bg-brand-primary text-text-on-brand hover:bg-brand-primary-hover focus-visible:ring-brand-primary",
    secondary:
      "bg-brand-secondary border border-border-default text-text-primary hover:bg-brand-secondary-hover focus-visible:ring-border-focus",
    ghost:
      "text-text-muted hover:text-text-primary focus-visible:ring-border-focus",
  },
};
