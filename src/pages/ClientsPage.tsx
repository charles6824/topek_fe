import React from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { CLIENTS } from '../data/topekData';
import { Buildings, Handshake, CheckCircle, ArrowRight } from '@phosphor-icons/react';

interface ClientsPageProps {
  onOpenContact: (service?: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onOpenContact }) => {
  return (
    <div className="bg-[#faf9f6]">
      <PageBanner
        title="Tier-One Operators &"
        titleAccent="Strategic Partnerships"
        badge="TRUSTED BY NIGERIA'S FOREMOST INDUSTRIAL LEADERS"
        subtitle="Executing critical natural gas networks, PRMS stations, heavy concrete foundations, and capital facilities for Nigeria's leading enterprises."
        breadcrumbs={[
          { label: 'Projects & Operations', path: '/projects' },
          { label: 'Clients & Partners' }
        ]}
        bgImage="/assets/projects/hero-industrial-complex.png"
      />

      <section className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
              <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                Track Record & Client Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#141518] font-heading tracking-tight leading-tight">
              TIER-ONE OPERATORS TRUSTING TOPEK.
            </h2>
            <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
            <p className="text-sm sm:text-base text-[#555861] font-sans leading-relaxed">
              Our engineering and construction divisions execute complex infrastructure, natural gas PRMS facilities, pipeline networks, and civil works for leading blue-chip corporations across Nigeria.
            </p>
          </div>

          {/* Client Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-xs border border-[#e5e4de] shadow-2xs hover:border-[#141518] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xs bg-[#f5f4f0] border border-[#e5e4de] flex items-center justify-center text-[#141518] group-hover:text-[#c1121f] transition-colors">
                      <Buildings size={24} weight="bold" />
                    </div>
                    <span className="font-mono text-[10px] font-semibold text-[#8a8d98] uppercase tracking-wider">
                      CLIENT #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-[#141518] font-heading uppercase group-hover:text-[#c1121f] transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-[#c1121f] uppercase tracking-wider mt-1">
                      {client.industry}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5f636e] leading-relaxed font-sans">
                    Execution of high-pressure gas networks, PRMS stations, civil foundation slabs, structural steelworks, and engineering support.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e5e4de] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#2b7a3a] font-mono font-semibold">
                    <CheckCircle size={14} weight="fill" className="text-[#2b7a3a]" />
                    <span>Verified Engagement</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8a8d98]">
                    Active Framework
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial / Partnership Commitment */}
          <div className="bg-[#141518] text-white p-8 sm:p-12 rounded-xs border border-[#23252a] shadow-xl text-center max-w-4xl mx-auto space-y-6">
            <div className="w-14 h-14 rounded-xs bg-[#1e2025] border border-[#2e3138] flex items-center justify-center mx-auto text-[#c27803]">
              <Handshake size={32} weight="bold" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase font-heading text-white tracking-tight">
              A Relationship Built on Performance & Rigor
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto font-sans">
              "TOPEK Construction maintains an unblemished safety record (750,000+ LTI-free hours), strict schedule adherence, and rapid mobilization across Nigeria for planned shutdowns, turnaround maintenance, and capital infrastructure projects."
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenContact('Corporate Partnership Inquiry')}
                className="bg-[#c1121f] hover:bg-[#a50e1a] text-white px-8 py-3.5 rounded-xs text-xs font-bold uppercase tracking-wider font-heading transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2"
              >
                <span>Partner With Us</span>
                <ArrowRight size={14} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onContactClick={() => onOpenContact('New Client Project')} />
    </div>
  );
};
