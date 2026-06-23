import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MobileStickyActions } from "@/components/MobileStickyActions";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { LanguageProvider, translateText, useLanguage } from "@/lib/i18n";
import { PRACTICE } from "@/lib/practice";

import Home from "@/pages/home";
import NewPatients from "@/pages/new-patients";
import About from "@/pages/about";
import Galeria from "@/pages/gallery";
import Contact from "@/pages/contact";
import Team from "@/pages/team";
import Pricing from "@/pages/pricing";
import RadiationInfo from "@/pages/radiation-info";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();
const SITE_URL = "https://przychodniakorona.pl";

const DEFAULT_SEO = {
  title: "Przychodnia Korona Nowa Sól | Gabinet stomatologiczny",
  description:
    "Przychodnia Korona w Nowej Soli: gabinet stomatologiczny, stomatologia zachowawcza, ortodoncja, protetyka, implantologia, chirurgia i diagnostyka RTG.",
  keywords:
    "Przychodnia Korona Nowa Sól, gabinet stomatologiczny Nowa Sól, stomatolog Nowa Sól, dentysta Nowa Sól, ortodoncja Nowa Sól, stomatologia Nowa Sól, protetyka Nowa Sól, implantologia Nowa Sól",
};

const SEO_BY_PATH: Record<string, typeof DEFAULT_SEO> = {
  "/": DEFAULT_SEO,
  "/about": {
    title: "O przychodni | Przychodnia Korona Nowa Sól",
    description:
      "Poznaj Przychodnię Korona w Nowej Soli - gabinet stomatologiczny z kompleksową opieką, diagnostyką i leczeniem pacjentów w każdym wieku.",
    keywords:
      "Przychodnia Korona, gabinet stomatologiczny Nowa Sól, stomatologia rodzinna Nowa Sól, dentysta Nowa Sól",
  },
  "/team": {
    title: "Lekarze i zespół | Przychodnia Korona Nowa Sól",
    description:
      "Lekarze dentyści, higienistki i zespół Przychodni Korona w Nowej Soli. Kompleksowa stomatologia, ortodoncja, protetyka i implantologia.",
    keywords:
      "lekarz dentysta Nowa Sól, stomatolog Nowa Sól, zespół Przychodnia Korona, higienizacja Nowa Sól",
  },
  "/pricing": {
    title: "Cennik w przygotowaniu | Przychodnia Korona Nowa Sól",
    description:
      "Cennik Przychodni Korona w Nowej Soli jest w przygotowaniu. W sprawie wyceny leczenia prosimy o bezpośredni kontakt z rejestracją.",
    keywords:
      "cennik stomatolog Nowa Sól, cennik dentysta Nowa Sól, protetyka cena, implantologia cena, ortodoncja cena",
  },
  "/promieniowanie-informacja": {
    title: "Promieniowanie informacja | Przychodnia Korona Nowa Sól",
    description:
      "Informacja o wpływie działalności RTG w Przychodni Korona na zdrowie ludzi i środowisko.",
    keywords:
      "promieniowanie informacja Przychodnia Korona, RTG Nowa Sól, diagnostyka RTG stomatologiczna",
  },
  "/new-patients": {
    title: "Dla pacjenta | Przychodnia Korona Nowa Sól",
    description:
      "Informacje dla pacjentów Przychodni Korona w Nowej Soli: rejestracja, pierwsza wizyta, kontakt i przygotowanie do leczenia stomatologicznego.",
    keywords:
      "wizyta u stomatologa Nowa Sól, rejestracja dentysta Nowa Sól, Przychodnia Korona kontakt",
  },
  "/gallery": {
    title: "Galeria gabinetu | Przychodnia Korona Nowa Sól",
    description:
      "Zobacz zdjęcia Przychodni Korona w Nowej Soli: gabinety stomatologiczne, recepcja, wyposażenie i zespół.",
    keywords:
      "Przychodnia Korona zdjęcia, gabinet stomatologiczny Nowa Sól galeria, dentysta Nowa Sól galeria",
  },
  "/contact": {
    title: "Kontakt | Przychodnia Korona Nowa Sól",
    description:
      "Kontakt z Przychodnią Korona w Nowej Soli: ul. Krasińskiego 15, telefon komórkowy 507 130 845, telefon stacjonarny 68 38 759 41.",
    keywords:
      "Przychodnia Korona kontakt, dentysta Nowa Sól telefon, stomatolog Nowa Sól kontakt, ul. Krasińskiego 15 Nowa Sól",
  },
};

