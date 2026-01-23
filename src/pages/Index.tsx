import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import PlanVisitSection from "@/components/PlanVisitSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-arabic">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <PlanVisitSection />
    </div>
  );
};

export default Index;
