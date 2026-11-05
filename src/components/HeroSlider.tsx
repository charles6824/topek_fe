import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HardHat,
  GearSix,
  ShieldCheck,
  Wrench
} from '@phosphor-icons/react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/topekData';

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full bg-[#0c1524] select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hero Visual Container */}
      <div className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] overflow-hidden flex items-center">
        {/* Slides with 5-Second Automatic Fade In / Out */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Cinematic Sunset / Operational Lighting */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{ backgroundImage: `url("${slide.image}")` }}
              >
                {/* Left-side dark gradient to ensure high readability of typography */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Slide Content Layout */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-16 sm:py-20">
                {/* Left Column: Headings & CTAs */}
                <div
                  className={`max-w-xl lg:max-w-2xl transform transition-all duration-700 delay-150 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  {/* Eyebrow Tag with Red Vertical Accent */}
                  <div className="flex items-center gap-2 mb-3.5">
                    <span className="w-1 h-4 sm:h-5 bg-[#c1121f] inline-block rounded-full"></span>
                    <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-white/95">
                      {slide.lead || 'BUILDING A STRONGER TOMORROW'}
                    </span>
                  </div>

                  {/* Main Headline (Natural Title Case, NOT all-caps) */}
                  <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.1] font-sans text-white">
                    <span>{slide.highlight}</span>
                    <br />
                    <span className="text-[#c1121f]">{slide.sub}</span>
                  </h1>

                  {/* Scope Paragraph */}
                  <p className="text-sm sm:text-base text-gray-200 mt-4 mb-7 font-normal leading-relaxed max-w-lg">
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5">
                    <Link
                      to={slide.ctaPath}
                      className="inline-flex items-center gap-2 bg-[#c1121f] hover:bg-[#9e0e1a] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-7 py-3.5 rounded-md shadow-lg transition-all duration-200"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight size={15} weight="bold" />
                    </Link>

                    <Link
                      to={slide.secondaryCtaPath || '/contact'}
                      className="inline-flex items-center gap-2 bg-[#0c1524]/60 hover:bg-[#0c1524]/90 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-7 py-3.5 rounded-md border border-white/30 backdrop-blur-xs transition-all duration-200"
                    >
                      <span>{slide.secondaryCtaText || 'REQUEST CONSULTATION'}</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Floating Dark Feature Card (Unobstructed) */}
                <div className="hidden lg:flex w-64 xl:w-72 bg-[#0c1524]/90 backdrop-blur-md rounded-md p-6 border border-white/15 shadow-2xl flex-col space-y-5 shrink-0">
                  <Link
                    to="/services#construction-civil-engineering"
                    className="flex items-center gap-3.5 pb-4 border-b border-white/10 text-white group/item hover:translate-x-1 transition-transform"
                  >
                    <div className="w-10 h-10 rounded-xs flex items-center justify-center text-white shrink-0">
                      <HardHat size={28} weight="regular" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        CIVIL
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        ENGINEERING
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/services"
                    className="flex items-center gap-3.5 pb-4 border-b border-white/10 text-white group/item hover:translate-x-1 transition-transform"
                  >
                    <div className="w-10 h-10 rounded-xs flex items-center justify-center text-white shrink-0">
                      <Wrench size={28} weight="regular" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        PIPELINE
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        CONSTRUCTION
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/services"
                    className="flex items-center gap-3.5 pb-4 border-b border-white/10 text-white group/item hover:translate-x-1 transition-transform"
                  >
                    <div className="w-10 h-10 rounded-xs flex items-center justify-center text-white shrink-0">
                      <GearSix size={28} weight="regular" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        EPC
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        SOLUTIONS
                      </span>
                    </div>
                  </Link>

                  <Link
                    to="/hse-policy"
                    className="flex items-center gap-3.5 text-white group/item hover:translate-x-1 transition-transform"
                  >
                    <div className="w-10 h-10 rounded-xs flex items-center justify-center text-white shrink-0">
                      <ShieldCheck size={28} weight="regular" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        SAFETY &
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        QUALITY FIRST
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slide Indicator Dots Centered at Bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                current === idx ? 'w-8 bg-[#c1121f]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Full-width Stats Strip Docked Cleanly at Bottom */}
      <div className="w-full bg-white border-t border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8 shadow-sm">
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
    </div>
  );
};
