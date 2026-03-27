import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const teamMembers = [
    {
      role: "Visionary Founder",
      name: "Founder Name",
      description: "Leading the consciousness revolution of CLYFO^369(♾). Integrating ancient Vedic wisdom with modern AI tech for Viksit Bharat 2047.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80",
      dimension: "Core Architect"
    },
    {
      role: "Co-Founder & Head of AI",
      name: "Tech Lead",
      description: "Building the 'World of Jnani' and scaling the LMS to reach every village in Bharat.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      dimension: "Technological"
    },
    {
      role: "Chief Wellness Officer",
      name: "Wellness Lead",
      description: "Designing the 21-Day Enlightenment series to heal youth burnout and build emotional resilience.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      dimension: "Psychological"
    }
  ];

  const expertGurus = [
    {
      name: "Swami Wisdom",
      expertise: "Spiritual Dimension",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Health",
      expertise: "Physical Dimension",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
    },
    {
      name: "Eco Guardian",
      expertise: "Environmental Dimension",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
    },
    {
      name: "Financial Mentor",
      expertise: "Financial Dimension",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden flex flex-col items-center justify-start">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-cosmic-saffron/5 to-background"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-cosmic-saffron/20 border-cosmic-saffron/50 text-cosmic-saffron">
            Our Consciousness Leaders
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-outfit gradient-text">
            Holistic Conscious Solid System
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            A diverse collective of thinkers, healers, technologists, and environmentalists dedicated to transforming human beings from ignorance to enlightenment.
          </p>
        </div>

        {/* Core Leadership */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10 font-outfit text-foreground/90">Visionary Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="relative w-40 h-40 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cosmic-saffron via-consciousness-purple to-infinity-gold animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity p-[2px]">
                    </div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full border-4 border-background relative z-10"
                    />
                  </div>
                  <Badge className="mb-3 text-xs">{member.dimension}</Badge>
                  <h3 className="text-xl font-bold mb-1 font-outfit">{member.name}</h3>
                  <p className="text-sm font-semibold text-cosmic-saffron mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Wing Connections */}
        <div className="my-20 p-1 bg-gradient-to-r from-cosmic-saffron via-consciousness-purple to-infinity-gold rounded-3xl">
          <div className="bg-background/90 backdrop-blur-xl rounded-[23px] p-8 md:p-12 text-center flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 font-outfit">Dual Wing Ecosystem</h2>
            <div className="grid md:grid-cols-2 gap-8 w-full">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-consciousness-purple/20 to-transparent border border-consciousness-purple/30">
                <h3 className="text-xl font-bold mb-2 text-consciousness-purple">World of Jnani</h3>
                <p className="text-sm text-muted-foreground mb-4">Aspirants Panel</p>
                <div className="flex -space-x-4 justify-center">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background overflow-hidden relative">
                       <div className="absolute inset-0 bg-consciousness-purple/40"></div>
                       <svg className="w-full h-full text-foreground/50 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-bl from-cosmic-saffron/20 to-transparent border border-cosmic-saffron/30">
                <h3 className="text-xl font-bold mb-2 text-cosmic-saffron">Universe of HaiC</h3>
                <p className="text-sm text-muted-foreground mb-4">Transformers Panel</p>
                <div className="flex -space-x-4 justify-center">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background overflow-hidden relative">
                       <div className="absolute inset-0 bg-cosmic-saffron/40"></div>
                       <svg className="w-full h-full text-foreground/50 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gurus per Dimension */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-10 font-outfit text-foreground/90">Industry Experts & Mentors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertGurus.map((guru, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-square flex items-end">
                <img src={guru.image} alt={guru.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="relative p-4 z-10 w-full text-center">
                  <h4 className="font-bold text-white mb-1 group-hover:text-cosmic-saffron transition-colors">{guru.name}</h4>
                  <p className="text-xs text-background/80 font-medium">{guru.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
