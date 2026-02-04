import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { 
  Layers,
  Globe2,
  Scan,
  BrainCircuit,
  Clapperboard,
  TouchpadIcon,
  ImagePlus,
  Box,
  Gamepad2,
  Gem,
  View,
  Cpu
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
    icon: Layers,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "3D Atlases",
    titleAr: "الأطالس ثلاثية الأبعاد",
    icon: Globe2,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Hologram",
    titleAr: "الهولوجرام",
    icon: Scan,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    titleAr: "الذكاء الاصطناعي",
    icon: BrainCircuit,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Cinema Halls",
    titleAr: "قاعات السينما",
    icon: Clapperboard,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Interactive Screens",
    titleAr: "الشاشات التفاعلية",
    icon: TouchpadIcon,
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Interactive Murals",
    titleAr: "الجداريات التفاعلية",
    icon: ImagePlus,
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "3D Models",
    titleAr: "المجسمات ثلاثية الأبعاد",
    icon: Box,
    image: "/placeholder.svg"
  },
  {
    id: 9,
    title: "Interactive Rooms for Children",
    titleAr: "غرف تفاعلية للأطفال",
    icon: Gamepad2,
    image: "/placeholder.svg"
  },
  {
    id: 10,
    title: "Interactive Artifacts",
    titleAr: "المقتنيات التفاعلية",
    icon: Gem,
    image: "/placeholder.svg"
  },
  {
    id: 11,
    title: "Virtual Reality (VR)",
    titleAr: "الواقع الافتراضي",
    icon: View,
    image: "/placeholder.svg"
  },
  {
    id: 12,
    title: "Interactive Models",
    titleAr: "النماذج التفاعلية",
    icon: Cpu,
    image: "/placeholder.svg"
  }
];

const TechnologyCard = ({ tech }: { tech: Technology }) => {
  const Icon = tech.icon;
  
  return (
    <div className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] px-2 md:px-3">
      <div className="group relative h-[300px] rounded-2xl overflow-hidden bg-card border border-border/40 shadow-sm transition-all duration-700 hover:shadow-[0_16px_48px_-12px_rgba(25,155,154,0.15)] hover:-translate-y-1.5">
        {/* Image Container */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-105"
            style={{ backgroundImage: `url(${tech.image})` }}
          />
          {/* Refined Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(179,40%,12%,0.9)] via-[hsl(179,30%,20%,0.5)] to-transparent transition-opacity duration-500" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-5">
          {/* Top Section - Icon */}
          <div className="flex justify-end">
            <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/25 group-hover:border-primary/50">
              <Icon className="w-4.5 h-4.5 text-white/90 transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Bottom Section - Text */}
          <div className="space-y-1">
            {/* Number */}
            <span className="text-white/15 text-3xl font-bold block leading-none">
              {String(tech.id).padStart(2, '0')}
            </span>
            
            {/* Titles */}
            <h3 className="text-lg font-semibold text-white leading-tight">
              {tech.titleAr}
            </h3>
            <p className="text-xs text-white/65 font-light tracking-wide">
              {tech.title}
            </p>
            
            {/* Accent Line */}
            <div className="pt-2.5">
              <div className="h-0.5 w-10 bg-gradient-to-r from-primary to-secondary/80 rounded-full transition-all duration-500 group-hover:w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnologiesSection = () => {
  const autoplayPlugin = Autoplay({
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      direction: "rtl",
      dragFree: true,
    },
    [autoplayPlugin]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("scroll", onScroll);
    emblaApi.on("select", onScroll);
    onScroll();
  }, [emblaApi, onScroll]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Soft, Elegant Background */}
      <div className="absolute inset-0">
        {/* Light neutral base with very subtle tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(179,25%,97%)] via-[hsl(162,20%,96%)] to-[hsl(179,25%,97%)]" />
        
        {/* Very soft accent glows - barely visible */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[hsl(179,72%,35%,0.03)] rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[hsl(145,65%,42%,0.02)] rounded-full blur-[180px]" />
        
        {/* Subtle pattern - very low opacity */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(179,50%,50%) 0.5px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Seamless edge blending */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5 border border-primary/20">
            تقنيات مبتكرة
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            تقنيات المتحف
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            اكتشف أحدث التقنيات التفاعلية التي تجعل تجربتك في المتحف فريدة ومميزة
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -mx-2 md:-mx-3">
              {technologies.map((tech) => (
                <TechnologyCard key={tech.id} tech={tech} />
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="mt-10 flex justify-center items-center gap-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === selectedIndex 
                    ? 'w-2.5 h-2.5 bg-primary shadow-[0_0_8px_rgba(25,155,154,0.4)]' 
                    : 'w-2 h-2 bg-foreground/15 hover:bg-foreground/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
