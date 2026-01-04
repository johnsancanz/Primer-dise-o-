
import React, { useMemo } from 'react';

const Background: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 200}%`, // Wider than 100% for the animation
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-dark">
      {/* Soft Luminescence Layers */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[100px] animate-glow-pulse delay-1000" />
      
      {/* Animated Star Field */}
      <div className="absolute inset-0 animate-stars-move flex">
        <div className="relative flex-shrink-0 w-screen h-full">
          {stars.map((star) => (
            <div
              key={`star-1-${star.id}`}
              className="absolute bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
        {/* Duplicate for seamless looping */}
        <div className="relative flex-shrink-0 w-screen h-full">
          {stars.map((star) => (
            <div
              key={`star-2-${star.id}`}
              className="absolute bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
      </div>

      {/* Radial overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark opacity-80" />
    </div>
  );
};

export default Background;
