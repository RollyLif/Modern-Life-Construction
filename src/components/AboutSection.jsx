import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-light -z-10 transform skew-x-12 translate-x-32 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Image Content - Staggered Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[600px]"
          >
            <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1541888081622-1dcaef5622df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Chantier de génie civil"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ingénieurs"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darker text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl z-30 ring-8 ring-white"
            >
              <span className="text-4xl font-black text-primary">10+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold mt-1 text-center leading-tight">Années<br/>d'Excellence</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-10 h-[2px] bg-primary"></span>
              <h2 className="text-dark font-bold tracking-widest uppercase text-sm">Le Groupe Modern Life</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-darker mb-8 leading-[1.1]">
              Redéfinir les standards de la <span className="text-primary italic font-serif font-light">construction</span>.
            </h3>
            
            <div className="space-y-6 text-lg text-gray-500 font-light mb-12">
              <p>
                <strong className="text-darker font-semibold">MODERN LIFE Construction Sarl</strong> incarne l'alliance parfaite entre l’ingénierie traditionnelle éprouvée et les innovations technologiques de pointe. 
              </p>
              <p>
                De Kalemie jusqu'à l'international, nous mobilisons des équipes pluridisciplinaires pour concevoir, bâtir et sécuriser des infrastructures qui résistent à l'épreuve du temps. Notre engagement : la livraison sans compromis sur la qualité, la sécurité et les délais.
              </p>
            </div>

            {/* Premium Address Bar */}
            <div className="bg-darker p-8 rounded-3xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full transform translate-x-10 -translate-y-10 group-hover:bg-primary/30 transition-all"></div>
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="bg-white/10 p-4 rounded-2xl text-primary">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Quartier Général</h4>
                  <address className="not-italic text-lg font-medium leading-relaxed">
                    N°135, Avenue OUA, Q. Kahite<br />
                    Commune de Lukuga<br />
                    <span className="text-primary">Kalemie, RDC</span>
                  </address>
                </div>
              </div>
              
              <button className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group-hover:scale-110 shrink-0">
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
