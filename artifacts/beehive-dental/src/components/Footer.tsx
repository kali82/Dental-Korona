import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OpeningHoursTime } from "@/components/OpeningHoursTime";
import { useT } from "@/lib/i18n";
import { PRACTICE } from "@/lib/practice";

import logo from "@assets/logo przychodnia bez tła mniejsza linia.png";

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Footer() {
  const { t } = useT();

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
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white">{t("Umów wizytę w Przychodni Korona.")}</h2>
          <Button asChild size="lg" className="bg-[#C9A84C] hover:bg-[#b8953f] text-white rounded-full px-10 h-16 text-lg shadow-xl transition-all group" data-testid="footer-book-online">
            <Link href={PRACTICE.bookingUrl}>
              {t("Kontakt i rejestracja")}
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
                <img src={logo} alt="Przychodnia Korona" className="h-24 w-auto max-w-[230px] object-contain" />
                <p className="text-sm uppercase tracking-widest text-white/50 mt-1">{t(PRACTICE.specialty)}</p>
              </div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">{t("Adres")}</p>
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
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">{t("Przychodnia")}</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Start", href: "/" },
                  { label: "O nas", href: "/about" },
                  { label: "Zespół", href: "/team" },
                  { label: "Cennik", href: "/pricing" },
                  { label: "Dla pacjenta", href: "/new-patients" },
                  { label: "Galeria", href: "/gallery" },
                  { label: "Kontakt", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors" data-testid={`footer-nav-${link.label.toLowerCase().replace(" ", "-")}`}>
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">{t("Zakres opieki")}</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Stomatologia zachowawcza",
                  "Leczenie kanalowe",
                  "Implantologia",
                  "Chirurgia stomatologiczna",
                  "Protetyka",
                  "Ortodoncja",
                ].map((item) => (
                  <li key={item}>
                    <Link href="/pricing" className="text-white/60 hover:text-white transition-colors">
                      {t(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">{t("Kontakt")}</p>
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
                    {t("Mapa i dojazd")}
                  </a>
                </li>
              </ul>

              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">{t("Godziny")}</p>
              <div className="space-y-2 text-sm">
                {PRACTICE.hours.map((row) => (
                  <div key={row.days} className="flex items-center gap-2 text-white/60">
                    <Clock className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    <span className="flex flex-wrap items-start gap-x-1 leading-tight">
                      <span>{t(row.days)}:</span>
                      <OpeningHoursTime time={row.time} />
                    </span>
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
