import React from 'react';
import { COMPANY_INFO } from '../data/topekData';

export const CoreValues: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#faf9f6] border-b border-[#e5e4de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
            <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
              Organizational Culture & Governance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141518] uppercase font-heading tracking-tight leading-tight">
            THE T-O-P-E-K VALUE FRAMEWORK.
          </h2>
          <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
          <p className="text-sm sm:text-base text-[#555861] font-sans leading-relaxed">
            The foundational ethos guiding every site engineer, quantity surveyor, project director, and plant operator on TOPEK jobsites nationwide.
          </p>
        </div>

        {/* 5 Core Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {COMPANY_INFO.coreValues.map((val) => (
            <div
              key={val.letter}
              className="bg-white rounded-xs p-6 border border-[#e5e4de] shadow-2xs hover:border-[#141518] hover:shadow-md transition-all duration-300 text-left group flex flex-col justify-between"
            >
              <div>
                {/* Acrostic Letter Block */}
                <div className="w-11 h-11 rounded-xs bg-[#141518] group-hover:bg-[#c1121f] text-white flex items-center justify-center font-black text-xl font-mono transition-colors shadow-2xs mb-4">
                  {val.letter}
                </div>

                {/* Word Title */}
                <h3 className="text-sm font-bold text-[#141518] group-hover:text-[#c1121f] transition-colors font-heading uppercase mb-2 tracking-wide">
                  {val.word}
                </h3>

                {/* Explanation */}
                <p className="text-xs text-[#5f636e] leading-relaxed font-sans">
                  {val.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f0eee6] text-[10px] font-mono text-[#8a8d98] uppercase">
                Ethos #{val.letter}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
