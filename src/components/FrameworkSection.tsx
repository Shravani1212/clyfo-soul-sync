import React, { useState } from "react";
import { Circle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const FrameworkSection = () => {
  const [activeTab, setActiveTab] = useState<"scientific" | "feedback">("scientific");
  // allow quick navigation from "About" (navbar/tab) into the Evidence section
  const scrollTo = (id: string, openEvidenceTab?: "scientific" | "feedback") => {
    if (openEvidenceTab) setActiveTab(openEvidenceTab);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const coreCs = [
    { title: "Conceptual Creation", desc: "Birth of ideas and vision" },
    { title: "Conscious Preservation", desc: "Mindful maintenance and growth" },
    { title: "Critical Destruction", desc: "Breaking patterns that don't serve" }
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFH9hmQEk_gyD8zQ4FBXiUDtfffm08cA_lvWfp120iWZhSajxLYmSuK_RwQOt4jhPfgrkkjKd4gd8D6lYoI6omSd9l-eNMihlrtK_ivdQxwl52MP_B9JgVobdY25YR8E0Cp8qbEGJ3ncCalUyVjktyJM7cYsDsbqcbTg58n3LhmyU4C0Id6BqbP0aofAlbEbxQYq6WYqnd2y2uK1svVWXqVqSpBoXkw2uadfkFYu01uQsKyvIjcm1nQq5QIdcNG5GtNPCSKyqJQyA"
    },
    {
      title: "Wellness",
      subtitle: "Nurturing holistic well-being for all.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG18Qy71LsrBxZschhy2MP4TITXJCtgA8GYHf5pgcw-JyKuVQGa5gVEUJv7f4l4gLGjrxnoGZz-ScR4gqo3fmoSfAQ9v2HAeI8cksBCg8EM8FCiYa1CLhdxRDpduDK8vRM9529dYRkHdgvszdFJEuKSkJ2UE10tm05QdaopbYjnVv6873M_V7jlSIGT68FZychw7cpb7PcehDgyGC8QsDdh3ojcmLe6mi590sYGap1_qAZWi04rXX04fFLqKG2kHhM_E8wtF7RH5Q"
    },
    {
      title: "Sustainability",
      subtitle: "Creating a greener, healthier future.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcUyZXjju6VcoaBIQSmmrNTcTh3B5fJwiKU3NIS933EcN1IBv96wvXUcXE668XSK6QjTaJn6rBUhagP-D-1DBtfYUq4lOj1z5i2Ed2GjqeokGpzrcunBgP_DjiirklsSnzsgslaq7AK4hUO0x7X1WAp7jLi7I7N8_5kmOMh-UuFRTFCshQsO7403kHODUMls-snU4DwOxQUKg9CIMdM80V0M1oimMWww93_9Wz_ZsmqDO9QyQ6V-ca19gE4AO9okQmrqO5CvnY-yE"
    },
    {
      title: "Innovation",
      subtitle: "Driving progress with cutting-edge solutions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc5eTFTld2h-P3DqXHRm1vo2UTcoiRCac89j2KCdYYlz0_4UQabOyGBM1AOhps4XzLqMdoFV-IwrrvQ-bJXqD5Jh4mvyr5FiNOXIbNGeDHmpfBRhRNRAVMAuTW5sUMP1RwaWuAp6JMd7c8yNAtsaL88PpSjkjeEkAuPbdAOp9fyaY2st9mk1Iobsbv0eiUrARWaNGLEjL_sUw3Z455JADt4gGmhp8XX9EgkNto_FL9y7xapgVdG440AdgSri09SjHEDKMEqvKduwg"
    }
  ];

  const scientificItems = [
    {
      title: "Meditation Reshapes Brain Structure",
      text:
        "Research indicates that regular meditation practice can lead to measurable changes in brain structure, including increased gray matter density in regions associated with self-awareness, compassion and introspection. Meditation enhances neuroplasticity and boosts focus and attention.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBf_brain_placeholder",
    },
    {
      title: "Reduces Stress and Improves Resilience",
      text:
        "Meditation down-regulates amygdala activity, improving emotional resilience and enabling better coping with stressors while maintaining calm.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBf_globe_placeholder",
    },
    {
      title: "AI‑Powered Validation of Meditative States",
      text:
        "Advances in brain imaging and AI provide objective evidence of distinct brain activity patterns during deep meditative states, validating transformative effects of meditation.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBf_brain2_placeholder",
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc_ocean_placeholder",
      quote: '“You have the right to work, but never to the fruit of work.” — Resilience in a distracted world',
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc_cliff_placeholder",
      quote: '“The mind is restless, turbulent... but can be controlled by practice and detachment.” — Mindfulness in digital overwhelm',
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc_river_placeholder",
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
      {/* Hero image + title for 'The Infinity Fountain' */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl overflow-hidden bg-black/40">
          <div
            className="w-full h-64 sm:h-72 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxN99j6Dg0QKCIFUTrmcpxVaFHNA7rdEz6EEsTt659_ZeZUcDxDMucBUyBJSMLaWOErBiVtv7BwcvU9Wyw5FP67938cxyacODMyOcwC3H21eqDqdAl992yo88VtEEuTQExbU5naEZyXfdoNWdoYZGPqQHVdG9oJqybWOP_lnFIqQ9vhGjsmpkxo4iaB8RKszM9-AlHgSBuSMWik_LCDTc9C02CSpRgfe_Qhfukk3kApcDpBKZA1Hnjip61hHG6eMlMt9CMRCwZN5E")'
            }}
          />
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">The Infinity Fountain</h3>
            <p className="text-md md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Every drop counts. Your contribution, big or small, fuels our collective journey towards a conscious society.
              Witness how individual energies converge to create impact across education, wellness, sustainability and innovation.
            </p>
          </div>
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

        {/* Detailed Breakdown (kept but moved below about cards) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* 3C Detail */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-saffron/20 hover:border-cosmic-saffron/50 transition-all animate-fade-in-up">
            <h3 className="text-2xl font-bold text-cosmic-saffron mb-4">3 Core C's</h3>
            <div className="space-y-4">
              {coreCs.map((c, i) => (
                <div key={i}>
                  <div className="font-semibold mb-1">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 6D Detail */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-consciousness-purple/20 hover:border-consciousness-purple/50 transition-all animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-consciousness-purple mb-4">6 Dimensions</h3>
            <div className="space-y-2 text-sm">
              <div>• Psychological Wellness</div>
              <div>• Spiritual Alignment</div>
              <div>• Physical Health</div>
              <div>• Environmental Harmony</div>
              <div>• Technological Balance</div>
              <div>• Financial Stability</div>
            </div>
          </div>

          {/* 9A Detail */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-green/20 hover:border-cosmic-green/50 transition-all animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-cosmic-green mb-4">9 Actions</h3>
            <div className="space-y-2 text-sm">
              {actions.map((action, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-cosmic-green text-cosmic-green" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              This isn't just a framework — it's a <span className="text-primary font-semibold">living system</span> that transforms problems into purposeful skills through infinite conscious loops.
            </p>
            <Button size="lg" className="gradient-cosmic text-background font-semibold">
              Experience the Framework
            </Button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default FrameworkSection;
