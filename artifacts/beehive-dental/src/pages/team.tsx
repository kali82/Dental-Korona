import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, GraduationCap, Heart, Phone, Shield, Star, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Footer, FADE_UP } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/DSC_3503.jpg";
import aniaPhoto from "@assets/Ania.jpg";
import bartekPhoto from "@assets/Bartek.jpg";
import danutaPhoto from "@assets/Danuta.jpg";
import dorotaPhoto from "@assets/Dorota.jpg";
import ewaKPhoto from "@assets/Ewa K..jpg";
import ilonaPhoto from "@assets/Ilona.jpg";
import kamilaPhoto from "@assets/Kamila.jpg";
import magdaDoctorPhoto from "@assets/Magda 2.jpg";
import magdaTeamPhoto from "@assets/Magda.jpg";
import sylwiaPhoto from "@assets/Sylwia.jpg";

type Person = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  bio: string;
  education: string[];
  focus: string[];
  note: string;
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const doctors: Person[] = [
  {
    name: "Tomasz Rewers",
    role: "lek. dent.",
    initials: "TR",
    bio: "W Przychodni Korona zajmuje się przede wszystkim leczeniem endodontycznym pod mikroskopiem, protetyką, chirurgią oraz implantologią.",
    education: ["Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu"],
    focus: ["Endodoncja mikroskopowa", "Protetyka", "Chirurgia", "Implantologia"],
    note: "Prywatnie pasjonuje się grami komputerowymi i animacją. Jest tatą dwóch córek.",
  },
  {
    name: "Ewa Kołodziej",
    role: "lek. dent.",
    initials: "EK",
    photo: ewaKPhoto,
    bio: "Zajmuje się stomatologią zachowawczą, dziecięcą, endodoncją mikroskopową oraz zabiegami chirurgicznymi.",
    education: ["Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu"],
    focus: ["Stomatologia dziecięca", "Endodoncja mikroskopowa", "Chirurgia stomatologiczna"],
    note: "Chętnie rozwija wiedzę na kursach i szkoleniach.",
  },
  {
    name: "Agnieszka Kasperska-Grzechowiak",
    role: "lek. dent.",
    initials: "AK",
    bio: "Prowadzi leczenie zachowawcze dzieci i dorosłych oraz zajmuje się protetyką ruchomą.",
    education: ["Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu"],
    focus: ["Stomatologia zachowawcza", "Stomatologia dziecięca", "Protetyka ruchoma"],
    note: "Czas wolny najchętniej spędza z rodziną, w podróży i przy grillu.",
  },
  {
    name: "Magdalena Szewczyk-Tuczyńska",
    role: "lek. dent.",
    initials: "MS",
    photo: magdaDoctorPhoto,
    bio: "Zajmuje się leczeniem zachowawczym dzieci i dorosłych, dbając o spokojny przebieg wizyty.",
    education: ["Pomorski Uniwersytet Medyczny w Szczecinie"],
    focus: ["Stomatologia zachowawcza", "Leczenie dzieci", "Leczenie dorosłych"],
    note: "Fanka dobrej muzyki i mama dwóch synów.",
  },
  {
    name: "Bartosz Królikowski",
    role: "lek. dent.",
    initials: "BK",
    photo: bartekPhoto,
    bio: "W pracy koncentruje się na stomatologii zachowawczej, endodoncji mikroskopowej, chirurgii stomatologicznej i implantologii.",
    education: ["Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu"],
    focus: ["Endodoncja mikroskopowa", "Chirurgia", "Implantologia", "Stomatologia zachowawcza"],
    note: "Regularnie poszerza kwalifikacje na kursach i szkoleniach.",
  },
  {
    name: "Sylwia Ogrodniczak",
    role: "lek. dent.",
    initials: "SO",
    photo: sylwiaPhoto,
    bio: "Prowadzi leczenie zachowawcze dzieci i dorosłych.",
    education: ["Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu"],
    focus: ["Stomatologia zachowawcza", "Leczenie dzieci", "Leczenie dorosłych"],
    note: "Prywatnie lubi gotować i spędzać czas z rodziną.",
  },
];

