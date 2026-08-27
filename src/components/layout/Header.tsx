'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Shield, ArrowRight } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-theme bg-theme-main/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative flex h-10 w-10 overflow-hidden rounded-xl border border-accent-theme/30 shadow-lg group-hover:border-accent-theme/50 transition-all">
            <Image
              src="/logo.png"
              alt="CodeWithSukh Logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-theme-main">
            Code<span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">WithSukh</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-theme bg-theme-card/60 px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-theme-muted transition-colors hover:text-accent-theme hover:bg-theme-card rounded-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Admin Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-theme-card px-4 py-2 text-xs font-semibold text-theme-main border border-theme hover:border-accent-theme/50 hover:text-accent-theme transition-all duration-200 shadow-sm"
          >
            <Shield className="h-4 w-4 text-accent-theme" />
            <span>Admin Panel</span>
          </Link>

          {/* Hamburger Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-xl border border-theme bg-theme-card text-theme-muted hover:text-theme-main focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-accent-theme" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-theme bg-theme-main/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-theme-muted hover:text-accent-theme hover:bg-theme-card rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="h-4 w-4 text-theme-muted" />
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-theme">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition-all hover:opacity-95"
            >
              <Shield className="h-4 w-4" />
              <span>Admin Panel</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
