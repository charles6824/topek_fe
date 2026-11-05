import React from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { Medal, CheckCircle, Certificate } from '@phosphor-icons/react';

interface QualityPolicyPageProps {
  onOpenContact: (service?: string) => void;
}

export const QualityPolicyPage: React.FC<QualityPolicyPageProps> = ({ onOpenContact }) => {
  const qualityPillars = [
    {
      title: 'Material Traceability',
      description: 'Strict verification of Mill Test Certificates (MTC 3.1 / 3.2), PMI (Positive Material Identification), and batch tracking for all steel, rebar, pipes, and fittings.'
    },
    {
      title: 'Certified Welding & NDT Inspection',
      description: 'Weld procedures qualified to ASME Section IX and API 1104. 100% Non-Destructive Testing (Radiography, Ultrasonic, Magnetic Particle, Dye Penetrant) by ASNT Level II inspectors.'
    },
    {
      title: 'Structural & Pressure Proofing',
      description: 'Cube crush testing for concrete, compaction tests for earthworks, and hydrostatic pressure testing conducted with calibrated chart recorders in line with BS 8110 / ASME.'
    },
    {
      title: 'Client Quality Assurance Index',
      description: 'Continuous monitoring of project deliverable milestones, QA/QC punch-list resolution times, and formal post-handover commissioning verification.'
    }
  ];

  return (
    <div className="bg-[#faf9f6]">
      <PageBanner
        title="Quality Assurance &"
        titleAccent="Zero-Defect Standards"
        badge="ISO 9001:2015 QUALITY MANAGEMENT FRAMEWORK"
        subtitle="Engineering excellence grounded in rigorous material traceability, certified NDT testing, and continuous process verification."
        breadcrumbs={[
          { label: 'Company Overview', path: '/who-we-are' },
          { label: 'Quality Policy' }
        ]}
        bgImage="/assets/projects/hero-industrial-complex.png"
      />

      <section className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  Quality Assurance Framework
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#141518] font-heading tracking-tight leading-tight">
                DOING IT RIGHT THE FIRST TIME, EVERY TIME.
              </h2>
              <div className="w-12 h-1 bg-[#c1121f]"></div>

              <div className="border-l-2 border-[#c1121f] pl-4 py-2 italic text-[#141518] text-xs sm:text-sm md:text-base leading-relaxed bg-[#f5f4f0] rounded-xs font-sans">
                "TOPEK Construction Limited is firmly committed to delivering civil, structural, mechanical, and infrastructural projects that consistently meet or exceed our clients’ technical requirements and statutory engineering codes."
              </div>

              <p className="text-xs sm:text-sm text-[#555861] leading-relaxed font-sans">
                Our quality policy is founded upon disciplined Quality Management Systems aligned with ISO 9001:2015 standards, ongoing engineering reviews, and the deployment of certified laboratory testing protocols.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-2 bg-white text-[#141518] px-3.5 py-2 rounded-xs border border-[#e5e4de] text-xs font-mono font-bold">
                  <Certificate size={16} weight="bold" className="text-[#c1121f]" />
                  ISO 9001:2015 CERTIFIED
                </span>
                <span className="inline-flex items-center gap-2 bg-white text-[#141518] px-3.5 py-2 rounded-xs border border-[#e5e4de] text-xs font-mono font-bold">
                  <CheckCircle size={16} weight="bold" className="text-[#2b7a3a]" />
                  COREN & ASME COMPLIANT
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#141518] text-white p-7 sm:p-9 rounded-xs border border-[#23252a] shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#1e2025] border border-[#2e3138] flex items-center justify-center text-[#c27803]">
                    <Medal size={22} weight="bold" />
                  </div>
                  <h3 className="text-lg font-black font-heading uppercase text-white">
                    QA/QC Objectives
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#a1a1aa] font-sans">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0 mt-0.5" />
                    <span>Deliver 100% defect-free welded joints verified via calibrated NDT testing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0 mt-0.5" />
                    <span>Eliminate rework and material wastage through constructability reviews.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0 mt-0.5" />
                    <span>Ensure 100% calibration traceability for all measurement instruments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0 mt-0.5" />
                    <span>Achieve full pre-commissioning readiness and prompt milestone sign-offs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quality Assurance Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xs border border-[#e5e4de] shadow-2xs hover:border-[#141518] transition-all space-y-3"
              >
                <div className="font-mono text-xs font-bold text-[#c1121f]">
                  0{idx + 1} //
                </div>
                <h4 className="text-sm font-black text-[#141518] font-heading uppercase">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#5f636e] leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onContactClick={() => onOpenContact('Quality Assurance / QA/QC Consultation')} />
    </div>
  );
};
