import { motion } from "framer-motion";
import { ArrowRight, Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/beehive-tour-1.jpg";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const contactCards = [
  {
    icon: MapPin,
    label: "Adres",
    value: PRACTICE.addressLines.join(", "),
    href: PRACTICE.mapsUrl,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: PRACTICE.phoneDisplay,
    href: PRACTICE.phoneHref,
  },
  {
    icon: Phone,
    label: "GSM",
    value: PRACTICE.mobileDisplay,
    href: PRACTICE.mobileHref,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: PRACTICE.email,
    href: PRACTICE.emailHref,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <main className="flex-grow">
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img src={heroPhoto} alt="Kontakt z Przychodnią Korona" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent md:to-background/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-2xl">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 text-sm font-medium mb-6">
                Kontakt
              </motion.div>
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
                Przychodnia Korona
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
                Dane kontaktowe, godziny otwarcia i oficjalne profile społecznościowe przychodni.
              </motion.p>
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 text-base shadow-xl group" data-testid="contact-hero-call">
                  <a href={PRACTICE.phoneHref}>
                    <Phone className="w-4 h-4 mr-2" />
                    {PRACTICE.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-border/50 hover:bg-white/80 rounded-full px-8 h-14 text-base transition-all" data-testid="contact-hero-map">
                  <a href={PRACTICE.mapsUrl} target="_blank" rel="noreferrer">
                    Dojazd
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {contactCards.map((card) => (
                <motion.a
                  key={card.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={FADE_UP}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 text-secondary">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-foreground/40 mb-2">{card.label}</p>
                  <p className="text-xl font-semibold text-foreground leading-snug">{card.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-sm uppercase tracking-widest text-foreground/40 mb-5">Godziny otwarcia</p>
                <div className="space-y-3">
                  {PRACTICE.hours.map((row) => (
                    <div key={row.days} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0">
                      <span className="text-foreground/70">{row.days}</span>
                      <span className="font-semibold text-foreground">{row.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
                className="bg-card border border-border rounded-3xl p-8 shadow-sm"
              >
                <p className="text-sm uppercase tracking-widest text-foreground/40 mb-5">Media społecznościowe</p>
                <div className="space-y-4">
                  <a
                    href={PRACTICE.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-border p-5 hover:border-secondary/50 hover:bg-primary/10 transition-colors"
                  >
                    <span className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-secondary">
                      <Facebook className="w-6 h-6" />
                    </span>
                    <span>
                      <span className="block text-sm text-foreground/50">Facebook</span>
                      <span className="font-semibold text-foreground">{PRACTICE.facebookName}</span>
                    </span>
                  </a>
                  <a
                    href={PRACTICE.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-border p-5 hover:border-secondary/50 hover:bg-primary/10 transition-colors"
                  >
                    <span className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-secondary">
                      <Instagram className="w-6 h-6" />
                    </span>
                    <span>
                      <span className="block text-sm text-foreground/50">Instagram</span>
                      <span className="font-semibold text-foreground">@{PRACTICE.instagramName}</span>
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
