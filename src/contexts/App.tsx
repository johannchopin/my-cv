import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { Language } from '../commonInterface';

interface AppContextParam {
  lang: Language
  setLang: (lang: Language) => void
}

const LANGUAGES: Language[] = ['en', 'fr', 'de']

export const AppContext = React.createContext({} as AppContextParam);

const AppProvider: React.FC = (props) => {
  const { children } = props

  const { search } = useLocation()
  const query = new URLSearchParams(search)
  const langInQuery = query.get('lang') as Language

  const getDefaultLang = (): Language => {
    const isLangValid = LANGUAGES.includes(langInQuery as Language)

    if (isLangValid) return langInQuery
    return 'en'
  }
  

  const [langState, setLangState] = React.useState<Language>(getDefaultLang());

  const appContextProviderValue = {
    lang: langState,
    setLang: setLangState
  }

  return (
    <AppContext.Provider value={appContextProviderValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;