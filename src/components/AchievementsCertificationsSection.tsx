import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const AchievementsCertificationsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#0D0D15] relative border-t border-[#B79AFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B79AFF] mb-2">
            06. Credentials & Honors
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6F3FA] tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-base text-[#AAA5B8] leading-relaxed">
            Recognitions earned from premiere Indian academic institutions and industry programs.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Spotlight Achievement Card: IIT Kharagpur Silver Elite */}
          <ScrollReveal delay={0.1} yOffset={30} className="lg:col-span-7">
            {portfolioData.achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#151525] via-[#10101C] to-[#0D0D15] border border-[#B79AFF]/30 shadow-xl shadow-black/50 glow-card space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#B79AFF]/10 border border-[#B79AFF]/30 flex items-center justify-center text-[#B79AFF]">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#B79AFF] uppercase tracking-wide">
                        National Level Recognition
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F6F3FA]">
                        {ach.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#B79AFF] tabular-nums">
                      77%
                    </div>
                    <div className="text-[10px] text-[#AAA5B8] font-mono">Consolidated Score</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#08080D]/80 border border-[#B79AFF]/15 text-xs text-[#E0B7D9] flex items-center gap-2">
                  <span className="font-semibold text-[#F6F3FA]">{ach.issuer}</span>
                  <span aria-hidden="true" className="text-[#777287]">·</span>
                  <span>Silver Elite Medal Certification</span>
                </div>

                <p className="text-xs sm:text-sm text-[#AAA5B8] leading-relaxed">
                  {ach.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#A9B7FF]">
                  <CheckCircle className="w-4 h-4 text-[#B79AFF]" />
                  <span>Verified via National Programme on Technology Enhanced Learning (NPTEL)</span>
                </div>
              </div>
            ))}
          </ScrollReveal>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal delay={0.12}>
              <div className="text-xs font-mono uppercase tracking-wider text-[#B79AFF] mb-1">
                Verified Certifications
              </div>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.1}>
              {portfolioData.certifications.map((cert) => (
                <StaggerItem key={cert.id} yOffset={20}>
                  <div className="p-5 rounded-2xl bg-[#101019] border border-[#B79AFF]/15 hover:border-[#B79AFF]/30 transition-all glow-card space-y-2 mb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-5 h-5 text-[#B79AFF] shrink-0" />
                        <h4 className="text-sm font-semibold text-[#F6F3FA]">
                          {cert.title}
                        </h4>
                      </div>
                      {cert.credentialDate && (
                        <span className="text-[11px] font-mono text-[#AAA5B8] shrink-0">
                          {cert.credentialDate}
                        </span>
                      )}
                    </div>

                    <div className="text-xs text-[#B79AFF] font-medium pl-7">
                      {cert.issuer}
                    </div>

                    <p className="text-xs text-[#AAA5B8] pl-7 leading-relaxed">
                      {cert.verificationNote}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
