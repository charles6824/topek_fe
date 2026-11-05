import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, CheckSquare } from '@phosphor-icons/react';
import { PROJECTS } from '../data/topekData';

interface WelcomeSectionProps {
  onImageClick: (image: string, title: string) => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onImageClick }) => {
  const showcaseProjects = PROJECTS.slice(0, 3);
  const featured = PROJECTS[0]; // Mangal Cement Pipeline

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Credentials */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  Corporate Governance · CAC RC: 1946874
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black uppercase text-[#141518] font-heading tracking-tight leading-[1.15]">
                ENGINEERING NIGERIA'S <br />
                <span className="text-[#c1121f]">INDUSTRIAL LANDMARKS.</span>
              </h2>
              <div className="w-12 h-1 bg-[#c1121f] mt-4"></div>
            </div>

            <p className="text-sm sm:text-base text-[#4a4d56] leading-relaxed font-sans">
              <strong>TOPEK Construction Limited</strong> is an indigenous Nigerian multidisciplinary general contractor. We engineer, procure, and construct heavy industrial complexes, natural gas pipeline infrastructure, reinforced civil structures, and commercial campuses.
            </p>

            <p className="text-sm text-[#5f636e] leading-relaxed font-sans">
              Operating nationwide from head offices in Ikeja, Lagos, our in-house fleet of 70+ heavy construction machines and senior COREN-certified engineers enable turnkey mobilization without third-party rental delays.
            </p>

            {/* Engineering Standards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: 'COREN Master Engineers', desc: 'Full Nigerian Engineering Regulation' },
                { title: 'ISO 9001 & 45001 Compliant', desc: 'Total Quality & Zero-Harm HSE' },
                { title: '750,000+ Safe Hours', desc: 'Zero Lost Time Injury (LTI) Record' },
                { title: '70+ Owned Heavy Machines', desc: 'CAT, Tadano, Komatsu & Howo Fleet' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-3.5 border border-[#e5e4de] rounded-xs shadow-2xs">
                  <div className="flex items-center gap-2">
                    <CheckSquare size={16} weight="fill" className="text-[#c1121f] shrink-0" />
                    <span className="text-xs font-bold text-[#141518] uppercase tracking-wide font-heading">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-[#71717a] mt-1 pl-6">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Link
                to="/who-we-are"
                className="inline-flex items-center gap-2 bg-[#141518] hover:bg-[#c1121f] text-white px-7 py-3.5 rounded-xs text-xs font-bold uppercase tracking-widest transition-colors shadow-xs"
              >
                <span>Corporate Overview</span>
                <ArrowRight size={14} weight="bold" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border border-[#141518] text-[#141518] hover:bg-[#141518] hover:text-white px-6 py-3.5 rounded-xs text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <span>Verified Portfolio</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Site Composition */}
          <div className="lg:col-span-6 relative">
            {/* Primary Site Photo Feature */}
            <div 
              onClick={() => onImageClick(featured.image, featured.title)}
              className="relative rounded-xs overflow-hidden border border-[#23252a] shadow-xl group cursor-pointer bg-[#141518] aspect-4/3"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/90 via-[#141518]/30 to-transparent"></div>

              {/* Verified EPC Stamp */}
              <div className="absolute top-4 left-4 bg-[#c1121f] text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-xs font-bold shadow-sm">
                FLAGSHIP EPC PROJECT
              </div>

              {/* Bottom Project Legend */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c27803] font-bold">
                  Client: {featured.client}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-heading uppercase text-white mt-0.5 line-clamp-1">
                  {featured.title}
                </h3>
                <p className="text-[11px] text-[#d4d4d8] mt-1 line-clamp-2">
                  {featured.scope} · {featured.location}
                </p>
              </div>

              {/* Hover Inspect Icon */}
              <div className="absolute inset-0 bg-[#141518]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white text-[#141518] rounded-xs flex items-center justify-center shadow-lg">
                  <Eye size={22} weight="bold" />
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Site Card */}
            <div className="hidden sm:grid grid-cols-2 gap-3 mt-3">
              {showcaseProjects.slice(1, 3).map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onImageClick(proj.image, proj.title)}
                  className="relative h-28 rounded-xs overflow-hidden border border-[#e5e4de] bg-[#141518] group cursor-pointer"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#141518]/60 group-hover:bg-[#141518]/40 transition-colors"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[9px] font-mono uppercase text-[#c27803] font-semibold">{proj.client}</span>
                    <p className="text-xs font-bold truncate font-heading">{proj.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
