import * as React from 'react';

// IMPORT STYLES ZONE
import './timeLinePage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT PAGEBASE ZONE
import _pageBase from '../pageBase';
const PageBase = new _pageBase();
// END IMPORT PAGEBASE ZONE

// IMPORT IMAGES ZONE
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
// END IMPORT COMPONENTS ZONE


// INIT HELPERS METHODS ZONE
import _Helper from '../../helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import { TLanguages } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    language: TLanguages
    currentPageIndex: number,
}

interface State {
    pageId: string,
    pageIndex: number,
}

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

export default class TimeLinePage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'timeLinePage',
            pageIndex: 1,
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
        const localize = LOCALIZE[this.props.language];

        return (
            <div id={this.state.pageId} className="swiper-slide">
                <h1 className="animate-me">
                    {localize.my_background}
                </h1>

                <div id="timeline-content">
                    <ul className="timeline">
                        <li className="event animate-me animation-goUp">
                            <p className="event-date">2018</p>
                            <h2>J'effectue ma deuxième année<i>DIVA</i></h2>
                            <p>La DIVA (DFHI-Isfates-Verein-Association) est l’association étudiante de l’ISFATES</p>
                        </li>
                        <li className="event animate-me animation-goUp">
                            <p className="event-date">2017</p>
                            <h2>Nomination au poste de reponsable informatique de la <i>DIVA</i></h2>
                            <p>La DIVA (DFHI-Isfates-Verein-Association) est l’association étudiante de l’ISFATES</p>
                            <h2>Début de mes études en informatique à l'<i>ISFATES</i></h2>
                            <p>Institut supérieur franco-allemand de techniques, d'économie et de sciences</p>
                            <p></p>
                            <h2>J'obtiens en 2017 mon BAC S</h2>
                            <p>(option section européenne physique-chimie en allemand et Langues et cultures de l'antiquité: latin) avec mention '<i>Bien</i>'</p>
                        </li>
                        <li className="event animate-me animation-goUp">
                            <p className="event-date">2014</p>
                            <h2>Obtention du brevet des collèges, mention 'Très bien'</h2>
                            <h2>Certification B1 en allemand, KMK</h2>
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}