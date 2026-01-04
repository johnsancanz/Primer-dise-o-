
import React from 'react';

const props = [
  {
    title: 'Sistemas Médicos de Élite',
    desc: 'Desarrollamos la infraestructura digital que su clínica necesita para proyectar autoridad y confianza desde el primer clic.',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'bg-primary/10',
    centerTitle: false
  },
  {
    title: 'Automatización Clínica con IA',
    desc: 'Despliega asistentes de triaje inteligentes 24/7 que gestionan citas, consultas y entrada de datos, liberando a tu personal médico.',
    icon: (
      <svg className="w-10 h-10 text-brandAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-brandAccent/10',
    centerTitle: true
  },
  {
    title: 'Adquisición de Pacientes',
    desc: 'Estrategias de conversión diseñadas quirúrgicamente para atraer y retener pacientes de alto valor de manera constante.',
    icon: (
      <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'bg-secondary/10',
    centerTitle: false
  }
];

const ValueProps: React.FC = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto py-40 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {props.map((p, i) => (
          <div key={i} className="group relative p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all duration-700">
            <div className={`w-20 h-20 ${p.color} rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform ${p.centerTitle ? 'mx-auto' : ''}`}>
              {p.icon}
            </div>
            <h3 className={`text-3xl font-bold mb-6 tracking-tight ${p.centerTitle ? 'text-center mx-auto max-w-xs' : ''}`}>
              {p.title}
            </h3>
            <p className={`text-white/40 text-lg leading-relaxed font-light ${p.centerTitle ? 'text-center' : ''}`}>
              {p.desc}
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
