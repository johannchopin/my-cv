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
                <h1 className="animate-me">Mon parcours:</h1>

                <div id="timeline-content">
                    <h1>Timeline</h1>

                    <ul className="timeline">
                        <li className="event" data-date="65Million B.C.">
                            <h3>Dinosaurs Roamed the Earth</h3>
                            <p>RAWWWWWWRRR 🐢🦂</p>
                        </li>
                        <li className="event" data-date="2005">
                            <h3>Creative Component Launched</h3>
                            <p>"We can be all things to all people!" 📣</p>
                        </li>
                        <li className="event" id="date" data-date="2009">
                            <h3>Squareflair was Born</h3>
                            <p>"We can be all things to Squarespace users!" 📣</p>
                        </li>

                        <li className="event" data-date="November 15, 2018">

                            <h3>Squareflair Today</h3>

                            <p>"We design and build from scratch!" 📣</p>
                            <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p>
                            <p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em>? <br />🤜💥🤛</p>

                            <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>

                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}