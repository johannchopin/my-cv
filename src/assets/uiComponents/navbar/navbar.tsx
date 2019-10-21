import * as React from 'react';

// IMPORT STYLES ZONE
import './navbar.scss';
// END IMPORT STYLES ZONE

// IMPORT IMAGES ZONE
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../iconHandler/iconHandler';
// END IMPORT COMPONENTS ZONE


// INIT HELPERS METHODS ZONE
import _Helper from '../../../helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT INTERFACE ZONE
import { TPages, TLanguages } from '../../../commonInterface';
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


interface Props {
    goToPage: (pageName: TPages) => void,
    setLanguage: (language: TLanguages) => void,
    language: TLanguages;
}

interface State {
    showNavbar: boolean,
}


export default class Navbar extends React.Component<Props, State> {

    protected navbar: JQuery;
    protected container: JQuery;

    constructor(props: Props) {
        super(props);

        this.state = {
            showNavbar: false,
        };
    }

    componentDidMount() {
        this.init();
    }

    protected init = (): void => {
        this.navbar = $("#navbar");
        this.container = $("#navbar > .container");
    }

    protected showNavbar = (): void => {
        this.navbar.css({
            animation: 'showMenuAnimation 0.5s forwards',
        });
        this.container.css({
            display: 'flex',
            animation: 'apparition 0.5s forwards',
            animationDelay: '0.6s',
        });
    }

    protected hideNavbar = (): void => {
        this.navbar.css({
            animation: 'hideMenuAnimation 0.5s forwards',
        });

        this.container.css({
            display: 'none',
        })
    }

    protected showOrHideNavbar = (): void => {
        this.setState({
            showNavbar: !this.state.showNavbar,
        }, () => {
            if (this.state.showNavbar) {
                this.showNavbar();
            } else {
                this.hideNavbar();
            }

        })
    }

    protected goToPage = (pageName: TPages): void => {
        this.props.goToPage(pageName);
        this.showOrHideNavbar();
    }

    protected languageSelectionRender = (): React.ReactNode => {
        return (
            <div id="languageSelection">

                <FrFlagSvg
                    className={this.props.language === 'fr' ? 'selected-language' : ''}
                    onClick={() => this.props.setLanguage('fr')}
                />
                <DeFlagSvg
                    className={this.props.language === 'de' ? 'selected-language' : ''}
                    onClick={() => this.props.setLanguage('de')}
                />
                <UsFlagSvg
                    className={this.props.language === 'en' ? 'selected-language' : ''}
                    onClick={() => this.props.setLanguage('en')}
                />

            </div>
        )
    }

    protected gitlabRepoRender = (): React.ReactNode => {
        const localize = LOCALIZE[this.props.language];

        return (
            <a
                href="https://gitlab.com/johannchopin/mycv-2019"
                target="_blank"
                id="gitlabRepo"
                className="clickable"
            >
                <GitlabIcon />
                <h2>{localize.check_repo}</h2>
            </a>
        )
    }


    render() {
        const localize = LOCALIZE[this.props.language];

        return (
            <nav id="navbar" onClick={() => { this.showOrHideNavbar() }}>
                <IconHandler icon="bars" className={this.state.showNavbar ? "selected" : ""} />
                <div className="container">
                    <h1>MENU</h1>
                    <ul>
                        <li onClick={() => { this.goToPage('introductionPage') }}>
                            {localize.presentation}
                        </li>
                        <li onClick={() => { this.goToPage('backgroundPage') }}>
                            {localize.background}
                        </li>
                        <li onClick={() => { this.goToPage('skillsPage') }}>
                            {localize.skills}
                        </li>
                        <li onClick={() => { this.goToPage('personalExperiences') }}>
                            {localize.personal_experiences}
                        </li>
                        <li onClick={() => { this.goToPage('hobbiesPage') }}>
                            {localize.hobbies}
                        </li>
                        <li onClick={() => { this.goToPage('contactPage') }}>
                            {localize.contacts}
                        </li>
                    </ul>

                    {this.languageSelectionRender()}
                    {this.gitlabRepoRender()}
                </div>
            </nav>
        )
    }
}