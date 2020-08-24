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

// IMPORT STYLES ZONE
import './assets/styles/style.scss';
// END IMPORT STYLES ZONE

// IMPORT COMPONENTS ZONE
import Navbar from './assets/uiComponents/Navbar/Navbar';
import SimpleModal from './assets/uiComponents/simpleModal/simpleModal';
import LoadingAnimation from './assets/uiComponents/LoadingAnimation/LoadingAnimation';
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

// IMPORT INTERFACE ZONE
import {
    Page,
    Language,
    SimpleModalParams
} from './commonInterface';
// END IMPORT INTERFACE ZONE


interface State {
    language: Language,
    initialPage: Page,
    simpleModalParams: SimpleModalParams,
    mySwiper: Swiper,
    currentPageIndex: number,
}

const pages: Page[] = [
    'presentation',
    'background',
    'skills',
    'experiences',
    'projects',
    'hobbies',
    'contacts'
]

const App: React.FC = () => {
    const getPageId = (pageName: string): number => {
        const pageId = pages.findIndex(page => page === pageName)

        return pageId !== -1 ? pageId : 0
    }

    const getInitialPageId = (): number => {
        return getPageId(history.location.pathname.replace('/', ''))
    }

    const [language, setLanguage] = React.useState<Language>('en');
    const [simpleModalParams, setSimpleModalParams] = React.useState<SimpleModalParams | null>(null)
    const [swiper, setSwiper] = React.useState<Swiper | null> (null)
    const [currentPage, setCurrentPage] = React.useState<Page> (pages[getInitialPageId()])
    
    const init = () => {
        initBootstrapTooltipsPlugins();
        setSwiper(getInitialisedSwiper())
    }
    
    const initBootstrapTooltipsPlugins = (): void => {
        $((): void => {
            $('[data-toggle="tooltip"]').tooltip()
        });
    }

    const getInitialisedSwiper = (): Swiper => {
        const initialPageId = getInitialPageId();

        const swiperToInit = new Swiper('.swiper-container', {
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

        initPageById(getInitialPageId());

        return swiperToInit;
    }
   
    const triggerPageChange = (newPageId: number, previousPageId: number): void => {
        setCurrentPage(pages[newPageId])

        initPageById(newPageId);
        clearPageById(previousPageId);

        history.push(pages[newPageId]);
    }

    const initPageById = (pageId: number): void => {
        PageBase.initPage(pages[pageId]);
    }

    const clearPageById = (pageId: number): void => {
        PageBase.clearPage(pages[pageId]);
    }

    const goToPage = (pageName: Page): void => {
        const pageId = getPageId(pageName)
        swiper.slideTo(pageId, 1000);
    };

    const showSimpleModal = (params: SimpleModalParams): void => {
        setSimpleModalParams(params)

        // Hide simple modal after 2.3s
        setTimeout(() => {
            $('#simpleModal').modal('hide');
        }, 2300);
    };

    const navbarRender = (): React.ReactNode => {
        return (
            <Navbar
                goToPage={goToPage}
                setLanguage={setLanguage}
                language={language}
            />
        )
    }

    const introductionPageRender = (): React.ReactNode => {
        return (
            <IntroductionPage
                language={language}
            />
        )
    }

    const timeLinePageRender = (): React.ReactNode => {
        return (
            <TimeLinePage
                language={language}
            />
        )
    }

    const skillsPageRender = (): React.ReactNode => {
        return (
            <SkillsPage
                language={language}
                active={currentPage === 'skills'}
            />
        )
    }

    const projectsPageRender = (): React.ReactNode => {
        return (
            <ProjectsPage
                language={language}
            />
        )
    }

    const hobbiesPageRender = (): React.ReactNode => {
        return (
            <HobbiesPage
                language={language}
            />
        )
    }

    const personalExperiencesPageRender = (): React.ReactNode => {
        return (
            <PersonalExperiencesPage
                language={language}
            />
        )
    }

    const contactPageRender = (): React.ReactNode => {
        return (
            <ContactPage
                language={language}
                showSimpleModal={showSimpleModal}
            />
        )
    }

    const modalsRender = (): React.ReactNode => {
        return (
            <div id="modals">
                <SimpleModal 
                    type={simpleModalParams?.type? simpleModalParams.type : 'success'}
                    message={simpleModalParams?.message? simpleModalParams.message : ''}
                />
            </div>
        );
    }

    const initSwiper = (): void => {
        swiper.on('slideChangeTransitionEnd', () => {
            triggerPageChange(swiper.activeIndex, swiper.previousIndex);
        });

        history.listen(({ location }) => {
            const path = location.pathname.replace('/', '')
            if (pages.includes(path as Page)) {
                goToPage(path as Page)
            }
        })
    }

    React.useEffect(() => {
        init();
    }, [])

    React.useEffect(() => {
        if (swiper !== null) {
            initSwiper()
        }
    }, [swiper])

    React.useEffect(() => {
        if (simpleModalParams !== null) {
            $('#simpleModal').modal();
        }
    }, [simpleModalParams])

    return (
        <Router history={history}>
            {navbarRender()}

            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {introductionPageRender()}
                    {timeLinePageRender()}
                    {skillsPageRender()}
                    {personalExperiencesPageRender()}
                    {projectsPageRender()}
                    {hobbiesPageRender()}
                    {contactPageRender()}
                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev" id="swiper-button-prev"></div>
                <div className="swiper-button-next" id="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
            </div>

            {modalsRender()}
            <LoadingAnimation />
        </Router>
    )
}

ReactDOM.render(
    <App />
    ,
    document.getElementById('app') as HTMLElement
);