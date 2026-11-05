import React, { useState } from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { DIVISIONS, type DivisionItem } from '../data/topekData';
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
  MagnifyingGlass,
  CheckCircle,
  FileText,
  X
} from '@phosphor-icons/react';

const iconMap: Record<string, React.ReactNode> = {
  Buildings: <Buildings size={32} weight="duotone" className="text-[#c1121f]" />,
  Compass: <Compass size={32} weight="duotone" className="text-[#c1121f]" />,
  Users: <Users size={32} weight="duotone" className="text-[#c1121f]" />,
  HouseLine: <HouseLine size={32} weight="duotone" className="text-[#c1121f]" />,
  Armchair: <Armchair size={32} weight="duotone" className="text-[#c1121f]" />,
  Package: <Package size={32} weight="duotone" className="text-[#c1121f]" />,
  Plant: <Plant size={32} weight="duotone" className="text-[#c1121f]" />,
  Truck: <Truck size={32} weight="duotone" className="text-[#c1121f]" />,
};

interface ServicesPageProps {
  onOpenContact: (division?: string) => void;
  onSelectDivision?: (division: DivisionItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenContact,
  onSelectDivision
}) => {
  const [search, setSearch] = useState('');

  const filteredDivisions = DIVISIONS.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      d.fullDescription.toLowerCase().includes(search.toLowerCase()) ||
      d.capabilities.some((c) => c.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <PageBanner
        title="8 Integrated Divisions &"
        titleAccent="Specialist Engineering Trades"
        badge="COMPREHENSIVE TECHNICAL DIRECTORY · RC 1946874"
        subtitle="Multidisciplinary civil engineering, architectural geomatics, industrial gas networks, real estate development, and overland heavy haulage."
        breadcrumbs={[{ label: 'Our 8 Divisions' }]}
        bgImage="/assets/projects/hero-industrial-complex.png"
      />

      <section className="py-16 sm:py-24 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#e5e4de]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  Comprehensive Technical Directory · RC 1946874
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#141518] font-heading tracking-tight">
                Specialized Service Divisions
              </h2>
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search divisions & capabilities..."
                className="w-full text-xs pl-9 pr-9 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#c1121f] bg-white shadow-2xs"
              />
              <MagnifyingGlass size={16} weight="bold" className="absolute left-3 top-3.5 text-[#8a8d98]" />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-3.5 text-[#8a8d98] hover:text-[#141518] transition-colors cursor-pointer"
                >
                  <X size={14} weight="bold" />
                </button>
              )}
            </div>
          </div>

          {/* 8 Divisions Detailed Cards */}
          <div className="space-y-10">
            {filteredDivisions.map((div, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={div.id}
                  id={div.slug}
                  className="bg-white rounded-xs overflow-hidden border border-[#e5e4de] hover:border-[#141518] shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Visual Project Image */}
                    <div className={`lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] bg-[#141518] ${isEven ? 'lg:order-2' : ''}`}>
                      <img
                        src={div.image}
                        alt={div.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/90 via-transparent to-transparent"></div>

                      <div className="absolute top-4 left-4 bg-[#141518] text-white text-xs font-mono font-bold px-3 py-1 rounded-xs border border-[#2e3138]">
                        DIVISION 0{div.number}
                      </div>

                      <div className="absolute bottom-4 inset-x-4 text-white">
                        <span className="text-[10px] font-mono font-bold text-[#c27803] uppercase tracking-wider block">
                          Operational Portfolio
                        </span>
                        <h4 className="text-sm font-bold truncate font-heading">{div.subtitle}</h4>
                      </div>
                    </div>

                    {/* Narrative & Capabilities */}
                    <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-12 h-12 rounded-xs bg-[#f5f4f0] text-[#c1121f] flex items-center justify-center border border-[#e5e4de] shrink-0">
                            {iconMap[div.icon] || <Buildings size={26} weight="bold" />}
                          </div>
                          <div>
                            <span className="text-[11px] font-mono font-semibold text-[#c27803] uppercase tracking-wider block">
                              {div.subtitle}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-[#141518] font-heading">
                              {div.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-[#555861] leading-relaxed font-sans">
                          {div.fullDescription}
                        </p>

                        {/* Capabilities Checklist */}
                        <div className="pt-2">
                          <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#8a8d98] mb-2.5">
                            Specialist Technical Capabilities:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {div.capabilities.map((cap, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#141518] bg-[#faf9f6] p-2.5 rounded-xs border border-[#e5e4de]">
                                <CheckCircle size={14} weight="fill" className="text-[#c1121f] shrink-0" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-6 mt-6 border-t border-[#f0eee6] flex flex-wrap items-center justify-between gap-3">
                        <button
                          onClick={() => onOpenContact(`Inquiry: Division ${div.number} - ${div.title}`)}
                          className="inline-flex items-center gap-2 bg-[#c1121f] hover:bg-[#141518] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xs transition-colors shadow-2xs cursor-pointer"
                        >
                          <FileText size={15} weight="bold" />
                          <span>Request Division RFQ</span>
                        </button>

                        <button
                          onClick={() => onSelectDivision && onSelectDivision(div)}
                          className="text-xs font-bold text-[#141518] hover:text-[#c1121f] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors"
                        >
                          <span>Explore Detailed Specifications</span>
                          <ArrowRight size={14} weight="bold" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner onContactClick={() => onOpenContact('General Divisions Consultation')} />
    </div>
  );
};
