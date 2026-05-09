import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, Sparkles, MapPin, Clock, GraduationCap, Heart, Shield, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer, FADE_UP } from "@/components/Footer";

import heroPhoto from "@assets/screenshot-1778326824355.png";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const teamMembers = [
  { name: "Margaret", role: "Office Manager", img: "https://beehivedental.com/wp-content/uploads/2025/01/margaret-office-manager.jpg" },
  { name: "Deirdre", role: "Lead Hygienist", img: "https://beehivedental.com/wp-content/uploads/2025/01/deirdre-lead-hyg.jpg" },
  { name: "Sila", role: "Dental Hygienist", img: "https://beehivedental.com/wp-content/uploads/2025/01/sila-dental-hyg.jpg" },
  { name: "Carly", role: "Dental Hygienist", img: "https://beehivedental.com/wp-content/uploads/2026/03/image1-4.jpeg" },
  { name: "Lisa", role: "Patient Experience Officer", img: "https://beehivedental.com/wp-content/uploads/2025/01/lisa-patient-experience-officer.jpg" },
  { name: "Sierra", role: "Administrative", img: "https://beehivedental.com/wp-content/uploads/2025/01/sierra-admin.jpg" },
  { name: "Alisha", role: "Administrative", img: "https://beehivedental.com/wp-content/uploads/2026/03/alisha.png" },
];

