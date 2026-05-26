import { Link } from "wouter";
import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle, Clock, MapPin, Phone, Shield, Smile, Sparkles, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/cropped-DJI_0300-HDR-scaled-1.jpg";
import officePhoto from "@assets/DSC00462.jpg";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const serviceCards = [
  {
    icon: Stethoscope,
    title: "Stomatologia zachowawcza",
    desc: "Leczenie próchnicy, odbudowy zębów, profilaktyka i regularne wizyty kontrolne dla dorosłych i dzieci.",
  },
  {
    icon: Activity,
    title: "Endodoncja, protetyka i implantologia",
    desc: "Leczenie kanałowe, uzupełnienia protetyczne, implanty oraz kompleksowa odbudowa braków zębowych.",
  },
  {
    icon: Smile,
    title: "Ortodoncja i kosmetologia",
    desc: "Leczenie ortodontyczne, stomatologia estetyczna oraz zabiegi kosmetologiczne w jednym miejscu.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <PageHero
        eyebrow={`${PRACTICE.cityDisplay}, ${PRACTICE.region}`}
        title="Stomatologia i kosmetologia w Przychodni Korona"
        description="Kompleksowa opieka stomatologiczna dla pacjentów w każdym wieku, prowadzona w kameralnej i komfortowej atmosferze."
        image={heroPhoto}
        alt="Przychodnia Korona w Nowej Soli"
        height="home"
        titleSize="large"
        mobileObjectPosition="58% center"
        desktopObjectPosition="center center"
        actions={[
          {
            label: "Umów wizytę",
            href: PRACTICE.bookingUrl,
            trailingIcon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
            testId: "home-hero-book-online",
          },
          {
            label: PRACTICE.phoneDisplay,
            href: PRACTICE.phoneHref,
            variant: "secondary",
            icon: <Phone className="w-4 h-4 mr-2 text-secondary" />,
            testId: "home-hero-call",
          },
        ]}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Przychodnia z doświadczeniem od 1982 roku
              </motion.h2>
              <motion.div variants={FADE_UP} className="space-y-5 text-base md:text-lg text-foreground/70 leading-relaxed">
                <p>
                  NZOZ Korona działa na rynku usług stomatologicznych od wielu lat, oferując leczenie zachowawcze, endodoncję, protetykę, implantologię, ortodoncję i profilaktykę.
                </p>
                <p>
                  Priorytetem zespołu jest leczenie w spokojnej atmosferze, z wykorzystaniem nowoczesnych metod diagnostyki i znieczulenia.
                </p>
              </motion.div>
              <motion.ul variants={FADE_UP} className="mt-8 space-y-4">
                {[
                  "Opieka stomatologiczna dla dorosłych i dzieci",
                  "Diagnostyka RTG, leczenie kanałowe i protetyka",
                  "Adres: ul. Krasińskiego 15, 67-100 Nowa Sól",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/80 font-medium">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img src={officePhoto} alt="Gabinet Przychodni Korona" className="w-full h-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Zakres opieki</h2>
            <p className="text-foreground/60 text-base md:text-lg">Najważniejsze obszary leczenia dostępne w Przychodni Korona.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {serviceCards.map((service) => (
              <motion.div key={service.title} variants={FADE_UP} className="bg-background border border-border p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-secondary">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-8">{service.desc}</p>
                <Link href="/services" className="text-secondary font-medium inline-flex items-center gap-1 hover:underline">
                  Zobacz usługi <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-5 md:gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-primary/20 border border-primary/30 p-6 md:p-10 rounded-2xl md:rounded-3xl">
            <Shield className="w-10 h-10 text-secondary mb-5" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Komfort i bezpieczeństwo</h3>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              Przychodnia stawia na spokojną atmosferę wizyty, nowoczesną diagnostykę i rzetelne omówienie planu leczenia.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="bg-secondary/20 border border-secondary/30 p-6 md:p-10 rounded-2xl md:rounded-3xl">
            <Sparkles className="w-10 h-10 text-secondary mb-5" />
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Stomatologia i kosmetologia</h3>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              Oferta łączy leczenie stomatologiczne z zabiegami estetycznymi, dzięki czemu pacjent może korzystać z wielu usług w jednej lokalizacji.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Kontakt i dojazd</h2>
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
                <a href={PRACTICE.mapsUrl} target="_blank" rel="noreferrer" className="text-secondary font-medium hover:underline inline-flex items-center gap-1" data-testid="home-directions">
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
