import { Star, Calendar, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";

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
      description: "مثالي للعائلات والطلاب والباحثين والزوار من جميع أنحاء العالم الذين يسعون لاستكشاف التراث الإسلامي",
      bgColor: "bg-card-green",
      iconBg: "bg-gradient-green",
    },
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="plan-visit" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            خطط زيارتك
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            كل ما تحتاج معرفته لتجربة متحف غنية
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${feature.bgColor} rounded-3xl p-10 text-center transition-all duration-400 border border-border/20 shadow-card hover:shadow-elevated`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-18 h-18 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-7 shadow-soft`}
              >
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlanVisitSection;