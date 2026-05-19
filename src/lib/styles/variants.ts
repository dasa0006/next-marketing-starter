export const baseInteractive = [
  "inline-flex items-center justify-center rounded-pill",
  "font-semibold transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
].join(" ");

export const sizeConfig = {
  sm: { button: "text-xs px-3 py-1.5", icon: "size-3.5", gap: "gap-1.5" },
  md: { button: "text-sm px-4 py-2", icon: "size-4", gap: "gap-2" },
  lg: { button: "text-base px-6 py-3", icon: "size-5", gap: "gap-2.5" },
} as const;
