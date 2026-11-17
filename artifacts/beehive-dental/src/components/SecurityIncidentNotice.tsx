import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ShieldCheck } from "lucide-react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { type Language, useT } from "@/lib/i18n";

const NOTICE_STORAGE_KEY = "korona-security-notice-acknowledged-version";
const NOTICE_VERSION = "mydr-2026-08-12-v1";

type NoticeAction = {
  beforeLink: string;
  linkLabel?: string;
  afterLink?: string;
};

type SecurityIncidentNoticeCopy = {
  title: string;
  greeting: string;
  introduction: readonly [string, string, string, string];
  contactHeading: string;
  contactIntroduction: string;
  officialNumbersIntroduction: string;
  saveNumbers: string;
  contactWarning: string;
  actionsHeading: string;
  actions: readonly [NoticeAction, NoticeAction, NoticeAction, NoticeAction];
  updates: string;
  closing: string;
  acknowledge: string;
};

const NOTICE_COPY: Record<Language, SecurityIncidentNoticeCopy> = {
  pl: {
    title: "Komunikat o bezpieczeństwie danych",
    greeting: "Szanowni Państwo,",
    introduction: [
      "informujemy, że u dostawcy systemu elektronicznej dokumentacji medycznej, z którego korzystała nasza placówka – spółki MyDr – doszło do naruszenia bezpieczeństwa polegającego na uzyskaniu dostępu do danych przez osobę nieuprawnioną. Incydent potwierdziło Ministerstwo Cyfryzacji w dniu 12 sierpnia 2026 r.",
      "Incydent dotyczy systemu i infrastruktury podmiotu odpowiedzialnego za obsługę EDM, a nie systemów informatycznych naszej placówki. Zdarzenie nie było spowodowane działaniem naszej placówki.",
      "Traktujemy sprawę bardzo poważnie. Na obecnym etapie nie ma podstaw, aby stwierdzić, że dane wszystkich Pacjentów zostały objęte naruszeniem. Zakres i charakter zdarzenia są obecnie wyjaśniane we współpracy z dostawcą systemu i właściwymi organami.",
      "Podjęliśmy działania, do których jesteśmy zobowiązani jako administrator Państwa danych: wystąpiliśmy do dostawcy o ustalenie zakresu naruszenia, zgłosiliśmy sprawę Prezesowi Urzędu Ochrony Danych Osobowych i zabezpieczyliśmy dostęp do naszego konta.",
    ],
    contactHeading: "Ważne informacje dotyczące kontaktu z naszej strony",
    contactIntroduction:
      "Pracownicy naszej placówki mogą kontaktować się z Państwem telefonicznie lub za pośrednictwem SMS, przede wszystkim w celu ustalenia lub potwierdzenia terminu wizyty.",
    officialNumbersIntroduction:
      "Kontaktujemy się wyłącznie z oficjalnych numerów placówki:",
    saveNumbers:
      "Zachęcamy do zapisania obu numerów w książce telefonicznej. Pomoże to rozpoznać, że kontakt rzeczywiście pochodzi z naszej placówki.",
    contactWarning:
      "Pracownicy placówki nigdy nie proszą podczas takich kontaktów o podanie haseł, kodów SMS, danych do logowania ani innych wrażliwych danych. Jeżeli osoba kontaktująca się z Państwem żąda takich informacji lub wzbudza Państwa wątpliwości, prosimy nie przekazywać żadnych danych.",
    actionsHeading: "Co radzimy zrobić",
    actions: [
      {
        beforeLink:
          "Zastrzec numer PESEL – w aplikacji mObywatel, w banku, na poczcie albo w urzędzie gminy. Zajmuje to kilka minut.",
      },
      {
        beforeLink:
          "Zachować ostrożność wobec telefonów i wiadomości dotyczących zdrowia, recept, badań i płatności.",
      },
      {
        beforeLink:
          "Nie podawać nikomu numeru PESEL, hasła, kodu SMS ani danych karty płatniczej.",
      },
      {
        beforeLink: "Sprawdzać w serwisie ",
        linkLabel: "bezpiecznedane.gov.pl",
        afterLink: ", czy Państwa dane znalazły się w wycieku.",
      },
    ],
    updates:
      "O istotnych ustaleniach i dalszych działaniach będziemy Państwa informować na bieżąco.",
    closing: "Dziękujemy za zaufanie i prosimy o zachowanie spokoju.",
    acknowledge: "OK, rozumiem",
  },
  en: {
    title: "Important information about data security",
    greeting: "Dear Sir or Madam,",
    introduction: [
      "We wish to inform you that a security breach occurred at MyDr, the provider of the electronic medical records system used by our clinic. The breach involved an unauthorised person gaining access to data. The incident was confirmed by the Polish Ministry of Digital Affairs (Ministerstwo Cyfryzacji) on 12 August 2026.",
      "The incident concerns the system and infrastructure of the entity responsible for handling electronic medical records (EDM), not our clinic’s IT systems. The incident was not caused by any action on the part of our clinic.",
      "We are treating this matter very seriously. At this stage, there are no grounds to conclude that the data of all patients were affected by the breach. The scope and nature of the incident are currently being clarified in cooperation with the system provider and the competent authorities.",
      "We have taken the steps required of us as the controller of your personal data: we have asked the provider to determine the scope of the breach, reported the matter to the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych, UODO), and secured access to our account.",
    ],
    contactHeading: "Important information about contact from our clinic",
    contactIntroduction:
      "Staff at our clinic may contact you by telephone or SMS, primarily to arrange or confirm an appointment.",
    officialNumbersIntroduction:
      "We contact you exclusively from the clinic’s official telephone numbers:",
    saveNumbers:
      "We encourage you to save both numbers in your contacts. This will help you recognise that the contact is genuinely from our clinic.",
    contactWarning:
      "Our staff will never ask you during such contact to provide passwords, SMS codes, login credentials or any other sensitive information. If the person contacting you asks for such information or gives you cause for concern, please do not disclose any information.",
    actionsHeading: "What we advise you to do",
    actions: [
      {
        beforeLink:
          "Restrict your PESEL number — using the mObywatel app, through your bank, at a post office or at your municipal office. It only takes a few minutes.",
      },
      {
        beforeLink:
          "Exercise caution with calls and messages concerning health matters, prescriptions, medical tests and payments.",
      },
      {
        beforeLink:
          "Do not disclose your PESEL number, password, SMS code or payment card details to anyone.",
      },
      {
        beforeLink: "Check ",
        linkLabel: "bezpiecznedane.gov.pl",
        afterLink: " to see whether your data have been included in the leak.",
      },
    ],
    updates:
      "We will keep you informed of any significant findings and further steps.",
    closing: "Thank you for your trust and please remain calm.",
    acknowledge: "OK, I understand",
  },
  de: {
    title: "Wichtige Informationen zur Datensicherheit",
    greeting: "Sehr geehrte Damen und Herren,",
    introduction: [
      "Wir informieren Sie darüber, dass es bei MyDr, dem Anbieter des von unserer Einrichtung genutzten Systems für elektronische medizinische Dokumentation, zu einer Sicherheitsverletzung gekommen ist, bei der eine unbefugte Person Zugriff auf Daten erlangt hat. Der Vorfall wurde am 12. August 2026 vom polnischen Ministerium für Digitalisierung (Ministerstwo Cyfryzacji) bestätigt.",
      "Der Vorfall betrifft das System und die Infrastruktur der für die Handhabung der elektronischen medizinischen Dokumentation (EDM) verantwortlichen Stelle, nicht jedoch die IT-Systeme unserer Einrichtung. Der Vorfall wurde nicht durch Handlungen unserer Einrichtung verursacht.",
      "Wir nehmen die Angelegenheit sehr ernst. Zum gegenwärtigen Zeitpunkt besteht keine Grundlage für die Annahme, dass die Daten aller Patientinnen und Patienten von der Verletzung betroffen sind. Umfang und Art des Vorfalls werden derzeit gemeinsam mit dem Systemanbieter und den zuständigen Behörden geklärt.",
      "Wir haben die Maßnahmen ergriffen, zu denen wir als Verantwortlicher für die Verarbeitung Ihrer personenbezogenen Daten verpflichtet sind: Wir haben den Anbieter aufgefordert, den Umfang der Verletzung festzustellen, die Angelegenheit dem Präsidenten des polnischen Amtes für den Schutz personenbezogener Daten (Prezes Urzędu Ochrony Danych Osobowych, UODO) gemeldet und den Zugang zu unserem Konto abgesichert.",
    ],
    contactHeading:
      "Wichtige Informationen zu Kontaktaufnahmen durch unsere Einrichtung",
    contactIntroduction:
      "Die Mitarbeitenden unserer Einrichtung können Sie telefonisch oder per SMS kontaktieren, vor allem um einen Termin zu vereinbaren oder zu bestätigen.",
    officialNumbersIntroduction:
      "Wir kontaktieren Sie ausschließlich von den offiziellen Telefonnummern unserer Einrichtung aus:",
    saveNumbers:
      "Wir empfehlen Ihnen, beide Nummern in Ihren Kontakten zu speichern. So können Sie erkennen, dass die Kontaktaufnahme tatsächlich von unserer Einrichtung stammt.",
    contactWarning:
      "Die Mitarbeitenden unserer Einrichtung werden Sie bei solchen Kontaktaufnahmen niemals um Passwörter, SMS-Codes, Anmeldedaten oder andere sensible Daten bitten. Falls die Person, die Sie kontaktiert, solche Informationen verlangt oder bei Ihnen Zweifel hervorruft, geben Sie bitte keinerlei Daten weiter.",
    actionsHeading: "Was wir Ihnen empfehlen",
    actions: [
      {
        beforeLink:
          "Lassen Sie Ihre PESEL-Nummer sperren — über die App mObywatel, bei Ihrer Bank, bei einer Postfiliale oder bei Ihrer Gemeindeverwaltung. Dies dauert nur wenige Minuten.",
      },
      {
        beforeLink:
          "Seien Sie bei Anrufen und Nachrichten im Zusammenhang mit Gesundheit, Rezepten, Untersuchungen und Zahlungen vorsichtig.",
      },
      {
        beforeLink:
          "Geben Sie niemandem Ihre PESEL-Nummer, Ihr Passwort, einen SMS-Code oder Ihre Zahlungskartendaten weiter.",
      },
      {
        beforeLink: "Prüfen Sie auf ",
        linkLabel: "bezpiecznedane.gov.pl",
        afterLink: ", ob Ihre Daten von dem Datenleck betroffen sind.",
      },
    ],
    updates:
      "Wir werden Sie über wesentliche Erkenntnisse und weitere Maßnahmen fortlaufend informieren.",
    closing:
      "Wir danken Ihnen für Ihr Vertrauen und bitten Sie, Ruhe zu bewahren.",
    acknowledge: "OK, verstanden",
  },
};

