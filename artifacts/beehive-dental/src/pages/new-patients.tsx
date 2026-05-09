import { motion } from "framer-motion";
import { Phone, Calendar, Clock, MapPin, CheckCircle, Shield, Stethoscope, Coffee, Headphones, HeartHandshake, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";

import heroImage from "@assets/screenshot-1778319667950.png";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function NewPatients() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Beehive Dental Reception" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-2xl"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Accepting New Patients
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-semibold text-foreground leading-[1.1] mb-6">
              An exceptional level of care, <span className="text-secondary italic font-serif">from your very first visit.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-foreground/70 mb-10 max-w-lg leading-relaxed">
              Experience dentistry designed around your comfort. No rush, no judgment—just a warm team and a beautiful space.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 text-base shadow-xl hover:shadow-secondary/20 transition-all group" data-testid="newpatients-hero-book-online">
                <a href="https://app.nexhealth.com/appt/beehive-dental" target="_blank" rel="noreferrer">
                  Book Online
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-border/50 hover:bg-white/80 rounded-full px-8 h-14 text-base transition-all" data-testid="newpatients-hero-call">
                <a href="tel:9057885555">
                  <Phone className="w-4 h-4 mr-2 text-secondary" />
                  (905) 788-5555
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* First Appointment Steps */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">We've carefully designed every step of your first appointment</h2>
            <p className="text-foreground/60 text-lg">Your time is valuable. We make joining our practice effortless, so you can focus on your health.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Calendar, title: "Simple Scheduling", desc: "Easy online booking with same-day appointments available for urgent needs." },
              { icon: CheckCircle, title: "Automated Check-in", desc: "A modern, paperless office. Fill out your forms from home before you arrive." },
              { icon: MapPin, title: "Ample Free Parking", desc: "Never stress about parking with 250+ dedicated free spots right outside our door." },
              { icon: Coffee, title: "Feel at Home", desc: "Relax in our cozy lounge with complimentary beverages. Most patients wait less than 5 minutes." }
            ].map((feature, i) => (
              <motion.div key={i} variants={FADE_UP} className="bg-muted/30 border border-border/50 p-8 rounded-3xl hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-secondary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* In the Suite */}
      <section className="py-24 bg-card border-y border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
            >
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-6">Uncompromising comfort in the suite.</motion.h2>
              <motion.p variants={FADE_UP} className="text-lg text-foreground/70 mb-10 leading-relaxed">
                We believe dental care shouldn't feel clinical. Settle into our plush chairs and enjoy complimentary noise-canceling headphones, eye masks, cozy blankets, and calming aromatherapy during your treatment.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  { icon: Stethoscope, title: "Comprehensive Care", desc: "Your first visit includes 3D x-rays, a gentle cleaning, and a thorough oral cancer screening." },
                  { icon: HeartHandshake, title: "Clear Treatment Plan", desc: "We provide a detailed assessment and discuss accessible care options without pressure." },
                  { icon: Shield, title: "Goodies to Go", desc: "Leave with the premium tools, products, and knowledge needed for ongoing care at home." }
                ].map((item, i) => (
                  <motion.div key={i} variants={FADE_UP} className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-foreground/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-2xl relative">
                <img src={heroImage} alt="Beehive Dental Suite" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-primary" />
                    Noise-canceling headphones provided
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-3xl shadow-xl border border-border max-w-[280px]">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm font-medium italic mb-2">"The most relaxing dental experience I've ever had. Truly feels like a spa."</p>
                <p className="text-xs text-foreground/50">— Sarah M., Oakville</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Team */}
      <section className="py-24 bg-background" id="about">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">A top-notch clinical team</h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Led by experienced professionals, our team brings decades of collective expertise in comprehensive dentistry. We believe in gentle, patient-led care where your comfort always comes first.
            </p>
            <Button asChild variant="outline" className="bg-white hover:bg-muted border-border rounded-xl h-12 px-8" data-testid="newpatients-meet-team">
              <a href="#about">Meet Our Team</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Emergency & Pricing Grid */}
      <section className="py-24 bg-card border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="bg-accent/10 border border-accent/20 p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Same-Day Emergency Care</h3>
            <p className="text-foreground/70 mb-8">Dental emergencies are stressful enough. We reserve spots daily specifically for new patients who need immediate attention.</p>
            <ul className="space-y-4 mb-8">
              {['Rapid Response Team', 'Advanced 3D Diagnostics', 'Uncompromised Safety & Comfort'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-12" data-testid="newpatients-call-emergency">
              <a href="tel:9057885555">Call for Immediate Care</a>
            </Button>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="bg-primary/10 border border-primary/20 p-10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">No Surprises Pricing</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                We believe in complete transparency. We'll always discuss treatment costs before we begin, and we offer direct billing to most major insurance companies to minimize your out-of-pocket expenses.
              </p>
              <div className="bg-white/50 backdrop-blur-sm border border-border p-4 rounded-2xl mb-8 flex items-start gap-4">
                <Shield className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground">Direct Billing Available</h4>
                  <p className="text-sm text-foreground/60">We handle the paperwork with your provider so you don't have to.</p>
                </div>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full bg-white hover:bg-muted border-border rounded-xl h-12 text-foreground" data-testid="newpatients-call-insurance">
              <a href="tel:9057885555">Call to verify your insurance</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-card border-t border-border/50">
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
                  <a href="https://maps.app.goo.gl/vLrG9yct1S2qZwzW8" target="_blank" rel="noreferrer" className="text-secondary font-medium hover:underline inline-flex items-center gap-1" data-testid="newpatients-directions">
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

      <Footer />
    </div>
  );
}
