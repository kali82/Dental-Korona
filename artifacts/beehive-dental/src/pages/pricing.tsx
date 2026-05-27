import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Footer, FADE_UP } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/DSC00543.jpg";

type PriceItem = {
  name: string;
  price: string;
  note?: string;
};

type PriceSection = {
  title: string;
  description: string;
  items: PriceItem[];
};

const priceSections: PriceSection[] = [
  {
    title: "Diagnostyka i konsultacje",
    description: "Pierwsza ocena stanu jamy ustnej, plan leczenia oraz diagnostyka obrazowa.",
    items: [
      { name: "Konsultacja stomatologiczna", price: "150 zł" },
      { name: "Przegląd jamy ustnej", price: "150 zł" },
      { name: "Konsultacja ortodontyczna", price: "200 zł" },
      { name: "Konsultacja implantologiczna", price: "250 zł" },
      { name: "Zdjęcie punktowe RTG", price: "80 zł" },
      { name: "Zdjęcie panoramiczne", price: "200 zł" },
      { name: "Zdjęcie cefalometryczne", price: "200 zł" },
      { name: "Tomografia komputerowa CBCT", price: "250-450 zł" },
    ],
  },
  {
    title: "Profilaktyka",
    description: "Zabiegi higieniczne, zabezpieczenie szkliwa i regularna kontrola zdrowia zębów.",
    items: [
      { name: "Higienizacja", price: "350-450 zł", note: "skaling, piaskowanie, polerowanie" },
      { name: "Skaling ultradźwiękowy", price: "250-300 zł" },
      { name: "Piaskowanie", price: "150-250 zł" },
      { name: "Fluoryzacja / lakierowanie", price: "150-250 zł" },
      { name: "Lakowanie bruzd", price: "150 zł" },
      { name: "Instruktaż higieny jamy ustnej", price: "100 zł" },
    ],
  },
  {
    title: "Stomatologia zachowawcza i dziecięca",
    description: "Leczenie próchnicy, odbudowy kompozytowe oraz opieka nad dziećmi.",
    items: [
      { name: "Leczenie próchnicy", price: "od 300 zł" },
      { name: "Wypełnienie kompozytowe", price: "300-450 zł" },
      { name: "Odbudowa tkanek zęba materiałem światłoutwardzalnym", price: "450-800 zł" },
      { name: "Opatrunek leczniczy", price: "200-300 zł" },
      { name: "Leczenie zęba mlecznego", price: "250-300 zł" },
      { name: "Wizyta adaptacyjna dziecka", price: "200 zł" },
      { name: "Profilaktyka próchnicy u dzieci", price: "150-300 zł" },
    ],
  },
  {
    title: "Endodoncja",
    description: "Leczenie kanałowe, również w przypadkach wymagających pracy pod mikroskopem.",
    items: [
      { name: "Leczenie kanałowe zęba jednokanałowego", price: "700-1 200 zł" },
      { name: "Leczenie kanałowe zęba dwukanałowego", price: "800-1 400 zł" },
      { name: "Leczenie kanałowe zęba wielokanałowego", price: "1 000-2 000 zł" },
      { name: "Leczenie kanałowe pod mikroskopem", price: "od 1 200 zł" },
      { name: "Powtórne leczenie kanałowe", price: "od 1 400 zł" },
      { name: "Usunięcie złamanego narzędzia", price: "od 800 zł" },
      { name: "Kontrolne zdjęcie RTG w leczeniu endodontycznym", price: "80 zł" },
    ],
  },
  {
    title: "Chirurgia stomatologiczna",
    description: "Zabiegi chirurgiczne w obrębie jamy ustnej oraz przygotowanie do dalszego leczenia.",
    items: [
      { name: "Ekstrakcja zęba mlecznego", price: "200-250 zł" },
      { name: "Ekstrakcja zęba stałego", price: "300-500 zł" },
      { name: "Chirurgiczne usunięcie zęba", price: "500-800 zł" },
      { name: "Usunięcie ósemki", price: "700-1 200 zł" },
      { name: "Odsłonięcie zęba zatrzymanego", price: "700-1 200 zł" },
      { name: "Wyłuszczenie torbieli zębopochodnej", price: "1 000-1 800 zł" },
      { name: "Resekcja wierzchołka korzenia", price: "1 000-1 800 zł" },
      { name: "Plastyka wędzidełka lub przedsionka jamy ustnej", price: "400-700 zł" },
      { name: "Nacięcie ropnia", price: "200-300 zł" },
      { name: "Szycie rany", price: "100-200 zł" },
    ],
  },
  {
    title: "Implantologia",
    description: "Odbudowa braków zębowych na implantach i rozwiązania dla pacjentów bezzębnych.",
    items: [
      { name: "Plan leczenia implantologicznego", price: "250-400 zł" },
      { name: "Wszczepienie implantu", price: "3 000-4 000 zł" },
      { name: "Odbudowa protetyczna na implancie", price: "2 500-3 500 zł" },
      { name: "Implant z koroną", price: "od 6 000 zł" },
      { name: "Proteza ruchoma oparta na implantach", price: "od 12 000 zł" },
      { name: "Belki, zatrzaski kulowe lub magnetyczne", price: "od 1 500 zł" },
      { name: "Szablon chirurgiczny", price: "800 zł" },
    ],
  },
  {
    title: "Protetyka i CAD/CAM",
    description: "Uzupełnienia protetyczne, prace pełnoceramiczne oraz rozwiązania wykonywane w jednej wizycie.",
    items: [
      { name: "Korona pełnoceramiczna CEREC", price: "2 000-2 500 zł" },
      { name: "Licówka pełnoceramiczna", price: "1 900-2 500 zł" },
      { name: "Nakład inlay / onlay / overlay", price: "1 000-2 000 zł" },
      { name: "Korona protetyczna", price: "1 500-2 200 zł" },
      { name: "Most protetyczny", price: "1 500-2 200 zł / punkt" },
      { name: "Proteza ruchoma", price: "2 000-3 500 zł" },
      { name: "Naprawa protezy", price: "od 200 zł" },
      { name: "Szyna relaksacyjna", price: "700 zł" },
    ],
  },
  {
    title: "Stomatologia estetyczna",
    description: "Poprawa wyglądu zębów i uśmiechu z wykorzystaniem metod zachowawczych i protetycznych.",
    items: [
      { name: "Wybielanie zębów", price: "1 000-1 600 zł" },
      { name: "Bonding / licówka kompozytowa", price: "600-800 zł" },
      { name: "Estetyczna odbudowa kompozytowa", price: "450-800 zł" },
      { name: "Korekta kształtu zęba", price: "200-400 zł" },
    ],
  },
  {
    title: "Periodontologia",
    description: "Profilaktyka i leczenie chorób przyzębia oraz tkanek otaczających zęby.",
    items: [
      { name: "Konsultacja periodontologiczna", price: "200 zł" },
      { name: "Leczenie zapalenia dziąseł", price: "250-450 zł" },
      { name: "Kiretaż", price: "300-600 zł" },
      { name: "Wygładzanie powierzchni korzeni", price: "300-600 zł" },
      { name: "Regeneracja tkanek przyzębia", price: "od 1 500 zł" },
    ],
  },
  {
    title: "Ortodoncja",
    description: "Diagnostyka, plan leczenia oraz prowadzenie leczenia aparatami i nakładkami.",
    items: [
      { name: "Plan leczenia ortodontycznego", price: "500-700 zł" },
      { name: "Leczenie aparatem ruchomym", price: "1 000-1 600 zł" },
      { name: "Leczenie aparatem stałym", price: "3 000-4 000 zł / łuk" },
      { name: "Leczenie nakładkowe Invisalign", price: "od 8 000 zł" },
      { name: "Wizyty kontrolno-aktywacyjne", price: "200-400 zł" },
      { name: "Skan cyfrowy", price: "300-400 zł" },
      { name: "Zdjęcia wewnątrz- i zewnątrzustne", price: "200-300 zł" },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <main className="flex-grow">
        <PageHero
          eyebrow="Cennik"
          title="Usługi i ceny"
          description="Cennik usług stomatologicznych przygotowany na podstawie zakresu oferty Przychodni Korona."
          image={heroPhoto}
          alt="Cennik Przychodni Korona"
          mobileObjectPosition="34% center"
          desktopObjectPosition="center center"
          actions={[
            {
              label: "Kontakt i rejestracja",
              href: PRACTICE.bookingUrl,
              trailingIcon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
              testId: "pricing-hero-contact",
            },
            {
              label: PRACTICE.phoneDisplay,
              href: PRACTICE.phoneHref,
              variant: "secondary",
              icon: <Phone className="w-4 h-4 mr-2 text-secondary" />,
              testId: "pricing-hero-call",
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="md:hidden -mx-5 mb-6 overflow-x-auto px-5 pb-2">
              <div className="flex w-max gap-2">
                {priceSections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#pricing-section-${index}`}
                    className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground/75 shadow-sm"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-5 md:space-y-8">
              {priceSections.map((section, index) => (
                <motion.section
                  key={section.title}
                  id={`pricing-section-${index}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={FADE_UP}
                  className="scroll-mt-24 bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden shadow-sm"
                >
                  <div className="p-5 md:p-8 border-b border-border/70">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{section.title}</h2>
                    <p className="text-sm md:text-base text-foreground/60 leading-relaxed">{section.description}</p>
                  </div>

                  <div className="divide-y divide-border/70">
                    {section.items.map((item) => (
                      <div key={`${section.title}-${item.name}`} className="grid gap-2 px-5 py-4 md:grid-cols-[1fr_220px] md:gap-3 md:px-8">
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          {item.note && <p className="text-sm text-foreground/50 mt-1">{item.note}</p>}
                        </div>
                        <p className="inline-flex w-fit rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary md:ml-auto md:bg-transparent md:px-0 md:py-0 md:text-base md:text-right">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-card border-y border-border/50">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Umów wizytę lub zapytaj o szczegóły</h2>
              <p className="text-foreground/65 leading-relaxed">
                Rejestracja pomoże dobrać termin, zakres wizyty oraz właściwego specjalistę.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14">
                <Link href={PRACTICE.bookingUrl}>
                  Kontakt i rejestracja <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-background rounded-full px-8 h-14">
                <a href={PRACTICE.phoneHref}>
                  <Phone className="w-4 h-4 mr-2 text-secondary" />
                  {PRACTICE.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
