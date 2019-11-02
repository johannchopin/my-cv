import * as React from 'react';
import * as ReactDOM from 'react-dom';

// IMPORT LIBRARIES ZONE
import './assets/lib/jquery';
import './assets/lib/bootstrap';
import './assets/lib/fontawesome';

// IMPORT SWIPER LIBRARY ZONE
import Swiper from 'swiper';
import './assets/lib/swiper/swiper.min.css';
// IMPORT SWIPER LIBRARY ZONE

// END IMPORT LIBRARIES ZONE

// IMPORT STYLES ZONE
import './assets/styles/style.scss';
// END IMPORT STYLES ZONE

// IMPORT COMPONENTS ZONE
import Navbar from './assets/uiComponents/navbar/navbar';
import SimpleModal from './assets/uiComponents/simpleModal/simpleModal';
// END IMPORT COMPONENTS ZONE

// IMPORT PAGES ZONE
import IntroductionPage from './pages/introductionPage/introductionPage';
import TimeLinePage from './pages/timeLinePage/timeLinePage';
import SkillsPage from './pages/skillsPage/skillsPage';
import HobbiesPage from './pages/hobbiesPage/hobbiesPage';
import PersonalExperiencesPage from './pages/personalExperiencesPage/personalExperiencesPage';
import ProjectsPage from './pages/projectsPage/projectsPage';
import ContactPage from './pages/contactPage/contactPage';
// END IMPORT PAGES ZONE

// IMPORT IMAGES ZONE   

// @ts-ignore
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


interface IProps { }

interface IState {
    language: TLanguages,
    pageToShow: TPages,
    pagesId: TPagesId,
    simpleModalParams: ISimpleModalParams,
    mySwiper: Swiper,
    currentPageIndex: number,
}

type TPagesId = { [pageName in TPages]: number }
// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            language: 'fr',
            pageToShow: 'introductionPage',
            pagesId: {
                'introductionPage': 0,
                'backgroundPage': 1,
                'skillsPage': 2,
                'personalExperiences': 3,
                'projectsPage': 4,
                'hobbiesPage': 5,
                'contactPage': 6,
            },
            simpleModalParams: {},
            //@ts-ignore
            mySwiper: null,
            currentPageIndex: 0,
        };
    }

    componentDidMount = () => {
        this.init();
    }


    protected init() {
        this.initUI();

        this.setState((prevState: IState) => ({
            mySwiper: this.getInitialisedSwiper()
        }), () => { this.initSwiper() })

    }

    protected initUI() { }

    protected getInitialisedSwiper = (): Swiper => {
        const initialPageId = this.state.pagesId[this.state.pageToShow];

        return new Swiper('.swiper-container', {
            initialSlide: initialPageId,
            preloadImages: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },

            // Pagination
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

            // Scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                draggable: true,
            },
        })
    }

    protected initSwiper = () => {
        this.state.mySwiper.on('slideChangeTransitionEnd', () => {
            this.setState((prevState: IState) => ({
                currentPageIndex: this.state.mySwiper.activeIndex,
            }));
        });
    }

    protected goToPage = (pageName: TPages): void => {
        const pageId = this.state.pagesId[pageName];
        this.state.mySwiper.slideTo(pageId, 1000);
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

    protected navbarRender = (): React.ReactNode => {
        return (
            <Navbar
                goToPage={this.goToPage}
                setLanguage={this.setLanguage}
                language={this.state.language}
            />
        )
    }

    protected introductionPageRender = (): React.ReactNode => {
        return (
            <IntroductionPage
                lang={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
            />
        )
    }

    protected timeLinePageRender = (): React.ReactNode => {
        return (
            <TimeLinePage
                language={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
            />
        )
    }

    protected skillsPageRender = (): React.ReactNode => {
        return (
            <SkillsPage
                language={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
            />
        )
    }

    protected projectsPageRender = (): React.ReactNode => {
        return (
            <ProjectsPage
                language={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
            />
        )
    }

    protected hobbiesPageRender = (): React.ReactNode => {
        return (
            <HobbiesPage
                language={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
                showSimpleModal={this.showSimpleModal}
            />
        )
    }

    protected personalExperiencesPageRender = (): React.ReactNode => {
        return (
            <PersonalExperiencesPage
                language={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
            />
        )
    }

    protected contactPageRender = (): React.ReactNode => {
        return (
            <ContactPage
                language={this.state.language}
                currentPageIndex={this.state.currentPageIndex}
                showSimpleModal={this.showSimpleModal}
            />
        )
    }

    protected modalsRender = (): React.ReactNode => {
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
                        {this.personalExperiencesPageRender()}
                        {this.projectsPageRender()}
                        {this.hobbiesPageRender()}
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