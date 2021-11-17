import * as React from 'react';

// IMPORT STYLES ZONE
import './contactPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
// END IMPORT LOCALIZE ZONE

// IMPORT COMPONENTS ZONE
import { AppContext } from '~contexts/App'
import Localize from '~Localize';
import Icon from '../../components/Icon/Icon';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import {
    SimpleModalParams,
} from '../../commonInterface';
import SocialLinks from '~components/SocialLinks/SocialLinks';
// END IMPORT INTERFACE ZONE

interface ContactPageProps {
    showSimpleModal: (params: SimpleModalParams) => void,
}

// C O M P O N E N T
const ContactPage: React.FC<ContactPageProps> = (props) => {
    const { lang } = React.useContext(AppContext);

    const getLinkToCV = (): string => {
        let cvName = '';
        switch (lang) {
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

            <div id="contactCtn">
                <a href="mailto:johannchopin@pm.me" target="_blank" className="animate-me animation-goUp">
                    <Icon icon="envelope" />
                    <p>johannchopin@pm.me</p>
                </a>

                <a href={getLinkToCV()} target="_blank" id="cv" className="animate-me animation-goUp">
                    <p>
                        <Localize translations={localize.download_cv} />
                    </p>
                </a>

                <div className="animate-me animation-goUp mt-4">
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}

export default ContactPage