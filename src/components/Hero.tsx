import { Button } from "@/components/ui/button";
import { Play, Infinity, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 gradient-consciousness">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iaHNsKDQ1IDEwMCUgNjUlIC8gMC4zKSIvPgo8L3N2Zz4K')] opacity-20"></div>
      </div>

      {/* Central Cosmic Tree with Infinity Symbol */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Infinity Symbol */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Infinity 
              className="w-24 h-24 text-infinity-gold animate-infinity-pulse glow-infinity" 
            />
            <div className="absolute inset-0 animate-consciousness-flow">
              <Sparkles className="w-6 h-6 text-cosmic-saffron absolute top-0 left-0" />
              <Sparkles className="w-4 h-4 text-cosmic-green absolute bottom-2 right-2" />
              <Sparkles className="w-5 h-5 text-consciousness-purple absolute top-4 right-0" />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-cosmic text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-cosmic bg-clip-text text-transparent">
            CLYFO
          </span>
          <sup className="text-4xl md:text-5xl text-infinity-gold">^369</sup>
          <span className="text-infinity-gold">(♾)</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-cosmic-white mb-2">
            Universe of HaiC - CLYFO^369(♾) Pvt Ltd - World of Jnani
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            The Conscious Human OS for Viksit Bharat 2047
          </p>
        </div>

        {/* Core Mantras */}
        <div className="mb-12 animate-fade-in-up space-y-3" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg md:text-xl text-cosmic-white font-medium">
            "Where Enlightenment Meets Employment"
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base text-muted-foreground">
            <p>LYF without CLYFO is 0/dead</p>
            <p>Quality Filter VS Raw Content</p>
            <p>Problem → Skill → Stability</p>
          </div>
        </div>

        {/* Two Wings */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-green/30 shadow-cosmic">
            <h3 className="font-cosmic text-xl text-cosmic-green mb-3">
              Universe of HaiC
            </h3>
            <p className="text-muted-foreground mb-4">Service Based Entity</p>
            <p className="text-sm">Transformers Program - Serve to Earn</p>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-saffron/30 shadow-cosmic">
            <h3 className="font-cosmic text-xl text-cosmic-saffron mb-3">
              World of Jnani
            </h3>
            <p className="text-muted-foreground mb-4">Product Based Entity</p>
            <p className="text-sm">Aspirants Program - Learn to Rise</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Button size="lg" className="bg-gradient-cosmic hover:shadow-cosmic text-primary-foreground font-semibold px-8">
            Join CLYFO^369(♾)
          </Button>
          
          <Button variant="outline" size="lg" className="border-infinity-gold text-infinity-gold hover:bg-infinity-gold/10">
            <Play className="w-4 h-4 mr-2" />
            Watch Teaser
          </Button>
          
          <Button variant="secondary" size="lg">
            View Programs
          </Button>
        </div>

        {/* 3C-6D-9A Framework Highlight */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <div className="flex justify-center items-center space-x-8 text-sm md:text-base">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cosmic-saffron/20 border border-cosmic-saffron flex items-center justify-center mx-auto mb-2">
                <span className="font-cosmic font-bold text-cosmic-saffron">3C</span>
              </div>
              <p className="text-xs text-muted-foreground">Core Creation</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-consciousness-purple/20 border border-consciousness-purple flex items-center justify-center mx-auto mb-2">
                <span className="font-cosmic font-bold text-consciousness-purple">6D</span>
              </div>
              <p className="text-xs text-muted-foreground">Dimensions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cosmic-green/20 border border-cosmic-green flex items-center justify-center mx-auto mb-2">
                <span className="font-cosmic font-bold text-cosmic-green">9A</span>
              </div>
              <p className="text-xs text-muted-foreground">Actions</p>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            ♾ Infinity Looping Framework for Consciousness Evolution
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;