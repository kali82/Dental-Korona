import { MessageCircle, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";
import { PRACTICE } from "@/lib/practice";
import { cn } from "@/lib/utils";

export function MobileStickyActions() {
  const [location] = useLocation();
  const contactActive = location === "/contact";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 bg-gradient-to-t from-background via-background/95 to-background/0 pointer-events-none">
      <div className="grid grid-cols-2 gap-2 rounded-full border border-border/70 bg-background/95 p-2 shadow-2xl backdrop-blur-md pointer-events-auto">
        <a
          href={PRACTICE.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-secondary text-white text-sm font-semibold shadow-md active:scale-[0.98] transition-transform"
          data-testid="mobile-sticky-call"
        >
          <Phone className="w-4 h-4" />
          Zadzwoń
        </a>
        <Link
          href="/contact"
          className={cn(
            "inline-flex h-12 items-center justify-center gap-2 rounded-full border text-sm font-semibold active:scale-[0.98] transition-all",
            contactActive
              ? "border-secondary/30 bg-secondary/10 text-secondary"
              : "border-border bg-white/70 text-foreground hover:border-secondary/40 hover:text-secondary",
          )}
          data-testid="mobile-sticky-contact"
        >
          <MessageCircle className="w-4 h-4" />
          Kontakt
        </Link>
      </div>
    </div>
  );
}
