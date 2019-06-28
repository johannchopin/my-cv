import * as React from 'react';

// IMPORT STYLES ZONE
import './skillsPage.scss';
// END IMPORT STYLES ZONE

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
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
// END IMPORT COMPONENTS ZONE


// INIT HELPERS METHODS ZONE
import _Helper from '../../helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import {
} from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    currentPageIndex: number,
}

interface State {
    pageId: string,
    pageIndex: number,
}

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

export default class IntroductionPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'skillsPage',
            pageIndex: 1, // TODO: don't forget to update this !!
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
        this.initGauges();
    }

    protected onPageChange(): void {
        if (this.props.currentPageIndex === this.state.pageIndex) {
            this.init();
        } else {
            this.clearUI();
            PageBase.clearPage(this.state.pageId);
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
        return (
            <div id={this.state.pageId} className="swiper-slide">
                <h1 id="competence_title" className="animate-me">COMPÉTENCES:</h1>
                <div className="competence_container">
                    <div className="langues animate-me" id="langues">
                        <h2>LANGUES</h2>
                        <div>
                            <img src={b2} />
                            <p>Allemand</p>
                        </div>
                        <div>
                            <img src={b1} />
                            <p>Anglais</p>
                        </div>
                        <div>
                            <img src={a2} />
                            <p>Latin</p>
                        </div>
                    </div>
                    <div className="software animate-me" id="software">
                        <h2>SOFTWARE</h2>
                        <h3>Word, Excel, Powerpoint :</h3>
                        <div className="animated-gauge">
                            <div className="jauge0"></div>
                        </div>
                        <h3>HTML5 :</h3>
                        <div className="animated-gauge">
                            <div className="jauge1"></div>
                        </div>
                        <h3>CSS3 :</h3>
                        <div className="animated-gauge">
                            <div className="jauge2"></div>
                        </div>
                        <h3>JAVASCRIPT :</h3>
                        <div className="animated-gauge">
                            <div className="jauge5"></div>
                        </div>
                        <h3>PHP :</h3>
                        <div className="animated-gauge">
                            <div className="jauge3"></div>
                        </div>
                        <h3>Python :</h3>
                        <div className="animated-gauge">
                            <div className="jauge4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}