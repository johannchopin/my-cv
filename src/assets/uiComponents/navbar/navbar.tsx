import * as React from 'react';

// IMPORT STYLES ZONE
import './navbar.scss';
// END IMPORT STYLES ZONE

// IMPORT IMAGES ZONE
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
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
// END IMPORT IMAGES ZONE


interface Props {
    goToPage: (pageName: TPages) => void,
    setLanguage: (language: TLanguages) => void,
    language: TLanguages;
}

interface State {
    showNavbar: boolean,
}

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

export default class Navbar extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            showNavbar: false,
        };
    }

    componentDidMount() {
        this.init();
    }

    protected init = (): void => { }

    protected showOrHideNavbar = (): void => {
        this.setState({
            showNavbar: !this.state.showNavbar,
        }, () => {
            const navbar = $("#navbar");
            const container = $("#navbar > .container");

            // TODO: Write openNavbar() and closeNavbar() methods
            if (this.state.showNavbar) {
                navbar.css({
                    animation: 'showMenuAnimation 0.5s forwards',
                });
                container.css({
                    display: 'flex',
                    animation: 'apparition 0.5s forwards',
                    animationDelay: '0.6s',
                });
            } else {
                navbar.css({
                    animation: 'hideMenuAnimation 0.5s',
                });

                container.css({
                    display: 'none',
                })
            }

        })
    }

    protected goToPage = (pageName: TPages): void => {
        this.props.goToPage(pageName);
        this.showOrHideNavbar();
    }

    protected languageSelectionRender = () => {
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


    render() {
        const localize = LOCALIZE[this.props.language];

        return (
            <nav id="navbar" onClick={() => { this.showOrHideNavbar() }}>
                <i id="icon" className={this.state.showNavbar ? "fas fa-bars selected" : "fas fa-bars"}></i>
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
                        <li>
                            {localize.personal_experiences}
                        </li>
                        <li>
                            {localize.hobbies}
                        </li>
                        <li>
                            {localize.contacts}
                        </li>
                    </ul>

                    {this.languageSelectionRender()}
                </div>
            </nav>
        )
    }
}