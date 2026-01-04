
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-32 text-center px-4 overflow-hidden">
      <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest animate-fade-in">
        Revolutionizing Creator Workflows
      </div>
      
      <h1 className="text-[60px] leading-[1.1] md:text-[80px] font-extrabold max-w-4xl mb-6 tracking-tight">
        Build content that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">demands attention</span>.
      </h1>
      
      <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
        Lumina helps creators optimize every frame of their video with AI-powered analysis and seamless collaboration. Stop guessing, start growing.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center animate-float">
        <button className="relative group px-10 py-5 bg-primary rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(102,64,255,0.4)]">
          <span className="relative z-10">Start Your Free Trial</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
        <button className="px-10 py-5 rounded-full bg-white/5 border border-white/10 font-bold text-lg hover:bg-white/10 transition-all">
          Watch Demo
        </button>
      </div>

      <div className="mt-24 relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20">
        <img 
          src="https://picsum.photos/1200/800?grayscale" 
          alt="Platform dashboard" 
          className="w-full h-auto opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
