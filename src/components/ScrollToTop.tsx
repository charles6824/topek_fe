import React, { useState, useEffect } from 'react';
import { ArrowUp } from '@phosphor-icons/react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-40 w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#e41a0f] hover:bg-[#c3150b] text-white flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none animate-fade-in cursor-pointer"
    >
      <ArrowUp size={20} weight="bold" />
    </button>
  );
};
