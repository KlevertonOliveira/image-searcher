import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../hooks/useTheme';

function ThemeSwitcher() {

  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='rounded-full focus-details p-1 hover:bg-black transition-colors duration-200 dark:hover:bg-[#6096BA] dark:hover:text-yellow-300'
      title={theme === 'light' ? t('switchDarkMode') : t('switchLightMode')}
    >
      {theme === 'light' ? <MoonIcon className='h-7 w-7' /> : <SunIcon className='h-7 w-7' />}
    </button>
  );
}

export default ThemeSwitcher;