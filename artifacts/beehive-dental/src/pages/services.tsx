import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, CheckCircle, MapPin, ChevronRight, Clock, Star, Headphones, Sparkles, Smile, Wind, Stethoscope, AlertCircle, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";

import heroPhoto from "@assets/screenshot-1778326512876.png";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Services() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      {/* 1. Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroPhoto} 
            alt="Oakville Dental Services" 
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
              Oakville Dental Services
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
              Full-Service Dental Clinic for Family & Emergency Care
            </motion.h1>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 text-base shadow-xl hover:shadow-secondary/20 transition-all group" data-testid="services-hero-book">
                <a href="https://app.nexhealth.com/appt/beehive-dental" target="_blank" rel="noreferrer">
                  Book Online
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-border/50 hover:bg-white/80 rounded-full px-8 h-14 text-base transition-all" data-testid="services-hero-call">
                <a href="tel:9057885555">
                  <Phone className="w-4 h-4 mr-2 text-secondary" />
                  Or Call (905) 788-5555
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. All-in-One Intro */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
            >
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                All-in-One Dental Solutions for Families in Oakville
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-lg text-foreground/70 mb-10 leading-relaxed">
                Make every visit to the dentist a positive one, no matter what treatment you require. Our Oakville dental services address various concerns, from preventive needs to missing teeth — all while catering to your relaxation and enjoyment.
              </motion.p>
              <motion.div variants={FADE_UP}>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 shadow-md" data-testid="services-intro-book">
                  <a href="https://app.nexhealth.com/appt/beehive-dental" target="_blank" rel="noreferrer">
                    Book online today
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Emergency Banner */}
      <section className="py-16 bg-secondary/10 border-y border-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-secondary/20 rounded-3xl p-8 md:p-12 border border-secondary/30">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="max-w-2xl"
            >
              <motion.h3 variants={FADE_UP} className="text-2xl md:text-3xl font-semibold mb-4 text-foreground flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-secondary" />
                Need an Emergency Dentist in Oakville?
              </motion.h3>
              <motion.p variants={FADE_UP} className="text-lg text-foreground/80">
                If you have a dental emergency, we've got your back! We're ready to provide compassionate care and immediate relief.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
            >
              <Button asChild size="lg" className="w-full md:w-auto bg-white hover:bg-background text-secondary border-2 border-secondary rounded-full px-8 h-14 text-lg font-semibold shadow-sm transition-all" data-testid="services-emergency-call">
                <a href="tel:9057885555">
                  <Phone className="w-5 h-5 mr-2" />
                  (905) 788-5555
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Dental Problems We Treat */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              Dental Problems We Treat at Beehive Dental
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-lg text-foreground/60">
              Visit us for anything that worries you about your mouth
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {[
              "Toothaches", "Stained Teeth", 
              "Wisdom Tooth Pain", "Jaw Pain", 
              "Broken/Cracked/Chipped Teeth", "Misaligned Smile", 
              "Knocked-out or Missing Teeth", "Bleeding Gums", 
              "Cavities and Decay", "Bad Breath", 
              "Grinding Teeth"
            ].map((problem, i) => (
              <motion.div key={i} variants={FADE_UP} className="bg-background border border-border p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="font-medium text-foreground/80">{problem}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Service Categories */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">All-in-One Dental Solutions</h2>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Card 1 — General Dentistry */}
            <motion.div variants={FADE_UP} className="bg-card border border-border rounded-3xl shadow-sm flex flex-col h-full overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-services-2.jpg"
                  alt="General Dentistry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/90 flex items-center justify-center text-secondary shadow">
                  <Stethoscope className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-5">General Dentistry Services</h3>
                <ul className="space-y-2.5 flex-grow">
                  {[
                    "Cleanings & Exams", "Emergency Dentistry", "Family Dentistry",
                    "White Cavity Fillings", "Dental Crowns and Bridges",
                    "Partial and Complete Dentures", "Gum Disease Treatment",
                    "TMJ Therapy", "Night Guards and Mouth Guards", "Teeth Whitening"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-foreground/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 2 — Surgical */}
            <motion.div variants={FADE_UP} className="bg-card border border-border rounded-3xl shadow-sm flex flex-col h-full overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-187272314.jpg"
                  alt="Surgical Dental Care"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/90 flex items-center justify-center text-secondary shadow">
                  <Activity className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-5">Surgical Dental Care</h3>
                <ul className="space-y-2.5 flex-grow">
                  {[
                    "Root Canal Treatment", "Wisdom Tooth Extractions",
                    "Extractions", "Dental Implants",
                    "Bone Grafts", "Sedation Dentistry"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-foreground/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 3 — Orthodontic */}
            <motion.div variants={FADE_UP} className="bg-card border border-border rounded-3xl shadow-sm flex flex-col h-full overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-services-3.jpg"
                  alt="Orthodontic Treatments"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/90 flex items-center justify-center text-secondary shadow">
                  <Smile className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-5">Orthodontic Treatments</h3>
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {["Invisalign", "Clear Braces", "Braces"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-foreground/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-border/50">
                  <a
                    href="https://app.nexhealth.com/appt/beehive-dental"
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary font-semibold text-sm hover:underline inline-flex items-center gap-1"
                    data-testid="services-ortho-consult"
                  >
                    Book a Complimentary Consult <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 6. Comfort-Focused Technology */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Comfort-Focused Dentistry: Surprisingly Enjoyable Experience</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Fully Digital Imaging",
                desc: "Embrace the clarity and efficiency of our advanced imaging techniques, minimizing your time in the chair while maximizing results.",
                icon: Zap
              },
              {
                title: "High-Definition Dental Insights",
                desc: "No more goopy, gaggy impression. Intra-oral cameras and Itero Scanner technology allow for comfortable, precise diagnostics and treatments tailored just for you.",
                icon: Sparkles
              },
              {
                title: "Sterilization in the Digital Age",
                desc: "Our digital sterilization system guarantees your safety and peace of mind, adhering to the highest standards of hygiene.",
                icon: Shield
              },
              {
                title: "Precision Mapping with CBCT",
                desc: "Experience a new dimension of dental diagnostics with our Cone Beam Computed Tomography (CBCT) scans, ensuring precise treatment planning.",
                icon: Activity
              }
            ].map((tech, i) => (
              <motion.div key={i} variants={FADE_UP} className="bg-background border border-border p-8 rounded-3xl flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 text-secondary mt-1">
                  <tech.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{tech.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Reviews */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">450+ 5 Star Reviews</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="w-6 h-6 text-secondary fill-secondary" />
              ))}
            </div>
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
                text: "Excellent experience at Beehive Dental. Very friendly, accommodating staff and excellent patient care. Clean and beautiful facility as well.",
                author: "Athena Z."
              },
              {
                text: "My experience at Beehive dental has been great. They take so much care and attention to detail. I don't think anyone likes to sit in a dental chair for hours getting a cavity, but they are so quick and efficient!",
                author: "Samantha K."
              },
              {
                text: "I had an amazing experience at Beehive Dental! The staff were incredibly friendly and welcoming, and they made me feel comfortable from the moment I walked in.",
                author: "Diego T."
              }
            ].map((review, i) => (
              <motion.div key={i} variants={FADE_UP} className="bg-card border border-border p-8 rounded-3xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-foreground">— {review.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Luxury Amenities */}
      <section className="py-24 bg-card border-y border-border/50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-border shadow-2xl relative bg-muted">
                <img src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour3.jpg" alt="Beehive Dental Comforts" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="order-1 lg:order-2"
            >
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">A Place of Relaxation & Rejuvenation</motion.h2>
              <motion.p variants={FADE_UP} className="text-xl text-secondary font-medium mb-8">You deserve luxury!</motion.p>
              
              <motion.div variants={FADE_UP} className="space-y-4 mb-10">
                {[
                  "Free whitening for life",
                  "Ample free parking",
                  "Noise-cancellation headphones",
                  "Eye masks/blankets/pillows",
                  "Aromatherapy",
                  "Lavender-scented towels",
                  "Kid-friendly amenities"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-secondary">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-foreground/80 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div variants={FADE_UP}>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14" data-testid="services-luxury-cta">
                  <Link href="/new-patients">
                    Your First Visit <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Pricing & Insurance */}
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
            <Button asChild variant="outline" className="w-full bg-white hover:bg-muted border-border rounded-xl h-12 text-foreground" data-testid="services-insurance-call">
              <a href="tel:9057885555">Call to verify your insurance</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 10. Location */}
      <section className="py-24 bg-card border-y border-border/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Visit Our Beehive</h2>
            <p className="text-foreground/60 text-lg max-w-xl mx-auto">
              Conveniently book online or give us a call. Same-day appointments and ample free parking available.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hexagon photo cluster */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-[340px] h-[360px]">
                {/* Centre hex */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] overflow-hidden shadow-xl"
                  style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
                  <img src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour4.jpg"
                    alt="Beehive Dental Office" className="w-full h-full object-cover" />
                </div>
                {/* Top-left hex */}
                <div className="absolute top-0 left-4 w-[150px] h-[150px] overflow-hidden shadow-lg"
                  style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
                  <img src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour0.jpg"
                    alt="Beehive Dental Lounge" className="w-full h-full object-cover" />
                </div>
                {/* Top-right hex */}
                <div className="absolute top-0 right-4 w-[150px] h-[150px] overflow-hidden shadow-lg"
                  style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
                  <img src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour3.jpg"
                    alt="Beehive Dental Suite" className="w-full h-full object-cover" />
                </div>
                {/* Bottom hex */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px] overflow-hidden shadow-lg"
                  style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
                  <img src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-dental-tour6.jpg"
                    alt="Beehive Dental Treatment" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="space-y-8"
            >
              <motion.div variants={FADE_UP} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    1075 North Service Road West<br />
                    Suite 23, Oakville, Ontario
                  </p>
                  <a href="https://maps.app.goo.gl/vLrG9yct1S2qZwzW8" target="_blank" rel="noreferrer"
                    className="text-secondary font-medium hover:underline inline-flex items-center gap-1 mt-2"
                    data-testid="services-directions">
                    Get Directions <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-secondary">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-border/40 pb-2">
                      <span className="text-foreground/70">Mon, Thu, Sat</span>
                      <span className="font-medium">9:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-2">
                      <span className="text-foreground/70">Tue, Wed, Fri</span>
                      <span className="font-medium">9:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-foreground/70">Sunday</span>
                      <span className="font-medium text-foreground/40">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a href="tel:9057885555" className="text-foreground/70 hover:text-secondary transition-colors" data-testid="services-phone">
                    (905) 788-5555
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
