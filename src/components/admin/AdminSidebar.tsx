'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import {
  Code2,
  LayoutDashboard,
  BookOpen,
  Layers,
  Inbox,
  Sliders,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Manage Courses', href: '/admin/courses', icon: BookOpen },
    { name: 'Manage Projects', href: '/admin/projects', icon: Layers },
    { name: 'Contact Messages', href: '/admin/messages', icon: Inbox },
    { name: 'Theme & Settings', href: '/admin/settings', icon: Sliders },
  ];

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push('/');
      router.refresh();
    } catch {
      router.push('/');
    }
  };

  return (
    <>
      {/* Mobile Top Header Bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between bg-theme-secondary border-b border-theme px-4 py-3">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-theme text-slate-950">
            <Code2 className="h-5 w-5 stroke-[2.5]" />
          </div>
          <span className="text-sm font-bold text-theme-main">CodeWithSukh Admin</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl bg-theme-card border border-theme text-theme-muted hover:text-theme-main"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Overlay Backdrop for Mobile Drawer */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-theme-main/80 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Content Container */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-full w-64 bg-theme-secondary border-r border-theme flex flex-col justify-between p-5 transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-8">
          {/* Logo Header */}
          <div className="flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 overflow-hidden rounded-xl border border-accent-theme/30 shadow-md">
                <Image
                  src="/logo.png"
                  alt="CodeWithSukh Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-base font-bold text-theme-main block leading-none">CodeWithSukh</span>
                <span className="text-[10px] font-semibold text-accent-theme tracking-wider uppercase">Admin Portal</span>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-theme-muted px-3 pb-1">
              Management
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-accent-theme/10 border border-accent-theme/30 text-accent-theme shadow-md'
                      : 'text-theme-muted hover:text-theme-main hover:bg-theme-card'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-accent-theme' : 'text-theme-muted'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="space-y-3 pt-6 border-t border-theme">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-theme-muted hover:text-accent-theme hover:bg-theme-card transition-colors"
          >
            <span>View Public Site</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-all"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
