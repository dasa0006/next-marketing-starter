import { ReactNode } from "react";

export type TextBlockAlignment = "left" | "center" | "right";
export type TextBlockHeadingLevel = "h1" | "h2" | "h3" | "h4";
export type ImagePosition = "left" | "right" | "top";

export interface TextBlockImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface TextBlockProps {
  as?: "div" | "article" | "section";
  heading?: string;
  headingLevel?: TextBlockHeadingLevel;
  body?: ReactNode;
  image?: TextBlockImage;
  imagePosition?: ImagePosition;
  alignment?: TextBlockAlignment;
  className?: string;
  children?: ReactNode;
}
