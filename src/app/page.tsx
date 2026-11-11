import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import {
  PROJECTS_DATA,
  techStack,
  services,
  contactInfo,
  socialLinks,
  developerProfile,
} from '@/data/siteData';
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Terminal,
  Code2,
  Smartphone,
  GraduationCap,
  Check,
} from 'lucide-react';

const serviceIcons = [Code2, Smartphone, GraduationCap];

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-mono selection:bg-[#00F0FF] selection:text-[#0A0A0A]">
      {/* Responsive Navbar */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO                                                          */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#27272A] bg-[#141414] text-xs text-[#00F0FF]">
            <Terminal className="h-3.5 w-3.5" />
            <span>sys.ready: Full-Stack Engineer & Educator</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#EDEDED]">
              {developerProfile.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#00F0FF] font-semibold">
              {developerProfile.title}
            </p>
          </div>

          {/* Clean 2-line bio */}
          <div className="max-w-2xl text-sm sm:text-base text-[#A1A1AA] leading-relaxed space-y-1 font-sans">
            <p>
              Engineering scalable web ecosystems, high-throughput APIs, and responsive cross-platform mobile apps.
            </p>
            <p>
              Committed to developer education, clean system architecture, and mentoring the next generation of engineers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00F0FF] text-[#0A0A0A] font-bold text-xs hover:bg-[#00F0FF]/90 transition-all shadow-lg shadow-[#00F0FF]/10"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#141414] border border-[#27272A] text-[#EDEDED] font-semibold text-xs hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#141414] border border-[#27272A] text-[#A1A1AA] hover:text-[#EDEDED] hover:border-[#EDEDED]/40 transition-all text-xs"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: TECH STACK                                                    */}
        {/* ========================================================================= */}
        <section id="tech" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#00F0FF] font-semibold">// 01</span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#EDEDED]">Tech Stack</h2>
            <div className="h-px bg-[#27272A] flex-1" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="group flex items-center justify-between p-3.5 rounded-lg bg-[#141414] border border-[#27272A] hover:border-[#00F0FF]/80 transition-all duration-200"
              >
                <span className="text-xs sm:text-sm font-medium text-[#EDEDED] group-hover:text-[#00F0FF] transition-colors">
                  {tech}
                </span>
                <span className="text-[10px] text-[#71717A] font-mono group-hover:text-[#00F0FF]/70">
                  ready
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: PROJECTS GRID                                                 */}
        {/* ========================================================================= */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#00F0FF] font-semibold">// 02</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#EDEDED]">Featured Projects</h2>
            </div>
            <span className="text-xs text-[#71717A]">[{PROJECTS_DATA.length} repositories]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between p-6 rounded-xl bg-[#141414] border border-[#27272A] hover:border-[#00F0FF]/70 transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#00F0FF] font-mono">{project.category}</span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                        featured
                      </span>
                    )}
                  </div>

                  {/* Project Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-[#EDEDED] group-hover:text-[#00F0FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#71717A] mt-0.5">{project.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#0A0A0A] border border-[#27272A] text-[11px] text-[#EDEDED]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live / Demo & GitHub links */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#27272A] text-xs">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#00F0FF] hover:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#A1A1AA] hover:text-[#EDEDED] transition-colors ml-auto"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: SERVICES (3-Column Minimal Cards)                              */}
        {/* ========================================================================= */}
        <section id="services" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#00F0FF] font-semibold">// 03</span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#EDEDED]">Services</h2>
            <div className="h-px bg-[#27272A] flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] || Code2;
              return (
                <div
                  key={service.id}
                  className="flex flex-col justify-between p-6 rounded-xl bg-[#141414] border border-[#27272A] hover:border-[#00F0FF]/60 transition-all duration-200"
                >
                  <div className="space-y-4">
                    {/* Index & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded bg-[#0A0A0A] border border-[#27272A] text-[#00F0FF]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono text-[#71717A]">0{index + 1}</span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#EDEDED]">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#71717A] mt-1">{service.tagline}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2 pt-2 border-t border-[#27272A]/80">
                      <span className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider">
                        Deliverables
                      </span>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-[#EDEDED] font-sans"
                          >
                            <Check className="h-3.5 w-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Direct WhatsApp Trigger */}
                  <div className="pt-6 mt-6 border-t border-[#27272A]">
                    <a
                      href={contactInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded bg-[#0A0A0A] border border-[#27272A] text-xs font-medium text-[#EDEDED] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CONTACT & FOOTER                                              */}
        {/* ========================================================================= */}
        <section id="contact" className="space-y-6 pt-6">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#00F0FF] font-semibold">// 04</span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#EDEDED]">Initiate Contact</h2>
            <div className="h-px bg-[#27272A] flex-1" />
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-[#141414] border border-[#27272A] space-y-6">
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-[#EDEDED] font-semibold">
                Available for freelance contracts, full-stack projects, and technical mentorship.
              </p>
              <p className="text-xs sm:text-sm text-[#71717A] font-sans">
                Typical response time: {contactInfo.responseTime} • Location: {contactInfo.location}
              </p>
            </div>

            {/* Contact Trigger Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {/* WhatsApp */}
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0A0A] border border-[#27272A] hover:border-[#00F0FF] text-[#EDEDED] hover:text-[#00F0FF] transition-all"
              >
                <MessageCircle className="h-4 w-4 text-[#00F0FF]" />
                <div className="overflow-hidden">
                  <div className="text-[10px] text-[#71717A]">WhatsApp</div>
                  <div className="truncate font-semibold">{contactInfo.whatsappNumber}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0A0A] border border-[#27272A] hover:border-[#00F0FF] text-[#EDEDED] hover:text-[#00F0FF] transition-all"
              >
                <Mail className="h-4 w-4 text-[#00F0FF]" />
                <div className="overflow-hidden">
                  <div className="text-[10px] text-[#71717A]">Direct Email</div>
                  <div className="truncate font-semibold">{contactInfo.email}</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0A0A] border border-[#27272A] hover:border-[#00F0FF] text-[#EDEDED] hover:text-[#00F0FF] transition-all"
              >
                <Github className="h-4 w-4 text-[#00F0FF]" />
                <div className="overflow-hidden">
                  <div className="text-[10px] text-[#71717A]">GitHub</div>
                  <div className="truncate font-semibold">@sukhsingh1313</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0A0A] border border-[#27272A] hover:border-[#00F0FF] text-[#EDEDED] hover:text-[#00F0FF] transition-all"
              >
                <Linkedin className="h-4 w-4 text-[#00F0FF]" />
                <div className="overflow-hidden">
                  <div className="text-[10px] text-[#71717A]">LinkedIn</div>
                  <div className="truncate font-semibold">Sukhchain Singh</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-[#27272A] bg-[#0A0A0A] py-8 text-xs text-[#71717A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {developerProfile.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#00F0FF]">status: available</span>
            <span>•</span>
            <span>{developerProfile.brandName}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
