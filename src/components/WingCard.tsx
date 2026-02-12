import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WingCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  index: number;
}

const WingCard = ({ title, description, image, icon: Icon, index }: WingCardProps) => {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl bg-card border border-primary/10 shadow-card hover:shadow-glow-primary transition-all duration-500"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-52 md:h-60">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-100"
        />
        
        {/* Subtle Bottom Gradient Only - No White Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
        
        {/* Decorative Accent Line */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-80"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        
        {/* Icon Badge */}
        <motion.div
          className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-background/80 backdrop-blur-sm border border-border/30 flex items-center justify-center shadow-soft"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
        </motion.div>

        {/* Wing Number Badge */}
        {/* <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-border/30 shadow-soft">
          <span className="text-xs font-bold text-primary">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div> */}
      </div>

      {/* Content */}
      <div className="relative p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2.5 leading-relaxed group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Hover Reveal Arrow */}
        <motion.div
          className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.article>
  );
};

export default WingCard;
