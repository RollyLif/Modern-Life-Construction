import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-3 md:items-start group">
            <img src="/icon.svg" alt="Modern Life Logo" className="h-10 w-10 drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter">
                MODERN LIFE
              </span>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Construction Sarl
              </span>
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-primary transition-colors">{t('nav.home')}</a>
            <a href="#services" className="hover:text-primary transition-colors">{t('nav.services')}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
