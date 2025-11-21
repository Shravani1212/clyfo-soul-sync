import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles, Infinity } from "lucide-react";
import cosmicHero1 from "@/assets/cosmic-hero-1.png";
import cosmicHero2 from "@/assets/cosmic-hero-2.png";
import clyfoAnimation from "@/assets/clyfo-animation.gif";

const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-saffron/5 via-background to-consciousness-purple/5" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${cosmicHero1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)',
          }}
        />
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-infinity-gold rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center md:text-left space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 backdrop-blur-sm">
                  <Infinity className="w-5 h-5 text-infinity-gold animate-infinity-pulse" />
                  <span className="text-sm font-medium text-primary">Consciousness Revolution</span>
                </div>
              </div>
              
              <h1 className="font-cosmic text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-infinity bg-clip-text text-transparent">
                  CLYFO
                </span>
                <sup className="text-3xl text-infinity-gold">369</sup>
                <span className="text-infinity-gold">(♾)</span>
              </h1>
              
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                The Conscious Human OS
              </p>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Where <span className="text-cosmic-saffron font-semibold">Enlightenment</span> meets{" "}
                <span className="text-cosmic-green font-semibold">Employment</span>
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3 text-left">
              {[
                "Life without CLYFO is 0 / dead",
                "Quality filter VS overloaded raw content",
                "Where there's a problem, there's a skill to resolve"
              ].map((point, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <Sparkles className="w-5 h-5 text-infinity-gold mt-1 shrink-0" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gradient-cosmic text-background font-semibold group">
                Join the Revolution
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Teaser
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              {[
                { value: "50K+", label: "Aspirants" },
                { value: "2.5K+", label: "Transformers" },
                { value: "150+", label: "Villages" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-cosmic text-2xl font-bold text-infinity-gold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glowing Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cosmic-saffron via-consciousness-purple to-cosmic-green rounded-full blur-3xl opacity-30 animate-pulse" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img 
                  src={clyfoAnimation} 
                  alt="CLYFO Consciousness Animation" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 shadow-xl animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cosmic-green rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live Impact Tracking</span>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <Infinity className="w-5 h-5 text-infinity-gold" />
                <span className="text-sm font-medium">Infinity Loop System</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3C-6D-9A Framework Teaser */}
        <div className="mt-24 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center gap-6 bg-card/50 backdrop-blur-md rounded-2xl px-8 py-6 border border-primary/20">
            <div className="text-center">
              <div className="font-cosmic text-3xl font-bold text-cosmic-saffron">3C</div>
              <div className="text-xs text-muted-foreground">Core Creation</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-cosmic text-3xl font-bold text-consciousness-purple">6D</div>
              <div className="text-xs text-muted-foreground">Dimensions</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-cosmic text-3xl font-bold text-cosmic-green">9A</div>
              <div className="text-xs text-muted-foreground">Actions</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            ♾ Infinity Looping Framework for Consciousness Evolution
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
