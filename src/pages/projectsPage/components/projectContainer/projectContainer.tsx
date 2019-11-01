import * as React from 'react';

// IMPORT STYLES ZONE
import './projectContainer.scss';
// END IMPORT STYLES ZONE

// IMPORT LOCALIZE ZONE
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
import _Helper from '../../../../helper';
const Helper = new _Helper();
// END INIT HELPERS METHODS ZONE

// IMPORT INTERFACE ZONE
// END IMPORT INTERFACE ZONE


interface Props {
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
        if (Helper.isSet(this.props.linkToGitRepo)) {
            return (
                <a href={this.props.linkToGitRepo} className="gitlab-icon" target="_blank">
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