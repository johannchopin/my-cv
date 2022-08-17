import * as React from 'react'
import Emoji from 'a11y-react-emoji'

// IMPORT STYLES ZONE
import './hobbiesPage.scss'
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
// END IMPORT LOCALIZE ZONE

// IMPORT IMAGES ZONE
// @ts-ignore
import ForumJgrLogo from '../../assets/img/forum-jgr-logo.png'
// @ts-ignore
import DivaPullIcon from '../../assets/img/diva-pull-icon.png'
// @ts-ignore
import CaretakerLogo from '../../assets/img/caretaker-logo.png'
// @ts-ignore
import Wei2018Logo from '../../assets/img/wei-2018-logo.png'
// @ts-ignore
import Wei2021Logo from '../../assets/img/wei-2021-logo.png'
// @ts-ignore
import AdventskalenderLogo from '../../assets/img/adventskalender-logo.png'
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../components/Icon/Icon'
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import Localize from '~Localize'
// END IMPORT INTERFACE ZONE

// @ts-ignore
import SvelteIcon from '../../assets/img/svelte-icon.svg'

// C O M P O N E N T
const HobbiesPage: React.FC = () => {
  return (
    <div id='hobbies' className="swiper-slide">
      <h1 className="animate-me slide-title">
        <Emoji symbol='🎸' className='mr-2'/>
        <Localize translations={localize.title} />
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
              <Icon icon="icons" />
            </div>

            <h2>
              <Localize translations={localize.make_logos} />
            </h2>

            <div className="icons">
              <img src={Wei2021Logo} alt="Caretaker icon" />
              <img src={Wei2018Logo} alt="Caretaker icon" />
              <img src={CaretakerLogo} alt="Caretaker icon" />
              <img src={AdventskalenderLogo} alt="Adventskalender icon" />
              <img src={ForumJgrLogo} alt="Forum JGR icon" />
              <img src={DivaPullIcon} alt="ISFATES sweet icon" />
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
