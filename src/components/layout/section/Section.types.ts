import { Surface } from "@/lib/config/theme";
import { ReactNode } from "react";

export type SectionSize = "sm" | "md" | "lg" | "xl";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  size?: SectionSize;
  background?: Surface;
  as?: "section" | "div" | "article" | "aside";
  id?: string;
}
