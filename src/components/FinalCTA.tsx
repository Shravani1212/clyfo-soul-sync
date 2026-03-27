import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-saffron/10 via-background to-cosmic-green/10" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-card/50 backdrop-blur-xl border border-primary/20 rounded-[3rem] p-12 md:p-20 text-center shadow-cosmic border-b-4 border-r-4">
          <h2 className="font-cosmic text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to rewrite your <br />
            <span className="gradient-infinity bg-clip-text text-transparent">Consciousness OS?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of Visionaries and Transformers building the future of India and the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
                size="lg" 
                className="h-16 px-10 text-lg font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform gradient-cosmic text-background"
                onClick={() => navigate("/login")}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
                variant="outline" 
                size="lg" 
                className="h-16 px-10 text-lg font-bold rounded-2xl hover:bg-primary/5 border-primary/20"
                onClick={() => navigate("/programmes")}
            >
              Explore Syllabus
            </Button>
          </div>
          <p className="mt-10 text-sm text-muted-foreground font-medium">
            No credit card required • Secure 369 Infinity Looping • Global Community
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
