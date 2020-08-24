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
//@ts-ignore
import ZukunftsforumLogo from '../../assets/img/zukunftsforum-icon.png';
//@ts-ignore
import GitmojiLogo from '../../assets/img/gitmoji.png';
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import ProjectContainer from './components/projectContainer/projectContainer';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import { Language } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


export interface ProjectsPageProps {
    language: Language,
}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
    const { language } = props;

    const localize = LOCALIZE[language];

    return (
        <div id="projects" className="swiper-slide">
            <h1 className="animate-me slide-title">{localize.title}</h1>

            <div className="projects-ctn">
                <ProjectContainer
                    language={language}
                    link="https://github.com/johannchopin/gitmoji-browser-extension"
                    title="Gitmoji Browser Extension"
                    year={2020}
                    image={GitmojiLogo}
                    summary={localize.project_gitmoji_browser_extension.summary}
                    linkToGitRepo="https://github.com/johannchopin/gitmoji-browser-extension"
                    technologiesUsed={['sveltejs', 'html', 'css']}
                />
                <ProjectContainer
                    language={language}
                    link="https://caretaker-smarthome.eu/"
                    title="Caretaker-Smarthome"
                    year={2019}
                    image={CaretakerIcon}
                    summary={localize.project_caretaker.summary}
                    linkToGitRepo="https://gitlab.com/caretaker-smarthome"
                    technologiesUsed={['typescript', 'reactjs', 'scss', 'php', 'python']}
                />
                <ProjectContainer
                    language={language}
                    link="https://isfates-adventskalender.eu/"
                    title="ISFATES-Adventskalender"
                    year={2019}
                    image={AdventskalendarIcon}
                    summary={localize.project_adventskalender.summary}
                    linkToGitRepo="https://gitlab.com/isfates_adventskalender"
                    technologiesUsed={['typescript', 'reactjs', 'scss', 'php', 'python']}
                />
                <ProjectContainer
                    language={language}
                    link="https://forum-jgr.com/"
                    title="Zukunftsforum-Website"
                    year={2019}
                    image={ZukunftsforumLogo}
                    summary={localize.project_zukunftsforum.summary}
                    technologiesUsed={['wordpress', 'php', 'html', 'css']}
                />
                <ProjectContainer
                    language={language}
                    link="https://astropulse.johannchopin.fr/"
                    title="Astropulse-Experience"
                    year={2018}
                    image={AstropulseIcon}
                    summary={localize.project_astropulse.summary}
                    linkToGitRepo="https://gitlab.com/johannchopin/htw18-19_uxdesign-form"
                    technologiesUsed={['php', 'html', 'css', 'javascript', 'mysql']}
                />
                <ProjectContainer
                    language={language}
                    link="http://diva.dfhi-isfates.eu/"
                    title="DIVA-Website"
                    year={2017}
                    image={DivaLogo}
                    summary={localize.project_diva.summary}
                    technologiesUsed={['php', 'html', 'css', 'javascript', 'bootstrap']}
                />
                <ProjectContainer
                    language={language}
                    link="https://test.johannchopin.fr/walkinlove/"
                    title="WalkInLove-Website"
                    year={2017}
                    image={WalkinloveLogo}
                    summary={localize.project_walkinlove.summary}
                    linkToGitRepo="https://gitlab.com/johannchopin/walkinlove-website"
                    technologiesUsed={['php', 'html', 'css', 'javascript']}
                />
            </div>
        </div>
    )
}

export default ProjectsPage