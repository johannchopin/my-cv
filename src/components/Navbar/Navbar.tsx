import * as React from 'react';
import { Link } from 'react-router-dom';

// IMPORT STYLES ZONE
import './Navbar.scss';
// END IMPORT STYLES ZONE

import { AppContext } from '~contexts/App';

// IMPORT COMPONENTS ZONE
import Icon from '../Icon/Icon';
import SocialLinks from '~components/SocialLinks/SocialLinks';
// END IMPORT COMPONENTS ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import Localize from '~Localize';
import { useLocalize, Translation } from '~helpers/useLocalize';
// END IMPORT LOCALIZE ZONE

// IMPORT INTERFACE ZONE
type Link = {
    link: string
    translations: Translation
}
// END IMPORT INTERFACE ZONE

// IMPORT IMAGES ZONE
// @ts-ignore
import FrFlagSvg from './imgs/fr.svg';
// @ts-ignore
import DeFlagSvg from './imgs/de.svg';
// @ts-ignore
import UsFlagSvg from './imgs/us.svg';
// END IMPORT IMAGES ZONE

const links: Link[] = [
    {
        link: '/presentation',
        translations: localize.presentation
    },
    {
        link: '/background',
        translations: localize.background
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

    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleNavbar = (): void => {
        setIsOpen(!isOpen)
    }

    const languageSelectionRender = (): React.ReactNode => {
        return (
            <div id="languageSelection">

                <FrFlagSvg
                    className={`clickable ${lang === 'fr' ? 'selected' : ''}`}
                    onClick={() => {
                        setLang('fr')
                        setIsOpen(false)
                    }}
                />
                <DeFlagSvg
                    className={`clickable ${lang === 'de' ? 'selected' : ''}`}
                    onClick={() => {
                        setLang('de')
                        setIsOpen(false)
                    }}
                />
                <UsFlagSvg
                    className={`clickable ${lang === 'en' ? 'selected' : ''}`}
                    onClick={() => {
                        setLang('en')
                        setIsOpen(false)
                    }}
                />

            </div>
        )
    }

    const repoLinkRender = (): React.ReactNode => {
        return (
            <a
                href="https://github.com/johannchopin/my-cv"
                target="_blank"
                id="githubRepo"
                className="clickable btn btn-light mt-5"
            >
                <h2 className="m-0">
                    <Icon prefix="fab" icon="github" className="pr-1" />
                    <Localize translations={localize.check_repo} />
                </h2>
            </a>
        )
    }

    const renderLinks = (): JSX.Element => {
        const renderLinksList = () => {
            return links.map(link => {
                return (
                    <li key={link.link}>
                        <Link to={link.link}>
                            <span onClick={() => { setIsOpen(false) }}>
                                {useLocalize(link.translations)}
                            </span>
                        </Link>
                    </li>
                )
            })
        }

        return <ul>{renderLinksList()}</ul>
    }

    return (
        <nav id="navbar" className={isOpen ? "open" : ""}>
            <div onClick={() => { toggleNavbar() }} className="burger">
                <Icon icon="bars"  className={isOpen ? "selected" : ""} />
            </div>

            <div className="container">
                {renderLinks()}

                {languageSelectionRender()}
                {repoLinkRender()}
                <SocialLinks />
            </div>
        </nav>
    )
}

export default Navbar