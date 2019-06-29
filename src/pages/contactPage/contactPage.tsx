import * as React from 'react';

// IMPORT STYLES ZONE
import './contactPage.scss';
// END IMPORT STYLES ZONE

// IMPORT PAGEBASE ZONE
import _pageBase from '../pageBase';
const PageBase = new _pageBase();
// END IMPORT PAGEBASE ZONE

// IMPORT IMAGES ZONE

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

export default class ContactPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'contactPage',
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
    }

    protected clearUI(): void {
    }

    protected onPageChange(): void {
        if (this.props.currentPageIndex === this.state.pageIndex) {
            this.init();
        } else {
            this.clearUI();
            PageBase.clearPage(this.state.pageId);
        }
    }


    render() {
        return (
            <div id={this.state.pageId} className="swiper-slide">
                <h1>CONTACT</h1>
                <div id="contactCtn">
                    <a href="tel:+33767873773">
                        <div id="contacts_1" className="animate-me">
                            <i className="fas fa-mobile-alt"></i>
                            <p>07 67 87 37 73</p>
                        </div>
                    </a>
                    <a href="mailto:johannchopin@protonmail.com">
                        <div id="contacts_2" className="animate-me">
                            <i className="far fa-envelope"></i>
                            <p>johannchopin@protonmail.com</p>
                        </div>
                    </a>
                    <a href="img/cv.pdf" target="blanck" id="cv">
                        <p>-télécharger la version papier-</p>
                    </a>
                </div>
            </div>
        )
    }
}