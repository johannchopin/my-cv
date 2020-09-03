import * as React from 'react';

import { Language } from '../commonInterface';

interface AppContextParam {
  lang: Language
  setLang: (lang: Language) => void
}

export const AppContext = React.createContext({} as AppContextParam);

const AppProvider: React.FC = (props) => {
  const { children } = props

  const [langState, setLangState] = React.useState<Language>('en');

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