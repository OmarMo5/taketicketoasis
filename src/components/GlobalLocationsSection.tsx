import { useState } from "react";
import { Check, Clock, Shield, MapPin, ArrowLeft } from "lucide-react";

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

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            مواقعنا العالمية
          </h2>
          <p className="text-primary mb-2">
            قم بزيارة متاحفنا ذات المستوى العالمي في ثلاث قارات
          </p>
          <p className="text-muted-foreground">
            أي فرع ترغب في زيارته؟
          </p>
        </div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {locationsData.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeLocation === location.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-foreground border border-gray-200 hover:border-primary/50"
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Right Side - Location Card */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={currentLocation.image}
                alt={currentLocation.name}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
            
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 text-xs border border-gray-300 rounded-full text-muted-foreground mb-3">
                مفتوح الآن
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {currentLocation.name}
              </h3>
              <p className="text-primary font-medium mb-3">
                {currentLocation.country}
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>{currentLocation.address}</span>
              </div>
            </div>

            {/* Price Card */}
            <div className="mt-6 p-4 border border-gray-200 rounded-xl bg-white">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground mb-1">تبدأ التذاكر من</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold text-foreground">{currentLocation.price}</span>
                  <span className="text-lg text-muted-foreground">{currentLocation.currency}</span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <span>احجز زيارة {currentLocation.name}</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Left Side - Visit Information */}
          <div className="order-2 lg:order-1 space-y-4">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-foreground mb-1">معلومات الزيارة</h4>
              <p className="text-muted-foreground text-sm">كل ما تحتاج معرفته لزيارتك</p>
            </div>

            {/* What's Included Card */}
            <div className="p-5 rounded-xl border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h5 className="font-bold text-foreground">ما يشمله</h5>
              </div>
              <ul className="space-y-2">
                {currentLocation.includes.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Duration & Timing Card */}
            <div className="p-5 rounded-xl border-2 border-card-blue/50 bg-card-blue/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <h5 className="font-bold text-foreground">المدة والتوقيت</h5>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>المدة: {currentLocation.duration}</p>
                <p>ساعات العمل: {currentLocation.hours}</p>
                <p className="text-primary">{currentLocation.closedDay}</p>
              </div>
            </div>

            {/* Cancellation Policy Card */}
            <div className="p-5 rounded-xl border-2 border-card-pink/50 bg-card-pink/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h5 className="font-bold text-foreground">سياسة الإلغاء</h5>
              </div>
              <ul className="space-y-2">
                {currentLocation.cancellationPolicy.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocationsSection;
