'use client';

import React from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { THEMES, Theme, ColorTheme } from '@/lib/themes';
import { Check } from 'lucide-react';

interface ThemeCardProps {
  theme: Theme;
}

export function ThemeCard({ theme }: ThemeCardProps) {
  const { colorTheme, setColorTheme } = useTheme();
  const isActive = colorTheme === theme.id;

  const handleSelectTheme = () => {
    setColorTheme(theme.id as ColorTheme);
  };

  return (
    <button
      type="button"
      onClick={handleSelectTheme}
      className={`relative group w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
        isActive
          ? 'ring-2 ring-offset-2 ring-offset-slate-950 ring-cyan-500 border-cyan-500/50 bg-slate-900/80 shadow-lg shadow-cyan-500/10'
          : 'border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/60'
      }`}
    >
      {/* Active Indicator Badge */}
      {isActive && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      )}

      {/* Theme Color Palette Preview Bar */}
      <div className="w-full h-16 rounded-lg p-2 flex gap-1.5 mb-3 border border-white/10 shadow-inner" style={{ backgroundColor: theme.preview.bg }}>
        <div className="flex-1 rounded-md border border-white/10 flex items-center justify-center" style={{ backgroundColor: theme.preview.card }}>
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.preview.accent }} />
        </div>
        <div className="w-6 rounded-md flex items-center justify-center font-bold text-xs" style={{ backgroundColor: theme.preview.card, color: theme.preview.text }}>
          Aa
        </div>
      </div>

      {/* Theme Title & Metadata */}
      <div>
        <h3 className="font-semibold text-base text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
          {theme.name}
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono uppercase">
            {theme.mode}
          </span>
        </h3>
        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          {theme.description}
        </p>
      </div>
    </button>
  );
}

export function ThemeSelectorGrid() {
  const { availableThemes } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {availableThemes.map((t) => (
        <ThemeCard key={t.id} theme={t} />
      ))}
    </div>
  );
}
