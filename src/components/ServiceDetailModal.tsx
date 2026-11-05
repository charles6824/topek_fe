import React from 'react';
import { X, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import type { DivisionItem } from '../data/topekData';

interface ServiceDetailModalProps {
  division: DivisionItem | null;
  onClose: () => void;
  onRequestQuote: (divisionTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  division,
  onClose,
  onRequestQuote
}) => {
  if (!division) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#141518]/85 backdrop-blur-sm animate-fade-in overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white rounded-xs shadow-2xl overflow-hidden border border-[#23252a] my-auto"
      >
        {/* Header */}
        <div className="bg-[#141518] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#23252a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[#1e2025] flex items-center justify-center border border-[#2e3138]">
              <div className="relative w-4 h-4 flex flex-col items-center justify-center">
                <div className="w-4 h-1 bg-white"></div>
                <div className="w-1 h-3 bg-white"></div>
                <div className="absolute top-0 right-0 w-1 h-1 bg-[#c1121f]"></div>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#c27803] block font-mono">
                DIVISION 0{division.number}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white font-heading uppercase tracking-wide">
                Engineering Specification
              </h4>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#a1a1aa] hover:text-white p-1 rounded-xs hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#141518] font-heading leading-tight uppercase">
              {division.title}
            </h3>
            <p className="text-[11px] font-mono font-semibold text-[#c27803] uppercase tracking-wider mt-1">
              {division.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#555861] leading-relaxed font-sans">
            {division.fullDescription}
          </p>

          <div className="bg-[#faf9f6] rounded-xs p-4 border border-[#e5e4de] space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#8a8d98]">
              Division Capabilities & Standards
            </h4>
            <div className="space-y-1.5 text-xs text-[#141518]">
              {division.capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={14} weight="fill" className="text-[#c1121f] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-[#555861] hover:bg-neutral-100 rounded-xs uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(division.title);
              }}
              className="inline-flex items-center gap-1.5 bg-[#c1121f] hover:bg-[#141518] text-white px-5 py-2.5 rounded-xs text-xs font-bold uppercase tracking-widest transition-colors shadow-2xs cursor-pointer"
            >
              <span>Request RFQ for Division</span>
              <ArrowRight size={14} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
