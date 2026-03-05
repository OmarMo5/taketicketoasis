import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import WingCard from "@/components/WingCard";
import useEmblaCarousel from "embla-carousel-react";
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
  ChevronLeft,
  ChevronRight,
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
  { title: "التحيات لله، عزَّ وجلَّ", description: "تعريف شامل بالله وأسمائه وصفاته ودلائل قدرته، مستخلص من مئة ألف مادة وموضوع.", icon: Sparkles, image: wing01 },
  { title: "أثاث النبي ﷺ ومقتنياته", description: "تجربة فريدة تعرض كل ما استخدمه النبي ﷺ من أثاث وأوانٍ ومقتنيات مع تعريف بها وما ورد عنها في السنة.", icon: Armchair, image: wing02 },
  { title: "طريق الهجرة", description: "عرض لمسار هجرة النبي ﷺ إلى المدينة وأهم المواقف التي مر بها.", icon: Route, image: wing03 },
  { title: "النبي ﷺ والمرأة", description: "عرض شامل يبرز مكانة المرأة في زمن النبي ﷺ ولائحة شرف تضم أكثر من 350 تشريفًا.", icon: Heart, image: wing04 },
  { title: "النبي ﷺ والطفل", description: "عرض يُظهر أكثر من 250 موقفًا محمودًا للأطفال مع النبي ﷺ.", icon: Baby, image: wing05 },
  { title: "خيمة الطب النبوي", description: "عرض علمي لما ورد في القرآن والسنة عن الأمراض والعلاج والأطعمة المفيدة.", icon: Stethoscope, image: wing06 },
  { title: "فضائل النبي ﷺ وشمائله", description: "تفاصيل عن أسماء النبي ﷺ وصفاته ولباسه وطعامه وهيئته.", icon: Crown, image: wing07 },
  { title: "النبي ﷺ كأنك معه", description: "عرض إبداعي لحياة النبي ﷺ في مكة والمدينة باستخدام تقنيات مميزة.", icon: Film, image: wing08 },
  { title: "النبي ﷺ كأنك معه (نسخة مختلفة)", description: "نفس الفكرة لكن بتجربة عرض مختلفة بصريًا.", icon: Clapperboard, image: wing09 },
  { title: "السلام عليك أيها النبي ﷺ", description: "تلخيص زمني لأحداث السيرة النبوية من الميلاد حتى الوفاة.", icon: History, image: wing10 },
  { title: "الحجرة النبوية الشريفة", description: "وصف دقيق للحجرة الشريفة ومساحتها وأحداثها.", icon: Home, image: wing11 },
  { title: "النبي ﷺ كأنك تراه", description: "عرض شامل لحياة النبي ﷺ وصفاته ومعالم شخصيته.", icon: Eye, image: wing12 },
  { title: "الأنبياء كأنك تراهم", description: "عرض مميز للأنبياء، أزمانهم، معجزاتهم، وآدابهم.", icon: Users, image: wing13 },
  { title: "جناح إضافي", description: "يُترك بتصميم متناسق لعرض جناح مستقبلي.", icon: Plus, image: wing01 },
];

const CARDS_PER_BATCH = 4;

const MuseumWingsSection = () => {
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_BATCH);
  
  const hasMore = visibleCount < wingsData.length;

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + CARDS_PER_BATCH, wingsData.length));
  };

  const visibleWings = wingsData.slice(0, visibleCount);

  // Mobile carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", direction: "rtl", dragFree: true },
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="museum-wings" className="py-14 md:py-32 relative overflow-hidden">
      {/* Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      
      {/* Decorative glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />

      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[150px]"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Element */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <span className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            أجنحة المتحف
          </h2>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            رحلة روحية وتاريخية عبر 14 جناحًا، كل منها يروي قصة فريدة من قصص الإيمان والتاريخ الإسلامي
          </p>

          {/* Stats */}
          <motion.div
            className="flex items-center justify-center gap-5 md:gap-8 mt-6 md:mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <span className="block text-2xl md:text-4xl font-bold text-primary">14</span>
              <span className="text-xs md:text-sm text-muted-foreground">جناح متميز</span>
            </div>
            <div className="h-10 md:h-12 w-px bg-border/50" />
            <div className="text-center">
              <span className="block text-2xl md:text-4xl font-bold text-secondary">100K+</span>
              <span className="text-xs md:text-sm text-muted-foreground">مادة علمية</span>
            </div>
            <div className="h-10 md:h-12 w-px bg-border/50" />
            <div className="text-center">
              <span className="block text-2xl md:text-4xl font-bold text-primary">∞</span>
              <span className="text-xs md:text-sm text-muted-foreground">تجربة روحية</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {wingsData.map((wing, index) => (
                <div key={wing.title} className="shrink-0 w-[80vw]">
                  <WingCard
                    title={wing.title}
                    description={wing.description}
                    image={wing.image}
                    icon={wing.icon}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-9 h-9 rounded-full bg-card border border-border/40 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              aria-label="السابق"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {wingsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === selectedIndex
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-foreground/15"
                  }`}
                  aria-label={`الانتقال إلى ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-9 h-9 rounded-full bg-card border border-border/40 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              aria-label="التالي"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-3">
            {selectedIndex + 1} من {wingsData.length} جناح
          </p>
        </div>

        {/* Desktop: Original Grid with Progressive Reveal */}
        <div className="hidden md:block">
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
                      ease: "easeOut",
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
      </div>
    </section>
  );
};

export default MuseumWingsSection;
