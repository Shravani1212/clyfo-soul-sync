import { Button } from "@/components/ui/button";
import { Play, Infinity, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className=" flex items-center justify-center overflow-hidden">
      
      

      {/* Central Cosmic Tree with Infinity Symbol */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        
        {/* CTA Buttons */}
        

        {/* 3C-6D-9A Framework Highlight */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <div className="flex justify-center items-center space-x-8 text-sm md:text-base">
            <div className="text-center">
              <div className="w-52 h-52 rounded-full bg-cosmic-saffron/20 border-2 border-cosmic-saffron flex flex-col items-center justify-center mx-auto mb-2">
                <img src="/images/core-creation.png" alt="Core Creation" className="w-16 h-16 mb-2" />
                <span className="font-cosmic font-bold text-cosmic-saffron text-3xl">3C</span>
              </div>
              <p className="text-lg font-semibold text-muted-foreground">Core Creation</p>
            </div>
            
            <div className="text-center">
              <div className="w-52 h-52 rounded-full bg-consciousness-purple/20 border-2 border-consciousness-purple flex flex-col items-center justify-center mx-auto mb-2">
                <img src="/images/dimensions.png" alt="Dimensions" className="w-16 h-16 mb-2" />
                <span className="font-cosmic font-bold text-consciousness-purple text-3xl">6D</span>
              </div>
              <p className="text-lg font-semibold text-muted-foreground">Dimensions</p>
            </div>
            
            <div className="text-center">
              <div className="w-52 h-52 rounded-full bg-cosmic-green/20 border-2 border-cosmic-green flex flex-col items-center justify-center mx-auto mb-2">
                <img src="/images/actions.png" alt="Actions" className="w-16 h-16 mb-2" />
                <span className="font-cosmic font-bold text-cosmic-green text-3xl">9A</span>
              </div>
              <p className="text-lg font-semibold text-muted-foreground">Actions</p>
            </div>
          </div>
          
          <p className="text-xl font-bold text-muted-foreground mt-6">
            ♾ Infinity Looping Framework for Consciousness Evolution
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;