import * as React from 'react';

// IMPORT STYLES ZONE
import './timeLinePage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT INTERFACE ZONE
import { Language } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface TimeLinePageProps {
    language: Language
}

const TimeLinePage: React.FC<TimeLinePageProps> = (props) => {
    const { language } = props

    const localize = LOCALIZE[language];

    return (
        <div id="background" className="swiper-slide">
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
                        <p>{localize.year_2017.start_isfates.complement}</p>

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

export default TimeLinePage;