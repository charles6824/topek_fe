import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { PROJECTS, type ProjectItem } from '../data/topekData';
import { api } from '../lib/api';
import { Eye, MapPin, ArrowRight } from '@phosphor-icons/react';

interface ProjectsPageProps {
  onImageClick: (image: string, title: string) => void;
  onProjectSelect: (project: ProjectItem) => void;
  onOpenContact: (service?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onImageClick,
  onProjectSelect,
  onOpenContact
}) => {
  const [searchParams] = useSearchParams();
  const initialStatus = searchParams.get('filter') || 'All';

  const [projectsList, setProjectsList] = useState<ProjectItem[]>(PROJECTS);
  const [statusFilter, setStatusFilter] = useState<string>(initialStatus);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    const qStatus = searchParams.get('filter');
    if (qStatus && (qStatus === 'Ongoing' || qStatus === 'Completed')) {
      setStatusFilter(qStatus);
    }
  }, [searchParams]);

  useEffect(() => {
    api.getProjects()
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped: ProjectItem[] = res.data.map((p: any) => ({
            id: p._id || p.id,
            title: p.title,
            category: p.category,
            categoryLabel: p.category.replace('-', ' ').toUpperCase(),
            status: p.status,
            client: p.client,
            scope: p.scope,
            location: p.location,
            year: p.year,
            featured: p.featured || false,
            division: p.division,
            image: p.mainImage,
            galleryImages: p.galleryImages,
          }));
          setProjectsList(mapped);
        }
      })
      .catch(() => {});
  }, []);

  const categories = [
    { key: 'all', label: 'All Sectors' },
    { key: 'civil-infrastructure', label: 'Civil Infrastructure' },
    { key: 'gas-energy', label: 'Gas & Energy EPC' },
    { key: 'industrial-commercial', label: 'Industrial & Commercial' },
    { key: 'specialized', label: 'Specialized Civil Works' }
  ];

  const filteredProjects = projectsList.filter((p) => {
    const matchesStatus = statusFilter === 'All' ? true : p.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' ? true : p.category === categoryFilter;
    return matchesStatus && matchesCategory;
  });

  return (
    <div>
      <PageBanner
        title="11 Verified Landmark Projects &"
        titleAccent="National Capital Portfolio"
        badge="NIGERIAN INFRASTRUCTURE TRACK RECORD"
        subtitle="Delivering cross-country natural gas pipelines, heavy reinforced foundations, industrial warehouses, and campus landmarks for blue-chip operators."
        breadcrumbs={[{ label: 'All 11 Verified Projects' }]}
        bgImage="/assets/projects/hero-pipeline-sunset.png"
      />

      <section className="py-16 sm:py-24 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Dual Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#e5e4de]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  Verified Infrastructure Portfolio · RC 1946874
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#141518] font-heading tracking-tight">
                Engineering Projects ({filteredProjects.length})
              </h2>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {/* Status Toggle */}
              <div className="flex items-center gap-1.5 bg-[#f5f4f0] p-1 rounded-xs border border-[#e5e4de]">
                {['All', 'Ongoing', 'Completed'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3.5 py-1.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      statusFilter === st
                        ? 'bg-[#141518] text-white shadow-2xs'
                        : 'text-[#555861] hover:text-[#141518]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setCategoryFilter(c.key)}
                    className={`px-3 py-1.5 rounded-xs text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                      categoryFilter === c.key
                        ? 'bg-[#c1121f] text-white border-[#c1121f]'
                        : 'bg-white text-[#555861] border-[#e5e4de] hover:border-[#141518] hover:text-[#141518]'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xs overflow-hidden border border-[#e5e4de] hover:border-[#141518] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Wrap */}
                <div
                  className="relative aspect-16/10 overflow-hidden bg-[#141518] cursor-pointer"
                  onClick={() => onProjectSelect ? onProjectSelect(project) : onImageClick(project.image, project.title)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/90 via-transparent to-transparent"></div>

                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className={`px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs ${
                      project.status === 'Ongoing'
                        ? 'bg-[#c1121f] text-white'
                        : 'bg-[#141518] text-white border border-white/20'
                    }`}>
                      {project.status}
                    </span>

                    {project.year && (
                      <span className="bg-[#141518]/90 text-white text-[10px] font-mono px-2 py-0.5 rounded-xs border border-[#2e3138]">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 inset-x-3 text-white z-10">
                    <span className="text-[10px] font-mono font-bold text-[#c27803] uppercase tracking-wider block">
                      Client: {project.client}
                    </span>
                    <p className="text-xs text-[#d4d4d8] flex items-center gap-1.5 mt-0.5">
                      <MapPin size={12} weight="fill" className="text-[#c1121f] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-[#141518]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="w-11 h-11 bg-white text-[#141518] rounded-xs flex items-center justify-center shadow-lg">
                      <Eye size={20} weight="bold" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between grow space-y-4">
                  <div>
                    <h3
                      onClick={() => onProjectSelect(project)}
                      className="text-base font-bold text-[#1b2a4a] group-hover:text-[#c1121f] transition-colors leading-snug cursor-pointer font-montserrat line-clamp-2"
                    >
                      {project.title}
                    </h3>

                    {project.scope && (
                      <p className="text-xs text-slate-600 mt-2 font-sans line-clamp-3 leading-relaxed">
                        {project.scope}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => onProjectSelect(project)}
                      className="font-bold text-[#1b2a4a] hover:text-[#c1121f] uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Project Details</span>
                      <ArrowRight size={13} weight="bold" />
                    </button>

                    <button
                      onClick={() => onOpenContact(`Inquiry regarding project: ${project.title}`)}
                      className="text-[#c1121f] hover:underline font-bold"
                    >
                      RFQ Similar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onContactClick={() => onOpenContact('Major Infrastructure Project Consultation')} />
    </div>
  );
};
