import { CameraIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../hooks/useDebounce';
import { useTheme } from '../../hooks/useTheme';
import DropdownMenu from '../DropdownMenu';
import LanguageSwitcher from '../LanguageSwitcher';

type HeaderProps = {
  onChangeSearchTerm: (searchTerm: string) => void;
};

function Header({ onChangeSearchTerm }: HeaderProps) {

  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce<string>(inputValue, 500);
  const { t } = useTranslation();

  useEffect(() => {
    onChangeSearchTerm(debouncedValue);
  }, [debouncedValue]);

  const { theme, toggleTheme } = useTheme();

  return (
    <header id='top' className='p-5 bg-accent-light dark:bg-neutral-700 text-white'>
      <nav className='flex items-center justify-between'>
        <div className="flex items-center gap-[0.5rem]">
          <CameraIcon className='h-7 w-7 hover:scale-125 transition-transform duration-300 ease-in-out hover:animate-pulse' />
          <span className='hidden md:inline font-bold text-xl tracking-wide'>{t('searcher')}</span>
        </div>
        <div className='relative w-1/2 md:w-2/5'>
          <input
            type="text"
            placeholder={`${t('search')}...`}
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
            className='searcher w-full'
            value={inputValue}
          />
          {inputValue && (
            <button
              title={t('clearSearch')}
              onClick={() => setInputValue('')}
              className='absolute top-[30%] right-2 hover:opacity-70 transition-opacity text-neutral-600 dark:text-white'>
              <XIcon className='w-4 h-4' />
            </button>
          )}
        </div>
        <div className='hidden md:flex gap-1 md:gap-2 items-center'>
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            className='rounded-full focus-details p-1 hover:bg-black transition-colors duration-200 dark:hover:bg-[#6096BA] dark:hover:text-yellow-300'
            title={theme === 'light' ? t('switchDarkMode') : t('switchLightMode')}
          >
            {theme === 'light' ? <MoonIcon className='h-7 w-7' /> : <SunIcon className='h-7 w-7' />}
          </button>
        </div>
        <div className='md:hidden'>
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;