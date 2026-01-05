
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full py-10 px-10 z-50 flex justify-center md:justify-start">
      <div className="text-3xl font-black tracking-tighter flex items-center">
        <span className="text-white">Grow</span>
        <span className="inline-block bg-gradient-to-r from-sky-400 to-purple-300 bg-clip-text text-transparent ml-1 px-1 italic font-serif">MED</span>
      </div>
    </div>
  );
};

export default Header;
