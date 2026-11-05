import React, { useState } from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { MapSection } from '../components/MapSection';
import { COMPANY_INFO, DIVISIONS } from '../data/topekData';
import { api } from '../lib/api';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  PaperPlaneRight,
  CheckCircle,
  WarningCircle
} from '@phosphor-icons/react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    divisionInterest: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      await api.submitLead(formData);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit your inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBanner
        title="Project Inquiries &"
        titleAccent="Tender Consultations"
        badge="DIRECT EXECUTIVE & ENGINEERING OFFICES"
        subtitle="Submit technical tenders, request architectural/civil engineering consultations, or reach our executive project management office in Lagos."
        breadcrumbs={[{ label: 'Contact Us & RFQ' }]}
        bgImage="/assets/projects/hero-pipeline-sunset.png"
      />

      <section className="py-16 sm:py-24 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Corporate Directory */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                  <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                    Corporate Contact & RFQ Directory
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#141518] font-heading mt-1 mb-3">
                  Executive Head Office
                </h2>
                <div className="w-12 h-1 bg-[#c1121f] mb-4"></div>
                <p className="text-xs sm:text-sm text-[#555861] leading-relaxed font-sans">
                  Have an upcoming civil infrastructure tender, heavy industrial foundation, natural gas pipeline, or property development project? Connect with our engineering estimators.
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Address Card */}
                <div className="bg-white p-5 rounded-xs border border-[#e5e4de] flex items-start gap-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xs bg-[#f5f4f0] text-[#c1121f] flex items-center justify-center shrink-0 border border-[#e5e4de]">
                    <MapPin size={20} weight="fill" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#141518] font-heading">
                      Registered Corporate Address
                    </h4>
                    <p className="text-xs text-[#555861] mt-1 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                    <span className="inline-block mt-1.5 text-[10px] font-mono font-semibold text-[#c27803] bg-[#faf9f6] px-2 py-0.5 rounded-xs border border-[#e5e4de]">
                      Lagos · Abuja · Nationwide Corridors
                    </span>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="bg-white p-5 rounded-xs border border-[#e5e4de] flex items-start gap-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xs bg-[#f5f4f0] text-[#141518] flex items-center justify-center shrink-0 border border-[#e5e4de]">
                    <Phone size={20} weight="fill" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#141518] font-heading">
                      Direct Telephone & WhatsApp
                    </h4>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-xs font-bold text-[#141518] hover:text-[#c1121f] mt-1 block font-mono"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-[#71717a] font-mono">Alt: {COMPANY_INFO.altPhone}</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="bg-white p-5 rounded-xs border border-[#e5e4de] flex items-start gap-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xs bg-[#f5f4f0] text-[#c1121f] flex items-center justify-center shrink-0 border border-[#e5e4de]">
                    <EnvelopeSimple size={20} weight="fill" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#141518] font-heading">
                      Official Inquiries Email
                    </h4>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs font-bold text-[#141518] hover:text-[#c1121f] mt-1 block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white p-5 rounded-xs border border-[#e5e4de] flex items-start gap-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xs bg-[#f5f4f0] text-[#71717a] flex items-center justify-center shrink-0 border border-[#e5e4de]">
                    <Clock size={20} weight="fill" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#141518] font-heading">
                      Office & Site Schedule
                    </h4>
                    <p className="text-xs text-[#555861] mt-1">
                      Monday – Friday: 8:00 AM – 5:00 PM
                      <br />
                      24/7 Field Site Support for Active Mobilizations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct MongoDB Submission RFQ Form */}
            <div className="lg:col-span-7 bg-white rounded-xs p-6 sm:p-10 border border-[#e5e4de] shadow-2xs">
              <div className="mb-6">
                <span className="text-[11px] font-mono font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  Technical Parameters
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#141518] font-heading mt-1">
                  Request A Quotation (RFQ)
                </h3>
                <p className="text-xs text-[#5f636e] mt-1 font-sans">
                  Complete the project parameters below. Our estimating department will review your submission and reply with a preliminary technical assessment.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4 bg-[#faf9f6] rounded-xs border border-[#e5e4de] p-8">
                  <CheckCircle size={52} weight="fill" className="text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-black text-[#141518] font-heading uppercase">
                    Inquiry Transmitted Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555861] max-w-sm mx-auto leading-relaxed font-sans">
                    Thank you for contacting TOPEK Construction Limited. Your RFQ has been logged and assigned to our Project Engineering Directorate.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', organization: '', divisionInterest: '', budget: '', message: '' });
                    }}
                    className="mt-3 bg-[#c1121f] text-white px-6 py-2.5 rounded-xs text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-[#141518] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xs flex items-center gap-2 text-xs text-red-700">
                      <WarningCircle size={18} weight="fill" className="shrink-0 text-[#c1121f]" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#141518] uppercase tracking-wider mb-1 font-heading">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Engr. John Doe"
                        className="w-full text-xs px-3.5 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#c1121f] bg-white shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#141518] uppercase tracking-wider mb-1 font-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@organization.com"
                        className="w-full text-xs px-3.5 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#c1121f] bg-white shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] bg-white shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company / Client
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Organization Name"
                        className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] bg-white shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Division of Interest
                      </label>
                      <select
                        value={formData.divisionInterest}
                        onChange={(e) => setFormData({ ...formData, divisionInterest: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] bg-white text-slate-700 shadow-2xs"
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
                        Project Budget Estimate
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] bg-white text-slate-700 shadow-2xs"
                      >
                        <option value="">-- Select Budget Range --</option>
                        <option value="Under ₦50M">Under ₦50 Million</option>
                        <option value="₦50M - ₦250M">₦50M - ₦250 Million</option>
                        <option value="₦250M - ₦1 Billion">₦250M - ₦1 Billion</option>
                        <option value="₦1 Billion+">₦1 Billion+ (Turnkey Industrial/Civil)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Scope & Site Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify project site location, anticipated start date, technical drawings, or equipment needs..."
                      className="w-full text-xs px-3.5 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#d62828] bg-white resize-none shadow-2xs"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-[#d62828] hover:bg-[#b71c1c] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <span>Transmitting to Engineering Database...</span>
                      ) : (
                        <>
                          <span>Transmit Project RFQ</span>
                          <PaperPlaneRight size={15} weight="bold" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </div>
  );
};
