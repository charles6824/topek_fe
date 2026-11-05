import React from 'react';
import { Link } from 'react-router-dom';
import {
  Buildings,
  Compass,
  Users,
  HouseLine,
  Armchair,
  Package,
  Plant,
  Truck,
  ArrowRight,
  CheckCircle
} from '@phosphor-icons/react';
import { DIVISIONS, type DivisionItem } from '../data/topekData';

const divisionIconMap: Record<string, React.ReactNode> = {
  Buildings: <Buildings size={28} weight="duotone" className="text-[#d62828]" />,
  Compass: <Compass size={28} weight="duotone" className="text-[#d62828]" />,
  Users: <Users size={28} weight="duotone" className="text-[#d62828]" />,
  HouseLine: <HouseLine size={28} weight="duotone" className="text-[#d62828]" />,
  Armchair: <Armchair size={28} weight="duotone" className="text-[#d62828]" />,
  Package: <Package size={28} weight="duotone" className="text-[#d62828]" />,
  Plant: <Plant size={28} weight="duotone" className="text-[#d62828]" />,
  Truck: <Truck size={28} weight="duotone" className="text-[#d62828]" />,
};

interface ServicesSectionProps {
  onSelectDivision?: (division: DivisionItem) => void;
  limit?: number;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectDivision, limit }) => {
  const displayedDivisions = limit ? DIVISIONS.slice(0, limit) : DIVISIONS;

  return (
    <section
      id="divisions"
      className="py-20 sm:py-28 bg-[#f5f4f0] relative border-b border-[#e5e4de]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
            <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
              Multidisciplinary Synergy · Vertical Integration
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141518] uppercase font-heading tracking-tight leading-tight">
            8 INTEGRATED ENGINEERING DIVISIONS.
          </h2>
          <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
          <p className="text-sm sm:text-base text-[#555861] font-sans leading-relaxed">
            From high-tolerance reinforced civil foundations and cross-country gas pipelines to turnkey property development, bespoke interior fit-outs, and heavy machinery logistics.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedDivisions.map((div) => (
            <div
              key={div.id}
              onClick={() => onSelectDivision && onSelectDivision(div)}
              className="bg-white rounded-xs overflow-hidden border border-[#e5e4de] hover:border-[#141518] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Division Image Header */}
                <div className="relative h-44 overflow-hidden bg-[#141518]">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/80 via-transparent to-transparent"></div>

                  {/* Architectural Division Index Number */}
                  <div className="absolute top-3 left-3 bg-[#141518] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs tracking-wider uppercase border border-[#2e3138]">
                    DIV 0{div.number}
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/95 text-[#141518] group-hover:bg-[#c1121f] group-hover:text-white rounded-xs flex items-center justify-center transition-colors">
                    {divisionIconMap[div.icon] || <Buildings size={20} weight="bold" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#141518] group-hover:text-[#c1121f] transition-colors font-heading leading-snug line-clamp-2">
                    {div.title}
                  </h3>
                  <p className="text-[10px] font-mono font-semibold text-[#c27803] uppercase tracking-wider mt-1 mb-2.5 line-clamp-1">
                    {div.subtitle}
                  </p>
                  <p className="text-xs text-[#5f636e] leading-relaxed line-clamp-3 mb-4 font-sans">
                    {div.shortDescription}
                  </p>

                  {/* Capabilities snippet */}
                  <div className="space-y-1.5 pt-3 border-t border-[#f0eee6]">
                    {div.capabilities.slice(0, 2).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#4a4d56] font-medium">
                        <CheckCircle size={13} weight="fill" className="text-[#c1121f] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 py-3 bg-[#faf9f6] border-t border-[#e5e4de] flex items-center justify-between text-xs font-bold text-[#141518] group-hover:text-[#c1121f] uppercase tracking-wider transition-colors">
                <Link to={div.link} className="flex items-center justify-between w-full">
                  <span>Explore Division</span>
                  <ArrowRight size={13} weight="bold" className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#141518] hover:bg-[#c1121f] text-white px-8 py-3.5 rounded-xs text-xs font-bold uppercase tracking-widest transition-colors shadow-xs"
            >
              <span>Explore All 8 Integrated Divisions</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
