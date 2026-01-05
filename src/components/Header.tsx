import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/logo-white.png" 
            alt="Cleaner Agent" 
            className="h-8 w-auto object-contain" 
          />
          <span className="font-semibold text-lg text-primary-foreground">Cleaner Agent</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Features
          </a>
          <a href="#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            About
          </a>
          <a href="#who-is-it-for" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Who is it for
          </a>
          <a href="#integration" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Integration
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="secondary" className="gap-2">
            <Github className="h-4 w-4" />
            Install
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
