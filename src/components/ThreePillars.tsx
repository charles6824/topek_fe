import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { THREE_PILLARS } from '../data/topekData';

export const ThreePillars: React.FC = () => {
  return (
    <section id="pillars" className="w-full border-b border-[#e5e4de]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {THREE_PILLARS.map((pillar) => (
          <div key={pillar.number} className="flex flex-col">
            {/* Color Content Card */}
            <div
              className={`${pillar.bgColor} text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <span className="text-3xl sm:text-4xl font-black text-white/90 font-mono block mb-3 sm:mb-4">
                  {pillar.number}
                </span>
                <div className="w-10 h-1 bg-white/30 mb-4"></div>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-2 sm:mb-3 font-heading text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans max-w-sm">
                  {pillar.text}
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <Link
                  to="/services"
                  className="group/btn inline-flex items-center gap-2 border border-white/50 text-white hover:bg-white hover:text-[#141518] px-4.5 py-2.5 rounded-xs text-xs font-bold uppercase tracking-widest transition-all duration-300"
                >
                  <span>Explore Division</span>
                  <ArrowRight size={13} weight="bold" className="transform group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>

              {/* Architectural Watermark */}
              <div className="absolute -right-3 -bottom-5 text-8xl font-black text-white/5 select-none pointer-events-none font-mono">
                {pillar.number}
              </div>
            </div>

            {/* Accompanying Photo */}
            <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden bg-[#141518] group">
              <img
                src={pillar.image}
                alt={pillar.imageAlt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
