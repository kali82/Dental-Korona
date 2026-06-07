import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, GraduationCap, Heart, Phone, Star, X } from "lucide-react";
import { Footer, FADE_UP } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PRACTICE } from "@/lib/practice";

import heroPhoto from "@assets/DSC_3503.jpg";
import agnieszkaPhoto from "@assets/Agniszka_Kasperska_Grzechowiak.jpg";
import annaStoparczykPhoto from "@assets/team-compressed/anna-stoparczyk.jpg";
import bartekPhoto from "@assets/Bartek.jpg";
import danutaPhoto from "@assets/Danuta.jpg";
import dorotaPhoto from "@assets/team-compressed/dorota-bartkowiak.jpg";
import ewaKPhoto from "@assets/Ewa K..jpg";
import ewaPolakPhoto from "@assets/team-compressed/ewa-polak.jpg";
import ilonaPhoto from "@assets/Ilona.jpg";
import kamilaPhoto from "@assets/Kamila.jpg";
import karolinaPhoto from "@assets/team-compressed/karolina-toda.jpg";
import magdaDoctorPhoto from "@assets/Magda 2.jpg";
import magdaTeamPhoto from "@assets/Magda.jpg";
import paulinaPhoto from "@assets/team-compressed/paulina-gorna.jpg";
import sylwiaPhoto from "@assets/Sylwia.jpg";
import tomaszPhoto from "@assets/team-compressed/tomasz-rewers.jpg";

type Person = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  bio: string;
  education: string[];
  focus: string[];
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
    photo: tomaszPhoto,
    bio: "W Przychodni Korona zajmuje się głównie implantologią, chirurgią stomatologiczną oraz protetyką stałą. W leczeniu wykorzystuje zaawansowane metody diagnostyczne oraz sprawdzone rozwiązania terapeutyczne, dbając o najwyższą jakość wykonywanych zabiegów oraz komfort na każdym etapie leczenia.",
    education: ["Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu"],
    focus: ["Implantologia", "Chirurgia", "Protetyka"],
  },
  {
    name: "Ewa Kołodziej",
    role: "lek. dent.",
    initials: "EK",
    photo: ewaKPhoto,
    bio: "Specjalizuje się głównie w leczeniu ortodontycznym dzieci i dorosłych, nowoczesnym leczeniu endodontycznym pod mikroskopem oraz stomatologią zachowawczą, zapewniając kompleksową opiekę i indywidualne podejście do każdego pacjenta.",
    education: ["Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu"],
    focus: ["Ortodoncja", "Endodoncja mikroskopowa", "Stomatologia zachowawcza"],
  },
  {
    name: "Agnieszka Kasperska-Grzechowiak",
    role: "lek. dent.",
    initials: "AK",
    photo: agnieszkaPhoto,
    bio: "Specjalizuje się w leczeniu zachowawczym dzieci i dorosłych oraz protetyce ruchomej. Z powodzeniem przeprowadza leczenie dzieci z wykorzystaniem sedacji wziewnej, dbając o komfort, poczucie bezpieczeństwa i spokojną atmosferę podczas każdej wizyty.",
    education: ["Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu"],
    focus: ["Stomatologia zachowawcza", "Leczenie w sedacji", "Protetyka ruchoma"],
  },
  {
    name: "Magdalena Szewczyk-Tuczyńska",
    role: "lek. dent.",
    initials: "MS",
    photo: magdaDoctorPhoto,
    bio: "Prowadzi leczenie zachowawcze oraz endodontyczne, dbając o spokojny i komfortowy przebieg wizyty. W pracy z najmłodszymi pacjentami wykorzystuje sedację, co pozwala na bezpieczne i bezstresowe przeprowadzenie leczenia.",
    education: ["Pomorski Uniwersytet Medyczny w Szczecinie"],
    focus: ["Stomatologia zachowawcza", "Endodoncja", "Leczenie w sedacji"],
  },
  {
    name: "Bartosz Królikowski",
    role: "lek. dent.",
    initials: "BK",
    photo: bartekPhoto,
    bio: "Specjalizuje się w implantologii, mikrochirurgii oraz endodoncji mikroskopowej, prowadząc leczenie z wykorzystaniem nowoczesnych, precyzyjnych technik. Znany z wyjątkowej delikatności oraz dbałości o każdy detal, co przekłada się na komfort pacjentów i wysoką jakość wykonywanych zabiegów.",
    education: ["Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu"],
    focus: ["Implantologia", "Mikrochirurgia stomatologiczna", "Endodoncja mikroskopowa", "Protetyka"],
  },
  {
    name: "Sylwia Ogrodniczak",
    role: "lek. dent.",
    initials: "SO",
    photo: sylwiaPhoto,
    bio: "Specjalizuje się w stomatologii zachowawczej, endodoncji pod mikroskopem oraz protetyce ruchomej. W swojej praktyce skupia się na precyzyjnej diagnostyce i starannym leczeniu, dbając o komfort pacjenta oraz wysoką jakość i trwałość.",
    education: ["Uniwersytet Medyczny im. Piastów Śląskich we Wrocławiu"],
    focus: ["Stomatologia zachowawcza", "Endodoncja mikroskopowa", "Protetyka ruchoma"],
  },
];

