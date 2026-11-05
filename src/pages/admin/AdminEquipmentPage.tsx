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

export const AdminEquipmentPage: React.FC = () => {
  const [equipment, setEquipment] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Earthmoving',
    quantity: '1 Unit',
    specifications: '',
    status: 'Operational',
  });

  const loadEquipment = () => {
    api.getEquipment()
      .then((res) => {
        if (res.data) setEquipment(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      category: 'Earthmoving',
      quantity: '1 Unit',
      specifications: '',
      status: 'Operational',
    });
    setModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      specifications: item.specifications,
      status: item.status || 'Operational',
    });
    setModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await api.updateEquipment(editingItem._id, formData);
        setNotification('Equipment unit updated');
      } else {
        await api.createEquipment(formData);
        setNotification('New machinery added to fleet database');
      }
      setModalOpen(false);
      loadEquipment();
      setTimeout(() => setNotification(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Error saving equipment');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteEquipment(id);
      setDeleteConfirmId(null);
      setNotification('Machinery removed from fleet');
      loadEquipment();
      setTimeout(() => setNotification(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Error deleting equipment');
    }
  };

  const filtered = equipment.filter(
    (eq) =>
      eq.name.toLowerCase().includes(search.toLowerCase()) ||
      eq.category.toLowerCase().includes(search.toLowerCase()) ||
      eq.specifications.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl font-black text-white font-montserrat uppercase tracking-tight">
              Machinery & Fleet Manager
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Maintain owned plant equipment, operational readiness, and mobilization status
            </p>
          </div>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 bg-[#d62828] hover:bg-[#b71c1c] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow cursor-pointer"
          >
            <Plus size={16} weight="bold" />
            <span>Add Machinery Unit</span>
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
              placeholder="Filter equipment by model, capacity..."
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-white focus:outline-none focus:border-[#d62828]"
            />
            <MagnifyingGlass size={16} className="absolute left-3 top-3 text-slate-500" />
          </div>

          <span className="text-xs font-mono text-slate-400">
            {filtered.length} Units Listed
          </span>
        </div>

        {/* Equipment Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-800">
                <tr>
                  <th className="p-4">Equipment Model</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Fleet Quantity</th>
                  <th className="p-4">Specifications</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filtered.map((item) => (
                  <tr key={item._id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-bold text-white">{item.name}</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4 font-mono font-bold text-amber-400">{item.quantity}</td>
                    <td className="p-4 text-slate-400 max-w-xs truncate">{item.specifications}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        item.status === 'Operational'
                          ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-500/30'
                          : item.status === 'Mobilized'
                          ? 'bg-blue-400/20 text-blue-300 border border-blue-500/30'
                          : 'bg-amber-400/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal(item)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                        >
                          <PencilSimple size={16} />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(item._id)}
                          className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 transition-colors cursor-pointer"
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

        {/* Modal: Add/Edit Equipment */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl my-auto">
              <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
                <h3 className="text-base font-bold text-white font-montserrat uppercase">
                  {editingItem ? 'Edit Equipment Unit' : 'Register Machinery Unit'}
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
                    Equipment Model & Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                    placeholder="e.g. CAT 330D Crawler Excavator"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Fleet Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                    >
                      <option value="Earthmoving">Earthmoving</option>
                      <option value="Lifting & Cranes">Lifting & Cranes</option>
                      <option value="Concrete & Paving">Concrete & Paving</option>
                      <option value="Haulage & Logistics">Haulage & Logistics</option>
                      <option value="Survey & Testing">Survey & Testing</option>
                      <option value="Power & Welding">Power & Welding</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Fleet Quantity *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                      placeholder="e.g. 4 Units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Readiness Status *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                  >
                    <option value="Operational">Operational (Ready to Mobilize)</option>
                    <option value="Mobilized">Mobilized (Active on Site)</option>
                    <option value="Under Maintenance">Under Routine Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Technical Specifications *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.specifications}
                    onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828] resize-none"
                    placeholder="Horsepower, bucket capacity, boom reach, hydraulic attachments..."
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
                    Save Equipment
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
              <h4 className="text-base font-bold text-white font-montserrat">Remove Machinery?</h4>
              <p className="text-xs text-slate-400">
                Are you sure you want to remove this equipment record from the fleet database?
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
