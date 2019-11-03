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

    protected page: JQuery;
    protected swypeIndication: JQuery;

    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'introductionPage',
            pageIndex: 0,
        };
    }

    componentDidMount = (): void => {
        this.init();
    }

    protected init = (): void => {
        this.initUI();
    }

    protected initUI = (): void => {
        this.page = $(`#${this.state.pageId}`);
        this.swypeIndication = $(`#${this.state.pageId} #swipeIndication`);

        this.initSwypeIndicationAnimation();
    }

    protected initSwypeIndicationAnimation(): void {
        this.page.on("click", (): void => {
            this.swypeIndication.css({
                animation: "goDown .5s forwards",
            });
        });
    }


    render(): React.ReactNode {
        const localize = LOCALIZE[this.props.lang];

        return (
            <div id={this.state.pageId} className="swiper-slide not-scrollable">
                <header>
                    <h1 id="slide_0_h1" className="animate-me">Chopin Johann</h1>

                    <p id="slide_0_p" className="animate-me">- {localize.student} -</p>

                    <div id="waveSvg" className="animate-me animation-topApparition">
                        <WaveSvg />
                    </div>
                </header>

                <div className="my-face-ctn">
                    <img id="slide_0_img" className="animate-me" src={myNiceFace} />
                </div>

                <p className="presentation-text animate-me">
                    {localize.introduction_text}
                </p>

                <div id="swipeIndication" className="animate-me animation-goUp">
                    <p>{localize.swipe_indication}</p>
                    <IconHandler icon="arrow-right" className="with-pl" />
                </div>
            </div>
        )
    }
}