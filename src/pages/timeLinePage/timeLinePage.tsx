import * as React from 'react';

// IMPORT STYLES ZONE
import './timeLinePage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import Localize from '~Localize';
import { useLocalize } from '~helpers/useLocalize';
// END IMPORT LOCALIZE ZONE

// IMPORT INTERFACE ZONE
import { Language } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface TimeLinePageProps {
    language: Language
}

const TimeLinePage: React.FC<TimeLinePageProps> = (props) => {
    const { language } = props

    return (
        <div id="background" className="swiper-slide">
            <h1 className="animate-me slide-title">
                <Localize translations={localize.title}/>
            </h1>

            <div id="timeline-content">
                <ul className="timeline">
                    <li className="event animate-me animation-goUp">
                        <p className="event-date">2018-2019</p>

                        <h2>
                            <Localize translations={localize.htw_start} />
                        </h2>
                    </li>
                    <li className="event animate-me animation-goUp">
                        <p className="event-date">2017-2018</p>

                        <h2 dangerouslySetInnerHTML={{ __html: useLocalize(localize.start_isfates) }}></h2>
                        <p><Localize translations={localize.start_isfates_description} /></p>

                        <h2><Localize translations={localize.bac} /></h2>
                        <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.bac_description)}}></p>
                    </li>
                    <li className="event animate-me animation-goUp">
                        <p className="event-date">2014-2015</p>

                        <h2><Localize translations={localize.brevet} /></h2>
                        <h2><Localize translations={localize.c1_certificate} /></h2>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default TimeLinePage;