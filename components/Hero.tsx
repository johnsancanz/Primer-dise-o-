
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-24 text-center px-6 overflow-hidden min-h-[90vh]">
      {/* Brillo Cósmico de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />
      
      <div className="relative z-20 flex flex-col items-center">
        {/* Logotipo Centrado con animación de entrada */}
        <div className="text-6xl md:text-7xl font-black tracking-tighter mb-8 flex items-center animate-reveal opacity-0-start">
          <span className="text-white">Grow</span>
          <span className="inline-block bg-gradient-to-r from-sky-400 to-purple-300 bg-clip-text text-transparent ml-1 px-1 italic font-serif">MED</span>
        </div>

        <div className="inline-block px-5 py-2 mb-10 rounded-full bg-white/5 border border-white/10 text-primary/80 text-xs font-bold uppercase tracking-[0.2em] animate-reveal delay-100 opacity-0-start">
          EL FUTURO DEL CRECIMIENTO MEDICO
        </div>
        
        <div className="relative mb-12 animate-reveal delay-200 opacity-0-start">
          <h1 className="text-[60px] md:text-[88px] font-black max-w-5xl tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-none relative z-20">
            Impulsa tu práctica con <br />
            <span className="text-primary italic font-serif">sistemas web inteligentes.</span>
          </h1>
        </div>
        
        {/* Párrafo descriptivo */}
        <p className="text-base md:text-lg text-white/50 max-w-2xl mb-12 leading-relaxed font-light relative z-20 animate-reveal delay-300 opacity-0-start">
          Nos especializamos en construir portales médicos de alto rendimiento y automatización con IA 
          que transforman clínicas locales en autoridades digitales líderes del sector.
        </p>
        
        <div className="flex items-center justify-center relative z-20 animate-reveal delay-400 opacity-0-start">
          <a 
            href="#contact"
            onClick={scrollToContact}
            className="px-16 py-5 bg-primary text-black rounded-full font-black text-lg hover:scale-105 active:scale-95 hover:shadow-[0_0_60px_rgba(0,210,255,0.4)] transition-all duration-500 shadow-[0_0_40px_rgba(0,210,255,0.2)] inline-block cursor-pointer"
          >
            Iniciar Crecimiento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
