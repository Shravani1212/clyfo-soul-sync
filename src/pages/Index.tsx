import HeroNew from "@/components/HeroNew";
import PhilosophySection from "@/components/PhilosophySection";
import FrameworkSection from "@/components/FrameworkSection";
import MetricsCounter from "@/components/MetricsCounter";
import AgeWiseJourney from "@/components/AgeWiseJourney";
import ProgramsWings from "@/components/ProgramsWings";
import VideoSection from "@/components/VideoSection";

const Index = () => {
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
    </div>
  );
};

export default Index;
