
import React from 'react';
import Hero from './components/Hero';
import Brands from './components/Brands';
import FeaturesShowcase from './components/FeaturesShowcase';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Background from './components/Background';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white">
      <Background />
      
      <main className="relative z-10">
        {/* El Hero tiene el protagonismo al inicio */}
        <Hero />
        
        {/* Sección de Marcas regresada a su posición original tras el Hero */}
        <Brands />

        {/* Proposiciones de Valor / Características */}
        <div className="relative z-20">
          <FeaturesShowcase />
        </div>

        {/* Testimonios */}
        <div className="relative z-20">
          <Testimonials />
        </div>

        {/* Formulario de Asesoría */}
        <div id="contact" className="py-16 relative z-20">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
