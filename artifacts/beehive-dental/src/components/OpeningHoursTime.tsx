import { useT } from "@/lib/i18n";

type OpeningHoursTimeProps = {
  time: string;
  className?: string;
};

export function OpeningHoursTime({ time, className }: OpeningHoursTimeProps) {
  const { t } = useT();

  if (time === "w wybrane dni (konieczny kontakt tel.)") {
    return (
      <span className={className}>
        <span className="block whitespace-nowrap">{t("w wybrane dni")}</span>
        <span className="block whitespace-nowrap">{t("(konieczny kontakt tel.)")}</span>
      </span>
    );
  }

  return <span className={className}>{t(time)}</span>;
}
