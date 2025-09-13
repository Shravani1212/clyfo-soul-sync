import Hero from "@/components/Hero";
import MetricsCounter from "@/components/MetricsCounter";
import AgeWiseJourney from "@/components/AgeWiseJourney";
import ProgramsWings from "@/components/ProgramsWings";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <MetricsCounter />
      <AgeWiseJourney />
      <ProgramsWings />
      <VideoSection />
    </div>
  );
};

export default Index;
