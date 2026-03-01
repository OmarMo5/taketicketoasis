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
    <section id="plan-visit" className="py-14 md:py-32 relative overflow-hidden">
      {/* Dark premium background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(155,20%,6%)] via-background to-[hsl(155,20%,6%)]" />
      
      {/* Ambient glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,hsl(var(--secondary)/0.06)_0%,transparent_50%)]" />
      
      {/* Edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground mb-4 md:mb-6 tracking-tight">
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
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 60px -20px hsl(var(--primary) / 0.12)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`${feature.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 text-center transition-all duration-500 border border-border/20 shadow-soft hover:shadow-elevated relative overflow-hidden group`}
            >
              {/* Subtle gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/[0.03]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ duration: 0.4 }}
                className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${feature.iconBg} rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-5 md:mb-8 shadow-lg relative group-hover:shadow-glow-primary transition-shadow duration-500`}
              >
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary-foreground" strokeWidth={1.5} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-[1.75rem] font-bold text-foreground mb-3 md:mb-5 relative group-hover:text-primary transition-colors duration-400">
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