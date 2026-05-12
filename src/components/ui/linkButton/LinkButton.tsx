import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LinkButtonProps } from "./LinkButton.types";
import { buttonBase, buttonVariants } from "./styleConfig";

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  variant = "primary",
  background = "white",
  className,
}) => {
  return (
    <Link
      key={label}
      href={href}
      className={cn(className, buttonBase, buttonVariants[background][variant])}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
