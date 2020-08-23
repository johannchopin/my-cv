import * as React from 'react';

// IMPORT STYLES ZONE
import './personalExperiencesPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../assets/uiComponents/Icon/Icon';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import { TLanguages } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface PersonalExperiencesPageProps {
    language: TLanguages,
}


const PersonalExperiencesPage: React.FC<PersonalExperiencesPageProps> = (props) => {
    const { language } = props;

    const localize = LOCALIZE[language];

    return (
        <div id="experiences" className="swiper-slide">
            <h1 className="animate-me slide-title">{localize.title}</h1>

            <div id="experiencesCtn">

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: localize.work_eurokey.introduction }}></p>
                    <br />
                    <p>{localize.work_eurokey.complement}</p>
                    <br />
                    <ul>
                        {localize.work_eurokey.tasks.map((task: string, i: number): React.ReactNode => {
                            return <li key={i}>{task}</li>
                        })}
                    </ul>
                </div>

                <div id="hotcityInternship" className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: localize.internship_hotcity.introduction }}></p>
                    <br />
                    <a id="hotcityLetter" href="https://cv.johannchopin.fr/2019/assets/pdf/hotcity.pdf" target="_blank">
                        <Icon icon="file-alt" />
                        <p>{localize.internship_hotcity.letter_of_recommendation}</p>
                    </a>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: localize.coding_contest.hackaton_lux }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: localize.coding_contest.battledev }}></p>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: localize.diva }}></p>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: localize.school.cnrs }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: localize.school.tpe }}></p>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: localize.school.ecpm }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: localize.school.pirmasens }}></p>
                </div>

                <div className="animate-me">
                    <p dangerouslySetInnerHTML={{ __html: localize.school.pirmasens }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: localize.summer_camp }}></p>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: localize.concert }}></p>
                </div>

            </div>
        </div>
    )
}

export default PersonalExperiencesPage