
import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import AlcoveSection from './components/AlcoveSection';
import Background from './components/Background';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white">
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Value Proposition Sections 1, 2, 3 */}
        <ValueProps />

        {/* Alcove-styled replication section */}
        <AlcoveSection />

        {/* Testimonials and Proof */}
        <Testimonials />

        {/* Bottom integrated form */}
        <div id="contact" className="py-24">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
