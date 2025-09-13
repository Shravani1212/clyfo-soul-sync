import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-consciousness-purple/10 via-background to-cosmic-saffron/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-infinity bg-clip-text text-transparent">
              A Consciousness Revolution
            </span>
            <br />
            <span className="text-foreground">Begins...</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "Resourceful conscious connectivity led to insane Execution"
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary/20 border border-primary/20 shadow-consciousness">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto animate-infinity-pulse">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-cosmic text-2xl font-bold text-foreground">
                    CLYFO^369(♾) Mission Teaser
                  </h3>
                  <p className="text-muted-foreground">
                    Discover the future of conscious education
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-infinity hover:shadow-cosmic text-primary-foreground font-semibold"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </Button>
              </div>
            </div>

            {/* Cosmic Effects */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-cosmic-saffron animate-infinity-pulse"></div>
            <div className="absolute top-8 right-6 w-2 h-2 rounded-full bg-cosmic-green animate-infinity-pulse" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 rounded-full bg-consciousness-purple animate-infinity-pulse" style={{animationDelay: "1s"}}></div>
          </div>

          {/* Video Description */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-cosmic text-lg font-bold text-primary">
                Success is not a destination
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Success is visualization journey with deep conviction. Watch how CLYFO^369(♾) 
                transforms lives through the sacred 3-6-9 framework, bringing ancient wisdom 
                into the digital age.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-cosmic text-lg font-bold text-primary">
                Featured Testimonials
              </h4>
              <div className="space-y-3">
                <div className="bg-card/30 rounded-lg p-4 border border-primary/10">
                  <p className="text-sm text-muted-foreground italic">
                    "CLYFO changed my perspective from joblessness to purposeful service..."
                  </p>
                  <p className="text-xs text-primary mt-2">- Aspirant from Hyderabad</p>
                </div>
                <div className="bg-card/30 rounded-lg p-4 border border-primary/10">
                  <p className="text-sm text-muted-foreground italic">
                    "As a Transformer, I earn while healing my community..."
                  </p>
                  <p className="text-xs text-primary mt-2">- Transformer from Warangal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTAs */}
        <div className="mt-16 text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-consciousness-purple text-consciousness-purple hover:bg-consciousness-purple/10">
              <ExternalLink className="w-4 h-4 mr-2" />
              Download Vision Deck
            </Button>
            
            <Button variant="outline" size="lg" className="border-cosmic-green text-cosmic-green hover:bg-cosmic-green/10">
              View Success Stories
            </Button>
          </div>

          <div className="inline-block bg-card/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-primary/10">
            <p className="font-cosmic text-sm text-primary">
              "This is not a business, it's a system of conscious upliftment"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;