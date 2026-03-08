import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const languages: { code: Language; label: string; nativeLabel: string }[] = [
  { code: "ar", label: "Arabic", nativeLabel: "العربية" },
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "fr", label: "French", nativeLabel: "Français" },
  { code: "tr", label: "Turkish", nativeLabel: "Türkçe" },
  { code: "ru", label: "Russian", nativeLabel: "Русский" },
  { code: "ur", label: "Urdu", nativeLabel: "اردو" },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === language)!;

  return (
    <div ref={ref} className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-primary/40 hover:bg-accent/40 transition-all duration-300"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="hidden sm:inline">{current.nativeLabel}</span>
        <span className="sm:hidden">{current.code.toUpperCase()}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 min-w-[140px] rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-lg overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                  language === lang.code
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-accent/50"
                }`}
              >
                <span>{lang.nativeLabel}</span>
                {language === lang.code && (
                  <span className="mr-auto text-primary text-xs">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
