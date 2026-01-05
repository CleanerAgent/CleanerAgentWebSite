import { Globe, Puzzle, Lock, Users } from "lucide-react";

const principles = [
  {
    icon: Globe,
    title: "Generalist",
    description: "Not limited to a single project or organization. Works on any repository."
  },
  {
    icon: Puzzle,
    title: "Extensible",
    description: "New rules and agents can be progressively added as needed."
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "Minimum necessary access to repositories. Explicit and controlled permissions."
  },
  {
    icon: Users,
    title: "Assistive Automation",
    description: "Helps developers, doesn't replace human decisions. Support, not control."
  }
];

const Philosophy = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Cleaner Agent
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Principles that guide the development and operation of Cleaner Agent
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
