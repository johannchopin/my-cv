import * as React from 'react'
import Emoji from 'a11y-react-emoji'

// IMPORT STYLES ZONE
import './personalExperiencesPage.scss'
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import { useLocalize } from '~helpers/useLocalize'
// END IMPORT LOCALIZE ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../components/Icon/Icon'
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import Localize from '~Localize'
// END IMPORT INTERFACE ZONE

// C O M P O N E N T
const PersonalExperiencesPage: React.FC = () => {
  const renderRecommendation = (link: string): JSX.Element => {
    return (
      <a className='d-flex align-items-center recommendation' href={link} target="_blank">
        <Icon icon="file-download" />
        <p><Localize translations={localize.letter_of_recommendation} /></p>
      </a>
    )
  }
  return (
    <div id="experiences" className="swiper-slide">
      <h1 className="animate-me slide-title">
        <Emoji symbol='🗂️' className='mr-2'/>
        <Localize translations={localize.title} />
      </h1>

      <ul id="experiencesCtn">

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.work_buyco) }}></p>
        </li>

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.work_dryad.introduction) }}></p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.work_dryad.complement) }}></p>
        </li>

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.work_anynines) }}></p>
          <br />
          {renderRecommendation('https://github.com/johannchopin/my-cv/raw/main/static/recommendation-by-anynines-de.pdf')}
        </li>

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.work_eurokey.introduction) }}></p>
          <br />
          <p><Localize translations={localize.work_eurokey.complement} /></p>
        </li>

        <li id="hotcityInternship" className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.internship_hotcity) }}></p>
          <br />
          {renderRecommendation('https://github.com/johannchopin/my-cv/raw/main/static/hotcity-recommendation-letter.pdf')}
        </li>

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.hackaton_lux) }}></p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.battledev) }}></p>
        </li>

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.diva) }}></p>
        </li>

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.cnrs) }}></p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.tpe) }}></p>
        </li>

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.ecpm) }}></p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.pirmasens) }}></p>
        </li>

        <li className="animate-me">
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.pirmasens) }}></p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.summer_camp) }}></p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: useLocalize(localize.concert) }}></p>
        </li>

      </ul>
    </div>
  )
}

export default PersonalExperiencesPage
