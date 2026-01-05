import { Globe, Puzzle, Lock, Users } from "lucide-react";

const principles = [
  {
    icon: Globe,
    title: "Generalista",
    description: "Não é limitado a um único projeto ou organização. Funciona em qualquer repositório."
  },
  {
    icon: Puzzle,
    title: "Extensível",
    description: "Novas regras e agentes podem ser adicionados progressivamente conforme necessário."
  },
  {
    icon: Lock,
    title: "Seguro por Design",
    description: "Acesso mínimo necessário aos repositórios. Permissões explícitas e controladas."
  },
  {
    icon: Users,
    title: "Automação Assistiva",
    description: "Ajuda desenvolvedores, não substitui decisões humanas. Suporte, não controle."
  }
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Filosofia do Projeto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Princípios que guiam o desenvolvimento e operação do Cleaner Agent
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <principle.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
