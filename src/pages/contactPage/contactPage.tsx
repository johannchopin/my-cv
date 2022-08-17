import * as React from 'react'

// IMPORT STYLES ZONE
import './contactPage.scss'
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
// END IMPORT LOCALIZE ZONE

// IMPORT COMPONENTS ZONE
import { AppContext } from '~contexts/App'
import Localize from '~Localize'
import Icon from '../../components/Icon/Icon'
// END IMPORT COMPONENTS ZONE

// IMPORT INTERFACE ZONE
import {
  SimpleModalParams
} from '../../commonInterface'
import SocialLinks from '~components/SocialLinks/SocialLinks'
// END IMPORT INTERFACE ZONE

interface ContactPageProps {
    showSimpleModal: (params: SimpleModalParams) => void,
}

// C O M P O N E N T
const ContactPage: React.FC<ContactPageProps> = () => {
  const { lang } = React.useContext(AppContext)

  const getLinkToCV = (): string => {
    let cvName = ''
    switch (lang) {
    case 'fr':
      cvName = 'cv'
      break
    default:
      cvName = 'cv-en'
      break
    }

    return `https://github.com/johannchopin/my-cv/raw/main/static/${cvName}.pdf`
  }

  return (
    <div id='contacts' className="swiper-slide">
      <h1 className="animate-me">
        <Localize translations={localize.title} />
      </h1>

      <div id="contactCtn">
        <a id="mail" href="mailto:johannchopin@pm.me" target="_blank" className="animate-me animation-goUp">
          <Icon icon="envelope" />
          <p>johannchopin@pm.me</p>
        </a>

        <a href={getLinkToCV()} id="cv" className="animate-me animation-goUp">
          <p>
            <Icon icon="file-download" className="mr-1" />
            <Localize translations={localize.download_cv} />
          </p>
        </a>

        <div id="socialLinks" className="animate-me animation-goUp mt-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
