import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navLinks = [
    { label: "الرئيسية", href: "#" },
    { label: "المواقع", href: "#" },
    { label: "التجربة", href: "#" },
    { label: "خطط زيارتك", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <span className="text-secondary-foreground font-bold text-lg">!</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground text-sm">المتحف الدولي</span>
            <span className="text-xs text-muted-foreground">للسيرة النبوية</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
          احجز تذكرتك
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
