import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, Layers, Database, CheckCircle2, Cpu, FileCode } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0D0D15] border border-[#B79AFF]/25 rounded-2xl shadow-2xl shadow-black p-6 sm:p-8 text-[#F6F3FA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#151520] text-[#AAA5B8] hover:text-[#F6F3FA] hover:bg-[#1c1c2b] border border-[#B79AFF]/15 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#AAA5B8]">
            <span className="text-[#B79AFF]">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Completed {project.year}</span>
          </div>
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-[#AAA5B8] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Tech Stack Unboxed Metadata Bar */}
        <div className="my-6 p-4 rounded-xl bg-[#101019] border border-[#B79AFF]/15 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="text-[#B79AFF] font-mono font-medium">Verified Stack:</span>
          {project.techStack.map((tech, idx) => (
            <React.Fragment key={tech}>
              <span className="text-[#F6F3FA] font-medium">{tech}</span>
              {idx < project.techStack.length - 1 && (
                <span aria-hidden="true" className="text-[#777287]">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#B79AFF] flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            Problem Statement & Engineering Purpose
          </h3>
          <p className="text-sm text-[#AAA5B8] leading-relaxed bg-[#101019]/60 p-4 rounded-xl border border-[#B79AFF]/10">
            {project.problemStatement}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#B79AFF] flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            System Architecture Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.architecturalHighlights.map((arch, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#151520] border border-[#B79AFF]/15 space-y-1">
                <h4 className="text-xs font-semibold text-[#F6F3FA]">{arch.title}</h4>
                <p className="text-xs text-[#AAA5B8] leading-relaxed">{arch.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Implemented Contributions */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#B79AFF] flex items-center gap-1.5">
            <FileCode className="w-4 h-4" />
            Key Contributions & Implemented Features
          </h3>
          <ul className="space-y-2">
            {project.keyContributions.map((contrib, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AAA5B8]">
                <CheckCircle2 className="w-4 h-4 text-[#B79AFF] shrink-0 mt-0.5" />
                <span>{contrib}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Outcomes */}
        <div className="space-y-3 mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#B79AFF] flex items-center gap-1.5">
            <Database className="w-4 h-4" />
            Measured Technical Outcomes
          </h3>
          <div className="space-y-2">
            {project.outcomes.map((outcome, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#101019] border border-[#B79AFF]/10 text-xs sm:text-sm text-[#AAA5B8]">
                {outcome}
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#B79AFF]/15 flex items-center justify-between">
          <span className="text-xs font-mono text-[#777287]">
            Resume verified project record
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#08080D] bg-[#B79AFF] hover:bg-[#c9b3ff] rounded-lg transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
