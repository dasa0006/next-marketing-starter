import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading/Heading";
import { TextBlockProps } from "./TextBlock.types";

export const TextBlock = ({
  as: Tag = "div",
  heading,
  headingLevel = "h2",
  body,
  alignment = "left",
  className,
  children,
}: TextBlockProps) => {
  return (
    <Tag
      className={cn(
        "flex flex-col gap-4",
        alignment === "center" && "text-center",
        alignment === "right" && "text-right",
        className
      )}
    >
      {heading && <Heading as={headingLevel}>{heading}</Heading>}
      {body && (
        <div
          className={cn(
            "max-w-prose text-pretty text-text-secondary",
            alignment === "center" && "mx-auto",
            alignment === "right" && "ml-auto"
          )}
        >
          {typeof body === "string" ? <p>{body}</p> : body}
        </div>
      )}
      {children}
    </Tag>
  );
};
