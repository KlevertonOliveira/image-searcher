import { XIcon } from '@heroicons/react/solid';
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
  );
}

export default SearchInput;