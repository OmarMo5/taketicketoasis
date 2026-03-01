import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  {
    id: 4,
    rating: 5,
    text: "زيارة روحانية لا تُنسى! شعرت بالقرب من سيرة النبي ﷺ بطريقة لم أتخيلها من قبل. المكان يفيض بالسكينة والإيمان.",
    highlightedText: "زيارة روحانية لا تُنسى!",
    name: "عائشة المنصوري",
    location: "زارت فرع دبي",
    avatarImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    rating: 5,
    text: "أفضل تجربة ثقافية مررت بها. التفاصيل الدقيقة في كل جناح تظهر مدى الاهتمام والحب الذي بُني به هذا المتحف.",
    highlightedText: "أفضل تجربة ثقافية مررت بها.",
    name: "خالد العتيبي",
    location: "زار فرع جدة",
    avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    rating: 5,
    text: "أخذت والديّ في جولة وكانا سعيدين جداً. التصميم يراعي جميع الأعمار ويقدم المعلومات بأسلوب سلس ومؤثر.",
    highlightedText: "التصميم يراعي جميع الأعمار",
    name: "سارة القحطاني",
    location: "زارت فرع الرياض",
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 7,
    rating: 5,
    text: "تجربة تعليمية رائعة للأطفال والكبار على حد سواء. أنصح كل عائلة بزيارة هذا المتحف.",
    highlightedText: "تجربة تعليمية رائعة",
    name: "يوسف الحربي",
    location: "زار فرع الدمام",
    avatarImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 8,
    rating: 5,
    text: "المتحف يجسد السيرة النبوية بشكل مبهر. خرجت وأنا أشعر بالفخر بتاريخنا الإسلامي العريق.",
    highlightedText: "المتحف يجسد السيرة النبوية بشكل مبهر.",
    name: "نورة السبيعي",
    location: "زارت فرع الكويت",
    avatarImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
];

const TESTIMONIALS_PER_PAGE = 3;

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalPages = Math.ceil(testimonials.length / TESTIMONIALS_PER_PAGE);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextPage();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextPage]);

  const currentTestimonials = testimonials.slice(
    currentPage * TESTIMONIALS_PER_PAGE,
    (currentPage + 1) * TESTIMONIALS_PER_PAGE
  );

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(155,20%,6%)] via-background to-[hsl(155,20%,6%)]" />
      
      {/* Ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-secondary/4 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent" />

      <div
        className="max-w-6xl mx-auto"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
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

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border/40 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            aria-label="التالي"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={nextPage}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border/40 shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            aria-label="السابق"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
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
              aria-label={`الصفحة ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Counter */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          {currentPage + 1} من {totalPages} صفحات
        </p>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
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
      whileHover={{
        y: -6,
        boxShadow: "0 20px 50px -15px hsl(var(--primary) / 0.12)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 group h-full flex flex-col ${
        testimonial.featured
          ? "bg-gradient-to-br from-card to-primary/[0.03] ring-1 ring-primary/10"
          : "border border-border/20"
      }`}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-[0.08] group-hover:opacity-15 transition-opacity duration-500">
        <Quote className="w-8 h-8 text-primary fill-primary" />
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-center text-muted-foreground leading-relaxed mb-6 text-sm md:text-base flex-1">
        "{renderText()}"
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/20">
        <div className="text-left flex-1">
          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-400">
            {testimonial.name}
          </p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
        <div className="relative">
          <Avatar className="w-12 h-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-400">
            <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          {testimonial.featured && (
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