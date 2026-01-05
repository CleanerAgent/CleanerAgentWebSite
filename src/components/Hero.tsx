import logo from "@/assets/cleaner-agent-logo.png";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <img src={logo} alt="Cleaner Agent" className="h-24 w-auto mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Cleaner Agent
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          GitHub App automatizado para manutenção, organização e qualidade de repositórios
        </p>
        
        <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
          Atua de forma não intrusiva analisando eventos do GitHub — como pull requests, issues e commits — 
          para fornecer feedback técnico, ações automatizadas e boas práticas operacionais.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2 px-8">
            <Github className="h-5 w-5" />
            Instalar no GitHub
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8">
            Documentação
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8">
          Agnóstico ao domínio — funciona em repositórios novos ou legados, independentemente da stack.
        </p>
      </div>
    </section>
  );
};

export default Hero;
