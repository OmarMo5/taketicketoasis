import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { label: "الرئيسية", href: "#" },
    { label: "المواقع", href: "#" },
    { label: "التجربة", href: "#" },
    { label: "خطط زيارتك", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-button transition-transform duration-300 group-hover:scale-105">
            <span className="text-primary-foreground font-bold text-lg">م</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground text-sm transition-colors group-hover:text-primary">المتحف الدولي</span>
            <span className="text-xs text-muted-foreground">للسيرة النبوية</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium link-underline"
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