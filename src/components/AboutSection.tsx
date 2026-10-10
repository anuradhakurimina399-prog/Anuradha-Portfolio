import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#08080D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B79AFF] mb-2">
            01. Professional Narrative
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6F3FA] tracking-tight">
            About Kurimina Anuradha
          </h2>
          <p className="mt-3 text-base text-[#AAA5B8] leading-relaxed">
            Computer Science and Engineering undergraduate passionate about crafting scalable web architectures, clean codebases, and robust database layers.
          </p>
        </ScrollReveal>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-6 text-[#AAA5B8] text-sm sm:text-base leading-relaxed">
            <p>
              I am currently pursuing my <strong className="text-[#F6F3FA] font-medium">B.Tech in Computer Science and Engineering</strong> at <strong className="text-[#F6F3FA] font-medium">GMR Institute of Technology (GMRIT), Rajam</strong> with a strong academic standing of <span className="text-[#B79AFF] font-mono font-semibold">8.8 CGPA</span>. My engineering journey centers around building practical, reliable software systems that solve concrete problems.
            </p>

            <p>
              During my internship at <strong className="text-[#F6F3FA] font-medium">DataPro</strong> in Visakhapatnam, I applied full-stack engineering principles by building an e-commerce web application with the <strong className="text-[#F6F3FA] font-medium">Django framework</strong> adhering to the Model-View-Template (MVT) architecture. This hands-on experience sharpened my understanding of backend business logic, database queries, responsive web templates with HTML5, CSS3, and Bootstrap, and collaborative agile workflows.
            </p>

            <p>
              My technical interests encompass both relational database systems (<strong className="text-[#F6F3FA] font-medium">SQL & DBMS</strong>) and flexible document-oriented databases (<strong className="text-[#F6F3FA] font-medium">MongoDB</strong>), as demonstrated in my <strong className="text-[#F6F3FA] font-medium">Online Temple Information System</strong>. Grounded in core Computer Science fundamentals—Object-Oriented Programming (OOP) in Java, and Python algorithmic computing—I take pride in writing structured, maintainable code.
            </p>

            {/* Academic & Professional Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F6F3FA]">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#101019] border border-[#B79AFF]/15">
                <CheckCircle2 className="w-4 h-4 text-[#B79AFF] shrink-0" />
                <span>IIT Kharagpur NPTEL Silver Elite (77%)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#101019] border border-[#B79AFF]/15">
                <CheckCircle2 className="w-4 h-4 text-[#B79AFF] shrink-0" />
                <span>Django MVT Web Application Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#101019] border border-[#B79AFF]/15">
                <CheckCircle2 className="w-4 h-4 text-[#B79AFF] shrink-0" />
                <span>Intermediate Board Score: 9.67 / 10 CGPA</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#101019] border border-[#B79AFF]/15">
                <CheckCircle2 className="w-4 h-4 text-[#B79AFF] shrink-0" />
                <span>Database Design: Relational SQL & MongoDB</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Three Focused Pillars */}
          <StaggerContainer className="lg:col-span-5 space-y-4" staggerDelay={0.12}>
            <StaggerItem>
              <div className="p-5 rounded-2xl bg-[#0D0D15] border border-[#B79AFF]/15 glow-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#151520] border border-[#B79AFF]/20 flex items-center justify-center text-[#B79AFF]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F6F3FA]">Full-Stack Web Engineering</h3>
                    <span className="text-[11px] text-[#777287]">Django · JavaScript · Bootstrap</span>
                  </div>
                </div>
                <p className="text-xs text-[#AAA5B8] leading-relaxed">
                  Hands-on development of dynamic multi-page web applications with structured backend routing, templating, and cross-device responsive UI.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-5 rounded-2xl bg-[#0D0D15] border border-[#B79AFF]/15 glow-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#151520] border border-[#B79AFF]/20 flex items-center justify-center text-[#B79AFF]">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F6F3FA]">Database & Query Management</h3>
                    <span className="text-[11px] text-[#777287]">SQL · MongoDB · DBMS</span>
                  </div>
                </div>
                <p className="text-xs text-[#AAA5B8] leading-relaxed">
                  Design and query optimization across relational databases and document collections, emphasizing data integrity and retrieval efficiency.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-5 rounded-2xl bg-[#0D0D15] border border-[#B79AFF]/15 glow-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#151520] border border-[#B79AFF]/20 flex items-center justify-center text-[#B79AFF]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F6F3FA]">CS Core Principles & OOP</h3>
                    <span className="text-[11px] text-[#777287]">Java · Python · DSA Foundations</span>
                  </div>
                </div>
                <p className="text-xs text-[#AAA5B8] leading-relaxed">
                  Rigorous grounding in Object-Oriented design patterns, algorithmic data structures, and computational problem-solving.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
