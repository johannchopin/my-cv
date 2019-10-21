import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

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
    icon: IconName,
    prefix?: IconPrefix,
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

    protected getFontawesomeIconPrefix = (): IconPrefix => {
        return this.props.prefix !== undefined ? this.props.prefix : 'fas';
    }


    render() {
        return (
            <span
                id={this.componentId}
                className={this.getClassName()}
                onClick={() => { this.onIconClick() }}
            >
                <FontAwesomeIcon icon={[this.getFontawesomeIconPrefix(), this.props.icon]} />
            </span>
        );
    }
}
