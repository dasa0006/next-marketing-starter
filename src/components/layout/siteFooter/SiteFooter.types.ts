import { ReactNode } from "react";

export interface FooterLinkProps {
  label: string;
  href: string;
}

export interface FooterColumnProps {
  heading: string;
  links: FooterLinkProps[];
}

export interface SocialLinkProps {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface FooterProps {
  tagline?: string;
  columns?: FooterColumnProps[];
  socialLinks?: SocialLinkProps[];
  legalLinks?: FooterLinkProps[];
  copyright?: string;
  className?: string;
}
