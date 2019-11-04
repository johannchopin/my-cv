import * as React from 'react';

// IMPORT STYLES ZONE
import './projectsPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT IMAGES ZONE
//@ts-ignore
import WalkinloveLogo from '../../assets/img/walkinlove-logo.png';
//@ts-ignore
import CaretakerIcon from '../../assets/img/caretaker-icon.png';
//@ts-ignore
import AdventskalendarIcon from '../../assets/img/adventskalendar-icon.png';
//@ts-ignore
import AstropulseIcon from '../../assets/img/astropulse-icon.png';
//@ts-ignore
import DivaLogo from '../../assets/img/diva-logo.png';
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import ProjectContainer from './components/projectContainer/projectContainer';
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


export default class ProjectsPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'projectsPage',
            pageIndex: 4, // TODO: don't forget to update this !!
        };
    }

    componentDidMount() {
        this.initUI();
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

                <div className="projects-ctn">
                    <ProjectContainer
                        language={this.props.language}
                        link=""
                        title="Caretaker-Smarthome"
                        year={2019}
                        image={CaretakerIcon}
                        summary={localize.project_caretaker.summary}
                        technologiesUsed={["Typescript", "React Framework", "Scss", "Php", "Python"]}
                    />
                    <ProjectContainer
                        language={this.props.language}
                        link=""
                        title="ISFATES-Adventskalender"
                        year={2019}
                        image={AdventskalendarIcon}
                        summary={localize.project_adventskalender.summary}
                        technologiesUsed={["Typescript", "React Framework", "Scss", "Php", "Python"]}
                    />
                    <ProjectContainer
                        language={this.props.language}
                        link="https://astropulse.johannchopin.fr/"
                        title="Astropulse-Experience"
                        year={2018}
                        image={AstropulseIcon}
                        summary={localize.project_astropulse.summary}
                        linkToGitRepo="https://gitlab.com/johannchopin/htw18-19_uxdesign-form"
                        technologiesUsed={['Php', 'Html', 'Css', 'Javascript', 'MySql']}
                    />
                    <ProjectContainer
                        language={this.props.language}
                        link="http://diva.dfhi-isfates.eu/"
                        title="DIVA-Homepage"
                        year={2017}
                        image={DivaLogo}
                        summary={localize.project_diva.summary}
                        technologiesUsed={['Php', 'Html', 'Css', 'Javascript', 'Bootstrap']}
                    />
                    <ProjectContainer
                        language={this.props.language}
                        link="https://test.johannchopin.fr/walkinlove/"
                        title="WalkInLove-Website"
                        year={2017}
                        image={WalkinloveLogo}
                        summary={localize.project_walkinlove.summary}
                        linkToGitRepo="https://gitlab.com/johannchopin/walkinlove-website"
                        technologiesUsed={['Php', 'Html', 'Css', 'Javascript']}
                    />
                </div>
            </div>
        )
    }
}