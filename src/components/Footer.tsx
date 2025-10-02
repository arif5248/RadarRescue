import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-12 text-center text-sm text-muted-foreground pb-8">
      <p>{t.footer.poweredBy}</p>
      <p className="mt-2">{t.footer.stayConnected}</p>
    </footer>
  );
};
