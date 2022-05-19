import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function useTheme() {

  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
      setTheme(storedTheme as Theme);
    }
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

  return { theme, toggleTheme };
}

export default useTheme;