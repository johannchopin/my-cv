import * as React from 'react';

// IMPORT STYLES ZONE
import './introductionPage.scss';
// END IMPORT STYLES ZONE

// IMPORT PAGEBASE ZONE
import _pageBase from '../pageBase';
const PageBase = new _pageBase();
// END IMPORT PAGEBASE ZONE

// IMPORT IMAGES ZONE
//@ts-ignore
import myNiceFace from './assets/img/myNiceFace.png';
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
// END IMPORT COMPONENTS ZONE


// INIT HELPERS METHODS ZONE
import _Helper from '../../helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import {
} from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    currentPageIndex: number,
}

interface State {
    pageId: string,
    pageIndex: number,
}

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

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
            PageBase.clearPage(this.state.pageId);
        }
    }

    render() {
        return (
            <div id={this.state.pageId} className="swiper-slide">
                <div className="header_slide_0">
                    <h1 id="slide_0_h1" className="animate-me">Chopin Johann</h1>
                    <p id="slide_0_p" className="animate-me">- Étudiant en Informatique -</p>
                </div>
                <div className="img_container">
                    <img id="slide_0_img" className="animate-me" src={myNiceFace} />
                </div>
                <p className="presentation_slide_0 animate-me" id="presentation_slide_0">
                    "Étudiant de 19 ans à l'Institut Supérieur Franco-Allemand de Techniques, d’Économies et de Sciences
					(<i>ISFATES</i>), je me passionne depuis plusieurs annéees déjà à l'informatique et au web plus
                            précisement. Ambitieux et volontaire, j'espère correspondre au profil que vous recherchez."
				</p>
                <div id="indication" className="animate-me">
                    <p>Swiper vers la droite pour parcourir mon CV</p>
                    <img src="img/fleche.png" />
                </div>
            </div>
        )
    }
}