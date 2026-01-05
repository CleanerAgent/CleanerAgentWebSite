import { useEffect, useState } from "react";

const codeLines = [
  { text: "// Cleaner Agent analyzing PR #42...", color: "text-muted-foreground" },
  { text: "", color: "" },
  { text: "const analysis = await cleanerAgent.analyze({", color: "text-foreground" },
  { text: "  event: 'pull_request',", color: "text-primary" },
  { text: "  repo: 'your-org/your-repo',", color: "text-primary" },
  { text: "  pr: 42", color: "text-primary" },
  { text: "});", color: "text-foreground" },
  { text: "", color: "" },
  { text: "// ✓ README.md present", color: "text-green-500" },
  { text: "// ✓ LICENSE file found", color: "text-green-500" },
  { text: "// ✓ CI workflow configured", color: "text-green-500" },
  { text: "// ⚠ Missing CONTRIBUTING.md", color: "text-yellow-500" },
  { text: "", color: "" },
  { text: "await cleanerAgent.comment({", color: "text-foreground" },
  { text: "  suggestion: 'Add CONTRIBUTING.md',", color: "text-primary" },
  { text: "  autoLabel: ['documentation']", color: "text-primary" },
  { text: "});", color: "text-foreground" },
];

const CodeDemo = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-2 text-xs text-muted-foreground">cleaner-agent.ts</span>
      </div>
      <div className="p-4 font-mono text-sm min-h-[380px] bg-background">
        {codeLines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className={`${line.color} leading-relaxed`}>
            {line.text || "\u00A0"}
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
      </div>
    </div>
  );
};

export default CodeDemo;
