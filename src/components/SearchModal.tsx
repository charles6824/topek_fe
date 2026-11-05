import React, { useState } from 'react';
import { MagnifyingGlass, X, ArrowRight } from '@phosphor-icons/react';
import { DIVISIONS, PROJECTS } from '../data/topekData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: 'service' | 'project', item: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingDivisions = trimmed
    ? DIVISIONS.filter(
        (d) =>
          d.title.toLowerCase().includes(trimmed) ||
          d.shortDescription.toLowerCase().includes(trimmed) ||
          d.capabilities.some((c) => c.toLowerCase().includes(trimmed))
      )
    : [];

  const matchingProjects = trimmed
    ? PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.client.toLowerCase().includes(trimmed) ||
          p.location.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed)
      )
    : [];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-3 sm:p-4 bg-[#141518]/80 backdrop-blur-xs animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white rounded-xs shadow-2xl overflow-hidden border border-[#23252a]"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#e5e4de] bg-[#faf9f6]">
          <MagnifyingGlass size={20} weight="bold" className="text-[#8a8d98] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 8 divisions, verified projects, equipment, clients..."
            className="w-full text-xs sm:text-sm outline-none bg-transparent text-[#141518] placeholder-[#8a8d98] font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#8a8d98] hover:text-[#141518] p-1 cursor-pointer"
            >
              <X size={16} weight="bold" />
            </button>
          )}
          <button
            onClick={onClose}
            className="font-mono text-[10px] font-bold uppercase text-[#555861] hover:text-[#c1121f] ml-1 px-2.5 py-1 rounded-xs bg-[#e5e4de] cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-5 bg-white">
          {!trimmed && (
            <div className="py-8 text-center text-xs font-mono text-[#8a8d98]">
              TRY SEARCHING: "MANGAL CEMENT", "CIVIL", "ARDAGH", "GAS PIPELINE", "HAULAGE"
            </div>
          )}

          {trimmed && matchingDivisions.length === 0 && matchingProjects.length === 0 && (
            <div className="py-8 text-center text-xs font-mono text-[#8a8d98]">
              NO RECORDS MATCHING "{query.toUpperCase()}". TRY ANOTHER KEYWORD.
            </div>
          )}

          {/* Division Matches */}
          {matchingDivisions.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 px-1">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#141518]">
                  Operational Divisions ({matchingDivisions.length})
                </span>
              </div>
              <div className="space-y-1.5">
                {matchingDivisions.map((division) => (
                  <div
                    key={division.id}
                    onClick={() => {
                      onSelectResult('service', division);
                      onClose();
                    }}
                    className="p-3.5 rounded-xs hover:bg-[#faf9f6] cursor-pointer flex items-center justify-between text-xs text-[#141518] transition-colors border border-transparent hover:border-[#e5e4de]"
                  >
                    <div>
                      <p className="font-heading font-black uppercase text-[#141518]">
                        DIV 0{division.number} · {division.title}
                      </p>
                      <p className="text-[11px] text-[#5f636e] line-clamp-1 font-sans mt-0.5">
                        {division.shortDescription}
                      </p>
                    </div>
                    <ArrowRight size={14} weight="bold" className="text-[#8a8d98] shrink-0 ml-3" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Matches */}
          {matchingProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 px-1">
                <div className="w-1.5 h-1.5 bg-[#141518]"></div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#141518]">
                  Verified Projects ({matchingProjects.length})
                </span>
              </div>
              <div className="space-y-2">
                {matchingProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => {
                      onSelectResult('project', project);
                      onClose();
                    }}
                    className="p-2.5 rounded-xs hover:bg-[#faf9f6] cursor-pointer flex items-center justify-between text-xs text-[#141518] transition-colors border border-transparent hover:border-[#e5e4de]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={project.image}
                        alt=""
                        className="w-12 h-10 object-cover rounded-xs shrink-0 bg-[#141518] border border-[#e5e4de]"
                      />
                      <div>
                        <p className="font-heading font-black uppercase text-[#141518] line-clamp-1">
                          {project.title}
                        </p>
                        <p className="text-[10px] font-mono text-[#c1121f] font-semibold uppercase mt-0.5">
                          {project.client} · {project.location}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={14} weight="bold" className="text-[#8a8d98] shrink-0 ml-3" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
