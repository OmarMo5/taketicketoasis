import { Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  highlightedText: string;
  name: string;
  location: string;
  avatarColor: string;
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
    avatarColor: "bg-primary",
  },
  {
    id: 2,
    rating: 5,
    text: "التقنية التفاعلية والمعروضات الجميلة جعلت التعلم عن الحضارة الإسلامية جذاباً لعائلتنا بأكملها. كان الأطفال مفتونين بشكل خاص بنماذج المدن ثلاثية الأبعاد.",
    highlightedText: "التقنية التفاعلية والمعروضات الجميلة",
    name: "أحمد الراشد",
    location: "زار فرع المدينة المنورة",
    avatarColor: "bg-primary",
    featured: true,
  },
  {
    id: 3,
    rating: 5,
    text: "متحف عالمي المستوى يجمع بين التكنولوجيا الحديثة والاحترام العميق للتاريخ. كانت الجولات متعددة اللغات ممتازة، والموظفون كانوا ذوي معرفة واسعة ومرحبين للغاية.",
    highlightedText: "متحف عالمي المستوى",
    name: "محمد بنزيمة",
    location: "زار فرع الرباط",
    avatarColor: "bg-secondary",
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
    <section className="py-20 md:py-28 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا يقول زوارنا
          </h2>
          <p className="text-muted-foreground text-lg">
            اكتشف تجارب الزوار من جميع أنحاء العالم
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Right column - First testimonial */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[0]} />
          </motion.div>

          {/* Left column - Featured testimonial */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[1]} />
          </motion.div>
        </motion.div>

        {/* Full width testimonial */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6"
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
        <span className="text-primary font-semibold">{testimonial.highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-card rounded-2xl p-7 shadow-card hover:shadow-soft transition-all duration-300 ${
        testimonial.featured ? "border-2 border-primary shadow-soft" : "border border-border/60"
      } ${fullWidth ? "w-full" : ""}`}
    >
      {/* Stars */}
      <div className="flex justify-center gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Star className="w-5 h-5 fill-secondary text-secondary" />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-center text-muted-foreground leading-relaxed mb-6 text-base">
        "{renderText()}"
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-center gap-4">
        <div className="text-left">
          <p className="font-bold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft`}
        >
          {testimonial.name.charAt(0)}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;