import { motion } from "framer-motion";
import { ArrowRight, Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/DJI_0308-HDR-scaled.jpg";

const contactCards = [
  {
    icon: MapPin,
    label: "Adres",
    value: PRACTICE.addressLines.join(", "),
    href: PRACTICE.mapsUrl,
  },
  {
    icon: Phone,
    label: "Telefon komórkowy",
    value: PRACTICE.phoneDisplay,
    href: PRACTICE.phoneHref,
  },
  {
    icon: Phone,
    label: "Telefon stacjonarny",
    value: PRACTICE.landlineDisplay,
    href: PRACTICE.landlineHref,
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
        <PageHero
          eyebrow="Kontakt"
          title="Przychodnia Korona"
          description="Dane kontaktowe, godziny otwarcia i oficjalne profile społecznościowe przychodni."
          image={heroPhoto}
          alt="Kontakt z Przychodnią Korona"
          mobileObjectPosition="38% center"
          desktopObjectPosition="center center"
          actions={[
            {
              label: PRACTICE.phoneDisplay,
              href: PRACTICE.phoneHref,
              icon: <Phone className="w-4 h-4 mr-2" />,
              testId: "contact-hero-call",
            },
            {
              label: "Dojazd",
              href: PRACTICE.mapsUrl,
              variant: "secondary",
              external: true,
              trailingIcon: <ArrowRight className="w-4 h-4 ml-2" />,
              testId: "contact-hero-map",
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
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
                  className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all"
                >
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 md:mb-5 text-secondary">
                    <card.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-foreground/40 mb-2">{card.label}</p>
                  <p className="text-lg md:text-xl font-semibold text-foreground leading-snug">{card.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
                className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-sm uppercase tracking-widest text-foreground/40 mb-5">Godziny otwarcia</p>
                <div className="space-y-3">
                  {PRACTICE.hours.map((row) => (
                    <div key={row.days} className="flex items-center justify-between gap-4 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                      <span className="text-foreground/70">{row.days}</span>
                      <span className="font-semibold text-foreground text-right">{row.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
                className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm"
              >
                <p className="text-sm uppercase tracking-widest text-foreground/40 mb-5">Media społecznościowe</p>
                <div className="space-y-4">
                  <a
                    href={PRACTICE.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-border p-4 md:p-5 hover:border-secondary/50 hover:bg-primary/10 transition-colors"
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
                    className="flex items-center gap-4 rounded-2xl border border-border p-4 md:p-5 hover:border-secondary/50 hover:bg-primary/10 transition-colors"
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
