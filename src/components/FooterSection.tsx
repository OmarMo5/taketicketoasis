import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(165deg, hsl(155, 22%, 4%), hsl(160, 20%, 3%), hsl(155, 18%, 2%))' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="text-foreground/80 hover:text-primary text-sm font-medium transition-colors duration-300"
          >
            {t("footer.home")}
          </motion.a>

          <motion.a
            href="mailto:info@seerah-museum.com"
            whileHover={{ y: -2 }}
            className="text-foreground/80 hover:text-primary text-sm transition-colors duration-300"
          >
            info@seerah-museum.com
          </motion.a>

          <motion.a
            href="https://wa.me/966123456789"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="text-foreground/80 hover:text-primary text-sm transition-colors duration-300"
            dir="ltr"
          >
            +966 12 345 6789
          </motion.a>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-6">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
