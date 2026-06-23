import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Footer, FADE_UP } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { useT } from "@/lib/i18n";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/optimized-jpg/DSC00739.jpg";

const rtgDevices = [
  "Cefla Dental Group Włochy, typ: RX DC, SN: 706J010452",
  "Cefla Dental Group Włochy, typ: MyRay RX DC, SN: 706J010485",
  "Kodak Dental Systems USA, typ: Kodak 2200, SN: YDYC087",
  "Cefla Dental Group Włochy, typ: MyRay RX DC, SN: 706J015256",
  "Cefla Dental Group Włochy, typ: Hyperion X9, SN: 70A10755",
];

const permitParagraphs = [
  "Zezwolenie na stosowanie aparatu RTG nr 1 (SN: 706J010452) wydał Państwowy Wojewódzki Inspektor Sanitarny w Gorzowie Wlkp. w dniu 24.11.2021r. (Decyzja nr I/M/NS-HR-172/385/2021).",
  "Zezwolenie na stosowanie aparatu RTG nr 2 (SN: 706J010485) wydał Państwowy Wojewódzki Inspektor Sanitarny w Gorzowie Wlkp. w dniu 24.11.2021r. (Decyzja nr I/M/NS-HR-173/386/2021).",
  "Zezwolenie na stosowanie aparatu RTG nr 3 (Kodak 2200) wydał Państwowy Wojewódzki Inspektor Sanitarny w Gorzowie Wlkp. w dniu 24.11.2021r. (Decyzja nr I/M/NS-HR- 175/388/2021).",
  "Zezwolenie na stosowanie aparatu RTG nr 5 (Hyperion X9) wydał Państwowy Wojewódzki Inspektor Sanitarny w Gorzowie Wlkp. w dniu 24.11.2021r. (Decyzja nr I/M/NS-HR- 171/384/2021).",
  "Zezwolenie na stosowanie aparatu RTG nr 4 (SN: 706J015256) wydał Państwowy Wojewódzki Inspektor Sanitarny w Gorzowie Wlkp. w dniu ………………… (Decyzja nr …………………………………).",
  "Zezwolenie na uruchomienie pracowni rtg wydał Państwowy Wojewódzki Inspektor Sanitarny w Gorzowie Wlkp. w dniu 24.11.2021r. (Decyzja nr I/M/NS-HR-170/383/2021).",
  "Oraz zgoda na prowadzenie działalności związanej z narażeniem na promieniowanie jonizujące w celach medycznych polegającej na udzielaniu świadczeń zdrowotnych z zakresu badań rentgenodiagnostycznych/radiologii zabiegowej* /organ wydający, nr decyzji, data wydania/: Państwowy Wojewódzki Inspektor Sanitarny w Gorzowie Wlkp. w dniu ………………………………..(Decyzja nr……………………………………………………………………………….).",
];

const radiationParagraphs = [
  "Na podstawie art. 17 ust. 1 ustawy Prawo atomowe, w celu dostosowania sposobu oceny zagrożenia do jego spodziewanego poziomu, pracownicy jednostki organizacyjnej zostali zaliczeni do kategorii A/B* narażenia. Ocena narażenia pracowników prowadzona jest na podstawie: systematycznych pomiarów dawek indywidualnych/pomiarów dozymetrycznych w środowisku pracy w sposób pozwalający stwierdzić prawidłowość zaliczenia pracowników do tej kategorii* (umowa z IMP w Łodzi).",
  "W przeciągu ostatnich 12 miesięcy stwierdzono/nie stwierdzono* przekroczenia dawek granicznych /dawka skuteczna, dawka równoważna/ określonych dla pracowników.",
  "Pomiary dozymetryczne rozkładu mocy dawki promieniowania jonizującego X wokół aparatu rtg, podczas których potwierdzono, że konstrukcja ścian, stropów, okien, drzwi oraz zainstalowane urządzenia ochronne w gabinecie stomatologicznym zabezpiecza osoby pracujące, osoby z ogółu ludności przebywające w sąsiedztwie, a także osoby z ogółu ludności w przypadku pracowni rtg znajdującej się w budynku mieszkalnym przed otrzymaniem w ciągu roku dawek określonych w § 2 i § 3 ust. 1 rozporządzenia Ministra Zdrowia z dnia 21 sierpnia 2006 r. (Dz. U. Nr 180, poz. 1325).",
  "Kierownik jednostki organizacyjnej zapewnia wykonywanie działalności związanej z narażeniem zgodnie z zasadą optymalizacji wymagającą, żeby - przy rozsądnym uwzględnieniu czynników ekonomicznych i społecznych oraz aktualnego stanu wiedzy technicznej - liczba narażonych pracowników i osób z ogółu ludności oraz prawdopodobieństwo ich narażenia były jak najmniejsze, a otrzymywane przez nich dawki promieniowania jonizującego były możliwie małe.",
  "Na podstawie powyższych informacji stwierdza się, że działalność w minionych 12 miesiącach nie miała negatywnego wpływu na zdrowie ludzi i środowisko.",
  "W związku z wykonywaniem wyżej opisanej działalności do środowiska są/nie są* uwalniane substancje promieniotwórcze.",
];

