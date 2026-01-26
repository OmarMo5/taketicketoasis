import { ArrowLeft } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import highlightImage1 from "@/assets/highlight-1.jpg";
import highlightImage2 from "@/assets/highlight-2.jpg";
import highlightImage3 from "@/assets/highlight-3.jpg";
import highlightImage4 from "@/assets/highlight-4.jpg";

const HighlightsSection = () => {
  const highlights = [
    {
      id: 1,
      title: "مجسمات مكة والمدينة في زمن الرسول ﷺ",
      image: highlightImage4,
      iconColor: "bg-secondary",
    },
    {
      id: 2,
      title: "الروضة المحمدية",
      image: highlightImage3,
      iconColor: "bg-secondary",
    },
    {
      id: 3,
      title: "فضائل وخصائص الرسول محمد ﷺ",
      image: highlightImage2,
      iconColor: "bg-secondary",
    },
    {
      id: 4,
      title: "خط زمني في حياة الرسول محمد ﷺ",
      image: highlightImage1,
      iconColor: "bg-primary",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="tour-highlights" className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-primary mb-5">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">جاهز للاستكشاف</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            أبرز معالم جولتك
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            اكتشف الأقسام الأسطورية في معرضنا
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-400 border border-border/40"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6 flex items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 20 }}
                  className={`w-10 h-10 rounded-full ${item.iconColor} flex items-center justify-center flex-shrink-0 shadow-soft`}
                >
                  <span className="text-primary-foreground text-sm">✦</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsSection;