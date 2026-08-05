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
      className={`relative group w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
        isActive
          ? 'ring-2 ring-offset-2 ring-offset-slate-950 ring-[var(--accent-primary)] border-[var(--accent-primary)] bg-[var(--card-bg)] shadow-lg'
          : 'border-[var(--border-color)] bg-[var(--card-bg)]/50 hover:border-[var(--accent-primary)]/50'
      }`}
    >
      {/* Active Indicator Badge */}
      {isActive && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[var(--accent-primary)] text-slate-950 flex items-center justify-center font-bold shadow-md">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      )}

      {/* Theme Color Palette Preview Bar */}
      <div 
        className="w-full h-16 rounded-xl p-2 flex gap-1.5 mb-3 border border-white/10 shadow-inner" 
        style={{ backgroundColor: theme.preview.bg }}
      >
        <div 
          className="flex-1 rounded-lg border border-white/10 flex items-center justify-center" 
          style={{ backgroundColor: theme.preview.card }}
        >
          <div 
            className="w-4 h-4 rounded-full shadow-sm" 
            style={{ backgroundColor: theme.preview.accent }} 
          />
        </div>
        <div 
          className="w-8 rounded-lg flex items-center justify-center font-bold text-xs" 
          style={{ backgroundColor: theme.preview.card, color: theme.preview.text }}
        >
          Aa
        </div>
      </div>

      {/* Theme Metadata */}
      <div>
        <h3 className="font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2">
          {theme.name}
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono uppercase">
            {theme.mode}
          </span>
        </h3>
        <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2 leading-relaxed">
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
