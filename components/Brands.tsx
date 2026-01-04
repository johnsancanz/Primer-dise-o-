
import React from 'react';

const brands = [
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/white' },
  { name: 'Gmail', icon: 'https://cdn.simpleicons.org/gmail/white' },
  { name: 'LinkedIn', icon: 'https://cdn.simpleicons.org/linkedin/white' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/white' },
  { name: 'Chrome', icon: 'https://cdn.simpleicons.org/googlechrome/white' },
  { name: 'Adobe', icon: 'https://cdn.simpleicons.org/adobe/white' },
  { name: 'Microsoft', icon: 'https://cdn.simpleicons.org/microsoft/white' },
  { name: 'Discord', icon: 'https://cdn.simpleicons.org/discord/white' },
  { name: 'Slack', icon: 'https://cdn.simpleicons.org/slack/white' },
];

const Brands: React.FC = () => {
  return (
    <section className="relative py-20 px-6 z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-[10px] md:text-xs font-bold text-white/20 uppercase tracking-[0.4em] mb-12">
          MARCAS CON LAS QUE TRABAJAMOS
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-30">
          {brands.map((brand, i) => (
            <div key={i} className="group transition-all duration-500 hover:opacity-100 hover:scale-110">
              <img 
                src={brand.icon} 
                alt={brand.name} 
                className="h-6 md:h-8 w-auto grayscale" 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Sutil divisor inferior */}
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mt-20" />
    </section>
  );
};

export default Brands;
