import { ReactNode } from "react";

export type SectionSize = "sm" | "md" | "lg" | "xl";
export type SectionBackground = "white" | "subtle" | "dark" | "accent";
export type Background = Extract<
  SectionBackground,
  "dark" | "accent" | "white"
>;

export interface SectionProps {
  children: ReactNode;
  className?: string;
  size?: SectionSize;
  background?: SectionBackground;
  as?: "section" | "div" | "article" | "aside";
  id?: string;
}