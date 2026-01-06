import { useTheme } from "@/hooks/useTheme";

type Company = {
  src: string;
  alt: string;
};

const companies: Company[] = [
  { src: "/LogoMemoryCorInvertida.png", alt: "Memory Forensics" },
  { src: "/CleanerAg.png", alt: "Cleaner Agent" },
  { src: "/ValoraCommunity.png", alt: "Valora Community" },
];


const TrustedBy: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">

          {/* Header */}
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Trusted by Engineering Teams Worldwide
            </h3>
            <p className="text-sm text-muted-foreground">
              Organizations using Cleaner Agent to maintain repository quality
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-10">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company.src}
                alt={company.alt}
                className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition"
                loading="lazy"
              />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">
                  Repositories Monitored
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">1K+</div>
                <div className="text-sm text-muted-foreground">
                  PRs Analyzed
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">
                  Organizations
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
