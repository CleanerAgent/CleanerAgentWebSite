import { Building2, Code2 } from "lucide-react";

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Casos de Uso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ideal para organizações e projetos que buscam manter qualidade e consistência
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Organizações
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>Padronizar práticas em múltiplos repositórios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>Reduzir esforço manual de revisão</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>Manter consistência ao longo do tempo</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Code2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Projetos Open Source
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>Manutenção contínua automatizada</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>Triagem automatizada de issues e PRs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>Feedback técnico inicial em pull requests</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
