import { Brain, Heart, Leaf, Globe, Cpu, DollarSign } from "lucide-react";

const DimensionTicker = () => {
  const dimensions = [
    { icon: Brain, label: "Psychological", color: "cosmic-saffron" },
    { icon: Heart, label: "Spiritual", color: "consciousness-purple" },
    { icon: Leaf, label: "Physical", color: "cosmic-green" },
    { icon: Globe, label: "Environmental", color: "infinity-gold" },
    { icon: Cpu, label: "Technological", color: "cosmic-saffron" },
    { icon: DollarSign, label: "Financial", color: "cosmic-green" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-xl border-t border-primary/10 py-3 overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
      <div className="flex animate-marquee-scroll whitespace-nowrap">
        {[...dimensions, ...dimensions, ...dimensions, ...dimensions].map((dim, i) => (
          <div key={i} className="flex items-center gap-3 mx-10 group cursor-default">
            <div className={`w-8 h-8 rounded-full bg-${dim.color}/10 flex items-center justify-center border border-${dim.color}/20 group-hover:scale-110 transition-all duration-300`}>
              <dim.icon className={`w-4 h-4 text-${dim.color}`} />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/70 group-hover:text-primary transition-colors">
              {dim.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DimensionTicker;
