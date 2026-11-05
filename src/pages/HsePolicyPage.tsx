import React from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { ShieldCheck, Heartbeat, CheckCircle, Warning, FirstAid } from '@phosphor-icons/react';

interface HsePolicyPageProps {
  onOpenContact: (service?: string) => void;
}

export const HsePolicyPage: React.FC<HsePolicyPageProps> = ({ onOpenContact }) => {
  const policyRules = [
    {
      title: 'Zero Incident Philosophy',
      desc: 'All industrial accidents, work-related illnesses, and environmental spills are preventable through proactive risk assessments and safe systems of work.'
    },
    {
      title: 'Strict Permit To Work (PTW)',
      desc: 'No high-risk operations including hot works, confined space entry, lifting, or electrical isolation proceed without signed permits and toolbox briefings.'
    },
    {
      title: 'Environmental Stewardship',
      desc: 'Rigorous waste segregation, containment of hazardous effluents, oil spill mitigation kits, and full restoration of pipeline rights-of-way (ROW).'
    },
    {
      title: 'Mandatory PPE Compliance',
      desc: 'Strict enforcement of certified flame-retardant coveralls, steel-toe boots, hard hats, safety glasses, and multi-gas detectors for all personnel.'
    },
    {
      title: 'Stop Work Authority',
      desc: 'Every team member, irrespective of rank, is empowered and mandated to halt any activity deemed unsafe or non-compliant.'
    },
    {
      title: 'Emergency Preparedness',
      desc: 'Regular mock drills, fully stocked first-aid stations, qualified site medics, and immediate coordination with emergency services.'
    }
  ];

  return (
    <div className="bg-[#faf9f6]">
      <PageBanner
        title="Health, Safety & Environment"
        titleAccent="Zero Incident Culture"
        badge="750,000+ LTI-FREE SAFE MAN-HOURS"
        subtitle="Our foundational commitment to safeguarding personnel, preserving the environment, and zero compromise on safety across all Nigerian sites."
        breadcrumbs={[
          { label: 'Company Overview', path: '/who-we-are' },
          { label: 'HSE Policy' }
        ]}
        bgImage="/assets/projects/hero-pipeline-sunset.png"
      />

      <section className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Statement */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
              <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                Statutory HSE Mandate
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#141518] font-heading tracking-tight leading-tight">
              SAFETY IS AN INTEGRAL ENGINEERING DISCIPLINE.
            </h2>
            <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
            <p className="text-sm sm:text-base text-[#555861] leading-relaxed font-sans">
              It is the primary policy of TOPEK Construction Limited to execute all construction, heavy civil, pipeline installation, and project management operations ensuring that the health, safety, and welfare of our workforce, host communities, and stakeholders are safeguarded without exception.
            </p>
          </div>

          {/* 3 Core HSE Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="bg-[#141518] text-white p-8 rounded-xs border border-[#23252a] shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xs bg-[#1e2025] border border-[#2e3138] flex items-center justify-center text-[#c1121f]">
                <Heartbeat size={28} weight="bold" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#8a8d98] uppercase tracking-wider">Pillar 01</span>
                <h3 className="text-lg font-black uppercase font-heading text-white">
                  Occupational Health
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-sans">
                Ensuring work environments are ergonomically sound and free from respiratory, toxic gas, or noise hazards through regular medical surveillance and industrial hygiene monitoring.
              </p>
            </div>

            <div className="bg-[#c1121f] text-white p-8 rounded-xs shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xs bg-[#9f0e19] flex items-center justify-center text-white">
                <ShieldCheck size={28} weight="bold" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-red-200 uppercase tracking-wider">Pillar 02</span>
                <h3 className="text-lg font-black uppercase font-heading text-white">
                  Operational Safety
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-red-100 leading-relaxed font-sans">
                Executing rigorous Job Hazard Analyses (JHA), certified lifting tackle inspections, calibrated gas detection arrays, and comprehensive daily pre-job safety briefings.
              </p>
            </div>

            <div className="bg-[#1e2025] text-white p-8 rounded-xs border border-[#2e3138] shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xs bg-[#141518] border border-[#2e3138] flex items-center justify-center text-[#2b7a3a]">
                <FirstAid size={28} weight="bold" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#8a8d98] uppercase tracking-wider">Pillar 03</span>
                <h3 className="text-lg font-black uppercase font-heading text-white">
                  Environmental Integrity
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-sans">
                Promoting sustainable resource management, zero unauthorized discharge into water bodies, safe chemical containment, and rapid hydrocarbon containment systems.
              </p>
            </div>
          </div>

          {/* Golden Safety Rules Grid */}
          <div className="border border-[#e5e4de] rounded-xs p-7 sm:p-10 bg-white shadow-2xs">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Warning size={16} className="text-[#c1121f]" weight="bold" />
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-widest">
                  Standard Operating Procedures
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#141518] font-heading">
                Operational Safety Protocols
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {policyRules.map((rule, idx) => (
                <div key={idx} className="bg-[#faf9f6] p-6 rounded-xs border border-[#e5e4de] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-[#141518] font-heading">
                    <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0" />
                    <span>{rule.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5f636e] leading-relaxed font-sans">
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onContactClick={() => onOpenContact('HSE Compliance / Project Safety')} />
    </div>
  );
};
