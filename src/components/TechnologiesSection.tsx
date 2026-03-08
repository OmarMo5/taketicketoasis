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
import { useLanguage } from "@/contexts/LanguageContext";
import pict1 from "../../src/assets/tech/Picture1.png"
import pict2 from "../../src/assets/tech/Picture2.png"
import pict3 from "../../src/assets/tech/Picture3.png"
import pict4 from "../../src/assets/tech/Picture4.png"
import pict5 from "../../src/assets/tech/Picture5.png"
import pict6 from "../../src/assets/tech/Picture6.png"
import pict7 from "../../src/assets/tech/Picture7.png"
import pict8 from "../../src/assets/tech/Picture8.png"
import pict9 from "../../src/assets/tech/Picture9.png"
import pict10 from "../../src/assets/tech/Picture10.png"
import pict11 from "../../src/assets/tech/Picture11.png"
import pict12 from "../../src/assets/tech/Picture12.png"
import pict13 from "../../src/assets/tech/Picture1313.png"

interface Technology {
  id: number;
  titleEnKey: string;
  titleArKey: string;
  icon: React.ElementType;
  image: string;
}

const technologies: Technology[] = [
  { id: 1, titleEnKey: "Immersive Rooms", titleArKey: "tech.immersiveRooms", icon: Layers, image: pict1 },
  { id: 2, titleEnKey: "3D Atlases", titleArKey: "tech.atlases3d", icon: Globe2, image: pict2 },
  { id: 3, titleEnKey: "Hologram", titleArKey: "tech.hologram", icon: Scan, image: pict3 },
  { id: 4, titleEnKey: "Artificial Intelligence", titleArKey: "tech.ai", icon: BrainCircuit, image: pict4 },
  { id: 5, titleEnKey: "Cinema Halls", titleArKey: "tech.cinemaHalls", icon: Clapperboard, image: pict5 },
  { id: 6, titleEnKey: "Interactive Screens", titleArKey: "tech.interactiveScreens", icon: TouchpadIcon, image: pict6 },
  { id: 7, titleEnKey: "Interactive Murals", titleArKey: "tech.interactiveMurals", icon: ImagePlus, image: pict7 },
  { id: 8, titleEnKey: "3D Models", titleArKey: "tech.models3d", icon: Box, image: pict8 },
  { id: 9, titleEnKey: "Interactive Rooms for Children", titleArKey: "tech.childrenRooms", icon: Gamepad2, image: pict9 },
  { id: 10, titleEnKey: "Interactive Artifacts", titleArKey: "tech.interactiveArtifacts", icon: Gem, image: pict10 },
  { id: 11, titleEnKey: "Virtual Reality (VR)", titleArKey: "tech.vr", icon: View, image: pict11 },
  { id: 12, titleEnKey: "Interactive Models", titleArKey: "tech.interactiveModels", icon: Cpu, image: pict12 },
];

const TechnologyCard = ({ tech }: { tech: Technology }) => {
  const Icon = tech.icon;
  const { t, language } = useLanguage();
  
  return (
    <div className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] px-2 md:px-3">
      <div className="group relative h-[300px] rounded-2xl overflow-hidden bg-card border border-border/40 shadow-sm transition-all duration-700 hover:shadow-[0_16px_48px_-12px_rgba(30,120,80,0.15)] hover:-translate-y-1.5">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-105"
            style={{ backgroundImage: `url(${tech.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(155,40%,10%,0.9)] via-[hsl(160,30%,15%,0.5)] to-transparent transition-opacity duration-500" />
        </div>
        
        <div className="relative h-full flex flex-col justify-between p-5">
          <div className="flex justify-end">
            <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/25 group-hover:border-primary/50">
              <Icon className="w-4.5 h-4.5 text-white/90 transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white leading-tight">
              {t(tech.titleArKey)}
            </h3>
            <p className="text-xs text-white/65 font-light tracking-wide">
              {tech.titleEnKey}
            </p>
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
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

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
      direction: isRtl ? "rtl" : "ltr",
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
    <section id="technologies" className="py-14 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(155,20%,6%)] via-[hsl(160,18%,5%)] to-[hsl(155,20%,6%)]" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/4 rounded-full blur-[160px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(155,50%,40%) 0.5px, transparent 0)`,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5 border border-primary/20">
            {t("tech.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("tech.sectionTitle")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("tech.sectionDescription")}
          </p>
        </motion.div>

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

          <div className="mt-10 flex justify-center items-center gap-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === selectedIndex 
                    ? 'w-2.5 h-2.5 bg-primary shadow-[0_0_8px_rgba(30,120,80,0.4)]' 
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
