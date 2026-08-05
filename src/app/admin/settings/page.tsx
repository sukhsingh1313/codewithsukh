'use client';

import { useTheme, type ColorTheme, type TypographyStyle } from '@/components/providers/ThemeProvider';
import { Palette, Type, Check, Sliders } from 'lucide-react';

export default function AdminSettingsPage() {
  const { colorTheme, typographyStyle, setColorTheme, setTypographyStyle } = useTheme();

  const colorThemes: { id: ColorTheme; name: string; desc: string; colors: string[] }[] = [
    {
      id: 'cyber-neon',
      name: 'Cyber Neon (Default)',
      desc: 'Dark theme with vibrant cyan, sky blue, and indigo accents.',
      colors: ['bg-cyan-500', 'bg-sky-400', 'bg-indigo-600'],
    },
    {
      id: 'emerald-pro',
      name: 'Emerald Pro',
      desc: 'Deep dark teal theme with rich emerald green accents.',
      colors: ['bg-emerald-500', 'bg-teal-400', 'bg-emerald-700'],
    },
    {
      id: 'violet-royale',
      name: 'Violet Royale',
      desc: 'Rich dark theme with deep purple and violet glowing accents.',
      colors: ['bg-purple-600', 'bg-violet-500', 'bg-indigo-500'],
    },
    {
      id: 'sunset-blaze',
      name: 'Sunset Blaze',
      desc: 'High contrast dark theme with warm rose and orange gradients.',
      colors: ['bg-rose-500', 'bg-orange-500', 'bg-amber-600'],
    },
    {
      id: 'minimal-light',
      name: 'Minimal Light',
      desc: 'Clean, modern light mode aesthetic with crisp slate borders.',
      colors: ['bg-blue-600', 'bg-sky-500', 'bg-slate-300'],
    },
  ];

  const typographyOptions: { id: TypographyStyle; name: string; sample: string }[] = [
    {
      id: 'modern-sans',
      name: 'Modern Sans (Inter)',
      sample: 'The quick brown fox jumps over the lazy dog.',
    },
    {
      id: 'tech-mono',
      name: 'Tech Mono (Monospace)',
      sample: 'const code = "CodeWithSukh - Next.js & Supabase";',
    },
    {
      id: 'elegant-serif',
      name: 'Elegant Serif (Serif Accent)',
      sample: 'Master Full-Stack Web Development with Real Projects.',
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto font-sans">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <h1 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
          <Sliders className="h-6 w-6 text-cyan-400" />
          <span>Theme & Typography Customization Engine</span>
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Instantly customize website color palettes and font typography presets across public and admin interfaces.
        </p>
      </div>

      {/* Section 1: Color Themes */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Palette className="h-4 w-4 text-cyan-400" />
          <span>Select Active Color Palette</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorThemes.map((theme) => {
            const isSelected = colorTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setColorTheme(theme.id)}
                className={`p-5 rounded-2xl border text-left flex flex-col justify-between space-y-4 backdrop-blur-xl transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-950/30 ring-2 ring-cyan-500 scale-[1.02]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{theme.name}</span>
                    {isSelected && (
                      <span className="p-1 rounded-full bg-cyan-500 text-slate-950">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{theme.desc}</p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
                  {theme.colors.map((c, idx) => (
                    <span key={idx} className={`h-4 w-6 rounded-md ${c} shadow-sm`} />
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Typography Presets */}
      <div className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Type className="h-4 w-4 text-indigo-400" />
          <span>Select Active Typography Style</span>
        </div>

        <div className="space-y-3 max-w-3xl">
          {typographyOptions.map((font) => {
            const isSelected = typographyStyle === font.id;
            return (
              <button
                key={font.id}
                onClick={() => setTypographyStyle(font.id)}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-4 backdrop-blur-xl transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-lg ring-2 ring-indigo-500'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">{font.name}</div>
                  <div className="text-xs text-slate-400 italic">{font.sample}</div>
                </div>

                {isSelected && (
                  <span className="p-1.5 rounded-full bg-indigo-600 text-white shrink-0">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
