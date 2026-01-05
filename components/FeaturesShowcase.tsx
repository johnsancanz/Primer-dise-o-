
import React from 'react';

const FeaturesShowcase: React.FC = () => {
  return (
    <section id="features" className="w-full py-0 space-y-0 overflow-hidden bg-black">
      {/* 01. AUDITORÍA */}
      <div className="w-full min-h-[60vh] grid grid-cols-1 lg:grid-cols-2 border-b border-white/5">
        {/* Visualización de Datos (Izquierda) */}
        <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16 bg-[#050505]">
          <div className="w-full max-w-2xl bg-[#0a0a0b] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative z-10">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <span className="text-white/60 font-medium text-base">Valor mensual</span>
              <span className="text-emerald-400 font-bold text-xl">32.500 dólares</span>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                { label: 'Generación de clientes potenciales', value: '15 horas' },
                { label: 'Comunicación con el cliente', value: '12 horas' },
                { label: 'Calificación principal', value: '8 horas' },
                { label: 'Publicaciones en redes sociales', value: '6 horas' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-white/40 text-sm md:text-base">{item.label}</span>
                  <span className="text-white font-bold text-base">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111827]/50 border border-blue-500/20 rounded-2xl p-6">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">$390k+</div>
                <div className="text-[10px] uppercase tracking-wider text-white/30 font-bold">Valor anual proyectado</div>
              </div>
              <div className="bg-[#1e1b4b]/50 border border-purple-500/20 rounded-2xl p-6">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">13 veces</div>
                <div className="text-[10px] uppercase tracking-wider text-white/30 font-bold">ROI Año 1</div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 rounded-full opacity-30" />
        </div>

        {/* Texto (Derecha) */}
        <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-black">
          <div className="max-w-3xl w-full space-y-6">
            <div className="inline-flex px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
              01. AUDITORÍA
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tighter">
              Encuentra el <br />
              <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-500 bg-clip-text text-transparent">Las mayores oportunidades</span>
            </h2>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light">
              Identificamos sus cuellos de botella, descubrimos oportunidades de alto valor y cuantificamos exactamente cuánto tiempo y dinero le queda sobre la mesa. Es obtienes una hoja de ruta clara con el valor del proyecto y las proyecciones de retorno de la inversión para que pueda tomar decisiones informadas.
            </p>
          </div>
        </div>
      </div>

      {/* 02. PROYECTOS PERSONALIZADOS */}
      <div className="w-full min-h-[60vh] grid grid-cols-1 lg:grid-cols-2 border-b border-white/5">
        {/* Texto (Izquierda) */}
        <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-black order-1">
          <div className="max-w-3xl w-full space-y-6">
            <div className="inline-flex px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-black uppercase tracking-widest">
              02. PROYECTOS PERSONALIZADOS
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tighter">
              Escala Sin <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">Contratando a más personas</span>
            </h2>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light">
              Desde la generación avanzada de clientes potenciales y la automatización de las redes sociales hasta sistemas de datos complejos. Imagina duplicar tu producción sin duplicar tu equipo. Sistemas de IA personalizados que manejan el trabajo de 5-10 empleados, funcionando 24/7 sin errores. Ese no es el futuro. Eso es lo que construimos hoy.
            </p>
          </div>
        </div>

        {/* Visualización Mockup (Derecha) */}
        <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16 bg-[#050505] order-2">
          <div className="w-full max-w-2xl bg-[#0a0a0b] border border-white/10 rounded-[3rem] p-10 aspect-video flex flex-col justify-center relative shadow-2xl overflow-hidden group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-white/10" />
              <div className="space-y-2">
                <div className="w-32 h-3 bg-white/10 rounded-full" />
                <div className="w-20 h-2 bg-white/5 rounded-full" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="w-full h-4 bg-white/5 rounded-full" />
              <div className="w-11/12 h-4 bg-white/5 rounded-full" />
              <div className="w-4/5 h-4 bg-white/5 rounded-full" />
            </div>
            
            {/* Notificación flotante */}
            <div className="absolute top-1/2 right-6 -translate-y-1/2 animate-float">
              <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <span className="text-xs font-bold text-white whitespace-nowrap">Nuevo cliente potencial capturado</span>
              </div>
            </div>

            <div className="mt-8 flex gap-6 text-[10px] text-white/20 font-black uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500/20" /> 1.240 Me gusta
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500/20" /> 48 comentarios
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-brandAccent/5 blur-[120px] -z-10 rounded-full opacity-30" />
        </div>
      </div>

      {/* 03. EDUCACIÓN */}
      <div className="w-full min-h-[60vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Visualización de Ahorro de Tiempo (Izquierda) */}
        <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16 bg-[#050505]">
          <div className="w-full max-w-2xl bg-[#0a0a0b] border border-white/10 rounded-[3rem] p-10 md:p-12 shadow-2xl relative z-10 flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">TIEMPO AHORRADO MENSUALMENTE</p>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">80-320 horas</h3>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-2 cursor-pointer hover:bg-emerald-500/20 transition-all">
                Por sistema <span className="text-base">↗</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-emerald-950/20 border border-emerald-500/10 rounded-[1.5rem] p-6 space-y-2">
                <p className="text-xl md:text-2xl font-black text-white leading-tight">4,3 millones de dólares</p>
                <p className="text-[10px] text-emerald-500/60 font-bold uppercase tracking-widest">Ingresos generados por el cliente</p>
              </div>
              <div className="bg-emerald-950/20 border border-emerald-500/10 rounded-[1.5rem] p-6 space-y-2">
                <p className="text-3xl md:text-4xl font-black text-white leading-tight">100%</p>
                <p className="text-[10px] text-emerald-500/60 font-bold uppercase tracking-widest">ROI garantizado</p>
              </div>
            </div>

            {/* Gráfico de barras */}
            <div className="flex items-end gap-3 h-24 mt-auto">
              {[30, 45, 35, 60, 40, 100].map((height, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-lg transition-all duration-1000 ${i === 5 ? 'bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)]' : 'bg-white/5'}`} 
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-emerald-500/5 blur-[150px] -z-10 rounded-full opacity-40" />
        </div>

        {/* Texto (Derecha) */}
        <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-black">
          <div className="max-w-3xl w-full space-y-6">
            <div className="inline-flex px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
              03. EDUCACIÓN
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tighter">
              Maestro <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Arquitectura de sistemas de IA</span>
            </h2>
            <p className="text-base md:text-lg text-white/40 leading-relaxed font-light">
              Conozca los marcos exactos que utilizamos para construir sistemas de IA de nivel empresarial. Sin teoría, sin pelusa. Solo la arquitectura técnica que impulsa negocios reales. Únete a más de 1.000 fundadores que construyen el futuro con IA.
            </p>
            <button className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-black text-lg rounded-xl hover:scale-105 transition-all shadow-[0_15px_40px_rgba(16,185,129,0.3)]">
              Únete a la comunidad
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
