import { CameraIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../hooks/useDebounce';
import DropdownMenu from './DropdownMenu';
import LanguageSwitcher from './LanguageSwitcher';
import SearchInput from './SearchInput';
import ThemeSwitcher from './ThemeSwitcher';

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

  return (
    <header id='top' className='p-5 bg-accent-light dark:bg-neutral-700 text-white'>
      <nav className='flex items-center justify-between'>
        <div className="flex items-center gap-[0.5rem]">
          <CameraIcon className='h-7 w-7 hover:scale-125 transition-transform duration-300 ease-in-out hover:animate-pulse' />
          <span className='hidden md:inline font-bold text-xl tracking-wider'>{t('searcher')}</span>
        </div>
        <SearchInput inputValue={inputValue} onChangeInput={setInputValue} />
        <div className='hidden md:flex gap-1 md:gap-2 items-center'>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <div className='md:hidden'>
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;