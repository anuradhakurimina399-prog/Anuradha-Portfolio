import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { StaggerContainer, StaggerItem } from './ScrollReveal';

export const KeyMetricsStrip: React.FC = () => {
  return (
    <section id="metrics" className="py-8 bg-[#0D0D15] border-y border-[#B79AFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" staggerDelay={0.08}>
          {portfolioData.metrics.map((metric, idx) => (
            <StaggerItem key={idx} yOffset={20}>
              <div className="flex flex-col space-y-1.5 p-3 rounded-xl bg-[#101019]/60 border border-[#B79AFF]/10 hover:border-[#B79AFF]/25 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F6F3FA] font-mono tabular-nums tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F6F3FA] to-[#B79AFF]">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-[#B79AFF] tracking-normal font-sans">
                  {metric.label}
                </div>
                <p className="text-[11px] text-[#AAA5B8] leading-snug">
                  {metric.description}
                </p>
                <span className="text-[10px] text-[#777287] font-mono pt-1">
                  {metric.subtext}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
