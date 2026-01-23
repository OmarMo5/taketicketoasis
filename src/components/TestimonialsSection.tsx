import { Star } from "lucide-react";

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
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا يقول زوارنا
          </h2>
          <p className="text-muted-foreground text-lg">
            اكتشف تجارب الزوار من جميع أنحاء العالم
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Right column - First testimonial */}
          <div className="flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[0]} />
          </div>

          {/* Left column - Featured testimonial */}
          <div className="flex flex-col gap-6">
            <TestimonialCard testimonial={testimonials[1]} />
          </div>
        </div>

        {/* Full width testimonial */}
        <div className="mt-6">
          <TestimonialCard testimonial={testimonials[2]} fullWidth />
        </div>
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
        <span className="text-primary">{testimonial.highlightedText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`bg-card rounded-2xl p-6 shadow-card ${
        testimonial.featured ? "border-2 border-primary" : "border border-border"
      } ${fullWidth ? "w-full" : ""}`}
    >
      {/* Stars */}
      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-center text-muted-foreground leading-relaxed mb-6">
        "{renderText()}"
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-center gap-3">
        <div className="text-left">
          <p className="font-bold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
        <div
          className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-primary-foreground font-bold text-lg`}
        >
          {testimonial.name.charAt(0)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
