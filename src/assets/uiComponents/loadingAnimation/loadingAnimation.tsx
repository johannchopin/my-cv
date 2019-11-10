import * as React from 'react';


// IMPORT STYLES ZONE
import './loadingAnimation.scss';
// END IMPORT STYLES ZONE

// IMPORT COMPONENTS ZONE
import IconHandler from '../iconHandler/iconHandler';
// END IMPORT COMPONENTS ZONE

// IMPORT ASSETS ZONE
// END IMPORT ASSETS ZONE

interface IProps { }

interface IState { }


export default class LoadingAnimation extends React.Component<IProps, IState> {

    protected componentId = 'loadingAnimation';

    constructor(props: IProps) {
        super(props);

        this.state = {};

    }


    render() {
        return (
            <div id="loadingAnimation">

                <div id="animationCtn">
                    <div className="loader">
                        <IconHandler icon="circle-notch" />
                    </div>
                </div>

            </div >
        );
    }
}