function TextBlock({ title, children }: { title: string; children: ReactNode }) {
  const { t } = useT();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={FADE_UP}
      className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm"
    >
      <h2 className="mb-5 text-2xl font-semibold text-foreground">{t(title)}</h2>
      {children}
    </motion.section>
  );
}

export default function RadiationInfo() {
  const { t } = useT();

  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <main className="flex-grow">
        <PageHero
          eyebrow={t("Dla pacjenta")}
          title={t("Informacja o promieniowaniu")}
          description={t("Informacja o działalności związanej z uruchomieniem pracowni RTG oraz stosowaniem aparatów RTG.")}
          image={heroPhoto}
          alt={t("Informacja o promieniowaniu")}
          mobileObjectPosition="42% center"
          desktopObjectPosition="center center"
          actions={[
            {
              label: t("Kontakt i rejestracja"),
              href: PRACTICE.bookingUrl,
              trailingIcon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
              testId: "radiation-hero-contact",
            },
            {
              label: PRACTICE.phoneDisplay,
              href: PRACTICE.phoneHref,
              variant: "secondary",
              icon: <Phone className="w-4 h-4 mr-2 text-secondary" />,
              testId: "radiation-hero-call",
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="mb-8 rounded-2xl border border-secondary/20 bg-secondary/10 p-5 text-sm leading-relaxed text-foreground/70">
              <div className="mb-3 flex items-center gap-2 font-semibold text-secondary">
                <FileText className="h-4 w-4" />
                {t("Informacja dla pacjentów")}
              </div>
              <p>{t("Treści prawne pozostają w brzmieniu opublikowanym na poprzedniej stronie przychodni.")}</p>
            </div>

            <div className="space-y-6">
              <TextBlock title="Pełna informacja">
                <div className="space-y-4 leading-relaxed text-foreground/75">
                  <p className="font-semibold text-foreground">
                    Informacja o wpływie działalności wykonywanej przez jednostkę organizacyjną polegającej na uruchomieniu pracowni rtg oraz uruchomieniu i stosowaniu aparatu rtg na zdrowie ludzi i na środowisko
                  </p>
                  <p>
                    Na podstawie art. 32c ust. 2 ustawy Prawo atomowe (Dz. U. z 2023 r., poz. 1173, z późn. zm.), informuję, że w jednostce organizacyjnej:
                  </p>
                  <p>
                    Przychodnia Stomatologiczna KORONA Halina Malinowska-Rewers<br />
                    ul. Krasińskiego 13, 67-100 Nowa Sól
                  </p>
                  <p>wykonywana jest działalność związana z narażeniem na promieniowanie jonizujące, polegająca na:</p>
                </div>
              </TextBlock>

              <TextBlock title="Urządzenia RTG">
                <div className="space-y-4 leading-relaxed text-foreground/75">
                  <p>uruchamianiu i stosowaniu urządzeń wytwarzających promieniowanie jonizujące /typ aparatu rtg/: firmy:</p>
                  <ol className="space-y-2 pl-5 list-decimal">
                    {rtgDevices.map((device) => (
                      <li key={device}>{device}</li>
                    ))}
                  </ol>
                  <p>
                    uruchamianiu pracowni, w których mają być stosowane źródła promieniowania jonizującego, w szczególności pracowni rentgenowskich lub medycznych pracowni rentgenowskich /typ pracowni/: 4 gabinety stomatologiczne i 1 pracownia rtg.
                  </p>
                  <p>a w pracowni rtg aparat do zdjęć pantomograficznych, cefalometrycznych i CBCT firmy:</p>
                </div>
              </TextBlock>

              <TextBlock title="Decyzje i zezwolenia">
                <div className="space-y-4 leading-relaxed text-foreground/75">
                  <p>
                    Dla jednostki zostały wydane decyzje zezwalające na uruchomienie i stosowanie aparatu rtg oraz na uruchomienie pracowni rtg /organ wydający, nr decyzji, data wydania/:
                  </p>
                  {permitParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </TextBlock>

              <TextBlock title="Ocena narażenia i wpływ na środowisko">
                <div className="space-y-4 leading-relaxed text-foreground/75">
                  {radiationParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="pt-2 font-medium text-foreground">Przychodnia Korona Stomatologia i Kosmetologia</p>
                </div>
              </TextBlock>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-secondary px-7 text-white hover:bg-secondary/90">
                <Link href="/new-patients">
                  {t("Wróć do informacji dla pacjentów")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full bg-card px-7">
                <a href={PRACTICE.phoneHref}>
                  <Phone className="mr-2 h-4 w-4 text-secondary" />
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
