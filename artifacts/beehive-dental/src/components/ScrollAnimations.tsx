import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Activity, CircleDot, Shield, Smile, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const revealPresets = {
  fadeUp: {
    hidden: { opacity: 0, y: 42 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 56 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] } },
  },
  slideRight: {
    hidden: { opacity: 0, x: -56 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
} satisfies Record<string, Variants>;

export const STAGGER_DYNAMIC: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  preset?: keyof typeof revealPresets;
  as?: "div" | "section" | "article";
  margin?: string;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  preset = "fadeUp",
  as = "div",
  margin = "-80px",
  once = true,
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={revealPresets[preset]}
      className={className}
    >
      {children}
    </Component>
  );
}

export function MotionCard({
  children,
  className,
  variants = revealPresets.scaleIn,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className={cn(
        "group relative overflow-hidden transition-colors duration-300 hover:border-secondary/40 hover:shadow-xl",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_12%,rgba(201,168,76,0.18),transparent_32%)]" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

type DentalDecorationsProps = {
  variant?: "hero" | "section" | "dense";
  className?: string;
};

const iconClass = "h-5 w-5 md:h-6 md:w-6";

export function DentalDecorations({ variant = "section", className }: DentalDecorationsProps) {
  const reducedMotion = useReducedMotion();
  const dense = variant === "dense";
  const hero = variant === "hero";
  const floatTransition = reducedMotion
    ? undefined
    : { duration: hero ? 7 : 8, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };

  const items = [
    {
      className: "left-[7%] top-[14%] text-secondary bg-secondary/10 border-secondary/20",
      icon: <Sparkles className={iconClass} />,
      animate: { y: [-5, 10], rotate: [-7, 7] },
    },
    {
      className: "right-[8%] top-[18%] text-accent bg-accent/10 border-accent/20",
      icon: <Smile className={iconClass} />,
      animate: { y: [8, -8], rotate: [5, -5] },
    },
    {
      className: "left-[13%] bottom-[18%] text-secondary bg-primary/20 border-primary/40",
      icon: <Shield className={iconClass} />,
      animate: { y: [6, -10], rotate: [4, -4] },
    },
    {
      className: "right-[16%] bottom-[14%] text-accent bg-white/70 border-border/70",
      icon: <Activity className={iconClass} />,
      animate: { y: [-8, 8], rotate: [-5, 5] },
    },
  ];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        hero ? "hidden md:block" : "hidden lg:block",
        className,
      )}
    >
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/10" />
      <div className="absolute right-[18%] top-[36%] h-24 w-44 rounded-[100%] border-b-2 border-dashed border-secondary/25" />
      <div className="absolute right-[20%] top-[35%] flex gap-3">
        {[0, 1, 2, 3, 4].map((dot) => (
          <span key={dot} className="h-2 w-2 rounded-full bg-secondary/40" />
        ))}
      </div>
      {items.slice(0, dense ? items.length : 3).map((item, index) => (
        <motion.div
          key={item.className}
          className={cn(
            "absolute grid h-12 w-12 place-items-center rounded-2xl border shadow-lg backdrop-blur-sm md:h-14 md:w-14",
            item.className,
          )}
          initial={{ opacity: 0, scale: 0.78 }}
          animate={{ opacity: 1, scale: 1, ...(reducedMotion ? {} : item.animate) }}
          transition={{ delay: 0.18 + index * 0.1, ...(floatTransition ?? { duration: 0.35 }) }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}

export function ScrollMotifStrip({ className, reverse = false }: { className?: string; reverse?: boolean }) {
  const reducedMotion = useReducedMotion();
  const icons = [Smile, CircleDot, Sparkles, Shield, Activity];
  const initialX = reverse ? 34 : -34;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, x: reducedMotion ? 0 : initialX, y: reducedMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "pointer-events-none hidden md:flex items-center gap-3 rounded-full border border-secondary/20 bg-white/55 px-4 py-3 shadow-lg shadow-secondary/10 backdrop-blur-md",
        className,
      )}
    >
      <div className="h-8 w-16 rounded-[100%] border-b-2 border-dashed border-secondary/35" />
      {icons.map((Icon, index) => (
        <motion.span
          key={index}
          className="grid h-9 w-9 place-items-center rounded-full bg-primary/20 text-secondary"
          animate={reducedMotion ? undefined : { y: [0, index % 2 === 0 ? -5 : 5, 0] }}
          transition={reducedMotion ? undefined : { duration: 3.2 + index * 0.2, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <Icon className="h-4 w-4" />
        </motion.span>
      ))}
    </motion.div>
  );
}
