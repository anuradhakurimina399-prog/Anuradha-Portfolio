import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Layers, ArrowRight, Database, Code2, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#08080D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B79AFF] mb-2">
            03. Verified Projects
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6F3FA] tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-base text-[#AAA5B8] leading-relaxed">
            Real software systems engineered by Anuradha, featuring full-stack Django architecture, MongoDB document models, and responsive cross-device interfaces.
          </p>
        </ScrollReveal>

        {/* Projects Grid: 2-Column Responsive Layout with Staggered Scroll-Triggered Animation */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch" staggerDelay={0.15}>
          {portfolioData.projects.map((project) => (
            <StaggerItem key={project.id} yOffset={32} className="h-full flex">
              <article className="w-full flex flex-col justify-between rounded-2xl bg-[#0D0D15] border border-[#B79AFF]/15 hover:border-[#B79AFF]/35 transition-all glow-card overflow-hidden shadow-xl shadow-black/40">
                {/* Custom High-Fidelity Thematic SVG Architecture Graphic */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-b from-[#151522] to-[#0D0D15] border-b border-[#B79AFF]/15 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Background Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `radial-gradient(rgba(183, 154, 255, 0.4) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Ambient Soft Lavender Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#B79AFF]/10 blur-3xl pointer-events-none rounded-full" />

                  {/* Top unboxed metadata strip */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#AAA5B8]">
                    <span className="text-[#B79AFF] font-medium">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Vector Visual Anchor */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    {project.id === 'temple-info-system' ? (
                      /* Sacred Architecture / Heritage System Blueprint Visualization */
                      <div className="flex items-center gap-4 text-center">
                        <div className="p-3.5 rounded-xl bg-[#101019]/90 border border-[#B79AFF]/25 shadow-lg backdrop-blur-sm">
                          <Database className="w-8 h-8 text-[#B79AFF] mx-auto mb-1" />
                          <span className="text-[10px] font-mono text-[#E0B7D9]">MongoDB Cluster</span>
                        </div>
                        <div className="h-0.5 w-8 bg-gradient-to-r from-[#B79AFF] to-[#E0B7D9]" />
                        <div className="p-3.5 rounded-xl bg-[#101019]/90 border border-[#B79AFF]/25 shadow-lg backdrop-blur-sm">
                          <Layers className="w-8 h-8 text-[#E0B7D9] mx-auto mb-1" />
                          <span className="text-[10px] font-mono text-[#B79AFF]">Django MVT Portal</span>
                        </div>
                      </div>
                    ) : (
                      /* E-Commerce Flow Visualization */
                      <div className="flex items-center gap-4 text-center">
                        <div className="p-3.5 rounded-xl bg-[#101019]/90 border border-[#B79AFF]/25 shadow-lg backdrop-blur-sm">
                          <Code2 className="w-8 h-8 text-[#A9B7FF] mx-auto mb-1" />
                          <span className="text-[10px] font-mono text-[#A9B7FF]">Python / Django</span>
                        </div>
                        <div className="h-0.5 w-8 bg-gradient-to-r from-[#A9B7FF] to-[#B79AFF]" />
                        <div className="p-3.5 rounded-xl bg-[#101019]/90 border border-[#B79AFF]/25 shadow-lg backdrop-blur-sm">
                          <Sparkles className="w-8 h-8 text-[#B79AFF] mx-auto mb-1" />
                          <span className="text-[10px] font-mono text-[#E0B7D9]">Responsive Cart UI</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Lower tag info */}
                  <div className="relative z-10 text-[11px] font-mono text-[#AAA5B8] flex items-center gap-2">
                    <span className="text-[#F6F3FA] font-medium">{project.title}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#B79AFF]">Architected in Django</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#F6F3FA] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-[#E0B7D9] leading-normal">
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#AAA5B8] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Bullet points: Concrete contributions directly from resume */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-mono text-[#B79AFF]">Key Implementation:</span>
                      <ul className="space-y-1.5 text-xs text-[#AAA5B8]">
                        {project.keyContributions.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#B79AFF] mt-0.5">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Unboxed Metadata Strip (No Pills Rule) */}
                  <div className="pt-4 border-t border-[#B79AFF]/10">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#AAA5B8] mb-4">
                      <span className="text-[#777287] font-mono">Stack:</span>
                      {project.techStack.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="text-[#F6F3FA] font-medium">{tech}</span>
                          {idx < project.techStack.length - 1 && (
                            <span aria-hidden="true" className="text-[#777287]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Card Action Button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#F6F3FA] bg-[#151520] hover:bg-[#1f1f30] border border-[#B79AFF]/20 hover:border-[#B79AFF]/45 transition-colors cursor-pointer"
                    >
                      <span>View System Architecture & Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B79AFF]" />
                    </button>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
