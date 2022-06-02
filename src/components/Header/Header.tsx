import { CameraIcon } from '@heroicons/react/solid';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageDropdownMenu from './LanguageDropdownMenu';
import MobileDropdownMenu from './MobileDropdownMenu';
import ThemeSwitcher from './ThemeSwitcher';

type HeaderProps = {
  children?: ReactNode;
};

function Header({ children }: HeaderProps) {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <header id='top' className='p-4 bg-accent-light dark:bg-neutral-700 text-white'>
      <nav className='flex items-center justify-between'>
        <div className="flex items-center gap-2">
          <CameraIcon className='h-7 w-7 hover:scale-125 transition-transform duration-300 ease-in-out hover:animate-pulse' />
          <button
            className={
              `font-bold text-lg tracking-wider focus-visible:focus-details
               ${children ? 'hidden md:inline sm:text-xl' : 'inline xs:text-xl'}`
            }
            onClick={() => { navigate('/'); }}
          >
            {t('searcher')}
          </button>
        </div>
        {children}
        <div className={`hidden ${children ? 'md:flex' : 'xs:flex'} gap-1 md:gap-2 items-center`}>
          <div>
            <LanguageDropdownMenu />
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
        <div className={`${children ? 'md:hidden' : 'xs:hidden'}`}>
          <MobileDropdownMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;