import { ButtonVariant, ButtonSize } from "./Button.types";

export const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-brand-primary text-text-on-brand border border-brand-primary",
    "hover:bg-brand-primary-hover hover:border-brand-primary-hover",
    "active:scale-[0.98]",
    "disabled:bg-surface-subtle disabled:border-border-default disabled:text-text-disabled",
  ].join(" "),
  secondary: [
    "bg-brand-secondary text-text-primary border border-border-default",
    "hover:bg-surface-subtle hover:border-border-strong",
    "active:bg-surface-subtle active:scale-[0.98]",
    "disabled:text-text-disabled disabled:border-border-subtle",
  ].join(" "),
  accent: [
    "bg-brand-accent text-text-on-brand border border-brand-accent",
    "hover:bg-brand-accent-hover hover:border-brand-accent-hover",
    "active:scale-[0.98]",
    "disabled:bg-surface-subtle disabled:border-border-default disabled:text-text-disabled",
  ].join(" "),
  transparent: [
    "bg-transparent text-text-primary border border-border-default",
    "hover:bg-surface-subtle hover:border-border-strong",
    "active:bg-surface-subtle active:scale-[0.98]",
    "disabled:text-text-disabled disabled:border-border-subtle",
  ].join(" "),
  ghost: [
    "bg-transparent text-text-secondary border border-transparent",
    "hover:bg-surface-subtle hover:text-text-primary",
    "active:bg-surface-subtle active:scale-[0.98]",
    "disabled:text-text-disabled",
  ].join(" "),
};

export const sizeConfig: Record<
  ButtonSize,
  { button: string; icon: string; gap: string }
> = {
  sm: { button: "text-xs px-3 py-1.5", icon: "size-3.5", gap: "gap-1.5" },
  md: { button: "text-sm px-4 py-2", icon: "size-4", gap: "gap-2" },
  lg: { button: "text-base px-6 py-3", icon: "size-5", gap: "gap-2.5" },
};

export const baseStyles = [
  "relative inline-flex items-center justify-center rounded-pill",
  "font-semibold transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
].join(" ");
