import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle, Clock, FileText, Mail, MapPin, Phone, Shield, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import heroImage from "@assets/DSC00462.jpg";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function NewPatients() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <PageHero
        eyebrow="Dla pacjenta"
        title="Umów wizytę w Przychodni Korona"
        description="Skontaktuj się z rejestracją, aby ustalić dogodny termin i przygotować się do wizyty."
        image={heroImage}
        alt="Dla pacjenta Przychodni Korona"
        height="large"
        titleSize="large"
        mobileObjectPosition="50% center"
        desktopObjectPosition="center center"
        actions={[
          {
            label: "Kontakt i rejestracja",
            href: PRACTICE.bookingUrl,
            trailingIcon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
            testId: "newpatients-hero-book-online",
          },
          {
            label: PRACTICE.phoneDisplay,
            href: PRACTICE.phoneHref,
            variant: "secondary",
            icon: <Phone className="w-4 h-4 mr-2 text-secondary" />,
            testId: "newpatients-hero-call",
          },
        ]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Jak umówić wizytę</h2>
            <p className="text-foreground/60 text-base md:text-lg">Najprościej skontaktować się telefonicznie albo przez dane kontaktowe na oficjalnej stronie przychodni.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={STAGGER} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Phone, title: "Zadzwoń", desc: `Telefon: ${PRACTICE.phoneDisplay}. Dodatkowo dostępny jest GSM: ${PRACTICE.mobileDisplay}.` },
              { icon: Mail, title: "Napisz", desc: `E-mail rejestracji: ${PRACTICE.email}.` },
              { icon: Calendar, title: "Ustal termin", desc: "Rejestracja pomoże dobrać dogodną datę, godzinę i rodzaj wizyty." },
              { icon: FileText, title: "Przygotuj informacje", desc: "Przygotuj dane pacjenta, cel wizyty i informację o dotychczasowym leczeniu." },
            ].map((feature) => (
              <motion.div key={feature.title} variants={FADE_UP} className="bg-muted/30 border border-border/50 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-secondary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-5 md:gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-background border border-border rounded-2xl md:rounded-3xl p-6 md:p-10">
            <Stethoscope className="w-10 h-10 text-secondary mb-5" />
            <h2 className="text-3xl font-semibold mb-6">Pierwsza wizyta</h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Podczas pierwszej wizyty zespół może ocenić stan jamy ustnej, omówić potrzeby pacjenta i zaproponować dalszy plan leczenia.
            </p>
            <ul className="space-y-4">
              {["Wywiad i konsultacja", "Diagnostyka według wskazań", "Omówienie planu leczenia", "Wycena i dalsze terminy"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-background border border-border rounded-2xl md:rounded-3xl p-6 md:p-10">
            <Shield className="w-10 h-10 text-secondary mb-5" />
            <h2 className="text-3xl font-semibold mb-6">Wizyty pilne</h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              W przypadku bólu, urazu lub nagłego problemu stomatologicznego najlepiej skontaktować się bezpośrednio z rejestracją.
            </p>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-12" data-testid="newpatients-call-emergency">
              <a href={PRACTICE.phoneHref}>Zadzwoń: {PRACTICE.phoneDisplay}</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Lokalizacja i godziny</h2>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-secondary rounded-full" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Adres</h3>
                <p className="text-foreground/70 mb-4">
                  {PRACTICE.addressLines[0]}<br />
                  {PRACTICE.addressLines[1]}<br />
                  {PRACTICE.addressLines[2]}
                </p>
                <a href={PRACTICE.mapsUrl} target="_blank" rel="noreferrer" className="text-secondary font-medium hover:underline inline-flex items-center gap-1" data-testid="newpatients-directions">
                  Dojazd <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div className="w-full">
                <h3 className="font-semibold text-lg mb-4">Godziny otwarcia</h3>
                <div className="space-y-2">
                  {PRACTICE.hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-4 border-b border-border/50 pb-2">
                      <span className="text-foreground/70">{row.days}</span>
                      <span className="font-medium text-right">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
