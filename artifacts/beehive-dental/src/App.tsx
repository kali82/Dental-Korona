import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MobileStickyActions } from "@/components/MobileStickyActions";
import { LanguageProvider, PageTranslationSync, translateText, useLanguage } from "@/lib/i18n";

import Home from "@/pages/home";
import NewPatients from "@/pages/new-patients";
import Services from "@/pages/services";
import About from "@/pages/about";
import Galeria from "@/pages/gallery";
import Contact from "@/pages/contact";
import Team from "@/pages/team";
import Pricing from "@/pages/pricing";
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
  "/services": {
    title: "Stomatologia, ortodoncja i implantologia | Przychodnia Korona Nowa Sól",
    description:
      "Usługi Przychodni Korona w Nowej Soli: stomatologia zachowawcza, endodoncja, chirurgia, ortodoncja, protetyka, implantologia i diagnostyka.",
    keywords:
      "stomatologia Nowa Sól, ortodoncja Nowa Sól, implantologia Nowa Sól, protetyka Nowa Sól, leczenie kanałowe Nowa Sól, chirurgia stomatologiczna",
  },
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
    title: "Cennik stomatologiczny | Przychodnia Korona Nowa Sól",
    description:
      "Cennik usług stomatologicznych w Przychodni Korona w Nowej Soli: konsultacje, profilaktyka, ortodoncja, protetyka i implantologia.",
    keywords:
      "cennik stomatolog Nowa Sól, cennik dentysta Nowa Sól, protetyka cena, implantologia cena, ortodoncja cena",
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

function upsertMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = create();
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
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
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/cennik" component={Pricing} />
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
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <SeoMetadata />
            <ScrollToTop />
            <Router />
            <MobileStickyActions />
            <PageTranslationSync />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
