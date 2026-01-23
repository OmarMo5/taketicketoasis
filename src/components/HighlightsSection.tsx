import { ArrowLeft } from "lucide-react";
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

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">حان للاستكشاف</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            أبرز معالم جولتك
          </h2>
          <p className="text-muted-foreground">
            اكتشف الأقسام الأسرة في معرضنا
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground leading-relaxed">
                  {item.title}
                </h3>
                <div className={`w-8 h-8 rounded-full ${item.iconColor} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs">✦</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
