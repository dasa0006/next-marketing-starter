import { Link } from "@/i18n/navigation";
import { SITE_CONFIG } from "@/lib/config/site";
import { cn } from "@/lib/utils";

interface BrandProps {
  name?: string;
  href?: string;
  className?: string;
}

const Brand = ({ name, href, className }: BrandProps) => {
  const brandName = name ?? SITE_CONFIG.name;

  const content = (
    <span className={cn("text-lg font-bold tracking-tight text-text-primary", className)}>
      {brandName}
      <span className="text-brand-accent">.</span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="Go to homepage"
        className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 rounded-md"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Brand;
