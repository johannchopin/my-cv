import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Router
} from "react-router-dom";

import history from './history';

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
import LoadingAnimation from './assets/uiComponents/loadingAnimation/loadingAnimation';
// END IMPORT COMPONENTS ZONE

// IMPORT PAGEBASE ZONE
import _PageBase from './pages/pageBase';
const PageBase = new _PageBase();
// END IMPORT PAGEBASE ZONE

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

// IMPORT INTERFACE ZONE
import {
    Page,
    TLanguages,
    ISimpleModalParams
} from './commonInterface';
// END IMPORT INTERFACE ZONE


interface IProps { }

interface IState {
    language: TLanguages,
    initialPage: Page,
    simpleModalParams: ISimpleModalParams,
    mySwiper: Swiper,
    currentPageIndex: number,
}

const pages: Page[] = [
    'introduction',
    'background',
    'skills',
    'experiences',
    'projects',
    'hobbies',
    'contacts'
]

class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            language: 'en',
            initialPage: 'introduction',
            simpleModalParams: {},
            //@ts-ignore
            mySwiper: null,
            currentPageIndex: 0,
        };
    }

    componentDidMount = (): void => {
        this.init();

        history.listen(({ location }) => {
            const path = location.pathname.replace('/', '')
            if (pages.includes(path)) {
                this.goToPage(path as Page)
            }
        })
    }

    protected init() {
        this.initUI();

        this.setState((prevState: IState) => ({
            mySwiper: this.getInitialisedSwiper()
        }), () => { this.initSwiper() })

    }

    protected initUI() {
        this.initBootstrapTooltipsPlugins();
        this.initPageById(0);
    }

    protected initBootstrapTooltipsPlugins = (): void => {
        $((): void => {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    protected getInitialisedSwiper = (): Swiper => {
        const initialPageId = this.getInitialPageId();

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

    protected getInitialPageId = (): number => {
        return this.getPageId(history.location.pathname.replace('/', ''))
    }

    protected initSwiper = () => {
        this.state.mySwiper.on('slideChangeTransitionEnd', () => {
            this.triggerPageChange(this.state.mySwiper.activeIndex);
        });
    }

    protected triggerPageChange = (pageId: number): void => {
        const pageToClearId = this.state.currentPageIndex;

        this.setState((prevState: IState) => ({
            currentPageIndex: pageId,
        }), (): void => {
            this.initPageById(pageId);
            this.clearPageById(pageToClearId);
        });
    }

    protected getPageIdBySwiperIndex = (swiperIndex: number): Page => {
        return pages[swiperIndex];
    }

    protected initPageById = (pageId: number): void => {
        const pageName = this.getPageIdBySwiperIndex(pageId);

        PageBase.initPage(pageName);
    }

    protected clearPageById = (pageId: number): void => {
        const pageName = this.getPageIdBySwiperIndex(pageId);

        PageBase.clearPage(pageName);
    }

    protected getPageId = (pageName: string): number => {
        switch (pageName) {
            case 'introduction':
                return 0;
            case 'background':
                return 1;
            case 'skills':
                return 2;
            case 'hobbies':
                return 3;
            case 'experiences':
                return 4;
            case 'projects':
                return 5;
            case 'contacts':
                return 6;

            default:
                return 0;
        }
    }

    protected goToPage = (pageName: Page): void => {
        const pageId = this.getPageId(pageName)
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
            <Router history={history}>
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
                <LoadingAnimation />
            </Router>
        )
    }
}

ReactDOM.render(
    <App />
    ,
    document.getElementById('app') as HTMLElement
);