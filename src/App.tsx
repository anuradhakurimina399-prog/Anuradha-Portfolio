import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeyMetricsStrip } from './components/KeyMetricsStrip';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { AchievementsCertificationsSection } from './components/AchievementsCertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08080D] text-[#F6F3FA] flex flex-col selection:bg-[#B79AFF]/30 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <KeyMetricsStrip />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsCertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
