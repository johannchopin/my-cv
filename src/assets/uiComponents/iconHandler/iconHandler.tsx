import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// IMPORT HELPER ZONE
import Helper from '../../../helper';
// END IMPORT HELPER ZONE

// IMPORT STYLES ZONE
import './iconHandler.scss';
// END IMPORT STYLES ZONE

// IMPORT INTERFACE ZONE
// END IMPORT INTERFACE ZONE

// INTERFACE ZONE
interface IProps {
    icon: IconProp,
    className?: string,
    onClick?: () => void
}
// END INTERFACE ZONE

export default class IconHandler extends React.Component<IProps> {

    protected componentId = 'faIconCtn';

    protected getClassName = (): string => {
        const defaultClassAttr = 'fa-icon';

        if (this.props.className === undefined) {
            return defaultClassAttr;
        }

        return defaultClassAttr + ' ' + this.props.className;
    }

    protected onIconClick = (): void => {
        if (this.props.onClick !== undefined) {
            (this.props.onClick)()
        }
    }


    render() {
        return (
            <div
                id={this.componentId}
                className={this.getClassName()}
                onClick={() => { this.onIconClick() }}
            >
                <FontAwesomeIcon icon={this.props.icon} />
            </div>
        );
    }
}