const team: Person[] = [
  {
    name: "Magdalena Rewers",
    role: "Koordynator medyczny",
    initials: "MR",
    photo: magdaTeamPhoto,
    bio: "Koordynuje pracę administracyjno-biurową przychodni i wspiera sprawny przebieg obsługi pacjentów.",
    education: ["Uniwersytet Zielonogórski"],
    focus: ["Koordynacja pracy", "Administracja", "Obsługa pacjenta"],
    note: "Chętnie angażuje się w pomoc innym i akcje charytatywne.",
  },
  {
    name: "Danuta Uchal",
    role: "dypl. hig. stom.",
    initials: "DU",
    photo: danutaPhoto,
    bio: "Asystuje przy leczeniu zachowawczym i ortodoncji, a także wykonuje zabiegi higienizacji.",
    education: ["Medyczne Studium Zawodowe w Zielonej Górze"],
    focus: ["Higienizacja", "Asysta stomatologiczna", "Ortodoncja"],
    note: "Prywatnie lubi rajdy rowerowe i podróże.",
  },
  {
    name: "Dorota Bartkowiak",
    role: "dypl. hig. stom.",
    initials: "DB",
    photo: dorotaPhoto,
    bio: "Asystuje podczas leczenia zachowawczego, endodoncji i implantologii.",
    education: ["Medyczne Studium Zawodowe w Zielonej Górze"],
    focus: ["Asysta przy endodoncji", "Implantologia", "Stomatologia zachowawcza"],
    note: "W zespole ceniona za pozytywną energię.",
  },
  {
    name: "Ilona Radecka",
    role: "Higienistka / technik sterylizacji",
    initials: "IR",
    photo: ilonaPhoto,
    bio: "Pracuje przy zabiegach z zakresu stomatologii zachowawczej, chirurgii i implantologii oraz wykonuje higienizację.",
    education: ["Medyczna Szkoła Policealna w Głogowie", "Technik sterylizacji medycznej"],
    focus: ["Higienizacja", "Sterylizacja", "Chirurgia", "Implantologia"],
    note: "Wolny czas spędza aktywnie.",
  },
  {
    name: "Kamila Bieńkowska-Kaśków",
    role: "mgr, higiena stomatologiczna",
    initials: "KB",
    photo: kamilaPhoto,
    bio: "Asystuje lekarzom oraz samodzielnie wykonuje zabiegi profilaktyki stomatologicznej.",
    education: ["Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu"],
    focus: ["Profilaktyka", "Ortodoncja", "Endodoncja", "Implantologia"],
    note: "Dobrze zorganizowana i zaangażowana w codzienną pracę gabinetu.",
  },
  {
    name: "Marta Sznajder",
    role: "Pomoc stomatologiczna",
    initials: "MS",
    bio: "Wspiera pracę gabinetu przede wszystkim przy zabiegach stomatologii zachowawczej.",
    education: ["Asystentka / higienistka stomatologiczna - w trakcie nauki"],
    focus: ["Asysta stomatologiczna", "Stomatologia zachowawcza", "Organizacja gabinetu"],
    note: "Poza pracą rozwija własne pasje i zainteresowania.",
  },
  {
    name: "Anna Stoparczyk",
    role: "tech. dent.",
    initials: "AS",
    photo: aniaPhoto,
    bio: "Technik dentystyczny stale rozwijający kwalifikacje w zakresie protetyki stomatologicznej.",
    education: ["Policealna Szkoła Techniki Dentystycznej w Zielonej Górze"],
    focus: ["Protetyka", "Technika dentystyczna", "Prace laboratoryjne"],
    note: "W zespole ceniona za precyzję i zaangażowanie.",
  },
  {
    name: "Joanna Bodzianny",
    role: "tech. dent.",
    initials: "JB",
    bio: "Technik dentystyczny podnoszący kwalifikacje w zakresie protetyki stomatologicznej.",
    education: ["Szkoła Techniki Dentystycznej im. Marii Curie-Skłodowskiej we Wrocławiu"],
    focus: ["Protetyka", "Technika dentystyczna", "Prace laboratoryjne"],
    note: "Prywatnie interesuje się rękodziełem.",
  },
];

