import { ReactNode } from "react";

export type TextBlockAlignment = "left" | "center" | "right";
export type TextBlockHeadingLevel = "h1" | "h2" | "h3" | "h4";

export interface TextBlockProps {
  as?: "div" | "article" | "section";
  heading?: string;
  headingLevel?: TextBlockHeadingLevel;
  body?: ReactNode;
  alignment?: TextBlockAlignment;
  className?: string;
  children?: ReactNode;
}
