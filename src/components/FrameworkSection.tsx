import React, { useState } from "react";
import { Circle, RefreshCw, Sparkles, Brain, Activity, Leaf, Laptop, Coins, Lightbulb, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CommunityMap from "@/components/CommunityMap";

const FrameworkSection = () => {
  const [activeTab, setActiveTab] = useState<"scientific" | "feedback">("scientific");
  // allow quick navigation from "About" (navbar/tab) into the Evidence section
  const scrollTo = (id: string, openEvidenceTab?: "scientific" | "feedback") => {
    if (openEvidenceTab) setActiveTab(openEvidenceTab);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const coreCs = [
    { title: "Clarity", desc: "Conceptual creation and vision" },
    { title: "Consciousness", desc: "Mindful preservation and growth" },
    { title: "Core Values", desc: "The foundation of all actions" }
  ];

  const actions = [
    "Observe", "Understand", "Feel", "Visualize", 
    "Plan", "Execute", "Setbacks", "Improve", "Repeat"
  ];

  // image cards for About / Infinity Fountain
  const aboutCards = [
    {
      title: "Education",
      subtitle: "Empowering minds through accessible learning.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Wellness",
      subtitle: "Nurturing holistic well-being for all.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sustainability",
      subtitle: "Creating a greener, healthier future.",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Innovation",
      subtitle: "Driving progress with cutting-edge solutions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const scientificItems = [
    {
      title: "Meditation Reshapes Brain Structure",
      text:
        "Research indicates that regular meditation practice can lead to measurable changes in brain structure, including increased gray matter density in regions associated with self-awareness, compassion and introspection. Meditation enhances neuroplasticity and boosts focus and attention.",
      image:
        "https://images.unsplash.com/photo-1545389336-cf09bd8c9b58?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Reduces Stress and Improves Resilience",
      text:
        "Meditation down-regulates amygdala activity, improving emotional resilience and enabling better coping with stressors while maintaining calm.",
      image:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI‑Powered Validation of Meditative States",
      text:
        "Advances in brain imaging and AI provide objective evidence of distinct brain activity patterns during deep meditative states, validating transformative effects of meditation.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const stats = [
    { title: "Indian Youths Facing Stress/Anxiety", value: "1 in 4", change: "+5%", tone: "green" },
    { title: "Rising Digital Addiction", value: "Increasing", change: "+10%", tone: "green" },
    { title: "Youth Suicide Rates", value: "Concerning Trends", change: "+2%", tone: "yellow" },
    { title: "Wellness Access & Skills Gap", value: "Significant Challenges", change: "-8%", tone: "red" },
  ];

  const quotes = [
    {
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
      quote: '“You have the right to work, but never to the fruit of work.” — Resilience in a distracted world',
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      quote: '“The mind is restless, turbulent... but can be controlled by practice and detachment.” — Mindfulness in digital overwhelm',
    },
    {
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      quote: '“Let a man lift himself by himself... the mind is both friend and enemy.” — Inner mastery in AI-driven chaos',
    },
  ];

  const testimonials = [
    {
      name: "Anika Sharma",
      date: "2023-08-15",
      text: "This program has been life‑changing. I feel more centered and less anxious in daily life.",
      likes: 12,
      comments: 2,
    },
    {
      name: "Rohan Verma",
      date: "2023-09-22",
      text: "Great blend of ancient wisdom and modern science. Noticeable improvement in my focus.",
      likes: 8,
      comments: 1,
    },
    {
      name: "Priya Patel",
      date: "2023-10-10",
      text: "The guided meditations are fantastic. Highly recommended for mental well‑being.",
      likes: 15,
      comments: 0,
    },
  ];

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("Contact form submitted:", Object.fromEntries(form));
    // wire this to your API or email handler
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      {/* Community Map - replaces Infinity Fountain card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/50 p-6 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold font-outfit gradient-text mb-3">🌍 CLYFO Across Bharat</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every drop counts. Click any city dot to see the community, animated reactions, and real impact numbers.
            </p>
          </div>
          <CommunityMap />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small in-section tabs: Overview / About / Evidence (click scrolls to the right block) */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => scrollTo("top-framework")}
            className="px-4 py-2 rounded-full bg-card/20 text-sm font-semibold"
          >
            Overview
          </button>
          <button
            onClick={() => scrollTo("about-cards")}
            className="px-4 py-2 rounded-full bg-card/20 text-sm font-semibold"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("evidence-section", "scientific")}
            className="px-4 py-2 rounded-full bg-card/20 text-sm font-semibold"
          >
            Evidence
          </button>
        </div>

        {/* Existing header + framework intro */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
              <span className="text-sm font-medium text-primary">The Complete System</span>
            </div>
          </div>
          <h2 className="font-cosmic text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-infinity bg-clip-text text-transparent">
              3C — 6D — 9A
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Infinity Looping Framework: From Chaos to Consciousness
          </p>
        </div>

        {/* ABOUT cards (image grid) */}
        {/* add id so the About tab can scroll here */}
        <div id="about-cards" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {aboutCards.map((card, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div
                className="w-full aspect-square bg-cover bg-center rounded-xl shadow-md"
                style={{ backgroundImage: `url("${card.image}")` }}
                role="img"
                aria-label={card.title}
              />
              <div>
                <h4 className="text-base font-bold text-white">{card.title}</h4>
                <p className="text-sm text-muted-foreground">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extensive Breakdown with Images and Animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* 3C Detail */}
          <div className="relative overflow-hidden rounded-3xl group h-[480px] shadow-cosmic animate-fade-in-up">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-end border border-cosmic-saffron/20 rounded-3xl">
              <h3 className="text-3xl font-cosmic font-bold text-cosmic-saffron mb-6 drop-shadow-md">3 Core C's</h3>
              <div className="space-y-4">
                {[
                  { title: "Clarity", desc: "Conceptual creation and vision", icon: Lightbulb },
                  { title: "Consciousness", desc: "Mindful maintenance and growth", icon: Shield },
                  { title: "Core Values", desc: "The foundation of all actions", icon: Zap }
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:bg-cosmic-saffron/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="bg-cosmic-saffron/20 p-2 rounded-full border border-cosmic-saffron/30 shadow-[0_0_10px_rgba(255,153,51,0.3)]">
                      <c.icon className="w-4 h-4 text-cosmic-saffron" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{c.title}</div>
                      <div className="text-xs text-white/70 mt-0.5">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6D Detail */}
          <div className="relative overflow-hidden rounded-3xl group h-[480px] shadow-consciousness animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-end border border-consciousness-purple/20 rounded-3xl">
              <h3 className="text-3xl font-cosmic font-bold text-consciousness-purple mb-6 drop-shadow-md">6 Dimensions</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Psychological", icon: Brain },
                  { name: "Spiritual", icon: Sparkles },
                  { name: "Physical", icon: Activity },
                  { name: "Environmental", icon: Leaf },
                  { name: "Technological", icon: Laptop },
                  { name: "Financial", icon: Coins }
                ].map((dim, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/5 hover:bg-consciousness-purple/20 transition-all duration-300 transform hover:-translate-y-1 text-center">
                    <dim.icon className="w-5 h-5 text-consciousness-purple mb-1.5 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] animate-pulse" style={{ animationDuration: `${2 + i * 0.5}s` }} />
                    <span className="text-[10px] font-bold text-white tracking-wider uppercase">{dim.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 9A Detail */}
          <div className="relative overflow-hidden rounded-3xl group h-[480px] shadow-cosmic animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=800&q=80")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-end border border-cosmic-green/20 rounded-3xl">
              <h3 className="text-3xl font-cosmic font-bold text-cosmic-green mb-6 drop-shadow-md">9 Actions</h3>
              <div className="flex flex-wrap gap-2">
                {actions.map((action, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-cosmic-green/30 hover:bg-cosmic-green/30 transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(19,136,8,0.1)]">
                    <div className="w-4 h-4 rounded-full bg-cosmic-green/20 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-cosmic-green">{i + 1}</span>
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              This isn't just a framework — it's a <span className="text-primary font-semibold">living system</span> that transforms problems into purposeful skills through infinite conscious loops.
            </p>
            <Link to="/about">
              <Button size="lg" className="gradient-cosmic text-background font-semibold">
                Experience the Framework
              </Button>
            </Link>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default FrameworkSection;
