import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { api } from '../../lib/api';
import {
  CheckCircle,
  Trash,
  X,
  User
} from '@phosphor-icons/react';

export const AdminLeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [internalNotes, setInternalNotes] = useState('');
  const [leadStatus, setLeadStatus] = useState('New');
  const [notification, setNotification] = useState<string | null>(null);

  const loadLeads = () => {
    const filter = statusFilter === 'All' ? undefined : statusFilter;
    api.getLeads(filter)
      .then((res) => {
        if (res.data) setLeads(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadLeads();
  }, [statusFilter]);

  const openLeadDrawer = (lead: any) => {
    setSelectedLead(lead);
    setLeadStatus(lead.status || 'New');
    setInternalNotes(lead.notes || '');
  };

  const handleUpdateStatus = async () => {
    if (!selectedLead) return;
    try {
      await api.updateLeadStatus(selectedLead._id, {
        status: leadStatus,
        notes: internalNotes,
      });
      setNotification('Lead status & notes updated');
      setSelectedLead(null);
      loadLeads();
      setTimeout(() => setNotification(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Error updating lead');
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this client inquiry?')) return;
    try {
      await api.deleteLead(id);
      setNotification('Lead deleted');
      if (selectedLead && selectedLead._id === id) setSelectedLead(null);
      loadLeads();
      setTimeout(() => setNotification(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Error deleting lead');
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl font-black text-white font-montserrat uppercase tracking-tight">
              Client RFQ & Leads Inbox
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Live prospective inquiries, tenders, and quotation requests submitted through the portal
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {['All', 'New', 'In-Review', 'Contacted', 'Closed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  statusFilter === st
                    ? 'bg-[#d62828] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {notification && (
          <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-xl flex items-center gap-2 text-xs text-emerald-200">
            <CheckCircle size={18} weight="fill" className="text-emerald-400" />
            <span>{notification}</span>
          </div>
        )}

        {/* Leads Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-800">
                <tr>
                  <th className="p-4">Contact Person</th>
                  <th className="p-4">Client / Organization</th>
                  <th className="p-4">Division Interest</th>
                  <th className="p-4">Budget Range</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Submission Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-slate-500">
                      No quotation requests found for this filter.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead._id}
                      onClick={() => openLeadDrawer(lead)}
                      className="hover:bg-slate-800/50 transition-colors cursor-pointer"
                    >
                      <td className="p-4 font-bold text-white flex items-center gap-2">
                        <User size={16} className="text-slate-500" />
                        <span>{lead.fullName}</span>
                      </td>
                      <td className="p-4 text-slate-300 font-semibold">
                        {lead.organization || 'Individual Client'}
                      </td>
                      <td className="p-4 text-amber-400">
                        {lead.divisionInterest || 'General Civil Engineering'}
                      </td>
                      <td className="p-4 font-mono text-emerald-400">
                        {lead.budget || 'Not specified'}
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          lead.status === 'New'
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-500/30'
                            : lead.status === 'In-Review'
                            ? 'bg-blue-400/20 text-blue-300 border border-blue-500/30'
                            : lead.status === 'Contacted'
                            ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-slate-700/50 text-slate-400'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400 text-[11px] font-mono">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleDeleteLead(lead._id)}
                          className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 transition-colors cursor-pointer"
                          title="Delete Lead"
                        >
                          <Trash size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Inspection Drawer */}
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl my-auto">
              <div className="bg-slate-950 p-5 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-montserrat uppercase">
                    Quotation Request Review
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    ID: {selectedLead._id} · Received {new Date(selectedLead.createdAt).toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {/* Client Contact Info */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Name</span>
                    <span className="text-xs font-bold text-white">{selectedLead.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Organization</span>
                    <span className="text-xs text-slate-300">{selectedLead.organization || 'None'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Email</span>
                    <a href={`mailto:${selectedLead.email}`} className="text-xs text-amber-400 hover:underline">
                      {selectedLead.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Phone</span>
                    <a href={`tel:${selectedLead.phone}`} className="text-xs text-emerald-400 hover:underline">
                      {selectedLead.phone}
                    </a>
                  </div>
                </div>

                {/* Scope & Details */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Project Brief & Specifications:
                  </span>
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-wrap">
                    {selectedLead.message}
                  </div>
                </div>

                {/* Division & Budget */}
                <div className="flex items-center justify-between p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-xs">
                  <span><strong>Division:</strong> {selectedLead.divisionInterest || 'General'}</span>
                  <span><strong>Budget:</strong> <span className="font-mono text-amber-400">{selectedLead.budget || 'Open'}</span></span>
                </div>

                {/* Status Updater & Internal Engineering Notes */}
                <div className="pt-2 space-y-3 border-t border-slate-800">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Update Review Status
                    </label>
                    <select
                      value={leadStatus}
                      onChange={(e) => setLeadStatus(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828]"
                    >
                      <option value="New">New (Unaddressed)</option>
                      <option value="In-Review">In-Review (Estimating Team Analyzing)</option>
                      <option value="Contacted">Contacted (Called / Emailed Client)</option>
                      <option value="Closed">Closed (Contract Finalized or Archived)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Internal Engineering Estimator Notes
                    </label>
                    <textarea
                      rows={3}
                      value={internalNotes}
                      onChange={(e) => setInternalNotes(e.target.value)}
                      placeholder="e.g. Sent BOQ template, site inspection scheduled for Thursday in Ikeja..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:border-[#d62828] resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-3 flex justify-end gap-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedLead(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleUpdateStatus}
                    className="bg-[#d62828] hover:bg-[#b71c1c] text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow"
                  >
                    Save Status & Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};
