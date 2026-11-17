import { LANGUAGES, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  compact?: boolean;
  className?: string;
  testId?: string;
};

export function LanguageSwitcher({
  compact = false,
  className,
  testId = "language-switcher",
}: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useT();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-white/70 p-1 shadow-sm",
        compact && "w-fit",
        className,
      )}
      data-testid={testId}
      role="group"
      aria-label={t("Wybierz język")}
    >
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          className={cn(
            "inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            language === item.code
              ? "bg-secondary text-foreground shadow-sm"
              : "text-foreground/65 hover:bg-secondary/10 hover:text-foreground",
          )}
          aria-pressed={language === item.code}
          aria-label={t(item.name)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
