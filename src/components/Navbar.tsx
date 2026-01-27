import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import museumLogo from "@/assets/museum-logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Links for display in navbar (visual order)
  const navLinks = [
    { label: "الرئيسية", href: "#hero", id: "hero" },
    { label: "المواقع", href: "#global-locations", id: "global-locations" },
    { label: "التجربة", href: "#tour-highlights", id: "tour-highlights" },
    { label: "خطط زيارتك", href: "#plan-visit", id: "plan-visit" },
  ];

  // Sections ordered by DOM position for scroll detection
  const sectionOrder = ["hero", "tour-highlights", "plan-visit", "global-locations"];

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionOrder.map(id => ({
        id,
        element: document.getElementById(id)
      }));

      const navbarHeight = 64;
      const scrollPosition = window.scrollY + navbarHeight + 100;

      // Iterate from last to first in DOM order
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64;
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
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-soft"
    >
      <div className="container mx-auto px-4 h-18 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, "#hero", "hero")}
          className="flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105"
        >
          <img
            src={museumLogo}
            alt="المعرض والمتحف الدولي للسيرة النبوية"
            className="h-12 w-auto object-contain drop-shadow-sm"
          />
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href, link.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className={`relative text-sm font-semibold cursor-pointer transition-all duration-300 px-5 py-2.5 rounded-full ${isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                {link.label}
                {/* Active indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <a
            href="https://tickets.asc.sa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary text-primary-foreground rounded-full px-7 py-2.5 font-bold shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5">
              احجز تذكرتك
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;