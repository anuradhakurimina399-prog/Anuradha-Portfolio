import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#08080D] relative border-t border-[#B79AFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B79AFF] mb-2">
            05. Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6F3FA] tracking-tight">
            Education & Academic Track Record
          </h2>
          <p className="mt-3 text-base text-[#AAA5B8] leading-relaxed">
            Consistently high academic standing throughout engineering, intermediate, and secondary education.
          </p>
        </ScrollReveal>

        {/* Education Cards Grid with Staggered Scroll-Triggered Animation */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch" staggerDelay={0.12}>
          {portfolioData.education.map((edu) => (
            <StaggerItem key={edu.id} yOffset={28} className="h-full flex">
              <div
                className={`w-full p-6 rounded-2xl bg-[#0D0D15] border flex flex-col justify-between transition-all glow-card ${
                  edu.isCurrent
                    ? 'border-[#B79AFF]/35 shadow-xl shadow-black/50 ring-1 ring-[#B79AFF]/20'
                    : 'border-[#B79AFF]/15'
                }`}
              >
                <div className="space-y-4">
                  {/* Header Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#151520] border border-[#B79AFF]/20 flex items-center justify-center text-[#B79AFF]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-mono font-bold text-[#F6F3FA] tabular-nums">
                        {edu.score}
                      </span>
                      <div className="text-[10px] text-[#777287] uppercase font-mono">
                        {edu.scoreLabel}
                      </div>
                    </div>
                  </div>

                  {/* Degree and Institution */}
                  <div>
                    <h3 className="text-base font-bold text-[#F6F3FA] leading-snug">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-medium text-[#B79AFF] mt-1">
                      {edu.institution}
                    </div>
                    {edu.location && (
                      <div className="text-[11px] text-[#777287] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                    )}
                  </div>

                  {/* Study Period Unboxed Text */}
                  <div className="text-xs text-[#AAA5B8] flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#B79AFF]" />
                    <span>{edu.period}</span>
                    {edu.isCurrent && (
                      <>
                        <span aria-hidden="true" className="text-[#777287]">·</span>
                        <span className="text-[#E0B7D9] font-sans">Active Degree</span>
                      </>
                    )}
                  </div>

                  {/* Coursework if present */}
                  {edu.coursework && (
                    <div className="pt-3 border-t border-[#B79AFF]/10 space-y-2">
                      <div className="text-[11px] font-mono text-[#AAA5B8] flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-[#B79AFF]" />
                        Relevant Coursework:
                      </div>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#AAA5B8]">
                        {edu.coursework.map((course, idx) => (
                          <React.Fragment key={course}>
                            <span className="text-[#F6F3FA] text-[11px]">{course}</span>
                            {idx < edu.coursework!.length - 1 && (
                              <span aria-hidden="true" className="text-[#777287]">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Marker */}
                <div className="pt-4 mt-4 border-t border-[#B79AFF]/10 text-[11px] font-mono text-[#777287]">
                  <span>Verified Academic Record</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
