
import React from 'react';

const AlcoveSection: React.FC = () => {
  return (
    <section className="relative py-60 px-6 bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 alcove-gradient opacity-60 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-16 max-w-5xl">
        <div className="w-28 h-28 bg-gradient-to-tr from-gray-900 to-black rounded-[2.5rem] p-[3px] shadow-3xl animate-float">
          <div className="w-full h-full bg-dark rounded-[calc(2.5rem-3px)] flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            <div className="w-14 h-16 bg-primary rounded-t-full blur-md mt-6 shadow-[0_0_30px_rgba(0,210,255,0.6)]" />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-[60px] md:text-[90px] font-medium tracking-tighter text-[#fafafa] leading-[0.85] mb-4">
            Un espacio tranquilo para la <br />
            <span className="font-serif italic text-white/90">excelencia médica.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/30 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
            GrowMED simplifica la complejidad digital de la salud, permitiéndote enfocarte en lo que importa: tus pacientes.
          </p>
        </div>

        <div className="w-full max-w-xl bg-white rounded-3xl p-1.5 flex shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/10 group">
          <input 
            type="email" 
            placeholder="nombre-clinica@medico.com" 
            className="flex-1 px-8 py-5 bg-transparent text-black outline-none font-semibold text-lg placeholder:text-gray-400"
          />
          <button className="bg-black text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-800 transition-all active:scale-95">
            Empezar Ahora
          </button>
        </div>

        <div className="text-white/20 text-sm font-bold tracking-[0.3em] uppercase pt-4">
          Con la confianza de más de 500 clínicas privadas en todo el mundo
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] aspect-[3/1] bg-dark border-t border-white/5 rounded-[100%] shadow-[0_-40px_150px_rgba(0,210,255,0.1)]" />
    </section>
  );
};

export default AlcoveSection;
