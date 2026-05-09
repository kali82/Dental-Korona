import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, CheckCircle, MapPin, ChevronRight, Clock, Star, Headphones, Sparkles, Smile, Wind, Stethoscope, AlertCircle, Braces, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";

import heroPhoto from "@assets/screenshot-1778320007102.png";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      {/* 1. Hero */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroPhoto} 
            alt="Beehive Dental Reception" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent md:to-background/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-2xl"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 text-sm font-medium mb-6">
              Premier Oakville Dentist
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-semibold text-foreground leading-[1.1] mb-6">
              Redefining your dental care experience
            </motion.h1>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 text-base shadow-xl hover:shadow-secondary/20 transition-all group" data-testid="home-hero-book-online">
                <a href="https://app.nexhealth.com/appt/beehive-dental" target="_blank" rel="noreferrer">
                  Book Online
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-border/50 hover:bg-white/80 rounded-full px-8 h-14 text-base transition-all" data-testid="home-hero-call">
                <a href="tel:9057885555">
                  <Phone className="w-4 h-4 mr-2 text-secondary" />
                  Or Call (905) 788-5555
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Welcome / About Intro */}
      <section className="py-24 bg-background" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
            >
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Welcome to Beehive Dental!
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Enjoy state-of-the-art dental care in a spa-like environment. Our experienced Oakville dentist, boasting two decades of dental experience, uses the latest technology and modern techniques to provide exceptional dentistry. Inspired by the beehive's remarkable organization and creativity, our clinic mirrors this natural wonder, guiding us to deliver organized, efficient, and innovative dental care.
              </motion.p>
              <motion.ul variants={FADE_UP} className="text-left max-w-xl mx-auto space-y-4">
                {[
                  "Serving the entire family – all ages welcome",
                  "Same-day emergency appointments available",
                  "Transparent pricing (no surprise bills!)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof / Reviews */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">450+ 5 Star Reviews</h2>
            <p className="text-foreground/60 text-lg">Kind words from our patients</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                text: "Exceptional care and service at Beehive Dental! What sets this clinic apart is its attention to detail and personalized service. It's clear they genuinely care about making each visit as comfortable and stress-free as possible.",
                author: "Ola M."
              },
              {
                text: "Dr. Aly is amazing. He does such great work and has such great advice. He is not only super personable but is also so fast! We can't believe what he accomplished in an hour.",
                author: "David S."
              },
              {
                text: "I honestly have to say that Dr. Aly is the best dentist I've ever known. He has such a wonderful spirit and a smile that brightens the day.",
                author: "Chelsea P."
              }
            ].map((review, i) => (
              <motion.div key={i} variants={FADE_UP} className="bg-background border border-border p-8 rounded-3xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-5 h-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-foreground">— {review.author}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center"
          >
            <a href="https://www.google.com/maps/place/Beehive+Dental/@43.4376701,-79.7118861,17z" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline text-lg" data-testid="home-reviews-link">
              See all reviews on Google <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-24 bg-background" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">All-in-one dental solutions, right here in one place</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Stethoscope,
                title: "Comprehensive Dentistry",
                desc: "From routine cleanings to advanced surgeries, root canals, and full mouth rehabilitation, leverage our expertise and advanced technology to achieve exceptional results."
              },
              {
                icon: Shield,
                title: "Emergency Dentist in Oakville",
                desc: "In pain? Our Oakville emergency dentist offers immediate relief through same-day appointments and compassionate emergency care. Let's get you feeling better fast."
              },
              {
                icon: Smile,
                title: "Orthodontics in Oakville",
                desc: "Modern and personalized orthodontic treatment for all ages. Interested in learning more? We invite you to book a complimentary orthodontic consultation."
              }
            ].map((service, i) => (
              <motion.div key={i} variants={FADE_UP} className="bg-muted/30 border border-border/50 p-8 rounded-3xl flex flex-col hover:bg-muted/50 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-secondary">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <a href="#services" className="text-secondary font-medium inline-flex items-center gap-1 hover:underline" data-testid={`home-service-link-${i}`}>
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Luxury Amenities */}
      <section className="py-24 bg-card border-y border-border/50 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
            >
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">A place of relaxation and rejuvenation</motion.h2>
              <motion.p variants={FADE_UP} className="text-xl text-secondary font-medium mb-6">You deserve luxury!</motion.p>
              <motion.p variants={FADE_UP} className="text-lg text-foreground/70 mb-8">
                Our free signature comforts and perks:
              </motion.p>
              
              <motion.div variants={FADE_UP} className="space-y-4 mb-10">
                {[
                  { text: "Free whitening for life", icon: Sparkles },
                  { text: "Ample free parking", icon: MapPin },
                  { text: "Noise-cancellation headphones", icon: Headphones },
                  { text: "Eye masks, cozy blankets, and supportive pillows", icon: Coffee },
                  { text: "Aromatherapy with essential oils", icon: Wind },
                  { text: "Warm, lavender-scented towels", icon: Sparkles },
                  { text: "Kid-friendly amenities for our littlest patients", icon: Smile }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-secondary">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-foreground/80 font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div variants={FADE_UP}>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14" data-testid="home-luxury-cta">
                  <Link href="/new-patients">
                    Your First Visit <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="relative"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-border shadow-2xl relative bg-muted">
                <img src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour3.jpg" alt="Beehive Dental Comforts" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Transparent Pricing & Insurance */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="bg-primary/20 border border-primary/30 p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">No Surprises Pricing</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
              We believe in complete transparency. We'll always discuss treatment costs before we begin.
            </p>
            <ul className="space-y-4 mb-8">
              {['Transparent Estimates', 'No Hidden Fees', 'Accessible Care Options'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="bg-secondary/20 border border-secondary/30 p-10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Insurance & Direct Billing</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed text-lg">
                We offer direct billing to most major insurance companies to minimize your out-of-pocket expenses.
              </p>
              <div className="bg-white/60 backdrop-blur-sm border border-border p-4 rounded-2xl mb-8 flex items-start gap-4">
                <Shield className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Direct Billing Available</h4>
                  <p className="text-sm text-foreground/70">We handle the paperwork with your provider so you don't have to.</p>
                </div>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full bg-white hover:bg-muted border-border rounded-xl h-12 text-foreground" data-testid="home-insurance-call">
              <a href="tel:9057885555">Call to verify your insurance</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 7. Office Tour Gallery */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Step Inside</h2>
            <p className="text-foreground/60 text-lg">Take a tour of our state-of-the-art facility.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {[
              "https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour0.jpg",
              "https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour1-scaled.jpg",
              "https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour3.jpg",
              "https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour4.jpg",
              "https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour5.jpg",
              "https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour6.jpg"
            ].map((url, i) => (
              <motion.div key={i} variants={FADE_UP} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
                <img src={url} alt={`Office Tour ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center"
          >
            <Button asChild variant="outline" size="lg" className="bg-background rounded-full px-8 h-12" data-testid="home-tour-link">
              <a href="#office-tour">Tour the office</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 8. Visit / Location */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Visit Our Beehive</h2>
            <div className="flex justify-center mb-12">
              <div className="h-1 w-20 bg-secondary rounded-full" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
            >
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-foreground/70 mb-4">
                    1075 North Service Road West<br/>
                    Suite 23<br/>
                    Oakville, Ontario
                  </p>
                  <a href="https://maps.app.goo.gl/vLrG9yct1S2qZwzW8" target="_blank" rel="noreferrer" className="text-secondary font-medium hover:underline inline-flex items-center gap-1" data-testid="home-directions">
                    Get Directions <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
            >
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-4">Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-foreground/70">Mon, Thu, Sat</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-foreground/70">Tue, Wed, Fri</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-foreground/70">Sunday</span>
                      <span className="font-medium text-foreground/40">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA + Footer */}
      <Footer />
    </div>
  );
}
