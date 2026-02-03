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
      <div className="group relative h-[300px] rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/20 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(25,155,154,0.25)] hover:-translate-y-2">
        {/* Image Container */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
            style={{ backgroundImage: `url(${tech.image})` }}
          />
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-5">
          {/* Top Section - Icon */}
          <div className="flex justify-end">
            <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(25,155,154,0.3)]">
              <Icon className="w-5 h-5 text-white/90 transition-colors duration-500 group-hover:text-primary" strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Bottom Section - Text */}
          <div className="space-y-1.5">
            {/* Number */}
            <span className="text-white/20 text-4xl font-bold block leading-none">
              {String(tech.id).padStart(2, '0')}
            </span>
            
            {/* Titles */}
            <h3 className="text-lg font-semibold text-white leading-tight">
              {tech.titleAr}
            </h3>
            <p className="text-xs text-white/60 font-light tracking-wide">
              {tech.title}
            </p>
            
            {/* Accent Line */}
            <div className="pt-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 group-hover:w-20" />
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

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px]" />
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

          {/* Minimal Progress Bar */}
          <div className="mt-10 flex justify-center">
            <div className="relative w-48 h-0.5 bg-border/40 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                style={{ width: `${((selectedIndex + 1) / technologies.length) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <span className="mr-4 text-xs text-muted-foreground tabular-nums">
              {String(selectedIndex + 1).padStart(2, '0')} / {technologies.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
