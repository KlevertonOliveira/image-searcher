import { SearchIcon, XIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDebounce from '../../../hooks/useDebounce';

type SearchInputProps = {
  onChangeSearchTerm: (inputValue: string) => void;
};

function SearchInput({ onChangeSearchTerm }: SearchInputProps) {

  const [inputValue, setInputValue] = useState<string>('');

  const { t } = useTranslation();
  const debouncedValue = useDebounce<string>(inputValue, 500);

  useEffect(() => {
    onChangeSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className='relative w-1/2 md:w-2/5'>
      <div className='absolute inset-y-0 flex items-center pl-2 pointer-events-none'>
        <SearchIcon className='w-5 h-5 text-neutral-500 dark:text-white' />
      </div>
      <input
        type="text"
        placeholder={`${t('searchInput.search')}...`}
        autoFocus
        onChange={(e) => setInputValue(e.target.value)}
        className='rounded py-[6px] px-2 font-bold text-neutral-500 dark:bg-neutral-500 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-300 focus-details w-full pl-8'
        value={inputValue}
      />
      {inputValue && (
        <button
          data-testid='clear'
          title={t('searchInput.clearSearch')}
          onClick={() => setInputValue('')}
          className='absolute top-[30%] rounded-full right-2 hover:opacity-70 transition-opacity text-neutral-400 dark:text-white focus-visible:focus-details'>
          <XIcon className='w-4 h-4' />
        </button>
      )}
    </div>
  );
}

export default SearchInput;