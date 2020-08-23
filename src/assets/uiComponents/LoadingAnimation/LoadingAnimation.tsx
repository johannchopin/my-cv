import * as React from 'react';


// IMPORT STYLES ZONE
import './LoadingAnimation.scss';
// END IMPORT STYLES ZONE

// IMPORT COMPONENTS ZONE
import Icon from '../Icon/Icon';
// END IMPORT COMPONENTS ZONE

const LoadingAnimation: React.FC = () => {
    return (
        <div id="loadingAnimation">

            <div id="animationCtn">
                <div className="loader">
                    <Icon icon="circle-notch" />
                </div>
            </div>

        </div >
    );
}

export default LoadingAnimation
