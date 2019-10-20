import * as React from 'react';

// IMPORT STYLES ZONE
import './contactPage.scss';
// END IMPORT STYLES ZONE

// IMPORT PAGEBASE ZONE
import _pageBase from '../pageBase';
const PageBase = new _pageBase();
// END IMPORT PAGEBASE ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT APICMDS ZONE
import ApiCmds from '../../api/apiCmds';
// END IMPORT APICMDS ZONE

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
    ISimpleModalParams,
    TLanguages,
    ISendMeEmailData,
    ISendMeEmailResponse
} from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    lang: TLanguages,
    currentPageIndex: number,
    showSimpleModal: (params: ISimpleModalParams) => void,
}

interface State {
    pageId: string,
    pageIndex: number,
    textInFromInput: string,
    textInSubjectInput: string,
    textInMsgInput: string,
}

// TODO : Change setState calling
// use -> this.setState(prevState => ({ test: "test" }))
// instead of -> this.setState({ test: "test" })

export default class ContactPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'contactPage',
            pageIndex: 5, // TODO: don't forget to update this !! 
            textInFromInput: '',
            textInSubjectInput: '',
            textInMsgInput: '',
        };
    }

    protected maxCharactersInMsg = 1024;
    protected maxCharactersInSubject = 30;

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
            PageBase.clearPage(this.state.pageId);
        }
    }

    protected onSubjectInputChange = (event): void => {
        this.setState({
            textInSubjectInput: event.target.value,
        });
    }

    protected onFromInputChange = (event): void => {
        this.setState({
            textInFromInput: event.target.value,
        });
    }

    protected onMsgInputChange = (event): void => {
        const msg = event.target.value;

        if (msg.length <= this.maxCharactersInMsg) {
            this.setState({
                textInMsgInput: msg,
            });
        }
    }

    protected areInputsValid = (): boolean => {
        const textInMsgInputLength = this.state.textInMsgInput.length;
        const textInSubjectInputLength = this.state.textInSubjectInput.length;

        if (!Helper.isEmail(this.state.textInFromInput)) {
            return false;
        }

        if (textInMsgInputLength > this.maxCharactersInMsg || textInMsgInputLength === 0) {
            return false;
        }

        if (textInSubjectInputLength > this.maxCharactersInSubject || textInSubjectInputLength === 0) {
            return false;
        }

        return true;
    }

    protected onSubmitBtnClick = (): void => {
        if (this.areInputsValid()) {
            const mailData: ISendMeEmailData = {
                from: this.state.textInFromInput,
                subject: this.state.textInSubjectInput,
                message: this.state.textInMsgInput,
            }

            ApiCmds.sendMeEmail(mailData, this.onSendMeEmailCallback);
        } else {
            this.props.showSimpleModal({
                type: 'danger',
                message: 'Please enter a valid email, subject and message !'
            })
        }
    }

    protected onSendMeEmailCallback = (result: ISendMeEmailResponse): void => {
        if (result.response.hasEmailBeSend) {
            this.props.showSimpleModal({
                type: 'success',
                'message': LOCALIZE[this.props.lang]['email_has_been_sent']
            })

            this.resetInputs();
        } else {
            this.props.showSimpleModal({
                type: 'danger',
                'message': 'Please wait a little bit before sending a new message !', // TODO: Handle error with different way maybe error number
            })
        }
    }

    protected resetInputs = (): void => {
        this.setState({
            textInSubjectInput: '',
            textInMsgInput: '',
        });
    };


    render() {
        const localize = LOCALIZE[this.props.lang];

        return (
            <div id={this.state.pageId} className="swiper-slide">
                <h1>CONTACT</h1>
                <div className="form">
                    <input
                        type="text"
                        className="form-control m-2 animate-me animation-goUp"
                        value={this.state.textInFromInput}
                        onChange={this.onFromInputChange}
                        placeholder={LOCALIZE[this.props.lang].from}
                    />

                    <input
                        type="text"
                        className="form-control m-2 animate-me animation-goUp"
                        value={this.state.textInSubjectInput}
                        onChange={this.onSubjectInputChange}
                        placeholder={LOCALIZE[this.props.lang].subject}
                    />

                    <textarea
                        className="form-control m-2 animate-me animation-goUp"
                        value={this.state.textInMsgInput}
                        onChange={this.onMsgInputChange}
                        placeholder={LOCALIZE[this.props.lang].message}
                        rows={10}
                    ></textarea>

                    <p id="charactersCounter" className="animate-me animation-goUp">
                        {this.maxCharactersInMsg - this.state.textInMsgInput.length}
                    </p>

                    <button type="button" className="btn btn-gold animate-me animation-goUp" onClick={() => this.onSubmitBtnClick()}>
                        <i className="fas fa-paper-plane fa-fw"></i> {localize['send']}
                    </button>
                </div>

                <div id="contactCtn">
                    <a href="mailto:johannchopin@protonmail.com" className="animate-me animation-goUp">
                        <i className="far fa-envelope"></i>
                        <p>johannchopin@protonmail.com</p>
                    </a>
                    {/* TODO: Debug pdf opening */}

                    <a href="img/cv.pdf" target="blanck" id="cv" className="animate-me animation-goUp">
                        <p>{localize.download_cv}</p>
                    </a>
                </div>
            </div>
        )
    }
}