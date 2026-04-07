import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

interface TestimonialConfig {
  id: number;
  textKey: string;
  highlightKey: string;
  nameKey: string;
  locationKey: string;
  avatarImage: string;
  featured?: boolean;
}

const testimonialsConfig: TestimonialConfig[] = [
  { id: 1, textKey: "testimonials.t1text", highlightKey: "testimonials.t1highlight", nameKey: "testimonials.t1name", locationKey: "testimonials.t1location", avatarImage: "" },
  { id: 2, textKey: "testimonials.t2text", highlightKey: "testimonials.t2highlight", nameKey: "testimonials.t2name", locationKey: "testimonials.t2location", avatarImage: "", featured: true },
  { id: 3, textKey: "testimonials.t3text", highlightKey: "testimonials.t3highlight", nameKey: "testimonials.t3name", locationKey: "testimonials.t3location", avatarImage: "" },
  { id: 4, textKey: "testimonials.t4text", highlightKey: "testimonials.t4highlight", nameKey: "testimonials.t4name", locationKey: "testimonials.t4location", avatarImage: "" },
  { id: 5, textKey: "testimonials.t5text", highlightKey: "testimonials.t5highlight", nameKey: "testimonials.t5name", locationKey: "testimonials.t5location", avatarImage: "" },
  { id: 6, textKey: "testimonials.t6text", highlightKey: "testimonials.t6highlight", nameKey: "testimonials.t6name", locationKey: "testimonials.t6location", avatarImage: "" },
  { id: 7, textKey: "testimonials.t7text", highlightKey: "testimonials.t7highlight", nameKey: "testimonials.t7name", locationKey: "testimonials.t7location", avatarImage: "" },
  { id: 8, textKey: "testimonials.t8text", highlightKey: "testimonials.t8highlight", nameKey: "testimonials.t8name", locationKey: "testimonials.t8location", avatarImage: "" },
  { id: 8, textKey: "testimonials.t9text", highlightKey: "testimonials.t9highlight", nameKey: "testimonials.t9name", locationKey: "testimonials.t9location", avatarImage: "" },
  { id: 8, textKey: "testimonials.t10text", highlightKey: "testimonials.t10highlight", nameKey: "testimonials.t10name", locationKey: "testimonials.t10location", avatarImage: "" },
  { id: 8, textKey: "testimonials.t11text", highlightKey: "testimonials.t11highlight", nameKey: "testimonials.t11name", locationKey: "testimonials.t11location", avatarImage: "" },
  { id: 8, textKey: "testimonials.t12text", highlightKey: "testimonials.t12highlight", nameKey: "testimonials.t12name", locationKey: "testimonials.t12location", avatarImage: "" },
];

const TESTIMONIALS_PER_PAGE = 3;

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const perPage = isMobile ? 1 : TESTIMONIALS_PER_PAGE;
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalPages = Math.ceil(testimonialsConfig.length / perPage);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => { nextPage(); }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextPage]);

  const currentTestimonials = testimonialsConfig.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <section id="testimonials" className="py-14 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(155,20%,6%)] via-background to-[hsl(155,20%,6%)]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-secondary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />

      <div
        className="max-w-6xl mx-auto relative z-10"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-5">
            {t("testimonials.sectionTitle")}
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-md mx-auto leading-relaxed">
            {t("testimonials.sectionDescription")}
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            >
              {currentTestimonials.map((tc, index) => (
                <motion.div
                  key={tc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <TestimonialCard config={tc} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevPage}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border/40 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={nextPage}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border/40 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <motion.div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "bg-primary w-8 shadow-[0_0_10px_rgba(30,120,80,0.4)]"
                  : "bg-foreground/15 hover:bg-foreground/25"
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {currentPage + 1} {t("testimonials.of")} {totalPages} {t("testimonials.pages")}
        </p>
      </div>
    </section>
  );
};

const TestimonialCard = ({ config }: { config: TestimonialConfig }) => {
  const { t } = useLanguage();
  const text = t(config.textKey);
  const highlight = t(config.highlightKey);
  const name = t(config.nameKey);
  const location = t(config.locationKey);

  const renderText = () => {
    const parts = text.split(highlight);
    return (
      <>
        <span className="text-primary font-bold">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 20px 50px -15px hsl(var(--primary) / 0.12)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 group h-full flex flex-col ${
        config.featured
          ? "bg-gradient-to-br from-card to-primary/[0.03] ring-1 ring-primary/10"
          : "border border-border/20"
      }`}
    >
      <div className="absolute top-4 right-4 opacity-[0.08] group-hover:opacity-15 transition-opacity duration-500">
        <Quote className="w-8 h-8 text-primary fill-primary" />
      </div>

      <div className="flex justify-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>

      <p className="text-center text-muted-foreground leading-relaxed mb-6 text-sm md:text-base flex-1">
        "{renderText()}"
      </p>

      <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/20">
        <div className="text-left flex-1">
          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-400">
            {name}
          </p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
        <div className="relative">
          <Avatar className="w-12 h-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-400">
            <AvatarImage src={config.avatarImage} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          {config.featured && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center shadow-sm">
              <Star className="w-3 h-3 fill-white text-white" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
