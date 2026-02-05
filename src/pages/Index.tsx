import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MuseumWingsSection from "@/components/HighlightsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import PlanVisitSection from "@/components/PlanVisitSection";
import GlobalLocationsSection from "@/components/GlobalLocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-arabic">
      <Navbar />
      <HeroSection />
      <MuseumWingsSection />
      <TechnologiesSection />
      <PlanVisitSection />
      <GlobalLocationsSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
