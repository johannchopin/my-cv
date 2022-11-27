import * as React from 'react'

import Icon from '~components/Icon/Icon'

// IMPORT STYLES ZONE
import './TopSoAnswerer.scss'
// END IMPORT STYLES ZONE

// INTERFACE ZONE
export interface TopSoAnswererProps {
  tag: string
  percentage: number
}
// END INTERFACE ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import Localize from '~Localize'
// END IMPORT LOCALIZE ZONE

const TopSoAnswerer: React.FC<TopSoAnswererProps> = (props) => {
  const { tag, percentage } = props

  const linkToProfile = `https://stackoverflow-readme-profile.vercel.app/tags-league/${tag}/users/8583669`

  return (
    <a href={linkToProfile} target="_blank" className="top-so-answerer mt-1">
      <Icon icon="external-link-alt" className="pr-1" />
      <Localize translations={localize.top_answerers} vars={{ __PERCENTAGE__: percentage }} />
    </a>
  )
}

export default TopSoAnswerer
