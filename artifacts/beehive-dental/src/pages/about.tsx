import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle, Clock, GraduationCap, Heart, MapPin, Phone, Shield, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/DSC00462.jpg";
import clinicPhoto from "@assets/DSC00546.jpg";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <PageHero
        eyebrow="O Przychodni Korona"
        title="Doświadczenie i kompleksowa opieka w Nowej Soli"
        description="Przychodnia stomatologiczna działająca od 1982 roku, prowadzona z naciskiem na komfort, rzetelną diagnostykę i spokojną atmosferę leczenia."
        image={heroPhoto}
        alt="O Przychodni Korona"
        height="large"
        mobileObjectPosition="52% center"
        desktopObjectPosition="center center"
        actions={[
          {
            label: "Kontakt i rejestracja",
            href: PRACTICE.bookingUrl,
            trailingIcon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
            testId: "about-hero-book",
          },
          {
            label: PRACTICE.phoneDisplay,
            href: PRACTICE.phoneHref,
            variant: "secondary",
            icon: <Phone className="w-4 h-4 mr-2 text-secondary" />,
            testId: "about-hero-call",
          },
        ]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-8 text-foreground leading-tight">
                Przychodnia stomatologiczna z pełną ofertą zabiegów
              </motion.h2>
              <motion.div variants={FADE_UP} className="space-y-5 md:space-y-6 text-base md:text-lg text-foreground/70 leading-relaxed">
                <p>
                  NZOZ Korona działa na rynku od 1982 roku. Długoletnia praktyka pozwoliła przygotować szeroką ofertę zabiegów z zakresu stomatologii, w tym endodoncji, protetyki i implantologii.
                </p>
                <p>
                  Zespół przychodni zapewnia opiekę pacjentom w każdym wieku. Ważnym elementem pracy jest kameralna atmosfera i nowoczesne metody znieczulenia, które ograniczają stres związany z wizytą.
                </p>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img src={clinicPhoto} alt="Przychodnia Korona" className="w-full h-full object-cover aspect-[4/5] md:aspect-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Co wyróżnia przychodnię</h2>
            <p className="text-base md:text-lg text-foreground/60">Najważniejsze informacje o sposobie pracy i organizacji leczenia.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: Award,
                title: "Doświadczenie od 1982 roku",
                desc: "Wieloletnia praktyka w branży usług stomatologicznych i rozwijana oferta leczenia.",
              },
              {
                icon: Shield,
                title: "Komfort leczenia",
                desc: "Kameralna atmosfera, nowoczesne znieczulenie i indywidualne omówienie planu wizyty.",
              },
              {
                icon: Users,
                title: "Zespół specjalistów",
                desc: "Lekarze dentyści, higienistki, asystentki i technicy wspierający kompleksową opiekę.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={FADE_UP} className="bg-background border border-border p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm">
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

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-5 md:gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-primary/10 border border-primary/30 rounded-2xl md:rounded-3xl p-6 md:p-10">
              <GraduationCap className="w-10 h-10 text-secondary mb-5" />
              <h2 className="text-3xl font-semibold mb-6">Kadra</h2>
              <p className="text-foreground/75 leading-relaxed mb-8">
                Aktualna lista lekarzy, higienistek, asystentek i techników znajduje się na oficjalnej stronie przychodni.
              </p>
              <Button asChild variant="outline" className="bg-white/70 border-border rounded-xl h-12 px-6" data-testid="about-team-link">
                <a href="/team">
                  Zobacz kadrę <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-secondary/10 border border-secondary/30 rounded-2xl md:rounded-3xl p-6 md:p-10">
              <Sparkles className="w-10 h-10 text-secondary mb-5" />
              <h2 className="text-3xl font-semibold mb-6">Technologia i diagnostyka</h2>
              <p className="text-foreground/75 leading-relaxed mb-6">
                Przychodnia korzysta z diagnostyki radiologicznej, w tym cyfrowych zdjęć panoramicznych, cefalometrycznych oraz tomografii.
              </p>
              <ul className="space-y-3">
                {["RTG punktowe", "Zdjęcia panoramiczne", "Tomografia i diagnostyka ortodontyczna"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Dane przychodni</h2>
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
                <a href={PRACTICE.mapsUrl} target="_blank" rel="noreferrer" className="text-secondary font-medium hover:underline inline-flex items-center gap-1">
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

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14">
            <a href={PRACTICE.bookingUrl}>
              Kontakt i rejestracja <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14">
            <a href={PRACTICE.phoneHref}>
              <Phone className="w-4 h-4 mr-2 text-secondary" />
              {PRACTICE.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
