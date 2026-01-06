import { Github, Webhook, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const Integration = () => {
  return (
    <section id="integration" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Integration Model
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple and flexible installation for any organization or repository
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">GitHub App</h3>
              <p className="text-sm text-muted-foreground">
                Works as a native GitHub App
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Webhook className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Webhook-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Can be run as an external service
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Pipelines</h3>
              <p className="text-sm text-muted-foreground">
                Integrated with automated pipelines
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Installed directly on organizations or specific repositories
            </p>
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://github.com/CleanerAgent", "_blank")}
            >
              <Github className="h-5 w-5" />
              Install Cleaner Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
