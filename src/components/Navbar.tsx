import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import museumLogo from "@/assets/museum-logo.png";

const Navbar = () => {
  const navLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "المواقع", href: "#global-locations" },
    { label: "التجربة", href: "#tour-highlights" },
    { label: "خطط زيارتك", href: "#plan-visit" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 64; // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-105">
          <img 
            src={museumLogo} 
            alt="المعرض والمتحف الدولي للسيرة النبوية" 
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium link-underline cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-button hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
            احجز تذكرتك
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;