import { motion } from 'framer-motion';
import { Building2, Tractor, Truck, Zap, Code2, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "BTP & Génie Civil",
      description: "Construction d'infrastructures d'envergure, bâtiments commerciaux et travaux publics avec une ingénierie de pointe.",
      icon: <Building2 strokeWidth={1.5} size={48} className="text-white" />,
      theme: "dark",
      colSpan: "md:col-span-2 lg:col-span-2",
      delay: 0.1
    },
    {
      id: 2,
      title: "Terrassement & VRD",
      description: "Aménagement complet de terrains, conception de routes et réseaux divers pour préparatifs de chantiers.",
      icon: <Tractor strokeWidth={1.5} size={48} className="text-primary" />,
      theme: "light",
      colSpan: "md:col-span-1 lg:col-span-1",
      delay: 0.2
    },
    {
      id: 3,
      title: "Équipements",
      description: "Parc matériel moderne et performant disponible pour tous types de chantiers.",
      icon: <Truck strokeWidth={1.5} size={48} className="text-primary" />,
      theme: "light",
      colSpan: "md:col-span-1 lg:col-span-1",
      delay: 0.3
    },
    {
      id: 4,
      title: "Réseaux Électriques",
      description: "Installations électriques industrielles et résidentielles sécurisées et conformes aux normes internationales.",
      icon: <Zap strokeWidth={1.5} size={48} className="text-white" />,
      theme: "primary",
      colSpan: "md:col-span-2 lg:col-span-1",
      delay: 0.4
    },
    {
      id: 5,
      title: "Innovation Digitale",
      description: "Développement d'applications sur-mesure et solutions logicielles pour la gestion de projets et la transformation digitale.",
      icon: <Code2 strokeWidth={1.5} size={48} className="text-primary" />,
      theme: "light",
      colSpan: "md:col-span-2 lg:col-span-1",
      delay: 0.5
    }
  ];

  return (
    <section id="services" className="py-32 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Pôles d'Expertise</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-darker leading-[1.1]">
              Des solutions <br/> <span className="text-gray-400 font-light">à 360 degrés.</span>
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-500 max-w-md border-l-2 border-primary/30 pl-6">
              Nous couvrons l'intégralité du cycle de vie de vos projets, de l'étude géologique jusqu'au déploiement de systèmes digitaux intégrés.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isDark = service.theme === 'dark';
            const isPrimary = service.theme === 'primary';
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: service.delay, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2
                  ${isDark ? 'bg-darker text-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]' : 
                    isPrimary ? 'bg-primary text-white hover:shadow-[0_20px_40px_rgba(242,140,40,0.3)]' : 
                    'bg-white text-darker border border-gray-100 hover:shadow-xl'
                  } ${service.colSpan}`}
              >
                {/* Animated Background Mesh (Always moving, brighter on hover) */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <motion.div 
                    animate={{ 
                      x: [0, 40, -40, 0], 
                      y: [0, 40, -40, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className={`absolute -top-1/2 -right-1/2 w-full h-full rounded-full blur-[80px] transition-colors duration-700
                      ${isDark ? 'bg-primary/5 group-hover:bg-primary/20' : 
                        isPrimary ? 'bg-white/10 group-hover:bg-white/30' : 
                        'bg-primary/5 group-hover:bg-primary/15'}
                    `}
                  />
                  <motion.div 
                    animate={{ 
                      x: [0, -30, 30, 0], 
                      y: [0, -40, 40, 0],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full blur-[100px] transition-colors duration-700
                      ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 
                        isPrimary ? 'bg-black/5 group-hover:bg-black/10' : 
                        'bg-gray-300/30 group-hover:bg-gray-400/30'}
                    `}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-8">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h4>
                    <p className={`text-lg leading-relaxed mb-12 ${isDark || isPrimary ? 'text-white/70' : 'text-gray-500'}`}>
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <button className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform transform group-hover:scale-110 group-hover:-rotate-12
                      ${isDark || isPrimary ? 'bg-white/10 text-white' : 'bg-gray-50 text-darker'}
                    `}>
                      <ArrowUpRight size={24} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
