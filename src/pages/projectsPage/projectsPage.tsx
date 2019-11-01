import * as React from 'react';

// IMPORT STYLES ZONE
import './projectsPage.scss';
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
import WalkinloveLogo from '../../assets/img/walkinlove-logo.png';
//@ts-ignore
import CaretakerIcon from '../../assets/img/caretaker-icon.png';
//@ts-ignore
import AdventskalendarIcon from '../../assets/img/adventskalendar-icon.png';
//@ts-ignore
import AstropulseIcon from '../../assets/img/astropulse-icon.png';
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../../assets/uiComponents/iconHandler/iconHandler';
import ProjectContainer from './components/projectContainer/projectContainer';
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


export default class ProjectsPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'myProjectsPage',
            pageIndex: 4, // TODO: don't forget to update this !!
        };
    }

    componentDidMount() {
        // TODO: Do something
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
        }
    }


    render() {
        const localize = LOCALIZE[this.props.language];

        return (
            <div id={this.state.pageId} className="swiper-slide">
                <h1 className="animate-me slide-title">{localize.title}</h1>

                <div className="projects-ctn">
                    <ProjectContainer
                        link=""
                        title="Caretaker-Smarthome"
                        year={2019}
                        image={CaretakerIcon}
                        summary="This is my L3 big project at ISFATES. We have to create a smarthome that is connected to an app. I was the project manager and and the IT manager of the project."
                        technologiesUsed={["Typescript", "React Framework", "Scss", "PhP", "Python"]}
                    />
                    <ProjectContainer
                        link=""
                        title="ISFATES-Adventskalendar"
                        year={2019}
                        image={AdventskalendarIcon}
                        summary="This is my L3 big project at ISFATES. We have to create a smarthome that is connected to an app. I was the project manager and and the IT manager of the project."
                        technologiesUsed={["Typescript", "React Framework", "Scss", "PhP", "Python"]}
                    />
                    <ProjectContainer
                        link="https://astropulse.johannchopin.fr/"
                        title="Astropulse-Experience"
                        year={2018}
                        image={AstropulseIcon}
                        summary="My first completed PHP website create at ISFATES"
                        linkToGitRepo="https://gitlab.com/johannchopin/htw18-19_uxdesign-form"
                        technologiesUsed={['php', 'html', 'css', 'javascript', 'mysql']}
                    />
                    <ProjectContainer
                        link="https://test.johannchopin.fr/walkinlove/"
                        title="WalkInLove-Website"
                        year={2017}
                        image={WalkinloveLogo}
                        summary="My first completed PHP website create at ISFATES"
                        linkToGitRepo="https://gitlab.com/johannchopin/walkinlove-website"
                        technologiesUsed={['php', 'html', 'css', 'javascript']}
                    />
                </div>
            </div>
        )
    }
}