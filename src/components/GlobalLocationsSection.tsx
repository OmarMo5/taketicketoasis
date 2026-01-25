import { useState } from "react";
import { Check, Clock, Shield, MapPin, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import locationMecca from "@/assets/location-mecca.jpg";
import locationMedina from "@/assets/location-medina.jpg";
import locationRabat from "@/assets/location-rabat.jpg";
import locationNouakchott from "@/assets/location-nouakchott.jpg";
import locationDakar from "@/assets/location-dakar.jpg";

interface LocationData {
  id: string;
  name: string;
  country: string;
  image: string;
  address: string;
  price: string;
  currency: string;
  includes: string[];
  duration: string;
  hours: string;
  closedDay: string;
  cancellationHours: string;
  cancellationPolicy: string[];
}

const locationsData: LocationData[] = [
  {
    id: "mecca",
    name: "مكة المكرمة",
    country: "المملكة العربية السعودية",
    image: locationMecca,
    address: "وقف الملك عبدالعزيز رحمه الله برج الساعة الدور الثاني",
    price: "70",
    currency: "ر.س",
    includes: [
      "جولة إرشادية باللغة التي تفضلها",
      "الدخول إلى جميع أقسام المعرض الـ 60+",
      "تجربة العروض التفاعلية والنماذج ثلاثية الأبعاد",
      "تجربة قاعة السينما",
      "كتيب إرشادي مجاني للمتحف"
    ],
    duration: "2-3 ساعات",
    hours: "السبت - الخميس 9:00 صباحاً - 9:00 مساءً",
    closedDay: "مغلق أيام الجمعة",
    cancellationHours: "24",
    cancellationPolicy: [
      "إلغاء مجاني قبل 24 ساعة من موعد الزيارة",
      "لا يوجد استرداد للإلغاء خلال 24 ساعة",
      "إعادة الجدولة متاحة حسب التوفر"
    ]
  },
  {
    id: "medina",
    name: "المدينة المنورة",
    country: "المملكة العربية السعودية",
    image: locationMedina,
    address: "الساحة الجنوبية للمسجد النبوي الشريف مقابل الروضة",
    price: "40",
    currency: "ر.س",
    includes: [
      "جولة إرشادية باللغة التي تفضلها",
      "الدخول إلى جميع أقسام المعرض الـ 60+",
      "تجربة العروض التفاعلية والنماذج ثلاثية الأبعاد",
      "تجربة قاعة السينما",
      "كتيب إرشادي مجاني للمتحف"
    ],
    duration: "2-3 ساعات",
    hours: "السبت - الخميس 9:00 صباحاً - 9:00 مساءً",
    closedDay: "مغلق أيام الجمعة",
    cancellationHours: "24",
    cancellationPolicy: [
      "إلغاء مجاني قبل 24 ساعة من موعد الزيارة",
      "لا يوجد استرداد للإلغاء خلال 24 ساعة",
      "إعادة الجدولة متاحة حسب التوفر"
    ]
  },
  {
    id: "rabat",
    name: "الرباط",
    country: "المملكة المغربية",
    image: locationRabat,
    address: "مبنى اليونيسكو",
    price: "100",
    currency: "د.م",
    includes: [
      "جولة إرشادية باللغة التي تفضلها",
      "الدخول إلى جميع أقسام المعرض",
      "تجربة العروض التفاعلية",
      "تجربة قاعة السينما",
      "كتيب إرشادي مجاني للمتحف"
    ],
    duration: "2-3 ساعات",
    hours: "الإثنين - السبت 10:00 صباحاً - 8:00 مساءً",
    closedDay: "مغلق أيام الأحد",
    cancellationHours: "48",
    cancellationPolicy: [
      "إلغاء مجاني قبل 48 ساعة من موعد الزيارة",
      "لا يوجد استرداد للإلغاء خلال 48 ساعة",
      "إعادة الجدولة متاحة حسب التوفر"
    ]
  },
  {
    id: "nouakchott",
    name: "نواكشوط",
    country: "موريتانيا",
    image: locationNouakchott,
    address: "أدخل عنوان فرع نواكشوط هنا",
    price: "1000",
    currency: "أوقية",
    includes: [
      "جولة إرشادية باللغة التي تفضلها",
      "الدخول إلى جميع أقسام المعرض",
      "تجربة العروض التفاعلية",
      "تجربة قاعة السينما"
    ],
    duration: "2-3 ساعات",
    hours: "السبت - الخميس 9:00 صباحاً - 6:00 مساءً",
    closedDay: "مغلق أيام الجمعة",
    cancellationHours: "48",
    cancellationPolicy: [
      "إلغاء مجاني قبل 48 ساعة من موعد الزيارة",
      "لا يوجد استرداد للإلغاء خلال 48 ساعة",
      "إعادة الجدولة متاحة حسب التوفر"
    ]
  },
  {
    id: "dakar",
    name: "داكار",
    country: "السنغال",
    image: locationDakar,
    address: "أدخل عنوان فرع داكار هنا",
    price: "5000",
    currency: "فرنك",
    includes: [
      "جولة إرشادية باللغة التي تفضلها",
      "الدخول إلى جميع أقسام المعرض",
      "تجربة العروض التفاعلية",
      "تجربة قاعة السينما"
    ],
    duration: "2-3 ساعات",
    hours: "الإثنين - السبت 10:00 صباحاً - 6:00 مساءً",
    closedDay: "مغلق أيام الأحد",
    cancellationHours: "48",
    cancellationPolicy: [
      "إلغاء مجاني قبل 48 ساعة من موعد الزيارة",
      "لا يوجد استرداد للإلغاء خلال 48 ساعة",
      "إعادة الجدولة متاحة حسب التوفر"
    ]
  }
];

const GlobalLocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(locationsData[0].id);
  
  const currentLocation = locationsData.find(loc => loc.id === activeLocation) || locationsData[0];

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="global-locations" className="py-20 md:py-28 bg-background" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            مواقعنا العالمية
          </h2>
          <p className="text-primary font-medium mb-2">
            قم بزيارة متاحفنا ذات المستوى العالمي في ثلاث قارات
          </p>
          <p className="text-muted-foreground">
            أي فرع ترغب في زيارته؟
          </p>
        </motion.div>

        {/* Country Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {locationsData.map((location, index) => (
            <motion.button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeLocation === location.id
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-accent/50"
              }`}
            >
              {location.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLocation.id}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* Right Side - Location Card */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-soft border border-border/50"
              >
                <img
                  src={currentLocation.image}
                  alt={currentLocation.name}
                  className="w-full h-64 md:h-72 object-cover"
                />
              </motion.div>
              
              <div className="mt-5 text-center">
                <span className="inline-block px-4 py-1.5 text-xs border border-secondary/50 bg-secondary/10 rounded-full text-secondary font-medium mb-3">
                  مفتوح الآن
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {currentLocation.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {currentLocation.country}
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{currentLocation.address}</span>
                </div>
              </div>

              {/* Price Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="mt-6 p-5 border border-border rounded-xl bg-card shadow-card hover:shadow-soft transition-all duration-300"
              >
                <div className="text-center mb-5">
                  <p className="text-sm text-muted-foreground mb-1">تبدأ التذاكر من</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">{currentLocation.price}</span>
                    <span className="text-lg text-muted-foreground">{currentLocation.currency}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-button hover:shadow-elevated"
                >
                  <span>احجز زيارة {currentLocation.name}</span>
                  <ArrowLeft className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>

            {/* Left Side - Visit Information */}
            <div className="order-2 lg:order-1 space-y-5">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-foreground mb-1">معلومات الزيارة</h4>
                <p className="text-muted-foreground text-sm">كل ما تحتاج معرفته لزيارتك</p>
              </div>

              {/* What's Included Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl border-2 border-primary/20 bg-primary/5 transition-all duration-300 hover:border-primary/40 hover:shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-button">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h5 className="font-bold text-foreground text-lg">ما يشمله</h5>
                </div>
                <ul className="space-y-2.5">
                  {currentLocation.includes.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Duration & Timing Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl border-2 border-card-blue bg-card-blue transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-blue flex items-center justify-center shadow-soft">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h5 className="font-bold text-foreground text-lg">المدة والتوقيت</h5>
                </div>
                <div className="space-y-2.5 text-sm text-muted-foreground">
                  <p><span className="font-medium text-foreground">المدة:</span> {currentLocation.duration}</p>
                  <p><span className="font-medium text-foreground">ساعات العمل:</span> {currentLocation.hours}</p>
                  <p className="text-primary font-medium">{currentLocation.closedDay}</p>
                </div>
              </motion.div>

              {/* Cancellation Policy Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl border-2 border-card-pink bg-card-pink transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-pink flex items-center justify-center shadow-soft">
                    <Shield className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h5 className="font-bold text-foreground text-lg">سياسة الإلغاء</h5>
                </div>
                <ul className="space-y-2.5">
                  {currentLocation.cancellationPolicy.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GlobalLocationsSection;