import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe2, MapPin } from "lucide-react";

const Movement = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative flex flex-col items-center justify-between">
      {/* Background with Map and Connecting Dots */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-background"></div>
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
          alt="World Map"
          className="w-full h-full object-cover opacity-[0.03] dark:opacity-5 grayscale"
        />
        
        {/* Glowing TS / AP representation */}
        <div className="absolute top-[40%] left-[65%] sm:left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-infinity-gold/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-[40%] left-[65%] sm:left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-infinity-gold shadow-[0_0_30px_10px_rgba(255,191,0,0.5)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex flex-col items-center mt-12">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-cosmic-saffron/20 border-cosmic-saffron/50 text-cosmic-saffron">
            This is not a company. This is a Consciousness Revolution.
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-outfit gradient-cosmic bg-clip-text text-transparent leading-tight py-2">
            CLYFO^369(♾) <br/> Across Bharat & Globe
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 font-inter max-w-3xl mx-auto leading-relaxed mb-4">
            A Movement Foundation Rooted in Bharat.<br/>
            Rising for Humanity + AI-Tech hand holding supportive alignment.
          </p>
        </div>

        {/* Golden Roots / Planetary visual */}
        <div className="relative w-full max-w-3xl aspect-[2/1] my-8 flex items-center justify-center">
           <div className="absolute inset-0 rounded-full border border-dashed border-infinity-gold/30 animate-[spin_40s_linear_infinite]"></div>
           <div className="absolute inset-12 rounded-full border border-consciousness-purple/30 animate-[spin_20s_linear_infinite_reverse]"></div>
           
           <div className="flex gap-16 relative z-10">
               <div className="flex flex-col items-center">
                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-consciousness-purple/20 to-consciousness-purple/60 border border-consciousness-purple flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(107,33,168,0.4)] animate-bounce-slow">
                       <Globe2 className="w-10 h-10 text-white" />
                   </div>
                   <span className="font-outfit font-bold text-xl">World of Jnani</span>
               </div>
               <div className="text-6xl font-cosmic gradient-text self-center animate-infinity-pulse">♾</div>
               <div className="flex flex-col items-center">
                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cosmic-saffron/20 to-cosmic-saffron/60 border border-cosmic-saffron flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(249,115,22,0.4)] animate-bounce-slow" style={{ animationDelay: '1s' }}>
                       <MapPin className="w-10 h-10 text-white" />
                   </div>
                   <span className="font-outfit font-bold text-xl">Universe of HaiC</span>
               </div>
           </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mt-12 mb-20 animate-fade-in-up">
           <Button size="lg" className="rounded-full bg-infinity-gold text-black hover:bg-infinity-gold/90 font-bold px-8">
               Start in My Village / City
           </Button>
           <Button size="lg" variant="outline" className="rounded-full border-primary/50 text-foreground group px-8">
               Host a Workshop <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
           </Button>
           <Button size="lg" className="rounded-full gradient-cosmic text-white px-8">
               Become an Affiliate / Transformer
           </Button>
        </div>
      </div>

      {/* Closing Statement */}
      <footer className="w-full max-w-5xl mx-auto px-4 z-10 animate-fade-in-up mt-auto">
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             {/* Decorative */}
             <div className="absolute -top-10 -left-10 text-9xl text-muted-foreground/10 font-serif font-black">“</div>
             
             <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-inter mb-6 relative z-10 font-medium">
               “Let’s not just survive in a digital world. Let’s rise with awareness, build conscious communities, and create a new Bharat. Our youth don’t need motivation — they need direction. Our families don’t need more apps — they need understanding. Our elders don’t need sympathy — they need a role again.”
             </p>
             <p className="text-md text-muted-foreground mb-8">
               CLYFO exists to make purpose profitable, wellness measurable, and jobs meaningful. This is not a business, it's a system of conscious upliftment — and this is just the beginning.
             </p>
             <h3 className="text-xl md:text-2xl font-bold font-outfit gradient-text">
               🪷 CLYFO – The Revolution for Human Wholeness Begins Now.
             </h3>
          </div>
      </footer>
    </div>
  );
};

export default Movement;
