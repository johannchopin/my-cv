import * as React from 'react';

// IMPORT STYLES ZONE
import './personalExperiencesPage.scss';
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
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../../assets/uiComponents/iconHandler/iconHandler';
// END IMPORT COMPONENTS ZONE


// INIT HELPERS METHODS ZONE
import _Helper from '../../helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

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

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

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

    protected clearUI(): void { }

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
                <h1 className="animate-me slide-title">Experiences</h1>

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
                        <p>
                            Travail de recherche dans les laboratoires du <i>CNRS</i> de Strasbourg dans le cadre des
							TPE<br /><br />
                            Participation au <i>Congrès Trinational des Sciences et des Techniques</i> avec présentation
							orale (projet d’étude: Les nanotubes de carbone révolutionneront-ils le dépistage du
							cancer?)
						</p>
                    </div>

                    <div className="animate-me">
                        <p>
                            Participation aux Olympiades Nationales de Chimie à l’<i>ECPM</i> de Strasbourg<br /><br />
                            Journée de recherche scientifique avec des étudiants allemands de la <i>Hochschule</i> de
							Pirmasens
						</p>
                    </div>

                    <div className="animate-me">
                        <p>
                            Participation à de nombreuses <i>colonies</i> de vacances en France et à l'étranger (Grèce,
							Suède, Norvège, Islande, Malte, Canada) en semi-autonomie<br /><br />
                            Représentations de <i>concerts</i> en tant que guitariste
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}