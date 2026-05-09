import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle, HeartPulse, MapPin, Phone, Shield, Smile, Sparkles, Stethoscope, Syringe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/screenshot-1778326512876.png";
import servicePhoto from "@assets/beehive-services-2.jpg";
import orthoPhoto from "@assets/beehive-services-3.jpg";
import clinicPhoto from "@assets/beehive-tour-4.jpg";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const serviceGroups = [
  {
    icon: Stethoscope,
    title: "Stomatologia zachowawcza i profilaktyka",
    desc: "Leczenie próchnicy, odbudowy zębów, higienizacja, lakierowanie, lakowanie oraz regularne kontrole.",
    items: ["Stomatologia zachowawcza", "Profilaktyka", "Stomatologia dziecięca", "Periodontologia"],
    image: servicePhoto,
  },
  {
    icon: Activity,
    title: "Endodoncja, chirurgia i implantologia",
    desc: "Leczenie kanałowe, zabiegi chirurgiczne, implanty oraz diagnostyka radiologiczna wspierająca plan leczenia.",
    items: ["Leczenie kanałowe", "Chirurgia stomatologiczna", "Implantologia", "Zdjęcia RTG i tomografia"],
    image: clinicPhoto,
  },
  {
    icon: Smile,
    title: "Protetyka, ortodoncja i estetyka",
    desc: "Uzupełnienia protetyczne, leczenie ortodontyczne, stomatologia estetyczna oraz kosmetologia.",
    items: ["Protetyka jednego dnia", "Ortodoncja", "Stomatologia estetyczna", "Kosmetologia"],
    image: orthoPhoto,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroPhoto} alt="Usługi Przychodni Korona" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent md:to-background/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-2xl">
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 text-sm font-medium mb-6">
              Usługi w Nowej Soli
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
              Kompleksowa stomatologia i kosmetologia
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
              Pełna oferta zabiegów stomatologicznych: od profilaktyki i leczenia zachowawczego po implantologię, protetykę i ortodoncję.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 text-base shadow-xl group" data-testid="services-hero-book">
                <a href={PRACTICE.bookingUrl}>
                  Umów wizytę
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-border/50 hover:bg-white/80 rounded-full px-8 h-14 text-base transition-all" data-testid="services-hero-call">
                <a href={PRACTICE.phoneHref}>
                  <Phone className="w-4 h-4 mr-2 text-secondary" />
                  {PRACTICE.phoneDisplay}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Zakres leczenia</h2>
            <p className="text-lg text-foreground/60">
              Oferta została oparta o informacje z oficjalnej strony Przychodni Korona i obejmuje najważniejsze działy stomatologii oraz kosmetologii.
            </p>
          </motion.div>

          <div className="space-y-10">
            {serviceGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={FADE_UP}
                className="grid lg:grid-cols-[1fr_1.2fr] gap-0 bg-card border border-border rounded-3xl overflow-hidden shadow-sm"
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} min-h-[280px]`}>
                  <img src={group.image} alt={group.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
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

      <section className="py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Diagnostyka cyfrowa",
                desc: "W ofercie znajdują się cyfrowe zdjęcia panoramiczne, cefalometryczne oraz tomografia.",
              },
              {
                icon: Syringe,
                title: "Komfort leczenia",
                desc: "Nowoczesne metody znieczulenia pomagają ograniczyć stres związany z wizytą.",
              },
              {
                icon: HeartPulse,
                title: "Pacjenci w każdym wieku",
                desc: "Przychodnia prowadzi leczenie dzieci, dorosłych i pacjentów wymagających kompleksowej odbudowy.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={FADE_UP} className="bg-background border border-border p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-secondary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-primary/20 border border-primary/30 p-10 rounded-3xl">
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

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-secondary/20 border border-secondary/30 p-10 rounded-3xl">
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
