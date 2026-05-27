import { useMemo, useRef, useState, type TouchEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import aerialExterior from "@assets/cropped-DJI_0300-HDR-scaled-1.jpg";
import aerialStreet from "@assets/DJI_0308-HDR-scaled.jpg";
import receptionHall from "@assets/DSC00462.jpg";
import waitingRoom from "@assets/DSC00526-scaled.jpg";
import cabinetDetail from "@assets/DSC00528-1-scaled.jpg";
import treatmentRoomPortrait from "@assets/DSC00529-scaled.jpg";
import dentalTools from "@assets/DSC00541-scaled.jpg";
import microscopeSide from "@assets/DSC00543 (1).jpg";
import microscopeFront from "@assets/DSC00543.jpg";
import treatmentUnit from "@assets/DSC00544.jpg";
import treatmentRoomWide from "@assets/DSC00546.jpg";
import chairCorner from "@assets/DSC00549.jpg";
import chairDetail from "@assets/DSC00550.jpg";
import lampDetail from "@assets/DSC00556.jpg";
import instrumentDetail from "@assets/DSC00559.jpg";
import clinicCorridor from "@assets/DSC00564.jpg";
import staffGroupBlue from "@assets/DSC00585.jpg";
import scannerDetail from "@assets/DSC00739.jpg";
import dentalConsole from "@assets/DSC02139.jpg";
import teamConsult from "@assets/DSC_3469.jpg";
import teamExterior from "@assets/DSC_3503.jpg";
import teamSignWide from "@assets/DSC_3556.jpg";
import teamExteriorSmall from "@assets/DSC_3587.jpg";
import teamClose from "@assets/DSC_3602.jpg";
import teamDuoBlack from "@assets/DSC_3620.jpg";
import teamDuoSign from "@assets/DSC_3634.jpg";
import teamWindow from "@assets/DSC_3678.jpg";
import teamDuoBlue from "@assets/DSC_3799.jpg";
import teamTreatment from "@assets/DSC_3863.jpg";
import teamCabinet from "@assets/DSC_3882.jpg";
import teamChair from "@assets/DSC_3902.jpg";
import teamCabinetTwo from "@assets/DSC_3913.jpg";

type Category = "Wszystkie" | "Przychodnia" | "Zabiegi" | "Zespół";

interface GalleryItem {
  src: string;
  thumb: string;
  alt: string;
  category: Exclude<Category, "Wszystkie">;
  span?: "wide" | "tall" | "normal";
  thumbPosition?: string;
}

type GallerySourceItem = Omit<GalleryItem, "thumb">;

const photoThumbs = [
  "cropped-DJI_0300-HDR-scaled-1.jpg",
  "DJI_0308-HDR-scaled.jpg",
  "DSC00462.jpg",
  "DSC00526-scaled.jpg",
  "DSC00528-1-scaled.jpg",
  "DSC00564.jpg",
  "DSC00546.jpg",
  "DSC00529-scaled.jpg",
  "DSC00544.jpg",
  "DSC00549.jpg",
  "DSC00550.jpg",
  "DSC00541-scaled.jpg",
  "DSC00543 (1).jpg",
  "DSC00543.jpg",
  "DSC00556.jpg",
  "DSC00559.jpg",
  "DSC00739.jpg",
  "DSC02139.jpg",
  "DSC_3503.jpg",
  "DSC_3556.jpg",
  "DSC_3587.jpg",
  "DSC_3602.jpg",
  "DSC_3469.jpg",
  "DSC_3620.jpg",
  "DSC_3634.jpg",
  "DSC_3678.jpg",
  "DSC_3799.jpg",
  "DSC_3863.jpg",
  "DSC_3882.jpg",
  "DSC_3902.jpg",
  "DSC_3913.jpg",
  "DSC00585.jpg",
] as const;

const galleryThumb = (fileName: string) => `${import.meta.env.BASE_URL}gallery-thumbs/${fileName}`;

const photoSources: GallerySourceItem[] = [
  { src: aerialExterior, alt: "Budynek Przychodni Korona z lotu ptaka", category: "Przychodnia", span: "wide" },
  { src: aerialStreet, alt: "Przychodnia Korona przy ulicy Krasińskiego", category: "Przychodnia", span: "wide" },
  { src: receptionHall, alt: "Recepcja i poczekalnia Przychodni Korona", category: "Przychodnia", span: "wide" },
  { src: waitingRoom, alt: "Poczekalnia dla pacjentów", category: "Przychodnia", span: "tall" },
  { src: cabinetDetail, alt: "Wnętrze przychodni", category: "Przychodnia" },
  { src: clinicCorridor, alt: "Korytarz przy gabinetach", category: "Przychodnia", span: "tall" },
  { src: treatmentRoomWide, alt: "Nowoczesny gabinet stomatologiczny", category: "Zabiegi", span: "wide" },
  { src: treatmentRoomPortrait, alt: "Stanowisko zabiegowe", category: "Zabiegi", span: "tall" },
  { src: treatmentUnit, alt: "Unit stomatologiczny i diagnostyka", category: "Zabiegi", span: "wide" },
  { src: chairCorner, alt: "Gabinet zabiegowy", category: "Zabiegi", span: "tall" },
  { src: chairDetail, alt: "Wyposażenie gabinetu", category: "Zabiegi", span: "wide" },
  { src: dentalTools, alt: "Narzędzia stomatologiczne", category: "Zabiegi" },
  { src: microscopeSide, alt: "Mikroskop stomatologiczny", category: "Zabiegi", span: "tall" },
  { src: microscopeFront, alt: "Mikroskop do leczenia endodontycznego", category: "Zabiegi" },
  { src: lampDetail, alt: "Oświetlenie zabiegowe", category: "Zabiegi", span: "wide" },
  { src: instrumentDetail, alt: "Sprzęt stomatologiczny", category: "Zabiegi", span: "wide" },
  { src: scannerDetail, alt: "Diagnostyka cyfrowa", category: "Zabiegi" },
  { src: dentalConsole, alt: "Panel sterowania unitów stomatologicznych", category: "Zabiegi", span: "tall" },
  { src: teamExterior, alt: "Zespół Przychodni Korona", category: "Zespół", span: "wide" },
  { src: teamSignWide, alt: "Zespół przed wejściem do przychodni", category: "Zespół", span: "wide" },
  { src: teamExteriorSmall, alt: "Część zespołu przed Przychodnią Korona", category: "Zespół" },
  { src: teamClose, alt: "Zespół przy tablicy rejestracji", category: "Zespół", span: "wide" },
  { src: teamConsult, alt: "Zespół w gabinecie", category: "Zespół" },
  { src: teamDuoBlack, alt: "Personel Przychodni Korona", category: "Zespół", span: "tall" },
  { src: teamDuoSign, alt: "Zespół przy tablicy Przychodni Korona", category: "Zespół", span: "tall" },
  { src: teamWindow, alt: "Zespół przed wejściem", category: "Zespół" },
  { src: teamDuoBlue, alt: "Zespół gabinetu stomatologicznego", category: "Zespół", span: "tall" },
  { src: teamTreatment, alt: "Lekarze w gabinecie", category: "Zespół" },
  { src: teamCabinet, alt: "Zespół przy stanowisku zabiegowym", category: "Zespół", span: "wide" },
  { src: teamChair, alt: "Zespół przy unicie stomatologicznym", category: "Zespół" },
  { src: teamCabinetTwo, alt: "Zespół w gabinecie stomatologicznym", category: "Zespół" },
  { src: staffGroupBlue, alt: "Zespół higienistek i asystentek", category: "Zespół", span: "wide", thumbPosition: "center 28%" },
];

const CATEGORIES: Category[] = ["Wszystkie", "Przychodnia", "Zabiegi", "Zespół"];

const photos: GalleryItem[] = photoSources.map((photo, index) => ({
  ...photo,
  thumb: galleryThumb(photoThumbs[index] ?? photoThumbs[0]),
}));

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Wszystkie");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "Wszystkie" ? photos : photos.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
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

  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <PageHero
        eyebrow="Galeria"
        title="Zobacz przestrzeń Przychodni Korona"
        description="Wybrane zdjęcia gabinetów, recepcji, zespołu i przestrzeni przeznaczonej do opieki nad pacjentami."
        image={galleryThumb("DSC00462.jpg")}
        alt="Galeria Przychodni Korona"
        mobileObjectPosition="30% center"
        desktopObjectPosition="center center"
      />

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
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                type="button"
                onClick={() => openLightbox(i)}
                className="group relative mb-4 block w-full break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-muted text-left shadow-sm transition-shadow duration-150 ease-out hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary [contain-intrinsic-size:360px] [content-visibility:auto]"
                data-testid={`gallery-item-${i}`}
              >
                <img
                  src={photo.thumb}
                  alt={photo.alt}
                  className={`w-full transform-gpu object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03] ${
                    photo.span === "wide" ? "aspect-video" : photo.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                  loading={i < 6 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  style={{ objectPosition: photo.thumbPosition ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100" />
                <div className="absolute bottom-3 left-4 right-4 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100">
                  <p className="truncate text-sm font-medium text-white drop-shadow">{photo.alt}</p>
                  <span className="mt-1 inline-block rounded-full bg-secondary/85 px-2 py-0.5 text-xs text-white">{photo.category}</span>
                </div>
              </button>
            ))}
          </div>
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
              <div
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
                    alt={filtered[lightboxIndex].alt}
                    loading="eager"
                    decoding="async"
                    className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  />
                </AnimatePresence>

                <div className="mt-3 text-center">
                  <p className="text-white/80 text-sm">{filtered[lightboxIndex].alt}</p>
                  <p className="text-white/40 text-xs mt-0.5">{lightboxIndex + 1} / {filtered.length}</p>
                </div>

                <button onClick={closeLightbox} className="absolute right-2 top-2 sm:-top-12 sm:right-0 w-10 h-10 rounded-full bg-black/45 sm:bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" data-testid="lightbox-close" aria-label="Zamknij zdjęcie">
                  <X className="w-5 h-5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/60 sm:left-0 sm:h-10 sm:w-10 sm:-translate-x-14 sm:bg-white/10 sm:hover:bg-white/20" data-testid="lightbox-prev" aria-label="Poprzednie zdjęcie">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/60 sm:right-0 sm:h-10 sm:w-10 sm:translate-x-14 sm:bg-white/10 sm:hover:bg-white/20" data-testid="lightbox-next" aria-label="Następne zdjęcie">
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
