import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import beehiveLogo from "@assets/beehive-logo.png";

export const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Footer() {
  return (
    <>
      <section className="py-24 bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_0%,transparent_50%)]" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white">Book today for quality care.</h2>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 h-16 text-lg shadow-xl shadow-secondary/20 transition-all group" data-testid="footer-book-online">
            <a href="https://app.nexhealth.com/appt/beehive-dental" target="_blank" rel="noreferrer">
              Book Online Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </section>

      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={beehiveLogo} alt="Beehive Dental" className="h-8 w-auto grayscale opacity-50" />
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} Beehive Dental. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
