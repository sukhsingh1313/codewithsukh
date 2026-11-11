'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/siteData';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: '// projects', href: '#projects' },
    { label: '// services', href: '#services' },
    { label: '// contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#27272A] bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with Pulsing Green Indicator Dot */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-[#EDEDED] group-hover:text-[#00F0FF] transition-colors">
            CodeWithSukh
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-[#A1A1AA] hover:text-[#00F0FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Direct WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#00F0FF] text-[#0A0A0A] font-mono font-bold text-xs hover:bg-[#00F0FF]/90 transition-all shadow-md shadow-[#00F0FF]/10"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-[#27272A] bg-[#141414] text-[#A1A1AA] hover:text-[#00F0FF] hover:border-[#00F0FF]/60 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-[#27272A] bg-[#0A0A0A] px-4 pt-3 pb-5 space-y-3 font-mono">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-xs text-[#A1A1AA] hover:text-[#00F0FF] hover:bg-[#141414] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#27272A]/70">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#00F0FF] text-[#0A0A0A] font-bold text-xs hover:bg-[#00F0FF]/90 transition-all shadow-md shadow-[#00F0FF]/10"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

