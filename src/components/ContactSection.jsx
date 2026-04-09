import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de Devis - ${formData.company || formData.name}`);
    const body = encodeURIComponent(`Nouveau message depuis le site web MODERN LIFE :\n\nNom: ${formData.name}\nSociété: ${formData.company || 'N/A'}\nEmail: ${formData.email}\n\nCahier des charges:\n${formData.message}`);
    
    // Ouvre le client mail par défaut (Outlook, Apple Mail, Gmail...)
    window.location.href = `mailto:relifungula@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset optionnel du formulaire
    setFormData({ name: '', company: '', email: '', message: '' });
  };
  return (
    <section id="contact" className="py-32 bg-darker relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 pattern-grid-dark opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 space-y-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-10 h-[2px] bg-primary"></span>
                <h2 className="text-white font-bold tracking-widest uppercase text-sm">{t('contact.tag')}</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {t('contact.title')} <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">{t('contact.titleHighlight')}</span>
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                {t('contact.desc')}
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp 1 */}
              <a
                href="https://wa.me/243994038768"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MessageCircle size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-1">{t('contact.dg')}</div>
                  <div className="text-xl font-medium text-white tracking-wide">+243 994 038 768</div>
                </div>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/243814158525"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-1">{t('contact.dt')}</div>
                  <div className="text-xl font-medium text-white tracking-wide">+243 814 158 525</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:relifungula@gmail.com"
                className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-1">{t('contact.be')}</div>
                  <div className="text-xl font-medium text-white tracking-wide">relifungula@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <form className="glass-panel-dark rounded-[2.5rem] p-10 md:p-14" onSubmit={handleSubmit}>
              <h4 className="text-2xl font-bold text-white mb-8">{t('contact.form.title')}</h4>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t('contact.form.nameLabel')}</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/5 rounded-2xl border border-white/10 text-white focus:bg-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t('contact.form.companyLabel')}</label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/5 rounded-2xl border border-white/10 text-white focus:bg-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t('contact.form.emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 rounded-2xl border border-white/10 text-white focus:bg-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t('contact.form.msgLabel')}</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 rounded-2xl border border-white/10 text-white focus:bg-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none"
                    placeholder={t('contact.form.msgPlaceholder')}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-dark py-5 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group mt-4 shadow-xl"
                >
                  {t('contact.form.submit')}
                  <Send size={20} fill="currentColor" className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
