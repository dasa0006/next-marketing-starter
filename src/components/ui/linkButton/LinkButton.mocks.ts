import { LinkButtonProps, LinkButtonVariant } from "./LinkButton.types";

export const defaultArgs: LinkButtonProps = {
  label: "Link Button",
  href: "/example",
  variant: "primary",
  background: "white",
};

export const variants: LinkButtonVariant[] = ["primary", "secondary", "ghost"];
export const backgrounds: NonNullable<LinkButtonProps["background"]>[] = [
  "white",
  "subtle",
  "dark",
  "accent",
];

export const backgroundStyles: Record<
  NonNullable<LinkButtonProps["background"]>,
  string
> = {
  white: "bg-white p-8 rounded-lg border border-border-default",
  subtle: "bg-surface-subtle p-8 rounded-lg",
  dark: "bg-surface-inverted p-8 rounded-lg",
  accent: "bg-brand-accent p-8 rounded-lg",
};
