import { CameraIcon } from '@heroicons/react/solid';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

type HeaderProps = {
  children?: ReactNode;
};

function Header({ children }: HeaderProps) {

  const { t } = useTranslation();

  return (
    <header id='top' className='p-5 bg-accent-light dark:bg-neutral-700 text-white'>
      <nav className='flex items-center justify-between'>
        <div className="flex items-center gap-2">
          <CameraIcon className='h-7 w-7 hover:scale-125 transition-transform duration-300 ease-in-out hover:animate-pulse' />
          <Link to='/'>
            <span className={
              `font-bold text-lg tracking-wider 
              ${children ?
                'hidden md:inline sm:text-xl' : 'inline xs:text-xl'}`}
            >
              {t('searcher')}
            </span>
          </Link>
        </div>
        {children}
        <div className={`hidden ${children ? 'md:flex' : 'xs:flex'} gap-1 md:gap-2 items-center`}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <div className={`${children ? 'md:hidden' : 'xs:hidden'}`}>
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;