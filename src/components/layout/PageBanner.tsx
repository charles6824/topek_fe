import React from 'react';
import { Link } from 'react-router-dom';
import {
  CaretRight,
  House,
  HardHat,
  Truck,
  ShieldCheck,
  Wrench,
  ArrowRight
} from '@phosphor-icons/react';
import { COMPANY_INFO } from '../../data/topekData';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface PageBannerHighlight {
  icon?: React.ReactNode;
  label: string;
  sublabel: string;
  link?: string;
}

export interface PageBannerProps {
  title: string;
  titleAccent?: string;
  badge?: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  highlights?: PageBannerHighlight[];
  ctaText?: string;
  ctaPath?: string;
  secondaryCtaText?: string;
  secondaryCtaPath?: string;
  showStats?: boolean;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  titleAccent,
  badge = 'BUILDING A STRONGER TOMORROW',
  subtitle,
  breadcrumbs,
  bgImage = '/assets/projects/hero-pipeline-sunset.png',
  highlights,
  ctaText = 'Request Consultation',
  ctaPath = '/contact',
  secondaryCtaText = 'View 11 Projects',
  secondaryCtaPath = '/projects',
  showStats = true
}) => {
  // If titleAccent not explicitly passed, check if title has a dot or dash or split cleanly
  let mainTitle = title;
  let accentTitle = titleAccent;

  if (!accentTitle) {
    if (title.includes(' · ')) {
      const parts = title.split(' · ');
      mainTitle = parts[0];
      accentTitle = parts[1];
    } else if (title.includes(' & ')) {
      const parts = title.split(' & ');
      mainTitle = parts[0] + ' &';
      accentTitle = parts[1];
    }
  }

  const defaultHighlights: PageBannerHighlight[] = [
    {
      icon: <HardHat size={26} weight="regular" />,
      label: 'COREN MASTER ENGINEERS',
      sublabel: 'Licensed Engineering Practice',
      link: '/who-we-are'
    },
    {
      icon: <Wrench size={26} weight="regular" />,
      label: 'TURNKEY EPC DELIVERY',
      sublabel: 'Design, Civil, Pipeline & MEP',
      link: '/services'
    },
    {
      icon: <Truck size={26} weight="regular" />,
      label: '70+ OWNED MACHINERY',
      sublabel: 'Excavators, 100T Cranes, Lowbeds',
      link: '/equipment'
    },
    {
      icon: <ShieldCheck size={26} weight="regular" />,
      label: '750K+ SAFE MAN-HOURS',
      sublabel: 'Zero LTI Operational Record',
      link: '/hse-policy'
    }
  ];

  const activeHighlights = highlights || defaultHighlights;

  return (
    <div className="relative w-full bg-[#0c1524] select-none text-white">
      {/* Banner Visual Hero Area */}
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] overflow-hidden flex items-center">
        {/* Photographic Background with High-Impact Contrast */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out"
          style={{ backgroundImage: `url("${bgImage}")` }}
        >
          {/* Subtle gradient overlay ensuring crystal-clear text contrast while letting the image shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Banner Content Layout */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-14 sm:py-20 w-full">
          {/* Left Column: Breadcrumbs, Eyebrow, Headings, Subtitle & CTAs */}
          <div className="max-w-xl lg:max-w-2xl text-left">
            {/* Sleek Breadcrumb Trail */}
            <nav className="flex items-center gap-1.5 text-xs text-gray-300 mb-4 flex-wrap">
              <Link
                to="/"
                className="flex items-center gap-1 hover:text-white transition-colors text-white/80"
              >
                <House size={13} className="text-[#c1121f]" />
                <span>Home</span>
              </Link>

              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <CaretRight size={11} className="text-white/40" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-white text-white/80 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* Eyebrow Tag with Vertical Red Accent Bar */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-4 sm:h-5 bg-[#c1121f] inline-block rounded-full"></span>
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-white/95">
                {badge}
              </span>
            </div>

            {/* Signature Two-Tone Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] font-sans text-white">
              <span>{mainTitle}</span>
              {accentTitle && (
                <>
                  <br />
                  <span className="text-[#c1121f]">{accentTitle}</span>
                </>
              )}
            </h1>

            {/* Subtitle Description */}
            {subtitle && (
              <p className="text-sm sm:text-base text-gray-200 mt-4 mb-7 font-normal leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to={ctaPath}
                className="inline-flex items-center gap-2 bg-[#c1121f] hover:bg-[#9e0e1a] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-md shadow-lg transition-all duration-200"
              >
                <span>{ctaText}</span>
                <ArrowRight size={15} weight="bold" />
              </Link>

              <Link
                to={secondaryCtaPath}
                className="inline-flex items-center gap-2 bg-[#0c1524]/60 hover:bg-[#0c1524]/90 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-md border border-white/30 backdrop-blur-xs transition-all duration-200"
              >
                <span>{secondaryCtaText}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Dark Feature Card (Mirrors Landing Hero) */}
          <div className="hidden lg:flex w-64 xl:w-72 bg-[#0c1524]/90 backdrop-blur-md rounded-md p-6 border border-white/15 shadow-2xl flex-col space-y-5 shrink-0">
            {activeHighlights.map((item, idx) => {
              const isLast = idx === activeHighlights.length - 1;
              const content = (
                <div
                  className={`flex items-center gap-3.5 text-white group/item hover:translate-x-1 transition-transform ${
                    !isLast ? 'pb-4 border-b border-white/10' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xs flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-white block">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-gray-300 block font-normal">
                      {item.sublabel}
                    </span>
                  </div>
                </div>
              );

              return item.link ? (
                <Link key={idx} to={item.link}>
                  {content}
                </Link>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-width Stats Strip Docked at the Base (Matching Landing Hero) */}
      {showStats && (
        <div className="w-full bg-white border-t border-b border-gray-200 py-5 px-4 sm:px-6 lg:px-8 shadow-sm text-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            {COMPANY_INFO.stats.map((stat, i) => {
              const words = stat.label.split(' ');
              const mid = Math.ceil(words.length / 2);
              const line1 = words.slice(0, mid).join(' ');
              const line2 = words.slice(mid).join(' ');

              return (
                <div
                  key={i}
                  className="pt-3 sm:pt-0 sm:px-4 flex items-center justify-center gap-3.5 first:pl-0 last:pr-0"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#c1121f] font-heading tracking-tight shrink-0">
                    {stat.value}
                  </span>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-wider leading-tight text-left">
                    <span>{line1}</span>
                    {line2 && <span className="block text-slate-500 mt-0.5">{line2}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
