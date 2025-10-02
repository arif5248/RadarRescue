import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ocean-deep text-primary-foreground py-12 border-t border-cyan-glow/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-glow">
              💙 {t('hero.title')}
            </h3>
            <p className="text-sm text-primary-foreground/80">
              {t('hero.subtitle')} — {t('hero.description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cyan-glow">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#researchers" className="hover:text-cyan-glow transition-colors">
                  {t('nav.researchers')}
                </a>
              </li>
              <li>
                <a href="#government" className="hover:text-cyan-glow transition-colors">
                  {t('nav.government')}
                </a>
              </li>
              <li>
                <a href="#ngos" className="hover:text-cyan-glow transition-colors">
                  {t('nav.ngos')}
                </a>
              </li>
              <li>
                <a href="#shelters" className="hover:text-cyan-glow transition-colors">
                  {t('nav.shelters')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cyan-glow">Contact</h4>
            <p className="text-sm text-primary-foreground/80">
              Emergency Hotline: 999<br />
              Email: help@floodsafe.bd<br />
              Available 24/7
            </p>
          </div>
        </div>

        <div className="border-t border-cyan-glow/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 FloodSafe. All rights reserved. Built with 💙 for Bangladesh.</p>
        </div>
      </div>
    </footer>
  );
};
