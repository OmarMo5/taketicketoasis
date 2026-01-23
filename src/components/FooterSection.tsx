import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

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

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">م</span>
              </div>
              <span className="font-bold text-xl">متحف السيرة النبوية</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              متحف عالمي يحتفي بالتراث الإسلامي ويروي قصة الرسول ﷺ من خلال أحدث التقنيات والمعروضات التفاعلية.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="font-bold text-lg mb-4">فروعنا</h3>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch.label}>
                  <a
                    href={branch.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {branch.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  مكة المكرمة، المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70 text-sm" dir="ltr">
                  +966 12 345 6789
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  info@seerah-museum.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 متحف السيرة النبوية. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
