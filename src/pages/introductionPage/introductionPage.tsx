import * as React from 'react';

// IMPORT STYLES ZONE
import './introductionPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT IMAGES ZONE
//@ts-ignore
import myNiceFace from './assets/img/myNiceFace.png';
//@ts-ignore
import WaveSvg from '../../assets/img/wave-design.svg';
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../assets/uiComponents/Icon/Icon';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import { TLanguages } from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface IntroductionPageProps {
    language: TLanguages
}

const IntroductionPage: React.FC<IntroductionPageProps> = (props) => {
    const { language } = props

    const [isSwypeToastOpen, setIsSwypeToastOpen] = React.useState<boolean>(true);

    const getAge = (date: string): number => {
        const today = new Date();
        const birthDate = new Date(date);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    const localize = LOCALIZE[language];

    return (
        <div id='presentation' className="swiper-slide not-scrollable" onClick={():void => { setIsSwypeToastOpen(false) }}>
            <header>
                <h1 id="slide_0_h1" className="animate-me">Chopin Johann</h1>

                <p id="slide_0_p" className="animate-me">- {localize.student} -</p>

                <div id="waveSvg" className="animate-me animation-topApparition">
                    <WaveSvg />
                </div>
            </header>

            <div className="my-face-ctn">
                <img id="slide_0_img" className="animate-me" src={myNiceFace} />
            </div>

            <p className="presentation-text animate-me">
                {localize.introduction_text.replace('__AGE__', getAge("1999/04/04").toString())}
            </p>

            <div id="swipeIndication" className={`animate-me animation-goUp ${isSwypeToastOpen ? 'open' : 'close'}`}>
                <p>{localize.swipe_indication}</p>
                <Icon icon="arrow-right" className="with-pl" />
            </div>
        </div>
    )
}

export default IntroductionPage