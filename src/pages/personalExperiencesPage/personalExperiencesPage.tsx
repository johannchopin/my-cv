import * as React from 'react';

// IMPORT STYLES ZONE
import './personalExperiencesPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import { useLocalize } from '~helpers/useLocalize';
// END IMPORT LOCALIZE ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../components/Icon/Icon';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import { Language } from '../../commonInterface';
import Localize from '~Localize';
// END IMPORT INTERFACE ZONE


const PersonalExperiencesPage: React.FC = () => {
    return (
        <div id="experiences" className="swiper-slide">
            <h1 className="animate-me slide-title">
                🗂️ <Localize translations={localize.title} />
            </h1>

            <div id="experiencesCtn">

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.work_anynines) }}></p>
                </div>
                
                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.work_eurokey.introduction) }}></p>
                    <br />
                    <p><Localize translations={localize.work_eurokey.complement} /></p>
                </div>

                <div id="hotcityInternship" className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.internship_hotcity) }}></p>
                    <br />
                    <a id="hotcityLetter" href="https://github.com/johannchopin/my-cv/raw/main/static/hotcity-recommendation-letter.pdf" target="_blank">
                        <Icon icon="file-download" />
                        <p><Localize translations={localize.letter_of_recommendation} /></p>
                    </a>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.hackaton_lux) }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.battledev) }}></p>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.diva) }}></p>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.cnrs) }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.tpe) }}></p>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.ecpm) }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.pirmasens) }}></p>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.pirmasens) }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.summer_camp) }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.concert) }}></p>
                </div>

            </div>
        </div>
    )
}

export default PersonalExperiencesPage