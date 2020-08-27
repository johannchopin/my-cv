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
import COMMON_LOCALIZE from '../../../commonLocalize';
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT INTERFACE ZONE
import { Page, Language } from '../../../commonInterface';
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

interface NavbarProps {
    goToPage: (pageName: Page) => void,
    setLanguage: (language: Language) => void,
    language: Language;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const {setLanguage, language} = props

    const { setLang } = React.useContext(AppContext)

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
                    className={language === 'fr' ? 'selected-language' : ''}
                    onClick={() => setLang('fr')}
                />
                <DeFlagSvg
                    className={language === 'de' ? 'selected-language' : ''}
                    onClick={() => setLang('de')}
                />
                <UsFlagSvg
                    className={language === 'en' ? 'selected-language' : ''}
                    onClick={() => setLang('en')}
                />

            </div>
        )
    }

    const gitlabRepoRender = (): React.ReactNode => {
        const localize = LOCALIZE[language];

        return (
            <a
                href="https://gitlab.com/johannchopin/my-cv"
                target="_blank"
                id="gitlabRepo"
                className="clickable"
            >
                <GitlabIcon />
                <h2>{localize.check_repo}</h2>
            </a>
        )
    }

    const professionalLinksRender = (): React.ReactNode => {
        const commonLocalize = COMMON_LOCALIZE[language];

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
                        // TODO: Add link to linkedIn
                        target="_blank"
                        className="clickable"
                        data-toggle="tooltip"
                        data-placement="right"
                        title={commonLocalize.feature_coming_soon}
                    >
                        <Icon prefix="fab" icon="linkedin" />
                    </a>
                </div>
            </div>
        )
    }

    React.useEffect(() => {
        fetchStackoverflowReputation();
    }, [])
        
    const localize = LOCALIZE[language];

    return (
        <nav id="navbar" onClick={() => { toggleNavbar() }} className={isOpen ? "open" : ""}>
            <Icon icon="bars" className={isOpen ? "selected burger" : "burger"} />

            <div className="container">
                <h1>MENU</h1>
                <ul>
                    <li>
                        <Link to="/presentation">{localize.presentation}</Link>
                    </li>
                    <li>
                        <Link to="/background">{localize.background}</Link>
                    </li>
                    <li>
                        <Link to="/skills">{localize.skills}</Link>
                    </li>
                    <li>
                        <Link to="/experiences">{localize.personal_experiences}</Link>
                    </li>
                    <li>
                        <Link to="/projects">{localize.projects}</Link>
                    </li>
                    <li>
                        <Link to="/hobbies">{localize.hobbies}</Link>
                    </li>
                    <li>
                        <Link to="/contacts">{localize.contacts}</Link>
                    </li>
                </ul>

                {languageSelectionRender()}
                {gitlabRepoRender()}
                {professionalLinksRender()}
            </div>
        </nav>
    )
}

export default Navbar