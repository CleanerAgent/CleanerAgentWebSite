import { GitPullRequest, FileCheck, MessageSquare, Tag, Shield, Settings } from "lucide-react";

const features = [
  {
    icon: GitPullRequest,
    title: "Pull Request Analysis",
    description: "Identifies structural inconsistencies, organization issues, and patterns that impact maintainability."
  },
  {
    icon: FileCheck,
    title: "Repository Hygiene",
    description: "Validates essential files like README, LICENSE, and CI. Identifies missing or outdated configurations."
  },
  {
    icon: MessageSquare,
    title: "Technical Comments",
    description: "Automatically interacts with issues and pull requests, commenting with relevant technical suggestions."
  },
  {
    icon: Tag,
    title: "Label Application",
    description: "Automatically applies labels to categorize and organize issues and PRs consistently."
  },
  {
    icon: Shield,
    title: "Security by Design",
    description: "Operates with explicit and controlled permissions, following the GitHub Apps security model."
  },
  {
    icon: Settings,
    title: "Smart Signaling",
    description: "Can close or flag items when appropriate, keeping the repository organized."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Cleaner Agent Does
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Assistive automation that helps developers without replacing human decisions
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
