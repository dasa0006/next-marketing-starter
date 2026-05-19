import { baseInteractive, sizeConfig } from "@/lib/styles/variants";
import { ButtonVariant } from "./Button.types";

export { sizeConfig };

export const baseStyles = [
  "relative",
  baseInteractive,
  "focus-visible:ring-brand-primary",
].join(" ");

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
