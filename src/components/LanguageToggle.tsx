import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="glass-card hover:border-primary/50 transition-all"
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === 'en' ? 'বাংলা' : 'English'}
    </Button>
  );
};
