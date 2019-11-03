import * as React from 'react';

// IMPORT STYLES ZONE
import './projectContainer.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
import LOCALIZE from './localize';
// END IMPORT LOCALIZE ZONE

// IMPORT PAGEBASE ZONE
// END IMPORT PAGEBASE ZONE

// IMPORT IMAGES ZONE
//@ts-ignore
// END IMPORT IMAGES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../../../../assets/uiComponents/iconHandler/iconHandler';
// END IMPORT COMPONENTS ZONE

// INIT HELPERS METHODS ZONE
import Helper from '../../../../helper';
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
import { TLanguages } from '../../../../commonInterface';
// END IMPORT INTERFACE ZONE


interface Props {
    language: TLanguages,
    link: string,
    title: string,
    year: number,
    image: string,
    summary: string,
    linkToGitRepo?: string,
    technologiesUsed?: string[],
}

interface State { }


export default class ProjectContainer extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    protected technologiesUsedRender = (): React.ReactNode => {
        if (this.props.technologiesUsed !== undefined) {
            return (
                <ul className="techno">
                    {this.props.technologiesUsed.map((techo: string, i: number) => {
                        return (
                            <li key={i}>{techo}</li>
                        )
                    })}
                </ul>
            )
        }

        return '';
    }

    protected linkToGitlabRepoRender = (): React.ReactNode => {
        const checkoutRepoTranslation = LOCALIZE[this.props.language].check_repo;

        if (Helper.isSet(this.props.linkToGitRepo)) {
            return (
                <a
                    href={this.props.linkToGitRepo}
                    target="_blank"
                    className="gitlab-icon"
                    data-toggle="tooltip"
                    data-placement="left"
                    title={checkoutRepoTranslation}
                >
                    <IconHandler prefix="fab" icon="gitlab" />
                </a>
            )
        }

        return '';
    }


    render() {
        return (
            <div
                className="animate-me project-ctn"
            >
                <a
                    href={this.props.link}
                    target="_blank"
                >
                    <div className="header">
                        <div className="img-ctn">
                            <img src={this.props.image} />
                        </div>
                        <div>
                            <h2>{this.props.title}</h2>
                            <h3>{this.props.year}</h3>
                        </div>
                    </div>
                    <div className="body">
                        <h4>{this.props.summary}</h4>
                        <br />
                        <h4>Technologies used :</h4>
                        {this.technologiesUsedRender()}
                    </div>
                </a>

                {this.linkToGitlabRepoRender()}
            </div>
        )
    }
}