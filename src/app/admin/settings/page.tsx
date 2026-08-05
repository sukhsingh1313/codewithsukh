'use client';

import React from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { THEMES, Theme, ColorTheme, TypographyStyle } from '@/lib/themes';
import { Palette, Type, Check, Sparkles, Layout, Monitor, ShieldCheck } from 'lucide-react';

export default function ThemeSettingsPage() {
  const { colorTheme, typographyStyle, setColorTheme, setTypographyStyle, availableThemes } = useTheme();

  const fontOptions: { id: TypographyStyle; name: string; tag: string; fontClass: string; sample: string }[] = [
    {
      id: 'modern-sans',
      name: 'Inter Modern Sans',
      tag: 'Sans-Serif',
      fontClass: 'font-sans',
      sample: 'The quick brown fox jumps over the lazy dog',
    },
    {
      id: 'tech-mono',
      name: 'Fira Tech Mono',
      tag: 'Monospace',
      fontClass: 'font-mono',
      sample: 'const engine = new CodeWithSukhTheme();',
    },
    {
      id: 'elegant-serif',
      name: 'Georgia Serif',
      tag: 'Serif',
      fontClass: 'font-serif',
      sample: 'Architecting Scalable SaaS & Production Web Applications',
    },
  ];

  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-12">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-theme">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-theme mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Linear/Raycast Design System</span>
          </div>
          <h1 className="text-3xl font-extrabold text-theme-main tracking-tight flex items-center gap-3">
            Theme & Appearance Engine
          </h1>
          <p className="text-sm text-theme-muted mt-1.5 max-w-2xl leading-relaxed">
            Customize real-time color variables, UI surfaces, typography presets, and dark/light modes. Changes apply instantly across all public and admin routes.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-card border border-theme text-xs text-theme-muted shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Dynamic CSS Variables Active</span>
        </div>
      </div>

      {/* Section 1: Color Themes Grid */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-base font-bold text-theme-main">
            <div className="p-2 rounded-xl bg-accent-theme/10 text-accent-theme">
              <Palette className="w-4 h-4" />
            </div>
            <span>Select Active Color Palette</span>
          </div>
          <span className="text-xs text-theme-muted font-mono">{availableThemes.length} Themes Available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {availableThemes.map((t) => {
            const isActive = colorTheme === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setColorTheme(t.id as ColorTheme)}
                className={`relative group w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer backdrop-blur-xl flex flex-col justify-between space-y-4 ${
                  isActive
                    ? 'ring-2 ring-offset-2 ring-offset-slate-950 ring-accent-theme border-accent-theme bg-theme-card shadow-2xl shadow-accent-theme/10 scale-[1.01]'
                    : 'border-theme bg-theme-card/60 hover:border-accent-theme/50 hover:bg-theme-card/80'
                }`}
              >
                {/* Active Selection Badge */}
                {isActive && (
                  <div className="absolute top-4 right-4 z-10 w-6 h-6 rounded-full bg-accent-theme text-slate-950 flex items-center justify-center font-bold shadow-lg">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}

                {/* Live UI Preview Widget inside the card */}
                <div
                  className="w-full h-32 rounded-xl p-2.5 border border-white/10 flex flex-col justify-between overflow-hidden shadow-inner relative group-hover:scale-[1.01] transition-transform"
                  style={{ backgroundColor: t.variables['--bg-primary'] }}
                >
                  {/* Mini Nav Header */}
                  <div
                    className="w-full h-5 rounded-md flex items-center justify-between px-2 text-[9px] font-bold border border-white/10"
                    style={{ backgroundColor: t.variables['--card-bg'], color: t.variables['--text-primary'] }}
                  >
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.variables['--accent-primary'] }} />
                      <span>{t.name}</span>
                    </div>
                    <span className="text-[8px] opacity-60 uppercase">{t.mode}</span>
                  </div>

                  {/* Mini Body Content */}
                  <div className="flex gap-2 h-18">
                    {/* Mini Sidebar */}
                    <div
                      className="w-1/4 rounded-md p-1 flex flex-col gap-1 border border-white/5"
                      style={{ backgroundColor: t.variables['--bg-secondary'] }}
                    >
                      <div className="w-full h-1.5 rounded" style={{ backgroundColor: t.variables['--accent-primary'], opacity: 0.8 }} />
                      <div className="w-3/4 h-1 rounded" style={{ backgroundColor: t.variables['--text-muted'], opacity: 0.3 }} />
                      <div className="w-1/2 h-1 rounded" style={{ backgroundColor: t.variables['--text-muted'], opacity: 0.3 }} />
                    </div>

                    {/* Mini Dashboard Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div
                        className="w-full h-8 rounded-md p-1.5 flex items-center justify-between border border-white/10"
                        style={{ backgroundColor: t.variables['--card-bg'] }}
                      >
                        <div className="space-y-0.5">
                          <div className="w-10 h-1.5 rounded" style={{ backgroundColor: t.variables['--text-primary'] }} />
                          <div className="w-6 h-1 rounded" style={{ backgroundColor: t.variables['--text-muted'], opacity: 0.5 }} />
                        </div>
                        <div
                          className="w-4 h-4 rounded-md flex items-center justify-center font-bold text-[8px]"
                          style={{ backgroundColor: t.variables['--accent-primary'], color: t.variables['--bg-primary'] }}
                        >
                          ✓
                        </div>
                      </div>

                      {/* Mini Action Button */}
                      <div
                        className="w-full h-4 rounded-md flex items-center justify-center text-[8px] font-bold shadow-sm"
                        style={{ backgroundColor: t.variables['--accent-primary'], color: t.variables['--bg-primary'] }}
                      >
                        Launch Course
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metadata Description */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-theme-main group-hover:text-accent-theme transition-colors">
                      {t.name}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-theme-secondary text-theme-muted font-mono uppercase border border-theme">
                      {t.mode}
                    </span>
                  </div>
                  <p className="text-xs text-theme-muted mt-1.5 line-clamp-2 leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Typography Style Selector */}
      <div className="space-y-5 pt-8 border-t border-theme">
        <div className="flex items-center gap-2.5 text-base font-bold text-theme-main">
          <div className="p-2 rounded-xl bg-accent-theme/10 text-accent-theme">
            <Type className="w-4 h-4" />
          </div>
          <span>Select Active Typography Preset</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fontOptions.map((f) => {
            const isSelected = typographyStyle === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setTypographyStyle(f.id)}
                className={`p-5 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all cursor-pointer backdrop-blur-xl ${
                  isSelected
                    ? 'ring-2 ring-accent-theme border-accent-theme bg-theme-card shadow-lg'
                    : 'border-theme bg-theme-card/60 hover:border-accent-theme/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-theme-main">{f.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-theme-secondary text-theme-muted font-mono">
                    {f.tag}
                  </span>
                </div>

                <p className={`text-xs text-theme-muted leading-relaxed italic ${f.fontClass}`}>
                  "{f.sample}"
                </p>

                {isSelected && (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-accent-theme pt-2 border-t border-theme">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Active Font</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
