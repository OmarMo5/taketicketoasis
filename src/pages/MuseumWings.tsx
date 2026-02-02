import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WingCard from "@/components/WingCard";
import {
  Sparkles,
  Armchair,
  Route,
  Heart,
  Baby,
  Stethoscope,
  Crown,
  Film,
  Clapperboard,
  History,
  Home,
  Eye,
  Users,
  Plus,
} from "lucide-react";

const wingsData = [
  {
    title: "التحيات لله، عزَّ وجلَّ",
    description: "تعريف شامل بالله وأسمائه وصفاته ودلائل قدرته، مستخلص من مئة ألف مادة وموضوع.",
    icon: Sparkles,
    isLarge: true,
  },
  {
    title: "أثاث النبي ﷺ ومقتنياته",
    description: "تجربة فريدة تعرض كل ما استخدمه النبي ﷺ من أثاث وأوانٍ ومقتنيات مع تعريف بها وما ورد عنها في السنة.",
    icon: Armchair,
  },
  {
    title: "طريق الهجرة",
    description: "عرض لمسار هجرة النبي ﷺ إلى المدينة وأهم المواقف التي مر بها.",
    icon: Route,
  },
  {
    title: "النبي ﷺ والمرأة",
    description: "عرض شامل يبرز مكانة المرأة في زمن النبي ﷺ ولائحة شرف تضم أكثر من 350 تشريفًا.",
    icon: Heart,
  },
  {
    title: "النبي ﷺ والطفل",
    description: "عرض يُظهر أكثر من 250 موقفًا محمودًا للأطفال مع النبي ﷺ.",
    icon: Baby,
  },
  {
    title: "خيمة الطب النبوي",
    description: "عرض علمي لما ورد في القرآن والسنة عن الأمراض والعلاج والأطعمة المفيدة.",
    icon: Stethoscope,
    isLarge: true,
  },
  {
    title: "فضائل النبي ﷺ وشمائله",
    description: "تفاصيل عن أسماء النبي ﷺ وصفاته ولباسه وطعامه وهيئته.",
    icon: Crown,
  },
  {
    title: "النبي ﷺ كأنك معه",
    description: "عرض إبداعي لحياة النبي ﷺ في مكة والمدينة باستخدام تقنيات مميزة.",
    icon: Film,
  },
  {
    title: "النبي ﷺ كأنك معه (نسخة مختلفة)",
    description: "نفس الفكرة لكن بتجربة عرض مختلفة بصريًا.",
    icon: Clapperboard,
  },
  {
    title: "السلام عليك أيها النبي ﷺ",
    description: "تلخيص زمني لأحداث السيرة النبوية من الميلاد حتى الوفاة.",
    icon: History,
    isLarge: true,
  },
  {
    title: "الحجرة النبوية الشريفة",
    description: "وصف دقيق للحجرة الشريفة ومساحتها وأحداثها.",
    icon: Home,
  },
  {
    title: "النبي ﷺ كأنك تراه",
    description: "عرض شامل لحياة النبي ﷺ وصفاته ومعالم شخصيته.",
    icon: Eye,
  },
  {
    title: "الأنبياء كأنك تراهم",
    description: "عرض مميز للأنبياء، أزمانهم، معجزاتهم، وآدابهم.",
    icon: Users,
  },
  {
    title: "جناح إضافي",
    description: "يُترك بتصميم متناسق لعرض جناح مستقبلي.",
    icon: Plus,
  },
];

const MuseumWings = () => {
  return (
    <div className="min-h-screen bg-background font-arabic">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Element */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              أجنحة المتحف
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              رحلة روحية وتاريخية عبر 14 جناحًا، كل منها يروي قصة فريدة من قصص الإيمان والتاريخ الإسلامي
            </p>

            {/* Stats */}
            <motion.div
              className="flex items-center justify-center gap-8 mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">14</span>
                <span className="text-sm text-muted-foreground">جناح متميز</span>
              </div>
              <div className="h-12 w-px bg-border/50" />
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-secondary">100K+</span>
                <span className="text-sm text-muted-foreground">مادة علمية</span>
              </div>
              <div className="h-12 w-px bg-border/50" />
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">∞</span>
                <span className="text-sm text-muted-foreground">تجربة روحية</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wings Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {wingsData.map((wing, index) => (
              <WingCard
                key={index}
                title={wing.title}
                description={wing.description}
                image="/placeholder.svg"
                icon={wing.icon}
                index={index}
                isLarge={wing.isLarge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/30 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ابدأ رحلتك الروحية
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              احجز تذكرتك الآن واستمتع بتجربة فريدة تجمع بين التاريخ والروحانية
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              احجز تذكرتك الآن
            </motion.button>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default MuseumWings;
