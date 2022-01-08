import * as React from 'react';

import Icon from '../../components/Icon/Icon';
import Helper from '../../helper';

// IMPORT STYLES ZONE
import './SocialLinks.scss';
// END IMPORT STYLES ZONE

// INTERFACE ZONE
export interface SocialLinksProps {
  className?: string
}
// END INTERFACE ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json'
import { useLocalize } from '~helpers/useLocalize';
// END IMPORT LOCALIZE ZONE

const SO_ID = 8583669

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
    const { className = '' } = props
    const [SOReputation, setSOReputation] = React.useState<string>('...');

    const fetchStackoverflowReputation = (): void => {
      const url = `https://api.stackexchange.com/2.2/users/${SO_ID}?site=stackoverflow`
      fetch(url)
          .then(response => response.json()            )
          .then(data => {
              const reputation = data.items[0].reputation
              setStackoverflowReputation(reputation)
          })
    }

    const setStackoverflowReputation = (reputation: number) => {
      setSOReputation(Helper.getUserReputation(reputation));
    }


    React.useEffect(() => {
      fetchStackoverflowReputation();
    }, [])

    return (
      <div id="professionalLinks" className={`social-links ${className}`}>
        <div className="d-flex justify-content-center">
            <a
                id="stackoverflow"
                href="https://stackoverflow.com/users/8583669/johannchopin"
                target="_blank"
                className="clickable d-flex flex-column align-items-center"
                aria-label={useLocalize(localize.visit_page, { __PAGE__: 'stackoverflow'})}
            >
                <Icon prefix="fab" icon="stack-overflow" />
                <span className="reputation">{SOReputation}</span>
            </a>
            <a
                href="https://github.com/johannchopin"
                target="_blank"
                className="clickable"
                aria-label={useLocalize(localize.visit_page, { __PAGE__: 'github'})}
            >
                <Icon prefix="fab" icon="github" />
            </a>
            <a
                href="https://gitlab.com/johannchopin"
                target="_blank"
                className="clickable"
                aria-label={useLocalize(localize.visit_page, { __PAGE__: 'gitlab'})}
            >
                <Icon prefix="fab" icon="gitlab" />
            </a>
            <a
                href="https://www.linkedin.com/in/johann-chopin-b0097b197/"
                target="_blank"
                className="clickable"
                aria-label={useLocalize(localize.visit_page, { __PAGE__: 'linkedin'})}
            >
                <Icon prefix="fab" icon="linkedin" />
            </a>
            <a
                href="https://dev.to/johannchopin"
                target="_blank"
                className="clickable"
                aria-label={useLocalize(localize.visit_page, { __PAGE__: 'dev.to'})}
            >
                <Icon prefix="fab" icon="dev" />
            </a>
        </div>
      </div>
    );
}

export default SocialLinks