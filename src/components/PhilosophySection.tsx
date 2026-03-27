import { Brain, Heart, Leaf, Cpu, DollarSign, Globe } from "lucide-react";

const PhilosophySection = () => {
  const dimensions = [
    { icon: Brain, label: "Psychological", color: "cosmic-saffron" },
    { icon: Heart, label: "Spiritual", color: "consciousness-purple" },
    { icon: Leaf, label: "Physical", color: "cosmic-green" },
    { icon: Globe, label: "Environmental", color: "infinity-gold" },
    { icon: Cpu, label: "Technological", color: "cosmic-saffron" },
    { icon: DollarSign, label: "Financial", color: "cosmic-green" }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
              <span className="text-sm font-medium text-primary text-balance">The Science Behind Consciousness</span>
            </div>
          </div>
          <h2 className="font-cosmic text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-infinity bg-clip-text text-transparent">
              Six Dimensions of Consciousness
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Holistic transformation across all aspects of human life
          </p>
        </div>

        {/* Thematic Quotes */}
        <div className="text-center animate-fade-in-up">
          <h3 className="font-cosmic text-3xl md:text-4xl text-primary mb-8 drop-shadow-sm px-4">
            "When Science Bows to Soul, Consciousness Rises"
          </h3>
          <div className="inline-block bg-card/50 backdrop-blur-sm rounded-2xl px-10 py-8 border border-primary/20 shadow-cosmic transition-all hover:border-primary/40 group">
            <p className="text-lg md:text-xl font-medium tracking-wide group-hover:text-primary transition-colors">
              Ancient Wisdom <span className="text-primary mx-2">×</span> Modern Technology <span className="text-primary mx-2">=</span> Human Evolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
