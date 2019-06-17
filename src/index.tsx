import * as React from 'react';
import * as ReactDOM from 'react-dom';

// IMPORT LIBRARIES ZONE
import './assets/lib/jquery';

// IMPORT SWIPER LIBRARY ZONE
import Swiper from 'swiper';
import './assets/lib/swiper/swiper.min.css';
// IMPORT SWIPER LIBRARY ZONE

// END IMPORT LIBRARIES ZONE

// IMPORT STYLES ZONE
import './assets/styles/style.scss';
// END IMPORT STYLES ZONE

// IMPORT COMPONENTS ZONE
// END IMPORT COMPONENTS ZONE

// IMPORT PAGES ZONE
import IntroductionPage from './pages/introductionPage/introductionPage';
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
    TLanguages
} from './commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
}

interface State {
    language: TLanguages,
    pageToShow: TPages,
}

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            language: 'en',
            pageToShow: 'introductionPage',
        };
    }

    componentDidMount = () => {
        setTimeout(() => this.init(), 0);
    }


    protected init() {
        this.initUI();

        const mySwiper = new Swiper('.swiper-container', {
            //initialSlide: 0,
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
        });
    }

    protected initUI() {
        Helper.setFavicon(Favicon);
    }

    protected goToPage = (pageName: TPages): void => {
        this.setState({
            pageToShow: pageName,
        })
    };

    protected setLanguage = (language: TLanguages) => {
        this.setState({
            language: language,
        });
    };

    protected introductionPageRender = () => {
        return (
            <IntroductionPage />
        )
    }


    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.introductionPageRender()}

                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev" id="swiper-button-prev"></div>
                <div className="swiper-button-next" id="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app') as HTMLElement
);