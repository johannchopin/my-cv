import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'

// IMPORT STYLES ZONE
import './Icon.scss'
// END IMPORT STYLES ZONE

// IMPORT INTERFACE ZONE
// END IMPORT INTERFACE ZONE

// INTERFACE ZONE
export interface IconHandlerProps {
    icon: IconName,
    prefix?: IconPrefix,
    className?: string,
    onClick?: () => void
}
// END INTERFACE ZONE

const Icon: React.FC<IconHandlerProps> = (props) => {
  const {
    icon, prefix, className, onClick
  } = props

  const getClassName = (): string => {
    const defaultClassAttr = 'fa-icon'

    if (className === undefined) {
      return defaultClassAttr
    }

    return defaultClassAttr + ' ' + className
  }

  const onIconClick = (): void => {
    if (onClick !== undefined) {
      (onClick)()
    }
  }

  const getFontawesomeIconPrefix = (): IconPrefix => {
    return prefix !== undefined ? prefix : 'fas'
  }

  return (
    <span
      className={getClassName()}
      onClick={onIconClick}
    >
      <FontAwesomeIcon icon={[getFontawesomeIconPrefix(), icon]} />
    </span>
  )
}

export default Icon
