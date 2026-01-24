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
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto px-4 py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <a href="#" className="inline-block mb-5 group cursor-pointer transition-transform duration-300 hover:scale-105">
              <img 
                src={museumLogo} 
                alt="المعرض والمتحف الدولي للسيرة النبوية" 
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              متحف عالمي يحتفي بالتراث الإسلامي ويروي قصة الرسول ﷺ من خلال أحدث التقنيات والمعروضات التفاعلية.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary transition-all duration-300 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-5 text-primary-foreground">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: -4 }}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 text-sm inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Branches */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-5 text-primary-foreground">فروعنا</h3>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch.label}>
                  <motion.a
                    href={branch.href}
                    whileHover={{ x: -4 }}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 text-sm inline-block"
                  >
                    {branch.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-5 text-primary-foreground">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-primary-foreground/70 text-sm group-hover:text-primary-foreground transition-colors duration-300">
                  مكة المكرمة، المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-primary-foreground/70 text-sm group-hover:text-primary-foreground transition-colors duration-300" dir="ltr">
                  +966 12 345 6789
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-primary-foreground/70 text-sm group-hover:text-primary-foreground transition-colors duration-300">
                  info@seerah-museum.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 متحف السيرة النبوية. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-primary-foreground/60 hover:text-primary text-sm transition-colors duration-300"
              >
                سياسة الخصوصية
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-primary-foreground/60 hover:text-primary text-sm transition-colors duration-300"
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