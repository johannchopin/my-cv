import * as React from 'react'
import Emoji from 'a11y-react-emoji'

// IMPORT STYLES ZONE
import './timeLinePage.scss'
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import Localize from '~Localize'
import { useLocalize } from '~helpers/useLocalize'
// END IMPORT LOCALIZE ZONE

// C O M P O N E N T
const TimeLinePage: React.FC = () => {
  return (
    <div id="education" className="swiper-slide">
      <h1 className="animate-me slide-title">
        <Emoji symbol='🎓' className='mr-2'/>
        <Localize translations={localize.title}/>
      </h1>

      <div id="timeline-content">
        <ul className="timeline">
          <li className="event animate-me animation-goUp">
            <p className="event-date">2020 - 2022</p>
            <h2 dangerouslySetInnerHTML={{ __html: useLocalize(localize.master) }}></h2>
          </li>

          <li className="event animate-me animation-goUp">
            <p className="event-date">2020</p>
            <h2 dangerouslySetInnerHTML={{ __html: useLocalize(localize.licence) }}></h2>
          </li>

          <li className="event animate-me animation-goUp">
            <p className="event-date">2018-2019</p>
            <h2 dangerouslySetInnerHTML={{ __html: useLocalize(localize.htw_start) }}></h2>
          </li>

          <li className="event animate-me animation-goUp">
            <p className="event-date">2017-2018</p>

            <h2 dangerouslySetInnerHTML={{ __html: useLocalize(localize.start_isfates) }}></h2>
            <p><Localize translations={localize.start_isfates_description} /></p>

            <h2><Localize translations={localize.bac} /></h2>
            <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.bac_description) }}></p>
          </li>

          <li className="event animate-me animation-goUp">
            <p className="event-date">2014-2015</p>

            <h2 dangerouslySetInnerHTML={{ __html: useLocalize(localize.brevet) }}></h2>
            <h2><Localize translations={localize.c1_certificate} /></h2>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default TimeLinePage
