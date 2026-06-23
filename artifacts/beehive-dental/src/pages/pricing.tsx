import { motion } from "framer-motion";
import { ArrowRight, Info, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Footer, FADE_UP } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { useT } from "@/lib/i18n";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/optimized-jpg/DSC00543.jpg";

export default function Pricing() {
  const { t } = useT();

  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <main className="flex-grow">
        <PageHero
          eyebrow={t("Cennik")}
          title={t("Cennik w przygotowaniu")}
          description={t("Pracujemy nad aktualizacją cennika. Do czasu publikacji aktualnych informacji prosimy o kontakt z rejestracją przychodni.")}
          image={heroPhoto}
          alt={t("Cennik Przychodni Korona")}
          mobileObjectPosition="34% center"
          desktopObjectPosition="center center"
          actions={[
            {
              label: t("Kontakt i rejestracja"),
              href: PRACTICE.bookingUrl,
              trailingIcon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
              testId: "pricing-hero-contact",
            },
            {
              label: PRACTICE.phoneDisplay,
              href: PRACTICE.phoneHref,
              variant: "secondary",
              icon: <Phone className="w-4 h-4 mr-2 text-secondary" />,
              testId: "pricing-hero-call",
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-background">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={FADE_UP}
            className="max-w-4xl mx-auto px-5 sm:px-6"
          >
            <div className="rounded-2xl md:rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Info className="h-6 w-6" />
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">{t("Strona w budowie")}</h2>
              <p className="text-lg leading-relaxed text-foreground/70 mb-8">
                {t("Aktualny cennik jest w przygotowaniu. W sprawie wyceny leczenia prosimy kontaktować się bezpośrednio z rejestracją Przychodni Korona.")}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Button asChild size="lg" className="h-14 rounded-full bg-secondary px-8 text-white hover:bg-secondary/90">
                  <Link href={PRACTICE.bookingUrl}>
                    {t("Przejdź do kontaktu")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 rounded-full bg-background px-8">
                  <a href={PRACTICE.phoneHref}>
                    <Phone className="mr-2 h-4 w-4 text-secondary" />
                    {PRACTICE.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
