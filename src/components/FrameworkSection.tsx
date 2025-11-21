import { Circle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const FrameworkSection = () => {
  const coreCs = [
    { title: "Conceptual Creation", desc: "Birth of ideas and vision" },
    { title: "Conscious Preservation", desc: "Mindful maintenance and growth" },
    { title: "Critical Destruction", desc: "Breaking patterns that don't serve" }
  ];

  const actions = [
    "Observe", "Understand", "Feel", "Visualize", 
    "Plan", "Execute", "Setbacks", "Improve", "Repeat"
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
              <span className="text-sm font-medium text-primary">The Complete System</span>
            </div>
          </div>
          <h2 className="font-cosmic text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-infinity bg-clip-text text-transparent">
              3C — 6D — 9A
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Infinity Looping Framework: From Chaos to Consciousness
          </p>
        </div>

        {/* Visual Framework */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* 3C Circle */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-cosmic-saffron/20 rounded-full blur-2xl" />
                <div className="relative bg-card/80 backdrop-blur-sm rounded-full p-12 border-4 border-cosmic-saffron/50 hover:border-cosmic-saffron transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="font-cosmic text-5xl font-bold text-cosmic-saffron mb-4">3C</div>
                    <div className="text-sm font-semibold mb-6">Core Creation</div>
                    <div className="space-y-2">
                      {coreCs.map((c, i) => (
                        <div key={i} className="text-xs text-muted-foreground leading-tight">
                          {c.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infinity Symbol Connection */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <RefreshCw className="w-12 h-12 text-infinity-gold animate-consciousness-flow" />
              <div className="text-5xl text-infinity-gold animate-infinity-pulse">♾</div>
              <RefreshCw className="w-12 h-12 text-infinity-gold animate-consciousness-flow" style={{ animationDirection: 'reverse' }} />
            </div>

            {/* 9A Circle */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-cosmic-green/20 rounded-full blur-2xl" />
                <div className="relative bg-card/80 backdrop-blur-sm rounded-full p-12 border-4 border-cosmic-green/50 hover:border-cosmic-green transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="font-cosmic text-5xl font-bold text-cosmic-green mb-4">9A</div>
                    <div className="text-sm font-semibold mb-6">Repeated Actions</div>
                    <div className="grid grid-cols-3 gap-2">
                      {actions.map((action, i) => (
                        <div 
                          key={i}
                          className="w-8 h-8 rounded-full bg-cosmic-green/20 border border-cosmic-green/50 flex items-center justify-center text-xs font-medium"
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6D Bar in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-consciousness-purple/20 blur-2xl rounded-full" />
              <div className="relative bg-card border-4 border-consciousness-purple/50 rounded-2xl px-8 py-6 hover:border-consciousness-purple transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="font-cosmic text-4xl font-bold text-consciousness-purple mb-2">6D</div>
                  <div className="text-xs font-semibold whitespace-nowrap">Dimensions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* 3C Detail */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-saffron/20 hover:border-cosmic-saffron/50 transition-all animate-fade-in-up">
            <h3 className="text-2xl font-bold text-cosmic-saffron mb-4">3 Core C's</h3>
            <div className="space-y-4">
              {coreCs.map((c, i) => (
                <div key={i}>
                  <div className="font-semibold mb-1">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 6D Detail */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-consciousness-purple/20 hover:border-consciousness-purple/50 transition-all animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-consciousness-purple mb-4">6 Dimensions</h3>
            <div className="space-y-2 text-sm">
              <div>• Psychological Wellness</div>
              <div>• Spiritual Alignment</div>
              <div>• Physical Health</div>
              <div>• Environmental Harmony</div>
              <div>• Technological Balance</div>
              <div>• Financial Stability</div>
            </div>
          </div>

          {/* 9A Detail */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-green/20 hover:border-cosmic-green/50 transition-all animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-cosmic-green mb-4">9 Actions</h3>
            <div className="space-y-2 text-sm">
              {actions.map((action, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-cosmic-green text-cosmic-green" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              This isn't just a framework — it's a <span className="text-primary font-semibold">living system</span> that transforms problems into purposeful skills through infinite conscious loops.
            </p>
            <Button size="lg" className="gradient-cosmic text-background font-semibold">
              Experience the Framework
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
