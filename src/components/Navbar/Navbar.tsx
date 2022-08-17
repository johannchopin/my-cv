import * as React from 'react'
import { Link } from 'react-router-dom'
import FocusTrap from 'focus-trap-react'

// IMPORT STYLES ZONE
import './Navbar.scss'
// END IMPORT STYLES ZONE

import { AppContext } from '~contexts/App'

// IMPORT COMPONENTS ZONE
import { LANGUAGES } from '~const'
import Icon from '../Icon/Icon'
import SocialLinks from '~components/SocialLinks/SocialLinks'
// END IMPORT COMPONENTS ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import Localize from '~Localize'
import { useLocalize, Translation } from '~helpers/useLocalize'
import * as commonLocalize from '~commonLocalize.json'
// END IMPORT LOCALIZE ZONE

// IMPORT INTERFACE ZONE
import { Language } from '~commonInterface'
type NavbarLink = {
    link: string
    translations: Translation
}
// END IMPORT INTERFACE ZONE

// IMPORT IMAGES ZONE
// @ts-ignore
import FrFlagSvg from './imgs/fr.svg'
// @ts-ignore
import DeFlagSvg from './imgs/de.svg'
// @ts-ignore
import UsFlagSvg from './imgs/us.svg'
// END IMPORT IMAGES ZONE

const langIcons: {[key in Language]: React.ReactElement} = {
  en: <UsFlagSvg />,
  fr: <FrFlagSvg />,
  de: <DeFlagSvg />
}
const links: NavbarLink[] = [
  {
    link: '/presentation',
    translations: localize.presentation
  },
  {
    link: '/education',
    translations: localize.education
  },
  {
    link: '/skills',
    translations: localize.skills
  },
  {
    link: '/experiences',
    translations: localize.personal_experiences
  },
  {
    link: '/projects',
    translations: localize.projects
  },
  {
    link: '/hobbies',
    translations: localize.hobbies
  },
  {
    link: '/contacts',
    translations: localize.contacts
  }
]

const Navbar: React.FC = () => {
  const { lang, setLang } = React.useContext(AppContext)

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen)
  }

  const languageSelectionRender = (): React.ReactNode => {
    const langsLocalize = {
      en: useLocalize(commonLocalize.english),
      fr: useLocalize(commonLocalize.french),
      de: useLocalize(commonLocalize.german)
    }

    return (
      <div id="languageSelection">
        {LANGUAGES.map(langSelection => (
          <button
            key={`btn-lang-${langSelection}`}
            className={`clickable ${langSelection === lang ? 'selected' : ''}`}
            onClick={(): void => { setLang(langSelection) }}
            aria-label={useLocalize(
              localize.translate_to,
              { __LANG__: langsLocalize[langSelection] }
            )}
            disabled={langSelection === lang}
          >
            {langIcons[langSelection]}
          </button>
        ))}
      </div>
    )
  }

  const repoLinkRender = (): React.ReactNode => {
    return (
      <a
        href="https://github.com/johannchopin/my-cv"
        target="_blank"
        id="githubRepo"
        className="clickable btn btn-light mt-5 text-black"
      >
        <Icon prefix="fab" icon="github" className="pr-1" />
        <Localize translations={localize.check_repo} />
      </a>
    )
  }

  const renderLinks = (): JSX.Element => {
    const renderLinksList = (): JSX.Element[] => {
      return links.map(link => {
        return (
          <li key={link.link}>
            <Link to={link.link} onClick={(): void => { setIsOpen(false) }}>
              {useLocalize(link.translations)}
            </Link>
          </li>
        )
      })
    }

    return <ul>{renderLinksList()}</ul>
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [lang])

  return (
    <FocusTrap active={isOpen}>
      <nav id="navbar" className={isOpen ? 'open' : ''}>
        <button
          onClick={(): void => { toggleNavbar() }} className="burger text-white"
          aria-expanded={isOpen}
          aria-label={isOpen ? useLocalize(localize.close_navbar) : useLocalize(localize.open_navbar)}
        >
          <Icon icon="bars" className={isOpen ? 'selected' : ''} />
        </button>

        <div className="container">
          {renderLinks()}
          {languageSelectionRender()}
          {repoLinkRender()}
          <SocialLinks />
        </div>
      </nav>
    </FocusTrap>
  )
}

export default Navbar
