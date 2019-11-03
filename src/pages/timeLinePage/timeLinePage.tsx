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

    protected init = (): void => {
        this.initUI();
    }

    protected initUI(): void { }


    render() {
        const localize = LOCALIZE[this.props.language];

        return (
            <div id={this.state.pageId} className="swiper-slide">
                <h1 className="animate-me slide-title">
                    {localize.title}
                </h1>

                <div id="timeline-content">
                    <ul className="timeline">
                        <li className="event animate-me animation-goUp">
                            <p className="event-date">2018-2019</p>

                            <h2>{localize.year_2018.htw.title}</h2>
                        </li>
                        <li className="event animate-me animation-goUp">
                            <p className="event-date">2017-2018</p>

                            <h2 dangerouslySetInnerHTML={{ __html: localize.year_2017.start_isfates.title }}></h2>
                            <p>Institut Supérieur Franco-Allemand de Techniques, d'Economie et de Sciences</p>

                            <h2>{localize.year_2017.bac.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: localize.year_2017.bac.complement }}></p>
                        </li>
                        <li className="event animate-me animation-goUp">
                            <p className="event-date">2014-2015</p>

                            <h2>{localize.year_2014.brevet}</h2>
                            <h2>{localize.year_2014.c1_certificate}</h2>
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}