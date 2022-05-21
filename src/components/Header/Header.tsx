import { CameraIcon, ChevronDownIcon, CogIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../hooks/useDebounce';
import useTheme from '../../hooks/useTheme';
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
          <div className="flex justify-center">
            <div>
              <div className="dropdown relative">
                <button
                  className="
                    dropdown-toggle
                    px-2.5
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg active:text-white
                    transition
                    duration-150
                    ease-in-out
                    flex
                    items-center
                    whitespace-nowrap
                    gap-1
                  "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded={true}
                >
                  <CogIcon className='w-5 h-5' />
                  <ChevronDownIcon className='w-4 h-4' />
                </button>
                <ul
                  className="
                    dropdown-menu
                    min-w-max
                    absolute
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                  "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                    >Action</a
                    >
                  </li>
                  <li>
                    <a
                      className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                    >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                    >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;