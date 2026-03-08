import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, Monitor, Box, Layers, Clapperboard } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const languageKeys = [
    "hero.langRussian",
    "hero.langTurkish",
    "hero.langIndonesian",
    "hero.langUrdu",
    "hero.langFrench",
    "hero.langEnglish",
    "hero.langArabic",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="hero" className="py-12 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(150,40%,14%)_0%,hsl(155,22%,6%)_40%,hsl(160,15%,4%)_100%)] pointer-events-none" />
      
      <motion.div 
        variants={floatVariants}
        animate="animate"
        className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-32 right-1/4 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[100px] pointer-events-none animate-subtle-drift" 
      />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md mb-6 md:mb-10 shadow-glow-primary animate-spiritual-breathe"
        >
          <Sparkles className="w-4 h-4 text-primary animate-soft-glow" />
          <span className="text-sm font-semibold animate-calm-shimmer">{t("hero.badge")}</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-5 md:mb-8"
        >
          <span className="text-foreground">{t("hero.titleLine1")}</span>
          <br />
          <span className="text-gradient-primary">{t("hero.titleLine2")}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          {t("hero.description")}
          <br className="hidden md:block" />
          {t("hero.descriptionLine2")}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-8 md:mb-14"
        />

        <motion.div variants={itemVariants} className="mb-10 md:mb-16">
          <motion.div
            whileHover={{ 
              scale: 1.03, 
              y: -3,
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="https://tickets.asc.sa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-bold shadow-button-secondary hover:shadow-glow-secondary transition-all duration-400 group">
                {t("hero.bookVisit")}
                <motion.span
                  className={`inline-block ${isRtl ? "mr-3" : "ml-3"}`}
                  animate={{ x: isRtl ? [0, -4, 0] : [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </motion.span>
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <span className="text-sm text-muted-foreground flex items-center gap-2 font-medium">
            <span className="text-primary">🌍</span>
            {t("hero.availableIn")}
          </span>
          {languageKeys.map((key, index) => (
            <motion.span
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.04 }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 4px 15px -5px hsl(var(--primary) / 0.15)"
              }}
              className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-accent/60 transition-all duration-400 cursor-pointer"
            >
              {t(key)}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
