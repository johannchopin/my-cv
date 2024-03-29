import * as React from 'react'
import Emoji from 'a11y-react-emoji'

// IMPORT STYLES ZONE
import './skillsPage.scss'
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import Localize from '~Localize'
// END IMPORT LOCALIZE ZONE

// IMPORT IMAGES ZONE
// @ts-ignore
import TypescriptIcon from '../../assets/img/typescript-icon.svg'
// @ts-ignore
import SvelteIcon from '../../assets/img/svelte-icon.svg'
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../components/Icon/Icon'
import LanguageLevel from '../../components/LanguageLevel/LanguageLevel'
import TopSoAnswerer from '~components/TopSoAnswerer/TopSoAnswerer'
// END IMPORT COMPONENTS ZONE

interface SkillsPageProps {
    active: boolean
}

const SkillsPage: React.FC<SkillsPageProps> = () => {
  return (
    <div id="skills" className="swiper-slide">
      <h1 className="animate-me slide-title">
        <Emoji symbol='🛠️' className='mr-2'/>
        <Localize translations={localize.title} />
      </h1>

      <div className="skills-ctn">
        <div className="animate-me" id="softwareSkills">
          <h2>SOFTWARE</h2>

          <h3>
            <Icon icon="file-code" />
            HTML + CSS + JS
          </h3>
          <TopSoAnswerer tag='html' />
          <TopSoAnswerer tag='css' />
          <TopSoAnswerer tag='javascript' />

          <h3 id="typescriptSkills">
            <TypescriptIcon /> TypeScript
          </h3>
          <TopSoAnswerer tag='typescript' />

          <h3>
            <Icon prefix="fab" icon="react" /> React
          </h3>
          <TopSoAnswerer tag='reactjs' />

          <h3 id="svelteSkills">
            <SvelteIcon /> Svelte
          </h3>
          <TopSoAnswerer tag='svelte' />

          <h3>
            <Icon prefix="fab" icon="php" /> PHP
          </h3>
          <TopSoAnswerer tag='php' />

          <h3>
            <Icon prefix="fab" icon="angular" /> Angular
          </h3>

          <h3>
            <Icon prefix="fab" icon="python" /> Python
          </h3>

          <h3>
            <Icon prefix="fab" icon="git-alt" /> Git
          </h3>

          <h3>
            <Icon icon="laptop" />
            Word, Excel, Powerpoint
          </h3>
        </div>
        <div className="langues animate-me" id="langues">
          <h2>
            <Localize translations={localize.languages} />
          </h2>
          <div className="animate-me">
            <LanguageLevel level='NATIVE' />
            <p>
              <Localize translations={localize.french} />
            </p>
          </div>
          <div className="animate-me">
            <LanguageLevel level='B2-C1' />
            <p>
              <Localize translations={localize.english} />
            </p>
          </div>
          <div className="animate-me">
            <LanguageLevel level='B2' />
            <p>
              <Localize translations={localize.german} />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
