
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4">
      <nav className="mx-auto max-w-5xl flex justify-between items-center bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">L</div>
          <span className="font-bold text-xl tracking-tight">LUMINA</span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
            Join Early
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
