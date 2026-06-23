import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useT();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">{t("404 - nie znaleziono strony")}</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">{t("Ta podstrona nie istnieje lub została usunięta.")}</p>

          <Button asChild className="mt-6 rounded-full bg-secondary px-6 text-white hover:bg-secondary/90">
            <Link href="/">{t("Wróć na stronę główną")}</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
