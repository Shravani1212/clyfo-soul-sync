import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Baby, BookOpen, Users, Home, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const journeyData = {
  children: {
    title: "Children (1–5 years)",
    focus: "Emotional Safety & Early Awareness",
    description: "Build a strong emotional foundation with love, play, and joyful development.",
    color: "cosmic-saffron",
    gradient: "from-cosmic-saffron/20 to-cosmic-saffron/5",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1519340242784-93430582d9de?q=80&w=1200&auto=format&fit=crop", // Warm glowing playful child
    details: "In this crucial phase, the structural development of the brain is highest. CLYFO focuses on integrating emotional consciousness through play, allowing toddlers to construct safe, joyous awareness without negative imprinting."
  },
  learners: {
    title: "Learners (6–12 years)",
    focus: "Joyful Learning & Tech Balance",
    description: "Prevent stress through mindful schooling and digital discipline.",
    color: "consciousness-purple",
    gradient: "from-consciousness-purple/20 to-consciousness-purple/5",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1200&auto=format&fit=crop", // Glowing book/learning
    details: "As formal education begins, academic stress and early digital addiction become massive threats. CLYFO intervenes by merging ancient focus techniques with a balanced, joyful tech-hygiene lifestyle."
  },
  youth: {
    title: "Youth (13–30 years)",
    focus: "Skill, Purpose & Employment",
    description: "Prevent depression while empowering careers and spiritual strength.",
    color: "cosmic-green",
    gradient: "from-cosmic-green/20 to-cosmic-green/5",
    icon: Users,
    image: "https://images.unsplash.com/photo-1517486808940-5e5bd2e2ea8d?q=80&w=1200&auto=format&fit=crop", // Youth empowerment / nature
    details: "The bridge to adulthood involves critical destruction of self-doubt. Through the Aspirant program, youth engage with practical skills, mental fortitude, and deep philosophical grounding, paving the way for confident employment."
  },
  family: {
    title: "Family (30–50 years)",
    focus: "Financial & Emotional Balance",
    description: "Reduce anxiety, improve parenting, and build job resilience.",
    color: "infinity-gold",
    gradient: "from-infinity-gold/20 to-infinity-gold/5",
    icon: Home,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop", // Warm family / peaceful
    details: "Juggling financial demands and familial responsibilities often shatters inner peace. We offer resilience modules and the Transformer pathway, helping parents maintain harmony and create a conscious household."
  },
  olders: {
    title: "Olders (50+ years)",
    focus: "Dignity, Wellness & Legacy",
    description: "Reduce loneliness and increase meaningful community contributions.",
    color: "cosmic-blue",
    gradient: "from-blue-400/20 to-blue-400/5",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1481504953745-f04dcda53be3?q=80&w=1200&auto=format&fit=crop", // Serene older/nature legacy
    details: "The senior years are times for spiritual consolidation. Moving away from isolation, this phase emphasizes community involvement, sharing wisdom as Transformers, and achieving profound existential dignity."
  }
};

const JourneyDetail = () => {
  const { ageGroup } = useParams();
  const data = journeyData[ageGroup as keyof typeof journeyData];

  if (!data) {
    return (
      <div className="min-h-screen py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-cosmic mb-4 text-destructive">Journey Phase Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary pl-0 text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
            style={{ backgroundImage: `url(${data.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="relative z-10 p-8 md:p-16 pt-32 md:pt-48">
            <div className={`w-16 h-16 rounded-2xl bg-${data.color}/20 border border-${data.color} flex items-center justify-center mb-6 backdrop-blur-md`}>
              <Icon className={`w-8 h-8 text-${data.color}`} />
            </div>
            <h1 className={`text-4xl md:text-6xl font-cosmic font-bold text-white mb-4`}>
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-2">
              Focus: <span className={`text-${data.color}`}>{data.focus}</span>
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className={`p-8 rounded-2xl bg-gradient-to-br ${data.gradient} border border-${data.color}/20 shadow-cosmic`}>
              <h2 className="text-2xl font-cosmic font-bold mb-4">Phase Overview</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {data.description}
              </p>
              <h3 className="text-xl font-bold mb-3">Therapeutic Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                {data.details}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="font-cosmic font-bold text-lg mb-4">Recommended Actions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <div className={`w-2 h-2 mt-1.5 rounded-full bg-${data.color}`} />
                  Enroll in the associated Aspirant modules
                </li>
                <li className="flex gap-2">
                  <div className={`w-2 h-2 mt-1.5 rounded-full bg-${data.color}`} />
                  Connect with a local Transformer
                </li>
                <li className="flex gap-2">
                  <div className={`w-2 h-2 mt-1.5 rounded-full bg-${data.color}`} />
                  Join community circles
                </li>
              </ul>
              
              <Link to="/programmes" className="block mt-6">
                <Button className={`w-full bg-${data.color} text-black hover:bg-${data.color}/80`}>
                  Start This Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JourneyDetail;
