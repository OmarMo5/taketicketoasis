import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { 
  Box, 
  Globe, 
  Sparkles, 
  Brain, 
  Film, 
  Monitor, 
  Palette, 
  Boxes, 
  Baby, 
  Hand, 
  Glasses, 
  RotateCcw 
} from "lucide-react";

interface Technology {
  id: number;
  title: string;
  titleAr: string;
  icon: React.ElementType;
  image: string;
}

const technologies: Technology[] = [
  {
    id: 1,
    title: "Immersive Rooms",
    titleAr: "الغرف الانغماسية",
    icon: Box,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "3D Atlases",
    titleAr: "الأطالس ثلاثية الأبعاد",
    icon: Globe,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Hologram",
    titleAr: "الهولوجرام",
    icon: Sparkles,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    titleAr: "الذكاء الاصطناعي",
    icon: Brain,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Cinema Halls",
    titleAr: "قاعات السينما",
    icon: Film,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Interactive Screens",
    titleAr: "الشاشات التفاعلية",
    icon: Monitor,
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Interactive Murals",
    titleAr: "الجداريات التفاعلية",
    icon: Palette,
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "3D Models",
    titleAr: "المجسمات ثلاثية الأبعاد",
    icon: Boxes,
    image: "/placeholder.svg"
  },
  {
    id: 9,
    title: "Interactive Rooms for Children",
    titleAr: "غرف تفاعلية للأطفال",
    icon: Baby,
    image: "/placeholder.svg"
  },
  {
    id: 10,
    title: "Interactive Artifacts",
    titleAr: "المقتنيات التفاعلية",
    icon: Hand,
    image: "/placeholder.svg"
  },
  {
    id: 11,
    title: "Virtual Reality (VR)",
    titleAr: "الواقع الافتراضي",
    icon: Glasses,
    image: "/placeholder.svg"
  },
  {
    id: 12,
    title: "Interactive Models",
    titleAr: "النماذج التفاعلية",
    icon: RotateCcw,
    image: "/placeholder.svg"
  }
];

const TechnologyCard = ({ tech, index }: { tech: Technology; index: number }) => {
  const Icon = tech.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-3"
    >
      <div className="group relative h-[320px] rounded-2xl overflow-hidden bg-card border border-border/30 shadow-soft hover:shadow-elevated transition-all duration-500">
        {/* Image Container */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${tech.image})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          {/* Brand Color Accent on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6">
          {/* Icon Badge */}
          <div className="absolute top-5 right-5">
            <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-500">
              <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Number Badge */}
          <div className="absolute top-5 left-5">
            <span className="text-white/30 text-5xl font-bold">
              {String(tech.id).padStart(2, '0')}
            </span>
          </div>
          
          {/* Text Content */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-foreground transition-colors duration-300">
              {tech.titleAr}
            </h3>
            <p className="text-sm text-white/70 font-light">
              {tech.title}
            </p>
          </div>
          
          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>
    </motion.div>
  );
};

const TechnologiesSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      direction: "rtl",
    },
    [autoplayPlugin]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            تقنيات مبتكرة
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            تقنيات المتحف
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف أحدث التقنيات التفاعلية التي تجعل تجربتك في المتحف فريدة ومميزة
          </p>
        </motion.div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-3">
              {technologies.map((tech, index) => (
                <TechnologyCard key={tech.id} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Pause Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0.8 
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-6 bg-white rounded-full" />
                <div className="w-1.5 h-6 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
