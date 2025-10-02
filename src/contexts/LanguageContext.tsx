import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface Translations {
  header: {
    title: string;
    subtitle: string;
    liveData: string;
    heroTitle: string;
    heroSubtitle: string;
  };
  currentSituation: {
    title: string;
    floodStatus: string;
    weatherUpdate: string;
    today: string;
    heavyRain: string;
    feelsLike: string;
    humidity: string;
    wind: string;
    visibility: string;
    next12hrs: string;
    continuousRain: string;
    safetyMessage: string;
    floodLikely: string;
    safeForNow: string;
    lastUpdated: string;
    ago: string;
    divisions: {
      feni: string;
      sylhet: string;
      dhaka: string;
      khulna: string;
    };
    messages: {
      rising: string;
      danger: string;
      stable: string;
      moderate: string;
    };
  };
  predictions: {
    title: string;
    highRisk: string;
    mediumRisk: string;
    lowRisk: string;
    weatherUpdate: string;
    chanceOfRain: string;
    floodForecast: string;
    precautions: string;
    nearestShelter: string;
    away: string;
    full: string;
  };
  shelter: {
    title: string;
    subtitle: string;
    distance: string;
    capacity: string;
    available: string;
    lowRisk: string;
    highGround: string;
    moderate: string;
    nearRiver: string;
    elevated: string;
    getDirections: string;
  };
  family: {
    title: string;
    subtitle: string;
    safe: string;
    atRisk: string;
    checking: string;
    contactAll: string;
    shareLocation: string;
    members: {
      mother: string;
      father: string;
      brother: string;
      sister: string;
    };
    locations: {
      home: string;
      office: string;
      school: string;
      university: string;
      safeZoneA: string;
      shelterB: string;
      ward3: string;
      safeZoneC: string;
    };
    timeAgo: {
      minAgo: string;
    };
  };
  emergency: {
    title: string;
    call: string;
    tip: string;
    tipMessage: string;
    contacts: {
      nationalEmergency: string;
      fireService: string;
      ambulance: string;
      disasterManagement: string;
    };
  };
  rainfall: {
    title: string;
    last24hrs: string;
    increasing: string;
    stable: string;
    decreasing: string;
    floodingRisk: string;
    critical: string;
    high: string;
    moderate: string;
    waterLevel: string;
    capacity: string;
    next48hrs: string;
    forecast: string;
  };
  footer: {
    poweredBy: string;
    stayConnected: string;
  };
  safety: {
    title: string;
    subtitle: string;
    helperMessage: string;
    emergencyReminder: string;
    precautions: {
      emergencyBag: string;
      emergencyBagDesc: string;
      moveToSafety: string;
      moveToSafetyDesc: string;
      avoidRiskyTravel: string;
      avoidRiskyTravelDesc: string;
    };
    additionalTips: string;
    tip1: string;
    tip2: string;
    tip3: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    header: {
      title: 'Bangladesh Safety Network',
      subtitle: 'Real-time Disaster Management',
      liveData: 'Live Satellite Data Active',
      heroTitle: 'Your Safety, Our Priority',
      heroSubtitle: 'Real-time disaster alerts, AI-powered predictions, and instant access to emergency resources',
    },
    currentSituation: {
      title: 'Current Situation (Citizen Mode)',
      floodStatus: '🌊 Flood Status (Live)',
      weatherUpdate: '☁️ Weather Update',
      today: 'Today',
      heavyRain: 'Heavy Rain Showers',
      feelsLike: 'Feels like',
      humidity: 'Humidity',
      wind: 'Wind',
      visibility: 'Visibility',
      next12hrs: 'Next 12 hrs:',
      continuousRain: '🌧️ Continuous rainfall expected',
      safetyMessage: '🚨 Safety Message',
      floodLikely: '⚠️ Flood likely — Please prepare and move to nearest shelter.',
      safeForNow: '✅ Safe for now — No major flood risk in the next 24 hours.',
      lastUpdated: 'Last updated:',
      ago: 'ago',
      divisions: {
        feni: 'Feni Division',
        sylhet: 'Sylhet Division',
        dhaka: 'Dhaka Division',
        khulna: 'Khulna Division',
      },
      messages: {
        rising: 'Rising — close to danger level',
        danger: 'Danger — Flood expected within 12 hrs',
        stable: 'Stable — No flood risk now',
        moderate: 'Moderate — Monitor conditions',
      },
    },
    predictions: {
      title: 'AI Predictions (Next 72 Hours)',
      highRisk: 'High Risk',
      mediumRisk: 'Medium Risk',
      lowRisk: 'Low Risk',
      weatherUpdate: 'Weather Update',
      chanceOfRain: 'Chance of rain',
      floodForecast: 'Flood Forecast',
      precautions: 'Precautions Suggested',
      nearestShelter: 'Nearest Safe Shelter',
      away: 'away',
      full: 'full',
    },
    shelter: {
      title: 'Nearest Shelters',
      subtitle: 'Safe evacuation centers near you',
      distance: 'Distance',
      capacity: 'Capacity',
      available: 'Available',
      lowRisk: 'Low Risk - High Ground',
      highGround: 'High Ground',
      moderate: 'Moderate - Near River',
      nearRiver: 'Near River',
      elevated: 'Low Risk - Elevated Area',
      getDirections: 'Get Directions',
    },
    family: {
      title: 'Family Safety Status',
      subtitle: 'Track your loved ones in real-time',
      safe: 'Safe',
      atRisk: 'At Risk',
      checking: 'Checking...',
      contactAll: 'Contact All',
      shareLocation: 'Share My Location',
      members: {
        mother: 'Mother',
        father: 'Father',
        brother: 'Brother',
        sister: 'Sister',
      },
      locations: {
        home: 'At Home',
        office: 'Office',
        school: 'School',
        university: 'University',
        safeZoneA: 'Safe Zone A',
        shelterB: 'Shelter B',
        ward3: 'Ward 3',
        safeZoneC: 'Safe Zone C',
      },
      timeAgo: {
        minAgo: 'min ago',
      },
    },
    emergency: {
      title: 'Emergency Contacts',
      call: 'Call',
      tip: 'Tip:',
      tipMessage: 'Save these numbers offline in case of network issues',
      contacts: {
        nationalEmergency: 'National Emergency',
        fireService: 'Fire Service',
        ambulance: 'Ambulance',
        disasterManagement: 'Disaster Management',
      },
    },
    rainfall: {
      title: 'Rainfall Impact Analysis',
      last24hrs: 'Last 24 hours',
      increasing: 'Increasing',
      stable: 'Stable',
      decreasing: 'Decreasing',
      floodingRisk: 'Flooding Risk',
      critical: 'Critical',
      high: 'High',
      moderate: 'Moderate',
      waterLevel: 'Water level rising',
      capacity: 'capacity',
      next48hrs: 'Next 48 Hours Forecast',
      forecast: 'Heavy rainfall expected to continue in northeastern regions. River water levels approaching danger marks in Sylhet and Sunamganj districts.',
    },
    footer: {
      poweredBy: '🛰️ Powered by Real-time Satellite Data & AI Predictions',
      stayConnected: 'Stay Safe, Stay Connected',
    },
  safety: {
    title: 'Safety Precautions',
    subtitle: 'Stay prepared and protect your family',
    helperMessage: "We're here to help you stay safe. Follow these simple steps:",
    emergencyReminder: '📞 In emergency, call 999 or 1090 immediately',
    precautions: {
      emergencyBag: '🎒 Emergency Bag Ready',
      emergencyBagDesc: 'Keep documents, dry food, medicine, torch, and water ready.',
      moveToSafety: '🏠 Move to Safety',
      moveToSafetyDesc: 'Shift valuables, cattle, and family to higher ground.',
      avoidRiskyTravel: '🛣️ Avoid Risky Travel',
      avoidRiskyTravelDesc: 'Do not walk/drive near rivers, hills, or flooded roads.',
    },
    additionalTips: 'Additional Safety Tips',
    tip1: 'Keep mobile phones charged and have backup power banks ready',
    tip2: 'Identify safe evacuation routes in your area beforehand',
    tip3: 'Share your location with family members regularly',
  },
  },
  bn: {
    header: {
      title: 'বাংলাদেশ নিরাপত্তা নেটওয়ার্ক',
      subtitle: 'রিয়েল-টাইম দুর্যোগ ব্যবস্থাপনা',
      liveData: 'লাইভ স্যাটেলাইট ডেটা সক্রিয়',
      heroTitle: 'আপনার নিরাপত্তা, আমাদের অগ্রাধিকার',
      heroSubtitle: 'রিয়েল-টাইম দুর্যোগ সতর্কতা, এআই-চালিত পূর্বাভাস এবং জরুরি সংস্থানগুলিতে তাৎক্ষণিক অ্যাক্সেস',
    },
    currentSituation: {
      title: 'বর্তমান পরিস্থিতি (নাগরিক মোড)',
      floodStatus: '🌊 বন্যার অবস্থা (লাইভ)',
      weatherUpdate: '☁️ আবহাওয়া আপডেট',
      today: 'আজ',
      heavyRain: 'ভারী বৃষ্টিপাত',
      feelsLike: 'অনুভূত',
      humidity: 'আর্দ্রতা',
      wind: 'বাতাস',
      visibility: 'দৃশ্যমানতা',
      next12hrs: 'পরবর্তী ১২ ঘণ্টা:',
      continuousRain: '🌧️ ক্রমাগত বৃষ্টিপাত প্রত্যাশিত',
      safetyMessage: '🚨 নিরাপত্তা বার্তা',
      floodLikely: '⚠️ বন্যার সম্ভাবনা — অনুগ্রহ করে প্রস্তুত হন এবং নিকটতম আশ্রয়কেন্দ্রে যান।',
      safeForNow: '✅ এখনই নিরাপদ — পরবর্তী ২৪ ঘন্টায় কোনও বড় বন্যার ঝুঁকি নেই।',
      lastUpdated: 'শেষ আপডেট:',
      ago: 'পূর্বে',
      divisions: {
        feni: 'ফেনী বিভাগ',
        sylhet: 'সিলেট বিভাগ',
        dhaka: 'ঢাকা বিভাগ',
        khulna: 'খুলনা বিভাগ',
      },
      messages: {
        rising: 'বৃদ্ধি — বিপদ স্তরের কাছাকাছি',
        danger: 'বিপদ — ১২ ঘণ্টার মধ্যে বন্যা প্রত্যাশিত',
        stable: 'স্থিতিশীল — এখন বন্যার ঝুঁকি নেই',
        moderate: 'মাঝারি — অবস্থা পর্যবেক্ষণ করুন',
      },
    },
    predictions: {
      title: 'এআই পূর্বাভাস (পরবর্তী ৭২ ঘণ্টা)',
      highRisk: 'উচ্চ ঝুঁকি',
      mediumRisk: 'মধ্যম ঝুঁকি',
      lowRisk: 'নিম্ন ঝুঁকি',
      weatherUpdate: 'আবহাওয়া আপডেট',
      chanceOfRain: 'বৃষ্টির সম্ভাবনা',
      floodForecast: 'বন্যা পূর্বাভাস',
      precautions: 'প্রস্তাবিত সতর্কতা',
      nearestShelter: 'নিকটতম নিরাপদ আশ্রয়কেন্দ্র',
      away: 'দূরে',
      full: 'পূর্ণ',
    },
    shelter: {
      title: 'নিকটতম আশ্রয়কেন্দ্র',
      subtitle: 'আপনার কাছাকাছি নিরাপদ সরিয়ে নেওয়ার কেন্দ্র',
      distance: 'দূরত্ব',
      capacity: 'ধারণক্ষমতা',
      available: 'উপলব্ধ',
      lowRisk: 'নিম্ন ঝুঁকি - উচ্চ ভূমি',
      highGround: 'উচ্চ ভূমি',
      moderate: 'মাঝারি - নদীর কাছে',
      nearRiver: 'নদীর কাছে',
      elevated: 'নিম্ন ঝুঁকি - উঁচু এলাকা',
      getDirections: 'দিকনির্দেশনা পান',
    },
    family: {
      title: 'পরিবারের নিরাপত্তা অবস্থা',
      subtitle: 'রিয়েল-টাইমে আপনার প্রিয়জনদের ট্র্যাক করুন',
      safe: 'নিরাপদ',
      atRisk: 'ঝুঁকিতে',
      checking: 'পরীক্ষা করা হচ্ছে...',
      contactAll: 'সবাইকে যোগাযোগ করুন',
      shareLocation: 'আমার অবস্থান শেয়ার করুন',
      members: {
        mother: 'মা',
        father: 'বাবা',
        brother: 'ভাই',
        sister: 'বোন',
      },
      locations: {
        home: 'বাড়িতে',
        office: 'অফিসে',
        school: 'স্কুলে',
        university: 'বিশ্ববিদ্যালয়',
        safeZoneA: 'নিরাপদ অঞ্চল এ',
        shelterB: 'আশ্রয়কেন্দ্র বি',
        ward3: 'ওয়ার্ড ৩',
        safeZoneC: 'নিরাপদ অঞ্চল সি',
      },
      timeAgo: {
        minAgo: 'মিনিট পূর্বে',
      },
    },
    emergency: {
      title: 'জরুরি যোগাযোগ',
      call: 'কল',
      tip: 'পরামর্শ:',
      tipMessage: 'নেটওয়ার্ক সমস্যার ক্ষেত্রে এই নম্বরগুলি অফলাইনে সংরক্ষণ করুন',
      contacts: {
        nationalEmergency: 'জাতীয় জরুরী',
        fireService: 'ফায়ার সার্ভিস',
        ambulance: 'অ্যাম্বুলেন্স',
        disasterManagement: 'দুর্যোগ ব্যবস্থাপনা',
      },
    },
    rainfall: {
      title: 'বৃষ্টিপাত প্রভাব বিশ্লেষণ',
      last24hrs: 'গত ২৪ ঘন্টা',
      increasing: 'বৃদ্ধি পাচ্ছে',
      stable: 'স্থিতিশীল',
      decreasing: 'হ্রাস পাচ্ছে',
      floodingRisk: 'বন্যার ঝুঁকি',
      critical: 'গুরুতর',
      high: 'উচ্চ',
      moderate: 'মাঝারি',
      waterLevel: 'পানির স্তর বৃদ্ধি',
      capacity: 'ধারণক্ষমতা',
      next48hrs: 'পরবর্তী ৪৮ ঘণ্টার পূর্বাভাস',
      forecast: 'উত্তর-পূর্বাঞ্চলীয় অঞ্চলে ভারী বৃষ্টিপাত অব্যাহত থাকার সম্ভাবনা। সিলেট ও সুনামগঞ্জ জেলায় নদীর পানির স্তর বিপদসীমার কাছাকাছি।',
    },
    footer: {
      poweredBy: '🛰️ রিয়েল-টাইম স্যাটেলাইট ডেটা এবং এআই পূর্বাভাস দ্বারা চালিত',
      stayConnected: 'নিরাপদ থাকুন, সংযুক্ত থাকুন',
    },
  safety: {
    title: 'নিরাপত্তা সতর্কতা',
    subtitle: 'প্রস্তুত থাকুন এবং আপনার পরিবারকে রক্ষা করুন',
    helperMessage: 'আমরা আপনাকে নিরাপদ থাকতে সাহায্য করতে এখানে আছি। এই সহজ পদক্ষেপগুলি অনুসরণ করুন:',
    emergencyReminder: '📞 জরুরি অবস্থায়, অবিলম্বে 999 বা 1090 এ কল করুন',
    precautions: {
      emergencyBag: '🎒 জরুরি ব্যাগ প্রস্তুত',
      emergencyBagDesc: 'নথি, শুকনো খাবার, ওষুধ, টর্চ এবং পানি প্রস্তুত রাখুন।',
      moveToSafety: '🏠 নিরাপদ স্থানে যান',
      moveToSafetyDesc: 'মূল্যবান জিনিস, গবাদি পশু এবং পরিবারকে উঁচু জায়গায় সরান।',
      avoidRiskyTravel: '🛣️ ঝুঁকিপূর্ণ ভ্রমণ এড়িয়ে চলুন',
      avoidRiskyTravelDesc: 'নদী, পাহাড় বা প্লাবিত রাস্তার কাছে হাঁটবেন/গাড়ি চালাবেন না।',
    },
    additionalTips: 'অতিরিক্ত নিরাপত্তা পরামর্শ',
    tip1: 'মোবাইল ফোন চার্জ রাখুন এবং ব্যাকআপ পাওয়ার ব্যাঙ্ক প্রস্তুত রাখুন',
    tip2: 'আগে থেকে আপনার এলাকায় নিরাপদ সরিয়ে নেওয়ার পথ চিহ্নিত করুন',
    tip3: 'নিয়মিত পরিবারের সদস্যদের সাথে আপনার অবস্থান শেয়ার করুন',
  },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