export default function About() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      {/* 1. Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroPhoto} 
            alt="About Beehive Dental" 
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
              About Beehive Dental
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
              We designed our beautiful office with you in mind
            </motion.h1>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14 text-base shadow-xl hover:shadow-secondary/20 transition-all group" data-testid="about-hero-book">
                <a href="https://app.nexhealth.com/appt/beehive-dental" target="_blank" rel="noreferrer">
                  Book Online
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-border/50 hover:bg-white/80 rounded-full px-8 h-14 text-base transition-all" data-testid="about-hero-call">
                <a href="tel:9057885555">
                  <Phone className="w-4 h-4 mr-2 text-secondary" />
                  Or Call (905) 788-5555
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission / About Intro */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={STAGGER}
            >
              <motion.h2 variants={FADE_UP} className="text-3xl md:text-4xl font-semibold mb-8 text-foreground leading-tight">
                Creating smiles through our dedication to{" "}
                <span className="text-secondary inline-block mt-2">
                  <span className="inline-block mx-2">Excellence</span>&middot;
                  <span className="inline-block mx-2">Convenience</span>&middot;
                  <span className="inline-block mx-2">Compassion</span>&middot;
                  <span className="inline-block mx-2">Technology</span>&middot;
                  <span className="inline-block mx-2">Relaxation</span>
                </span>
              </motion.h2>
              <motion.div variants={FADE_UP} className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  In today's fast-paced world, dental care often falls to the wayside, with many finding it hard to fit even a routine dental cleaning into their schedules. At Beehive Dental, you don't have to choose between your health and your busy life.
                </p>
                <p>
                  Every aspect of our practice is designed to ensure your dental experience is not just effective but truly enjoyable. We ensure your entire family receives the highest quality care without compromise — all the services you need, all under one roof. We take a holistic approach, where the focus extends beyond treatment to encompass your overall well-being and comfort.
                </p>
                <p>
                  Join us at Beehive Dental, where state-of-the-art care meets warmth and personal attention, making every visit a memorable journey toward optimal dental health.
                </p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-border"
            >
              <img 
                src="https://beehivedental.com/wp-content/uploads/2025/01/beehive-about-dental-23.jpg" 
                alt="Beehive Dental Care" 
                className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Story Behind Our Name */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden border-y border-border/50">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--secondary) 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="max-w-4xl mx-auto bg-card p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-secondary/20 relative overflow-hidden"
          >
            <Hexagon className="absolute -top-12 -right-12 w-64 h-64 text-secondary/10 stroke-1 -rotate-12 pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground relative z-10">The story behind our name</h2>
            <p className="text-lg text-foreground/80 leading-relaxed relative z-10">
              The beehive represents the pinnacle of organization and efficiency on the planet. The hives perform complex tasks seamlessly and promptly, mirroring the operational excellence a dental clinic should embody. Despite their potential to sting, bees are universally cherished, much like dentists, who, despite wielding needles, aim for your utmost care and comfort. Our lead dentist, Dr. Mohamed Aly, embodies the spirit of 'floating like a butterfly and stinging like a bee' — bringing both grace and precision to every procedure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Dr. Mohamed Aly */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-secondary/10 flex items-center justify-center relative z-10">
                <img 
                  src="https://beehivedental.com/wp-content/uploads/2024/05/dr-aly.jpg" 
                  alt="Dr. Mohamed Aly"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 bg-primary/20 flex-col items-center justify-center text-secondary">
                  <span className="text-6xl font-bold font-serif">MA</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -left-6 bg-card border border-border p-6 rounded-2xl shadow-lg z-20 text-center">
                <h3 className="text-2xl font-bold text-foreground">Dr. Mohamed Aly</h3>
                <p className="text-foreground/70 mb-3">General Dentist</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4 fill-secondary" />
                  20 Years of Experience
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="pt-8 lg:pt-0"
            >
              <motion.div variants={FADE_UP} className="mb-12">
                <h4 className="text-2xl font-semibold mb-4 text-foreground">Why Dentistry?</h4>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  "For me, the answer lies in my 20-year journey of passion towards transforming dental care. I've always been driven by the desire to shift the narrative around dentistry from one of fear and anxiety to one of relaxation and comfort. This vision led me to establish Beehive Dental, a clinic where every procedure, be it a simple cleaning or a complex wisdom tooth surgery, is approached to make your experience calming and enjoyable. I also love to see people smiling — it's infectious."
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div variants={FADE_UP}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-secondary">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-semibold">Education</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Doctor of Dental Surgery, Alexandria University
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Canadian Board Certified Dentist
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={FADE_UP}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-secondary">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-semibold">Outside of the office</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Leisurely walks in Bronte Waterfront Park
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Enjoying dinners at Paradiso
                    </li>
                    <li className="flex items-start gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Boxing
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div variants={FADE_UP} className="bg-primary/10 border border-primary/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                  <h4 className="text-xl font-semibold">During the Pandemic</h4>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "During the COVID-19 pandemic, we stood out by providing emergency services, demonstrating our unwavering commitment to our patients. Dr. Aly's expertise was recognized in an interview with the healthcare department of SunLife discussing strategies for handling dental emergencies."
                </p>
                <Button asChild variant="outline" className="bg-white/50 border-secondary/30 text-foreground hover:bg-white transition-colors" data-testid="dr-aly-interview">
                  <a href="https://luminohealth.sunlife.ca/s/article/How-to-handle-a-dental-emergency" target="_blank" rel="noreferrer">
                    Read the interview <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Our Team */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Our Team</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Meet the dedicated professionals who ensure every visit to Beehive Dental is exceptional.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, i) => (
              <motion.div key={i} variants={FADE_UP} className="group bg-background border border-border p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md bg-secondary/10">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                <p className="text-secondary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Reviews */}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                text: "I visited Beehive Dental for a new patient intake. My cleaning experience was one of the most gentlest cleanings I have ever had. Overall 10/10 experience! Would definitely recommend anyone to come here for their dental appointments.",
                author: "Amara K."
              },
              {
                text: "Absolutely fantastic first time/new patient experience with Dr. Aly and his team. Practice is state of the art, and clearly committed to delivering excellent patient care. Highly recommend to anyone looking for a new dentist.",
                author: "Howard T."
              },
              {
                text: "I had a wonderful experience at Beehive Dental. I'd especially like to highlight the professional team, the attentive and friendly reception staff, and the beautiful office.",
                author: "Olha H."
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

      {/* 7. Luxury Amenities */}
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
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-14" data-testid="about-luxury-cta">
                  <Link href="/new-patients">
                    Your First Visit <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Location */}
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
                    271 Cornwall Rd Unit 1<br />
                    Oakville, ON L6J 7Z5
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80 font-medium group" data-testid="about-location-directions">
                    <a href="https://maps.google.com/?q=Beehive+Dental+Oakville" target="_blank" rel="noreferrer">
                      Get Directions <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
            >
              <div className="flex items-start gap-4 mb-8">
                <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-4">Hours</h3>
                  <div className="space-y-2 text-foreground/70 w-full max-w-[250px]">
                    <div className="flex justify-between"><span>Monday:</span> <span>9:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Tuesday:</span> <span>10:00 AM - 7:00 PM</span></div>
                    <div className="flex justify-between"><span>Wednesday:</span> <span>Closed</span></div>
                    <div className="flex justify-between"><span>Thursday:</span> <span>10:00 AM - 7:00 PM</span></div>
                    <div className="flex justify-between"><span>Friday:</span> <span>9:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 3:00 PM</span></div>
                    <div className="flex justify-between"><span>Sunday:</span> <span>Closed</span></div>
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
