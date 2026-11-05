import React, { useState } from 'react';
import { X, PaperPlaneRight, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { DIVISIONS, COMPANY_INFO } from '../data/topekData';
import { api } from '../lib/api';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    divisionInterest: initialService || '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      await api.submitLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        divisionInterest: formData.divisionInterest,
        budget: formData.budget,
        message: formData.message,
      });

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit your project inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      divisionInterest: '',
      budget: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#141518]/85 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg sm:max-w-xl bg-white rounded-xs shadow-2xl overflow-hidden border border-[#23252a] my-auto">
        {/* Modal Header */}
        <div className="bg-[#141518] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-[#23252a]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#1e2025] flex items-center justify-center border border-[#2e3138]">
              <div className="relative w-4.5 h-4.5 flex flex-col items-center justify-center">
                <div className="w-4.5 h-1.5 bg-white"></div>
                <div className="w-1.5 h-3 bg-white"></div>
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#c1121f]"></div>
              </div>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight font-heading flex items-center gap-2">
                <span>Request Project RFQ</span>
                <span className="text-[10px] bg-[#1e2025] text-[#e5e4de] px-1.5 py-0.5 rounded-xs font-mono border border-[#2e3138]">
                  CAC {COMPANY_INFO.cacNumber}
                </span>
              </h3>
              <p className="text-[11px] text-[#a1a1aa] font-sans">
                Direct Engineering Inquiry · TOPEK Construction Limited
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#a1a1aa] hover:text-white p-1 rounded-xs hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <CheckCircle size={56} weight="duotone" className="text-emerald-500 mx-auto" />
              <h4 className="text-lg sm:text-xl font-bold text-[#1b2a4a] font-montserrat">
                Project RFQ Received!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for considering TOPEK Construction Limited. Our Lead Engineering Estimator will review your specifications and contact you within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="bg-[#d62828] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#b71c1c] transition-colors shadow-md cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
                  <WarningCircle size={18} weight="fill" className="shrink-0 text-[#d62828]" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Engr. / Alhaji / Chief ..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] focus:ring-1 focus:ring-[#d62828]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@corporate.com"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] focus:ring-1 focus:ring-[#d62828]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 803 000 0000"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] focus:ring-1 focus:ring-[#d62828]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Client / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or Government Agency"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] focus:ring-1 focus:ring-[#d62828]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Division of Interest
                  </label>
                  <select
                    value={formData.divisionInterest}
                    onChange={(e) => setFormData({ ...formData, divisionInterest: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] focus:ring-1 focus:ring-[#d62828] bg-white text-slate-800"
                  >
                    <option value="">-- Select Division --</option>
                    {DIVISIONS.map((d) => (
                      <option key={d.id} value={d.title}>
                        {d.number}. {d.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Estimated Budget Bracket
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] focus:ring-1 focus:ring-[#d62828] bg-white text-slate-800"
                  >
                    <option value="">-- Select Scope Size --</option>
                    <option value="Under ₦50M">Under ₦50 Million</option>
                    <option value="₦50M - ₦250M">₦50M - ₦250 Million</option>
                    <option value="₦250M - ₦1 Billion">₦250M - ₦1 Billion</option>
                    <option value="₦1 Billion+">₦1 Billion+ (Major EPC Infrastructure)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Brief or Scope Details *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide project site location, timeline, and engineering specifications..."
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] focus:ring-1 focus:ring-[#d62828] resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 uppercase tracking-wider cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 bg-[#d62828] hover:bg-[#b71c1c] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting to Database...</span>
                  ) : (
                    <>
                      <span>Transmit RFQ</span>
                      <PaperPlaneRight size={14} weight="bold" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
