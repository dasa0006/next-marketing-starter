import { SectionBackground, SectionSize } from "./Section.types";

export const sizeMap: Record<SectionSize, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-40",
};

export const backgroundMap: Record<SectionBackground, string> = {
  white: "bg-surface-base text-text-primary",
  subtle: "bg-surface-subtle text-text-primary",
  dark: "bg-surface-inverted text-text-inverted",
  accent: "bg-brand-accent text-text-primary",
};
