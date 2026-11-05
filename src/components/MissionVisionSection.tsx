import React from 'react';
import { COMPANY_INFO } from '../data/topekData';

interface ComplianceStandard {
  code: string;
  body: string;
  scope: string;
}

const STATUTORY_ACCREDITATIONS: ComplianceStandard[] = [
  {
    code: 'COREN Practice Permit',
    body: 'Council for the Regulation of Engineering in Nigeria',
    scope: 'Statutory structural engineering design approval & resident site oversight'
  },
  {
    code: 'ISO 9001:2015 Quality Systems',
    body: 'International Organization for Standardization',
    scope: 'Standardized batching, slump tests, BBS rebar schedules & cylinder breaks'
  },
  {
    code: 'ISO 45001:2018 HSE Management',
    body: 'Occupational Health & Safety Standard',
    scope: 'Zero Lost Time Injury (LTI) protocol, daily JHA & mandatory site PPE'
  },
  {
    code: 'API 1104 & ASME Section IX',
    body: 'American Petroleum Institute / ASME',
    scope: '6G coded welding qualification & 100% NDT radiographic weld inspection'
  },
  {
    code: 'NUPRC & NipeX Registered',
    body: 'Nigerian Upstream Petroleum Regulatory Commission',
    scope: 'Authorized major pipeline civil works & heavy facility development'
  }
];

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#141518] text-white overflow-hidden border-b border-[#23252a]">
      {/* Background with Dark Architectural Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 filter brightness-50"
        style={{
          backgroundImage: 'url("/assets/projects/mangal-cement/WhatsApp Image 2026-10-16 at 2.38.19 PM.jpeg")'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#141518] via-[#141518]/90 to-[#141518]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Our Mission */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#a1a1aa] uppercase tracking-[0.2em]">
                  Purpose & Strategic Mandate
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase font-heading tracking-tight leading-tight text-white">
                OUR MISSION.
              </h2>
              <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
              <p className="text-sm sm:text-base text-[#d4d4d8] leading-relaxed font-sans mb-8">
                {COMPANY_INFO.mission}
              </p>
            </div>

            {/* Mission Key Points */}
            <div className="space-y-3">
              {COMPANY_INFO.missionPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xs bg-[#1e2025] border border-[#2e3138] hover:border-[#c1121f] transition-colors"
                >
                  <div className="w-8 h-8 rounded-xs bg-[#141518] border border-[#2e3138] text-[#c1121f] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    0{idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#e5e4de] uppercase font-sans leading-relaxed pt-1">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Our Vision & Accreditation Matrix */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-[#c27803]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#c27803] uppercase tracking-[0.2em]">
                  Aspiration & Engineering Rigor
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase font-heading tracking-tight leading-tight text-white">
                OUR VISION.
              </h2>
              <div className="w-12 h-1 bg-[#c27803] mt-4 mb-4"></div>
              <p className="text-sm sm:text-base text-[#d4d4d8] leading-relaxed font-sans mb-8">
                {COMPANY_INFO.vision}
              </p>
            </div>

            {/* Statutory Compliance Matrix (replaces generic skill percentage bars) */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#a1a1aa] block mb-2">
                Statutory Regulatory Accreditations & Standards:
              </span>
              {STATUTORY_ACCREDITATIONS.map((std, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-[#1e2025] border border-[#2e3138] rounded-xs flex flex-col justify-between hover:border-white/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-white font-heading uppercase tracking-wide">
                      {std.code}
                    </span>
                    <span className="text-[10px] font-mono text-[#c27803] uppercase font-semibold">
                      VERIFIED
                    </span>
                  </div>
                  <div className="text-[11px] text-[#a1a1aa] mt-1 font-medium">
                    {std.body}
                  </div>
                  <div className="text-[10px] text-[#71717a] mt-1 border-t border-[#282b32] pt-1.5 font-sans">
                    {std.scope}
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
