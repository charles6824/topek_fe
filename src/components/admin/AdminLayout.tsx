import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  HardHat,
  SquaresFour,
  Buildings,
  Truck,
  EnvelopeOpen,
  ShieldCheck,
  SignOut,
  Globe,
  List,
  X,
  UserCircle
} from '@phosphor-icons/react';
import { api } from '../../lib/api';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    api.getMe()
      .then((res) => {
        if (res.user) {
          setCurrentUser(res.user);
        }
      })
      .catch(() => {
        // Not logged in or expired
        navigate('/admin/login');
      });
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await api.logout();
    } finally {
      navigate('/admin/login');
    }
  };

  const navLinks = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: <SquaresFour size={20} weight="bold" /> },
    { label: 'Projects Manager', path: '/admin/projects', icon: <Buildings size={20} weight="bold" /> },
    { label: 'Equipment Fleet', path: '/admin/equipment', icon: <Truck size={20} weight="bold" /> },
    { label: 'Leads & RFQ Inbox', path: '/admin/leads', icon: <EnvelopeOpen size={20} weight="bold" /> },
    { label: 'Security Audit Trail', path: '/admin/audit-logs', icon: <ShieldCheck size={20} weight="bold" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#d62828] flex items-center justify-center shadow">
            <HardHat size={18} weight="fill" className="text-white" />
          </div>
          <div>
            <span className="font-montserrat font-black text-sm text-white">TOPEK</span>
            <span className="text-[10px] text-amber-400 font-bold ml-1">ADMIN CMS</span>
          </div>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-slate-300 hover:text-white"
          aria-label="Toggle admin sidebar"
        >
          {sidebarOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-5 transform transition-transform duration-300 md:translate-x-0 md:static ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-6">
          {/* Brand Emblem */}
          <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d62828] to-[#991b1b] flex items-center justify-center shadow-lg">
              <HardHat size={22} weight="fill" className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-montserrat font-black text-lg text-white">TOPEK</span>
                <span className="text-[9px] bg-red-950 text-red-300 px-1.5 py-0.5 rounded font-bold border border-red-800">
                  CMS
                </span>
              </div>
              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                CONSTRUCTION LTD
              </span>
            </div>
          </div>

          {/* Current User Card */}
          {currentUser && (
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 flex items-center gap-3">
              <UserCircle size={32} weight="duotone" className="text-amber-400 shrink-0" />
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">{currentUser.name}</p>
                <p className="text-[10px] text-slate-400 truncate">{currentUser.email}</p>
                <span className="inline-block mt-0.5 text-[9px] font-mono font-bold uppercase bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded">
                  {currentUser.role}
                </span>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navLinks.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    active
                      ? 'bg-[#d62828] text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Actions */}
        <div className="pt-6 border-t border-slate-800 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <Globe size={18} weight="bold" />
            <span>View Public Site</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-red-400 hover:text-white hover:bg-red-950/80 transition-colors cursor-pointer"
          >
            <SignOut size={18} weight="bold" />
            <span>Secure Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
