import { Brain, Heart, Leaf, Cpu, DollarSign, Globe } from "lucide-react";
import philosophyBg from "@/assets/philosophy-bg.jpg";

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
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${philosophyBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
              <span className="text-sm font-medium text-primary">The Science Behind</span>
            </div>
          </div>
          <h2 className="font-cosmic text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-infinity bg-clip-text text-transparent">
              Why 369?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "If you knew the magnificence of 3, 6, and 9, you would have the key to the universe." 
            <span className="block mt-2 text-primary">— Nikola Tesla</span>
          </p>
        </div>

        {/* 3-6-9 Explanation Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              num: "3", 
              title: "Core Creation", 
              desc: "Jupiter/Brihaspati: Expansion, growth, divine wisdom. The spark igniting vision.",
              color: "cosmic-saffron"
            },
            { 
              num: "6", 
              title: "Balanced Dimensions", 
              desc: "Venus/Shukra: Harmony, attraction, magnetism. The balance between dreams and reality.",
              color: "consciousness-purple"
            },
            { 
              num: "9", 
              title: "Repeated Actions", 
              desc: "Mars/Mangal: Action, transformation, completion. The catalyst for lasting results.",
              color: "cosmic-green"
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cosmic-saffron via-consciousness-purple to-cosmic-green rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
              <div className="relative">
                <div className={`font-cosmic text-6xl font-bold text-${item.color} mb-4`}>
                  {item.num}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Dimensions Visualization */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="font-cosmic text-4xl font-bold mb-4">
              Six Dimensions of <span className="gradient-infinity bg-clip-text text-transparent">Consciousness</span>
            </h3>
            <p className="text-muted-foreground">Holistic transformation across all aspects of human life</p>
          </div>

          {/* Hexagonal Layout */}
          <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
            {/* Center Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cosmic-saffron via-consciousness-purple to-cosmic-green animate-consciousness-flow flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center">
                  <span className="font-cosmic text-2xl font-bold gradient-infinity bg-clip-text text-transparent">
                    YOU
                  </span>
                </div>
              </div>
            </div>

            {/* Dimension Nodes */}
            {dimensions.map((dim, i) => {
              const Icon = dim.icon;
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const radius = 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={i}
                  className="absolute animate-fade-in-up"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.15}s`
                  }}
                >
                  <div className={`group relative w-24 h-24 rounded-full bg-${dim.color}/20 border-2 border-${dim.color} flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 text-${dim.color}`} />
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 text-sm font-medium">
                        {dim.label}
                      </div>
                    </div>
                  </div>

                  {/* Connection Line to Center */}
                  <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                    <line 
                      x1="50%" 
                      y1="50%" 
                      x2={`calc(50% - ${x}px)`} 
                      y2={`calc(50% - ${y}px)`} 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      className="text-primary/20"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <div className="inline-block bg-card/50 backdrop-blur-sm rounded-2xl px-12 py-8 border border-primary/20">
            <p className="font-cosmic text-xl text-primary mb-2">
              "When Science Bows to Soul, Consciousness Rises"
            </p>
            <p className="text-sm text-muted-foreground">
              Ancient Wisdom × Modern Technology = Human Evolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
