import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Monitor, Box, Layers, Clapperboard } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const HeroSection = () => {
  const featureTags = [
    { icon: Sparkles, label: "تجربة غامرة" },
    { icon: Layers, label: "عروض تفاعلية" },
    { icon: Monitor, label: "تقنية الهولوغرام" },
    { icon: Box, label: "نماذج ثلاثية الأبعاد تاريخية" },
    { icon: Clapperboard, label: "تجربة السينما" },
  ];

  const languages = [
    "الروسية",
    "التركية",
    "الإندونيسية",
    "الأردية",
    "الفرنسية",
    "الإنجليزية",
    "العربية",
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

  // Gentle floating animation for decorative elements
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
    <section id="hero" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Deep premium dark gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(180,20%,10%)_0%,hsl(180,20%,6%)_50%,hsl(180,18%,4%)_100%)] pointer-events-none" />
      
      {/* Ambient glow orbs */}
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
      
      {/* Subtle top edge glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Featured Badge with Spiritual Breathing Animation */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md mb-10 shadow-glow-primary animate-spiritual-breathe"
        >
          <Sparkles className="w-4 h-4 text-primary animate-soft-glow" />
          <span className="text-sm font-semibold animate-calm-shimmer">السيرة كأنك تعيشها</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
        >
          <span className="text-foreground">المتحف الدولي</span>
          <br />
          <span className="text-gradient-primary">للسيرة النبوية</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          اختبر الإرث العميق للنبي محمد ﷺ من خلال التكنولوجيا الأصيلة والقصص الغامرة عبر
          <br className="hidden md:block" />
          خمسة مواقع مرموقة حول العالم
        </motion.p>

        {/* Feature Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {featureTags.map((tag, index) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.06, duration: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 8px 25px -8px hsl(var(--primary) / 0.2)"
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-accent/60 transition-all duration-400 cursor-default shadow-card"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <tag.icon className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm text-foreground font-medium">{tag.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div variants={itemVariants} className="mb-16">
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
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-12 py-8 text-lg font-bold shadow-button-secondary hover:shadow-glow-secondary transition-all duration-400 group">
                احجز زيارتك
                <motion.span
                  className="inline-block mr-3"
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.span>
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Language Selector */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <span className="text-sm text-muted-foreground flex items-center gap-2 font-medium">
            <span className="text-primary">🌍</span>
            متاح باللغات:
          </span>
        {languages.map((lang, index) => (
            <motion.span
              key={lang}
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
              {lang}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;