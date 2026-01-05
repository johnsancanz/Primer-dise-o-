
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 pt-32 pb-12 px-8 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-black text-xl">G</div>
            <span className="font-black text-2xl tracking-tighter text-white">
              Grow<span className="inline-block bg-gradient-to-r from-sky-400 to-purple-300 bg-clip-text text-transparent ml-1 px-0.5 italic font-serif">MED</span>
            </span>
          </div>
          <p className="text-white/30 text-sm leading-relaxed max-w-xs font-medium">
            Construyendo el futuro digital de la medicina. Nuestra misión es acelerar la excelencia médica mediante tecnología de élite.
          </p>
        </div>

        <div>
          <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-white/40">Soluciones</h4>
          <ul className="space-y-5 text-white/30 text-sm font-bold">
            <li><a href="#" className="hover:text-primary transition-colors">Portales Médicos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Herramientas de Triaje IA</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Analítica de Crecimiento</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-white/40">Soporte</h4>
          <ul className="space-y-5 text-white/30 text-sm font-bold">
            <li><a href="#" className="hover:text-primary transition-colors">Implementación</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Seguridad/Cumplimiento</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Documentación API</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-white/40">Conectar</h4>
          <div className="flex gap-5">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-white/20 text-xs gap-6">
        <p className="font-black tracking-widest uppercase">GrowMED &copy; 2025 - Infraestructura HIPAA Secure</p>
        <div className="flex gap-10 font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Cumplimiento</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