type SecurityIncidentNoticeContextValue = {
  openNotice: () => void;
};

const SecurityIncidentNoticeContext =
  createContext<SecurityIncidentNoticeContextValue | null>(null);

function shouldOpenNoticeInitially() {
  if (typeof window === "undefined") return true;

  try {
    return window.sessionStorage.getItem(NOTICE_STORAGE_KEY) !== NOTICE_VERSION;
  } catch {
    return true;
  }
}

export function SecurityIncidentNoticeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { language } = useT();
  const copy = NOTICE_COPY[language];
  const [open, setOpen] = useState(shouldOpenNoticeInitially);
  const contentScrollRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openNotice = useCallback(() => {
    if (
      typeof document !== "undefined" &&
      document.activeElement instanceof HTMLElement
    ) {
      returnFocusRef.current = document.activeElement;
    }

    setOpen(true);
  }, []);

  const acknowledgeNotice = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.setItem(NOTICE_STORAGE_KEY, NOTICE_VERSION);
      } catch {
        // The acknowledgement still closes the notice for this mounted app instance.
      }
    }

    setOpen(false);
  }, []);

  useEffect(() => {
    if (open) contentScrollRef.current?.scrollTo({ top: 0 });
  }, [language, open]);

  const contextValue = useMemo(() => ({ openNotice }), [openNotice]);

  return (
    <SecurityIncidentNoticeContext.Provider value={contextValue}>
      {children}

      <Dialog
        open={open}
        onOpenChange={(nextOpen) => {
          // Dismissal is intentionally possible only through the acknowledgement button.
          if (nextOpen) setOpen(true);
        }}
      >
        <DialogContent
          aria-describedby={undefined}
          showCloseButton={false}
          overlayClassName="z-[100] bg-foreground/55 backdrop-blur-sm motion-reduce:animate-none motion-reduce:transition-none"
          className="z-[110] grid h-[calc(100svh-1rem)] max-h-[calc(100svh-1rem)] w-[calc(100vw-1rem)] max-w-[52rem] grid-rows-[auto_minmax(0,1fr)_auto] gap-0 overflow-hidden rounded-[1.75rem] border-border/80 bg-background p-0 shadow-2xl motion-reduce:animate-none motion-reduce:transition-none sm:h-auto sm:max-h-[88dvh] sm:w-[calc(100vw-2rem)] sm:rounded-[2rem]"
          data-testid="security-incident-notice"
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
          onInteractOutside={(event) => event.preventDefault()}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            titleRef.current?.focus({ preventScroll: true });
          }}
          onCloseAutoFocus={(event) => {
            const returnFocusTarget = returnFocusRef.current;

            if (returnFocusTarget) {
              event.preventDefault();
              returnFocusTarget.focus({ preventScroll: true });
              returnFocusRef.current = null;
            }
          }}
        >
          <header className="shrink-0 border-b border-border/70 bg-primary/15 px-4 py-4 sm:px-7 sm:py-5">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary sm:size-11"
                  aria-hidden="true"
                >
                  <ShieldCheck className="size-5 sm:size-6" />
                </span>
                <DialogTitle
                  ref={titleRef}
                  tabIndex={-1}
                  className="text-left text-xl font-semibold leading-tight text-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-background sm:text-2xl"
                >
                  {copy.title}
                </DialogTitle>
              </div>

              <LanguageSwitcher
                compact
                testId="security-notice-language-switcher"
              />
            </div>
          </header>

          <div
            ref={contentScrollRef}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 text-[0.9375rem] leading-relaxed text-foreground/80 sm:px-8 sm:py-7 sm:text-base"
          >
            <div className="space-y-4">
              <p className="font-semibold text-foreground">{copy.greeting}</p>
              {copy.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <section className="mt-7" aria-labelledby="notice-contact-heading">
              <h2
                id="notice-contact-heading"
                className="text-lg font-semibold leading-snug text-foreground sm:text-xl"
              >
                {copy.contactHeading}
              </h2>
              <div className="mt-3 space-y-4">
                <p>{copy.contactIntroduction}</p>
                <div>
                  <p>{copy.officialNumbersIntroduction}</p>
                  <ul
                    className="mt-3 grid gap-2 sm:grid-cols-2"
                    aria-label={copy.officialNumbersIntroduction}
                  >
                    <li>
                      <a
                        href="tel:+48683875941"
                        className="flex min-h-11 items-center justify-center rounded-2xl border border-secondary/25 bg-secondary/10 px-4 py-2 font-semibold text-foreground underline-offset-4 transition-colors hover:bg-secondary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                      >
                        68 387 59 41
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+48507130845"
                        className="flex min-h-11 items-center justify-center rounded-2xl border border-secondary/25 bg-secondary/10 px-4 py-2 font-semibold text-foreground underline-offset-4 transition-colors hover:bg-secondary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                      >
                        507 130 845
                      </a>
                    </li>
                  </ul>
                </div>
                <p>{copy.saveNumbers}</p>
                <p className="rounded-2xl border border-primary/60 bg-primary/15 px-4 py-3 text-foreground">
                  {copy.contactWarning}
                </p>
              </div>
            </section>

            <section className="mt-7" aria-labelledby="notice-actions-heading">
              <h2
                id="notice-actions-heading"
                className="text-lg font-semibold leading-snug text-foreground sm:text-xl"
              >
                {copy.actionsHeading}
              </h2>
              <ol className="mt-3 space-y-3 pl-6 marker:font-semibold marker:text-foreground/70">
                {copy.actions.map((action) => (
                  <li key={action.beforeLink} className="pl-1">
                    {action.beforeLink}
                    {action.linkLabel && (
                      <a
                        href="https://bezpiecznedane.gov.pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground underline decoration-2 decoration-secondary underline-offset-4 transition-colors hover:decoration-foreground/60 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                      >
                        {action.linkLabel}
                      </a>
                    )}
                    {action.afterLink}
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-7 space-y-4">
              <p>{copy.updates}</p>
              <p className="font-semibold text-foreground">{copy.closing}</p>
            </div>
          </div>

          <footer className="shrink-0 border-t border-border/70 bg-background/95 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:px-8 sm:pb-5 sm:pt-5">
            <button
              type="button"
              onClick={acknowledgeNotice}
              className="flex min-h-12 w-full items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:bg-secondary/80 sm:ml-auto sm:w-auto sm:min-w-52"
              data-testid="security-incident-notice-acknowledge"
            >
              {copy.acknowledge}
            </button>
          </footer>
        </DialogContent>
      </Dialog>
    </SecurityIncidentNoticeContext.Provider>
  );
}

export function useSecurityIncidentNotice() {
  const value = useContext(SecurityIncidentNoticeContext);

  if (!value) {
    throw new Error(
      "useSecurityIncidentNotice must be used within SecurityIncidentNoticeProvider",
    );
  }

  return value;
}
