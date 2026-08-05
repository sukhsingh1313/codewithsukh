'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ColorTheme, TypographyStyle, THEMES, Theme } from '@/lib/themes';

export type { ColorTheme, TypographyStyle };

interface ThemeContextType {
  colorTheme: ColorTheme;
  typographyStyle: TypographyStyle;
  activeTheme: Theme;
  setColorTheme: (theme: ColorTheme) => void;
  setTypographyStyle: (font: TypographyStyle) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType>({
  colorTheme: 'cyber-neon',
  typographyStyle: 'modern-sans',
  activeTheme: THEMES['cyber-neon'],
  setColorTheme: () => {},
  setTypographyStyle: () => {},
  availableThemes: Object.values(THEMES),
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('cyber-neon');
  const [typographyStyle, setTypographyStyleState] = useState<TypographyStyle>('modern-sans');
  const [mounted, setMounted] = useState(false);

  const applyThemeToDOM = (themeId: ColorTheme, font: TypographyStyle) => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const themeObj = THEMES[themeId] || THEMES['cyber-neon'];

    // 1. Set data attributes on html root
    root.setAttribute('data-theme', themeId);
    root.setAttribute('data-font', font);

    // 2. Synchronously inject dynamic CSS variables onto documentElement style
    Object.entries(themeObj.variables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // 3. Toggle tailwind dark/light class
    if (themeObj.mode === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  };

  useEffect(() => {
    setMounted(true);

    // Read initial theme preference from localStorage or fallback
    const savedTheme = (localStorage.getItem('codewithsukh_theme') as ColorTheme) || 'cyber-neon';
    const savedFont = (localStorage.getItem('codewithsukh_font') as TypographyStyle) || 'modern-sans';

    const validTheme = THEMES[savedTheme] ? savedTheme : 'cyber-neon';

    setColorThemeState(validTheme);
    setTypographyStyleState(savedFont);

    // Synchronously apply variables to DOM
    applyThemeToDOM(validTheme, savedFont);

    // Handle cross-tab storage sync and custom events
    const handleStorageEvent = (e: StorageEvent | CustomEvent) => {
      let newTheme = validTheme;
      let newFont = savedFont;

      if ('detail' in e && e.detail) {
        if (e.detail.theme && THEMES[e.detail.theme as ColorTheme]) {
          newTheme = e.detail.theme;
        }
        if (e.detail.font) newFont = e.detail.font;
      } else {
        const stored = localStorage.getItem('codewithsukh_theme') as ColorTheme;
        if (stored && THEMES[stored]) newTheme = stored;
        const storedFont = localStorage.getItem('codewithsukh_font') as TypographyStyle;
        if (storedFont) newFont = storedFont;
      }

      setColorThemeState(newTheme);
      setTypographyStyleState(newFont);
      applyThemeToDOM(newTheme, newFont);
    };

    window.addEventListener('storage', handleStorageEvent as EventListener);
    window.addEventListener('codewithsukh_theme_change' as any, handleStorageEvent as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorageEvent as EventListener);
      window.removeEventListener('codewithsukh_theme_change' as any, handleStorageEvent as EventListener);
    };
  }, []);

  const setColorTheme = (theme: ColorTheme) => {
    if (!THEMES[theme]) return;
    setColorThemeState(theme);
    localStorage.setItem('codewithsukh_theme', theme);
    applyThemeToDOM(theme, typographyStyle);

    // Broadcast custom event for immediate component updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('codewithsukh_theme_change', { detail: { theme, font: typographyStyle } })
      );
    }
  };

  const setTypographyStyle = (font: TypographyStyle) => {
    setTypographyStyleState(font);
    localStorage.setItem('codewithsukh_font', font);
    applyThemeToDOM(colorTheme, font);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('codewithsukh_theme_change', { detail: { theme: colorTheme, font } })
      );
    }
  };

  const activeTheme = THEMES[colorTheme] || THEMES['cyber-neon'];

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        typographyStyle,
        activeTheme,
        setColorTheme,
        setTypographyStyle,
        availableThemes: Object.values(THEMES),
      }}
    >
      {/* Avoid flash of unstyled content during SSR hydration */}
      <div style={{ visibility: mounted ? 'visible' : 'visible' }}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
