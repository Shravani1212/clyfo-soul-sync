import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Brain, 
  Heart, 
  Zap, 
  Target, 
  Award, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Book,
  Headphones,
  Video,
  FileText
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Programmes = () => {
  const programs = [
    {
      id: "aspirant",
      title: "World of Jnani - Aspirant Program",
      subtitle: "Learn to Rise",
      type: "Product-Based Entity",
      color: "cosmic-saffron",
      icon: <Book className="w-8 h-8" />,
      description: "21-Day Enlightenment Series across 6 Consciousness Dimensions",
      features: [
        "AI-Powered Learning with ChatGPT Integration",
        "6 Dimensional Growth Framework",
        "Freedom Tools: Notepad, Recorder, Camera",
        "MSME Certified Courses",
        "Affiliate Earning Opportunities",
        "Mobile & Web LMS Platform"
      ],
      price: "₹2,999",
      duration: "21 Days",
      certification: "CLYFO + MSME Certification",
      stats: { enrolled: "5,000+", rating: 4.9, completion: 92 }
    },
    {
      id: "transformer",
      title: "Universe of HaiC - Transformer Program",
      subtitle: "Serve to Earn", 
      type: "Service-Based Entity",
      color: "consciousness-purple",
      icon: <Users className="w-8 h-8" />,
      description: "Become a Certified Consciousness Mentor & Community Leader",
      features: [
        "Real-world Community Mentoring",
        "Ranking-based Earning Model",
        "Daily Performance Tracking",
        "Government Recognition Badges",
        "Physical Workshop Training",
        "District-wise Leadership Roles"
      ],
      price: "₹9,999",
      duration: "7 Days Intensive + Ongoing",
      certification: "CLYFO Training + Recognition Badge",
      stats: { active: "500+", earning: "₹5K-20K", impact: "95%" }
    }
  ];

  const dimensions = [
    { name: "Psychological", icon: <Brain />, color: "text-blue-400" },
    { name: "Spiritual", icon: <Heart />, color: "text-purple-400" },
    { name: "Physical", icon: <Zap />, color: "text-green-400" },
    { name: "Environmental", icon: <Target />, color: "text-emerald-400" },
    { name: "Technological", icon: <Award />, color: "text-cyan-400" },
    { name: "Financial", icon: <Clock />, color: "text-yellow-400" }
  ];

  const ageGroups = [
    { letter: "C", title: "Children", age: "1-5 years", focus: "Emotional Safety & Early Awareness" },
    { letter: "L", title: "Learners", age: "6-12 years", focus: "Focus & Joyful Learning" },
    { letter: "Y", title: "Youth", age: "13-30 years", focus: "Skill, Purpose & Employment" },
    { letter: "F", title: "Family", age: "30-50 years", focus: "Balance & Wellness" },
    { letter: "O", title: "Olders", age: "50+ years", focus: "Dignity & Legacy" }
  ];

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
            Two Wings of Consciousness
          </Badge>
          <h1 className="text-5xl md:text-7xl font-cosmic font-bold mb-8 gradient-cosmic bg-clip-text text-transparent">
            Our Programmes
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
            One Wing Heals, One Wing Builds<br/>
            <span className="text-primary font-medium">Together, We Rise</span>
          </p>
        </div>
      </section>

      {/* Programs Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <Card key={program.id} className={`shadow-consciousness animate-fade-in-up group hover:shadow-cosmic transition-all duration-500`} style={{ animationDelay: `${index * 300}ms` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 rounded-full bg-${program.color}/10 text-${program.color} group-hover:animate-infinity-pulse`}>
                    {program.icon}
                  </div>
                  <Badge className="mb-4">{program.type}</Badge>
                  <CardTitle className="text-2xl font-cosmic mb-2">{program.title}</CardTitle>
                  <p className="text-lg font-semibold text-primary">{program.subtitle}</p>
                  <p className="text-muted-foreground mt-2">{program.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(program.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Program Details */}
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Certification:</span>
                      <Badge variant="outline" className="text-xs">{program.certification}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Investment:</span>
                      <span className="text-xl font-bold text-primary">{program.price}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full gradient-cosmic text-background font-medium group-hover:animate-cosmic-glow">
                    {program.id === "aspirant" ? "Start Learning Journey" : "Begin Transformation Path"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Dimensions Framework */}
      <section className="py-20 px-4 gradient-consciousness">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-12 animate-fade-in-up">
            6 Dimensional Growth Framework
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {dimensions.map((dimension, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 group hover:shadow-cosmic transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className={`mb-4 group-hover:animate-infinity-pulse ${dimension.color}`}>
                    {dimension.icon}
                  </div>
                  <h3 className="font-cosmic font-bold">{dimension.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <Badge className="text-lg px-8 py-3 gradient-cosmic">
            Holistic Human Development
          </Badge>
        </div>
      </section>

      {/* CLYFO Age Groups */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold text-center mb-12 animate-fade-in-up">
            C-L-Y-F-O Lifecycle Journey
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {ageGroups.map((group, index) => (
              <Card key={index} className="text-center group hover:shadow-cosmic transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="text-4xl font-cosmic font-bold text-primary mb-3 group-hover:animate-infinity-pulse">
                    {group.letter}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{group.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{group.age}</p>
                  <p className="text-xs text-muted-foreground">{group.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Materials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cosmic font-bold text-center mb-12 animate-fade-in-up">
            Learning Resources & Tools
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Video />, title: "HD Video Lectures", desc: "3 Gurus per Dimension" },
              { icon: <Headphones />, title: "Audio Guides", desc: "Meditation & Mantras" },
              { icon: <FileText />, title: "E-Books & PDFs", desc: "Comprehensive Study Material" },
              { icon: <Play />, title: "Interactive Tools", desc: "Notepad, Recorder, Camera" }
            ].map((resource, index) => (
              <Card key={index} className="text-center group hover:shadow-cosmic transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:animate-infinity-pulse">
                    {resource.icon}
                  </div>
                  <h3 className="font-bold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-8">
            Choose Your Wing
          </h2>
          <p className="text-xl mb-12 text-muted-foreground">
            Whether you're here to learn and rise, or serve and earn - your consciousness journey begins now.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button size="lg" className="gradient-cosmic text-background shadow-cosmic">
              I Am an Aspirant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="animate-cosmic-glow">
              I Am a Transformer
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;