import * as React from 'react';
import * as ReactDOM from 'react-dom';

// IMPORT LIBRARIES ZONE
import './assets/lib/jquery';
import './assets/lib/bootstrap';

// IMPORT SWIPER LIBRARY ZONE
import Swiper from 'swiper';
import './assets/lib/swiper/swiper.min.css';
// IMPORT SWIPER LIBRARY ZONE

// END IMPORT LIBRARIES ZONE

// IMPORT STYLES ZONE
import './assets/styles/style.scss';
// END IMPORT STYLES ZONE

// IMPORT COMPONENTS ZONE
import Navbar from './assets/components/navbar/navbar';
import SimpleModal from './assets/components/simpleModal/simpleModal';
// END IMPORT COMPONENTS ZONE

// IMPORT PAGES ZONE
import IntroductionPage from './pages/introductionPage/introductionPage';
import TimeLinePage from './pages/timeLinePage/timeLinePage';
import SkillsPage from './pages/skillsPage/skillsPage';
import ContactPage from './pages/contactPage/contactPage';
// END IMPORT PAGES ZONE

// IMPORT IMAGES ZONE   

// TODO: Fix bug -> ts can't import images like this
// @ts-ignore
import * as Favicon from './assets/img/favicon.png';
// END IMPORT IMAGES ZONE

// INIT HELPERS METHODS ZONE
import _Helper from './helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import {
    TPages,
    TLanguages,
    ISimpleModalParams
} from './commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
}

interface State {
    language: TLanguages,
    pageToShow: TPages,
    simpleModalParams: ISimpleModalParams,
    mySwiper: Swiper,
    currentPageIndex: number,
}

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            language: 'fr',
            pageToShow: 'introductionPage',
            simpleModalParams: {},
            mySwiper: null,
            currentPageIndex: 0,
        };
    }

    componentDidMount = () => {
        this.init();
    }


    protected init() {
        this.initUI();

        this.setState({
            mySwiper: new Swiper('.swiper-container', {
                initialSlide: 0,
                preloadImages: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                    draggable: true,
                },
            })
        }, () => { this.initSwiper() })

    }

    protected initUI() {
        Helper.setFavicon(Favicon);
    }

    protected initSwiper = () => {
        this.state.mySwiper.on('slideChangeTransitionEnd', () => {
            this.setState(prevState => ({
                currentPageIndex: this.state.mySwiper.activeIndex,
            }));
        });
    }

    protected goToPage = (pageName: TPages): void => {
        switch (pageName) {
            case 'introductionPage':
                this.state.mySwiper.slideTo(0, 1000);
                break;
        }
    };

    protected showSimpleModal = (params: ISimpleModalParams): void => {
        this.setState({
            simpleModalParams: params,
        }, () => {
            $('#simpleModal').modal();
        });

        // Hide simple modal after 2.3s
        setTimeout(() => {
            $('#simpleModal').modal('hide');
        }, 2300);
    };

    protected setLanguage = (language: TLanguages) => {
        this.setState({
            language: language,
        });
    };

    protected navbarRender() {
        return (
            <Navbar
                goToPage={this.goToPage}
                setLanguage={this.setLanguage}
                language={this.state.language}
            />
        )
    }

    protected introductionPageRender = () => {
        return (
            <IntroductionPage
                lang={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
            />
        )
    }

    protected timeLinePageRender = () => {
        return (
            <TimeLinePage
                language={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
            />
        )
    }

    protected skillsPageRender = () => {
        return (
            <SkillsPage
                currentPageIndex={this.state.currentPageIndex}
            />
        )
    }

    protected contactPageRender = () => {
        return (
            <ContactPage
                lang={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
                showSimpleModal={this.showSimpleModal}
            />
        )
    }

    protected modalsRender() {
        return (
            <div id="modals">
                <SimpleModal params={this.state.simpleModalParams} />
            </div>
        );
    }


    render() {
        return (
            <div>
                {this.navbarRender()}

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.introductionPageRender()}
                        {this.timeLinePageRender()}
                        {this.skillsPageRender()}
                        {this.contactPageRender()}
                    </div>

                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev" id="swiper-button-prev"></div>
                    <div className="swiper-button-next" id="swiper-button-next"></div>

                    <div className="swiper-scrollbar"></div>
                </div>

                {this.modalsRender()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app') as HTMLElement
);