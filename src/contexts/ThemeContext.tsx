import { createContext, ReactNode, useEffect, useState } from 'react';
import { Theme } from '../types/Theme';

type ThemeContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: { children: ReactNode; }) {

  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ?? theme;
    document.documentElement.classList.add(currentTheme);
    setTheme(currentTheme as Theme);
  }, []);

  function saveNewTheme(newTheme: Theme) {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    document.documentElement.classList.add(newTheme);
  }

  function toggleTheme() {
    setTimeout(() => {
      const newTheme: Theme = (theme === 'light') ? 'dark' : 'light';
      document.documentElement.classList.remove(theme);
      saveNewTheme(newTheme);
    }, 250);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 