import { useState, useEffect } from "react";
import HeroNew from "@/components/HeroNew";
import PhilosophySection from "@/components/PhilosophySection";
import FrameworkSection from "@/components/FrameworkSection";
import MetricsCounter from "@/components/MetricsCounter";
import AgeWiseJourney from "@/components/AgeWiseJourney";
import ProgramsWings from "@/components/ProgramsWings";
import VideoSection from "@/components/VideoSection";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Palette, Monitor } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "auto" | "tricolor">("dark");

  useEffect(() => {
    // Initialize theme from local storage or default to dark
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark" | "auto" | "tricolor") || "dark";
    setTheme(savedTheme);
    
    // Apply the saved theme immediately on mount
    const root = document.documentElement;
    root.classList.remove("dark", "tricolor");
    if (savedTheme === "dark") {
      root.classList.add("dark");
    } else if (savedTheme === "tricolor") {
      root.classList.add("tricolor");
    } else if (savedTheme === "auto") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (systemTheme === "dark") root.classList.add("dark");
    }
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark" | "auto" | "tricolor") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    const root = document.documentElement;
    root.classList.remove("dark", "tricolor");
    
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else if (newTheme === "tricolor") {
      root.classList.add("tricolor");
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
      
      {/* Philosophy & Science Section */}
      <PhilosophySection />
      
      {/* 3C-6D-9A Framework Section */}
      <FrameworkSection />
      
      {/* Age-wise Journey */}
      <AgeWiseJourney />
      
      {/* Programs Wings */}
      <ProgramsWings />
      
      {/* Video Section */}
      <VideoSection />

      {/* Floating Theme Toggle (Bottom Right, beside Chatbot) */}
      <div className="fixed bottom-8 right-28 z-50 animate-fade-in-up">
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