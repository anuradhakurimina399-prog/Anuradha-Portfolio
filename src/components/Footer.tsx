import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-[#B79AFF]/15 py-12 text-[#AAA5B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#B79AFF]/10">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#151520] border border-[#B79AFF]/20 text-[#B79AFF] font-mono text-xs flex items-center justify-center font-bold">
              {portfolioData.profile.initials}
            </span>
            <div>
              <span className="text-base font-bold text-[#F6F3FA] block font-display">
                {portfolioData.profile.fullName}
              </span>
              <span className="text-xs text-[#777287]">
                Computer Science & Engineering · GMRIT Rajam
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#about" className="hover:text-[#F6F3FA] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#F6F3FA] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#F6F3FA] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#F6F3FA] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#F6F3FA] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#F6F3FA] transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#101019] border border-[#B79AFF]/15 hover:border-[#B79AFF]/35 text-xs font-medium text-[#F6F3FA] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B79AFF]" />
          </button>
        </div>

        {/* Lower row: Copyright & Contact */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777287]">
          <div>
            © {currentYear} {portfolioData.profile.fullName}. All portfolio contents verified against candidate resume.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="hover:text-[#B79AFF] transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${portfolioData.profile.phone}`}
              className="hover:text-[#B79AFF] transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Phone</span>
            </a>
            <a
              href={portfolioData.profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B79AFF] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
