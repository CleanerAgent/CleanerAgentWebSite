import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/cleaner-agent-logo-white.png" 
              alt="Cleaner Agent" 
              className="h-8 w-auto bg-primary rounded p-1" 
            />
            <span className="font-semibold text-foreground">Cleaner Agent</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Assistive automation for GitHub repository maintenance
          </p>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cleaner Agent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
