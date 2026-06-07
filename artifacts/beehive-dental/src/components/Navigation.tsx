import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Facebook, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANGUAGES, useT } from "@/lib/i18n";
import { PRACTICE } from "@/lib/practice";
import { cn } from "@/lib/utils";

import logo from "@assets/logo przychodnia bez tła mniejsza linia.png";

const NAV_ITEMS = [
  { href: "/about", label: "O nas", testId: "nav-about" },
  { href: "/team", label: "Zespół", testId: "nav-team" },
  { href: "/pricing", label: "Cennik", testId: "nav-pricing" },
  { href: "/new-patients", label: "Dla pacjenta", testId: "nav-new-patients" },
  { href: "/gallery", label: "Galeria", testId: "nav-gallery" },
  { href: "/contact", label: "Kontakt", testId: "nav-contact" },
] as const;

const MOBILE_NAV_ITEMS = [
  { href: "/", label: "Start", testId: "nav-home" },
  ...NAV_ITEMS,
] as const;

function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useT();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-white/70 p-1 shadow-sm",
        compact ? "w-fit" : "",
      )}
      data-testid="language-switcher"
      aria-label={t("Wybierz język")}
    >
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          className={cn(
            "inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold transition-colors",
            language === item.code
              ? "bg-secondary text-white shadow-sm"
              : "text-foreground/65 hover:bg-secondary/10 hover:text-secondary",
          )}
          aria-pressed={language === item.code}
          aria-label={t(item.name)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useT();

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center shrink-0 group"
          data-testid="nav-logo"
          onClick={closeMobileMenu}
        >
          <img src={logo} alt="Przychodnia Korona" className="h-11 w-auto max-w-[170px] object-contain md:h-14 md:max-w-[210px]" />
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
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <LanguageSwitcher />
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
            <Link href={PRACTICE.bookingUrl}>{t("Umów wizytę")}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors"
          data-testid="nav-mobile-menu"
          aria-label={mobileOpen ? t("Zamknij menu") : t("Otwórz menu")}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-[55] xl:hidden bg-foreground/10 backdrop-blur-[2px]"
            aria-label={t("Zamknij menu")}
            onClick={closeMobileMenu}
          />
          <div id="mobile-navigation" className="fixed inset-x-3 top-[4.5rem] z-[60] xl:hidden max-h-[calc(100svh-5rem)] overflow-y-auto rounded-[1.75rem] border border-border/70 bg-background/95 shadow-2xl backdrop-blur-xl">
            <div className="px-5 py-5 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/45">{t("Menu")}</p>
                  <p className="text-lg font-semibold text-foreground">Przychodnia Korona</p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground"
                  aria-label={t("Zamknij menu")}
                  onClick={closeMobileMenu}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <LanguageSwitcher compact />

              <nav className="grid grid-cols-2 gap-2 text-sm font-semibold">
                {MOBILE_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group min-h-14 rounded-2xl border px-4 py-3 transition-colors flex items-center justify-between gap-2",
                    isActive(item.href)
                      ? "border-secondary/30 bg-secondary/10 text-secondary"
                      : "border-border/60 bg-white/65 text-foreground/80 hover:border-secondary/40 hover:text-secondary",
                  )}
                  data-testid={`${item.testId}-mobile`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={closeMobileMenu}
                >
                  {t(item.label)}
                  <ArrowRight className={cn("w-3.5 h-3.5 transition-transform", isActive(item.href) ? "opacity-100" : "opacity-35 group-hover:translate-x-0.5")} />
                </Link>
              ))}
            </nav>

              <div className="grid grid-cols-2 gap-2 border-t border-border/60 pt-4">
                <a
                  href={PRACTICE.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-secondary text-white text-sm font-semibold shadow-md"
                  data-testid="nav-phone-mobile"
                >
                  <Phone className="w-4 h-4" />
                  {t("Zadzwoń")}
                </a>
                <a
                  href={PRACTICE.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-white/70 text-sm font-semibold text-foreground"
                  data-testid="nav-map-mobile"
                >
                  <MapPin className="w-4 h-4 text-secondary" />
                  {t("Dojazd")}
                </a>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
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
                </div>
                <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-full shadow-md hover:shadow-lg transition-all"
                  data-testid="nav-book-online-mobile"
                >
                  <Link href={PRACTICE.bookingUrl} onClick={closeMobileMenu}>
                    {t("Rejestracja")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
