
import React, { useMemo } from 'react';

const Background: React.FC = () => {
  // Generamos estrellas una sola vez
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      blur: Math.random() > 0.8 ? '1px' : '0px',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Brillo Cósmico Central Sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full cosmic-radial animate-glow-pulse" />

      {/* Capa de Estrellas en Movimiento (Seamless Loop) de Izquierda a Derecha */}
      <div className="absolute inset-0 flex w-[200%] animate-stars-move opacity-40">
        <div className="relative w-full h-full">
          {stars.map((star) => (
            <div
              key={`star-a-${star.id}`}
              className="absolute bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                filter: `blur(${star.blur})`,
              }}
            />
          ))}
        </div>
        <div className="relative w-full h-full">
          {stars.map((star) => (
            <div
              key={`star-b-${star.id}`}
              className="absolute bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                filter: `blur(${star.blur})`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Viñeta de Profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent opacity-80" />
    </div>
  );
};

export default Background;
