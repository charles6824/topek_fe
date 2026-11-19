import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X, CaretDown, MagnifyingGlass, ArrowRight } from '@phosphor-icons/react';
import { NAVIGATION } from '../data/topekData';

interface NavbarProps {
  onOpenSearch: () => void;
  onRequestInfo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onRequestInfo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-sm py-2.5 bg-white/98 backdrop-blur-md border-b border-gray-200'
          : 'border-b border-gray-200/80 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* TOPEK Construction Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group select-none shrink-0 py-1">
            <img
              src="/logo.png"
              alt="TOPEK Construction Limited"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="hidden sm:inline-block text-[9px] font-mono font-bold tracking-wider text-[#eb2c1f] uppercase bg-red-50/80 px-1.5 py-0.5 rounded-xs border border-red-200/80">
              RC 1946874
            </span>
          </Link>

          {/* Streamlined Desktop Navigation (6 Clean Items - Zero Wrapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {NAVIGATION.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const active = isCurrent(item.path);

              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap relative ${
                      active
                        ? 'text-[#eb2c1f] after:content-[""] after:absolute after:-bottom-1 after:left-2.5 after:right-2.5 after:h-[2px] after:bg-[#eb2c1f] after:rounded-full'
                        : 'text-[#1e293b] hover:text-[#eb2c1f]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <CaretDown
                        size={11}
                        weight="bold"
                        className="opacity-60 group-hover:rotate-180 transition-transform duration-200"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === item.label && (
                    <div
                      className={`absolute top-full left-0 bg-white border-t-2 border-[#eb2c1f] shadow-2xl rounded-xs py-3 px-4 z-50 animate-fade-in border border-gray-200 ${
                        item.columns && item.columns > 1
                          ? 'w-[560px] grid grid-cols-2 gap-x-6 gap-y-1'
                          : 'w-72 flex flex-col space-y-1'
                      }`}
                    >
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="text-xs font-semibold text-[#1e293b] hover:text-[#eb2c1f] hover:translate-x-1 py-2 px-2.5 rounded-xs hover:bg-gray-50 transition-all block border-b border-gray-100 last:border-none"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search website"
              className="group/search p-2 text-[#1e293b] hover:text-[#eb2c1f] hover:bg-gray-100 rounded-md transition-colors ml-1 cursor-pointer"
            >
              <MagnifyingGlass size={19} weight="bold" className="group-hover/search:scale-115 transition-transform duration-200" />
            </button>

            {/* Primary Action Button (Refined Deep Crimson) */}
            <button
              onClick={onRequestInfo}
              className="group/btn ml-2 flex items-center gap-2 bg-[#eb2c1f] hover:bg-[#141518] text-white text-[11px] xl:text-[12px] font-bold tracking-wider uppercase px-4.5 py-2.5 rounded-md shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight size={14} weight="bold" className="group-hover/btn:translate-x-1 transition-transform duration-200" />
            </button>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-slate-700 hover:text-[#eb2c1f] rounded-lg hover:bg-slate-100"
            >
              <MagnifyingGlass size={22} weight="bold" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#eb2c1f] focus:outline-none rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto animate-fade-in px-4 py-4">
          <div className="flex flex-col space-y-1">
            {NAVIGATION.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!mobileExpanded[item.label];
              const active = isCurrent(item.path);

              return (
                <div key={item.label} className="border-b border-gray-100 py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      onClick={() => !hasChildren && setMobileMenuOpen(false)}
                      className={`text-sm font-bold uppercase tracking-wider py-2 transition-colors ${
                        active ? 'text-[#eb2c1f]' : 'text-slate-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => toggleMobileExpand(item.label)}
                        className="p-2 text-slate-500 hover:text-[#eb2c1f]"
                        aria-label={`Expand ${item.label}`}
                      >
                        <CaretDown
                          size={16}
                          weight="bold"
                          className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <div className="pl-3 py-1 space-y-1 bg-gray-50 rounded-xs mb-2 border-l-2 border-[#eb2c1f]">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-xs text-slate-700 hover:text-[#eb2c1f] font-medium"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestInfo();
                }}
                className="w-full py-3 bg-[#eb2c1f] text-white text-xs font-bold tracking-wider uppercase rounded-md text-center flex items-center justify-center gap-2"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight size={15} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
