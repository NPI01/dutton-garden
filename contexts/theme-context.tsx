'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'elegant' | 'wild';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isWild: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('wild');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('garden-theme') as Theme | null;
    if (savedTheme === 'elegant' || savedTheme === 'wild') {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('garden-theme', theme);
    // Update body class for CSS-based theme switching
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'wild' ? 'elegant' : 'wild'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isWild: theme === 'wild' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

