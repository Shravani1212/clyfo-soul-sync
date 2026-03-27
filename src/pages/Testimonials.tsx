import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Quote, UploadCloud } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [filter, setFilter] = useState("All");

  const reviews = [
    {
      id: 1,
      name: "Karan D.",
      role: "Gen-Z Aspirant",
      before: "Lost in screen addiction, anxiety from competitive exams.",
      after: "Top 1% Affiliate Aspirant. Finds peace in meditation and clarity in career.",
      story: "The 21-Day series didn't just teach me coding; it taught me how to manage my own mind. I now earn while I learn, and my focus has never been better.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      progress: 92,
      type: "Aspirant"
    },
    {
      id: 2,
      name: "Anita R.",
      role: "Family Mentor",
      before: "Working mother disconnected from her children due to tech burnout.",
      after: "District Wellness Coach. Running local 'Conscious Parenting' circles.",
      story: "CLYFO brought my family back. The Jyani Box and the Transformers training have given me an MSME-backed income path that doesn't sacrifice my family time.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      progress: 88,
      type: "Transformer"
    },
    {
        id: 3,
        name: "Vikram S.",
        role: "Youth Tech Minimalist",
        before: "Burnt out junior developer with severe tech-induced depression.",
        after: "Digital Detox Coach under the Technological Dimension.",
        story: "The 'Freedom Tools' literally gave me my freedom back. Serving as a Transformer showed me that tech should be an enabler, not an enslaver.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        progress: 96,
        type: "Transformer"
    }
  ];

  const filteredReviews = filter === "All" ? reviews : reviews.filter(r => r.type === filter);

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-cosmic-saffron/20 border-cosmic-saffron/50 text-cosmic-saffron">
            Real Core Valued Growth
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-outfit gradient-text leading-tight">
            Proof of Transformation
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            “Every soul reborn, every story shared, adds light to Bharat’s rise.”<br/>Real Lives. Real Transformations. Real Bharat.
          </p>
        </div>

        {/* Pulse Line & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex gap-4 mb-6 md:mb-0 bg-muted/50 p-2 rounded-full border border-border">
                <Button variant={filter === "All" ? "default" : "ghost"} onClick={() => setFilter("All")} className="rounded-full">All Stories</Button>
                <Button variant={filter === "Aspirant" ? "default" : "ghost"} onClick={() => setFilter("Aspirant")} className="rounded-full">Aspirants</Button>
                <Button variant={filter === "Transformer" ? "default" : "ghost"} onClick={() => setFilter("Transformer")} className="rounded-full">Transformers</Button>
            </div>
            
            <div className="flex items-center gap-4 hidden lg:flex">
                <span className="text-xs text-muted-foreground">Chaos</span>
                <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Consciousness</span>
            </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150"></div>
              <CardContent className="p-8 flex flex-col h-full justify-between">
                <div>
                  <Quote className="w-10 h-10 text-muted-foreground/20 mb-6" />
                  <p className="text-foreground/90 italic mb-8 min-h-[100px] leading-relaxed">
                    "{review.story}"
                  </p>
                  
                  <div className="space-y-4 mb-6 pt-4 border-t border-border/50">
                      <div>
                          <span className="text-xs text-red-500 font-bold block mb-1">BEFORE (Chaos)</span>
                          <p className="text-sm text-muted-foreground line-clamp-2">{review.before}</p>
                      </div>
                      <div>
                          <span className="text-xs text-green-500 font-bold block mb-1">AFTER (Consciousness)</span>
                          <p className="text-sm text-foreground line-clamp-2">{review.after}</p>
                      </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold font-outfit">{review.name}</h4>
                    <p className="text-xs text-primary">{review.role} • {review.progress}% Alignment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Carousel */}
        <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center font-outfit">Watch the Journeys</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-[9/16] rounded-2xl overflow-hidden relative group cursor-pointer border border-border/50 shadow-lg">
                        <img src={`https://images.unsplash.com/photo-${1515378960530 + i}-96e2a4cdbdd${i}?auto=format&fit=crop&q=80`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Video Short" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-colors group-hover:scale-110" />
                        </div>
                        <p className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm tracking-wide">
                            {i % 2 === 0 ? "Aspirant Journey" : "Transformer Mission"}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Upload CTA */}
        <div className="bg-gradient-to-br from-consciousness-purple/10 to-transparent p-10 rounded-3xl border border-consciousness-purple/20 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 font-outfit">Share Your CLYFO^369(♾) Journey</h2>
            <p className="text-muted-foreground mb-8">Inspire others across India by uploading your regional transformation story.</p>
            <Button size="lg" className="rounded-full gradient-cosmic text-white px-8">
                <UploadCloud className="mr-2 w-5 h-5" /> Upload My Review
            </Button>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;