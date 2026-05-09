import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import beehiveLogo from "@assets/beehive-logo.png";

export const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Footer() {
  return (
    <>
      {/* Book CTA */}
      <section className="py-24 bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_0%,transparent_50%)]" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white">Book today for quality care.</h2>
          <Button asChild size="lg" className="bg-[#C9A84C] hover:bg-[#b8953f] text-white rounded-full px-10 h-16 text-lg shadow-xl transition-all group" data-testid="footer-book-online">
            <a href="https://app.nexhealth.com/appt/beehive-dental" target="_blank" rel="noreferrer">
              Book Online Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#1a1410] text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Column 1 — Office */}
            <div>
              <img src={beehiveLogo} alt="Beehive Dental" className="h-9 w-auto mb-6 brightness-0 invert opacity-80" />
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Office</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-white/70">
                    1075 North Service Road West,<br />
                    Suite 23<br />
                    Oakville, Ontario
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  <a href="tel:9057885555" className="text-white/70 hover:text-white transition-colors" data-testid="footer-phone">
                    (905) 788-5555
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 — Practice */}
            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Practice</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "New Patients", href: "/new-patients" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors" data-testid={`footer-nav-${link.label.toLowerCase().replace(" ", "-")}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Services</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "General Dentistry", href: "/services" },
                  { label: "Emergency Dentistry", href: "/services" },
                  { label: "Surgical Care", href: "/services" },
                  { label: "Root Canals", href: "/services" },
                  { label: "Tooth Extractions", href: "/services" },
                  { label: "Orthodontic Treatment", href: "/services" },
                  { label: "Invisalign", href: "/services" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors" data-testid={`footer-service-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Review Us + Social */}
            <div>
              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Review Us</p>
              <ul className="space-y-2.5 text-sm mb-8">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Beehive+Dental/@43.4376701,-79.7118861,17z"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2"
                    data-testid="footer-review-google"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/beehivedental"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2"
                    data-testid="footer-review-facebook"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </li>
              </ul>

              <p className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">Social</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/beehivedental" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A84C]/80 flex items-center justify-center transition-colors"
                  data-testid="footer-social-instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/beehivedental" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A84C]/80 flex items-center justify-center transition-colors"
                  data-testid="footer-social-facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>&copy; Beehive Dental 2026 | <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white/70 transition-colors">Accessibility Statement</a></p>
            <p>Dental Web Design &amp; SEO by <span className="text-white/60 font-medium">:Delmain</span></p>
          </div>
        </div>
      </footer>
    </>
  );
}
