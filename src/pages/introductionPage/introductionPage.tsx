import * as React from 'react';

// IMPORT STYLES ZONE
import './introductionPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT PAGEBASE ZONE
import _pageBase from '../pageBase';
const PageBase = new _pageBase();
// END IMPORT PAGEBASE ZONE

// IMPORT IMAGES ZONE
//@ts-ignore
import myNiceFace from './assets/img/myNiceFace.png';
//@ts-ignore
import WaveSvg from '../../assets/img/wave-design.svg';
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../../assets/uiComponents/iconHandler/iconHandler';
// END IMPORT COMPONENTS ZONE


// INIT HELPERS METHODS ZONE
import _Helper from '../../helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import { TLanguages } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    lang: TLanguages
    currentPageIndex: number,
}

interface State {
    pageId: string,
    pageIndex: number,
}


export default class IntroductionPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'introductionPage',
            pageIndex: 0,
        };
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate(oldProps: Props) {
        const newProps = this.props;

        if (oldProps.currentPageIndex !== newProps.currentPageIndex) {
            this.onPageChange();
        }
    }

    protected init = (): void => {
        this.initUI();
    }

    protected initUI(): void {
        PageBase.initPage(this.state.pageId);
    }

    protected clearUI(): void {
        PageBase.clearPage(this.state.pageId);
    }

    protected onPageChange(): void {
        if (this.props.currentPageIndex === this.state.pageIndex) {
            this.init();
        } else {
            this.clearUI();
        }
    }

    render() {
        const localize = LOCALIZE[this.props.lang];

        return (
            <div id={this.state.pageId} className="swiper-slide">
                <header>
                    <h1 id="slide_0_h1" className="animate-me">Chopin Johann</h1>

                    <p id="slide_0_p" className="animate-me">- Étudiant en Informatique -</p>

                    <div id="waveSvg" className="animate-me animation-topApparition">
                        <WaveSvg />
                    </div>
                </header>

                <div className="my-face-ctn">
                    <img id="slide_0_img" className="animate-me" src={myNiceFace} />
                </div>

                <p className="presentation-text animate-me">
                    {localize["introduction_text"]}
                </p>
                <div id="indication" className="animate-me">
                    <p>Swiper vers la droite pour parcourir mon CV</p>
                    <IconHandler icon="arrow-right" />
                </div>
            </div>
        )
    }
}