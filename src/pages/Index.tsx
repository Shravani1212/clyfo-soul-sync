import { useState, useEffect } from "react";
import HeroNew from "@/components/HeroNew";
import PhilosophySection from "@/components/PhilosophySection";
import FrameworkSection from "@/components/FrameworkSection";
import MetricsCounter from "@/components/MetricsCounter";
import AgeWiseJourney from "@/components/AgeWiseJourney";
import ProgramsWings from "@/components/ProgramsWings";
import VideoSection from "@/components/VideoSection";
import CoreValues from "@/components/CoreValues";
import ScienceTrust from "@/components/ScienceTrust";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Palette, Monitor, Zap, Waves, TreePine, Sunset, BookOpen, Leaf } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "auto" | "tricolor" | "neon" | "ocean" | "forest" | "sunset" | "purple" | "academia" | "sage">("dark");

  useEffect(() => {
    // Initialize theme from local storage or default to dark
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark" | "auto" | "tricolor" | "neon" | "ocean" | "forest" | "sunset" | "purple" | "academia" | "sage") || "dark";
    setTheme(savedTheme);
    
    // Apply the saved theme immediately on mount
    const root = document.documentElement;
    root.classList.remove("dark", "tricolor", "neon", "ocean", "forest", "sunset", "purple", "academia", "sage");
    if (savedTheme === "dark") {
      root.classList.add("dark");
    } else if (["tricolor", "neon", "ocean", "forest", "sunset", "purple", "academia", "sage"].includes(savedTheme)) {
      root.classList.add(savedTheme);
    } else if (savedTheme === "auto") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (systemTheme === "dark") root.classList.add("dark");
    }
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark" | "auto" | "tricolor" | "neon" | "ocean" | "forest" | "sunset" | "purple" | "academia" | "sage") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    const root = document.documentElement;
    root.classList.remove("dark", "tricolor", "neon", "ocean", "forest", "sunset", "purple", "academia", "sage");
    
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else if (["tricolor", "neon", "ocean", "forest", "sunset", "purple", "academia", "sage"].includes(newTheme)) {
      root.classList.add(newTheme);
    } else if (newTheme === "auto") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (systemTheme === "dark") root.classList.add("dark");
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* New Hero Section */}
      <HeroNew />
      
      {/* Metrics Counter */}
      <MetricsCounter />

      {/* Core Values Section */}
      <CoreValues />
      
      {/* Philosophy & Science Section */}
      <PhilosophySection />

      {/* Science & Trust Symbols */}
      <ScienceTrust />
      
      {/* 3C-6D-9A Framework Section */}
      <FrameworkSection />
      
      {/* Age-wise Journey */}
      <AgeWiseJourney />
      
      {/* Programs Wings */}
      <ProgramsWings />
      
      {/* Video Section */}
      <VideoSection />

      {/* Final Call to Action */}
      <FinalCTA />

      {/* Floating Theme Toggle (Bottom Right, beside Chatbot) */}
      <div className="fixed bottom-20 right-28 z-[110] animate-fade-in-up">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="w-12 h-12 rounded-full shadow-lg border-primary/20 bg-background/80 backdrop-blur-sm hover:scale-110 transition-transform"
            >
              <Palette className="w-5 h-5 text-primary" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top">
            <DropdownMenuItem onClick={() => handleThemeChange("light")}>
              <Sun className="mr-2 h-4 w-4" /> Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
              <Moon className="mr-2 h-4 w-4" /> Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("tricolor")}>
              <Palette className="mr-2 h-4 w-4" /> Tricolor
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("purple")}>
              <Palette className="mr-2 h-4 w-4 text-purple-600" /> Royal Purple
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("academia")}>
              <BookOpen className="mr-2 h-4 w-4 text-blue-600" /> Academic Blue
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("sage")}>
              <Leaf className="mr-2 h-4 w-4 text-emerald-600" /> Study Sage
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("neon")}>
              <Zap className="mr-2 h-4 w-4 text-pink-500" /> Neon Cyberpunk
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("ocean")}>
              <Waves className="mr-2 h-4 w-4 text-cyan-500" /> Ocean Abyss
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("forest")}>
              <TreePine className="mr-2 h-4 w-4 text-green-500" /> Sacred Forest
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("sunset")}>
              <Sunset className="mr-2 h-4 w-4 text-orange-500" /> Cosmic Sunset
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleThemeChange("auto")}>
              <Monitor className="mr-2 h-4 w-4" /> System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Index;