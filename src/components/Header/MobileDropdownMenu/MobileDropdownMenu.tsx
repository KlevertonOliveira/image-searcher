import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon, CogIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../assets/data/languages';
import { useLanguage } from '../../../hooks/useLanguage';
import { useTheme } from '../../../hooks/useTheme';

function MobileDropdownMenu() {

  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();


  return (
    <Menu>
      <Menu.Button className='flex items-center bg-white text-neutral-500 dark:bg-neutral-500 dark:text-white rounded-md p-1 relative focus-details'>
        <CogIcon className='w-6 h-6' />
        <ChevronDownIcon className='w-5 h-5' />
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className='absolute origin-top-right right-1 mt-2 divide-y divide-neutral-300 dark:divide-neutral-400 bg-neutral-200 dark:bg-neutral-600 focus:outline-none rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`dropdown-menu-item py-2 ${active && 'dropdown-menu-item-active'}`}
                title={theme === 'light' ? t('themeSwitcher.switchDarkMode') : t('themeSwitcher.switchLightMode')}
                onClick={toggleTheme}
              >
                {theme === 'light' ?
                  <div className='flex gap-1 items-center'>
                    <SunIcon className='h-5 w-5' />
                    <ChevronRightIcon className='h-5 w-5' />
                    <MoonIcon className='h-5 w-5' />
                  </div>
                  :
                  <div className='flex gap-1 items-center'>
                    <MoonIcon className='h-5 w-5' />
                    <ChevronRightIcon className='h-5 w-5' />
                    <SunIcon className='h-5 w-5' />
                  </div>
                }
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`dropdown-menu-item text-xl ${active && 'dropdown-menu-item-active'}`}
                onClick={toggleLanguage}
                title={t('languageMenu.toggleLanguage')}
              >
                {language === 'en' ?
                  <div className='flex gap-1 items-center'>
                    <span>{languages.en.flag}</span>
                    <ChevronRightIcon className='h-5 w-5' />
                    <span>{languages.pt.flag}</span>
                  </div>
                  :
                  <div className='flex gap-1 items-center'>
                    <span>{languages.pt.flag}</span>
                    <ChevronRightIcon className='h-5 w-5' />
                    <span>{languages.en.flag}</span>
                  </div>
                }
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MobileDropdownMenu;