const assistants: Person[] = [
  {
    name: "Danuta Uchal",
    role: "dypl. hig. stom.",
    initials: "DU",
    photo: danutaPhoto,
    bio: "Wykonuje profesjonalną higienizację jamy ustnej, pomagając pacjentom utrzymać zdrowie zębów i dziąseł. Edukuje pacjentów z zakresu prawidłowej higieny jamy. Asystuje lekarzowi podczas zabiegów stomatologicznych, dbając o ich sprawny, bezpieczny i komfortowy przebieg zarówno dla pacjenta, jak i zespołu.",
    education: ["Medyczne Studium Zawodowe w Zielonej Górze"],
    focus: ["Profesjonalna higienizacja", "Profilaktyka i promocja zdrowia", "Asysta stomatologiczna"],
  },
  {
    name: "Dorota Bartkowiak",
    role: "dypl. hig. stom.",
    initials: "DB",
    photo: dorotaPhoto,
    bio: "Asystuje lekarzowi podczas zabiegów z zakresu implantologii i protetyki, dbając o sprawny przebieg procedur oraz komfort pacjenta. Wspiera cały proces leczenia również po zabiegu, pomagając pacjentom w prawidłowej rekonwalescencji i dbając o właściwy przebieg gojenia.",
    education: ["Medyczne Studium Zawodowe w Zielonej Górze"],
    focus: ["Profilaktyka i promocja zdrowia", "Asysta stomatologiczna", "Opieka pozabiegowa"],
  },
  {
    name: "Ilona Radecka",
    role: "dypl. hig. stom. / tech. sterylizacji med.",
    initials: "IR",
    photo: ilonaPhoto,
    bio: "Zajmuje się profilaktyką i promocją zdrowia jamy ustnej. Wykonuje zabiegi profesjonalnej higienizacji oraz wybielania zębów, które wspierają zdrowie i estetykę uśmiechu pacjentów. Wspiera pracę gabinetu podczas zabiegów z zakresu chirurgii i implantologii. Odpowiada również za dekontaminację i sterylizację narzędzi, zapewniając najwyższe standardy bezpieczeństwa i higieny pracy.",
    education: [
      "Uniwersytet Zielonogórski",
      "Medyczna Szkoła Policealna w Głogowie",
      "Medyczna Szkoła Policealna w Zielonej Górze",
    ],
    focus: ["Profesjonalna higienizacja", "Wybielanie zębów", "Asysta stomatologiczna", "Dekontaminacja i sterylizacja"],
  },
  {
    name: "Kamila Bieńkowska-Kaśków",
    role: "mgr, higiena stomatologiczna",
    initials: "KB",
    photo: kamilaPhoto,
    bio: "Edukuje pacjentów w zakresie prawidłowej higieny jamy ustnej i codziennej profilaktyki dopasowanej do indywidualnych potrzeb, pomagając w budowaniu zdrowych nawyków i utrzymaniu długotrwałych efektów leczenia. Wykonuje profesjonalną higienizację, dbając o zdrowie i estetykę uśmiechu pacjentów, a także wspiera pracę gabinetu podczas zabiegów stomatologicznych.",
    education: ["Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu"],
    focus: ["Profilaktyka i promocja zdrowia", "Profesjonalna higienizacja", "Asysta stomatologiczna"],
  },
  {
    name: "Marta Sznajder",
    role: "dypl. hig. stom. / tech. sterylizacji med.",
    initials: "MSZ",
    bio: "Asystuje przy zabiegach stomatologii zachowawczej, ortodoncji oraz endodoncji, dbając o sprawny i komfortowy przebieg leczenia. Jest odpowiedzialna za proces dekontaminacji i sterylizacji narzędzi, zapewniając najwyższe standardy bezpieczeństwa i higieny pracy w gabinecie.",
    education: ["Medyczne Studium Zawodowe w Zielonej Górze"],
    focus: ["Asysta stomatologiczna", "Profilaktyka i promocja zdrowia", "Dekontaminacja i sterylizacja"],
  },
  {
    name: "Karolina Toda",
    role: "pomoc stomatologiczna",
    initials: "KT",
    photo: karolinaPhoto,
    bio: "Wspiera pracę gabinetu przy zabiegach z zakresu stomatologii. Aktywnie uczestniczy w codziennych procedurach stomatologicznych. Angażuje się w pracę zespołu, dbając o sprawny przebieg wizyt i komfort pacjentów, a także o ich dobre samopoczucie oraz poczucie bezpieczeństwa na każdym etapie leczenia.",
    education: ["Medyczne Studium Zawodowe w Zielonej Górze - w trakcie nauki"],
    focus: ["Organizacja gabinetu", "Pomoc przy zabiegach", "Dbanie o komfort pacjenta"],
  },
];

