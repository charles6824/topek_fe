import React from 'react';
import { MapPin } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../data/topekData';

export const MapSection: React.FC = () => {
  return (
    <section className="relative w-full h-[340px] sm:h-[440px] bg-[#141518] overflow-hidden border-b border-[#23252a]">
      <iframe
        title="TOPEK Construction Limited Head Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.394312132106!2d3.342491414094325!3d6.5978190241269985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b930b799083d9%3A0x5b0854072ca354fc!2sTopek%20Engineering%20Limited!5e0!3m2!1sen!2sng!4v1614631100532!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full filter grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
      ></iframe>

      {/* Architectural Head Office Card Overlay */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#141518]/95 backdrop-blur-md p-4 sm:p-5 rounded-xs shadow-xl border border-[#2e3138] max-w-[280px] sm:max-w-sm hidden sm:block text-white">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xs bg-[#c1121f] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs hover:scale-110 hover:shadow-[0_0_12px_rgba(193,18,31,0.6)] transition-all duration-300 cursor-pointer">
            <MapPin size={16} weight="fill" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
                Operational Head Office
              </h4>
              <span className="text-[9px] font-mono text-[#c1121f] font-semibold bg-red-950/80 px-1 py-0.5 rounded-xs border border-red-800">
                LAGOS
              </span>
            </div>
            <p className="text-xs text-[#a1a1aa] leading-relaxed font-sans">
              {COMPANY_INFO.address}
            </p>
            <a
              href="https://maps.google.com/?q=Topek+Construction+Limited+Ikeja+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-[#c1121f] hover:text-white transition-colors mt-2.5 inline-block uppercase tracking-wider"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
