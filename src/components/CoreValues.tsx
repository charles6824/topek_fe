import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Lightbulb, ShieldCheck, Trophy, Scales, ArrowRight } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../data/topekData';

interface ValueCardItem {
  letter: string;
  word: string;
  detail: string;
  badgeBg: string;
  accentBar: string;
  icon: React.ReactNode;
}

export const CoreValues: React.FC = () => {
  // Value items aligned with TOPEK framework visual design
  const cardItems: ValueCardItem[] = [
    {
      letter: 'T',
      word: COMPANY_INFO.coreValues[0]?.word || 'Teamwork',
      detail: COMPANY_INFO.coreValues[0]?.detail || 'Build strong synergy across civil, mechanical, structural, and architectural crafts.',
      badgeBg: 'bg-[#0e3175]',
      accentBar: 'bg-[#eb2c1f]',
      icon: <Users size={28} weight="fill" className="text-white" />,
    },
    {
      letter: 'O',
      word: COMPANY_INFO.coreValues[1]?.word || 'Optimism & Agility',
      detail: COMPANY_INFO.coreValues[1]?.detail || 'Resourceful problem solving and proactive mobilization across any Nigerian terrain.',
      badgeBg: 'bg-[#eb2c1f]',
      accentBar: 'bg-[#0e3175]',
      icon: <Lightbulb size={28} weight="fill" className="text-white" />,
    },
    {
      letter: 'P',
      word: COMPANY_INFO.coreValues[2]?.word || 'Probity',
      detail: COMPANY_INFO.coreValues[2]?.detail || 'Rigorous corporate governance, open-book cost engineering, and absolute integrity.',
      badgeBg: 'bg-[#0e3175]',
      accentBar: 'bg-[#eb2c1f]',
      icon: <ShieldCheck size={28} weight="fill" className="text-white" />,
    },
    {
      letter: 'E',
      word: COMPANY_INFO.coreValues[3]?.word || 'Excellence',
      detail: COMPANY_INFO.coreValues[3]?.detail || 'High-tolerance structural execution, millimetre survey accuracy, and aesthetic prestige.',
      badgeBg: 'bg-[#eb2c1f]',
      accentBar: 'bg-[#0e3175]',
      icon: <Trophy size={28} weight="fill" className="text-white" />,
    },
    {
      letter: 'K',
      word: COMPANY_INFO.coreValues[4]?.word || 'Kaizen',
      detail: COMPANY_INFO.coreValues[4]?.detail || 'Continuous technological upgrading, workforce skill certification, and process refinement.',
      badgeBg: 'bg-[#0e3175]',
      accentBar: 'bg-[#eb2c1f]',
      icon: <Scales size={28} weight="fill" className="text-white" />,
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#eff4fa] overflow-hidden border-b border-[#e2e8f0]">
      {/* High-Rise Crane Architectural Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/assets/topek-framework-bg.png"
          alt="TOPEK Engineering Framework"
          className="w-full h-full object-cover object-right select-none opacity-95"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-1.5 bg-[#eb2c1f]"></div>
            <span className="text-[11px] sm:text-[12px] font-bold text-[#14326d] uppercase tracking-[0.18em] font-sans">
              ORGANIZATIONAL CULTURE & GOVERNANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0b1736] uppercase font-heading tracking-tight leading-[1.12] mb-4">
            THE <span className="text-[#eb2c1f]">T-O-P-E-K</span> VALUE FRAMEWORK.
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-medium leading-relaxed max-w-2xl font-sans">
            The foundational ethos guiding every site engineer, quantity surveyor, project director, and plant operator on TOPEK jobsites nationwide.
          </p>
        </div>

        {/* 5 Core Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {cardItems.map((val) => (
            <Link
              to="/who-we-are"
              key={val.letter}
              className="bg-white rounded-2xl p-6 lg:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group border border-slate-100/90 cursor-pointer"
            >
              <div>
                {/* Rounded Icon Badge */}
                <div
                  className={`w-14 h-14 rounded-2xl ${val.badgeBg} text-white flex items-center justify-center shadow-md mb-6 transition-transform duration-300 group-hover:scale-105`}
                >
                  {val.icon}
                </div>

                {/* Word Title */}
                <h3 className="text-[15px] sm:text-base font-black text-[#0b1736] uppercase font-heading tracking-wide leading-snug">
                  {val.word}
                </h3>

                {/* Alternating Accent Line */}
                <div className={`w-8 h-1 ${val.accentBar} rounded-full mt-3 mb-4`}></div>

                {/* Explanation */}
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-sans font-normal">
                  {val.detail}
                </p>
              </div>

              {/* Footer CTA */}
              <div className="mt-6 pt-3 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs font-bold text-[#0b1736] tracking-wide group-hover:text-[#eb2c1f] transition-colors">
                  Learn More
                </span>
                <div className="w-7 h-7 rounded-full bg-[#eb2c1f] text-white flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#c81e12]">
                  <ArrowRight size={13} weight="bold" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Dynamic Angled Ribbon (Red & Navy) */}
      <div className="absolute bottom-0 right-0 w-full pointer-events-none overflow-hidden z-10 leading-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 sm:h-12 lg:h-14 block">
          {/* Top Red Wedge */}
          <polygon points="500,60 1200,12 1200,24 545,60" fill="#eb2c1f" />
          {/* Bottom Dark Navy Wedge */}
          <polygon points="545,60 1200,24 1200,60 625,60" fill="#081738" />
        </svg>
      </div>
    </section>
  );
};
