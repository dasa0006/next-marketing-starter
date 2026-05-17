import { Background } from "@/components/layout/section/Section.types";

export interface LinkButtonProps {
  label: string;
  href: string;
  variant?: LinkButtonVariant;
  background?: Background;
  className?: string;
}

export type LinkButtonVariant = "primary" | "secondary" | "ghost";
export type BgKey = Background;

export type LinkButtonVariantsProps = Record<
  BgKey,
  Record<NonNullable<LinkButtonProps["variant"]>, string>
>;
