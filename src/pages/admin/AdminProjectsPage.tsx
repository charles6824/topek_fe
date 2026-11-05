import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { api } from '../../lib/api';
import {
  Plus,
  PencilSimple,
  Trash,
  MagnifyingGlass,
  X,
  CheckCircle,
  WarningCircle
} from '@phosphor-icons/react';

export const AdminProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    scope: '',
    location: '',
    year: '2025 - Present',
    status: 'Ongoing',
    category: 'civil-infrastructure',
    division: 'Construction & Civil Engineering',
    featured: true,
    mainImage: '/assets/projects/general/20241221_141500.jpg',
  });

  const loadProjects = () => {
    api.getProjects()
      .then((res) => {
        if (res.data) setProjects(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const openCreateModal = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      client: '',
      scope: '',
      location: '',
      year: '2025 - Present',
      status: 'Ongoing',
      category: 'civil-infrastructure',
      division: 'Construction & Civil Engineering',
      featured: true,
      mainImage: '/assets/projects/general/20241221_141500.jpg',
    });
    setModalOpen(true);
  };

  const openEditModal = (proj: any) => {
    setEditingProject(proj);
    setFormData({
      title: proj.title,
      client: proj.client,
      scope: proj.scope,
      location: proj.location,
      year: proj.year || '',
      status: proj.status,
      category: proj.category,
      division: proj.division || '',
      featured: !!proj.featured,
      mainImage: proj.mainImage,
    });
    setModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProject) {
        await api.updateProject(editingProject._id, formData);
        setNotification('Project updated successfully in MongoDB');
      } else {
        await api.createProject(formData);
        setNotification('New project added to database');
      }
      setModalOpen(false);
      loadProjects();
      setTimeout(() => setNotification(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Error saving project');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteProject(id);
      setDeleteConfirmId(null);
      setNotification('Project removed from database');
      loadProjects();
      setTimeout(() => setNotification(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Error deleting project');
    }
  };

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl font-black text-white font-montserrat uppercase tracking-tight">
              Verified Projects Manager
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Add, update, or remove engineering and infrastructure works
            </p>
          </div>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 bg-[#d62828] hover:bg-[#b71c1c] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow cursor-pointer"
          >
            <Plus size={16} weight="bold" />
            <span>Add New Project</span>
          </button>
        </div>

        {notification && (
          <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-xl flex items-center gap-2 text-xs text-emerald-200">
            <CheckCircle size={18} weight="fill" className="text-emerald-400" />
            <span>{notification}</span>
          </div>
        )}

        {/* Search */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by title, client, location..."
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-white focus:outline-none focus:border-[#d62828]"
            />
            <MagnifyingGlass size={16} className="absolute left-3 top-3 text-slate-500" />
          </div>

          <span className="text-xs font-mono text-slate-400">
            Showing {filtered.length} of {projects.length}
          </span>
        </div>

        {/* Projects Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-800">
                <tr>
                  <th className="p-4">Project Image & Title</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Sector</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filtered.map((proj) => (
                  <tr key={proj._id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={proj.mainImage}
                          alt={proj.title}
                          className="w-12 h-10 object-cover rounded-lg bg-slate-950 border border-slate-700 shrink-0"
                          onError={(e) => {
                            (e.currentTarget as any).src = '/assets/projects/general/20241221_141500.jpg';
                          }}
                        />
                        <div>
                          <p className="font-bold text-white line-clamp-1">{proj.title}</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">{proj.year}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-amber-400">{proj.client}</td>
                    <td className="p-4 capitalize text-slate-300">
                      {proj.category?.replace('-', ' ')}
                    </td>
                    <td className="p-4 text-slate-400">{proj.location}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        proj.status === 'Ongoing'
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-500/30'
                          : 'bg-emerald-400/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {proj.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal(proj)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                          title="Edit Project"
                        >
                          <PencilSimple size={16} />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(proj._id)}
                          className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 transition-colors cursor-pointer"
                          title="Delete Project"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: Add/Edit Project */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl my-auto">
              <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
                <h3 className="text-base font-bold text-white font-montserrat uppercase">
                  {editingProject ? 'Edit Project Details' : 'Register New Project'}
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Client / Operator *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.client}
                      onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                      placeholder="e.g. NNPC/NGML or BUA Cement"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Site Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                      placeholder="e.g. Ikeja, Lagos"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Status *
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                    >
                      <option value="Ongoing">Ongoing</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                    >
                      <option value="civil-infrastructure">Civil Infrastructure</option>
                      <option value="gas-energy">Gas & Energy EPC</option>
                      <option value="industrial-commercial">Industrial & Commercial</option>
                      <option value="specialized">Specialized Civil</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Timeline / Year
                    </label>
                    <input
                      type="text"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                      placeholder="2024 - Present"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Main Photo Asset Path / URL *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.mainImage}
                    onChange={(e) => setFormData({ ...formData, mainImage: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Scope of Engineering Works *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828] resize-none"
                    placeholder="Describe technical engineering deliverables, foundation piling, earthmoving, etc..."
                  ></textarea>
                </div>

                <div className="pt-3 flex justify-end gap-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#d62828] hover:bg-[#b71c1c] text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full space-y-4 text-center">
              <WarningCircle size={48} weight="fill" className="text-red-500 mx-auto" />
              <h4 className="text-base font-bold text-white font-montserrat">Delete Project?</h4>
              <p className="text-xs text-slate-400">
                Are you sure you want to delete this project from the database? This action is permanent and recorded in the audit trail.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirmId)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};
