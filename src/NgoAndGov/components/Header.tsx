import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ocean-blue/95 backdrop-blur-sm border-b border-cyan-glow/20">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg water-gradient flex items-center justify-center glow-cyan">
            <span className="text-2xl">🌊</span>
          </div>
          <h1 className="text-2xl font-bold text-primary-foreground text-glow">
            {t('hero.title')}
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-primary-foreground hover:text-cyan-glow transition-colors"
          >
            {t('nav.home')}
          </button>
          <button
            onClick={() => scrollToSection('researchers')}
            className="text-primary-foreground hover:text-cyan-glow transition-colors"
          >
            {t('nav.researchers')}
          </button>
          <button
            onClick={() => scrollToSection('government')}
            className="text-primary-foreground hover:text-cyan-glow transition-colors"
          >
            {t('nav.government')}
          </button>
          <button
            onClick={() => scrollToSection('ngos')}
            className="text-primary-foreground hover:text-cyan-glow transition-colors"
          >
            {t('nav.ngos')}
          </button>
          <button
            onClick={() => scrollToSection('shelters')}
            className="text-primary-foreground hover:text-cyan-glow transition-colors"
          >
            {t('nav.shelters')}
          </button>
        </div>

        <Button
          onClick={toggleLanguage}
          variant="outline"
          size="sm"
          className="bg-transparent border-cyan-glow text-primary-foreground hover:bg-cyan-glow/20"
        >
          <Languages className="mr-2 h-4 w-4" />
          {language === 'en' ? 'বাংলা' : 'English'}
        </Button>
      </nav>
    </header>
  );
};
