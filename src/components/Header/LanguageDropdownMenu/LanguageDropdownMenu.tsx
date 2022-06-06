import { Menu, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../assets/data/languages';
import { useLanguage } from '../../../hooks/useLanguage';
import { Language } from '../../../types/Language';

function LanguageDropdownMenu() {

  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <Menu>
      <Menu.Button
        className='flex items-center bg-white text-neutral-500 dark:bg-neutral-500 dark:text-white rounded-md p-1 relative focus-details'
        title={t('languageMenu.languageOptions')}
      >
        <GlobeAltIcon className='w-6 h-6' />
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
        <Menu.Items className='absolute origin-top-right -top-1 right-0 mt-2 whitespace-nowrap rounded-lg divide-y divide-neutral-300 dark:divide-neutral-400 bg-neutral-200 dark:bg-neutral-600 focus:outline-none shadow-lg ring-1 ring-black ring-opacity-5'>
          {Object.entries(languages).map(([key, value]) => (
            <Menu.Item key={key}>
              {({ active }) => (
                <button
                  key={key}
                  className={`dropdown-menu-item py-2 gap-2 rounded-sm overflow-hidden ${active && 'dropdown-menu-item-active'}`}
                  title={t(`languageMenu.${value.name}`)}
                  onClick={() => { changeLanguage(value.code as Language); }}
                >
                  <span className='text-xl'>{value.flag}</span>
                  <span className={`${language === value.code ? 'font-semibold' : 'font-medium'}`}>{value.name}</span>
                  {(language === value.code) && <span><CheckIcon className='w-5 h-5' /></span>}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default LanguageDropdownMenu;