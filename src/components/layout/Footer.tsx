import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const techBadges = [
    'C / C++',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Next.js',
    'Django',
    'FastAPI',
    'Spring Boot',
    'Data Analysis',
    'Prompt Engineering',
    'DSA',
    'Computer Networking',
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand Intro & Social Links */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 overflow-hidden rounded-xl border border-cyan-500/30 shadow-md">
                <Image
                  src="/logo.png"
                  alt="CodeWithSukh Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Code<span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">WithSukh</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack Engineering platform by <strong>Sukhchain Singh</strong>. Specializing in C/C++, Python, JS/TS, React, React Native, Next.js, Django, FastAPI, Spring Boot, Data Analysis, Prompt Concepts, DSA, and Networking.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/sukhsingh1313"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-cyan-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About Sukhchain
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Legal & Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-cyan-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-cyan-400 transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Expertise Badges Bar */}
        <div className="pt-8 border-t border-slate-800/80 space-y-3">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Technical Competencies & Expertise
          </div>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} CodeWithSukh. Built with Next.js, React & Tailwind.</p>
          <div className="flex items-center gap-1">
            <span>Sukhchain Singh • Full-Stack Software Engineer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
