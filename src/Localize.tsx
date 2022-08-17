import * as React from 'react'

import { useLocalize as importedUseLocalize, Translation, TranslationVars } from '~helpers/useLocalize'

export const useLocalize = importedUseLocalize

// I N T E R F A C E S
export interface LocalizeProps {
  translations: Translation
  vars?: TranslationVars
}

const Localize: React.FC<LocalizeProps> = (props) => {
  const { translations, vars } = props

  return (
    <>
      {useLocalize(translations, vars)}
    </>
  )
}

export default Localize
