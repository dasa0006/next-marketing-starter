"use client";

import { MaxWidthWrapper } from "@/components/layout/maxWidthWrapper/MaxWidthWrapper";
import Brand from "@/components/ui/brand/Brand";
import LinkButton from "@/components/ui/linkButton/LinkButton";
import { LocaleSwitcher } from "@/components/ui/localeSwitcher/LocaleSwitcher";
import ToggleMode from "@/components/ui/toggleMode/ToggleMode";
import { Link } from "@/i18n/navigation";
import { NAVIGATION } from "@/lib/config/navigation";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileDrawer from "../mobileDrawer/MobileDrawer";
import { SiteHeaderProps } from "./SiteHeader.types";

const SiteHeader = ({
  variant = "solid",
  showLocaleSwitcher,
  className,
}: SiteHeaderProps) => {
  const { navLinks, ctas } = NAVIGATION;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrolled();

  const isTransparent = variant === "transparent";
  const solidified = isTransparent && scrolled;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 w-full transition-all duration-300",
          // Background
          isTransparent && !solidified
            ? "bg-transparent"
            : "bg-surface-base/90 backdrop-blur-md",
          // Border — appears once solid
          !isTransparent || solidified
            ? scrolled
              ? "border-b border-border-subtle shadow-sm"
              : "border-b border-border-subtle"
            : "border-b border-transparent",
          className
        )}
      >
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between gap-8">
            {/* Brand */}
            <Brand href="/" />

            {/* Desktop nav */}
            {navLinks.length > 0 && (
              <nav
                aria-label="Main navigation"
                className="hidden md:flex md:items-center md:gap-1"
              >
                <ul className="flex items-center gap-1" role="list">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors duration-150 hover:bg-surface-subtle hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Toggle dark mode */}
            <ToggleMode />

            {/* Desktop CTAs + mobile hamburger */}
            <div className="flex items-center gap-2">
              {/* Desktop CTAs */}
              {ctas.length > 0 && (
                <div className="hidden items-center gap-2 md:flex">
                  {ctas.map((cta) => (
                    <LinkButton
                      key={cta.label}
                      href={cta.href}
                      label={cta.label}
                      variant={cta.variant}
                    />
                  ))}
                </div>
              )}

              {showLocaleSwitcher && (
                <div className="hidden md:block">
                  <LocaleSwitcher />
                </div>
              )}

              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
                aria-controls="mobile-nav-drawer"
                onClick={() => setDrawerOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-subtle hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus md:hidden"
              >
                <Menu />
              </button>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>

      {/* Mobile drawer — rendered outside the header flow so it can be full-height */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        showLocaleSwitcher={showLocaleSwitcher}
      />
    </>
  );
};

export default SiteHeader;
