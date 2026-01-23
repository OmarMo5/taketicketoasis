import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Monitor, Box, Layers, Clapperboard } from "lucide-react";

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

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-accent/50 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">السيرة قائك تعيشها</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">المتحف الدولي</span>
          <br />
          <span className="text-secondary">للسيرة النبوية</span>
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          اختبر الإرث العميق للنبي محمد ﷺ من خلال التكنولوجيا الأصيلة والقصص الغامرة عبر
          <br />
          خمسة مواقع مرموقة حول العالم
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {featureTags.map((tag) => (
            <div
              key={tag.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:border-primary/50 transition-colors"
            >
              <tag.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">{tag.label}</span>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-soft">
            احجز زيارتك
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>

        {/* Language Selector */}
        <div className="flex flex-wrap justify-center items-center gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <span>%</span>
            متاح باللغات:
          </span>
          {languages.map((lang) => (
            <span
              key={lang}
              className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
