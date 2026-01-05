
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-6">
      <nav className="mx-auto max-w-6xl flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/5 rounded-full px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-brandAccent rounded-xl flex items-center justify-center font-black text-black">G</div>
          <span className="font-extrabold text-2xl tracking-tighter text-white">
            Grow<span className="inline-block bg-gradient-to-r from-sky-400 to-purple-300 bg-clip-text text-transparent ml-1 px-0.5 italic font-serif">MED</span>
          </span>
        </div>
        <div className="hidden md:flex gap-10 items-center text-sm font-semibold text-white/60">
          <a href="#features" className="hover:text-primary transition-colors">Soluciones</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Casos de Éxito</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
        </div>
        <div>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-xl">
            Agendar Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
