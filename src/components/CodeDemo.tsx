import { useEffect, useState } from "react";
import { Github, CheckCircle, MessageSquare, Tag } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const CodeDemo = () => {
  const [step, setStep] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [isClicking, setIsClicking] = useState(false);
  const { theme } = useTheme();

  const steps = [
    { cursor: { x: 280, y: 85 }, action: "hover" },
    { cursor: { x: 280, y: 85 }, action: "click" },
    { cursor: { x: 150, y: 180 }, action: "move" },
    { cursor: { x: 150, y: 180 }, action: "typing" },
    { cursor: { x: 280, y: 280 }, action: "move" },
    { cursor: { x: 280, y: 280 }, action: "click" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        const next = (prev + 1) % 12;
        if (next < steps.length) {
          setCursorPos(steps[next].cursor);
          setIsClicking(steps[next].action === "click");
        }
        return next;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const logoSrc = theme === "dark" ? "/logo-white.png" : "/logo-blue.png";

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg relative h-[380px]">
      {/* GitHub-like header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
        <Github className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">Pull Request #42</span>
        <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Open</span>
      </div>

      {/* Content area */}
      <div className="p-4 bg-background h-[calc(100%-48px)] overflow-hidden">
        {/* PR Title */}
        <div className="mb-4">
          <h4 className="font-semibold text-foreground text-sm">feat: Add user authentication</h4>
          <p className="text-xs text-muted-foreground mt-1">opened by @developer • 2 minutes ago</p>
        </div>

        {/* Cleaner Agent Comment - appears after step 3 */}
        <div className={`border border-border rounded-lg p-3 mb-3 transition-all duration-300 ${step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <div className="flex items-center gap-2 mb-2">
            <img 
              src={logoSrc} 
              alt="Cleaner Agent" 
              className="w-6 h-6 object-contain"
            />
            <span className="text-xs font-medium text-foreground">Cleaner Agent</span>
            <span className="text-xs text-muted-foreground">just now</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Analysis complete. Found 3 suggestions:
          </p>
          <ul className="mt-2 space-y-1.5">
            <li className="flex items-center gap-2 text-xs">
              <CheckCircle className="h-3 w-3 text-green-500" />
              <span className="text-muted-foreground">README.md present</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <CheckCircle className="h-3 w-3 text-green-500" />
              <span className="text-muted-foreground">CI workflow configured</span>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <MessageSquare className="h-3 w-3 text-yellow-500" />
              <span className="text-muted-foreground">Consider adding tests</span>
            </li>
          </ul>
        </div>

        {/* Labels applied - appears after step 6 */}
        <div className={`flex items-center gap-2 transition-all duration-300 ${step >= 7 ? "opacity-100" : "opacity-0"}`}>
          <Tag className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">needs-review</span>
          <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full">documentation</span>
        </div>
      </div>

      {/* Animated cursor */}
      <div 
        className={`absolute pointer-events-none transition-all duration-500 ease-out z-10 ${isClicking ? "scale-90" : "scale-100"}`}
        style={{ 
          left: cursorPos.x, 
          top: cursorPos.y,
          transform: `translate(-50%, -50%) ${isClicking ? "scale(0.9)" : "scale(1)"}`
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
          <path 
            d="M5 3L19 12L12 13L9 20L5 3Z" 
            fill="white" 
            stroke="black" 
            strokeWidth="1.5"
          />
        </svg>
        {isClicking && (
          <div className="absolute -top-1 -left-1 w-8 h-8 bg-primary/30 rounded-full animate-ping" />
        )}
      </div>
    </div>
  );
};

export default CodeDemo;
