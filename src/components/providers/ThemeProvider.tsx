'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light' | 'system';

interface ThemeContextType {
  mode: 'dark' | 'light';
  themePreference: ThemeMode;
  setThemePreference: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  themePreference: 'system',
  setThemePreference: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const [themePreference, setThemePreferenceState] = useState<ThemeMode>('system');

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const savedPref = (localStorage.getItem('codewithsukh_theme_mode') as ThemeMode) || 'system';
    setThemePreferenceState(savedPref);

    const applyTheme = () => {
      let isDark = true;
      if (savedPref === 'system') {
        isDark = mediaQuery.matches;
      } else {
        isDark = savedPref === 'dark';
      }

      if (isDark) {
        root.classList.add('dark');
        root.classList.remove('light');
        setMode('dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        setMode('light');
      }
    };

    applyTheme();

    const handleSystemChange = (e: MediaQueryListEvent) => {
      const currentPref = localStorage.getItem('codewithsukh_theme_mode') || 'system';
      if (currentPref === 'system') {
        if (e.matches) {
          root.classList.add('dark');
          root.classList.remove('light');
          setMode('dark');
        } else {
          root.classList.remove('dark');
          root.classList.add('light');
          setMode('light');
        }
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const setThemePreference = (newPref: ThemeMode) => {
    setThemePreferenceState(newPref);
    localStorage.setItem('codewithsukh_theme_mode', newPref);

    const root = document.documentElement;
    let isDark = true;
    if (newPref === 'system') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      isDark = newPref === 'dark';
    }

    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      setMode('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      setMode('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, themePreference, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
