import { CameraIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';
import useTheme from '../../hooks/useTheme';

type HeaderProps = {
  onChangeSearchTerm: (searchTerm: string) => void;
};

function Header({ onChangeSearchTerm }: HeaderProps) {

  const { theme, toggleTheme } = useTheme();

  return (
    <header className='p-5 bg-[#6096BA] dark:bg-neutral-700 text-white'>
      <nav className='flex items-center justify-between'>
        <div className="flex items-center gap-[0.5rem]">
          <CameraIcon className='h-7 w-7 hover:scale-125 transition-transform duration-300 ease-in-out hover:animate-pulse' />
          <span className='hidden md:inline font-bold text-xl tracking-wide'>Searcher</span>
        </div>
        <input
          type="text"
          placeholder='Search...'
          autoFocus
          onChange={e => onChangeSearchTerm(e.target.value)}
          className='searcher'
        />
        <button
          onClick={toggleTheme}
          className='rounded-full focus-details p-1 hover:bg-black transition-colors duration-200 dark:hover:bg-[#6096BA] dark:hover:text-yellow-300'
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
          {theme === 'light' ? <MoonIcon className='h-7 w-7' /> : <SunIcon className='h-7 w-7' />}
        </button>
      </nav>
    </header>
  );
}

export default Header;