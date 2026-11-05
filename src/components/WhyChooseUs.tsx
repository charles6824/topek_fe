import { CheckCircle, Truck, Certificate } from '@phosphor-icons/react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Advantages */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  Competitive Execution Advantage
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#141518] uppercase font-heading tracking-tight leading-tight">
                THE TOPEK ADVANTAGE: CAPACITY, SPEED & ZERO-HARM.
              </h2>
              <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
              <p className="text-sm sm:text-base text-[#555861] leading-relaxed font-sans">
                We combine tier-one engineering rigor with full in-house asset backing. Our company-owned heavy equipment fleet, resident COREN master engineers, and 8 specialized divisions guarantee zero third-party mobilization delays.
              </p>
            </div>

            {/* Benefit Box 1 */}
            <div className="group bg-white p-5 rounded-xs shadow-2xs border border-[#e5e4de] flex gap-4 transition-all duration-300 hover:border-[#141518] hover:shadow-md cursor-pointer">
              <div className="w-12 h-12 rounded-xs bg-[#f5f4f0] text-[#c1121f] group-hover:bg-[#c1121f] group-hover:text-white group-hover:border-[#c1121f] flex items-center justify-center shrink-0 border border-[#e5e4de] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_16px_rgba(193,18,31,0.35)]">
                <Truck size={24} weight="duotone" className="transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#141518] group-hover:text-[#c1121f] transition-colors font-heading uppercase mb-1">
                  70+ Owned Heavy Equipment Fleet Units
                </h3>
                <p className="text-xs text-[#5f636e] leading-relaxed font-sans">
                  Zero dependence on rental bottlenecks. Our owned inventory includes CAT 330D excavators, Tadano 100-ton mobile cranes, automated concrete batching plants, and heavy Howo multi-axle lowbeds.
                </p>
              </div>
            </div>

            {/* Benefit Box 2 */}
            <div className="group bg-white p-5 rounded-xs shadow-2xs border border-[#e5e4de] flex gap-4 transition-all duration-300 hover:border-[#141518] hover:shadow-md cursor-pointer">
              <div className="w-12 h-12 rounded-xs bg-[#f5f4f0] text-[#141518] group-hover:bg-[#c1121f] group-hover:text-white group-hover:border-[#c1121f] flex items-center justify-center shrink-0 border border-[#e5e4de] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_16px_rgba(193,18,31,0.35)]">
                <Certificate size={24} weight="duotone" className="transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#141518] group-hover:text-[#c1121f] transition-colors font-heading uppercase mb-1">
                  COREN, NUPRC & ISO 9001 / 45001 Compliance
                </h3>
                <p className="text-xs text-[#5f636e] leading-relaxed font-sans">
                  Total adherence to British Standards (BS 8110) and Nigerian statutory engineering codes, backed by geotechnical soil testing, certified concrete cylinder break tests, and strict HSE protocols.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                '750,000+ LTI-Free Safe Man-Hours',
                '100% Indigenous Nigerian Equity',
                'Certified In-Situ Slump & Cube Tests',
                'Structured Milestone Valuations'
              ].map((item) => (
                <div key={item} className="group/check flex items-center gap-2 text-xs font-semibold text-[#141518] bg-white p-3 rounded-xs border border-[#e5e4de] hover:border-[#c1121f]/50 hover:bg-[#faf9f6] transition-all duration-200 cursor-default">
                  <CheckCircle size={15} weight="fill" className="text-[#c1121f] shrink-0 group-hover/check:scale-125 transition-transform duration-200" />
                  <span className="group-hover/check:text-[#c1121f] transition-colors duration-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composite Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xs overflow-hidden shadow-lg border border-[#23252a] group bg-[#141518]">
              <img
                src="/assets/projects/general/20241221_141500.jpg"
                alt="TOPEK Heavy Construction Site"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 min-h-[400px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/95 via-[#141518]/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="text-white space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c27803] bg-[#141518]/90 border border-[#2e3138] px-2.5 py-1 rounded-xs inline-block">
                    Industrial Facility Expansion
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-heading uppercase text-white">
                    Ardagh Glass Packaging Heavy Warehouse & Generator Plinth
                  </h4>
                  <p className="text-xs text-[#d4d4d8] leading-relaxed">
                    Heavy structural steel erection, precision high-mass generator vibration dampening foundations, and 5,000 m² heavy duty industrial floor slab in Ikeja, Lagos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
