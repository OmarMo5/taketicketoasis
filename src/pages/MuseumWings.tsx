import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WingCard from "@/components/WingCard";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Armchair,
  Route,
  Heart,
  Baby,
  Stethoscope,
  Crown,
  Film,
  Clapperboard,
  History,
  Home,
  Eye,
  Users,
  Plus,
  ChevronDown,
} from "lucide-react";

// Import wing images
import wing01 from "@/assets/wings/wing-01.jpg";
import wing02 from "@/assets/wings/wing-02.jpg";
import wing03 from "@/assets/wings/wing-03.jpg";
import wing04 from "@/assets/wings/wing-04.jpg";
import wing05 from "@/assets/wings/wing-05.jpg";
import wing06 from "@/assets/wings/wing-06.jpg";
import wing07 from "@/assets/wings/wing-07.jpg";
import wing08 from "@/assets/wings/wing-08.jpg";
import wing09 from "@/assets/wings/wing-09.jpg";
import wing10 from "@/assets/wings/wing-10.jpg";
import wing11 from "@/assets/wings/wing-11.jpg";
import wing12 from "@/assets/wings/wing-12.jpg";
import wing13 from "@/assets/wings/wing-13.jpg";

const wingsData = [
  {
    title: "التحيات لله، عزَّ وجلَّ",
    description: "تعريف شامل بالله وأسمائه وصفاته ودلائل قدرته، مستخلص من مئة ألف مادة وموضوع.",
    icon: Sparkles,
    image: wing01,
  },
  {
    title: "أثاث النبي ﷺ ومقتنياته",
    description: "تجربة فريدة تعرض كل ما استخدمه النبي ﷺ من أثاث وأوانٍ ومقتنيات مع تعريف بها وما ورد عنها في السنة.",
    icon: Armchair,
    image: wing02,
  },
  {
    title: "طريق الهجرة",
    description: "عرض لمسار هجرة النبي ﷺ إلى المدينة وأهم المواقف التي مر بها.",
    icon: Route,
    image: wing03,
  },
  {
    title: "النبي ﷺ والمرأة",
    description: "عرض شامل يبرز مكانة المرأة في زمن النبي ﷺ ولائحة شرف تضم أكثر من 350 تشريفًا.",
    icon: Heart,
    image: wing04,
  },
  {
    title: "النبي ﷺ والطفل",
    description: "عرض يُظهر أكثر من 250 موقفًا محمودًا للأطفال مع النبي ﷺ.",
    icon: Baby,
    image: wing05,
  },
  {
    title: "خيمة الطب النبوي",
    description: "عرض علمي لما ورد في القرآن والسنة عن الأمراض والعلاج والأطعمة المفيدة.",
    icon: Stethoscope,
    image: wing06,
  },
  {
    title: "فضائل النبي ﷺ وشمائله",
    description: "تفاصيل عن أسماء النبي ﷺ وصفاته ولباسه وطعامه وهيئته.",
    icon: Crown,
    image: wing07,
  },
  {
    title: "النبي ﷺ كأنك معه",
    description: "عرض إبداعي لحياة النبي ﷺ في مكة والمدينة باستخدام تقنيات مميزة.",
    icon: Film,
    image: wing08,
  },
  {
    title: "النبي ﷺ كأنك معه (نسخة مختلفة)",
    description: "نفس الفكرة لكن بتجربة عرض مختلفة بصريًا.",
    icon: Clapperboard,
    image: wing09,
  },
  {
    title: "السلام عليك أيها النبي ﷺ",
    description: "تلخيص زمني لأحداث السيرة النبوية من الميلاد حتى الوفاة.",
    icon: History,
    image: wing10,
  },
  {
    title: "الحجرة النبوية الشريفة",
    description: "وصف دقيق للحجرة الشريفة ومساحتها وأحداثها.",
    icon: Home,
    image: wing11,
  },
  {
    title: "النبي ﷺ كأنك تراه",
    description: "عرض شامل لحياة النبي ﷺ وصفاته ومعالم شخصيته.",
    icon: Eye,
    image: wing12,
  },
  {
    title: "الأنبياء كأنك تراهم",
    description: "عرض مميز للأنبياء، أزمانهم، معجزاتهم، وآدابهم.",
    icon: Users,
    image: wing13,
  },
  {
    title: "جناح إضافي",
    description: "يُترك بتصميم متناسق لعرض جناح مستقبلي.",
    icon: Plus,
    image: wing01, // Placeholder - reusing first image
  },
];

const CARDS_PER_BATCH = 4;

const MuseumWings = () => {
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_BATCH);
  const hasMore = visibleCount < wingsData.length;

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + CARDS_PER_BATCH, wingsData.length));
  };

  const visibleWings = wingsData.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Element */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              أجنحة المتحف
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              رحلة روحية وتاريخية عبر 14 جناحًا، كل منها يروي قصة فريدة من قصص الإيمان والتاريخ الإسلامي
            </p>

            {/* Stats */}
            <motion.div
              className="flex items-center justify-center gap-8 mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">14</span>
                <span className="text-sm text-muted-foreground">جناح متميز</span>
              </div>
              <div className="h-12 w-px bg-border/50" />
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-secondary">100K+</span>
                <span className="text-sm text-muted-foreground">مادة علمية</span>
              </div>
              <div className="h-12 w-px bg-border/50" />
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">∞</span>
                <span className="text-sm text-muted-foreground">تجربة روحية</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wings Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleWings.map((wing, index) => (
                <motion.div
                  key={wing.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index >= visibleCount - CARDS_PER_BATCH ? (index % CARDS_PER_BATCH) * 0.1 : 0,
                    ease: "easeOut" 
                  }}
                >
                  <WingCard
                    title={wing.title}
                    description={wing.description}
                    image={wing.image}
                    icon={wing.icon}
                    index={index}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* More Wings Button */}
          {hasMore && (
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={showMore}
                variant="outline"
                size="lg"
                className="group px-8 py-6 text-lg font-medium border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 rounded-xl gap-3"
              >
                <span>المزيد من الأجنحة</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </Button>
            </motion.div>
          )}

          {/* Progress Indicator */}
          <motion.div 
            className="flex justify-center items-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-sm text-muted-foreground">
              عرض {Math.min(visibleCount, wingsData.length)} من {wingsData.length} جناح
            </span>
            <div className="w-32 h-1.5 bg-border/30 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(visibleCount / wingsData.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/30 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ابدأ رحلتك الروحية
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              احجز تذكرتك الآن واستمتع بتجربة فريدة تجمع بين التاريخ والروحانية
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              احجز تذكرتك الآن
            </motion.button>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default MuseumWings;
