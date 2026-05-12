import { ButtonProps } from "./Button.types";

const base: ButtonProps = {
  children: "Get started",
  variant: "primary",
  size: "md",
};

export const mockButtonProps = base;

export const mockButtonSecondaryProps: ButtonProps = {
  ...base,
  children: "Learn more",
  variant: "secondary",
};

export const mockButtonGhostProps: ButtonProps = {
  ...base,
  children: "Dismiss",
  variant: "ghost",
};

export const mockButtonLoadingProps: ButtonProps = {
  ...base,
  children: "Saving…",
  isLoading: true,
  loadingLabel: "Saving your changes",
};

export const mockButtonDisabledProps: ButtonProps = {
  ...base,
  children: "Unavailable",
  disabled: true,
};

export const mockButtonSmProps: ButtonProps = {
  ...base,
  children: "Small",
  size: "sm",
};

export const mockButtonLgProps: ButtonProps = {
  ...base,
  children: "Large",
  size: "lg",
};

export const mockButtonWithTrackingProps: ButtonProps = {
  ...base,
  children: "Subscribe",
  trackingEvent: "cta_clicked",
  trackingMeta: { location: "hero", campaign: "spring-2025" },
};
