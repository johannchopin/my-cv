import * as React from 'react'

// IMPORT STYLES ZONE
import './TopSoAnswerer.scss'
// END IMPORT STYLES ZONE

// INTERFACE ZONE
export interface TopSoAnswererProps {
  tag: string
}
// END INTERFACE ZONE

const USER_ID = 8583669

const TopSoAnswerer: React.FC<TopSoAnswererProps> = (props) => {
  const { tag } = props

  return (
    <a href={`https://stackoverflow-readme-profile.vercel.app/tags-league/${tag}/users/${USER_ID}`} className="mt-1">
      <img src={`https://stackoverflow-readme-profile.johannchopin.fr/tags-league-ranking/${tag}/${USER_ID}?theme=default`} alt={`my stackoverflow ranking for ${tag}`}/>
    </a>
  )
}

export default TopSoAnswerer
