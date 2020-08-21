import * as React from 'react';

// IMPORT STYLES ZONE
import './contactPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT APICMDS ZONE
import ApiCmds from '../../api/apiCmds';
// END IMPORT APICMDS ZONE

// IMPORT IMAGES ZONE
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../../assets/uiComponents/iconHandler/iconHandler';
// END IMPORT COMPONENTS ZONE


// INIT HELPERS METHODS ZONE
import Helper from '../../helper';
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
    language: TLanguages,
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


export default class ContactPage extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            pageId: 'contacts',
            pageIndex: 6,
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

    protected init = (): void => {
        this.initUI();
    }

    protected initUI(): void { }

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
        const localize = LOCALIZE[this.props.language];

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
                message: localize.invalid_email_form,

            })
        }
    }

    protected onSendMeEmailCallback = (result: ISendMeEmailResponse): void => {
        if (result.response.hasEmailBeSend) {
            this.props.showSimpleModal({
                type: 'success',
                'message': LOCALIZE[this.props.language]['email_has_been_sent']
            })

            this.resetInputs();
        } else {
            this.props.showSimpleModal({
                type: 'danger',
                'message': 'Email not send !', // TODO: Handle error with different way maybe error number
            })
        }
    }

    protected resetInputs = (): void => {
        this.setState({
            textInFromInput: '',
            textInSubjectInput: '',
            textInMsgInput: '',
        });
    };

    protected getLinkToCV = (): string => {
        let cvName = '';
        switch (this.props.language) {
            default:
                cvName = 'myCV2019-fr';
                break;

            case 'fr':
                cvName = 'myCV2019-fr';
                break;

            case 'de':
                cvName = 'myCV2019-de';
                break;
        }

        return `https://cv.johannchopin.fr/2019/assets/pdf/${cvName}.pdf`;
    }

    render() {
        const localize = LOCALIZE[this.props.language];

        return (
            <div id={this.state.pageId} className="swiper-slide">
                <h1>{localize.title}</h1>
                <div className="form">
                    <input
                        type="text"
                        className="form-control m-2 animate-me animation-goUp"
                        value={this.state.textInFromInput}
                        onChange={this.onFromInputChange}
                        placeholder={LOCALIZE[this.props.language].from}
                    />

                    <input
                        type="text"
                        className="form-control m-2 animate-me animation-goUp"
                        value={this.state.textInSubjectInput}
                        onChange={this.onSubjectInputChange}
                        placeholder={LOCALIZE[this.props.language].subject}
                    />

                    <textarea
                        className="form-control m-2 animate-me animation-goUp"
                        value={this.state.textInMsgInput}
                        onChange={this.onMsgInputChange}
                        placeholder={LOCALIZE[this.props.language].message}
                        rows={10}
                    ></textarea>

                    <p id="charactersCounter" className="animate-me animation-goUp">
                        {this.maxCharactersInMsg - this.state.textInMsgInput.length}
                    </p>

                    <button type="button" className="btn btn-gold animate-me animation-goUp" onClick={() => this.onSubmitBtnClick()}>
                        <IconHandler icon="paper-plane" className="with-pr" />
                        {localize['send']}
                    </button>
                </div>

                <div id="contactCtn">
                    <a href="mailto:johannchopin@protonmail.com" className="animate-me animation-goUp">
                        <IconHandler icon="envelope" />
                        <p>johannchopin@pm.me</p>
                    </a>

                    <a href={this.getLinkToCV()} target="_blank" id="cv" className="animate-me animation-goUp">
                        <p>{localize.download_cv}</p>
                    </a>
                </div>
            </div>
        )
    }
}