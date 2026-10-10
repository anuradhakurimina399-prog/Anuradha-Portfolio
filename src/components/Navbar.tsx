import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#08080D]/90 backdrop-blur-md border-b border-[#B79AFF]/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract: Brand - Nav Links - Primary Action */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#F6F3FA] hover:text-[#B79AFF] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-[#151520] border border-[#B79AFF]/20 text-[#B79AFF] font-mono text-xs flex items-center justify-center group-hover:border-[#B79AFF]/50 transition-colors">
              {portfolioData.profile.initials}
            </span>
            <span className="font-display font-medium text-sm sm:text-base">
              {portfolioData.profile.fullName}
            </span>
          </a>

          {/* Zone 2: 5–6 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#AAA5B8]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors relative hover:text-[#F6F3FA] ${
                  activeSection === link.id ? 'text-[#B79AFF] font-semibold' : ''
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B79AFF] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button & resume quick view */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#AAA5B8] hover:text-[#F6F3FA] bg-[#101019] border border-[#B79AFF]/20 rounded-lg hover:border-[#B79AFF]/40 hover:bg-[#151520] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Inspect Full Resume Document"
            >
              <FileText className="w-3.5 h-3.5 text-[#B79AFF]" />
              Resume View
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#08080D] bg-[#B79AFF] rounded-lg hover:bg-[#c9b3ff] active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer font-semibold shadow-sm shadow-[#B79AFF]/30"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs text-[#B79AFF] bg-[#151520] border border-[#B79AFF]/20 rounded-lg"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#AAA5B8] hover:text-[#F6F3FA] bg-[#101019] border border-[#B79AFF]/15 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B79AFF]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#B79AFF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D15]/98 border-b border-[#B79AFF]/15 px-4 pt-4 pb-6 space-y-3 mt-2 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-[#B79AFF] bg-[#151520]'
                    : 'text-[#AAA5B8] hover:text-[#F6F3FA] hover:bg-[#101019]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#B79AFF]/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#F6F3FA] bg-[#151520] border border-[#B79AFF]/20 rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#B79AFF]" />
              View Complete Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#08080D] bg-[#B79AFF] rounded-lg font-semibold"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
