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
  FileText,
  Shield,
  Lightbulb,
  Leaf
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
    { 
      name: "Psychological", 
      icon: <Brain />, 
      color: "text-blue-400",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80",
      description: "Understanding mind, emotions, and cognitive patterns"
    },
    { 
      name: "Spiritual", 
      icon: <Heart />, 
      color: "text-purple-400",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&w=600&q=80",
      description: "Inner peace, purpose, and connection to the divine"
    },
    { 
      name: "Physical", 
      icon: <Zap />, 
      color: "text-green-400",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      description: "Health, fitness, and bodily wellness"
    },
    { 
      name: "Environmental", 
      icon: <Target />, 
      color: "text-emerald-400",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
      description: "Harmony with nature and sustainable living"
    },
    { 
      name: "Technological", 
      icon: <Award />, 
      color: "text-cyan-400",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      description: "Digital literacy and technology balance"
    },
    { 
      name: "Financial", 
      icon: <Clock />, 
      color: "text-yellow-400",
      image: "https://images.unsplash.com/photo-1620306143924-ac8af5ea7d6f?auto=format&fit=crop&w=600&q=80",
      description: "Wealth creation and financial stability"
    }
  ];

  const ageGroups = [
    { letter: "C", title: "Children", age: "1-12 years", focus: "Little CLYFOs: Character & EQ" },
    { letter: "L", title: "Leaders", age: "Aspirants", focus: "World of Jnani: Skill & Purpose" },
    { letter: "Y", title: "Youth", age: "13-30 years", focus: "Leadership Gym: AI-Proof Careers" },
    { letter: "F", title: "Family", age: "30-50 years", focus: "Family Reset: Stability & Balance" },
    { letter: "O", title: "Olders", age: "50+ years", focus: "Wisdom Hubs: Mentorship & Legacy" }
  ];

  const courses = [
    {
      title: "Little CLYFOs",
      subtitle: "Shaping Gen Alpha Leaders",
      description: "Gamified rituals, play-therapy, and Vedic+Tech literacy for early consciousness shaping.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
      modules: 5,
      lessons: 30,
      hours: "15+ hrs"
    },
    {
      title: "21-Day Leadership Gym",
      subtitle: "AI-Proof Your Future",
      description: "Intense leadership drills with VR, AI mentors, and micro-skilling for Gen Z entrepreneurs.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      modules: 7,
      lessons: 42,
      hours: "21+ hrs"
    },
    {
      title: "CLYFO Family Reset",
      subtitle: "Holistic Home Wellbeing",
      description: "A unique blend of financial literacy and emotional stability modules for stronger families.",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
      modules: 6,
      lessons: 36,
      hours: "18+ hrs"
    },
    {
      title: "Elder Mentorship Hubs",
      subtitle: "Monetizing Wisdom",
      description: "Connecting senior wisdom reserves with youth leadership to build a national mentoring grid.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&w=600&q=80",
      modules: 4,
      lessons: 24,
      hours: "12+ hrs"
    },
    {
      title: "Village Transformers",
      subtitle: "Grassroots Revolution",
      description: "Grooming mandal-level mentors to drive rural employability and conscious digital penetration.",
      image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=800&q=80",
      modules: 8,
      lessons: 50,
      hours: "40+ hrs"
    }
  ];

  const testimonials = [
    {
      name: "Anika Sharma",
      role: "Aspirant, Delhi",
      rating: 5,
      text: "This program has been transformative. I feel more centered and purposeful in my daily life.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Rohan Verma",
      role: "Transformer, Mumbai",
      rating: 5,
      text: "Excellent blend of ancient wisdom and modern science. Highly recommended for personal growth.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Patel",
      role: "Aspirant, Bangalore",
      rating: 5,
      text: "The guided meditations and interactive tools made learning engaging and practical.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const collections = [
    {
      title: "Morning Rituals Highlights Series",
      description: "Start your day with consciousness and clarity",
      image: "https://images.unsplash.com/photo-1508215885820-4585e5610ec3?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Serenity Seeking Daily Essentials",
      description: "Build habits for inner peace and wellbeing",
      image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Holistic Living Inspirations & Rituals",
      description: "Transform your lifestyle with conscious practices",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const faqItems = [
    {
      title: "What is CLYFO^369(∞)?",
      description: "CLYFO^369 is a Consciousness Operating System that combines ancient wisdom with modern innovation to elevate human potential across 6 dimensions."
    },
    {
      title: "Who can join the programs?",
      description: "Anyone aged 1 to 100+ can participate. Programs are tailored to specific age groups (C-L-Y-F-O lifecycle)."
    },
    {
      title: "What certifications do I receive?",
      description: "You receive CLYFO Certification + MSME Recognition for completion of aspirant programs and HaiC Training Badges for transformers."
    },
    {
      title: "How long does each program take?",
      description: "Aspirant programs: 21 days (flexible pacing). Transformer programs: 7 days intensive + ongoing mentoring."
    },
    {
      title: "Can I earn while learning?",
      description: "Yes! Transformers can earn ₹5K-20K monthly through community mentoring and ranking-based models."
    },
    {
      title: "Is there a refund policy?",
      description: "Yes, 30-day money-back guarantee if you're not satisfied with the program quality and support."
    },
    {
      title: "Do you offer live sessions?",
      description: "Yes, weekly live sessions with gurus, Q&A forums, and community support throughout the course."
    },
    {
      title: "What technology is used?",
      description: "Mobile & Web LMS platform with AI-powered recommendations, interactive tools, and integrated ChatGPT support."
    }
  ];

  const mediumRatings = [
    { label: "Content Quality", value: 92 },
    { label: "Teaching Methodology", value: 88 },
    { label: "Community Support", value: 85 },
    { label: "Certification Value", value: 90 }
  ];

  const jnaniRatings = [
    { label: "Course Material", value: 94 },
    { label: "Mentor Support", value: 91 },
    { label: "Practical Applications", value: 89 },
    { label: "Overall Experience", value: 93 }
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
        <div className="absolute inset-0 animate-consciousness-flow opacity-20">
          <div className="w-full h-full bg-gradient-cosmic opacity-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto animate-fade-in-up">
          <Badge className="mb-6 text-lg px-6 py-2 gradient-infinity">
            Two Wings of Consciousness
          </Badge>
          <h1 className="text-5xl md:text-7xl font-cosmic font-bold mb-8 gradient-cosmic bg-clip-text text-transparent">
            Elevate Mind and Soul
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
            One Wing Heals, One Wing Builds<br/>
            <span className="text-primary font-medium">Where Enlightenment Meets Employment</span>
          </p>
          <Button size="lg" className="gradient-cosmic text-background shadow-cosmic">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Programs Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-cosmic font-bold text-center mb-12 animate-fade-in-up">
            Our Programmes
          </h2>
          
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-4">
              6 Dimensional Growth Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the interconnected dimensions of consciousness, each pillar representing a vital aspect of human experience.
              Discover how these pillars influence your inner system and contribute to a balanced and fulfilling life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {dimensions.map((dimension, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-cosmic transition-all duration-500 animate-fade-in-up overflow-hidden" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img 
                    src={dimension.image}
                    alt={dimension.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/500x300?text=" + dimension.name;
                    }}
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`text-2xl group-hover:animate-infinity-pulse`}>
                      {dimension.icon}
                    </div>
                    <h3 className="text-xl font-cosmic font-bold">{dimension.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{dimension.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Badge className="text-lg px-8 py-3 gradient-cosmic">
              Holistic Human Development
            </Badge>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-cosmic font-bold mb-4">
              Advanced Course Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dive into specialized consciousness programs designed for rapid transformation and inner mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all duration-500 animate-fade-in-up overflow-hidden border-primary/20" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="gradient-infinity">{course.modules} Modules</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-sm font-semibold text-primary/80 mb-3">{course.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-primary/10">
                    <div className="flex items-center gap-1">
                      <Book className="w-3 h-3" />
                      {course.lessons} Lessons
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.hours}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 variant-outline group-hover:gradient-cosmic group-hover:text-background transition-all">
                    Explore Syllabus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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

      {/* Collections */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-cosmic font-bold text-center mb-12 animate-fade-in-up">
            Featured Collections
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-40 overflow-hidden bg-gray-800">
                  <img 
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/300x200";
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>
                  <Button size="sm" className="w-full gradient-cosmic text-background">
                    View Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cosmic font-bold text-center mb-12 animate-fade-in-up">
            Real Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://i.pravatar.cc/150";
                      }}
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cosmic-saffron text-cosmic-saffron" />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Medium Collection Ratings */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-cosmic font-bold mb-8">Basic Three Insights</h3>
              <div className="space-y-6">
                {mediumRatings.map((rating, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{rating.label}</span>
                      <span className="text-sm text-primary">{rating.value}%</span>
                    </div>
                    <Progress value={rating.value} className="h-2" />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <div className="text-4xl font-bold mb-2">4.5</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-cosmic-saffron text-cosmic-saffron' : 'text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Based on 2,500+ reviews</p>
              </div>
            </div>

            {/* Jnani Collection Ratings */}
            <div className="animate-fade-in-up delay-300">
              <h3 className="text-2xl font-cosmic font-bold mb-8">Flying Like Birds in Infinity</h3>
              <div className="space-y-6">
                {jnaniRatings.map((rating, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{rating.label}</span>
                      <span className="text-sm text-primary">{rating.value}%</span>
                    </div>
                    <Progress value={rating.value} className="h-2" />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <div className="text-4xl font-bold mb-2">4.8</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-cosmic-saffron text-cosmic-saffron w-5 h-5" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Based on 3,200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Materials */}
      <section className="py-20 px-4">
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
                  <div className="text-primary mb-4 text-3xl group-hover:animate-infinity-pulse">
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-cosmic font-bold text-center mb-12 animate-fade-in-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-cosmic transition-all animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6">
                  <details className="group/details">
                    <summary className="flex cursor-pointer items-center justify-between font-bold">
                      {item.title}
                      <span className="transition group-open/details:rotate-180">
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
                  </details>
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
            Ready to Transform?
          </h2>
          <p className="text-xl mb-12 text-muted-foreground">
            Choose your wing and begin your consciousness journey with thousands of aspirants and transformers worldwide.
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