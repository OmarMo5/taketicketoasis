import { Star, Calendar, Users } from "lucide-react";

const PlanVisitSection = () => {
  const features = [
    {
      id: 1,
      icon: Star,
      title: "آمن ومضمون",
      description: "احجز بثقة من خلال نظام الدفع المشفر الذي يحمي معلوماتك الشخصية",
      bgColor: "bg-card-pink",
      iconBg: "bg-gradient-pink",
    },
    {
      id: 2,
      icon: Calendar,
      title: "احجز مسبقاً",
      description: "احجز التاريخ والوقت المفضل لديك عبر الإنترنت لضمان التوفر وتجنب الانتظار في الطوابير",
      bgColor: "bg-card-blue",
      iconBg: "bg-gradient-blue",
    },
    {
      id: 3,
      icon: Users,
      title: "للجميع",
      description: "مثال للعائلات والطلاب والباحثين والزوار من جميع أنحاء العالم الذين يسعون لاستكشاف التراث الإسلامي",
      bgColor: "bg-card-green",
      iconBg: "bg-gradient-green",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خطط زيارتك
          </h2>
          <p className="text-muted-foreground">
            كل ما تحتاج معرفته لتجربة متحف غنية
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.bgColor} rounded-3xl p-8 text-center transition-transform hover:-translate-y-1 duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanVisitSection;
