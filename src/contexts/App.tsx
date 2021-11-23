import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Language } from '../commonInterface';

interface AppContextParam {
  lang: Language
  setLang: (lang: Language) => void
}

const LANGUAGES: Language[] = ['en', 'fr', 'de']

export const AppContext = React.createContext({} as AppContextParam);

const AppProvider: React.FC = (props) => {
  const { children } = props

  const history = useHistory()
  const { search } = useLocation()
  const query = new URLSearchParams(search)
  const langInQuery = query.get('lang') as Language

  const getDefaultLang = (): Language => {
    const isLangValid = LANGUAGES.includes(langInQuery as Language)

    if (isLangValid) return langInQuery
    return 'en'
  }
  

  const [langState, setLangState] = React.useState<Language>(getDefaultLang());

  const setLang = (lang: Language): void => {
    query.set('lang', lang)
    const updateLangPath = `${window.location.origin}${window.location.pathname}?${query.toString()}`

    history.push(updateLangPath)
    setLangState(lang)
  }

  const appContextProviderValue = {
    lang: langState,
    setLang
  }

  return (
    <AppContext.Provider value={appContextProviderValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;