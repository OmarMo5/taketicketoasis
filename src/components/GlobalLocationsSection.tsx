import { useState } from "react";
import { Check, Clock, Shield, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

import locationMecca from "@/assets/location-mecca.jpg";
import locationMedina from "@/assets/location-medina.jpg";
import locationRabat from "@/assets/location-rabat.jpg";
import locationNouakchott from "@/assets/location-nouakchott.jpg";
import locationDakar from "@/assets/location-dakar.jpg";

interface LocationConfig {
  id: string;
  nameKey: string;
  countryKey: string;
  image: string;
  addressKey: string;
  price: string;
  currency: string;
  includesKeys: string[];
  durationKey: string;
  hoursKey: string;
  closedDayKey: string;
  cancellationKeys: string[];
}

const locationsConfig: LocationConfig[] = [
  {
    id: "mecca",
    nameKey: "locations.mecca",
    countryKey: "locations.countrySA",
    image: locationMecca,
    addressKey: "locations.addressMecca",
    price: "70",
    currency: "ر.س",
    includesKeys: ["locations.guidedTour", "locations.allSections60", "locations.interactiveDisplays3d", "locations.cinemaExperience", "locations.freeGuide"],
    durationKey: "locations.duration23",
    hoursKey: "locations.hoursSatThu",
    closedDayKey: "locations.closedFri",
    cancellationKeys: ["locations.cancel24", "locations.noRefund24", "locations.reschedule"],
  },
  {
    id: "medina",
    nameKey: "locations.medina",
    countryKey: "locations.countrySA",
    image: locationMedina,
    addressKey: "locations.addressMedina",
    price: "40",
    currency: "ر.س",
    includesKeys: ["locations.guidedTour", "locations.allSections60", "locations.interactiveDisplays3d", "locations.cinemaExperience", "locations.freeGuide"],
    durationKey: "locations.duration23",
    hoursKey: "locations.hoursSatThu",
    closedDayKey: "locations.closedFri",
    cancellationKeys: ["locations.cancel24", "locations.noRefund24", "locations.reschedule"],
  },
  {
    id: "rabat",
    nameKey: "locations.rabat",
    countryKey: "locations.countryMorocco",
    image: locationRabat,
    addressKey: "locations.addressRabat",
    price: "100",
    currency: "د.م",
    includesKeys: ["locations.guidedTour", "locations.allSections", "locations.interactiveDisplays", "locations.cinemaExperience", "locations.freeGuide"],
    durationKey: "locations.duration23",
    hoursKey: "locations.hoursMonSat",
    closedDayKey: "locations.closedSun",
    cancellationKeys: ["locations.cancel48", "locations.noRefund48", "locations.reschedule"],
  },
  {
    id: "nouakchott",
    nameKey: "locations.nouakchott",
    countryKey: "locations.countryMauritania",
    image: locationNouakchott,
    addressKey: "locations.addressNouakchott",
    price: "1000",
    currency: "أوقية",
    includesKeys: ["locations.guidedTour", "locations.allSections", "locations.interactiveDisplays", "locations.cinemaExperience"],
    durationKey: "locations.duration23",
    hoursKey: "locations.hoursSatThu2",
    closedDayKey: "locations.closedFri",
    cancellationKeys: ["locations.cancel48", "locations.noRefund48", "locations.reschedule"],
  },
  {
    id: "dakar",
    nameKey: "locations.dakar",
    countryKey: "locations.countrySenegal",
    image: locationDakar,
    addressKey: "locations.addressDakar",
    price: "5000",
    currency: "فرنك",
    includesKeys: ["locations.guidedTour", "locations.allSections", "locations.interactiveDisplays", "locations.cinemaExperience"],
    durationKey: "locations.duration23",
    hoursKey: "locations.hoursMonSat2",
    closedDayKey: "locations.closedSun",
    cancellationKeys: ["locations.cancel48", "locations.noRefund48", "locations.reschedule"],
  },
];

const bookingLinks: Record<string, string> = {
  mecca: "https://tickets.asc.sa/?branch_slug=mkh",
  medina: "https://tickets.asc.sa/?branch_slug=med",
  rabat: "https://tickets.asc.sa/?branch_slug=ma",
  dakar: "https://tickets.asc.sa/?branch_slug=sen",
  nouakchott: "https://tickets.asc.sa/?branch_slug=mrt",
};

const GlobalLocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(locationsConfig[0].id);
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const currentLocation = locationsConfig.find(loc => loc.id === activeLocation) || locationsConfig[0];

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
    <section id="global-locations" className="py-14 md:py-32 relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-muted/40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-5">
            {t("locations.sectionTitle")}
          </h2>
          <p className="text-primary font-semibold mb-3">
            {t("locations.sectionSubtitle")}
          </p>
          <p className="text-muted-foreground">
            {t("locations.sectionQuestion")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16"
        >
          {locationsConfig.map((location, index) => (
            <motion.button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 md:px-7 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${activeLocation === location.id
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-accent/60 shadow-card"
                }`}
            >
              {t(location.nameKey)}
            </motion.button>
          ))}
        </motion.div>

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
            <div className="order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-soft border border-border/50"
              >
                <img
                  src={currentLocation.image}
                  alt={t(currentLocation.nameKey)}
                  className="w-full h-64 md:h-72 object-cover"
                />
              </motion.div>

              <div className="mt-5 text-center">
                <span className="inline-block px-4 py-1.5 text-xs border border-secondary/50 bg-secondary/10 rounded-full text-secondary font-medium mb-3">
                  {t("locations.openNow")}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {t(currentLocation.nameKey)}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {t(currentLocation.countryKey)}
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{t(currentLocation.addressKey)}</span>
                </div>
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                className="mt-6 p-6 border border-border/50 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-400"
              >
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-2">{t("locations.ticketsFrom")}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-foreground">{currentLocation.price}</span>
                    <span className="text-lg text-muted-foreground font-medium">{currentLocation.currency}</span>
                  </div>
                </div>
                <a
                  href={bookingLinks[currentLocation.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-button hover:shadow-glow-primary"
                  >
                    <span>{t("locations.bookVisit")} {t(currentLocation.nameKey)}</span>
                    {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  </motion.button>
                </a>
              </motion.div>
            </div>

            {/* Left Side - Visit Information */}
            <div className="order-2 lg:order-2 space-y-5">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-foreground mb-1">{t("locations.visitInfo")}</h4>
                <p className="text-muted-foreground text-sm">{t("locations.visitInfoDesc")}</p>
              </div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl border-2 border-primary/20 bg-primary/5 transition-all duration-300 hover:border-primary/40 hover:shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-button">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h5 className="font-bold text-foreground text-lg">{t("locations.whatsIncluded")}</h5>
                </div>
                <ul className="space-y-2.5">
                  {currentLocation.includesKeys.map((key, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl border-2 border-card-blue bg-card-blue transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-blue flex items-center justify-center shadow-soft">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h5 className="font-bold text-foreground text-lg">{t("locations.durationTiming")}</h5>
                </div>
                <div className="space-y-2.5 text-sm text-muted-foreground">
                  <p><span className="font-medium text-foreground">{t("locations.duration")}</span> {t(currentLocation.durationKey)}</p>
                  <p><span className="font-medium text-foreground">{t("locations.workingHours")}</span> {t(currentLocation.hoursKey)}</p>
                  <p className="text-primary font-medium">{t(currentLocation.closedDayKey)}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl border-2 border-card-pink bg-card-pink transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-pink flex items-center justify-center shadow-soft">
                    <Shield className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h5 className="font-bold text-foreground text-lg">{t("locations.cancellationPolicy")}</h5>
                </div>
                <ul className="space-y-2.5">
                  {currentLocation.cancellationKeys.map((key, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{t(key)}</span>
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
