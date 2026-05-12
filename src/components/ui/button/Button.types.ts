import { TrackingMeta } from "@/lib/hooks/useButtonTracking";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "transparent"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Shows spinner and disables interaction */
  isLoading?: boolean;
  /** Accessible label for loading state */
  loadingLabel?: string;
  /** Icon rendered before children */
  leftIcon?: ReactNode;
  /** Icon rendered after children */
  rightIcon?: ReactNode;
  /** Analytics event name */
  trackingEvent?: string;
  /** Analytics event metadata */
  trackingMeta?: TrackingMeta;
  children: ReactNode;
}
