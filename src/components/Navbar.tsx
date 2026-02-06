import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import museumLogo from "@/assets/museum-logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Links for display in navbar (visual order)
  const navLinks = [
    { label: "الرئيسية", href: "#hero", id: "hero", isSection: true },
    { label: "أجنحة المتحف", href: "#tour-highlights", id: "tour-highlights", isSection: true },
    { label: "المواقع", href: "#global-locations", id: "global-locations", isSection: true },
    { label: "التقنيات", href: "#technologies", id: "technologies", isSection: true },
    { label: "خطط زيارتك", href: "#plan-visit", id: "plan-visit", isSection: true },
  ];
  // Sections ordered by DOM position for scroll detection
  const sectionOrder = ["hero", "tour-highlights", "technologies", "plan-visit", "global-locations"];

  // Scroll detection for active section (only on homepage)
  useEffect(() => {
    if (!isHomePage) return;
    
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
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    
    if (!link.isSection) {
      // Navigate to different page
      navigate(link.href);
      return;
    }
    
    if (!isHomePage) {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(link.id);
        if (element) {
          const navbarHeight = 64;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    setActiveSection(link.id);
    const element = document.getElementById(link.id);
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_-10px_hsl(var(--primary)/0.15)]"
    >
      <div className="container mx-auto px-4 h-18 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={handleLogoClick}
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
            const isActive = (!link.isSection && location.pathname === link.href) || 
                             (link.isSection && isHomePage && activeSection === link.id);
            return (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ y: -1 }}
                className={`relative text-sm font-semibold cursor-pointer transition-all duration-400 px-5 py-2.5 rounded-full ${isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                {link.label}
                {/* Active indicator dot with glow */}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_2px_hsl(var(--primary)/0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/30 rounded-full transition-all duration-300 group-hover:w-1/2" />
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
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary text-primary-foreground rounded-full px-7 py-2.5 font-bold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-400">
                احجز تذكرتك
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;