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
                <h1 className="animate-me slide-title">{localize.title}</h1>

                <div className="project-ctn">
                    <div className="animate-me">
                        <p>Latin</p>
                    </div>

                </div>
            </div>
        )
    }
}