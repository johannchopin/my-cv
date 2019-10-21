import * as React from 'react';

// IMPORT STYLES ZONE
import './hobbiesPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT PAGEBASE ZONE
import _pageBase from '../pageBase';
const PageBase = new _pageBase();
// END IMPORT PAGEBASE ZONE

// IMPORT IMAGES ZONE
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../../assets/uiComponents/iconHandler/iconHandler';
// END IMPORT COMPONENTS ZONE


// INIT HELPERS METHODS ZONE
import _Helper from '../../helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import {
    TLanguages,
    ISimpleModalParams
} from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    language: TLanguages
    currentPageIndex: number,
    showSimpleModal: (params: ISimpleModalParams) => void,
}

interface State {
    pageId: string,
    pageIndex: number,
}

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

export default class HobbiesPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'hobbiesPage',
            pageIndex: 4,
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

                <div id="hobbiesCtn">

                    <div className="animate-me">
                        <div className="icon">
                            <IconHandler icon="terminal" />
                        </div>
                        <h2>{localize.programming}</h2>
                        <p>
                            <IconHandler prefix="fab" icon="react" className="react-icon" />
                            {localize.react_lover}
                        </p>
                    </div>

                    <div className="animate-me">
                        <div className="icon">
                            <IconHandler icon="music" />
                        </div>
                        <h2>{localize.play_music}</h2>
                    </div>

                    <div className="animate-me">
                        <div className="icon">
                            <IconHandler icon="fish" />
                        </div>
                        <h2>{localize.dive}</h2>
                    </div>

                </div >
            </div >
        )
    }
}