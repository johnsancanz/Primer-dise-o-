
import React from 'react';

const props = [
  {
    title: 'Lightning Fast Previewing',
    desc: 'See exactly how your thumbnails look across every platform UI instantly. No more uploads to private videos just to test contrast.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-primary/20'
  },
  {
    title: 'AI-Powered Insights',
    desc: 'Our advanced neural network analyzes your compositions for clarity, attention-pathing, and emotional impact before you go live.',
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'bg-secondary/20'
  },
  {
    title: 'Seamless Collaboration',
    desc: 'Invite your editors and managers to annotate directly on your frames. One link, unlimited feedback, total creative control.',
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'bg-green-400/20'
  }
];

const ValueProps: React.FC = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto py-32 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {props.map((p, i) => (
          <div key={i} className="group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center mb-8`}>
              {p.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
            <p className="text-white/50 leading-relaxed">
              {p.desc}
            </p>
            {/* Hover decoration */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
