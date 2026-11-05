import React from 'react';
import { ArrowRight, PhoneCall } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../data/topekData';

interface CtaBannerProps {
  onContactClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onContactClick }) => {
  return (
    <section className="bg-[#c1121f] text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#9b0d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white"></div>
              <span className="font-mono text-[11px] font-semibold text-white/80 uppercase tracking-[0.2em]">
                Direct Engineering Engagement · CAC RC: 1946874
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight font-heading leading-tight text-white">
              COMMISSION TOPEK CONSTRUCTION ON YOUR NEXT CAPITAL PROJECT.
            </h2>

            <p className="text-xs sm:text-sm text-white/90 max-w-xl font-sans leading-relaxed">
              Direct consultation with our resident COREN-certified engineers, full Bill of Quantities (BOQ) review, and turnkey equipment mobilization across Lagos, Abuja, and nationwide industrial corridors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <button
              onClick={onContactClick}
              className="group/btn inline-flex items-center gap-2 bg-[#141518] hover:bg-white hover:text-[#141518] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xs text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>Submit Project RFQ</span>
              <ArrowRight size={15} weight="bold" className="transform group-hover/btn:translate-x-1.5 transition-transform duration-200" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="group/call inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-xs text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 border border-white/40"
            >
              <PhoneCall size={16} weight="bold" className="group-hover/call:scale-115 group-hover/call:rotate-12 transition-transform duration-200" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
