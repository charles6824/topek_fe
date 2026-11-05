import React from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { CERTIFICATIONS } from '../data/topekData';
import { Certificate, CheckCircle, ShieldCheck, FileText } from '@phosphor-icons/react';

interface CertificationsPageProps {
  onOpenContact: (service?: string) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ onOpenContact }) => {
  return (
    <div className="bg-[#faf9f6]">
      <PageBanner
        title="Regulatory Accreditations &"
        titleAccent="Statutory Licenses"
        badge="COREN · NUPRC · NIPEX · ISO 9001 · ISO 45001"
        subtitle="Fully licensed, pre-qualified, and certified by Nigeria's foremost engineering, oil & gas, and industrial authorities."
        breadcrumbs={[{ label: 'Certifications & Accreditations' }]}
        bgImage="/assets/projects/hero-industrial-complex.png"
      />

      <section className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
              <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                Statutory Compliance Matrix
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#141518] font-heading tracking-tight leading-tight">
              LICENSES, PERMITS & INDUSTRY STANDARDS.
            </h2>
            <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
            <p className="text-sm sm:text-base text-[#555861] font-sans leading-relaxed">
              TOPEK Construction Limited operates with rigorous statutory compliance across Federal and State regulatory bodies overseeing oil, gas, manufacturing, civil engineering, and infrastructure operations in Nigeria.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-xs border border-[#e5e4de] shadow-2xs hover:border-[#141518] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#f5f4f0] text-[#141518] px-2.5 py-1 rounded-xs border border-[#e5e4de]">
                      {cert.category}
                    </span>
                    <div className="w-8 h-8 rounded-xs bg-[#f5f4f0] border border-[#e5e4de] flex items-center justify-center text-[#c1121f]">
                      <Certificate size={18} weight="bold" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#141518] group-hover:text-[#c1121f] transition-colors font-heading uppercase mb-2">
                    {cert.title}
                  </h3>

                  <div className="p-2.5 bg-[#f5f4f0] border border-[#e5e4de] rounded-xs font-mono text-xs font-bold text-[#141518] mb-4">
                    REF: {cert.number}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5f636e] leading-relaxed font-sans">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e5e4de] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#2b7a3a] font-mono font-semibold">
                    <CheckCircle size={15} weight="fill" className="text-[#2b7a3a] shrink-0" />
                    <span>Active & Verified</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8a8d98] uppercase">
                    Audited
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Assurance Box */}
          <div className="mt-16 bg-[#141518] text-white p-8 sm:p-12 rounded-xs border border-[#23252a] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left max-w-2xl">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#c1121f]" weight="fill" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#a1a1aa]">
                  Tender & Bidding Support
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading uppercase text-white tracking-tight">
                Require Verified Pre-Qualification Documents?
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-sans">
                We provide certified copies of our COREN permits, NipeX joint qualification slips, NUPRC permits, audited financial statements, and HSE manuals for corporate bidding consortiums.
              </p>
            </div>

            <button
              onClick={() => onOpenContact('Tender / Certification Pack Request')}
              className="bg-[#c1121f] hover:bg-[#a50e1a] text-white px-7 py-3.5 rounded-xs text-xs font-bold uppercase tracking-wider font-heading transition-colors shadow-sm shrink-0 cursor-pointer flex items-center gap-2"
            >
              <FileText size={16} weight="bold" />
              <span>Request Compliance Pack</span>
            </button>
          </div>
        </div>
      </section>

      <CtaBanner onContactClick={() => onOpenContact('Compliance & Certification')} />
    </div>
  );
};
