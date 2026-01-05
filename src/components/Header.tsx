import logo from "@/assets/cleaner-agent-logo.png";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Cleaner Agent" className="h-8 w-auto" />
          <span className="font-semibold text-lg text-foreground">Cleaner Agent</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Funcionalidades
          </a>
          <a href="#philosophy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Filosofia
          </a>
          <a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Casos de Uso
          </a>
          <a href="#integration" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Integração
          </a>
        </nav>
        <Button className="gap-2">
          <Github className="h-4 w-4" />
          Instalar
        </Button>
      </div>
    </header>
  );
};

export default Header;
