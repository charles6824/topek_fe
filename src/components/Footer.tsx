import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Globe,
  CaretRight,
  ShieldCheck,
  LockKey
} from '@phosphor-icons/react';
import { COMPANY_INFO, DIVISIONS } from '../data/topekData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#141518] text-[#a1a1aa] pt-16 border-t border-[#23252a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1e2025] rounded-xs flex items-center justify-center border border-[#2e3138]">
                <div className="relative w-5 h-5 flex flex-col items-center justify-center">
                  <div className="w-5 h-1.5 bg-white"></div>
                  <div className="w-1.5 h-3.5 bg-white"></div>
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#c1121f]"></div>
                </div>
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight">
                  TOPEK<span className="text-[#c1121f]">.</span>
                </span>
                <span className="block text-[9px] font-bold tracking-[0.2em] text-[#8a8d98] uppercase">
                  CONSTRUCTION LIMITED
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#1e2025] border border-[#2e3138] text-[#e5e4de] font-mono text-[11px]">
              <ShieldCheck size={14} weight="fill" className="text-[#c1121f]" />
              <span>CAC {COMPANY_INFO.cacNumber}</span>
            </div>

            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              {COMPANY_INFO.about}
            </p>

            <div className="pt-2 text-xs text-[#a1a1aa] font-medium font-mono">
              <span className="text-white font-semibold">Corridors:</span> Lagos · Abuja · Northern Industrial Belt · Niger Delta
            </div>
          </div>

          {/* Column 2: 8 Integrated Divisions */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-[#2e3138] pb-2 inline-block font-heading">
              Integrated Divisions
            </h3>
            <ul className="space-y-2">
              {DIVISIONS.slice(0, 5).map((div) => (
                <li key={div.id}>
                  <Link
                    to={div.link}
                    className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-2 transition-colors group"
                  >
                    <CaretRight size={12} weight="bold" className="text-[#c1121f] group-hover:translate-x-1 transition-transform" />
                    <span className="truncate">{div.number}. {div.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs font-bold text-[#c1121f] hover:text-rose-400 inline-flex items-center gap-1 mt-1 uppercase tracking-wider"
                >
                  <span>View All 8 Divisions</span>
                  <CaretRight size={12} weight="bold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Fleet */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-[#2e3138] pb-2 inline-block font-heading">
              Verified Track Record
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects?filter=Ongoing" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-2 transition-colors group">
                  <CaretRight size={12} weight="bold" className="text-[#c1121f] group-hover:translate-x-1 transition-transform" />
                  <span>Ongoing Flagship Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/projects?filter=Completed" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-2 transition-colors group">
                  <CaretRight size={12} weight="bold" className="text-[#c1121f] group-hover:translate-x-1 transition-transform" />
                  <span>Completed Engineering Works</span>
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-2 transition-colors group">
                  <CaretRight size={12} weight="bold" className="text-[#c1121f] group-hover:translate-x-1 transition-transform" />
                  <span>Heavy Equipment Fleet (70+ Units)</span>
                </Link>
              </li>
              <li>
                <Link to="/hse-policy" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-2 transition-colors group">
                  <CaretRight size={12} weight="bold" className="text-[#c1121f] group-hover:translate-x-1 transition-transform" />
                  <span>ISO 45001 HSE Zero-Harm Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-2 transition-colors group">
                  <CaretRight size={12} weight="bold" className="text-[#c1121f] group-hover:translate-x-1 transition-transform" />
                  <span>NUPRC / NipeX / COREN Accreditations</span>
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-xs text-[#a1a1aa] hover:text-white flex items-center gap-2 transition-colors group">
                  <CaretRight size={12} weight="bold" className="text-[#c1121f] group-hover:translate-x-1 transition-transform" />
                  <span>Distinguished Clients & Partners</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office & Direct Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-[#2e3138] pb-2 inline-block font-heading">
              Contact & RFQ
            </h3>
            <div className="space-y-3 text-xs text-[#a1a1aa]">
              <div className="group/contact flex items-start gap-2.5 transition-colors">
                <MapPin size={16} weight="fill" className="text-[#c1121f] shrink-0 mt-0.5 group-hover/contact:scale-120 transition-transform duration-200" />
                <span>
                  <strong className="text-white">Head Office:</strong>
                  <br />
                  <span className="group-hover/contact:text-[#d4d4d8] transition-colors">{COMPANY_INFO.address}</span>
                </span>
              </div>

              <div className="group/contact flex items-center gap-2.5">
                <Phone size={16} weight="fill" className="text-[#c1121f] shrink-0 group-hover/contact:scale-120 group-hover/contact:rotate-12 transition-transform duration-200" />
                <span>
                  <strong className="text-white">Direct Line:</strong>{' '}
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-[#c1121f] transition-colors font-medium">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </span>
              </div>

              <div className="group/contact flex items-center gap-2.5">
                <EnvelopeSimple size={16} weight="fill" className="text-[#c1121f] shrink-0 group-hover/contact:scale-120 transition-transform duration-200" />
                <span className="truncate">
                  <strong className="text-white">Email:</strong>{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </div>

              <div className="group/contact flex items-center gap-2.5">
                <Globe size={16} weight="fill" className="text-[#c1121f] shrink-0 group-hover/contact:scale-120 transition-transform duration-200" />
                <span>
                  <strong className="text-white">Web:</strong>{' '}
                  <span className="text-[#a1a1aa] group-hover/contact:text-white transition-colors">{COMPANY_INFO.website}</span>
                </span>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block w-full text-center bg-[#c1121f] hover:bg-white hover:text-[#141518] text-white py-2.5 rounded-xs font-bold text-xs uppercase tracking-widest transition-colors shadow-2xs"
                >
                  Submit Project RFQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer with Security & Admin Portal link */}
      <div className="bg-[#0e0f11] py-4 border-t border-[#23252a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717a]">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white">TOPEK Construction Limited</strong> (CAC RC: 1946874). All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-[#71717a]">Built in Nigeria · Delivering Globally</span>
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1.5 text-[11px] text-[#a1a1aa] hover:text-white transition-colors bg-[#1e2025] border border-[#2e3138] px-2.5 py-1 rounded-xs"
            >
              <LockKey size={13} weight="bold" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
