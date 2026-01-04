
import React from 'react';

const AlcoveSection: React.FC = () => {
  return (
    <section className="relative py-48 px-6 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Luminescence */}
      <div className="absolute inset-0 alcove-gradient opacity-40 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-4xl">
        {/* Brand Icon/Logo Placeholder */}
        <div className="w-24 h-24 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-3xl p-[2px] shadow-2xl animate-float">
          <div className="w-full h-full bg-dark rounded-[calc(1.5rem-2px)] flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            <div className="w-12 h-14 bg-secondary/80 rounded-t-full blur-sm mt-4 shadow-[0_0_20px_rgba(250,145,26,0.5)]" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-[60px] md:text-[80px] font-medium tracking-tight text-[#f0f0f0] leading-[0.9]">
            A quiet place to<br />
            <span className="font-serif italic text-white/90">see what's new.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/40 max-w-lg mx-auto leading-relaxed tracking-tight">
            Lumina is the best way to keep up with your workflow, insights, and growth, without the noise.
          </p>
        </div>

        <div className="w-full max-w-md bg-white rounded-2xl p-1 flex shadow-2xl">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-6 py-4 bg-transparent text-black outline-none font-medium placeholder:text-gray-400"
          />
          <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors">
            Subscribe
          </button>
        </div>

        <div className="text-white/40 text-sm tracking-tight pt-4">
          Join the early access circle. No spam. No jibberjabber.
        </div>
      </div>

      {/* Decorative Ground Curve */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] aspect-[4/1] bg-dark border-t border-white/5 rounded-[100%] shadow-[0_-20px_100px_rgba(255,255,255,0.05)]" />
    </section>
  );
};

export default AlcoveSection;
