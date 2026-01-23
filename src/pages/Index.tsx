import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import PlanVisitSection from "@/components/PlanVisitSection";
import GlobalLocationsSection from "@/components/GlobalLocationsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-arabic">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <PlanVisitSection />
      <GlobalLocationsSection />
    </div>
  );
};

export default Index;
