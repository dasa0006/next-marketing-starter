import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading/Heading";
import { Image } from "@/components/ui/image/Image";
import { TextBlockProps } from "./TextBlock.types";

export const TextBlock = ({
  as: Tag = "div",
  heading,
  headingLevel = "h2",
  body,
  image,
  imagePosition = "top",
  alignment = "left",
  className,
  children,
}: TextBlockProps) => {
  const imageMarkup = image ? (
    <div
      className={cn(
        "shrink-0 overflow-hidden rounded-card",
        imagePosition !== "top" ? "md:w-1/2" : "w-full"
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width ?? 600}
        height={image.height ?? 400}
        className="h-auto w-full object-cover"
      />
    </div>
  ) : null;

  const textMarkup = (
    <div
      className={cn(
        "flex flex-col gap-4",
        imagePosition !== "top" && "flex-1",
        alignment === "center" && "text-center",
        alignment === "right" && "text-right"
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
    </div>
  );

  return (
    <Tag
      className={cn(
        "flex flex-col gap-6",
        image && imagePosition !== "top" && "md:flex-row md:items-center",
        className
      )}
    >
      {(imagePosition === "left" || imagePosition === "top") && imageMarkup}
      {textMarkup}
      {image && imagePosition === "right" && imageMarkup}
    </Tag>
  );
};
