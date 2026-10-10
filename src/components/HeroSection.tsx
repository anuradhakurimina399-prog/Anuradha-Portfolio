import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
ArrowDown,
FileText,
Mail,
MapPin,
ExternalLink,
Award,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface HeroSectionProps {
onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
onOpenResume,
}) => {
const shouldReduceMotion = useReducedMotion();

return ( <section
   id="about"
   className="relative overflow-hidden bg-radial-lavender pt-32 pb-16 md:pt-40 md:pb-24"
 >
{/* Decorative ambient gradient backdrop */} <div
     aria-hidden="true"
     className="pointer-events-none absolute left-1/2 top-1/4 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#B79AFF]/5 blur-[120px]"
   />

```
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-10 top-10 h-[300px] w-[400px] rounded-full bg-[#E0B7D9]/5 blur-[100px]"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

      {/* LEFT COLUMN: PROFESSIONAL INTRODUCTION */}
      <motion.div
        initial={
          shouldReduceMotion ? false : { opacity: 0, y: 24 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="space-y-6 lg:col-span-7"
      >
        {/* Academic information */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wide text-[#AAA5B8]">
          <span className="font-semibold text-[#B79AFF]">
            {portfolioData.profile.academicStanding}
          </span>

          <span aria-hidden="true" className="text-[#777287]">
            ·
          </span>

          <span>{portfolioData.profile.institution}</span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#F6F3FA] sm:text-4xl lg:text-5xl">
          Building scalable web applications through{' '}
          <span className="bg-gradient-to-r from-[#B79AFF] via-[#E0B7D9] to-[#A9B7FF] bg-clip-text text-transparent">
            clean architecture
          </span>{' '}
          and robust databases.
        </h1>

        {/* Professional summary */}
        <p className="max-w-2xl text-base font-normal leading-relaxed text-[#AAA5B8] sm:text-lg">
          Hi, I’m{' '}
          <strong className="font-medium text-[#F6F3FA]">
            {portfolioData.profile.fullName}
          </strong>
          . {portfolioData.profile.summary}
        </p>

        {/* Contact information */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-1 text-xs text-[#AAA5B8]">

          <span className="inline-flex items-center gap-1.5 text-[#F6F3FA]">
            <MapPin
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-[#B79AFF]"
            />
            {portfolioData.profile.location}
          </span>

          <span aria-hidden="true" className="text-[#777287]">
            ·
          </span>

          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#B79AFF]"
          >
            <Mail
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-[#B79AFF]"
            />
            {portfolioData.profile.email}
          </a>

          <span aria-hidden="true" className="text-[#777287]">
            ·
          </span>

          <a
            href={portfolioData.profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-[#B79AFF]"
          >
            LinkedIn Profile
            <ExternalLink
              aria-hidden="true"
              className="h-3 w-3 shrink-0 text-[#B79AFF]"
            />
          </a>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3">

          <a
            href="#projects"
            className="cursor-pointer rounded-lg bg-[#B79AFF] px-5 py-3 text-sm font-semibold text-[#08080D] shadow-md shadow-[#B79AFF]/20 transition-all hover:bg-[#C9B3FF] active:scale-95"
          >
            Explore Projects
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#B79AFF]/25 bg-[#151520] px-4 py-3 text-sm font-medium text-[#F6F3FA] transition-all hover:border-[#B79AFF]/50 hover:bg-[#1C1C2B]"
          >
            <FileText
              aria-hidden="true"
              className="h-4 w-4 text-[#B79AFF]"
            />
            Inspect Resume
          </button>

          <a
            href="#contact"
            className="rounded-lg px-4 py-3 text-sm font-medium text-[#AAA5B8] transition-colors hover:border hover:border-[#B79AFF]/20 hover:bg-[#101019] hover:text-[#F6F3FA]"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: ACTUAL PROFILE PHOTOGRAPH */}
      <motion.div
        initial={
          shouldReduceMotion ? false : { opacity: 0, y: 32 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.7,
          delay: shouldReduceMotion ? 0 : 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex justify-center lg:col-span-5"
      >
        <div className="group relative w-full max-w-sm sm:max-w-md">

          {/* Ambient lavender glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#B79AFF]/30 via-[#E0B7D9]/20 to-[#A9B7FF]/30 opacity-75 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Portrait card */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#B79AFF]/30 bg-[#0D0D15] shadow-2xl shadow-black/90">

            {/* Card header */}
            <div className="flex items-center justify-between gap-3 border-b border-[#B79AFF]/15 bg-[#101019]/90 px-4 py-3 font-mono text-xs">

              <div className="flex min-w-0 items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#B79AFF]/60"
                />

                <span className="truncate font-medium text-[#F6F3FA]">
                  {portfolioData.profile.fullName}
                </span>
              </div>

              <span className="shrink-0 text-[#AAA5B8]">
                CSE Undergraduate
              </span>
            </div>

            {/* Image viewport */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#141424] via-[#0E0E18] to-[#08080D]">

              {/* Actual JPEG image */}
              
            <img
              src="/images/image1.jpeg"
              alt="Kurimina Anuradha"
              className="absolute inset-0 z-10 h-full w-full object-cover object-top"
              onLoad={() => console.log("Profile photo loaded successfully")}
              onError={(event) => {
                console.error("Failed to load profile photo:", event.currentTarget.src);
              }}
            />

              {/* Fallback background if the image is missing */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-0 bg-gradient-to-b from-[#141424] via-[#0E0E18] to-[#08080D]"
              />

              {/* Bottom gradient overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end space-y-1 bg-gradient-to-t from-[#08080D] via-[#08080D]/90 to-transparent p-4 pt-20">

                <div className="flex items-center justify-between gap-2">

                  <h2 className="text-base font-bold text-[#F6F3FA]">
                    {portfolioData.profile.fullName}
                  </h2>

                  <span className="shrink-0 rounded border border-[#B79AFF]/20 bg-[#151520] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#B79AFF]">
                    B.Tech · 2023–27
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-[#AAA5B8]">
                  Computer Science &amp; Engineering · GMRIT Rajam
                </p>
              </div>
            </div>

            {/* Academic credentials strip */}
            <div className="flex items-center justify-between gap-3 border-t border-[#B79AFF]/15 bg-[#101019] px-4 py-3 font-mono text-[11px] text-[#AAA5B8]">

              <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[#F6F3FA]">
                <Award
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-[#B79AFF]"
                />
                CGPA: 8.8 / 10
              </span>

              <span className="text-right text-[#E0B7D9]">
                NPTEL 77% Silver Elite
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Scroll prompt */}
    <div className="flex justify-center pt-10">
      <a
        href="#metrics"
        className="flex items-center gap-2 text-xs text-[#777287] transition-colors hover:text-[#B79AFF]"
      >
        <span>
          Scroll to explore credentials &amp; engineering portfolio
        </span>

        <ArrowDown
          aria-hidden="true"
          className="h-3.5 w-3.5 animate-bounce text-[#B79AFF]"
        />
      </a>
    </div>
  </div>
</section>

);
};

export default HeroSection;
