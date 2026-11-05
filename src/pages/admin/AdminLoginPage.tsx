import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LockKey, EnvelopeSimple, Eye, EyeSlash, ArrowRight, ShieldCheck, WarningCircle } from '@phosphor-icons/react';
import { api } from '../../lib/api';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await api.login({ email, password });
      if (res.success) {
        navigate('/admin/dashboard');
      } else {
        setErrorMessage(res.message || 'Authentication failed');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Invalid email or password. Please verify your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1626] flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans select-none">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xs bg-[#141518] border border-[#23252a] shadow-xl mb-3">
            <div className="relative w-7 h-7 flex flex-col items-center justify-center">
              <div className="w-7 h-1.5 bg-white"></div>
              <div className="w-1.5 h-5.5 bg-white"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#c1121f]"></div>
            </div>
          </div>
          <h1 className="text-2xl font-black text-white font-heading uppercase tracking-tight">
            TOPEK <span className="text-[#c1121f]">CONSTRUCTION</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono tracking-wider uppercase mt-1">
            Executive Content Management Portal · RC 1946874
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#111927] border border-slate-800 rounded-xs p-7 sm:p-9 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
            <ShieldCheck size={20} weight="fill" className="text-[#c1121f]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              OWASP Hardened Authentication
            </span>
          </div>

          {errorMessage && (
            <div className="p-3.5 mb-5 bg-red-950/80 border border-red-800 rounded-xs flex items-center gap-2.5 text-xs text-red-200">
              <WarningCircle size={18} weight="fill" className="shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Admin Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs pl-10 pr-4 py-3 rounded-xs border border-slate-700 bg-[#0b1626] text-white focus:outline-none focus:border-[#c1121f]"
                  placeholder="admin@topekconstruction.com"
                />
                <EnvelopeSimple size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Secret Access Key / Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-xs pl-10 pr-10 py-3 rounded-xs border border-slate-700 bg-[#0b1626] text-white focus:outline-none focus:border-[#c1121f]"
                  placeholder="••••••••••••"
                />
                <LockKey size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-500 hover:text-white cursor-pointer"
                  aria-label="Toggle password view"
                >
                  {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c1121f] hover:bg-[#a00e19] text-white py-3.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Authenticating Credentials...' : 'Sign In to Portal'}</span>
                <ArrowRight size={15} weight="bold" />
              </button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <Link
              to="/"
              className="text-xs text-slate-400 hover:text-white transition-colors font-mono uppercase"
            >
              &larr; Return to Public Website
            </Link>
          </div>
        </div>

        {/* Audit footer note */}
        <p className="text-center text-[11px] text-slate-500 mt-6 font-mono">
          Session activity is encrypted & logged in MongoDB audit logs.
        </p>
      </div>
    </div>
  );
};
