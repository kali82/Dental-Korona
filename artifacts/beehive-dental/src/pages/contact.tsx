import { motion } from "framer-motion";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";
import { PRACTICE } from "@/lib/practice";

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
        <section className="pt-32 pb-20 bg-background">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 text-sm font-medium mb-6">
              Kontakt
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
              Przychodnia Korona
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Dane kontaktowe, godziny otwarcia i oficjalne profile społecznościowe przychodni.
            </p>
          </motion.div>
        </section>

        <section className="pb-24 bg-background">
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
