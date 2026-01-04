
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-16 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-brandAccent to-primary" />
        
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black mb-4">Solicitar Asesoría</h3>
          <p className="text-white/40 text-lg font-light">Descubre cómo la IA puede optimizar tu crecimiento clínico.</p>
        </div>

        {submitted ? (
          <div className="py-20 text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-2xl font-black">Asesoría Solicitada.</p>
            <p className="text-white/40">Nuestros consultores clínicos le contactarán a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-white/30 uppercase tracking-[0.2em] ml-1">Nombre de la Clínica</label>
                <input 
                  required
                  type="text" 
                  placeholder="Clínica Dental Avanzada"
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] transition-all rounded-2xl px-6 py-4 outline-none text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-white/30 uppercase tracking-[0.2em] ml-1">Correo Corporativo</label>
                <input 
                  required
                  type="email" 
                  placeholder="admin@clinica.com"
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] transition-all rounded-2xl px-6 py-4 outline-none text-lg"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-white/30 uppercase tracking-[0.2em] ml-1">Tipo de Especialidad</label>
              <select className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] transition-all rounded-2xl px-6 py-4 outline-none text-lg appearance-none">
                <option className="bg-dark">Cardiología</option>
                <option className="bg-dark">Clínica Privada Especializada</option>
                <option className="bg-dark">Hospital General</option>
                <option className="bg-dark">Clínica Dental/Ortodoncia</option>
                <option className="bg-dark">Otro Centro Médico</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-white/30 uppercase tracking-[0.2em] ml-1">Objetivos de Crecimiento</label>
              <textarea 
                required
                rows={4}
                placeholder="Describa brevemente sus metas de expansión..."
                className="w-full bg-white/[0.03] border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] transition-all rounded-2xl px-6 py-4 outline-none resize-none text-lg"
              />
            </div>
            <button className="w-full py-6 bg-primary text-black font-black text-xl rounded-2xl hover:scale-[1.02] transition-all active:scale-95 shadow-2xl">
              Solicitar Asesoría Gratuita
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
