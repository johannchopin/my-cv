import * as React from 'react';

// IMPORT STYLES ZONE
import './skillsPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import Localize from '~Localize';
// END IMPORT LOCALIZE ZONE

// IMPORT PAGEBASE ZONE
import _PageBase from '../pageBase';
const PageBase = new _PageBase();
// END IMPORT PAGEBASE ZONE

// IMPORT IMAGES ZONE
//@ts-ignore
import TypescriptIcon from '../../assets/img/typescript-icon.svg';
//@ts-ignore
import SvelteIcon from '../../assets/img/svelte-icon.svg';
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../components/Icon/Icon';
import LanguageLevel from '../../components/LanguageLevel/LanguageLevel';
import TopSoAnswerer from '~components/TopSoAnswerer/TopSoAnswerer';
// END IMPORT COMPONENTS ZONE


interface SkillsPageProps {
    active: boolean
}

const SkillsPage: React.FC<SkillsPageProps> = (props) => {
    const { active } = props;

    const initGauges = (): void => {
        const gaugeToAnimate = $('#skills .animated-gauge');

        gaugeToAnimate.each(function () {
            $(this).css({
                animation: 'none',
            });
        });
    }

    const animateGauges = (): void => {
        const gaugeToAnimate = $('#skills .animated-gauge');

        gaugeToAnimate.each(function () {
            $(this).css({
                animation: 'gaugeAnimation 2s forwards',
                animationDelay: '0.6s',
            });
        });
    }

    React.useEffect(() => {
        if (active) {
            animateGauges();            
        } else {
            initGauges();
        }
    }, [active])

    return (
        <div id="skills" className="swiper-slide">
            <h1 className="animate-me slide-title">
                🛠️ <Localize translations={localize.title} />
            </h1>

            <div className="skills-ctn">
                <div className="animate-me" id="softwareSkills">
                        <h2>SOFTWARE</h2>

                        <h3>
                            <Icon icon="file-code" />
                            HTML + CSS + JS :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge-html-css"></div>
                        </div>
                        <TopSoAnswerer percentage={5} />

                        <h3 id="typescriptSkills">
                            <TypescriptIcon />
                            TypeScript :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge-ts"></div>
                        </div>
                        <TopSoAnswerer percentage={10} />

                        <h3>
                            <Icon prefix="fab" icon="react" />
                            React :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge-react"></div>
                        </div>
                        <TopSoAnswerer percentage={5} />

                        <h3 id="svelteSkills">
                            <SvelteIcon />
                            Svelte :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge-svelte"></div>
                        </div>
                        <TopSoAnswerer percentage={5} />

                        <h3>
                            <Icon prefix="fab" icon="php" />
                            PHP :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge-php"></div>
                        </div>
                        <TopSoAnswerer percentage={20} />

                        <h3>
                            <Icon prefix="fab" icon="angular" />
                            Angular :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge-angular"></div>
                        </div>

                        <h3>
                            <Icon prefix="fab" icon="python" />
                            Python :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge-python"></div>
                        </div>

                        <h3>
                            <Icon prefix="fab" icon="git-alt" />
                            Git :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge-git"></div>
                        </div>

                        <h3>
                            <Icon icon="laptop" />
                            Word, Excel, Powerpoint :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge0"></div>
                        </div>
                </div>
                <div className="langues animate-me" id="langues">
                    <h2>
                        <Localize translations={localize.languages} />
                    </h2>
                    <div className="animate-me">
                        <LanguageLevel level='NATIVE' />
                        <p>
                            <Localize translations={localize.french} />
                        </p>
                    </div>
                    <div className="animate-me">
                        <LanguageLevel level='B2-C1' />
                        <p>
                            <Localize translations={localize.english} />
                        </p>
                    </div>
                    <div className="animate-me">
                        <LanguageLevel level='B2' />
                        <p>
                            <Localize translations={localize.german} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage