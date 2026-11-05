import React, { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { api } from '../../lib/api';
import { ShieldCheck, MagnifyingGlass } from '@phosphor-icons/react';

export const AdminAuditPage: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.getAuditLogs(150)
      .then((res) => {
        if (res.data) setLogs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredLogs = logs.filter(
    (l) =>
      l.action?.toLowerCase().includes(search.toLowerCase()) ||
      l.resource?.toLowerCase().includes(search.toLowerCase()) ||
      l.userEmail?.toLowerCase().includes(search.toLowerCase()) ||
      l.ipAddress?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={24} weight="fill" className="text-emerald-400" />
              <h1 className="text-2xl font-black text-white font-montserrat uppercase tracking-tight">
                Security Audit Trail
              </h1>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Immutable traceability records for administrative logins, content mutations, and database events
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by action, email, IP..."
              className="w-full text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-white focus:outline-none focus:border-[#d62828]"
            />
            <MagnifyingGlass size={16} className="absolute left-3 top-3 text-slate-500" />
          </div>
        </div>

        {/* Audit Logs Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider text-[10px] font-bold border-b border-slate-800">
                <tr>
                  <th className="p-4">Action Event</th>
                  <th className="p-4">Target Resource</th>
                  <th className="p-4">Admin Email</th>
                  <th className="p-4">IP Address</th>
                  <th className="p-4">Details Summary</th>
                  <th className="p-4">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500">
                      No security audit events recorded matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log) => (
                    <tr key={log._id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-[10px] font-bold bg-slate-950 text-amber-300 border border-slate-800 px-2 py-0.5 rounded">
                          {log.action}
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-white">{log.resource}</td>
                      <td className="p-4 text-slate-300">
                        {log.userEmail || <span className="text-slate-500">System Routine</span>}
                      </td>
                      <td className="p-4 font-mono text-slate-400 text-[11px]">
                        {log.ipAddress || '127.0.0.1'}
                      </td>
                      <td className="p-4 text-slate-400 max-w-xs truncate font-mono text-[11px]">
                        {log.details ? JSON.stringify(log.details) : '—'}
                      </td>
                      <td className="p-4 font-mono text-[11px] text-slate-400">
                        {new Date(log.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
