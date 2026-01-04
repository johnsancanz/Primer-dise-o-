
import React from 'react';
import Hero from './components/Hero';
import Brands from './components/Brands';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Background from './components/Background';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white">
      <Background />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Sección de Marcas */}
        <Brands />
        
        {/* Proposiciones de Valor */}
        <div className="relative z-20">
          <ValueProps />
        </div>

        {/* Testimonios */}
        <div className="relative z-20">
          <Testimonials />
        </div>

        {/* Formulario de Asesoría */}
        <div id="contact" className="py-24 relative z-20">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
