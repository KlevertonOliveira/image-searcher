import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../hooks/useTheme';

function ThemeSwitcher() {

  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='rounded-full p-1 hover:bg-black transition-colors duration-200 dark:hover:bg-accent-light dark:hover:text-yellow-300 focus-visible:focus-details'
      title={theme === 'light' ? t('themeSwitcher.switchDarkMode') : t('themeSwitcher.switchLightMode')}
      aria-label={t('themeSwitcher.switcher')}
    >
      {theme === 'light' ? <MoonIcon className='h-7 w-7' /> : <SunIcon className='h-7 w-7' />}
    </button>
  );
}

export default ThemeSwitcher;