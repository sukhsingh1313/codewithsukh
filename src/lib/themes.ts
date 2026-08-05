export type ColorTheme =
  | 'cyber-neon'
  | 'emerald-pro'
  | 'violet-royale'
  | 'sunset-blaze'
  | 'minimal-light'
  | 'midnight-oled'
  | 'corporate-navy';

export type TypographyStyle = 'modern-sans' | 'tech-mono' | 'elegant-serif' | 'sans' | 'mono' | 'serif';

export interface ThemeVariables {
  '--bg-primary': string;
  '--bg-secondary': string;
  '--card-bg': string;
  '--border-color': string;
  '--text-primary': string;
  '--text-muted': string;
  '--accent-primary': string;
  '--accent-secondary': string;
  '--primary-color': string;
  '--primary-hover': string;
}

export interface Theme {
  id: ColorTheme;
  name: string;
  description: string;
  mode: 'dark' | 'light';
  preview: {
    bg: string;
    card: string;
    accent: string;
    text: string;
  };
  variables: ThemeVariables;
}

export const THEMES: Record<ColorTheme, Theme> = {
  'cyber-neon': {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    description: 'Futuristic dark theme with neon cyan & purple accents',
    mode: 'dark',
    preview: {
      bg: '#030712',
      card: '#111827',
      accent: '#06b6d4',
      text: '#f9fafb',
    },
    variables: {
      '--bg-primary': '#030712',
      '--bg-secondary': '#0b1329',
      '--card-bg': '#111827',
      '--border-color': '#1f2937',
      '--text-primary': '#f9fafb',
      '--text-muted': '#9ca3af',
      '--accent-primary': '#06b6d4',
      '--accent-secondary': '#6366f1',
      '--primary-color': '#06b6d4',
      '--primary-hover': '#0891b2',
    },
  },
  'emerald-pro': {
    id: 'emerald-pro',
    name: 'Emerald Pro',
    description: 'Deep forest emerald tones for focused coding sessions',
    mode: 'dark',
    preview: {
      bg: '#022c22',
      card: '#065f46',
      accent: '#10b981',
      text: '#ecfdf5',
    },
    variables: {
      '--bg-primary': '#022c22',
      '--bg-secondary': '#064e3b',
      '--card-bg': '#065f46',
      '--border-color': '#047857',
      '--text-primary': '#ecfdf5',
      '--text-muted': '#a7f3d0',
      '--accent-primary': '#10b981',
      '--accent-secondary': '#14b8a6',
      '--primary-color': '#10b981',
      '--primary-hover': '#059669',
    },
  },
  'violet-royale': {
    id: 'violet-royale',
    name: 'Violet Royale',
    description: 'Rich royal purple aesthetic with vibrant violet glow',
    mode: 'dark',
    preview: {
      bg: '#0f0728',
      card: '#2e1a47',
      accent: '#8b5cf6',
      text: '#f5f3ff',
    },
    variables: {
      '--bg-primary': '#0f0728',
      '--bg-secondary': '#1e1045',
      '--card-bg': '#2e1a47',
      '--border-color': '#4c1d95',
      '--text-primary': '#f5f3ff',
      '--text-muted': '#ddd6fe',
      '--accent-primary': '#8b5cf6',
      '--accent-secondary': '#d946ef',
      '--primary-color': '#8b5cf6',
      '--primary-hover': '#7c3aed',
    },
  },
  'sunset-blaze': {
    id: 'sunset-blaze',
    name: 'Sunset Blaze',
    description: 'Warm obsidian dark theme infused with crimson & orange',
    mode: 'dark',
    preview: {
      bg: '#1c0505',
      card: '#3f1217',
      accent: '#f43f5e',
      text: '#fff1f2',
    },
    variables: {
      '--bg-primary': '#1c0505',
      '--bg-secondary': '#2c0b0e',
      '--card-bg': '#3f1217',
      '--border-color': '#881337',
      '--text-primary': '#fff1f2',
      '--text-muted': '#fecdd3',
      '--accent-primary': '#f43f5e',
      '--accent-secondary': '#f97316',
      '--primary-color': '#f43f5e',
      '--primary-hover': '#e11d48',
    },
  },
  'minimal-light': {
    id: 'minimal-light',
    name: 'Minimal Light',
    description: 'Clean, high-contrast light theme built for daytime clarity',
    mode: 'light',
    preview: {
      bg: '#ffffff',
      card: '#f3f4f6',
      accent: '#2563eb',
      text: '#111827',
    },
    variables: {
      '--bg-primary': '#ffffff',
      '--bg-secondary': '#f8fafc',
      '--card-bg': '#ffffff',
      '--border-color': '#e2e8f0',
      '--text-primary': '#0f172a',
      '--text-muted': '#64748b',
      '--accent-primary': '#2563eb',
      '--accent-secondary': '#0284c7',
      '--primary-color': '#2563eb',
      '--primary-hover': '#1d4ed8',
    },
  },
  'midnight-oled': {
    id: 'midnight-oled',
    name: 'Midnight OLED',
    description: 'True black OLED optimized dark mode with electric blue highlights',
    mode: 'dark',
    preview: {
      bg: '#000000',
      card: '#0f0f11',
      accent: '#38bdf8',
      text: '#ffffff',
    },
    variables: {
      '--bg-primary': '#000000',
      '--bg-secondary': '#09090b',
      '--card-bg': '#121215',
      '--border-color': '#27272a',
      '--text-primary': '#ffffff',
      '--text-muted': '#a1a1aa',
      '--accent-primary': '#38bdf8',
      '--accent-secondary': '#60a5fa',
      '--primary-color': '#38bdf8',
      '--primary-hover': '#0284c7',
    },
  },
  'corporate-navy': {
    id: 'corporate-navy',
    name: 'Corporate Navy',
    description: 'Enterprise slate-navy palette with sky blue accents',
    mode: 'dark',
    preview: {
      bg: '#0f172a',
      card: '#1e293b',
      accent: '#0284c7',
      text: '#f8fafc',
    },
    variables: {
      '--bg-primary': '#0f172a',
      '--bg-secondary': '#1e293b',
      '--card-bg': '#334155',
      '--border-color': '#475569',
      '--text-primary': '#f8fafc',
      '--text-muted': '#94a3b8',
      '--accent-primary': '#0284c7',
      '--accent-secondary': '#38bdf8',
      '--primary-color': '#0284c7',
      '--primary-hover': '#0369a1',
    },
  },
};
