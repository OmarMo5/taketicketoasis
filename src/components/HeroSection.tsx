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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-transparent to-transparent pointer-events-none" />
      
      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-accent/60 backdrop-blur-sm mb-8 shadow-card"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">السيرة قبلك تعيشها</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">المتحف الدولي</span>
          <br />
          <span className="text-gradient-primary">للسيرة النبوية</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          اختبر الإرث العميق للنبي محمد ﷺ من خلال التكنولوجيا الأصيلة والقصص الغامرة عبر
          <br />
          خمسة مواقع مرموقة حول العالم
        </motion.p>

        {/* Feature Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {featureTags.map((tag, index) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:border-primary/60 hover:bg-accent/50 transition-all duration-300 cursor-default shadow-card"
            >
              <tag.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground font-medium">{tag.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div variants={itemVariants} className="mb-14">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 py-7 text-lg font-semibold shadow-button-secondary hover:shadow-elevated transition-all duration-300">
              احجز زيارتك
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Language Selector */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="text-primary">🌍</span>
            متاح باللغات:
          </span>
          {languages.map((lang, index) => (
            <motion.span
              key={lang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.03 }}
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/60 hover:text-foreground hover:bg-accent/50 transition-all duration-300 cursor-pointer"
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