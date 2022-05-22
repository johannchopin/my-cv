import * as React from 'react';
import Emoji from 'a11y-react-emoji';

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
//@ts-ignore
import RestapifyLogo from '../../assets/img/restapify-icon.png';
//@ts-ignore
import UxExperimentIcon from '../../assets/img/ux-experiment-icon.png';
//@ts-ignore
import DSLVLogo from '../../assets/img/DSLV-logo.jpeg';
//@ts-ignore
import CleanCssIcon from '../../assets/img/clean-css-icon.png';
//@ts-ignore
import UnivLorraineLogo from '../../assets/img/univ-lorraine-logo.png';
//@ts-ignore
import SOReadmeProfileLogo from '../../assets/img/stackoverflow-readme-profile-logo.png';
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import ProjectContainer from './components/projectContainer/projectContainer';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import { Language } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


// C O M P O N E N T
const ProjectsPage: React.FC = () => {
    return (
        <div id="projects" className="swiper-slide">
            <h1 className="animate-me slide-title">
                <Emoji symbol='🚀' className='mr-2' />
                <Localize translations={localize.title} />
            </h1>

            <div className="projects-ctn">
                <ProjectContainer
                    link="https://johannchopin.github.io/stackoverflow-readme-profile/"
                    title="stackoverflow-readme-profile"
                    year={2022}
                    image={SOReadmeProfileLogo}
                    summary={useLocalize(localize['stackoverflow-readme-profile'])}
                    linkToGitRepo="https://github.com/johannchopin/stackoverflow-readme-profile"
                    technologiesUsed={['nodejs', 'handlebars', 'svg', 'docker']}
                />
                <ProjectContainer
                    title="Université de lorraine - eDPINFO"
                    year={2021}
                    image={UnivLorraineLogo}
                    summary={useLocalize(localize.edpinfo)}
                    technologiesUsed={['angular', 'typeorm', 'jira', 'OAuth']}
                />
                <ProjectContainer
                    link="https://ux-typing-experiment-five.vercel.app/"
                    title="ux-typing-experiment"
                    year={2021}
                    image={UxExperimentIcon}
                    summary={useLocalize(localize['ux-typing-experiment'])}
                    linkToGitRepo="https://github.com/Lyokolux/ux-typing-experiment"
                    technologiesUsed={['sveltekit', 'firestore', 'typescript', 'highcharts']}
                />
                <ProjectContainer
                    title="DSLV Niedersachsen's events dashboard"
                    year={2021}
                    image={DSLVLogo}
                    summary={useLocalize(localize['dslv-niedersachsen'])}
                    technologiesUsed={['react', 'express', 'typeorm', 'mongodb', 'nodemailer']}
                />
                <ProjectContainer
                    link="http://restapify.vercel.app/"
                    title="Restapify"
                    year={2021}
                    image={RestapifyLogo}
                    summary={useLocalize(localize.restapify)}
                    linkToGitRepo="https://github.com/johannchopin/restapify"
                    technologiesUsed={['typescript', 'express', 'svelte']}
                />
                <ProjectContainer
                    link="https://clean-css.github.io/"
                    title="clean-css website"
                    year={2021}
                    image={CleanCssIcon}
                    summary={useLocalize(localize['clean-css-website'])}
                    linkToGitRepo="https://github.com/clean-css/clean-css.github.io"
                    technologiesUsed={['svelte', 'bootstrap', 'github pages']}
                />
                <ProjectContainer
                    link="https://github.com/johannchopin/gitmoji-browser-extension"
                    title="Gitmoji Browser Extension"
                    year={2020}
                    image={GitmojiLogo}
                    summary={useLocalize(localize.gitmoji_browser_extension)}
                    linkToGitRepo="https://github.com/johannchopin/gitmoji-browser-extension"
                    technologiesUsed={['svelte', 'html', 'css', 'browser-extension']}
                />
                <ProjectContainer
                    title="Caretaker-Smarthome"
                    year={2019}
                    image={CaretakerIcon}
                    summary={useLocalize(localize.caretaker)}
                    linkToGitRepo="https://gitlab.com/caretaker-smarthome"
                    technologiesUsed={['typescript', 'react', 'scss', 'php', 'python']}
                />
                <ProjectContainer
                    title="ISFATES-Adventskalender"
                    year={2019}
                    image={AdventskalendarIcon}
                    summary={useLocalize(localize.adventskalender)}
                    linkToGitRepo="https://gitlab.com/isfates_adventskalender"
                    technologiesUsed={['typescript', 'react', 'scss', 'php', 'python']}
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
