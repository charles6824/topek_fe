import React, { useState } from 'react';
import { PageBanner } from '../components/layout/PageBanner';
import { CtaBanner } from '../components/CtaBanner';
import { MapPin, CheckCircle, PaperPlaneRight, GraduationCap, Briefcase, WarningCircle } from '@phosphor-icons/react';
import { api } from '../lib/api';

interface CareerPageProps {
  onOpenContact: (service?: string) => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ onOpenContact }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [appSubmitted, setAppSubmitted] = useState(false);

  const jobs = [
    {
      id: 'job1',
      title: 'Senior Civil / Structural Engineer',
      department: 'Engineering & Design',
      location: 'Lagos / Field Sites',
      type: 'Full Time',
      experience: '7+ Years',
      description: 'Lead reinforced concrete design, foundation engineering, steel structural analysis, and compliance with BS 8110 / Eurocode standards.'
    },
    {
      id: 'job2',
      title: 'QA/QC Welding & NDT Inspector',
      department: 'Quality Assurance',
      location: 'Northern Sites (Kano / Sokoto)',
      type: 'Project-based',
      experience: '5+ Years',
      description: 'Certified ASNT Level II in UT, RT, MT, PT to monitor welding procedures, witness hydrotests, and maintain punch-list logs.'
    },
    {
      id: 'job3',
      title: 'Project Controls & Planning Engineer',
      department: 'Project Management',
      location: 'Ikeja, Lagos',
      type: 'Full Time',
      experience: '4+ Years',
      description: 'Develop Primavera P6 / MS Project WBS baselines, monitor critical path deviations, and prepare client progress curve reports.'
    },
    {
      id: 'job4',
      title: 'Heavy Equipment Fleet Coordinator',
      department: 'Logistics & Fleet Operations',
      location: 'Ikeja / Operational Yards',
      type: 'Full Time',
      experience: '5+ Years',
      description: 'Manage mobilization, preventive maintenance schedules, and daily inspection logs for 70+ heavy civil equipment units.'
    }
  ];

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      await api.submitLead({
        fullName,
        email,
        phone,
        organization: 'Career Applicant',
        divisionInterest: selectedRole ? `Career: ${selectedRole}` : 'Career / Engineering Application',
        message: qualifications,
      });
      setAppSubmitted(true);
      setFullName('');
      setEmail('');
      setPhone('');
      setQualifications('');
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit application. Please check your network and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#faf9f6]">
      <PageBanner
        title="Engineering Careers &"
        titleAccent="Professional Growth"
        badge="JOIN OUR TALENT & MENTORSHIP POOL"
        subtitle="Join our multidisciplinary team of licensed engineers, technical specialists, and project managers shaping Nigerian infrastructure."
        breadcrumbs={[{ label: 'Careers & Talent' }]}
        bgImage="/assets/projects/hero-pipeline-sunset.png"
      />

      <section className="py-20 sm:py-28 bg-[#faf9f6] border-b border-[#e5e4de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro culture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#c1121f]"></div>
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-[0.2em]">
                  Talent & Human Capital
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#141518] font-heading tracking-tight leading-tight">
                BUILD YOUR ENGINEERING CAREER WITH PURPOSE.
              </h2>
              <div className="w-12 h-1 bg-[#c1121f]"></div>
              <p className="text-sm sm:text-base text-[#555861] leading-relaxed font-sans">
                At TOPEK Construction Limited, our personnel drive our operational superiority. We foster an engineering culture founded upon zero-compromise safety, continuous technical advancement, and direct participation in transformative infrastructure projects across Nigeria.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[#141518]">
                  <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0" />
                  <span>COREN Structured Mentorship</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[#141518]">
                  <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0" />
                  <span>750,000+ LTI-Free Safety Culture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[#141518]">
                  <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0" />
                  <span>Competitive Remuneration & Welfare</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[#141518]">
                  <CheckCircle size={16} weight="fill" className="text-[#c1121f] shrink-0" />
                  <span>Mega Industrial Project Exposure</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#141518] text-white p-8 rounded-xs border border-[#23252a] shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-xs bg-[#1e2025] border border-[#2e3138] flex items-center justify-center text-[#c27803]">
                <GraduationCap size={28} weight="bold" />
              </div>
              <h3 className="text-lg font-black font-heading uppercase text-white">
                Graduate Trainee & Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-sans">
                We periodically recruit distinguished engineering graduates from Nigerian universities for structured field mentorship under registered COREN Fellows and project directors.
              </p>
              <button
                onClick={() => {
                  setSelectedRole('Graduate Engineering Trainee');
                  const elem = document.getElementById('application-form');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-2 text-xs font-bold uppercase tracking-wider text-[#c1121f] hover:underline cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Apply for Traineeship Program</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#141518] font-heading">
                  Active Openings ({jobs.length})
                </h3>
                <p className="text-xs text-[#8a8d98] font-mono mt-1">
                  FIELD & CORPORATE VACANCIES
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-7 rounded-xs border border-[#e5e4de] shadow-2xs hover:border-[#141518] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#f5f4f0] text-[#141518] px-2.5 py-1 rounded-xs border border-[#e5e4de]">
                        {job.department}
                      </span>
                      <span className="font-mono text-xs text-[#8a8d98]">
                        {job.type}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-[#141518] font-heading uppercase">
                      {job.title}
                    </h4>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#5f636e]">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-[#c1121f]" />
                        {job.location}
                      </span>
                      <span>EXP: {job.experience}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5f636e] leading-relaxed font-sans pt-1">
                      {job.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#e5e4de] flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedRole(job.title);
                        const elem = document.getElementById('application-form');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-[#141518] hover:bg-[#c1121f] text-white px-5 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider font-heading transition-colors cursor-pointer"
                    >
                      Apply for Position
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Application Form */}
          <div id="application-form" className="bg-white rounded-xs p-8 sm:p-12 border border-[#e5e4de] max-w-3xl mx-auto shadow-sm">
            <div className="text-left mb-8 pb-6 border-b border-[#e5e4de]">
              <div className="flex items-center gap-2 mb-1">
                <Briefcase size={16} className="text-[#c1121f]" weight="bold" />
                <span className="font-mono text-[11px] font-semibold text-[#8a8d98] uppercase tracking-widest">
                  Candidate Portal
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase text-[#141518] font-heading">
                Submit Your Application
              </h3>
              <p className="text-xs text-[#5f636e] font-mono mt-1">
                {selectedRole ? `TARGET ROLE: ${selectedRole.toUpperCase()}` : 'SUBMIT YOUR CREDENTIALS & EXPERIENCE SUMMARY'}
              </p>
            </div>

            {appSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-xs bg-[#f5f4f0] border border-[#e5e4de] flex items-center justify-center mx-auto text-[#2b7a3a]">
                  <CheckCircle size={36} weight="fill" />
                </div>
                <h4 className="text-xl font-black text-[#141518] font-heading uppercase">
                  Application Logged Successfully
                </h4>
                <p className="text-xs sm:text-sm text-[#5f636e] max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for your submission to TOPEK Construction Limited. Our human resources and engineering evaluation panel will review your credentials and contact shortlisted applicants.
                </p>
                <button
                  onClick={() => setAppSubmitted(false)}
                  className="mt-3 text-xs font-mono font-bold text-[#c1121f] uppercase underline cursor-pointer"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xs flex items-center gap-2 text-xs text-red-700">
                    <WarningCircle size={16} weight="fill" className="shrink-0 text-[#c1121f]" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#141518] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Babatunde Adeyemi"
                      className="w-full text-xs px-4 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#141518] bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#141518] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="adeyemi@example.com"
                      className="w-full text-xs px-4 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#141518] bg-[#faf9f6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#141518] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 803 000 0000"
                      className="w-full text-xs px-4 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#141518] bg-[#faf9f6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#141518] uppercase tracking-wider mb-2">
                      Position of Interest *
                    </label>
                    <input
                      type="text"
                      required
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      placeholder="e.g. Senior Civil / Structural Engineer"
                      className="w-full text-xs px-4 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#141518] bg-[#faf9f6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#141518] uppercase tracking-wider mb-2">
                    Professional Qualifications & Summary *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={qualifications}
                    onChange={(e) => setQualifications(e.target.value)}
                    placeholder="Detail your engineering degree, COREN/NSE registration, ASNT/API certifications, and project experience..."
                    className="w-full text-xs px-4 py-3 rounded-xs border border-[#e5e4de] focus:outline-none focus:border-[#141518] bg-[#faf9f6] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-[#c1121f] hover:bg-[#a50e1a] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-xs text-xs font-bold uppercase tracking-wider font-heading transition-colors shadow-xs cursor-pointer"
                  >
                    <span>{submitting ? 'Transmitting Credentials...' : 'Transmit Application'}</span>
                    <PaperPlaneRight size={14} weight="bold" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <CtaBanner onContactClick={() => onOpenContact('HR & Careers Inquiry')} />
    </div>
  );
};
