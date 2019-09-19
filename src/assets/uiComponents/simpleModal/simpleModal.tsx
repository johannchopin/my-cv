import * as React from 'react';

// IMPORT STYLES ZONE
import './simpleModal.scss';
// END IMPORT STYLES ZONE

// IMPORT INTERFACE ZONE
import { ISimpleModalParams } from '../../../commonInterface';
// END IMPORT INTERFACE ZONE

// INTERFACE ZONE
interface IProps {
    params: ISimpleModalParams,
}

interface IState { }
// END INTERFACE ZONE

export default class SimpleModal extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <div className="modal fade" id="simpleModal" role="dialog" aria-labelledby="alertModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className={'alert alert-' + this.props.params.type} role="alert">
                        {this.props.params.message}
                    </div>
                </div>
            </div>
        );
    }
}