function PersonPortrait({ person, large = false }: { person: Person; large?: boolean }) {
  const frameClass = large
    ? "h-full min-h-[280px] sm:min-h-[330px] rounded-3xl"
    : "w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md";

  if (person.photo) {
    return (
      <div className={`relative overflow-hidden bg-muted ${frameClass}`}>
        <img src={person.photo} alt={person.name} className="h-full w-full object-cover object-top" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-[#f4e5d4] ${frameClass}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.28),transparent_38%)]" />
      <span
        className={`${
          large ? "text-6xl left-5 top-3" : "text-2xl inset-0 flex items-center justify-center"
        } absolute font-serif font-bold text-[#C9A84C]`}
      >
        {person.initials}
      </span>
    </div>
  );
}

function PersonCard({ person, onClick }: { person: Person; onClick: () => void }) {
  return (
    <motion.button
      variants={FADE_UP}
      onClick={onClick}
      className="group bg-background border border-border p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      data-testid={`team-card-${person.initials.toLowerCase()}`}
    >
      <div className="flex justify-center mb-5 sm:mb-6">
        <PersonPortrait person={person} />
      </div>
      <h3 className="text-lg font-semibold mb-1 text-foreground">{person.name}</h3>
      <p className="text-secondary font-medium text-sm">{person.role}</p>
      <p className="text-xs text-foreground/40 mt-2 group-hover:text-secondary/70 transition-colors">Zobacz profil →</p>
    </motion.button>
  );
}

function ProfileDetails({ person }: { person: Person }) {
  const isDoctor = doctors.some((doctor) => doctor.name === person.name);

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-14 items-start">
      <div className="relative max-w-xs sm:max-w-sm w-full mx-auto pb-16">
        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-secondary/10 relative z-10">
          <PersonPortrait person={person} large />
        </div>
        <div className="absolute bottom-0 -right-2 -left-2 sm:-right-5 sm:-left-5 bg-card border border-border p-5 sm:p-6 rounded-2xl shadow-lg z-20 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">{person.name}</h2>
          <p className="text-foreground/70 mb-3">{person.role}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
            <Star className="w-4 h-4 fill-secondary" />
            Przychodnia Korona
          </div>
        </div>
      </div>

      <div className="pt-2 lg:pt-4">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Zakres pracy</h2>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed mb-8 sm:mb-10">{person.bio}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-secondary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Wykształcenie</h3>
            </div>
            <ul className="space-y-3">
              {person.education.map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-secondary">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Specjalizacje</h3>
            </div>
            <ul className="space-y-3">
              {person.focus.map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">{isDoctor ? "O lekarzu" : "O członku zespołu"}</h3>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-6">{person.note}</p>
          <Button asChild variant="outline" className="bg-white/50 border-secondary/30 text-foreground hover:bg-white transition-colors">
            <Link href={PRACTICE.bookingUrl}>
              Umów wizytę <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <div className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navigation />

      <main className="flex-grow">
        <PageHero
          eyebrow="Zespół"
          title="Lekarze i zespół Przychodni Korona"
          description="Poznaj osoby tworzące przychodnię. Kliknij kafelek, aby zobaczyć szczegółowy profil."
          image={heroPhoto}
          alt="Zespół Przychodni Korona"
          mobileObjectPosition="62% center"
          desktopObjectPosition="center center"
          actions={[
            {
              label: "Kontakt i rejestracja",
              href: PRACTICE.bookingUrl,
              trailingIcon: <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
              testId: "team-hero-contact",
            },
            {
              label: PRACTICE.phoneDisplay,
              href: PRACTICE.phoneHref,
              variant: "secondary",
              icon: <Phone className="w-4 h-4 mr-2 text-secondary" />,
              testId: "team-hero-call",
            },
          ]}
        />

        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-8">
              <h2 className="text-3xl font-semibold text-foreground mb-2">Lekarze</h2>
              <p className="text-foreground/60">Kliknij kafelek, aby zobaczyć szczegółowy profil.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {doctors.map((doctor) => (
                <PersonCard key={doctor.name} person={doctor} onClick={() => setSelectedPerson(doctor)} />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card border-y border-border/50">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Nasz Zespół</h2>
              <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
                Zespół administracyjny, higienistki, asystentki i technicy wspierający codzienną pracę gabinetów.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {team.map((person) => (
                <PersonCard key={person.name} person={person} onClick={() => setSelectedPerson(person)} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {selectedPerson && (
          <>
            <motion.div
              key="team-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedPerson(null)}
            />

            <motion.div
              key="team-panel"
              initial={{ opacity: 0, y: 48, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 36, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none p-0 sm:p-6"
            >
              <div
                className="pointer-events-auto relative w-full max-w-6xl max-h-[92svh] overflow-y-auto bg-background rounded-t-[1.75rem] sm:rounded-[1.75rem] shadow-2xl border border-border p-5 pt-7 sm:p-8 lg:p-10"
                role="dialog"
                aria-modal="true"
                aria-label={`Profil: ${selectedPerson.name}`}
              >
                <div className="absolute left-1/2 top-3 h-1 w-12 -translate-x-1/2 rounded-full bg-border sm:hidden" />
                <button
                  type="button"
                  onClick={() => setSelectedPerson(null)}
                  className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/35 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/55 transition-colors"
                  data-testid="team-modal-close"
                  aria-label="Zamknij profil"
                >
                  <X className="w-5 h-5" />
                </button>

                <ProfileDetails person={selectedPerson} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
