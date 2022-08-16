import * as React from 'react'

import { AppContext } from '~contexts/App'
import { Language } from '~commonInterface'

// I N T E R F A C E S
export type Translation = {
  [key in Language]: string
}
export type TranslationVars = {
  [key: string]: string | number
}

export const useLocalize = (translations: Translation, vars?: TranslationVars): string => {
  const { lang } = React.useContext(AppContext)
  let translation = translations[lang]

  if (vars !== undefined) {
    Object.keys(vars).forEach(variable => {
      const re = new RegExp(variable, 'g')

      translation = translation.replace(re, `${vars[variable]}`)
    })
  }

  return translation
}
