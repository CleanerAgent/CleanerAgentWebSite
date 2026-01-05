import { GitPullRequest, FileCheck, MessageSquare, Tag, Shield, Settings } from "lucide-react";

const features = [
  {
    icon: GitPullRequest,
    title: "Análise de Pull Requests",
    description: "Identifica inconsistências estruturais, problemas de organização e padrões que impactam manutenibilidade."
  },
  {
    icon: FileCheck,
    title: "Higiene do Repositório",
    description: "Valida arquivos essenciais como README, LICENSE e CI. Identifica configurações ausentes ou obsoletas."
  },
  {
    icon: MessageSquare,
    title: "Comentários Técnicos",
    description: "Interage automaticamente com issues e pull requests, comentando com sugestões técnicas relevantes."
  },
  {
    icon: Tag,
    title: "Aplicação de Rótulos",
    description: "Aplica labels automaticamente para categorizar e organizar issues e PRs de forma consistente."
  },
  {
    icon: Shield,
    title: "Segurança por Design",
    description: "Opera com permissões explícitas e controladas, seguindo o modelo de segurança do GitHub Apps."
  },
  {
    icon: Settings,
    title: "Sinalização Inteligente",
    description: "Pode fechar ou sinalizar itens quando apropriado, mantendo o repositório organizado."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que o Cleaner Agent faz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Automação assistiva que ajuda desenvolvedores sem substituir decisões humanas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
