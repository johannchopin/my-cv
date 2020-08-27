import * as React from 'react';

// IMPORT STYLES ZONE
import './contactPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
// END IMPORT LOCALIZE ZONE

// IMPORT APICMDS ZONE
import ApiCmds from '../../api/apiCmds';
// END IMPORT APICMDS ZONE

// IMPORT COMPONENTS ZONE
import Localize, { useLocalize } from '~Localize';
import Icon from '../../assets/uiComponents/Icon/Icon';
// END IMPORT COMPONENTS ZONE

// INIT HELPERS METHODS ZONE
import Helper from '../../helper';
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import {
    SimpleModalParams,
    Language,
    ISendMeEmailData,
    ISendMeEmailResponse
} from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface ContactPageProps {
    language: Language,
    showSimpleModal: (params: SimpleModalParams) => void,
}

type FormState = {
    from: string
    subject: string
    message: string
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
    const {language, showSimpleModal} = props
    const maxCharactersInMsg = 1024;
    const maxCharactersInSubject = 30;
    const [formState, setFormState] = React.useState<FormState>({
        from: '',
        subject: '',
        message: ''
    })

    const onMsgInputChange = (event): void => {
        const msg = event.target.value;

        if (msg.length <= maxCharactersInMsg) {
            setFormState({...formState, message: msg})
        }
    }

    const areInputsValid = (): boolean => {
        const textInMsgInputLength = formState.message.length;
        const textInSubjectInputLength = formState.subject.length;

        if (!Helper.isEmail(formState.from)) {
            return false;
        }

        if (textInMsgInputLength > maxCharactersInMsg || textInMsgInputLength === 0) {
            return false;
        }

        if (textInSubjectInputLength > maxCharactersInSubject || textInSubjectInputLength === 0) {
            return false;
        }

        return true;
    }

    const onSubmitBtnClick = (): void => {
        if (areInputsValid()) {
            const mailData: ISendMeEmailData = {
                from: formState.from,
                subject: formState.subject,
                message: formState.message
            }

            ApiCmds.sendMeEmail(mailData, onSendMeEmailCallback);
        } else {
            showSimpleModal({
                type: 'danger',
                message: useLocalize(localize.invalid_email_form)

            })
        }
    }

    const onSendMeEmailCallback = (result: ISendMeEmailResponse): void => {
        if (result.response.hasEmailBeSend) {
            showSimpleModal({
                type: 'success',
                message: useLocalize(localize.email_has_been_sent)
            })

            resetInputs();
        } else {
            showSimpleModal({
                type: 'danger',
                'message': 'Email not send !', // TODO: Handle error with different way maybe error number
            })
        }
    }

    const resetInputs = (): void => {
        setFormState({
            from: '',
            message: '',
            subject: ''
        })
    };

    const getLinkToCV = (): string => {
        let cvName = '';
        switch (language) {
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

    return (
        <div id='contacts' className="swiper-slide">
            <h1>
                <Localize translations={localize.title} />
            </h1>
            <div className="form">
                <input
                    type="text"
                    className="form-control m-2 animate-me animation-goUp"
                    value={formState.from}
                    onChange={(event): void => {
                        setFormState({...formState, from: event.target.value})
                    }}
                    placeholder={useLocalize(localize.from)}
                />

                <input
                    type="text"
                    className="form-control m-2 animate-me animation-goUp"
                    value={formState.subject}
                    onChange={(event): void => {
                        setFormState({...formState, subject: event.target.value})
                    }}
                    placeholder={useLocalize(localize.subject)}
                />

                <textarea
                    className="form-control m-2 animate-me animation-goUp"
                    value={formState.message}
                    onChange={onMsgInputChange}
                    placeholder={useLocalize(localize.message)}
                    rows={10}
                ></textarea>

                <p id="charactersCounter" className="animate-me animation-goUp">
                    {maxCharactersInMsg - formState.message.length}
                </p>

                <button type="button" className="btn btn-gold animate-me animation-goUp" onClick={() => onSubmitBtnClick()}>
                    <Icon icon="paper-plane" className="with-pr" />
                    <Localize translations={localize.send} />
                </button>
            </div>

            <div id="contactCtn">
                <a href="mailto:johannchopin@protonmail.com" className="animate-me animation-goUp">
                    <Icon icon="envelope" />
                    <p>johannchopin@pm.me</p>
                </a>

                <a href={getLinkToCV()} target="_blank" id="cv" className="animate-me animation-goUp">
                    <p>
                        <Localize translations={localize.download_cv} />
                    </p>
                </a>
            </div>
        </div>
    )
}

export default ContactPage