import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Target, Users, Zap, Globe } from "lucide-react";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const About = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Consciousness OS",
      description: "Revolutionary human operating system integrating ancient wisdom with modern technology"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Holistic Growth",
      description: "6-dimensional approach: Psychological, Spiritual, Physical, Environmental, Tech, Financial"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Purpose-Driven",
      description: "Where Enlightenment meets Employment through the 3-6-9 consciousness framework"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Age-Wise Journey",
      description: "C-L-Y-F-O lifecycle: Children, Learners, Youth, Family, Olders"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Dual Wings",
      description: "Universe of HaiC (Service) + World of Jnani (Product) integration"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Viksit Bharat 2047",
      description: "Aligned with India's vision for conscious human evolution globally"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-32 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${cosmicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 animate-consciousness-flow opacity-30">
          <div className="w-full h-full bg-gradient-cosmic opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto animate-fade-in-up">
          <Badge className="mb-6 text-lg px-6 py-2 gradient-infinity">
            The Consciousness Revolution
          </Badge>
          <h1 className="text-5xl md:text-7xl font-cosmic font-bold mb-8 gradient-cosmic bg-clip-text text-transparent">
            About CLYFO<sup className="text-2xl">369</sup>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
            Where Ancient Wisdom Meets Modern Innovation<br/>
            <span className="text-primary font-medium">A Human Operating System for the Conscious Era</span>
          </p>
          <Button size="lg" className="animate-infinity-pulse shadow-cosmic">
            Discover Our Mission
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="shadow-consciousness animate-fade-in-up">
              <CardContent className="p-8">
                <h2 className="text-3xl font-cosmic font-bold mb-6 text-cosmic-saffron">Our Mission</h2>
                <p className="text-lg leading-relaxed mb-6">
                  To rebirth the human cycle with clarity, consciousness, and core values - transforming beings from 
                  ignorance to enlightenment, stress to service, jobs to joy across every heart, soul, home, and device.
                </p>
                <div className="gradient-cosmic h-1 w-20 rounded-full"></div>
              </CardContent>
            </Card>

            <Card className="shadow-consciousness animate-fade-in-up delay-300">
              <CardContent className="p-8">
                <h2 className="text-3xl font-cosmic font-bold mb-6 text-consciousness-purple">Our Vision</h2>
                <p className="text-lg leading-relaxed mb-6">
                  To align Bharat with its destiny as the Global Headquarters of Human Consciousness Evolution - 
                  elevating every soul from confusion to clarity, chaos to consciousness.
                </p>
                <div className="gradient-infinity h-1 w-20 rounded-full"></div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 group-hover:animate-infinity-pulse">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-cosmic font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3-6-9 Framework */}
      <section className="py-20 px-4 gradient-consciousness">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-12 animate-fade-in-up">
            The 3-6-9 Eternal Framework
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="animate-fade-in-up">
              <div className="text-6xl font-cosmic font-bold text-cosmic-saffron mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Core C's</h3>
              <p className="text-muted-foreground">Conceptual Creation, Conscious Preservation, Critical Destruction</p>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="text-6xl font-cosmic font-bold text-consciousness-purple mb-4">6</div>
              <h3 className="text-2xl font-bold mb-4">Balanced D's</h3>
              <p className="text-muted-foreground">Psychological, Spiritual, Physical, Environmental, Technological, Financial</p>
            </div>
            <div className="animate-fade-in-up delay-500">
              <div className="text-6xl font-cosmic font-bold text-infinity-gold mb-4">9</div>
              <h3 className="text-2xl font-bold mb-4">Repeated A's</h3>
              <p className="text-muted-foreground">Observe, Understand, Feel, Visualize, Plan, Execute, Setbacks, Improve, Repeat</p>
            </div>
          </div>
          <Badge className="text-lg px-8 py-3 gradient-cosmic">
            Universal Law of Consciousness Evolution
          </Badge>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-8">
            Join the Consciousness Revolution
          </h2>
          <p className="text-xl mb-12 text-muted-foreground">
            Be part of the movement that transforms potential into purpose, stress into service, and dreams into reality.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-cosmic text-background shadow-cosmic">
              Become an Aspirant
            </Button>
            <Button size="lg" variant="outline" className="animate-cosmic-glow">
              Become a Transformer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;