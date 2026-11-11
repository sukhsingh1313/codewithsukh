'use client';

import { MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/siteData';

export function WhatsAppFloatingButton() {
  return (
    <aside aria-label="WhatsApp Contact Button" className="fixed bottom-6 right-6 z-40 group flex items-center">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-slate-800 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-md">
        Chat with Sukhchain
      </span>

      {/* Floating Action Button */}
      <a
        href={contactInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="relative flex items-center justify-center h-13 w-13 p-3.5 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25 hover:scale-108 hover:shadow-emerald-500/40 transition-all duration-300"
      >
        {/* Pulsing halo */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="h-6 w-6 stroke-[2.2] relative z-10" />
      </a>
    </aside>
  );
}

