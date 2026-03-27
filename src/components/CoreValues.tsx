import { Shield, Target, Zap } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Scientific Sanity",
      description: "Rooted in neuroscience and quantum physics to ensure every transformation is measurable and real."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Beyond just mindfulness, we focus on 'Employment with Enlightenment' to build a Viksit Bharat 2047."
    },
    {
      icon: Zap,
      title: "Rapid Evolution",
      description: "Our 3C-6D-9A framework is designed for the modern pace, delivering deep results in record time."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-4">Our Core Philosophy</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining ancient Vedic wisdom with modern scientific precision to unlock human potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl bg-card border border-primary/10 hover:border-primary/30 transition-all hover:scale-105 group shadow-sm"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
