import { ShieldCheck, CalendarClock, Globe2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const PlanVisitSection = () => {
  const features = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "آمن ومضمون",
      description: "احجز بثقة من خلال نظام الدفع المشفر الذي يحمي معلوماتك الشخصية",
      bgColor: "bg-gradient-to-br from-primary/[0.08] to-primary/[0.02]",
      iconBg: "bg-gradient-to-br from-primary to-primary/80",
    },
    {
      id: 2,
      icon: CalendarClock,
      title: "احجز مسبقاً",
      description: "احجز التاريخ والوقت المفضل لديك عبر الإنترنت لضمان التوفر وتجنب الانتظار في الطوابير",
      bgColor: "bg-gradient-to-br from-secondary/[0.08] to-secondary/[0.02]",
      iconBg: "bg-gradient-to-br from-secondary to-secondary/80",
    },
    {
      id: 3,
      icon: Globe2,
      title: "للجميع",
      description: "مثالي للعائلات والطلاب والباحثين والزوار من جميع أنحاء العالم الذين يسعون لاستكشاف التراث الإسلامي",
      bgColor: "bg-gradient-to-br from-primary/[0.06] via-secondary/[0.04] to-transparent",
      iconBg: "bg-gradient-to-br from-primary via-primary/90 to-secondary/80",
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
    <section id="plan-visit" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground mb-6 tracking-tight">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`${feature.bgColor} rounded-3xl p-8 lg:p-10 text-center transition-all duration-400 border border-border/20 shadow-soft hover:shadow-elevated relative overflow-hidden group`}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`w-20 h-20 lg:w-24 lg:h-24 ${feature.iconBg} rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg relative`}
              >
                <feature.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary-foreground" strokeWidth={1.5} />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl lg:text-[1.75rem] font-bold text-foreground mb-5 relative">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg relative">
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