export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-black text-white tracking-tighter">
              MODERN LIFE
            </span>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Construction Sarl
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">À Propos</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} MODERN LIFE Construction Sarl. Tous droits réservés.</p>
          <p className="text-xs">
            Design moderne & responsive
          </p>
        </div>
      </div>
    </footer>
  );
}
