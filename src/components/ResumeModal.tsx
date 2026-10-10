import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, Download, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-doc-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0D0D15] border border-[#B79AFF]/30 rounded-2xl shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#101019] border-b border-[#B79AFF]/20 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#B79AFF] font-semibold">
              DOCUMENT VIEWER
            </span>
            <span aria-hidden="true" className="text-[#777287]">·</span>
            <span className="text-xs text-[#AAA5B8]">
              Kurimina_Anuradha_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#08080D] bg-[#B79AFF] hover:bg-[#c9b3ff] rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#151520] text-[#AAA5B8] hover:text-[#F6F3FA] border border-[#B79AFF]/20 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Document Paper View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#08080D] text-[#F6F3FA] space-y-7 font-sans">
          {/* Header */}
          <div className="text-center pb-6 border-b border-[#B79AFF]/20 space-y-2">
            <h1 id="resume-doc-title" className="text-2xl sm:text-3xl font-extrabold tracking-wider font-display text-[#F6F3FA] uppercase">
              {portfolioData.profile.fullName}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#AAA5B8]">
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#B79AFF]" />
                {portfolioData.profile.phone}
              </span>
              <span aria-hidden="true" className="text-[#777287]">·</span>
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="inline-flex items-center gap-1 text-[#F6F3FA] hover:text-[#B79AFF] underline"
              >
                <Mail className="w-3 h-3 text-[#B79AFF]" />
                {portfolioData.profile.email}
              </a>
              <span aria-hidden="true" className="text-[#777287]">·</span>
              <a
                href={portfolioData.profile.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#F6F3FA] hover:text-[#B79AFF] underline"
              >
                LinkedIn: Kurimina Anuradha
              </a>
              <span aria-hidden="true" className="text-[#777287]">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#B79AFF]" />
                {portfolioData.profile.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B79AFF] border-b border-[#B79AFF]/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#AAA5B8] leading-relaxed pt-1">
              {portfolioData.profile.summary}
            </p>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B79AFF] border-b border-[#B79AFF]/20 pb-1">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-sm text-[#AAA5B8] space-y-1 pt-1">
              <p>
                <strong className="text-[#F6F3FA]">Languages:</strong> Java, Python
              </p>
              <p>
                <strong className="text-[#F6F3FA]">Core Subjects:</strong> Object-Oriented Programming (OOP), DBMS
              </p>
              <p>
                <strong className="text-[#F6F3FA]">Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap, Responsive Web Design
              </p>
              <p>
                <strong className="text-[#F6F3FA]">Tools:</strong> Jupyter Notebook, Visual Studio Code
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B79AFF] border-b border-[#B79AFF]/20 pb-1">
              Experience
            </h2>
            <div className="space-y-3 pt-1">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#F6F3FA] text-sm">{exp.role}</strong>{' '}
                      <span className="text-[#B79AFF]">({exp.company})</span>
                    </div>
                    <div className="text-xs text-[#AAA5B8] font-mono">
                      {exp.location} | {exp.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#AAA5B8] space-y-1 pl-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B79AFF] border-b border-[#B79AFF]/20 pb-1">
              Projects
            </h2>
            <div className="space-y-3 pt-1">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <strong className="text-[#F6F3FA]">{proj.title}</strong>
                    <span className="text-xs text-[#AAA5B8] font-mono">{proj.year}</span>
                  </div>
                  <p className="text-xs text-[#E0B7D9]">
                    <strong className="text-[#B79AFF]">Tech Stack:</strong> {proj.techStack.join(', ')}
                  </p>
                  <ul className="list-disc list-inside text-xs text-[#AAA5B8] space-y-1 pl-1">
                    <li>
                      <strong className="text-[#F6F3FA]">Contribution:</strong> {proj.shortDescription}
                    </li>
                    <li>
                      <strong className="text-[#F6F3FA]">Outcome:</strong> {proj.outcomes[0]}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B79AFF] border-b border-[#B79AFF]/20 pb-1">
              Education
            </h2>
            <div className="space-y-3 pt-1">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <strong className="text-[#F6F3FA]">{edu.degree}</strong>
                    <span className="text-xs text-[#AAA5B8] font-mono">{edu.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#AAA5B8]">
                    <span>{edu.institution} {edu.location ? `· ${edu.location}` : ''}</span>
                    <span className="font-mono text-[#B79AFF] font-semibold">{edu.scoreLabel}: {edu.score}</span>
                  </div>
                  {edu.coursework && (
                    <p className="text-[11px] text-[#777287] pt-0.5">
                      <strong>Relevant Coursework:</strong> {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B79AFF] border-b border-[#B79AFF]/20 pb-1">
              Achievements
            </h2>
            <ul className="list-disc list-inside text-xs text-[#AAA5B8] space-y-1 pt-1 pl-1">
              {portfolioData.achievements.map((ach) => (
                <li key={ach.id} className="leading-relaxed">
                  Attained <strong className="text-[#F6F3FA]">Silver Elite Badge</strong> in the "The Joy of Computing using Python" course offered by <strong className="text-[#F6F3FA]">IIT Kharagpur (NPTEL)</strong> with a consolidated score of <strong className="text-[#B79AFF]">77%</strong>.
                </li>
              ))}
            </ul>
          </section>

          {/* Certifications */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B79AFF] border-b border-[#B79AFF]/20 pb-1">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-[#AAA5B8] space-y-1 pt-1 pl-1">
              {portfolioData.certifications.map((cert) => (
                <li key={cert.id} className="leading-relaxed">
                  <strong className="text-[#F6F3FA]">{cert.title}</strong> – {cert.issuer}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
