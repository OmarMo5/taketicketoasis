import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WingCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  index: number;
  isLarge?: boolean;
}

const WingCard = ({ title, description, image, icon: Icon, index, isLarge = false }: WingCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border/20 shadow-soft hover:shadow-elevated transition-all duration-500 ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${isLarge ? "h-72 md:h-96" : "h-56 md:h-64"}`}>
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
        
        {/* Decorative Accent Line */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-80"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
        />
        
        {/* Icon Badge */}
        <motion.div
          className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm border border-border/30 flex items-center justify-center shadow-soft"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8">
        {/* Wing Number */}
        <span className="absolute -top-8 right-6 text-6xl md:text-7xl font-bold text-primary/5 select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
        
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-relaxed group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Hover Reveal Arrow */}
        <motion.div
          className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span className="text-sm font-medium">استكشف الجناح</span>
          <svg
            className="w-4 h-4 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.article>
  );
};

export default WingCard;
