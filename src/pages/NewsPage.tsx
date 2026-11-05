import React, { useState } from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { NEWS_ARTICLES } from '../data/topekData';
import type { NewsItem } from '../data/topekData';
import { Calendar, User, ArrowRight, X } from '@phosphor-icons/react';

interface NewsPageProps {
  onOpenContact: (service?: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onOpenContact }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <div className="bg-[#faf9f6]">
      <PageBanner
        title="Field Dispatches &"
        titleAccent="Industry Insights"
        badge="CORPORATE NOTICES & OPERATIONAL MILESTONES"
        subtitle="Operational reports, project milestones, engineering insights, and corporate notices from TOPEK Construction Limited."
        breadcrumbs={[{ label: 'News & Dispatches' }]}
        bgImage="/assets/projects/hero-industrial-complex.png"
      />

      <section className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
              <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                Corporate Publications
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#141518] font-heading tracking-tight leading-tight">
              FIELD MILESTONES & TECHNICAL DISPATCHES.
            </h2>
            <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xs overflow-hidden border border-[#e5e4de] shadow-2xs hover:border-[#141518] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-[#141518]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#141518] border border-[#23252a] text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 font-mono text-[11px] text-[#8a8d98] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} weight="bold" className="text-[#c1121f]" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={13} weight="bold" />
                        {article.author}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-[#141518] group-hover:text-[#c1121f] transition-colors leading-snug font-heading uppercase line-clamp-2 mb-2">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5f636e] leading-relaxed font-sans line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-[#c1121f] hover:text-[#141518] transition-colors cursor-pointer"
                  >
                    <span>Read Dispatch</span>
                    <ArrowRight size={13} weight="bold" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Read Modal */}
      {selectedArticle && (
        <div
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141518]/85 backdrop-blur-xs animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white rounded-xs shadow-2xl overflow-hidden border border-[#23252a] max-h-[85vh] overflow-y-auto"
          >
            <div className="relative h-60 bg-[#141518]">
              <img
                src={selectedArticle.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-white bg-[#141518]/80 hover:bg-[#141518] p-2 rounded-xs border border-[#23252a] cursor-pointer"
              >
                <X size={18} weight="bold" />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#f5f4f0] text-[#141518] px-2.5 py-1 rounded-xs border border-[#e5e4de]">
                {selectedArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#141518] font-heading uppercase">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 font-mono text-xs text-[#8a8d98] border-b border-[#e5e4de] pb-3">
                <span>{selectedArticle.date}</span>
                <span>BY {selectedArticle.author.toUpperCase()}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#555861] leading-relaxed font-sans text-justify">
                {selectedArticle.excerpt}
              </p>
              <p className="text-xs sm:text-sm text-[#555861] leading-relaxed font-sans text-justify">
                TOPEK Construction Limited continues to set benchmarks in the execution of complex civil, heavy industrial, gas infrastructure, and structural projects across Nigeria. We operate with an unwavering dedication to environmental compliance, local content development, and technological precision.
              </p>
              <div className="pt-4 text-right">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#141518] hover:bg-[#c1121f] text-white px-6 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider font-heading cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CtaBanner onContactClick={() => onOpenContact('Media & Press Inquiry')} />
    </div>
  );
};
