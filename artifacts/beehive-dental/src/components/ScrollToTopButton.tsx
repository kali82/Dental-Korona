import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useT } from "@/lib/i18n";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const { t } = useT();

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 500);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={t("Przewiń do góry")}
          onClick={handleClick}
          initial={{ opacity: 0, y: 18, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.88 }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 360, damping: 28 }}
          className="fixed bottom-[6.25rem] right-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-secondary/30 bg-secondary text-white shadow-2xl shadow-secondary/25 outline-none transition-colors hover:bg-secondary/90 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-6 md:right-6 md:h-14 md:w-14"
          data-testid="scroll-to-top"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
