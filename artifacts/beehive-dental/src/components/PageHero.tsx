import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FADE_UP } from "@/components/Footer";
import { cn } from "@/lib/utils";

type PageHeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  external?: boolean;
  testId?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  actions?: PageHeroAction[];
  height?: "standard" | "large" | "home";
  titleSize?: "standard" | "large";
  mobileObjectPosition?: string;
  desktopObjectPosition?: string;
  className?: string;
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const heroHeights = {
  standard: "min-h-[560px] md:h-[70vh] md:min-h-[500px]",
  large: "min-h-[600px] md:h-[80vh] md:min-h-[560px]",
  home: "min-h-[640px] md:h-[90vh] md:min-h-[600px]",
};

const titleSizes = {
  standard: "text-4xl sm:text-5xl md:text-6xl",
  large: "text-[2.55rem] sm:text-5xl md:text-7xl",
};

function renderAction(action: PageHeroAction) {
  const variant = action.variant ?? "primary";
  const className =
    variant === "primary"
      ? "w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-7 h-12 md:h-14 text-base shadow-xl group"
      : "w-full sm:w-auto bg-white/55 backdrop-blur-sm border-border/50 hover:bg-white/85 rounded-full px-7 h-12 md:h-14 text-base transition-all";
  const content = (
    <>
      {action.icon}
      {action.label}
      {action.trailingIcon}
    </>
  );

  return (
    <Button key={`${action.href}-${action.label}`} asChild variant={variant === "primary" ? "default" : "outline"} size="lg" className={className} data-testid={action.testId}>
      {action.external ? (
        <a href={action.href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : action.href.startsWith("/") ? (
        <Link href={action.href}>{content}</Link>
      ) : (
        <a href={action.href}>{content}</a>
      )}
    </Button>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
  actions = [],
  height = "standard",
  titleSize = "standard",
  mobileObjectPosition = "center center",
  desktopObjectPosition = "center center",
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative w-full flex items-center pt-20", heroHeights[height], className)}>
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover [object-position:var(--hero-mobile-position)] md:[object-position:var(--hero-desktop-position)]"
          style={
            {
              "--hero-mobile-position": mobileObjectPosition,
              "--hero-desktop-position": desktopObjectPosition,
            } as CSSProperties
          }
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/70 md:bg-gradient-to-r md:from-background/95 md:via-background/80 md:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
        <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-2xl">
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 text-sm font-medium mb-5 md:mb-6">
            {eyebrow}
          </motion.div>
          <motion.h1 variants={FADE_UP} className={cn(titleSizes[titleSize], "font-semibold text-foreground leading-[1.08] mb-5 md:mb-6")}>
            {title}
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-base sm:text-lg md:text-xl text-foreground/70 mb-7 md:mb-10 max-w-xl leading-relaxed">
            {description}
          </motion.p>
          {actions.length > 0 && (
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {actions.map(renderAction)}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
