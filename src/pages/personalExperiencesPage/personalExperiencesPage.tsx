import * as React from 'react';

// IMPORT STYLES ZONE
import './personalExperiencesPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT IMAGES ZONE
//@ts-ignore
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../../assets/uiComponents/iconHandler/iconHandler';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import { TLanguages } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    currentPageIndex: number,
    language: TLanguages,
}

interface State {
    pageId: string,
    pageIndex: number,
}


export default class PersonalExperiencesPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'personalExperiencesPage',
            pageIndex: 3, // TODO: don't forget to update this !!
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
                        <a id="hotcityLetter" href="https://cv.johannchopin.fr/img/hotcityRecommandation.pdf" target="_blank">
                            <IconHandler icon="file-alt" />
                            <p>{localize.internship_hotcity.letter_of_recommendation}</p>
                        </a>
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
}