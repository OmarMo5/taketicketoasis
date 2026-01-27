import { Star, Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  highlightedText: string;
  name: string;
  location: string;
  avatarImage: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "تجربة خلابة تماماً! العروض الغامرة والنماذج التاريخية أحيت حياة الرسول ﷺ بشكل واقعي. يجب زيارتها لأي شخص يسعى لفهم التراث الإسلامي.",
    highlightedText: "تجربة خلابة تماماً!",
    name: "فاطمة حسن",
    location: "زارت فرع مكة المكرمة",
    avatarImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    rating: 5,
    text: "التقنية التفاعلية والمعروضات الجميلة جعلت التعلم عن الحضارة الإسلامية جذاباً لعائلتنا بأكملها. كان الأطفال مفتونين بشكل خاص بنماذج المدن ثلاثية الأبعاد.",
    highlightedText: "التقنية التفاعلية والمعروضات الجميلة",
    name: "أحمد الراشد",
    location: "زار فرع المدينة المنورة",
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    featured: true,
  },
  {
    id: 3,
    rating: 5,
    text: "متحف عالمي المستوى يجمع بين التكنولوجيا الحديثة والاحترام العميق للتاريخ. كانت الجولات متعددة اللغات ممتازة، والموظفون كانوا ذوي معرفة واسعة ومرحبين للغاية.",
    highlightedText: "متحف عالمي المستوى",
    name: "محمد بنزيمة",
    location: "زار فرع الرباط",
    avatarImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            ماذا يقول زوارنا
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            اكتشف تجارب الزوار من جميع أنحاء العالم
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Right column - First testimonial */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <TestimonialCard testimonial={testimonials[0]} />
          </motion.div>

          {/* Left column - Featured testimonial */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <TestimonialCard testimonial={testimonials[1]} />
          </motion.div>
        </motion.div>

        {/* Full width testimonial */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8"
        >
          <TestimonialCard testimonial={testimonials[2]} fullWidth />
        </motion.div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  fullWidth?: boolean;
}

const TestimonialCard = ({ testimonial, fullWidth }: TestimonialCardProps) => {
  const renderText = () => {
    const parts = testimonial.text.split(testimonial.highlightedText);
    return (
      <>
        <span className="text-primary font-bold">{testimonial.highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative bg-card rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-elevated transition-all duration-400 group ${
        testimonial.featured 
          ? "bg-gradient-to-br from-card to-primary/[0.03] shadow-lg ring-1 ring-primary/10" 
          : "border border-border/30"
      } ${fullWidth ? "w-full" : ""}`}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-10 h-10 text-primary fill-primary" />
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-1.5 mb-8">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Star className="w-5 h-5 fill-secondary text-secondary drop-shadow-sm" />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-center text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
        "{renderText()}"
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-center gap-4">
        <div className="text-left">
          <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          <img
            src={testimonial.avatarImage}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover ring-3 ring-primary/20 shadow-soft"
          />
          {testimonial.featured && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center shadow-sm">
              <Star className="w-3 h-3 fill-white text-white" />
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;