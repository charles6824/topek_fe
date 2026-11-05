import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, CaretRight, ArrowRight, MapPin } from '@phosphor-icons/react';
import { PROJECTS } from '../data/topekData';
import type { ProjectItem } from '../data/topekData';
import { api } from '../lib/api';

interface ProjectsSectionProps {
  onImageClick: (image: string, title: string) => void;
  onProjectSelect?: (project: ProjectItem) => void;
  limit?: number;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onImageClick,
  onProjectSelect,
  limit
}) => {
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(PROJECTS);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    // Optionally load latest projects from MongoDB backend
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
      .catch(() => {
        // Fall back to static dataset
      });
  }, []);

  const categories = [
    { key: 'all', label: 'All Sectors' },
    { key: 'civil-infrastructure', label: 'Civil Infrastructure' },
    { key: 'gas-energy', label: 'Gas & Energy EPC' },
    { key: 'industrial-commercial', label: 'Industrial & Commercial' },
    { key: 'specialized', label: 'Specialized Civil' }
  ];

  const filteredProjects = projectsList.filter((p) => {
    const matchesStatus = statusFilter === 'All' ? true : p.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' ? true : p.category === categoryFilter;
    return matchesStatus && matchesCategory;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white relative border-b border-[#e5e4de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
            <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
              Verified Infrastructure Portfolio · Nigeria
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141518] uppercase font-heading tracking-tight leading-tight">
            11 VERIFIED PROJECTS DELIVERED & UNDER EXECUTION.
          </h2>
          <div className="w-12 h-1 bg-[#c1121f] mt-4 mb-4"></div>
          <p className="text-sm sm:text-base text-[#555861] font-sans leading-relaxed">
            Multi-billion Naira EPC gas pipeline networks, heavy factory foundations, warehouse logistics terminals, and multi-storey institutional complexes delivered to tier-one industrial clients.
          </p>
        </div>

        {/* Filter Controls: Architectural Status + Category Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#e5e4de]">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 bg-[#f5f4f0] p-1 rounded-xs border border-[#e5e4de]">
            {(['All', 'Ongoing', 'Completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3.5 py-1.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  statusFilter === status
                    ? 'bg-[#141518] text-white shadow-2xs'
                    : 'text-[#555861] hover:text-[#141518]'
                }`}
              >
                {status === 'All' ? 'All (11)' : status}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategoryFilter(c.key)}
                className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-xs border ${
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xs overflow-hidden border border-[#e5e4de] hover:border-[#141518] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview with Hover */}
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#141518]/90 via-[#141518]/20 to-transparent"></div>

                {/* Status & Year Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <span className={`px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs ${
                    project.status === 'Ongoing'
                      ? 'bg-[#c1121f] text-white'
                      : 'bg-[#141518] text-white border border-white/20'
                  }`}>
                    {project.status}
                  </span>

                  {project.year && (
                    <span className="bg-[#141518]/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-xs border border-[#2e3138]">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Client Overlay */}
                <div className="absolute bottom-3 inset-x-3 z-10 text-white">
                  <span className="text-[10px] font-mono font-bold text-[#c27803] uppercase tracking-wider block">
                    Client: {project.client}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#d4d4d8] mt-0.5">
                    <MapPin size={12} weight="fill" className="text-[#c1121f] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Hover Inspect Icon */}
                <div className="absolute inset-0 bg-[#141518]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="w-11 h-11 bg-white text-[#141518] rounded-xs flex items-center justify-center shadow-lg">
                    <Eye size={20} weight="bold" />
                  </div>
                </div>
              </div>

              {/* Title & Scope */}
              <div className="p-5 flex flex-col justify-between grow space-y-3">
                <div>
                  <h3
                    onClick={() => onProjectSelect && onProjectSelect(project)}
                    className="text-base font-bold text-[#141518] group-hover:text-[#c1121f] transition-colors leading-snug line-clamp-2 cursor-pointer font-heading"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#5f636e] leading-relaxed line-clamp-2 mt-2 font-sans">
                    {project.scope}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-3 border-t border-[#f0eee6] flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono uppercase text-[#8a8d98]">
                    {project.categoryLabel || project.category}
                  </span>
                  <button
                    onClick={() => onProjectSelect ? onProjectSelect(project) : onImageClick(project.image, project.title)}
                    className="inline-flex items-center gap-1 text-[#141518] group-hover:text-[#c1121f] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Inspect</span>
                    <CaretRight size={13} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-[#141518] hover:bg-[#c1121f] text-white px-8 py-3.5 rounded-xs text-xs font-bold uppercase tracking-widest transition-colors shadow-xs"
            >
              <span>Explore All 11 Verified Projects</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
