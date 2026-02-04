import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import museumLogo from "@/assets/museum-logo.png";

const FooterSection = () => {
  const quickLinks = [
    { label: "الرئيسية", href: "#" },
    { label: "عن المتحف", href: "#" },
    { label: "المعارض", href: "#" },
    { label: "الفعاليات", href: "#" },
    { label: "تواصل معنا", href: "#" },
  ];

  const branches = [
    { label: "فرع مكة المكرمة", href: "#" },
    { label: "فرع المدينة المنورة", href: "#" },
    { label: "فرع الرباط", href: "#" },
    { label: "فرع نواكشوط", href: "#" },
    { label: "فرع داكار", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <footer className="bg-gradient-footer text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      
      {/* Main Footer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto px-4 py-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <a href="#" className="inline-block mb-6 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <img 
                src={museumLogo} 
                alt="المعرض والمتحف الدولي للسيرة النبوية" 
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-primary-foreground/75 text-sm leading-relaxed mb-6">
              متحف عالمي يحتفي بالتراث الإسلامي ويروي قصة الرسول ﷺ من خلال أحدث التقنيات والمعروضات التفاعلية.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 8px 20px -8px hsl(var(--secondary) / 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-all duration-400 flex items-center justify-center border border-primary-foreground/10 hover:border-secondary"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-1 right-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0.7 }}
                    whileHover={{ 
                      x: -4,
                      opacity: 1 
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-400 text-sm inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 right-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Branches */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground relative inline-block">
              فروعنا
              <span className="absolute -bottom-1 right-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {branches.map((branch, index) => (
                <li key={branch.label}>
                  <motion.a
                    href={branch.href}
                    initial={{ opacity: 0.7 }}
                    whileHover={{ 
                      x: -4,
                      opacity: 1 
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-400 text-sm inline-block relative group"
                  >
                    {branch.label}
                    <span className="absolute bottom-0 right-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-1 right-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary/30">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                </div>
                <span className="text-primary-foreground/70 text-sm group-hover:text-primary-foreground transition-colors duration-300 mt-1">
                  مكة المكرمة، المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary/30">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                </div>
                <span className="text-primary-foreground/70 text-sm group-hover:text-primary-foreground transition-colors duration-300" dir="ltr">
                  +966 12 345 6789
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary/30">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                </div>
                <span className="text-primary-foreground/70 text-sm group-hover:text-primary-foreground transition-colors duration-300">
                  info@seerah-museum.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 bg-black/10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 متحف السيرة النبوية. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors duration-300"
              >
                سياسة الخصوصية
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors duration-300"
              >
                الشروط والأحكام
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
