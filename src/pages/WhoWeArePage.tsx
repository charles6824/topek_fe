import React from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CoreValues } from '../components/CoreValues';
import { MissionVisionSection } from '../components/MissionVisionSection';
import { DeliveryMethodology } from '../components/DeliveryMethodology';
import { CtaBanner } from '../components/CtaBanner';
import { COMPANY_INFO, DIVISIONS } from '../data/topekData';
import { HardHat, Truck } from '@phosphor-icons/react';

interface WhoWeArePageProps {
  onOpenContact: (service?: string) => void;
}

export const WhoWeArePage: React.FC<WhoWeArePageProps> = ({ onOpenContact }) => {
  return (
    <div>
      <PageBanner
        title="Who We Are &"
        titleAccent="Corporate Identity"
        badge="TIER-ONE NIGERIAN INFRASTRUCTURE BUILDER · RC 1946874"
        subtitle="Indigenous multidisciplinary general contractor delivering heavy civil engineering, industrial processing plants, energy pipeline networks, and commercial landmarks."
        breadcrumbs={[
          { label: 'Company Overview', path: '/who-we-are' },
          { label: 'Who We Are & Identity' }
        ]}
        bgImage="/assets/projects/hero-pipeline-sunset.png"
      />

      {/* Main Profile Section */}
      <section className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  Corporate Governance · CAC RC: {COMPANY_INFO.cacNumber}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#141518] font-heading tracking-tight leading-tight">
                PIONEERING NIGERIAN INFRASTRUCTURE WITH RIGOR & SCALE.
              </h2>
              <div className="w-12 h-1 bg-[#c1121f]"></div>

              <p className="text-sm sm:text-base text-[#555861] leading-relaxed font-sans">
                {COMPANY_INFO.about}
              </p>

              <p className="text-sm text-[#5f636e] leading-relaxed font-sans">
                {COMPANY_INFO.history}
              </p>

              {/* Pillars Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xs bg-white border border-[#e5e4de] flex items-start gap-3 shadow-2xs">
                  <div className="p-2.5 rounded-xs bg-[#f5f4f0] text-[#c1121f] shrink-0 border border-[#e5e4de]">
                    <HardHat size={22} weight="fill" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#141518] font-heading">
                      100% Indigenous Nigerian Equity
                    </h4>
                    <p className="text-xs text-[#71717a] mt-1 font-sans">
                      Fully registered under NCDMB / NOGIC guidelines with Nigerian engineering leadership.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xs bg-white border border-[#e5e4de] flex items-start gap-3 shadow-2xs">
                  <div className="p-2.5 rounded-xs bg-[#f5f4f0] text-[#141518] shrink-0 border border-[#e5e4de]">
                    <Truck size={22} weight="fill" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#141518] font-heading">
                      Owned Fleet (70+ Units)
                    </h4>
                    <p className="text-xs text-[#71717a] mt-1 font-sans">
                      Heavy excavators, 100T cranes, batching plants, and lowbeds ready for immediate site mobilization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xs overflow-hidden shadow-lg border border-[#23252a] group bg-[#141518]">
                <img
                  src="/assets/projects/lindner-school/WhatsApp Image 2026-10-10 at 11.45.54 AM.jpeg"
                  alt="TOPEK Construction Project Site"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 min-h-[380px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/90 via-[#141518]/30 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c27803]">
                      Institutional Campus
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading uppercase text-white">
                      High-Precision Civil & Structural Construction Across Nigeria
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Stage Delivery Framework */}
      <DeliveryMethodology />

      {/* Core Values */}
      <CoreValues />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* 8 Divisions Grid Preview */}
      <section className="py-16 sm:py-24 bg-[#faf9f6] border-t border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
              <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                Multidisciplinary Vertical Integration
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#141518] font-heading">
              8 Specialized Divisions
            </h2>
            <div className="w-12 h-1 bg-[#c1121f] mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIVISIONS.map((d) => (
              <div key={d.id} className="bg-white p-5 rounded-xs border border-[#e5e4de] hover:border-[#141518] shadow-2xs transition-colors">
                <span className="text-[10px] font-mono font-bold text-[#c27803] block mb-1">
                  DIVISION 0{d.number}
                </span>
                <h4 className="text-sm font-bold text-[#141518] font-heading mb-1 truncate">
                  {d.title}
                </h4>
                <p className="text-xs text-[#5f636e] line-clamp-2 font-sans">
                  {d.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onContactClick={() => onOpenContact('Corporate Partnership Inquiry')} />
    </div>
  );
};
