import * as React from 'react';

// IMPORT STYLES ZONE
import './hobbiesPage.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
// END IMPORT LOCALIZE ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../assets/uiComponents/Icon/Icon';
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import Localize from '~Localize';
// END IMPORT INTERFACE ZONE


//@ts-ignore
import SvelteIcon from '../../assets/img/svelte-icon.svg';

const HobbiesPage: React.FC = () => {
    return (
        <div id='hobbies' className="swiper-slide">
            <h1 className="animate-me slide-title">
                🎸 <Localize translations={localize.title} />
            </h1>

            <div id="hobbiesCtn">

                <div className="col">

                    <div className="animate-me">
                        <div className="icon">
                            <Icon icon="terminal" />
                        </div>
                        <h2>
                            <Localize translations={localize.programming} />
                        </h2>
                        <div className="mt-3">
                            <p className="d-flex svelte-section m-0">
                                <SvelteIcon />
                                Svelte lover
                            </p>
                            <p>
                                <Icon prefix="fab" icon="react" className="react-icon m-0" />
                                React enthusiast
                            </p>
                        </div>
                    </div>
                    <div className="animate-me">
                        <div className="icon">
                            <Icon icon="fish" />
                        </div>
                        <h2>
                            <Localize translations={localize.dive} />
                        </h2>
                    </div>

                </div>

                <div className="col">

                    <div id="makeIconCtn" className="animate-me">
                        <div className="icon">
                            <Icon prefix="fab" icon="adobe" />
                        </div>
                        <p className="illustrator">Illustrator</p>

                        <h2>
                            <Localize translations={localize.make_icon} />
                        </h2>

                        <div className="icons">
                            <a href="https://johannchopin.fr/icon/caretaker/" target="_blank" className="clickable-effect">
                                <img src="https://johannchopin.fr/icon/caretaker/icons/v3.0.png" alt="Caretaker icon" />
                                <img src="https://johannchopin.fr/icon/caretaker/icons/v2.4white.png" alt="Caretaker icon" />
                            </a>

                            <a href="https://johannchopin.fr/icon/adventskalender/" target="_blank" className="clickable-effect">
                                <img src="https://johannchopin.fr/icon/adventskalender/icons/v2.2.svg" alt="Adventskalender icon" />
                            </a>

                            <a href="https://johannchopin.fr/icon/forum_jgr/" target="_blank" className="clickable-effect">
                                <img src="https://johannchopin.fr/icon/forum_jgr/icons/v1.2.png" alt="Forum JGR icon" />
                            </a>

                            <a href="https://johannchopin.fr/icon/isfates_sweet/" target="_blank" className="clickable-effect">
                                <img src="https://johannchopin.fr/icon/isfates_sweet/icons/v5.0.svg" alt="ISFATES sweet icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="animate-me">
                        <div className="icon">
                            <Icon icon="music" />
                        </div>
                        <h2>
                            <Localize translations={localize.play_music} />
                        </h2>
                    </div>
                    <div className="animate-me">
                        <div className="icon">
                            <Icon icon="snowboarding" />
                        </div>
                        <h2>
                            <Localize translations={localize.snowboard} />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HobbiesPage