import * as React from 'react';
import { Link } from 'react-router-dom';

// IMPORT STYLES ZONE
import './Navbar.scss';
// END IMPORT STYLES ZONE

import { AppContext } from '~contexts/App';

// IMPORT COMPONENTS ZONE
import Icon from '../Icon/Icon';
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
// @ts-ignore
import GitlabIcon from '../../img/gitlabIcon.svg';
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
    const [SOReputation, setSOReputation] = React.useState<number>(0);

    const fetchStackoverflowReputation = (): void => {
        fetch('https://cors-anywhere.herokuapp.com/https://stackoverflow.com/users/flair/8583669.json')
            .then(response => response.json())
            .then(data => setStackoverflowReputation(data.reputation));
    }

    const setStackoverflowReputation = (reputation: string) => {
        const reputationAsNumber = parseFloat(reputation.replace(',', '.'));
        setSOReputation(Math.round(reputationAsNumber * 10) / 10);
    }

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

    const gitlabRepoRender = (): React.ReactNode => {
        return (
            <a
                href="https://gitlab.com/johannchopin/my-cv"
                target="_blank"
                id="gitlabRepo"
                className="clickable"
            >
                <GitlabIcon />
                <h2>
                    <Localize translations={localize.check_repo} />
                </h2>
            </a>
        )
    }

    const professionalLinksRender = (): React.ReactNode => {
        return (
            <div id="professionalLinks">
                <div className="row">
                    <a
                        id="stackoverflow"
                        href="https://stackoverflow.com/users/8583669/johannchopin"
                        target="_blank"
                        className="clickable d-flex flex-column align-items-center"
                    >
                        <Icon prefix="fab" icon="stack-overflow" />
                        <span className="reputation">{SOReputation}k</span>
                    </a>
                    <a
                        href="https://gitlab.com/johannchopin"
                        target="_blank"
                        className="clickable"
                    >
                        <Icon prefix="fab" icon="gitlab" />
                    </a>
                    <a
                        href="https://github.com/johannchopin"
                        target="_blank"
                        className="clickable"
                    >
                        <Icon prefix="fab" icon="github" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/johann-chopin-b0097b197/"
                        target="_blank"
                        className="clickable"
                    >
                        <Icon prefix="fab" icon="linkedin" />
                    </a>
                </div>
            </div>
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

    React.useEffect(() => {
        fetchStackoverflowReputation();
    }, [])
        
    return (
        <nav id="navbar" className={isOpen ? "open" : ""}>
            <Icon icon="bars" onClick={() => { toggleNavbar() }} className={isOpen ? "selected burger" : "burger"} />

            <div className="container">
                {renderLinks()}

                {languageSelectionRender()}
                {gitlabRepoRender()}
                {professionalLinksRender()}
            </div>
        </nav>
    )
}

export default Navbar