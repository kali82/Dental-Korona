import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Activity, ArrowRight, CheckCircle, MapPin, Phone, Shield, Smile, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/DSC00546.jpg";
import servicePhoto from "@assets/DSC00550.jpg";
import orthoPhoto from "@assets/DSC00556.jpg";
import clinicPhoto from "@assets/DSC00541-scaled.jpg";

type ServiceGroup = {
  icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
  image: string;
};

const serviceGroups: ServiceGroup[] = [
  {
    icon: Stethoscope,
    title: "Stomatologia zachowawcza i profilaktyka",
    desc: "Leczenie próchnicy, odbudowy zębów, higienizacja, lakierowanie, lakowanie oraz regularne kontrole.",
    items: ["Stomatologia zachowawcza", "Profilaktyka", "Stomatologia dziecięca", "Periodontologia"],
    image: servicePhoto,
  },
  {
    icon: Activity,
    title: "Endodoncja",
    desc: "Leczenie kanałowe pierwotne i wtórne prowadzone z wykorzystaniem nowoczesnych narzędzi oraz diagnostyki.",
    items: ["Leczenie kanałowe", "Endodoncja mikroskopowa", "Diagnostyka RTG", "Kontrola efektów leczenia"],
    image: clinicPhoto,
  },
  {
    icon: Shield,
    title: "Chirurgia stomatologiczna",
    desc: "Zabiegi chirurgiczne realizowane z dbałością o bezpieczeństwo pacjenta, komfort i prawidłowe gojenie.",
    items: ["Chirurgia stomatologiczna", "Opieka pozabiegowa", "Diagnostyka przed zabiegiem", "Bezpieczny przebieg procedur"],
    image: clinicPhoto,
  },
  {
    icon: Activity,
    title: "Implantologia",
    desc: "Leczenie implantologiczne planowane na podstawie diagnostyki radiologicznej i indywidualnych potrzeb pacjenta.",
    items: ["Implanty", "Plan leczenia", "Tomografia", "Odbudowa braków zębowych"],
    image: clinicPhoto,
  },
  {
    icon: Smile,
    title: "Protetyka",
    desc: "Protetyka stała i ruchoma wykonywana z wykorzystaniem własnej pracowni, z naciskiem na estetykę i precyzję.",
    items: ["Protetyka stała", "Protetyka ruchoma", "Własna pracownia", "Uzupełnienia na zębach i implantach"],
    image: orthoPhoto,
  },
  {
    icon: Shield,
    title: "Leczenie w sedacji wziewnej",
    desc: 'Leczenie z wykorzystaniem gazu "rozweselającego", wspierające spokojny przebieg wizyty u dzieci i pacjentów odczuwających lęk.',
    items: ["Sedacja wziewna", "Leczenie dzieci", "Komfort pacjenta", "Spokojna atmosfera wizyty"],
    image: servicePhoto,
  },
  {
    icon: Smile,
    title: "Ortodoncja i estetyka",
    desc: "Leczenie ortodontyczne oraz stomatologia estetyczna wspierające zdrowy i harmonijny uśmiech.",
    items: ["Ortodoncja", "Aparaty stałe", "Aparaty nakładkowe", "Stomatologia estetyczna"],
    image: orthoPhoto,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <PageHero
        eyebrow="Usługi w Nowej Soli"
        title="Kompleksowa stomatologia"
        description="Pełna oferta zabiegów stomatologicznych: od profilaktyki i leczenia zachowawczego po implantologię, protetykę i ortodoncję."
        image={heroPhoto}
        alt="Usługi Przychodni Korona"
        mobileObjectPosition="48% center"
        desktopObjectPosition="center center"
        actions={[
          {
            label: "Umów wizytę",
            href: PRACTICE.bookingUrl,
            trailingIcon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
            testId: "services-hero-book",
          },
          {
            label: PRACTICE.phoneDisplay,
            href: PRACTICE.phoneHref,
            variant: "secondary",
            icon: <Phone className="w-4 h-4 mr-2 text-secondary" />,
            testId: "services-hero-call",
          },
        ]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Zakres leczenia</h2>
            <p className="text-base md:text-lg text-foreground/60">
              Najważniejsze obszary leczenia dostępne w Przychodni Korona.
            </p>
          </motion.div>

          <div className="space-y-5 md:space-y-10">
            {serviceGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={FADE_UP}
                className="grid lg:grid-cols-[1fr_1.2fr] gap-0 bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden shadow-sm lg:h-[360px]"
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} h-[220px] md:h-[280px] lg:h-full lg:min-h-0 overflow-hidden`}>
                  <img src={group.image} alt={group.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-10 lg:py-8 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-secondary">
                    <group.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{group.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{group.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-5 md:gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-primary/20 border border-primary/30 p-6 md:p-10 rounded-2xl md:rounded-3xl">
            <Shield className="w-10 h-10 text-secondary mb-5" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Ustal dogodny termin</h3>
            <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
              Rejestracja odpowie na pytania, pomoże dobrać termin i wskaże właściwy tryb wizyty.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14">
              <a href={PRACTICE.bookingUrl}>
                Kontakt i rejestracja <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-secondary/20 border border-secondary/30 p-6 md:p-10 rounded-2xl md:rounded-3xl">
            <MapPin className="w-10 h-10 text-secondary mb-5" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Adres przychodni</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
              {PRACTICE.addressLines[0]}<br />
              {PRACTICE.addressLines[1]}<br />
              {PRACTICE.addressLines[2]}
            </p>
            <a href={PRACTICE.mapsUrl} target="_blank" rel="noreferrer" className="text-secondary font-semibold hover:underline inline-flex items-center gap-1">
              Otwórz mapę <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
