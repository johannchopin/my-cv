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

// IMPORT INTERFACE ZONE
import { TPages } from '../../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    goToPage: (pageName: TPages) => void,
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

    render() {
        return (
            <nav id="navbar" onClick={() => { this.showOrHideNavbar() }}>
                <i id="icon" className={this.state.showNavbar ? "fas fa-bars selected" : "fas fa-bars"}></i>
                <div className="container">
                    <h1>MENU</h1>
                    <ul>
                        <li onClick={() => { this.goToPage('introductionPage') }}>Présentation</li>
                        <li onClick={() => { this.goToPage('backgroundPage') }}>Formation</li>
                        <li>Compétences</li>
                        <li>Expériences personnelles</li>
                        <li>Hobbies</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </nav>
        )
    }
}