import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  FacebookLogo,
  LinkedinLogo,
  XLogo,
  CaretDown,
  UserGear
} from '@phosphor-icons/react';
import { COMPANY_INFO } from '../data/topekData';

interface TopBarProps {
  onRequestInfo?: () => void;
}

export const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className="bg-[#0b1626] text-[#cbd5e1] text-[11px] sm:text-xs py-2 sm:py-2.5 border-b border-white/10 transition-all font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left Contact & Address items */}
          <div className="flex items-center gap-4 sm:gap-6 text-white/90 overflow-x-auto no-scrollbar py-0.5">
            <div className="flex items-center gap-2 shrink-0">
              <MapPin size={14} className="text-white/80 shrink-0" weight="fill" />
              <span className="text-[11px] sm:text-xs text-white/90 font-medium">
                {COMPANY_INFO.address}
              </span>
            </div>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-2 hover:text-white transition-colors shrink-0"
            >
              <EnvelopeSimple size={14} className="text-white/80 shrink-0" weight="fill" />
              <span className="text-[11px] sm:text-xs text-white/90">{COMPANY_INFO.email}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 hover:text-white transition-colors shrink-0 font-medium"
            >
              <Phone size={14} className="text-white/80 shrink-0" weight="fill" />
              <span className="text-[11px] sm:text-xs text-white">{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Right Socials & Language */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-white/80">
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <FacebookLogo size={15} weight="fill" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <LinkedinLogo size={15} weight="fill" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="hover:text-white transition-colors"
              >
                <XLogo size={15} weight="bold" />
              </a>
            </div>

            <div className="h-3 w-px bg-white/20"></div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors text-[11px] font-semibold tracking-wider">
              <span>EN</span>
              <CaretDown size={11} weight="bold" />
            </div>

            {/* Subtle Admin Link */}
            <Link
              to="/admin/login"
              title="Admin CMS Portal"
              className="opacity-40 hover:opacity-100 transition-opacity ml-1"
            >
              <UserGear size={13} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
