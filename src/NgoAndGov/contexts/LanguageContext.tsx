import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.researchers': 'Researchers',
    'nav.government': 'Government',
    'nav.ngos': 'NGOs',
    'nav.shelters': 'Find Shelters',
    
    // Hero
    'hero.title': 'FloodSafe',
    'hero.subtitle': 'From Space to Safety',
    'hero.description': 'Turning SAR satellite data + AI into life-saving flood insights',
    'hero.cta': 'Explore Platform',
    
    // Researchers
    'researchers.title': 'FloodSafe Insight',
    'researchers.subtitle': 'For Researchers',
    'researchers.feature1': 'Before–After SAR change maps in 3D',
    'researchers.feature2': 'Complete datasets: SAR, rainfall, DEM, population',
    'researchers.feature3': 'Hypothesis Builder & Simulation tools',
    'researchers.feature4': 'Download & visualize with zero coding',
    'researchers.impact': 'Spend less time cleaning data, more time discovering solutions',
    
    // Government
    'government.title': 'FloodSafe Dashboard',
    'government.subtitle': 'For Government',
    'government.feature1': 'Live SAR monitoring of flood zones in 3D',
    'government.feature2': 'Predictive risk dashboard (72-hour forecast)',
    'government.feature3': 'Real-time citizen reports (safe/unsafe)',
    'government.feature4': 'Auto action triggers for early alerts',
    'government.impact': 'Move from reacting to preventing disasters',
    
    // NGOs
    'ngos.title': 'FloodSafe Relief Map',
    'ngos.subtitle': 'For NGOs',
    'ngos.feature1': 'AI danger zone highlighting',
    'ngos.feature2': 'Nearest shelter map with capacity status',
    'ngos.feature3': '3D resource deployment tracking',
    'ngos.feature4': 'Real-time safe route navigation',
    'ngos.impact': 'Save more lives by acting faster and smarter',
    
    // Shelters
    'shelters.title': 'Emergency Shelters',
    'shelters.subtitle': 'Find the nearest safe shelter',
    'shelters.safe': 'Safe',
    'shelters.capacity': 'At Capacity',
    'shelters.unsafe': 'Unsafe',
    'shelters.distance': 'Distance',
    'shelters.capacity_label': 'Capacity',
    
    // Common
    'common.learn_more': 'Learn More',
    'common.get_started': 'Get Started',
  },
  bn: {
    // Header
    'nav.home': 'হোম',
    'nav.researchers': 'গবেষক',
    'nav.government': 'সরকার',
    'nav.ngos': 'এনজিও',
    'nav.shelters': 'আশ্রয়কেন্দ্র খুঁজুন',
    
    // Hero
    'hero.title': 'ফ্লাডসেফ',
    'hero.subtitle': 'মহাকাশ থেকে নিরাপত্তায়',
    'hero.description': 'SAR স্যাটেলাইট ডেটা + AI দিয়ে বন্যার জীবনরক্ষাকারী তথ্য',
    'hero.cta': 'প্ল্যাটফর্ম ঘুরে দেখুন',
    
    // Researchers
    'researchers.title': 'ফ্লাডসেফ ইনসাইট',
    'researchers.subtitle': 'গবেষকদের জন্য',
    'researchers.feature1': '৩ডি-তে আগে–পরের SAR পরিবর্তন মানচিত্র',
    'researchers.feature2': 'সম্পূর্ণ ডেটাসেট: SAR, বৃষ্টিপাত, DEM, জনসংখ্যা',
    'researchers.feature3': 'হাইপোথিসিস বিল্ডার ও সিমুলেশন টুল',
    'researchers.feature4': 'কোডিং ছাড়াই ডাউনলোড ও ভিজুয়ালাইজ করুন',
    'researchers.impact': 'ডেটা পরিষ্কারে কম সময়, সমাধান আবিষ্কারে বেশি সময়',
    
    // Government
    'government.title': 'ফ্লাডসেফ ড্যাশবোর্ড',
    'government.subtitle': 'সরকারের জন্য',
    'government.feature1': '৩ডি-তে বন্যা অঞ্চলের লাইভ SAR মনিটরিং',
    'government.feature2': 'ভবিষ্যৎ ঝুঁকি ড্যাশবোর্ড (৭২ ঘণ্টার পূর্বাভাস)',
    'government.feature3': 'রিয়েল-টাইম নাগরিক রিপোর্ট (নিরাপদ/অনিরাপদ)',
    'government.feature4': 'স্বয়ংক্রিয় সতর্কতা ট্রিগার',
    'government.impact': 'প্রতিক্রিয়া থেকে প্রতিরোধে যান',
    
    // NGOs
    'ngos.title': 'ফ্লাডসেফ ত্রাণ মানচিত্র',
    'ngos.subtitle': 'এনজিও-দের জন্য',
    'ngos.feature1': 'AI বিপদ অঞ্চল হাইলাইটিং',
    'ngos.feature2': 'ধারণক্ষমতা সহ নিকটতম আশ্রয়কেন্দ্র মানচিত্র',
    'ngos.feature3': '৩ডি সম্পদ মোতায়েন ট্র্যাকিং',
    'ngos.feature4': 'রিয়েল-টাইম নিরাপদ রুট নেভিগেশন',
    'ngos.impact': 'দ্রুত ও স্মার্ট কাজ করে আরও জীবন বাঁচান',
    
    // Shelters
    'shelters.title': 'জরুরি আশ্রয়কেন্দ্র',
    'shelters.subtitle': 'নিকটতম নিরাপদ আশ্রয়কেন্দ্র খুঁজুন',
    'shelters.safe': 'নিরাপদ',
    'shelters.capacity': 'পূর্ণ ধারণক্ষমতা',
    'shelters.unsafe': 'অনিরাপদ',
    'shelters.distance': 'দূরত্ব',
    'shelters.capacity_label': 'ধারণক্ষমতা',
    
    // Common
    'common.learn_more': 'আরও জানুন',
    'common.get_started': 'শুরু করুন',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
