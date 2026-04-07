import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-darker"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Solutions Digitales et Informatiques"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-darker/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-darker/90 via-darker/40 to-transparent"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 pattern-grid-dark opacity-20 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-white/90">L'Excellence en Ingénierie & BTP</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tight">
              Construire l’avenir avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">précision</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-8 text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
              Expertise mondiale en génie civil, terrassement et intégration technologique. Nous transformons vos visions en infrastructures pérennes.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-primary text-white w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_0_40px_rgba(242,140,40,0.3)]"
            >
              Démarrer un projet
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#services"
              className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/40 transition-all">
                <Play className="ml-1" size={18} fill="currentColor" />
              </div>
              <span className="font-medium text-lg">Découvrir l'expertise</span>
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10"
        >
          {[
            { label: "Années d'expérience", value: "10+" },
            { label: "Projets livrés", value: "150+" },
            { label: "Clients satisfaits", value: "98%" },
            { label: "Équipements", value: "45+" }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
