import { XIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';

type SearchInputProps = {
  inputValue: string;
  onChangeInput: (inputValue: string) => void;
};

function SearchInput({ inputValue, onChangeInput }: SearchInputProps) {

  const { t } = useTranslation();

  return (
    <div className='relative w-1/2 md:w-2/5'>
      <input
        type="text"
        placeholder={`${t('search')}...`}
        autoFocus
        onChange={(e) => onChangeInput(e.target.value)}
        className='searcher w-full'
        value={inputValue}
      />
      {inputValue && (
        <button
          title={t('clearSearch')}
          onClick={() => onChangeInput('')}
          className='absolute top-[30%] right-2 hover:opacity-70 transition-opacity text-neutral-600 dark:text-white'>
          <XIcon className='w-4 h-4' />
        </button>
      )}
    </div>
  );
}

export default SearchInput;