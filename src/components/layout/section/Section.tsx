import { cn } from "@/lib/utils";
import { SectionProps } from "./Section.types";
import { backgroundMap, sizeMap } from "./styleConfig";

export const Section = ({
  children,
  className,
  size = "md",
  background = "white",
  as: Tag = "section",
  id,
}: SectionProps) => {
  return (
    <Tag
      id={id}
      className={cn(
        "w-full",
        sizeMap[size],
        backgroundMap[background],
        className
      )}
    >
      {children}
    </Tag>
  );
};
