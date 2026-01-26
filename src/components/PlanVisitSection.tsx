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
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground mb-6">
            خطط زيارتك
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            كل ما تحتاج معرفته لتجربة متحف غنية
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`${feature.bgColor} rounded-3xl p-10 text-center transition-all duration-400 border border-border/30 shadow-card hover:shadow-elevated relative overflow-hidden group`}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-soft relative`}
              >
                <feature.icon className="w-9 h-9 text-primary-foreground" strokeWidth={1.75} />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-5 relative">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base relative">
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