const BREADCRUMB_LABELS: Record<string, string> = {
  "/": "Start",
  "/about": "O nas",
  "/team": "Zespół",
  "/pricing": "Cennik",
  "/promieniowanie-informacja": "Promieniowanie - informacja",
  "/new-patients": "Dla pacjenta",
  "/gallery": "Galeria",
  "/contact": "Kontakt",
};

function upsertMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = create();
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertJsonLd(id: string, data: unknown) {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function buildDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,
    name: PRACTICE.name,
    alternateName: PRACTICE.fullName,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph.jpg`,
    email: PRACTICE.email,
    telephone: `+48 ${PRACTICE.phoneDisplay}`,
    priceRange: "$$",
    medicalSpecialty: ["Dentistry", "Orthodontics", "Implantology", "Prosthodontics"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Krasińskiego 15",
      postalCode: "67-100",
      addressLocality: PRACTICE.cityDisplay,
      addressRegion: PRACTICE.region,
      addressCountry: "PL",
    },
    openingHours: "Mo-Fr 08:00-19:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    hasMap: PRACTICE.mapsUrl,
    sameAs: [PRACTICE.facebookUrl, PRACTICE.instagramUrl],
    areaServed: [
      {
        "@type": "City",
        name: PRACTICE.cityDisplay,
      },
    ],
  };
}

function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: PRACTICE.name,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#dentist`,
    },
    inLanguage: ["pl-PL", "en", "de"],
  };
}

function buildBreadcrumbSchema(path: string, language: "pl" | "en" | "de") {
  const normalizedPath = path === "/cennik" ? "/pricing" : path;
  const currentLabel = BREADCRUMB_LABELS[normalizedPath] ?? "Start";
  const items = normalizedPath === "/" ? [{ path: "/", label: "Start" }] : [
    { path: "/", label: "Start" },
    { path: normalizedPath, label: currentLabel },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: translateText(item.label, language),
      item: `${SITE_URL}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

function SeoMetadata() {
  const [location] = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const normalizedPath = location === "/cennik" ? "/pricing" : location;
    const seo = SEO_BY_PATH[normalizedPath] ?? DEFAULT_SEO;
    const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
    const title = translateText(seo.title, language);
    const description = translateText(seo.description, language);
    const keywords = translateText(seo.keywords, language);

    document.title = title;

    upsertMeta('meta[name="description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      return meta;
    }, description);

    upsertMeta('meta[name="keywords"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "keywords");
      return meta;
    }, keywords);

    upsertMeta('meta[property="og:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    }, title);

    upsertMeta('meta[property="og:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    }, description);

    upsertMeta('meta[property="og:url"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    }, canonicalUrl);

    upsertMeta('meta[name="twitter:title"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:title");
      return meta;
    }, title);

    upsertMeta('meta[name="twitter:description"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:description");
      return meta;
    }, description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    upsertJsonLd("korona-dentist-jsonld", buildDentistSchema());
    upsertJsonLd("korona-website-jsonld", buildWebsiteSchema());
    upsertJsonLd("korona-breadcrumb-jsonld", buildBreadcrumbSchema(normalizedPath, language));
  }, [language, location]);

  return null;
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/new-patients" component={NewPatients} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/cennik" component={Pricing} />
      <Route path="/promieniowanie-informacja" component={RadiationInfo} />
      <Route path="/gallery" component={Galeria} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <MotionConfig reducedMotion="user">
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <SeoMetadata />
              <ScrollToTop />
              <Router />
              <ScrollToTopButton />
              <MobileStickyActions />
            </WouterRouter>
          </MotionConfig>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
