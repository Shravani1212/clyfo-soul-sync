import { useState, useEffect } from "react";
import { Users, Award, MapPin, Gift } from "lucide-react";

const MetricsCounter = () => {
  const [counts, setCounts] = useState({
    aspirants: 0,
    transformers: 0,
    villages: 0,
    rewards: 0,
  });

  const targetValues = {
    aspirants: 50000,
    transformers: 2500,
    villages: 150,
    rewards: 125000,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        aspirants: Math.min(prev.aspirants + Math.ceil(targetValues.aspirants / 200), targetValues.aspirants),
        transformers: Math.min(prev.transformers + Math.ceil(targetValues.transformers / 200), targetValues.transformers),
        villages: Math.min(prev.villages + Math.ceil(targetValues.villages / 200), targetValues.villages),
        rewards: Math.min(prev.rewards + Math.ceil(targetValues.rewards / 200), targetValues.rewards),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      icon: Users,
      label: "Aspirants Trained & Certified",
      value: counts.aspirants.toLocaleString(),
      color: "cosmic-saffron"
    },
    {
      icon: Award,
      label: "Wellness Transformers",
      value: counts.transformers.toLocaleString(),
      color: "consciousness-purple"
    },
    {
      icon: MapPin,
      label: "Villages Impacted",
      value: counts.villages.toLocaleString(),
      color: "cosmic-green"
    },
    {
      icon: Gift,
      label: "Rewards Distributed",
      value: `₹${counts.rewards.toLocaleString()}`,
      color: "infinity-gold"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-infinity bg-clip-text text-transparent">
              Consciousness Revolution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact, measurable transformation across Telangana & Andhra Pradesh
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={metric.label}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className={`w-20 h-20 rounded-full bg-${metric.color}/20 border-2 border-${metric.color} flex items-center justify-center mx-auto animate-cosmic-glow group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${metric.color}`} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className={`font-cosmic text-3xl md:text-4xl font-bold text-${metric.color}`}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-primary/20">
            <p className="font-cosmic text-lg text-primary mb-2">
              "For Every Soul — a Skill. For Every Skill — a Purpose."
            </p>
            <p className="text-sm text-muted-foreground">
              Society heals → Jobs multiply → Purposeful youth rise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsCounter;