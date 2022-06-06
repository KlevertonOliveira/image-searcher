import { createContext, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../types/Language';

type LanguageContextData = {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext({} as LanguageContextData);

export function LanguageProvider({ children }: { children: ReactNode; }) {

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<Language>(
    (i18n.language === 'pt-BR' ? 'pt' : 'en') as Language
  );

  function changeLanguage(newLanguage: Language) {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  function toggleLanguage() {
    const newLanguage = (language === 'en') ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  return (
    <LanguageContext.Provider value={
      {
        language,
        changeLanguage,
        toggleLanguage
      }
    }
    >
      {children}
    </LanguageContext.Provider>
  );
} 