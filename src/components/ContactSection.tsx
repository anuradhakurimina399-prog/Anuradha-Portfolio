import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, ExternalLink, Copy, Check, Send, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setError(null);
    setSubmitted(true);

    // Provide working mailto fallback trigger
    const mailtoLink = `mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#08080D] relative border-t border-[#B79AFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B79AFF] mb-2">
            07. Connect & Inquire
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F6F3FA] tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-[#AAA5B8] leading-relaxed">
            Interested in discussing internship opportunities, engineering collaborations, or software projects? Feel free to reach out directly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Communication Channels */}
          <StaggerContainer className="lg:col-span-5 space-y-4" staggerDelay={0.1}>
            {/* Email Card with Copy Affordance */}
            <StaggerItem yOffset={20}>
              <div className="p-5 rounded-2xl bg-[#0D0D15] border border-[#B79AFF]/15 glow-card space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#777287] uppercase">Direct Email</span>
                  <button
                    onClick={() => handleCopy(portfolioData.profile.email, 'email')}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#AAA5B8] hover:text-[#B79AFF] px-2 py-0.5 rounded bg-[#151520] border border-[#B79AFF]/20 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedType === 'email' ? (
                      <>
                        <Check className="w-3 h-3 text-[#A9B7FF]" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="text-base font-semibold text-[#F6F3FA] hover:text-[#B79AFF] transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 text-[#B79AFF] group-hover:scale-110 transition-transform" />
                  <span className="break-all">{portfolioData.profile.email}</span>
                </a>
                <p className="text-xs text-[#AAA5B8]">
                  Best for formal recruitment and internship communications.
                </p>
              </div>
            </StaggerItem>

            {/* Phone Card with Copy Affordance */}
            <StaggerItem yOffset={20}>
              <div className="p-5 rounded-2xl bg-[#0D0D15] border border-[#B79AFF]/15 glow-card space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#777287] uppercase">Phone / Mobile</span>
                  <button
                    onClick={() => handleCopy(portfolioData.profile.phone, 'phone')}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#AAA5B8] hover:text-[#B79AFF] px-2 py-0.5 rounded bg-[#151520] border border-[#B79AFF]/20 transition-colors cursor-pointer"
                    title="Copy phone to clipboard"
                  >
                    {copiedType === 'phone' ? (
                      <>
                        <Check className="w-3 h-3 text-[#A9B7FF]" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${portfolioData.profile.phone}`}
                  className="text-base font-semibold text-[#F6F3FA] hover:text-[#B79AFF] transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 text-[#B79AFF] group-hover:scale-110 transition-transform" />
                  <span>{portfolioData.profile.phone}</span>
                </a>
                <p className="text-xs text-[#AAA5B8]">
                  Direct calling line for placement and technical inquiries.
                </p>
              </div>
            </StaggerItem>

            {/* Location & LinkedIn Card */}
            <StaggerItem yOffset={20}>
              <div className="p-5 rounded-2xl bg-[#0D0D15] border border-[#B79AFF]/15 glow-card space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#AAA5B8]">
                  <MapPin className="w-4 h-4 text-[#B79AFF]" />
                  <span>Location: {portfolioData.profile.location}</span>
                </div>
                <div className="pt-2 border-t border-[#B79AFF]/10">
                  <a
                    href={portfolioData.profile.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-between p-2.5 rounded-xl bg-[#151520] hover:bg-[#1a1a2b] border border-[#B79AFF]/20 text-xs font-medium text-[#F6F3FA] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-[#B79AFF]">in/</span>
                      <span>Kurimina Anuradha on LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B79AFF]" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Interactive Form with Direct Client-Side Delivery and Mailto Bridge */}
          <ScrollReveal delay={0.15} yOffset={28} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D15] border border-[#B79AFF]/20 shadow-xl shadow-black/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#F6F3FA]">Send a Direct Message</h3>
                  <p className="text-xs text-[#AAA5B8] mt-0.5">
                    Opens directly in your mail client with verified candidate destination.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#B79AFF]" />
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#101019] border border-[#B79AFF]/30 space-y-3 text-center animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#B79AFF]/20 text-[#B79AFF] mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#F6F3FA]">Message Prepared</h4>
                  <p className="text-xs text-[#AAA5B8] leading-relaxed max-w-md mx-auto">
                    Your message draft was passed to your default email client addressed to{' '}
                    <strong className="text-[#B79AFF]">{portfolioData.profile.email}</strong>. If your email client didn't open automatically, you can copy the address above.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs text-[#B79AFF] underline pt-2 hover:text-[#F6F3FA] cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-mono text-[#AAA5B8]">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Recruiters / Team Lead"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#101019] border border-[#B79AFF]/15 text-xs sm:text-sm text-[#F6F3FA] placeholder-[#777287] focus:outline-none focus:border-[#B79AFF] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-mono text-[#AAA5B8]">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#101019] border border-[#B79AFF]/15 text-xs sm:text-sm text-[#F6F3FA] placeholder-[#777287] focus:outline-none focus:border-[#B79AFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-[#AAA5B8]">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Opportunity / Placement Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#101019] border border-[#B79AFF]/15 text-xs sm:text-sm text-[#F6F3FA] placeholder-[#777287] focus:outline-none focus:border-[#B79AFF] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-mono text-[#AAA5B8]">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, job description, or message for Anuradha..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#101019] border border-[#B79AFF]/15 text-xs sm:text-sm text-[#F6F3FA] placeholder-[#777287] focus:outline-none focus:border-[#B79AFF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#08080D] bg-[#B79AFF] hover:bg-[#c9b3ff] active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-[#B79AFF]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Anuradha</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
