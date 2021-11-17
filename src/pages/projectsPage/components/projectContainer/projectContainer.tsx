import * as React from 'react';

// IMPORT STYLES ZONE
import './projectContainer.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import * as localize from './localize.json';
// END IMPORT LOCALIZE ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../../../../components/Icon/Icon';
// END IMPORT COMPONENTS ZONE

// INIT HELPERS METHODS ZONE
import Helper from '../../../../helper';
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import { Language } from '../../../../commonInterface';
import { useLocalize } from '~helpers/useLocalize';
// END IMPORT INTERFACE ZONE

interface ProjectContainerProps {
    link?: string,
    title: string,
    year: number,
    image: string,
    summary: string,
    linkToGitRepo?: string,
    technologiesUsed?: string[],
}

const ProjectContainer: React.FC<ProjectContainerProps> = (props) => {
    const {
        link,
        title,
        year,
        image,
        summary,
        linkToGitRepo,
        technologiesUsed 
    } = props;

    const technologiesUsedRender = (): React.ReactNode => {
        if (technologiesUsed !== undefined) {
            return (
                <ul className="techno">
                    {technologiesUsed.map((techo: string, i: number) => {
                        return (
                            <li key={i} className="badge">{techo}</li>
                        )
                    })}
                </ul>
            )
        }

        return '';
    }

    const renderGitRepoIcon = (): JSX.Element => {
        const isGitHubRepo = linkToGitRepo.startsWith('https://github.com/')

        if (isGitHubRepo) {
            return <Icon prefix="fab" icon="github" />
        }

        return <Icon prefix="fab" icon="gitlab" />
    }

    const linkToGitlabRepoRender = (): React.ReactNode => {
        // TODO: Fix bug -> on props.language change the tooltip title is not updated with the correct translation
        if (Helper.isSet(linkToGitRepo)) {
            return (
                <a
                    href={linkToGitRepo}
                    target="_blank"
                    className="git-repo-icon"
                    data-toggle="tooltip"
                    data-placement="left"
                    title={useLocalize(localize.check_repo)}
                >
                    {renderGitRepoIcon()}
                </a>
            )
        }

        return '';
    }

    const renderProjectUI = (): JSX.Element => {
        return (
            <>
                <div className="header">
                    <div className="img-ctn">
                        <img src={image} alt={`${title} project's logo`}/>
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <h3>{year}</h3>
                    </div>
                </div>
                <div className="body">
                    <h4>{summary}</h4>
                    {technologiesUsedRender()}
                </div>
            </>
        )
    }


    return (
        <div
            className="animate-me project-ctn"
        >
            {link 
                ? <a href={link} target="_blank"> {renderProjectUI()}</a>
                :renderProjectUI()
            }
            
            {linkToGitlabRepoRender()}
        </div>
    )
}

export default ProjectContainer