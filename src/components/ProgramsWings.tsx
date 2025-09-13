import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Award, TrendingUp, HeadphonesIcon, Smartphone } from "lucide-react";

const ProgramsWings = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-6">
            Two Wings: <span className="gradient-infinity bg-clip-text text-transparent">Service & Enlightenment</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            "One Wing Heals, One Wing Builds. Together, We Rise."
          </p>
          <p className="text-base text-muted-foreground">
            The less you think – The more you do resonate your conscious inner capabilities
          </p>
        </div>

        {/* Two Wings Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Wing - Universe of HaiC */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-cosmic-green/10 to-cosmic-green/5 backdrop-blur-sm rounded-3xl p-8 border border-cosmic-green/30 shadow-consciousness hover:shadow-cosmic transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-cosmic-green/20 border-2 border-cosmic-green flex items-center justify-center mx-auto mb-4 animate-cosmic-glow">
                  <Users className="w-8 h-8 text-cosmic-green" />
                </div>
                <h3 className="font-cosmic text-2xl font-bold text-cosmic-green mb-2">
                  Universe of HaiC
                </h3>
                <p className="text-lg text-muted-foreground mb-1">Service Based Entity</p>
                <p className="text-sm font-semibold text-cosmic-green">Transformers Program - Serve to Earn</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-card/30 rounded-lg p-4 text-center">
                    <Award className="w-6 h-6 text-cosmic-green mx-auto mb-2" />
                    <p className="font-semibold">MSME Certified</p>
                  </div>
                  <div className="bg-card/30 rounded-lg p-4 text-center">
                    <TrendingUp className="w-6 h-6 text-cosmic-green mx-auto mb-2" />
                    <p className="font-semibold">Ranking Based</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-cosmic-green">What You Do:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Guide Youth, Families & Elders in 6 Wellness Areas</li>
                    <li>• Report Mental Distress & Prevent Crises</li>
                    <li>• Promote Conscious Living & Digital Awareness</li>
                    <li>• Run Local Support Circles</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-cosmic-green">What You Earn:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Monthly Earnings: ₹5K–₹20K via Impact Score</li>
                    <li>• Digital Rank Certificate (Gold/Silver/Bronze)</li>
                    <li>• Real Community Recognition</li>
                    <li>• Opportunity to Mentor Others</li>
                  </ul>
                </div>

                <Button className="w-full bg-cosmic-green hover:bg-cosmic-green/80 text-black font-semibold">
                  Become a Transformer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Wing - World of Jnani */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-cosmic-saffron/10 to-cosmic-saffron/5 backdrop-blur-sm rounded-3xl p-8 border border-cosmic-saffron/30 shadow-consciousness hover:shadow-cosmic transition-all duration-500">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-cosmic-saffron/20 border-2 border-cosmic-saffron flex items-center justify-center mx-auto mb-4 animate-cosmic-glow">
                  <BookOpen className="w-8 h-8 text-cosmic-saffron" />
                </div>
                <h3 className="font-cosmic text-2xl font-bold text-cosmic-saffron mb-2">
                  World of Jnani
                </h3>
                <p className="text-lg text-muted-foreground mb-1">Product Based Entity</p>
                <p className="text-sm font-semibold text-cosmic-saffron">Aspirants Program - Learn to Rise</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-card/30 rounded-lg p-4 text-center">
                    <HeadphonesIcon className="w-6 h-6 text-cosmic-saffron mx-auto mb-2" />
                    <p className="font-semibold">21-Day Series</p>
                  </div>
                  <div className="bg-card/30 rounded-lg p-4 text-center">
                    <Smartphone className="w-6 h-6 text-cosmic-saffron mx-auto mb-2" />
                    <p className="font-semibold">Multi-Platform</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-cosmic-saffron">Learning Content:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Podcasts (3 Gurus per Dimension)</li>
                    <li>• AI-powered Videos & Cinematic Scenes</li>
                    <li>• E-books & Scientific Mind Maps</li>
                    <li>• Freedom Tools: Notepad, Recorder, Camera</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-cosmic-saffron">What You Get:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• MSME + CLYFO Certifications</li>
                    <li>• Progress Tracking & Gamified Scores</li>
                    <li>• Affiliate Earnings Opportunity</li>
                    <li>• Telugu + English Support</li>
                  </ul>
                </div>

                <Button className="w-full bg-cosmic-saffron hover:bg-cosmic-saffron/80 text-black font-semibold">
                  Join as Aspirant
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Choose Your Wing CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-primary/20">
            <h3 className="font-cosmic text-2xl font-bold mb-4">Choose Your Wing</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-cosmic-saffron text-cosmic-saffron hover:bg-cosmic-saffron/10">
                I Am an Aspirant
              </Button>
              <Button variant="outline" size="lg" className="border-cosmic-green text-cosmic-green hover:bg-cosmic-green/10">
                I Am a Transformer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsWings;