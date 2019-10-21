import * as React from 'react';

// IMPORT STYLES ZONE
import './skillsPage.scss';
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
import a2 from './assets/img/a2.png';
//@ts-ignore
import b1 from './assets/img/b1.png';
//@ts-ignore
import b2 from './assets/img/b2.png';
//@ts-ignore
import TypescriptIcon from '../../assets/img/typescript-icon.svg';
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


export default class SkillsPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'skillsPage',
            pageIndex: 2, // TODO: don't forget to update this !!
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
        this.animateGauges();
    }

    protected clearUI(): void {
        PageBase.clearPage(this.state.pageId);
        this.initGauges();
    }

    protected onPageChange(): void {
        if (this.props.currentPageIndex === this.state.pageIndex) {
            this.init();
        } else {
            this.clearUI();
        }
    }

    protected initGauges(): void {
        const gaugeToAnimate = $(`#${this.state.pageId} .animated-gauge`);

        gaugeToAnimate.each(function () {
            $(this).css({
                animation: 'none',
            });
        });
    }

    protected animateGauges(): void {
        const gaugeToAnimate = $(`#${this.state.pageId} .animated-gauge`);

        gaugeToAnimate.each(function () {
            $(this).css({
                animation: 'gaugeAnimation 2s forwards',
                animationDelay: '0.6s',
            });
        });
    }

    render() {
        const localize = LOCALIZE[this.props.language];

        return (
            <div id={this.state.pageId} className="swiper-slide">
                <h1 className="animate-me slide-title">Compétence</h1>

                <div className="skills-ctn">
                    <div className="langues animate-me" id="langues">
                        <h2>{localize.languages}</h2>
                        <div>
                            <img src={b2} />
                            <p>Allemand</p>
                        </div>
                        <div>
                            <img src={b2} />
                            <p>Anglais</p>
                        </div>
                        <div>
                            <img src={a2} />
                            <p>Latin</p>
                        </div>
                    </div>
                    <div className="animate-me" id="softwareSkills">
                        <h2>SOFTWARE</h2>
                        <h3>
                            <IconHandler icon="laptop" />
                            Word, Excel, Powerpoint :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge0"></div>
                        </div>
                        <h3>
                            <IconHandler prefix="fab" icon="html5" />
                            HTML5 :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge1"></div>
                        </div>
                        <h3>
                            <IconHandler prefix="fab" icon="css3-alt" />
                            CSS3 :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge2"></div>
                        </div>
                        <h3 id="typescriptSkills">
                            <TypescriptIcon />
                            TypeScript :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge5"></div>
                        </div>
                        <h3>
                            <IconHandler prefix="fab" icon="php" />
                            PHP :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge3"></div>
                        </div>
                        <h3>
                            <IconHandler prefix="fab" icon="python" />
                            Python :
                        </h3>
                        <div className="animated-gauge">
                            <div className="jauge4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}