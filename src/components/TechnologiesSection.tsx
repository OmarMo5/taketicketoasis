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

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(179,72%,8%)] via-[hsl(162,50%,6%)] to-[hsl(179,72%,10%)]" />
        
        {/* Soft radial glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[hsl(179,72%,35%,0.08)] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[hsl(145,65%,42%,0.06)] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[hsl(162,60%,20%,0.04)] rounded-full blur-[100px]" />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(179,72%,50%) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Top and bottom fade for seamless blending */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
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
          <span className="inline-block px-5 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-5 border border-primary/30 backdrop-blur-sm">
            تقنيات مبتكرة
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            تقنيات المتحف
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
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
                    ? 'w-3 h-3 bg-gradient-to-r from-primary to-secondary shadow-[0_0_12px_rgba(25,155,154,0.5)]' 
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
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
