import * as React from 'react';

// IMPORT STYLES ZONE
import './hobbiesPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize'
// END IMPORT LOCALIZE ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../assets/uiComponents/Icon/Icon';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import {
    TLanguages
} from '../../commonInterface';
// END IMPORT INTERFACE ZONE


interface HobbiesPageProps {
    language: TLanguages
}

const HobbiesPage: React.FC<HobbiesPageProps> = (props) => {
    const { language } = props

    const localize = LOCALIZE[language];

    return (
        <div id='hobbies' className="swiper-slide">
            <h1 className="animate-me slide-title">{localize.title}</h1>

            <div id="hobbiesCtn">

                <div className="col">

                    <div className="animate-me">
                        <div className="icon">
                            <Icon icon="terminal" />
                        </div>
                        <h2>{localize.programming}</h2>
                        <p>
                            <Icon prefix="fab" icon="react" className="react-icon" />
                            {localize.react_lover}
                        </p>
                    </div>
                    <div className="animate-me">
                        <div className="icon">
                            <Icon icon="fish" />
                        </div>
                        <h2>{localize.dive}</h2>
                    </div>

                </div>

                <div className="col">

                    <div id="makeIconCtn" className="animate-me">
                        <div className="icon">
                            <Icon prefix="fab" icon="adobe" />
                        </div>
                        <p className="illustrator">Illustrator</p>

                        <h2>{localize.make_icon}</h2>

                        <div className="icons">
                            <a href="https://johannchopin.fr/icon/caretaker/" target="_blank" className="clickable-effect">
                                <img src="https://johannchopin.fr/icon/caretaker/icons/v3.0.png" />
                                <img src="https://johannchopin.fr/icon/caretaker/icons/v2.4white.png" />
                            </a>

                            <a href="https://johannchopin.fr/icon/adventskalender/" target="_blank" className="clickable-effect">
                                <img src="https://johannchopin.fr/icon/adventskalender/icons/v2.2.svg" />
                            </a>

                            <a href="https://johannchopin.fr/icon/forum_jgr/" target="_blank" className="clickable-effect">
                                <img src="https://johannchopin.fr/icon/forum_jgr/icons/v1.2.png" />
                            </a>

                            <a href="https://johannchopin.fr/icon/isfates_sweet/" target="_blank" className="clickable-effect">
                                <img src="https://johannchopin.fr/icon/isfates_sweet/icons/v5.0.svg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="animate-me">
                        <div className="icon">
                            <Icon icon="music" />
                        </div>
                        <h2>{localize.play_music}</h2>
                    </div>
                    <div className="animate-me">
                        <div className="icon">
                            <Icon icon="snowboarding" />
                        </div>
                        <h2>{localize.snowboard}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HobbiesPage