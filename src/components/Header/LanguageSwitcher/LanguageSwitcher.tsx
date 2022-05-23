import { languages } from '../../../assets/data/languages';
import { useLanguage } from '../../../hooks/useLanguage';
import { Language } from '../../../types/Language';

function LanguageSwitcher() {

  const { language, changeLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value as Language)}
      className='selector text-neutral-600 font-medium'
    >
      {Object.values(languages).map(({ code, name, flag }) => {
        return (
          <option key={code} value={code} title={name} className='text-lg'>
            {flag} {name}
          </option>
        );
      }
      )}
    </select>
  );
}

export default LanguageSwitcher;