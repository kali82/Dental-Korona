import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/practice";

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Footer() {
  return (
    <>
      <section className="py-24 bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_0%,transparent_50%)]" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white">Umów wizytę w Przychodni Korona.</h2>
          <Button asChild size="lg" className="bg-[#C9A84C] hover:bg-[#b8953f] text-white rounded-full px-10 h-16 text-lg shadow-xl transition-all group" data-testid="footer-book-online">
            <Link href={PRACTICE.bookingUrl}>
              Kontakt i rejestracja
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <footer className="bg-[#1a1410] text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="mb-6">
                <p className="text-2xl font-semibold text-white">Przychodnia Korona</p>
                <p className="text-sm uppercase tracking-widest text-white/50 mt-1">{PRACTICE.specialty}</p>
              </div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Adres</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-white/70">
                    {PRACTICE.addressLines[0]}<br />
                    {PRACTICE.addressLines[1]}<br />
                    {PRACTICE.addressLines[2]}
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  <a href={PRACTICE.phoneHref} className="text-white/70 hover:text-white transition-colors" data-testid="footer-phone">
                    {PRACTICE.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  <a href={PRACTICE.mobileHref} className="text-white/70 hover:text-white transition-colors" data-testid="footer-mobile">
                    {PRACTICE.mobileDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Przychodnia</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Start", href: "/" },
                  { label: "O nas", href: "/about" },
                  { label: "Zespół", href: "/team" },
                  { label: "Usługi", href: "/services" },
                  { label: "Dla pacjenta", href: "/new-patients" },
                  { label: "Galeria", href: "/gallery" },
                  { label: "Kontakt", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors" data-testid={`footer-nav-${link.label.toLowerCase().replace(" ", "-")}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Zakres opieki</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Stomatologia zachowawcza",
                  "Leczenie kanalowe",
                  "Implantologia",
                  "Chirurgia stomatologiczna",
                  "Protetyka",
                  "Ortodoncja",
                  "Kosmetologia",
                ].map((item) => (
                  <li key={item}>
                    <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Kontakt</p>
              <ul className="space-y-3 text-sm mb-8">
                <li>
                  <a href={PRACTICE.emailHref} className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C9A84C]" />
                    {PRACTICE.email}
                  </a>
                </li>
                <li>
                  <a href={PRACTICE.website} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#C9A84C]" />
                    przychodniakorona.pl
                  </a>
                </li>
                <li>
                  <a href={PRACTICE.mapsUrl} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C9A84C]" />
                    Mapa i dojazd
                  </a>
                </li>
              </ul>

              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Godziny</p>
              <div className="space-y-2 text-sm">
                {PRACTICE.hours.map((row) => (
                  <div key={row.days} className="flex items-center gap-2 text-white/60">
                    <Clock className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    <span>{row.days}: {row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>&copy; Przychodnia Korona 2026</p>
            <p>{PRACTICE.addressLines[0]}, {PRACTICE.addressLines[1]}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
