import { Surface } from "@/lib/config/theme";

export interface LinkButtonProps {
  label: string;
  href: string;
  variant?: LinkButtonVariant;
  background?: Surface;
  className?: string;
}

export type LinkButtonVariant = "primary" | "secondary" | "ghost";

export type LinkButtonVariantsProps = Record<
  Surface,
  Record<NonNullable<LinkButtonProps["variant"]>, string>
>;
