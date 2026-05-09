import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PRACTICE } from "@/lib/practice";

import tour0 from "@assets/beehive-tour-0.jpg";
import tour1 from "@assets/beehive-tour-1.jpg";
import tour3 from "@assets/beehive-tour-3.jpg";
import tour4 from "@assets/beehive-tour-4.jpg";
import tour5 from "@assets/beehive-tour-5.jpg";
import tour6 from "@assets/beehive-tour-6.jpg";
import service1 from "@assets/beehive-services-1.jpg";
import service2 from "@assets/beehive-services-2.jpg";
import service3 from "@assets/beehive-services-3.jpg";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

type Category = "Wszystkie" | "Przychodnia" | "Zabiegi";

interface GalleryItem {
  src: string;
  alt: string;
  category: Exclude<Category, "Wszystkie">;
  span?: "wide" | "tall" | "normal";
}

const photos: GalleryItem[] = [
  { src: tour0, alt: "Recepcja i poczekalnia", category: "Przychodnia", span: "wide" },
  { src: tour1, alt: "Wnętrze gabinetu", category: "Przychodnia" },
  { src: tour3, alt: "Stanowisko zabiegowe", category: "Przychodnia" },
  { src: tour4, alt: "Nowoczesny gabinet", category: "Przychodnia", span: "tall" },
  { src: tour5, alt: "Przestrzeń przychodni", category: "Przychodnia" },
  { src: tour6, alt: "Gabinet stomatologiczny", category: "Przychodnia" },
  { src: service1, alt: "Diagnostyka i konsultacja", category: "Zabiegi", span: "wide" },
  { src: service2, alt: "Leczenie stomatologiczne", category: "Zabiegi" },
  { src: service3, alt: "Ortodoncja i estetyka uśmiechu", category: "Zabiegi" },
];

const CATEGORIES: Category[] = ["Wszystkie", "Przychodnia", "Zabiegi"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Wszystkie");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "Wszystkie" ? photos : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--secondary) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={STAGGER}>
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 text-sm font-medium mb-6">
              Galeria
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
              Zobacz przestrzeń<br />
              <span className="text-secondary">Przychodni Korona</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg text-foreground/60 max-w-xl mx-auto">
              Wybrane zdjęcia gabinetów, recepcji i przestrzeni przeznaczonej do opieki nad pacjentami.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-4 bg-background sticky top-20 z-30 border-b border-border/50 backdrop-blur-md bg-background/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`gallery-filter-${cat.toLowerCase()}`}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-secondary text-white shadow-md"
                    : "bg-card border border-border text-foreground/70 hover:text-secondary hover:border-secondary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={STAGGER}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  variants={FADE_UP}
                  onClick={() => openLightbox(i)}
                  className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 bg-muted"
                  data-testid={`gallery-item-${i}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      photo.span === "wide" ? "aspect-video" : photo.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <p className="text-white text-sm font-medium drop-shadow truncate">{photo.alt}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-secondary/80 text-white text-xs">{photo.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border/50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Chcesz umówić wizytę?</h2>
          <p className="text-foreground/60 mb-8 text-lg">Skontaktuj się z rejestracją Przychodni Korona w Nowej Soli.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 shadow-xl group" data-testid="gallery-book-cta">
              <a href={PRACTICE.bookingUrl}>
                Kontakt i rejestracja <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 border-border/60 hover:bg-card" data-testid="gallery-call-cta">
              <a href={PRACTICE.phoneHref}>
                <Phone className="w-4 h-4 mr-2 text-secondary" /> {PRACTICE.phoneDisplay}
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />

      <AnimatePresence>
        {lightboxIndex !== null && (
          <>
            <motion.div key="lb-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-black/90 z-50" onClick={closeLightbox} />
            <motion.div
              key="lb-panel"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
            >
              <div className="pointer-events-auto relative max-w-4xl w-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={filtered[lightboxIndex].src}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    src={filtered[lightboxIndex].src}
                    alt={filtered[lightboxIndex].alt}
                    className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  />
                </AnimatePresence>

                <div className="mt-3 text-center">
                  <p className="text-white/80 text-sm">{filtered[lightboxIndex].alt}</p>
                  <p className="text-white/40 text-xs mt-0.5">{lightboxIndex + 1} / {filtered.length}</p>
                </div>

                <button onClick={closeLightbox} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" data-testid="lightbox-close">
                  <X className="w-5 h-5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" data-testid="lightbox-prev">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" data-testid="lightbox-next">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
