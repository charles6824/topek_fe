import React, { useState, useEffect } from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { EQUIPMENT_LIST, type EquipmentItem } from '../data/topekData';
import { api } from '../lib/api';
import { CheckCircle, MagnifyingGlass } from '@phosphor-icons/react';

interface EquipmentPageProps {
  onOpenContact: (service?: string) => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({ onOpenContact }) => {
  const [equipmentList, setEquipmentList] = useState<EquipmentItem[]>(EQUIPMENT_LIST);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const categories = [
    'all',
    'Earthmoving',
    'Lifting & Cranes',
    'Concrete & Paving',
    'Haulage & Logistics',
    'Survey & Testing',
    'Power & Welding'
  ];

  useEffect(() => {
    api.getEquipment()
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped: EquipmentItem[] = res.data.map((eq: any) => ({
            id: eq._id || eq.id,
            name: eq.name,
            category: eq.category,
            quantity: eq.quantity,
            specifications: eq.specifications,
            status: eq.status || 'Operational',
          }));
          setEquipmentList(mapped);
        }
      })
      .catch(() => {});
  }, []);

  const filteredEquipment = equipmentList.filter((item) => {
    const matchesCat = filter === 'all' || item.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.specifications.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      <PageBanner
        title="70+ Heavy Equipment Fleet &"
        titleAccent="Owned Machinery Assets"
        badge="ZERO-RENTAL MOBILIZATION · RC 1946874"
        subtitle="Over 70 owned units of heavy civil earthmovers, high-capacity mobile cranes, automated concrete batching plants, and multi-axle freight haulage."
        breadcrumbs={[
          { label: 'Company Overview', path: '/who-we-are' },
          { label: 'Heavy Equipment Fleet' }
        ]}
        bgImage="/assets/projects/hero-industrial-complex.png"
      />

      <section className="py-16 sm:py-24 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e5e4de]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  100% Owned Heavy Plant Machinery · Rapid Mobilization
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#141518] font-heading tracking-tight">
                Equipment Fleet Inventory ({filteredEquipment.length})
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search equipment, specs, tonnage..."
                className="w-full text-xs pl-9 pr-4 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#c1121f] bg-white shadow-2xs"
              />
              <MagnifyingGlass size={16} weight="bold" className="absolute left-3 top-3.5 text-[#8a8d98]" />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                  filter === cat
                    ? 'bg-[#c1121f] text-white border-[#c1121f]'
                    : 'bg-white text-[#555861] border-[#e5e4de] hover:border-[#141518] hover:text-[#141518]'
                }`}
              >
                {cat === 'all' ? 'All Fleet Units' : cat}
              </button>
            ))}
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((eq) => (
              <div
                key={eq.id}
                className="bg-white p-6 rounded-xs border border-[#e5e4de] hover:border-[#141518] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#c27803] bg-[#faf9f6] px-2 py-0.5 rounded-xs border border-[#e5e4de]">
                      {eq.category}
                    </span>
                    <span className="text-xs font-bold text-white font-mono bg-[#141518] px-2 py-0.5 rounded-xs">
                      Qty: {eq.quantity}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#141518] group-hover:text-[#c1121f] transition-colors font-heading leading-snug">
                    {eq.name}
                  </h3>

                  <p className="text-xs text-[#555861] mt-2.5 font-sans leading-relaxed">
                    <strong className="text-[#141518]">Engineering Specs:</strong> {eq.specifications}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f0eee6] flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold font-mono ${
                    eq.status === 'Operational' ? 'text-emerald-700' : 'text-amber-700'
                  }`}>
                    <CheckCircle size={14} weight="fill" className={eq.status === 'Operational' ? 'text-emerald-600' : 'text-amber-500'} />
                    <span>{eq.status}</span>
                  </span>

                  <button
                    onClick={() => onOpenContact(`Equipment Mobilization Request: ${eq.name}`)}
                    className="text-xs font-mono font-bold uppercase text-[#c1121f] hover:text-[#141518] transition-colors cursor-pointer"
                  >
                    Mobilize Fleet &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12 text-sm text-[#71717a] bg-white rounded-xs border border-[#e5e4de]">
              No equipment found matching "{search}".
            </div>
          )}
        </div>
      </section>

      <CtaBanner onContactClick={() => onOpenContact('Heavy Equipment Mobilization')} />
    </div>
  );
};