const technicians: Person[] = [
  {
    name: "Anna Stoparczyk",
    role: "tech. dent.",
    initials: "AS",
    photo: annaStoparczykPhoto,
    bio: "Specjalizuje się w cyfrowym projektowaniu uzupełnień protetycznych oraz wykonywaniu prac stałych na zębach i implantach, dbając o precyzję, estetykę i każdy najmniejszy detal wykonania. Stale rozwija swoje kwalifikacje w zakresie protetyki stomatologicznej.",
    education: ["Policealna Szkoła Techniki Dentystycznej w Zielonej Górze"],
    focus: ["Protetyka cyfrowa", "Protetyka stała", "Prace laboratoryjne"],
  },
  {
    name: "Joanna Bodzianny",
    role: "tech. dent.",
    initials: "JB",
    bio: "Zajmuje się cyfrowym projektowaniem uzupełnień protetycznych oraz wykonywaniem prac stałych i ruchomych z naciskiem na najwyższą precyzję, estetykę oraz dopracowanie każdego szczegółu. Stale śledzi nowoczesne rozwiązania i technologie w branży.",
    education: ["Szkoła Techniki Dentystycznej im. Marii Curie-Skłodowskiej we Wrocławiu"],
    focus: ["Protetyka cyfrowa", "Protetyka stała", "Protetyka laboratoryjna"],
  },
  {
    name: "Ewa Polak",
    role: "tech. dent. / asyst. stom.",
    initials: "EP",
    photo: ewaPolakPhoto,
    bio: "Specjalizuje się w wykonywaniu prac z zakresu protetyki stałej i ruchomej. W swojej pracy wykorzystuje nowoczesne technologie oraz rozwiązania cyfrowe, dbając o wysoką precyzję, estetykę i dopasowanie wykonywanych uzupełnień protetycznych.",
    education: ["Policealna Szkoła Techniki Dentystycznej w Zielonej Górze", "Medyczne Studium Zawodowe w Zielonej Górze"],
    focus: ["Protetyka cyfrowa", "Protetyka stała", "Protetyka ruchoma"],
  },
];

const administration: Person[] = [
  {
    name: "Magdalena Rewers",
    role: "koordynator medyczny",
    initials: "MR",
    photo: magdaTeamPhoto,
    bio: "Koordynuje pracę administracyjno-biurową przychodni, dbając o sprawną organizację codziennego funkcjonowania placówki. Wspiera zespół w zakresie obsługi pacjentów, nadzoruje przepływ informacji oraz dba o porządek w dokumentacji, dzięki czemu wizyty przebiegają płynnie i bez zakłóceń.",
    education: ["Uniwersytet Zielonogórski"],
    focus: ["Koordynacja pracy", "Administracja", "Obsługa pacjenta"],
  },
  {
    name: "Paulina Górna",
    role: "sekretarka medyczna / asyst. stom.",
    initials: "PG",
    photo: paulinaPhoto,
    bio: "Odpowiada za bieżącą obsługę pacjentów oraz sprawny przebieg pracy rejestracji. Dba o komfort i dobrą organizację wizyt, udziela pacjentom niezbędnych informacji oraz wspiera codzienne funkcjonowanie przychodni, zapewniając profesjonalną i życzliwą obsługę.",
    education: ["Medyczne Studium Zawodowe w Zielonej Górze"],
    focus: ["Rejestracja medyczna", "Opieka nad pacjentem", "Obsługa dokumentacji medycznej"],
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
    <div className={`relative overflow-hidden bg-[#f4e5d4] ${frameClass}`}>
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

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const renderSection = (
    title: string,
    description: string,
    people: Person[],
    options?: { columns?: string; surface?: "background" | "card" },
  ) => (
    <section className={`py-14 md:py-16 ${options?.surface === "card" ? "bg-card border-y border-border/50" : "bg-background"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-8">
          <h2 className="text-3xl font-semibold text-foreground mb-2">{title}</h2>
          <p className="text-foreground/60">{description}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className={`grid grid-cols-1 sm:grid-cols-2 ${options?.columns ?? "lg:grid-cols-4"} gap-4 sm:gap-6`}
        >
          {people.map((person) => (
            <PersonCard key={person.name} person={person} onClick={() => setSelectedPerson(person)} />
          ))}
        </motion.div>
      </div>
    </section>
  );

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

        {renderSection("Lekarze", "Kliknij kafelek, aby zobaczyć szczegółowy profil.", doctors, { columns: "lg:grid-cols-3" })}
        {renderSection(
          "Higienistki i asystentki",
          "Zespół wspierający lekarzy, profilaktykę, higienizację oraz bezpieczeństwo pracy gabinetów.",
          assistants,
          { surface: "card" },
        )}
        {renderSection(
          "Technicy dentystyczni",
          "Specjaliści pracowni protetycznej przygotowujący precyzyjne uzupełnienia dla pacjentów.",
          technicians,
          { columns: "lg:grid-cols-3" },
        )}
        {renderSection(
          "Administracja",
          "Osoby dbające o sprawną organizację wizyt, obsługę pacjentów i codzienną pracę przychodni.",
          administration,
          { columns: "lg:grid-cols-2", surface: "card" },
        )}
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
