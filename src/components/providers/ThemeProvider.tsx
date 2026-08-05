'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type ColorTheme =
  | 'cyber-neon'
  | 'emerald-pro'
  | 'violet-royale'
  | 'sunset-blaze'
  | 'minimal-light';

export type TypographyStyle = 'modern-sans' | 'tech-mono' | 'elegant-serif' | 'sans' | 'mono' | 'serif';

interface ThemeContextType {
  colorTheme: ColorTheme;
  typographyStyle: TypographyStyle;
  setColorTheme: (theme: ColorTheme) => void;
  setTypographyStyle: (font: TypographyStyle) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  colorTheme: 'cyber-neon',
  typographyStyle: 'modern-sans',
  setColorTheme: () => {},
  setTypographyStyle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('cyber-neon');
  const [typographyStyle, setTypographyStyleState] = useState<TypographyStyle>('modern-sans');

  useEffect(() => {
    // Read saved preferences on mount
    const savedTheme = (localStorage.getItem('codewithsukh_theme') as ColorTheme) || 'cyber-neon';
    const savedFont = (localStorage.getItem('codewithsukh_font') as TypographyStyle) || 'modern-sans';

    setColorThemeState(savedTheme);
    setTypographyStyleState(savedFont);

    applyThemeToDOM(savedTheme, savedFont);

    // Cross-tab and custom event listener
    const handleStorageEvent = (e: StorageEvent | CustomEvent) => {
      let newTheme = savedTheme;
      let newFont = savedFont;

      if ('detail' in e && e.detail) {
        if (e.detail.theme) newTheme = e.detail.theme;
        if (e.detail.font) newFont = e.detail.font;
      } else {
        newTheme = (localStorage.getItem('codewithsukh_theme') as ColorTheme) || savedTheme;
        newFont = (localStorage.getItem('codewithsukh_font') as TypographyStyle) || savedFont;
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

  const applyThemeToDOM = (theme: ColorTheme, font: TypographyStyle) => {
    const root = document.documentElement;

    // Set HTML attributes
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-font', font);

    // Toggle light/dark mode class
    if (theme === 'minimal-light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  };

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem('codewithsukh_theme', theme);
    applyThemeToDOM(theme, typographyStyle);
    window.dispatchEvent(
      new CustomEvent('codewithsukh_theme_change', { detail: { theme, font: typographyStyle } })
    );
  };

  const setTypographyStyle = (font: TypographyStyle) => {
    setTypographyStyleState(font);
    localStorage.setItem('codewithsukh_font', font);
    applyThemeToDOM(colorTheme, font);
    window.dispatchEvent(
      new CustomEvent('codewithsukh_theme_change', { detail: { theme: colorTheme, font } })
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        typographyStyle,
        setColorTheme,
        setTypographyStyle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
