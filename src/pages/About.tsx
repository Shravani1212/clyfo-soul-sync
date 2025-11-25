import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Target, Users, Zap, Globe } from "lucide-react";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const About = () => {
  const [evidenceTab, setEvidenceTab] = useState<"scientific" | "feedback">("scientific");
  const [selectedRole, setSelectedRole] = useState<string>("all");

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Consciousness OS",
      description: "Revolutionary human operating system integrating ancient wisdom with modern technology",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Holistic Growth",
      description: "6-dimensional approach: Psychological, Spiritual, Physical, Environmental, Tech, Financial",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Purpose-Driven",
      description: "Where Enlightenment meets Employment through the 3-6-9 consciousness framework",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Age-Wise Journey",
      description: "C-L-Y-F-O lifecycle: Children, Learners, Youth, Family, Olders",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Dual Wings",
      description: "Universe of HaiC (Service) + World of Jnani (Product) integration",
      image: "https://images.unsplash.com/photo-1550439062-57db66baf773?w=600&q=80"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Viksit Bharat 2047",
      description: "Aligned with India's vision for conscious human evolution globally",
      image: "https://images.unsplash.com/photo-1526628652108-aa09b6a3a9d8?w=600&q=80"
    }
  ];

  const coreCs = [
    "Conceptual Creation",
    "Conscious Preservation",
    "Critical Destruction"
  ];

  const actions = [
    "Observe", "Understand", "Feel", "Visualize",
    "Plan", "Execute", "Setbacks", "Improve", "Repeat"
  ];

  // Evidence & feedback data (images use hosted URLs)
  const scientificItems = [
    {
      title: "Meditation Reshapes Brain Structure",
      text:
        "Research indicates that regular meditation practice can lead to measurable changes in brain structure, including increased gray matter density in regions associated with self-awareness, compassion and introspection. Meditation enhances neuroplasticity and boosts focus and attention.",
      image:
        "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=1600&q=80"
    },
    {
      title: "Reduces Stress and Improves Resilience",
      text:
        "Meditation down-regulates amygdala activity, improving emotional resilience and enabling better coping with stressors while maintaining calm.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80"
    },
    {
      title: "AI‑Powered Validation of Meditative States",
      text:
        "Advances in brain imaging and AI provide objective evidence of distinct brain activity patterns during deep meditative states, validating transformative effects of meditation.",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&q=80"
    }
  ];

  const stats = [
    { title: "Indian Youths Facing Stress/Anxiety", value: "1 in 4", change: "+5%", tone: "green" },
    { title: "Rising Digital Addiction", value: "Increasing", change: "+10%", tone: "green" },
    { title: "Youth Suicide Rates", value: "Concerning Trends", change: "+2%", tone: "yellow" },
    { title: "Wellness Access & Skills Gap", value: "Significant Challenges", change: "-8%", tone: "red" }
  ];

  const quotes = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      quote: '“You have the right to work, but never to the fruit of work.” — Resilience in a distracted world'
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      quote: '“The mind is restless, turbulent... but can be controlled by practice and detachment.” — Mindfulness in digital overwhelm'
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&q=80&w=1200&auto=format&fit=crop", // alternate image
      quote: '“Let a man lift himself by himself... the mind is both friend and enemy.” — Inner mastery in AI-driven chaos'
    }
  ];

  const testimonials = [
    {
      name: "Anika Sharma",
      date: "2023-08-15",
      text: "This program has been life‑changing. I feel more centered and less anxious in daily life.",
      likes: 12,
      comments: 2
    },
    {
      name: "Rohan Verma",
      date: "2023-09-22",
      text: "Great blend of ancient wisdom and modern science. Noticeable improvement in my focus.",
      likes: 8,
      comments: 1
    },
    {
      name: "Priya Patel",
      date: "2023-10-10",
      text: "The guided meditations are fantastic. Highly recommended for mental well‑being.",
      likes: 15,
      comments: 0
    }
  ];

  const teamMembers = [
    {
      name: "Ava Sharma",
      role: "Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ava",
      bio: "Visionary leader and consciousness pioneer",
      specialty: "Strategic Direction & Vision"
    },
    {
      name: "Ethan Patel",
      role: "Co-Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan",
      bio: "Tech innovator and system architect",
      specialty: "Technology & Innovation"
    },
    {
      name: "Olivia Singh",
      role: "Guru by Dimension",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
      bio: "Spiritual guide and consciousness mentor",
      specialty: "Spiritual & Psychological Dimensions"
    },
    {
      name: "Noah Verma",
      role: "Transformer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
      bio: "Community leader and transformation catalyst",
      specialty: "Community Engagement & Mentoring"
    },
    {
      name: "Isabella Kapoor",
      role: "Aspirant",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
      bio: "Learning advocate and content creator",
      specialty: "Educational Content & Outreach"
    },
    {
      name: "Liam Khanna",
      role: "Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",
      bio: "Operations and wellness specialist",
      specialty: "Program Operations & Wellness"
    },
    {
      name: "Sophia Mehra",
      role: "Co-Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      bio: "Creative strategist and brand architect",
      specialty: "Brand & Creative Strategy"
    },
    {
      name: "Jackson Joshi",
      role: "Guru by Dimension",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jackson",
      bio: "Environmental and financial guide",
      specialty: "Environmental & Financial Dimensions"
    },
    {
      name: "Mia Malhotra",
      role: "Transformer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
      bio: "Impact strategist and social leader",
      specialty: "Social Impact & Community Building"
    },
    {
      name: "Aiden Gupta",
      role: "Aspirant",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aiden",
      bio: "Tech enabler and platform developer",
      specialty: "Platform Development & Tech Support"
    },
    {
      name: "Amelia Bhatt",
      role: "Transformer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amelia",
      bio: "Wellness advocate and lifestyle coach",
      specialty: "Wellness & Lifestyle Coaching"
    },
    {
      name: "Lucas Iyer",
      role: "Aspirant",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
      bio: "Data analyst and insights specialist",
      specialty: "Analytics & Performance Tracking"
    }
  ];

  const roles = ["all", "Founder", "Co-Founder", "Guru by Dimension", "Transformer", "Aspirant"];

  const filteredTeam = selectedRole === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.role === selectedRole);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("Contact form:", Object.fromEntries(form));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-32 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${cosmicBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 animate-consciousness-flow opacity-30">
          <div className="w-full h-full bg-gradient-cosmic opacity-20"></div>
        </div>

        <div className="relative max-w-4xl mx-auto animate-fade-in-up">
          <Badge className="mb-6 text-lg px-6 py-2 gradient-infinity">The Consciousness Revolution</Badge>
          <h1 className="text-5xl md:text-7xl font-cosmic font-bold mb-8 gradient-cosmic bg-clip-text text-transparent">
            About CLYFO<sup className="text-2xl">369</sup>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
            Where Ancient Wisdom Meets Modern Innovation
            <br />
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

          {/* Features Grid - UPDATED with background images */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-cosmic transition-all duration-500 animate-fade-in-up overflow-hidden relative h-96" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${feature.image})` }}
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundImage = "url('https://via.placeholder.com/600x400?text=" + feature.title + "')";
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 group-hover:via-black/70 transition-all duration-500"></div>
                
                <CardContent className="p-6 text-center relative z-10 h-full flex flex-col justify-end">
                  <div className="text-primary mb-4 group-hover:animate-infinity-pulse">{feature.icon}</div>
                  <h3 className="text-xl font-cosmic font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3-6-9 Framework */}
      <section className="py-20 px-4 gradient-consciousness">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-cosmic font-bold mb-12 animate-fade-in-up">The 3-6-9 Eternal Framework</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="animate-fade-in-up">
              <div className="text-6xl font-cosmic font-bold text-cosmic-saffron mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Core C's</h3>
              <p className="text-muted-foreground">{coreCs.join(", ")}</p>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="text-6xl font-cosmic font-bold text-consciousness-purple mb-4">6</div>
              <h3 className="text-2xl font-bold mb-4">Balanced D's</h3>
              <p className="text-muted-foreground">Psychological, Spiritual, Physical, Environmental, Technological, Financial</p>
            </div>
            <div className="animate-fade-in-up delay-500">
              <div className="text-6xl font-cosmic font-bold text-infinity-gold mb-4">9</div>
              <h3 className="text-2xl font-bold mb-4">Repeated A's</h3>
              <p className="text-muted-foreground">{actions.join(", ")}</p>
            </div>
          </div>
          <Badge className="text-lg px-8 py-3 gradient-cosmic">Universal Law of Consciousness Evolution</Badge>
        </div>
      </section>

      {/* Evidence & Community Feedback (new tabbed section) */}
      <section id="evidence" className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Evidence & Community Feedback</h2>
            <div className="flex gap-2 bg-card/20 rounded-full p-1">
              <button
                onClick={() => setEvidenceTab("scientific")}
                className={`px-4 py-2 rounded-full font-semibold ${evidenceTab === "scientific" ? "bg-cosmic-saffron text-black" : "text-muted-foreground"}`}
              >
                Scientific Proof
              </button>
              <button
                onClick={() => setEvidenceTab("feedback")}
                className={`px-4 py-2 rounded-full font-semibold ${evidenceTab === "feedback" ? "bg-cosmic-green text-black" : "text-muted-foreground"}`}
              >
                Feedback
              </button>
            </div>
          </div>

          {evidenceTab === "scientific" && (
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Neuroscience of Meditation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {scientificItems.map((it, i) => (
                    <div key={i} className="flex gap-4 bg-card/30 rounded-xl p-4 items-start">
                      <div className="w-32 h-24 rounded-md bg-gray-800 overflow-hidden flex-shrink-0">
                        <img
                          src={it.image}
                          alt={it.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            // fallback if the provided URL is broken/truncated
                            (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/320x240?text=Meditation+Image";
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{it.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{it.text}</p>
                        <Button size="sm" className="bg-cosmic-saffron text-black">Learn...</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Youth Wellness Statistics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((s, i) => (
                    <div key={i} className="p-4 border rounded-xl bg-card/20">
                      <p className="text-sm text-muted-foreground">{s.title}</p>
                      <p className="text-2xl font-bold mt-2">{s.value}</p>
                      <p className={`text-sm mt-1 ${s.tone === "green" ? "text-green-400" : s.tone === "red" ? "text-red-400" : "text-yellow-300"}`}>{s.change}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Bhagavad Gita Quotes for the Digital Age</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {quotes.map((q, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-card/30">
                      <div className="w-full h-40 bg-gray-800 overflow-hidden">
                        <img src={q.image} alt={`quote-${i}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{q.quote}</p>
                        <div className="mt-4">
                          <Button size="sm" className="bg-card/60 text-white">Explore</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {evidenceTab === "feedback" && (
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-4">Testimonials</h3>
                <div className="space-y-6">
                  {testimonials.map((t, i) => (
                    <div key={i} className="bg-card/30 p-4 rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white">{t.name.split(" ").map(n=>n[0]).join("")}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold">{t.name}</p>
                            <p className="text-sm text-muted-foreground">{t.date}</p>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{t.text}</p>
                          <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                            <span>👍 {t.likes}</span>
                            <span>💬 {t.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Share Your Story</h3>
                <form onSubmit={handleContactSubmit} className="grid grid-cols-1 gap-4 max-w-2xl">
                  <input name="name" placeholder="Your Name" className="p-3 rounded-lg bg-card/20 border" />
                  <input name="email" placeholder="Your Email" className="p-3 rounded-lg bg-card/20 border" />
                  <textarea name="message" placeholder="Your Message" rows={5} className="p-3 rounded-lg bg-card/20 border" />
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-cosmic-saffron text-black">Send</Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore a universe of mentors and collaborators, tailored to your unique journey. Discover the perfect match for your aspirations.
            </p>
            
            {/* Search Bar */}
            <div className="flex gap-2 max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search by interest or role"
                className="flex-1 px-4 py-3 rounded-lg bg-card/20 border border-primary/30 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <Button className="gradient-cosmic text-background font-semibold">
                Search
              </Button>
            </div>
          </div>

          {/* Role Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in-up">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-full font-semibold transition-all capitalize ${
                  selectedRole === role
                    ? "bg-cosmic-saffron text-black"
                    : "bg-card/20 text-muted-foreground hover:text-white"
                }`}
              >
                {role === "all" ? "All Members" : role}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-fade-in-up">
            {filteredTeam.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-cosmic transition-all duration-500 overflow-hidden text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="mb-4 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square rounded-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=default" + index;
                      }}
                    />
                    {/* Role Badge */}
                    <Badge className="absolute top-2 right-2 text-xs bg-cosmic-saffron text-black">
                      {member.role}
                    </Badge>
                  </div>

                  {/* Info */}
                  <h3 className="font-bold text-sm mb-1">{member.name}</h3>
                  <p className="text-xs text-primary font-semibold mb-2">{member.specialty}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{member.bio}</p>

                  {/* Hover Action */}
                  <Button
                    size="sm"
                    className="w-full mt-3 gradient-cosmic text-background opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-cosmic font-bold mb-8">Join the Consciousness Revolution</h2>
          <p className="text-xl mb-12 text-muted-foreground">Be part of the movement that transforms potential into purpose, stress into service, and dreams into reality.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-cosmic text-background shadow-cosmic">Become an Aspirant</Button>
            <Button size="lg" variant="outline" className="animate-cosmic-glow">Become a Transformer</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;