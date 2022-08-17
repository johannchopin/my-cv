import * as React from 'react'

// IMPORT STYLES ZONE
import './LanguageLevel.scss'
// END IMPORT STYLES ZONE

// INTERFACE ZONE
export interface LanguageLevelProps {
  level: string
}
// END INTERFACE ZONE

const LanguageLevel: React.FC<LanguageLevelProps> = (props) => {
  const { level } = props

  return (
    <span className="language-level p-1 px-2">
      {level}
    </span>
  )
}

export default LanguageLevel
