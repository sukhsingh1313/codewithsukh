'use client';

import React from 'react';
import { useTheme, ThemeMode } from '@/components/providers/ThemeProvider';
import { Monitor, Moon, Sun, Check, Sparkles } from 'lucide-react';

export default function SettingsPage() {
  const { mode, themePreference, setThemePreference } = useTheme();

  const options: { id: ThemeMode; name: string; desc: string; icon: any }[] = [
    {
      id: 'system',
      name: 'System Default',
      desc: 'Automatically sync theme with your operating system preference (prefers-color-scheme).',
      icon: Monitor,
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      desc: 'Sleek dark theme optimized for low-light environments and code reading.',
      icon: Moon,
    },
    {
      id: 'light',
      name: 'Light Mode',
      desc: 'Clean light interface designed for bright daylight clarity.',
      icon: Sun,
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="pb-6 border-b border-slate-800 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>System Appearance</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Theme & Display Preferences
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Choose your display mode preference. Selecting <strong>System Default</strong> automatically respects your OS dark/light mode settings.
        </p>
      </div>

      {/* Mode Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = themePreference === opt.id;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setThemePreference(opt.id)}
              className={`p-6 rounded-2xl border text-left flex flex-col justify-between space-y-4 transition-all cursor-pointer backdrop-blur-xl ${
                isSelected
                  ? 'bg-slate-900 border-cyan-500 ring-2 ring-cyan-500/50 shadow-xl shadow-cyan-950/20'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl border ${isSelected ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                {isSelected && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                    <Check className="w-3 h-3 stroke-[3]" /> Active
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{opt.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{opt.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Info Notice */}
      <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
        <span>Current Active Mode: <strong className="text-white uppercase">{mode}</strong></span>
        <span className="text-cyan-400 font-mono text-[11px]">System Preference Sync Ready</span>
      </div>
    </div>
  );
}
