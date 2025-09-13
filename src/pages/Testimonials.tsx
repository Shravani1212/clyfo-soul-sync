import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, Play, ArrowLeft, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CLYFO Transformer",
      location: "Hyderabad, TS",
      rating: 5,
      image: "/api/placeholder/80/80",
      quote: "CLYFO transformed my life from confusion to clarity. The 6-dimensional approach helped me find my true purpose while earning through conscious service.",
      program: "Transformer Program",
      metrics: { livesImpacted: 150, monthlyEarning: "₹18,000" }
    },
    {
      name: "Arjun Reddy",
      role: "Youth Aspirant",
      location: "Visakhapatnam, AP", 
      rating: 5,
      image: "/api/placeholder/80/80",
      quote: "From being jobless and anxious to finding my calling in conscious tech. CLYFO's 21-day enlightenment series changed everything!",
      program: "Aspirant Program",
      metrics: { skillsLearned: 8, certifications: 3 }
    },
    {
      name: "Meera Devi",
      role: "Family Mentor",
      location: "Warangal, TS",
      rating: 5,
      image: "/api/placeholder/80/80",
      quote: "As a mother of three, CLYFO helped me balance family, technology, and spiritual growth. Now I guide other families too.",
      program: "Family Wing",
      metrics: { familiesHelped: 45, workshops: 12 }
    },
    {
      name: "Dr. Krishna Murthy",
      role: "Elder Wisdom Guide",
      location: "Guntur, AP",
      rating: 5,
      image: "/api/placeholder/80/80",
      quote: "At 65, I found new purpose through CLYFO. My experience now helps youth while I stay connected to community service.",
      program: "Elder Program",
      metrics: { youthMentored: 200, wisdomSessions: 50 }
    }
  ];

  const videoTestimonials = [
    { title: "From Depression to Purpose", duration: "3:24", thumbnail: "/api/placeholder/300/200" },
    { title: "Rural Transformation Story", duration: "4:15", thumbnail: "/api/placeholder/300/200" },
    { title: "Family Healing Journey", duration: "2:58", thumbnail: "/api/placeholder/300/200" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-32 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative max-w-4xl mx-auto animate-fade-in-up">
          <Badge className="mb-6 text-lg px-6 py-2 gradient-infinity">
            Real Transformations
          </Badge>
          <h1 className="text-5xl md:text-7xl font-cosmic font-bold mb-8 gradient-cosmic bg-clip-text text-transparent">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
            Witness the power of consciousness transformation<br/>
            <span className="text-primary font-medium">Real Lives. Real Changes. Real Impact.</span>
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Card className="shadow-consciousness overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={testimonials[currentSlide].image} />
                        <AvatarFallback>{testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold">{testimonials[currentSlide].name}</h3>
                        <p className="text-muted-foreground">{testimonials[currentSlide].role}</p>
                        <p className="text-sm text-primary">{testimonials[currentSlide].location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-infinity-gold text-infinity-gold" />
                      ))}
                    </div>

                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-lg mb-6 leading-relaxed">{testimonials[currentSlide].quote}</p>
                    
                    <Badge className="self-start mb-6">{testimonials[currentSlide].program}</Badge>
                    
                    <div className="flex gap-4 text-sm">
                      {Object.entries(testimonials[currentSlide].metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-primary">{value}</div>
                          <div className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="gradient-cosmic flex items-center justify-center p-12">
                    <div className="text-center text-background">
                      <h4 className="text-2xl font-cosmic font-bold mb-4">CLYFO Impact</h4>
                      <div className="text-6xl font-bold mb-2 animate-infinity-pulse">∞</div>
                      <p className="text-lg">Lives Transformed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-4 gradient-consciousness">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold text-center mb-12 animate-fade-in-up">
            Video Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-cosmic transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-0 relative overflow-hidden">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-black/80 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-cosmic font-bold mb-12 animate-fade-in-up">
            Global Impact Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Lives Transformed" },
              { number: "500+", label: "Active Transformers" },
              { number: "50+", label: "Districts Covered" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-cosmic font-bold text-primary mb-2 animate-infinity-pulse">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-8">
            Your Story Starts Here
          </h2>
          <p className="text-xl mb-12 text-muted-foreground">
            Join thousands who've transformed their lives through conscious evolution
          </p>
          <Button size="lg" className="gradient-cosmic text-background shadow-cosmic mr-4">
            Start Your Journey
          </Button>
          <Button size="lg" variant="outline" className="animate-cosmic-glow">
            Share Your Story
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;