import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Facebook, Instagram, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/practice";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/services", label: "Usługi", testId: "nav-services" },
  { href: "/about", label: "O nas", testId: "nav-about" },
  { href: "/team", label: "Zespół", testId: "nav-team" },
  { href: "/new-patients", label: "Dla pacjenta", testId: "nav-new-patients" },
  { href: "/gallery", label: "Galeria", testId: "nav-gallery" },
  { href: "/contact", label: "Kontakt", testId: "nav-contact" },
] as const;

export function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? location === href : location === href || location.startsWith(`${href}/`);

  const navLinkClass = (href: string) =>
    cn(
      "transition-colors",
      isActive(href)
        ? "text-secondary font-semibold"
        : "text-foreground/80 hover:text-secondary",
    );

  const socialIconClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-colors hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary";

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          data-testid="nav-logo"
          onClick={closeMobileMenu}
        >
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
              Przychodnia Korona
            </span>
            <span className="text-xs uppercase tracking-widest text-foreground/50">Nowa Sól</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-5 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(item.href)}
              data-testid={item.testId}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href={PRACTICE.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className={socialIconClass}
            aria-label={`Facebook: ${PRACTICE.facebookName}`}
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={PRACTICE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className={socialIconClass}
            aria-label={`Instagram: ${PRACTICE.instagramName}`}
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={PRACTICE.phoneHref}
            className="text-sm font-medium text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
            data-testid="nav-phone"
          >
            <Phone className="w-4 h-4" />
            {PRACTICE.phoneDisplay}
          </a>
          <Button
            asChild
            className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            data-testid="nav-book-online"
          >
            <Link href={PRACTICE.bookingUrl}>Umów wizytę</Link>
          </Button>
        </div>

        <button
          type="button"
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors"
          data-testid="nav-mobile-menu"
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="xl:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-5">
            <nav className="flex flex-col gap-1 text-base font-medium">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-2 py-3 transition-colors",
                    isActive(item.href)
                      ? "bg-secondary/10 text-secondary font-semibold"
                      : "text-foreground/80 hover:bg-muted hover:text-secondary",
                  )}
                  data-testid={`${item.testId}-mobile`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 border-t border-border/50 pt-4">
              <a
                href={PRACTICE.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className={socialIconClass}
                aria-label={`Facebook: ${PRACTICE.facebookName}`}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PRACTICE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className={socialIconClass}
                aria-label={`Instagram: ${PRACTICE.instagramName}`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={PRACTICE.phoneHref}
                className="ml-auto text-sm font-medium text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                data-testid="nav-phone-mobile"
              >
                <Phone className="w-4 h-4" />
                {PRACTICE.phoneDisplay}
              </a>
            </div>

            <Button
              asChild
              className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-md hover:shadow-lg transition-all"
              data-testid="nav-book-online-mobile"
            >
              <Link href={PRACTICE.bookingUrl} onClick={closeMobileMenu}>
                Umów wizytę
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
