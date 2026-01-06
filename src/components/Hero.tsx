import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import CodeDemo from "@/components/CodeDemo";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cleaner Agent
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              Automated GitHub App for repository maintenance, organization, and quality
            </p>

            <p className="text-base text-muted-foreground mb-10">
              Works non-intrusively by analyzing GitHub events — like pull requests, issues, and commits —
              to provide technical feedback, automated actions, and operational best practices.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* GitHub */}
              <Button size="lg" className="gap-2 px-8" asChild>
                <a
                  href="https://github.com/CleanerAgent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  Install on GitHub
                </a>
              </Button>

              {/* Documentation */}
              <Button variant="outline" size="lg" className="gap-2 px-8" asChild>
              <Link
                to="/documentation"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Documentation
              </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Domain agnostic — works on new or legacy repositories, regardless of stack.
            </p>
          </div>

          <div className="lg:pl-8">
            <CodeDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
