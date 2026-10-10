import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0D0D15] relative border-t border-[#B79AFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B79AFF] mb-2">
            04. Industry Experience
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6F3FA] tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="mt-3 text-base text-[#AAA5B8] leading-relaxed">
            Professional software development training and full-stack engineering internship completed in Visakhapatnam.
          </p>
        </ScrollReveal>

        {/* Experience Timeline Card with Scroll Reveal */}
        <div className="space-y-8 max-w-4xl">
          {portfolioData.experience.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={idx * 0.1} yOffset={30}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#101019] border border-[#B79AFF]/15 hover:border-[#B79AFF]/30 transition-all glow-card">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#B79AFF]/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#151520] border border-[#B79AFF]/20 flex items-center justify-center text-[#B79AFF]">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#F6F3FA]">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-medium text-[#B79AFF]">
                          {exp.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Unboxed Metadata (Date, Location, Type) */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-x-3 gap-y-1 text-xs text-[#AAA5B8]">
                    <span className="inline-flex items-center gap-1 font-mono text-[#F6F3FA]">
                      <Calendar className="w-3.5 h-3.5 text-[#B79AFF]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#777287]" />
                      {exp.location}
                    </span>
                    <span className="text-[11px] text-[#777287]">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="py-6 space-y-3">
                  <div className="text-xs font-mono text-[#B79AFF] tracking-wider uppercase">
                    Documented Responsibilities & Deliverables:
                  </div>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AAA5B8] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#B79AFF] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies & Outcome */}
                <div className="pt-4 border-t border-[#B79AFF]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  {/* Unboxed Tech List */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#AAA5B8]">
                    <span className="text-[#777287] font-mono">Environment:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#F6F3FA] font-medium">{tech}</span>
                        {tIdx < exp.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-[#777287]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E0B7D9]">
                    <Award className="w-3.5 h-3.5 text-[#B79AFF]" />
                    <span>Certification Issued by DataPro</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
