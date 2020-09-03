import * as React from 'react';

// IMPORT STYLES ZONE
import './projectsPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import { useLocalize } from '~helpers/useLocalize';
import Localize from '~Localize';
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


const ProjectsPage: React.FC = () => {
    return (
        <div id="projects" className="swiper-slide">
            <h1 className="animate-me slide-title">
                <Localize translations={localize.title} />
            </h1>

            <div className="projects-ctn">
                <ProjectContainer
                    link="https://github.com/johannchopin/gitmoji-browser-extension"
                    title="Gitmoji Browser Extension"
                    year={2020}
                    image={GitmojiLogo}
                    summary={useLocalize(localize.gitmoji_browser_extension)}
                    linkToGitRepo="https://github.com/johannchopin/gitmoji-browser-extension"
                    technologiesUsed={['sveltejs', 'html', 'css', 'browser-extension']}
                />
                <ProjectContainer
                    link="https://caretaker-smarthome.eu/"
                    title="Caretaker-Smarthome"
                    year={2019}
                    image={CaretakerIcon}
                    summary={useLocalize(localize.caretaker)}
                    linkToGitRepo="https://gitlab.com/caretaker-smarthome"
                    technologiesUsed={['typescript', 'reactjs', 'scss', 'php', 'python']}
                />
                <ProjectContainer
                    link="https://isfates-adventskalender.eu/"
                    title="ISFATES-Adventskalender"
                    year={2019}
                    image={AdventskalendarIcon}
                    summary={useLocalize(localize.adventskalender)}
                    linkToGitRepo="https://gitlab.com/isfates_adventskalender"
                    technologiesUsed={['typescript', 'reactjs', 'scss', 'php', 'python']}
                />
                <ProjectContainer
                    link="https://forum-jgr.com/"
                    title="Zukunftsforum-Website"
                    year={2019}
                    image={ZukunftsforumLogo}
                    summary={useLocalize(localize.zukunftsforum)}
                    technologiesUsed={['wordpress', 'php', 'html', 'css']}
                />
                <ProjectContainer
                    link="https://astropulse.johannchopin.fr/"
                    title="Astropulse-Experience"
                    year={2018}
                    image={AstropulseIcon}
                    summary={useLocalize(localize.astropulse)}
                    linkToGitRepo="https://gitlab.com/johannchopin/htw18-19_uxdesign-form"
                    technologiesUsed={['php', 'html', 'css', 'javascript', 'mysql']}
                />
                <ProjectContainer
                    link="http://diva.dfhi-isfates.eu/"
                    title="DIVA-Website"
                    year={2017}
                    image={DivaLogo}
                    summary={useLocalize(localize.diva)}
                    technologiesUsed={['php', 'html', 'css', 'javascript', 'bootstrap']}
                />
                <ProjectContainer
                    link="https://test.johannchopin.fr/walkinlove/"
                    title="WalkInLove-Website"
                    year={2017}
                    image={WalkinloveLogo}
                    summary={useLocalize(localize.walkinlove)}
                    linkToGitRepo="https://gitlab.com/johannchopin/walkinlove-website"
                    technologiesUsed={['php', 'html', 'css', 'javascript']}
                />
            </div>
        </div>
    )
}

export default ProjectsPage
