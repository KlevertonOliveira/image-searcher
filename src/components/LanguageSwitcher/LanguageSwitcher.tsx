import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {

  const languages = [
    {
      code: 'en',
      name: 'en-us',
      flag: '🇺🇸'
    },
    {
      code: 'pt',
      name: 'pt-br',
      flag: '🇧🇷'
    }
  ];

  const { i18n } = useTranslation();

  return (
    <select
      defaultValue={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className='selector'
    >
      {languages.map(({ code, name, flag }) => {
        return (
          <option key={code} value={code} title={name}>
            {flag}
          </option>
        );
      }
      )}
    </select>
  );
}

export default LanguageSwitcher;