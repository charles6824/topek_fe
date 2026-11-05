import React, { useState } from 'react';
import {
  ChatCircleDots,
  Blueprint,
  FileText,
  Truck,
  Hammer,
  CheckCircle,
  CaretRight,
  ShieldCheck
} from '@phosphor-icons/react';
import { DELIVERY_STAGES } from '../data/topekData';

const stageIcons: Record<string, React.ReactNode> = {
  ChatCircleDots: <ChatCircleDots size={28} weight="fill" />,
  Blueprint: <Blueprint size={28} weight="fill" />,
  FileText: <FileText size={28} weight="fill" />,
  Truck: <Truck size={28} weight="fill" />,
  Hammer: <Hammer size={28} weight="fill" />,
  CheckCircle: <CheckCircle size={28} weight="fill" />,
};

export const DeliveryMethodology: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const current = DELIVERY_STAGES[activeStage];

  return (
    <section className="py-20 sm:py-28 bg-[#141518] text-white relative border-b border-[#23252a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
            <span className="font-mono text-[11px] font-semibold text-[#a1a1aa] uppercase tracking-[0.2em]">
              Turnkey Project Execution Framework · ISO 9001
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase font-heading tracking-tight leading-tight">
            6-STAGE PROJECT GOVERNANCE ROADMAP.
          </h2>
          <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
          <p className="text-sm sm:text-base text-[#a1a1aa] font-sans leading-relaxed">
            Our systematic engineering governance eliminates cost overruns, safety incidents, and schedule drift through stringent gate sign-offs from initial soil mechanics to warranty aftercare.
          </p>
        </div>

        {/* Step Selector Horizontal Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 mb-8">
          {DELIVERY_STAGES.map((stage, idx) => {
            const isSelected = idx === activeStage;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-xs border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#c1121f] border-[#c1121f] text-white shadow-md'
                    : 'bg-[#1e2025] border-[#2e3138] text-[#a1a1aa] hover:border-[#4a4d56] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-white' : 'text-[#c27803]'}`}>
                    STAGE 0{stage.step}
                  </span>
                  <div className={`p-1 rounded-xs ${isSelected ? 'bg-white/20' : 'bg-[#141518]'}`}>
                    {stageIcons[stage.icon] || <CheckCircle size={16} weight="fill" />}
                  </div>
                </div>
                <div className="text-xs font-bold font-heading line-clamp-1 leading-snug">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="bg-[#1e2025] rounded-xs border border-[#2e3138] p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3.5">
                <span className="w-11 h-11 rounded-xs bg-[#c1121f] text-white flex items-center justify-center font-black text-lg font-mono">
                  0{current.step}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#c27803] mt-0.5">
                    {current.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#d4d4d8] leading-relaxed font-sans">
                {current.description}
              </p>

              {/* Verified Quality Deliverables */}
              <div className="pt-2">
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#a1a1aa] mb-2.5">
                  Verified Engineering Deliverables:
                </h4>
                <div className="space-y-2">
                  {current.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-[#141518] p-3 rounded-xs border border-[#2e3138] text-xs text-[#e5e4de]">
                      <ShieldCheck size={16} weight="fill" className="text-[#c1121f] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Badge / Stepper Controls */}
            <div className="lg:col-span-5 bg-[#141518] p-6 sm:p-8 rounded-xs border border-[#2e3138] text-left flex flex-col justify-between h-full space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#1e2025] border border-[#2e3138] text-[#c1121f] rounded-xs flex items-center justify-center">
                  {stageIcons[current.icon]}
                </div>
                <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wide">
                  Stage-Gate Engineering Controls
                </h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  No subsequent phase commences until the Client Project Manager and TOPEK Lead Resident Engineer countersign off on milestone deliverables.
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#2e3138]">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider bg-[#1e2025] hover:bg-[#282b32] border border-[#2e3138] disabled:opacity-40 transition-colors cursor-pointer"
                >
                  Previous
                </button>

                <span className="text-xs font-mono text-[#a1a1aa]">
                  Stage 0{activeStage + 1} of 0{DELIVERY_STAGES.length}
                </span>

                <button
                  disabled={activeStage === DELIVERY_STAGES.length - 1}
                  onClick={() => setActiveStage((prev) => Math.min(DELIVERY_STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider bg-[#c1121f] hover:bg-[#9b0d18] disabled:opacity-40 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <CaretRight size={14} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
