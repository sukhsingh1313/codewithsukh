'use client';

import React from 'react';
import { useTheme, ThemeMode } from '@/components/providers/ThemeProvider';
import { Monitor, Moon, Sun, Check } from 'lucide-react';

export function ThemeSelectorGrid() {
  const { mode, themePreference, setThemePreference } = useTheme();

  const options: { id: ThemeMode; name: string; desc: string; icon: any }[] = [
    {
      id: 'system',
      name: 'System Default',
      desc: 'Automatic Dark/Light mode matching OS prefers-color-scheme setting.',
      icon: Monitor,
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      desc: 'Default sleek dark mode for developer portfolio.',
      icon: Moon,
    },
    {
      id: 'light',
      name: 'Light Mode',
      desc: 'Clean light mode for daylight reading.',
      icon: Sun,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {options.map((opt) => {
        const Icon = opt.icon;
        const isSelected = themePreference === opt.id;

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setThemePreference(opt.id)}
            className={`p-5 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all cursor-pointer ${
              isSelected
                ? 'bg-slate-900 border-cyan-500 ring-2 ring-cyan-500/50 shadow-lg'
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                <Icon className="w-5 h-5" />
              </div>
              {isSelected && <Check className="w-4 h-4 text-cyan-400 stroke-[3]" />}
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">{opt.name}</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{opt.desc}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
