
import React from 'react';

const brands = [
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/white' },
  { name: 'Gmail', icon: 'https://cdn.simpleicons.org/gmail/white' },
  { name: 'LinkedIn', icon: 'https://cdn.simpleicons.org/linkedin/white' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/white' },
  { name: 'Chrome', icon: 'https://cdn.simpleicons.org/googlechrome/white' },
  { name: 'YouTube', icon: 'https://cdn.simpleicons.org/youtube/white' },
  { name: 'X', icon: 'https://cdn.simpleicons.org/x/white' },
  { name: 'Microsoft', icon: 'https://cdn.simpleicons.org/microsoft/white' },
  { name: 'Discord', icon: 'https://cdn.simpleicons.org/discord/white' },
  { name: 'Slack', icon: 'https://cdn.simpleicons.org/slack/white' },
  { name: 'Brave', icon: 'https://cdn.simpleicons.org/brave/white' },
  { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/white' },
  { name: 'Facebook', icon: 'https://cdn.simpleicons.org/facebook/white' },
  { name: 'Adobe', icon: 'https://cdn.simpleicons.org/adobe/white' },
];

const Brands: React.FC = () => {
  // Duplicamos las marcas para el efecto de scroll infinito
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="relative py-12 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-8">
        <p className="text-[10px] md:text-xs font-bold text-white/20 uppercase tracking-[0.4em]">
          MARCAS CON LAS QUE TRABAJAMOS
        </p>
      </div>
      
      <div className="mask-sides relative">
        <div className="flex w-fit animate-marquee gap-12 md:gap-20 items-center whitespace-nowrap opacity-30">
          {duplicatedBrands.map((brand, i) => (
            <div key={i} className="group transition-all duration-500 hover:opacity-100 hover:scale-110 flex-shrink-0">
              <img 
                src={brand.icon} 
                alt={brand.name} 
                className="h-6 md:h-8 w-auto grayscale" 
                onError={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Sutil divisor inferior con menos margen */}
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mt-12" />
    </section>
  );
};

export default Brands;
