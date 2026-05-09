import { Link } from "wouter";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import beehiveLogo from "@assets/beehive-logo.png";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="nav-logo">
          <img src={beehiveLogo} alt="Beehive Dental" className="h-10 w-auto group-hover:opacity-90 transition-opacity" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/services" className="text-foreground/80 hover:text-secondary transition-colors" data-testid="nav-services">Services</Link>
          <Link href="/about" className="text-foreground/80 hover:text-secondary transition-colors" data-testid="nav-about">About</Link>
          <Link href="/new-patients" className="text-secondary font-semibold" data-testid="nav-new-patients">New Patients</Link>
          <a href="#resources" className="text-foreground/80 hover:text-secondary transition-colors" data-testid="nav-resources">Resources</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:9057885555" className="text-sm font-medium text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors" data-testid="nav-phone">
            <Phone className="w-4 h-4" />
            (905) 788-5555
          </a>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all" data-testid="nav-book-online">
            <a href="https://app.nexhealth.com/appt/beehive-dental" target="_blank" rel="noreferrer">
              Book Online
            </a>
          </Button>
        </div>
        <button className="md:hidden text-foreground" data-testid="nav-mobile-menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
