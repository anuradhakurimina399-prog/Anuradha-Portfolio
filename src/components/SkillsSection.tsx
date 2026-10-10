import React, { useState } from 'react';
import { portfolioData, SkillItem } from '../data/portfolioData';
import { Code, Server, Layout, BookOpen, Wrench, Check } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Competencies', icon: Code },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'backend-db', label: 'Backend & Databases', icon: Server },
    { id: 'frontend', label: 'Frontend & UI', icon: Layout },
    { id: 'core-cs', label: 'Core CS Subjects', icon: BookOpen },
    { id: 'tools', label: 'Tools & Environments', icon: Wrench },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? portfolioData.skills.items
      : portfolioData.skills.items.filter((item) => item.category === selectedCategory);

  const getCategoryLabel = (cat: SkillItem['category']) => {
    switch (cat) {
      case 'languages':
        return 'Programming Language';
      case 'backend-db':
        return 'Backend / Data Layer';
      case 'frontend':
        return 'Frontend & Design';
      case 'core-cs':
        return 'Computer Science Foundation';
      case 'tools':
        return 'Development Environment';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0D0D15] relative border-t border-[#B79AFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#B79AFF] mb-2">
              02. Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6F3FA] tracking-tight">
              Skills & Technical Toolset
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#AAA5B8]">
              Verified proficiencies extracted directly from academic coursework, hands-on project engineering, and industry internship.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#101019] border border-[#B79AFF]/15 rounded-xl">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#B79AFF] text-[#08080D] font-semibold shadow-sm'
                      : 'text-[#AAA5B8] hover:text-[#F6F3FA] hover:bg-[#151520]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Categorized Skills Grid - Zero-Pill Design with Clean Unboxed Typography and Staggered Reveal */}
        <StaggerContainer
          key={selectedCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.04}
        >
          {filteredSkills.map((skill, index) => (
            <StaggerItem key={`${selectedCategory}-${index}`} yOffset={16}>
              <div className="p-4 rounded-xl bg-[#101019] border border-[#B79AFF]/10 hover:border-[#B79AFF]/30 transition-all glow-card flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-[#F6F3FA] tracking-normal">
                      {skill.name}
                    </h3>
                    {skill.highlight && (
                      <span className="text-[10px] font-mono text-[#B79AFF]" title="Primary focus">
                        ★ Primary
                      </span>
                    )}
                  </div>
                  {/* Clean unboxed metadata with bullet divider */}
                  <div className="text-xs text-[#777287] flex items-center gap-1.5">
                    <span>{getCategoryLabel(skill.category)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#AAA5B8]">Verified</span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-md bg-[#151520] border border-[#B79AFF]/15 flex items-center justify-center text-[#B79AFF]/70 shrink-0">
                  <Check className="w-3 h-3 text-[#B79AFF]" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Curated Skill Context Cards with Smooth Scroll Reveal */}
        <ScrollReveal delay={0.15} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#B79AFF]/10">
          <div className="p-4 rounded-xl bg-[#101019]/60 border border-[#B79AFF]/10">
            <span className="text-xs font-mono text-[#B79AFF]">01 / Backend Framework</span>
            <h4 className="text-sm font-semibold text-[#F6F3FA] mt-1">Django & Python</h4>
            <p className="text-xs text-[#AAA5B8] mt-1.5 leading-relaxed">
              Model-View-Template architecture, ORM queries, form handling, and template tags utilized across internship and academic projects.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#101019]/60 border border-[#B79AFF]/10">
            <span className="text-xs font-mono text-[#B79AFF]">02 / Dual Database Competence</span>
            <h4 className="text-sm font-semibold text-[#F6F3FA] mt-1">SQL & MongoDB</h4>
            <p className="text-xs text-[#AAA5B8] mt-1.5 leading-relaxed">
              Relational schema design and queries via SQL, complemented by flexible document collection storage in MongoDB for non-tabular data.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#101019]/60 border border-[#B79AFF]/10">
            <span className="text-xs font-mono text-[#B79AFF]">03 / Object-Oriented Principles</span>
            <h4 className="text-sm font-semibold text-[#F6F3FA] mt-1">Java & Algorithms</h4>
            <p className="text-xs text-[#AAA5B8] mt-1.5 leading-relaxed">
              Core OOP tenets (Inheritance, Polymorphism, Encapsulation, Abstraction) and standard data structures studied in B.Tech CSE coursework.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
