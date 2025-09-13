import { Baby, BookOpen, Users, Home, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgeWiseJourney = () => {
  const groups = [
    {
      letter: "C",
      title: "Children",
      age: "1–5 years",
      icon: Baby,
      focus: "Emotional Safety & Early Awareness",
      description: "Build strong emotional foundation with love, play, and joyful development",
      color: "cosmic-saffron",
      gradient: "from-cosmic-saffron/20 to-cosmic-saffron/5"
    },
    {
      letter: "L",
      title: "Learners",
      age: "6–12 years",
      icon: BookOpen,
      focus: "Joyful Learning & Tech Balance",
      description: "Prevent stress through mindful schooling and digital discipline",
      color: "consciousness-purple",
      gradient: "from-consciousness-purple/20 to-consciousness-purple/5"
    },
    {
      letter: "Y",
      title: "Youth",
      age: "13–30 years",
      icon: Users,
      focus: "Skill, Purpose & Employment",
      description: "Prevent depression while empowering careers and spiritual strength",
      color: "cosmic-green",
      gradient: "from-cosmic-green/20 to-cosmic-green/5"
    },
    {
      letter: "F",
      title: "Family",
      age: "30–50 years",
      icon: Home,
      focus: "Financial & Emotional Balance",
      description: "Reduce anxiety, improve parenting, and build job resilience",
      color: "infinity-gold",
      gradient: "from-infinity-gold/20 to-infinity-gold/5"
    },
    {
      letter: "O",
      title: "Olders",
      age: "50+ years",
      icon: TreePine,
      focus: "Dignity, Wellness & Legacy",
      description: "Reduce loneliness and increase meaningful community contributions",
      color: "cosmic-blue",
      gradient: "from-blue-400/20 to-blue-400/5"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-cosmic bg-clip-text text-transparent">C-L-Y-F-O</span> Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conscious Lifecycle Evolution - From cradle to consciousness, we guide every soul through life's sacred phases
          </p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div 
                key={group.letter}
                className={`relative group hover:scale-105 transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${group.gradient} backdrop-blur-sm rounded-2xl p-6 border border-${group.color}/30 shadow-cosmic hover:shadow-consciousness transition-all duration-300`}>
                  {/* Letter Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-full bg-${group.color}/20 border-2 border-${group.color} flex items-center justify-center`}>
                      <span className={`font-cosmic text-xl font-bold text-${group.color}`}>
                        {group.letter}
                      </span>
                    </div>
                    <Icon className={`w-6 h-6 text-${group.color} opacity-60`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className={`font-cosmic text-xl font-bold text-${group.color} mb-1`}>
                        {group.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {group.age}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground text-sm mb-2">
                        {group.focus}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full border-${group.color} text-${group.color} hover:bg-${group.color}/10 text-xs`}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* Connection Line */}
                {index < groups.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-primary/20">
            <p className="font-cosmic text-lg text-primary mb-2">
              Every life moves through 5 essential phases
            </p>
            <p className="text-sm text-muted-foreground">
              CLYFO maps these to the 3-6-9 consciousness code for deep transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeWiseJourney;