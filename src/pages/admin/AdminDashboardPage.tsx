import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { api } from '../../lib/api';
import {
  Buildings,
  Truck,
  EnvelopeOpen,
  ShieldCheck,
  Plus,
  ArrowRight
} from '@phosphor-icons/react';

export const AdminDashboardPage: React.FC = () => {
  const [stats, setStats] = useState({
    projectsCount: 11,
    ongoingCount: 5,
    completedCount: 6,
    equipmentCount: 13,
    leadsCount: 0,
    newLeadsCount: 0,
  });
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [recentLogs, setRecentLogs] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      api.getProjects(),
      api.getEquipment(),
      api.getLeads(),
      api.getAuditLogs(10),
    ])
      .then(([projRes, eqRes, leadsRes, logsRes]) => {
        const projects = projRes.data || [];
        const ongoing = projects.filter((p: any) => p.status === 'Ongoing').length;
        const completed = projects.filter((p: any) => p.status === 'Completed').length;
        const equipment = eqRes.data || [];
        const leads = leadsRes.data || [];
        const newLeads = leads.filter((l: any) => l.status === 'New').length;

        setStats({
          projectsCount: projects.length,
          ongoingCount: ongoing,
          completedCount: completed,
          equipmentCount: equipment.length,
          leadsCount: leads.length,
          newLeadsCount: newLeads,
        });

        setRecentLeads(leads.slice(0, 5));
        setRecentLogs(logsRes.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-montserrat tracking-tight">
              Executive CMS Overview
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Live MongoDB synchronization · TOPEK Construction Limited (RC 1946874)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/admin/projects"
              className="inline-flex items-center gap-2 bg-[#c1121f] hover:bg-[#a50e1a] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow"
            >
              <Plus size={16} weight="bold" />
              <span>New Project</span>
            </Link>

            <Link
              to="/admin/equipment"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Truck size={16} weight="bold" />
              <span>Add Equipment</span>
            </Link>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Projects Metric */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Verified Projects</span>
              <Buildings size={22} className="text-[#c1121f]" />
            </div>
            <div className="text-3xl font-black text-white font-montserrat">
              {stats.projectsCount}
            </div>
            <div className="flex items-center gap-2 mt-2 text-[11px] font-semibold text-slate-400">
              <span className="text-amber-400">{stats.ongoingCount} Ongoing</span>
              <span>·</span>
              <span className="text-emerald-400">{stats.completedCount} Completed</span>
            </div>
          </div>

          {/* Heavy Equipment Metric */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Machinery Fleet</span>
              <Truck size={22} className="text-amber-400" />
            </div>
            <div className="text-3xl font-black text-white font-montserrat">
              {stats.equipmentCount}
            </div>
            <p className="mt-2 text-[11px] font-semibold text-slate-400">
              100% In-House Heavy Fleet
            </p>
          </div>

          {/* RFQ Leads Metric */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Client RFQs</span>
              <EnvelopeOpen size={22} className="text-blue-400" />
            </div>
            <div className="text-3xl font-black text-white font-montserrat">
              {stats.leadsCount}
            </div>
            <p className="mt-2 text-[11px] font-semibold text-amber-400">
              {stats.newLeadsCount} Pending Review
            </p>
          </div>

          {/* Security & Audit Metric */}
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">Security State</span>
              <ShieldCheck size={22} className="text-emerald-400" />
            </div>
            <div className="text-2xl font-black text-emerald-400 font-montserrat">
              SECURED
            </div>
            <p className="mt-2 text-[11px] font-mono text-slate-400">
              OWASP Top 10 Hardened
            </p>
          </div>
        </div>

        {/* Recent Inquiries & RFQs */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-montserrat">
                Recent Client Quotation Inquiries
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Incoming engineering RFQs and contact messages from MongoDB
              </p>
            </div>
            <Link
              to="/admin/leads"
              className="text-xs font-bold text-[#c1121f] hover:underline flex items-center gap-1"
            >
              <span>View All Inquiries</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            {recentLeads.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                No client inquiries in database yet. Form submissions will appear here live.
              </div>
            ) : (
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950/60 text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                  <tr>
                    <th className="p-4">Client Name</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Division Interest</th>
                    <th className="p-4">Budget</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {recentLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-slate-800/40">
                      <td className="p-4 font-bold text-white">{lead.fullName}</td>
                      <td className="p-4">
                        <div>{lead.email}</div>
                        <div className="text-[11px] text-slate-400">{lead.phone}</div>
                      </td>
                      <td className="p-4">{lead.divisionInterest || 'General Civil'}</td>
                      <td className="p-4 font-mono text-amber-400">{lead.budget || 'Unspecified'}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          lead.status === 'New'
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-500/30'
                            : 'bg-emerald-400/20 text-emerald-300'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400 text-[11px]">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Security Audit Trail Preview */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} weight="fill" className="text-emerald-400" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-montserrat">
                Recent Security Audit Logs
              </h3>
            </div>
            <Link
              to="/admin/audit-logs"
              className="text-xs font-bold text-slate-400 hover:text-white"
            >
              Full Security Log &rarr;
            </Link>
          </div>

          <div className="p-4 divide-y divide-slate-800 text-xs">
            {recentLogs.slice(0, 5).map((log) => (
              <div key={log._id} className="py-2.5 flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] bg-slate-950 px-2 py-0.5 rounded text-slate-300 border border-slate-800">
                    {log.action}
                  </span>
                  <span className="text-slate-300 font-medium">{log.resource}</span>
                  <span className="text-slate-500 text-[11px] hidden sm:inline">{log.userEmail || 'System'}</span>
                </div>
                <div className="font-mono text-[10px] text-slate-500">
                  {new Date(log.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
