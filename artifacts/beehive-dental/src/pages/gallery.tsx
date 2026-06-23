import { useEffect, useMemo, useRef, useState, type TouchEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { useT } from "@/lib/i18n";
import { PRACTICE } from "@/lib/practice";

import aerialExterior from "@assets/optimized-jpg/cropped-DJI_0300-HDR-scaled-1.jpg";
import aerialStreet from "@assets/optimized-jpg/DJI_0308-HDR-scaled.jpg";
import receptionHall from "@assets/optimized-jpg/DSC00462.jpg";
import waitingRoom from "@assets/optimized-jpg/DSC00526-scaled.jpg";
import cabinetDetail from "@assets/optimized-jpg/DSC00528-1-scaled.jpg";
import treatmentRoomPortrait from "@assets/optimized-jpg/DSC00529-scaled.jpg";
import dentalTools from "@assets/optimized-jpg/DSC00541-scaled.jpg";
import microscopeFront from "@assets/optimized-jpg/DSC00543.jpg";
import treatmentUnit from "@assets/optimized-jpg/DSC00544.jpg";
import treatmentRoomWide from "@assets/optimized-jpg/DSC00546.jpg";
import chairCorner from "@assets/optimized-jpg/DSC00549.jpg";
import chairDetail from "@assets/optimized-jpg/DSC00550.jpg";
import lampDetail from "@assets/optimized-jpg/DSC00556.jpg";
import instrumentDetail from "@assets/optimized-jpg/DSC00559.jpg";
import staffGroupBlue from "@assets/optimized-jpg/DSC00585.jpg";
import scannerDetail from "@assets/optimized-jpg/DSC00739.jpg";
import dentalConsole from "@assets/optimized-jpg/DSC02139.jpg";
import teamConsult from "@assets/optimized-jpg/DSC_3469.jpg";
import teamExterior from "@assets/optimized-jpg/DSC_3503.jpg";
import teamSignWide from "@assets/optimized-jpg/DSC_3556.jpg";
import teamExteriorSmall from "@assets/optimized-jpg/DSC_3587.jpg";
import teamClose from "@assets/optimized-jpg/DSC_3602.jpg";
import teamDuoBlack from "@assets/optimized-jpg/DSC_3620.jpg";
import teamDuoSign from "@assets/optimized-jpg/DSC_3634.jpg";
import teamWindow from "@assets/optimized-jpg/DSC_3678.jpg";
import teamDuoBlue from "@assets/optimized-jpg/DSC_3799.jpg";
import teamTreatment from "@assets/optimized-jpg/DSC_3863.jpg";
import teamCabinet from "@assets/optimized-jpg/DSC_3882.jpg";
import teamChair from "@assets/optimized-jpg/DSC_3902.jpg";
import teamCabinetTwo from "@assets/optimized-jpg/DSC_3913.jpg";
import teamBartekIlona from "@assets/optimized-jpg/Bartek_z_Ilona.jpg";

type Category = "Wszystkie" | "Przychodnia" | "Zabiegi" | "Zespół";

interface GalleryItem {
  src: string;
  thumb: string;
  alt: string;
  category: Exclude<Category, "Wszystkie">;
  span?: "wide" | "tall" | "normal";
  thumbPosition?: string;
}

type GallerySourceItem = Omit<GalleryItem, "thumb"> & { thumbFile: string };

const galleryThumb = (fileName: string) => `${import.meta.env.BASE_URL}gallery-thumbs/${fileName}`;

const photoSources: GallerySourceItem[] = [
  // Budynek z zewnątrz
  { src: aerialExterior, thumbFile: "cropped-DJI_0300-HDR-scaled-1.jpg", alt: "Budynek Przychodni Korona z lotu ptaka", category: "Przychodnia" },
  { src: aerialStreet, thumbFile: "DJI_0308-HDR-scaled.jpg", alt: "Przychodnia Korona przy ulicy Krasińskiego", category: "Przychodnia", span: "wide" },

  // Większe zdjęcia zespołu
  { src: teamExterior, thumbFile: "DSC_3503.jpg", alt: "Zespół Przychodni Korona", category: "Zespół" },
  { src: teamSignWide, thumbFile: "DSC_3556.jpg", alt: "Zespół przed wejściem do przychodni", category: "Zespół", span: "wide" },
  { src: teamExteriorSmall, thumbFile: "DSC_3587.jpg", alt: "Część zespołu przed Przychodnią Korona", category: "Zespół" },
  { src: teamClose, thumbFile: "DSC_3602.jpg", alt: "Zespół przy tablicy rejestracji", category: "Zespół", span: "wide" },
  { src: teamWindow, thumbFile: "DSC_3678.jpg", alt: "Zespół przed wejściem", category: "Zespół" },
  { src: staffGroupBlue, thumbFile: "DSC00585.jpg", alt: "Zespół higienistek i asystentek", category: "Zespół", span: "wide", thumbPosition: "center 28%" },

  // Dwójki lekarzy i asystentek
  { src: teamDuoBlack, thumbFile: "DSC_3620.jpg", alt: "Personel Przychodni Korona", category: "Zespół" },
  { src: teamDuoSign, thumbFile: "DSC_3634.jpg", alt: "Zespół przy tablicy Przychodni Korona", category: "Zespół", span: "tall" },
  { src: teamDuoBlue, thumbFile: "DSC_3799.jpg", alt: "Zespół gabinetu stomatologicznego", category: "Zespół", span: "tall" },
  { src: teamConsult, thumbFile: "DSC_3469.jpg", alt: "Zespół w gabinecie", category: "Zespół" },
  { src: teamBartekIlona, thumbFile: "Bartek_z_Ilona.jpg", alt: "Bartosz Królikowski i Ilona Radecka w gabinecie", category: "Zespół" },
  { src: teamTreatment, thumbFile: "DSC_3863.jpg", alt: "Lekarze w gabinecie", category: "Zespół" },
  { src: teamCabinet, thumbFile: "DSC_3882.jpg", alt: "Zespół przy stanowisku zabiegowym", category: "Zespół", span: "wide" },
  { src: teamChair, thumbFile: "DSC_3902.jpg", alt: "Zespół przy unicie stomatologicznym", category: "Zespół" },
  { src: teamCabinetTwo, thumbFile: "DSC_3913.jpg", alt: "Zespół w gabinecie stomatologicznym", category: "Zespół" },

  // Wnętrza, gabinety i sprzęt
  { src: receptionHall, thumbFile: "DSC00462.jpg", alt: "Recepcja i poczekalnia Przychodni Korona", category: "Przychodnia", span: "wide" },
  { src: waitingRoom, thumbFile: "DSC00526-scaled.jpg", alt: "Poczekalnia dla pacjentów", category: "Przychodnia", span: "tall" },
  { src: cabinetDetail, thumbFile: "DSC00528-1-scaled.jpg", alt: "Wnętrze przychodni", category: "Przychodnia" },
  { src: treatmentRoomWide, thumbFile: "DSC00546.jpg", alt: "Nowoczesny gabinet stomatologiczny", category: "Zabiegi", span: "wide" },
  { src: treatmentRoomPortrait, thumbFile: "DSC00529-scaled.jpg", alt: "Stanowisko zabiegowe", category: "Zabiegi", span: "tall" },
  { src: treatmentUnit, thumbFile: "DSC00544.jpg", alt: "Unit stomatologiczny i diagnostyka", category: "Zabiegi", span: "wide" },
  { src: chairCorner, thumbFile: "DSC00549.jpg", alt: "Gabinet zabiegowy", category: "Zabiegi", span: "tall" },
  { src: chairDetail, thumbFile: "DSC00550.jpg", alt: "Wyposażenie gabinetu", category: "Zabiegi", span: "wide" },
  { src: dentalTools, thumbFile: "DSC00541-scaled.jpg", alt: "Narzędzia stomatologiczne", category: "Zabiegi" },
  { src: microscopeFront, thumbFile: "DSC00543.jpg", alt: "Mikroskop do leczenia endodontycznego", category: "Zabiegi" },
  { src: lampDetail, thumbFile: "DSC00556.jpg", alt: "Oświetlenie zabiegowe", category: "Zabiegi", span: "wide" },
  { src: instrumentDetail, thumbFile: "DSC00559.jpg", alt: "Sprzęt stomatologiczny", category: "Zabiegi", span: "wide" },
  { src: scannerDetail, thumbFile: "DSC00739.jpg", alt: "Diagnostyka cyfrowa", category: "Zabiegi" },
  { src: dentalConsole, thumbFile: "DSC02139.jpg", alt: "Panel sterowania unitów stomatologicznych", category: "Zabiegi", span: "tall" },
];

const CATEGORIES: Category[] = ["Wszystkie", "Przychodnia", "Zabiegi", "Zespół"];

const photos: GalleryItem[] = photoSources.map(({ thumbFile, ...photo }) => ({
  ...photo,
  thumb: galleryThumb(thumbFile),
}));

export default function Gallery() {
  const { t } = useT();
  const [activeCategory, setActiveCategory] = useState<Category>("Wszystkie");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryStartRef = useRef<HTMLElement | null>(null);
  const lightboxPanelRef = useRef<HTMLDivElement | null>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isLightboxOpen = lightboxIndex !== null;

  const filtered = useMemo(
    () => (activeCategory === "Wszystkie" ? photos : photos.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    requestAnimationFrame(() => {
      galleryStartRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  const handleLightboxTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };
  const handleLightboxTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    const touch = event.changedTouches[0];

    touchStartX.current = null;
    touchStartY.current = null;

    if (startX === null || startY === null || !touch) return;

    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;

    if (deltaX > 0) {
      prev();
    } else {
      next();
    }
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => lightboxCloseRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = Array.from(
        lightboxPanelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [isLightboxOpen, filtered.length]);

  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <PageHero
        eyebrow={t("Galeria")}
        title={t("Zobacz przestrzeń Przychodni Korona")}
        description={t("Wybrane zdjęcia gabinetów, recepcji, zespołu i przestrzeni przeznaczonej do opieki nad pacjentami.")}
        image={galleryThumb("DSC00462.jpg")}
        alt={t("Galeria Przychodni Korona")}
        mobileObjectPosition="30% center"
        desktopObjectPosition="center center"
      />

      <section className="pt-4 md:pt-5 pb-4 bg-background sticky top-20 z-30 border-b border-border/50 backdrop-blur-md bg-background/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                data-testid={`gallery-filter-${cat.toLowerCase()}`}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-secondary text-white shadow-md"
                    : "bg-card border border-border text-foreground/70 hover:text-secondary hover:border-secondary/50"
                }`}
              >
                {t(cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section ref={galleryStartRef} className="scroll-mt-36 py-12 bg-background flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                type="button"
                onClick={() => openLightbox(i)}
                aria-label={`${t("Otwórz zdjęcie")}: ${t(photo.alt)}`}
                className={`group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-muted text-left shadow-sm transition-shadow duration-150 ease-out hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary [contain-intrinsic-size:360px] [content-visibility:auto] ${
                  photo.span === "wide" ? "sm:col-span-2" : ""
                }`}
                data-testid={`gallery-item-${i}`}
              >
                <img
                  src={photo.thumb}
                  alt={t(photo.alt)}
                  className={`w-full transform-gpu object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03] ${
                    photo.span === "wide" ? "aspect-video" : photo.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                  loading={i < 6 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  style={{ objectPosition: photo.thumbPosition ?? "center" }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border/50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t("Chcesz umówić wizytę?")}</h2>
          <p className="text-foreground/60 mb-8 text-lg">{t("Skontaktuj się z rejestracją Przychodni Korona w Nowej Soli.")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 shadow-xl group" data-testid="gallery-book-cta">
              <a href={PRACTICE.bookingUrl}>
                {t("Kontakt i rejestracja")} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              <div
                ref={lightboxPanelRef}
                role="dialog"
                aria-modal="true"
                aria-label={t("Galeria Przychodni Korona")}
                className="pointer-events-auto relative w-full max-w-4xl touch-pan-y select-none"
                onTouchStart={handleLightboxTouchStart}
                onTouchEnd={handleLightboxTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${filtered[lightboxIndex].src}-${lightboxIndex}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    src={filtered[lightboxIndex].src}
                    alt={t(filtered[lightboxIndex].alt)}
                    loading="eager"
                    decoding="async"
                    className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  />
                </AnimatePresence>

                <p className="mt-3 text-center text-white/40 text-xs">{lightboxIndex + 1} / {filtered.length}</p>

                <button ref={lightboxCloseRef} onClick={closeLightbox} className="absolute right-2 top-2 sm:-top-12 sm:right-0 w-10 h-10 rounded-full bg-black/45 sm:bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white" data-testid="lightbox-close" aria-label={t("Zamknij zdjęcie")}>
                  <X className="w-5 h-5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-0 sm:h-10 sm:w-10 sm:-translate-x-14 sm:bg-white/10 sm:hover:bg-white/20" data-testid="lightbox-prev" aria-label={t("Poprzednie zdjęcie")}>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-0 sm:h-10 sm:w-10 sm:translate-x-14 sm:bg-white/10 sm:hover:bg-white/20" data-testid="lightbox-next" aria-label={t("Następne zdjęcie")}>
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
