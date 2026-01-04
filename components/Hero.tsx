
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-48 text-center px-6 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="inline-block px-5 py-2 mb-10 rounded-full bg-white/5 border border-white/10 text-primary/80 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
        El Futuro del Crecimiento Médico
      </div>
      
      <h1 className="text-[60px] md:text-[88px] font-black max-w-5xl mb-8 tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-none">
        Impulsa tu práctica con <br />
        <span className="text-primary italic font-serif">sistemas web inteligentes.</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-white/50 max-w-3xl mb-16 leading-relaxed font-light">
        Nos especializamos en construir portales médicos de alto rendimiento y automatización con IA 
        que transforman clínicas locales en autoridades digitales líderes del sector.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <button className="px-12 py-5 bg-primary text-black rounded-full font-black text-lg hover:scale-105 transition-all shadow-[0_0_50px_rgba(0,210,255,0.3)]">
          Iniciar Crecimiento
        </button>
        <button className="px-12 py-5 rounded-full bg-white/5 border border-white/10 font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md">
          Ver Casos de Éxito
        </button>
      </div>
    </section>
  );
};

export default Hero;
