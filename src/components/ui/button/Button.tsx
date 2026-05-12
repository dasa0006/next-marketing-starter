import { useButtonTracking } from "@/lib/hooks/useButtonTracking";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import { forwardRef, ReactNode } from "react";
import { ButtonProps } from "./Button.types";
import { baseStyles, sizeConfig, variantStyles } from "./styleConfig";

// ─── Spinner ─────────────────────────────────────────────────────────────────

const Spinner = ({
  sizeClass,
  label,
}: {
  sizeClass: string;
  label: string;
}) => (
  <span
    className="absolute inset-0 flex items-center justify-center"
    role="status"
  >
    <LoaderCircle className={cn("animate-spin shrink-0", sizeClass)} />
    <span className="sr-only">{label}</span>
  </span>
);

// ─── Icon Wrapper ────────────────────────────────────────────────────────────

const IconSlot = ({
  children,
  sizeClass,
}: {
  children: ReactNode;
  sizeClass: string;
}) => (
  <span className={cn("shrink-0", sizeClass)} aria-hidden="true">
    {children}
  </span>
);

// ─── Button ──────────────────────────────────────────────────────────────────

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      loadingLabel = "Loading",
      leftIcon,
      rightIcon,
      trackingEvent,
      trackingMeta,
      className,
      onClick,
      disabled,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    const { handleClick } = useButtonTracking({
      event: trackingEvent,
      meta: trackingMeta,
      onClick,
    });

    const isDisabled = disabled || isLoading;
    const { button: sizeStyle, icon: iconStyle, gap } = sizeConfig[size];

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        onClick={handleClick}
        className={cn(baseStyles, variantStyles[variant], sizeStyle, className)}
        {...props}
      >
        {isLoading && <Spinner sizeClass={iconStyle} label={loadingLabel} />}

        <span
          className={cn(
            "inline-flex items-center justify-center",
            gap,
            isLoading && "invisible"
          )}
          aria-hidden={isLoading}
        >
          {leftIcon && <IconSlot sizeClass={iconStyle}>{leftIcon}</IconSlot>}
          {children}
          {rightIcon && <IconSlot sizeClass={iconStyle}>{rightIcon}</IconSlot>}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
