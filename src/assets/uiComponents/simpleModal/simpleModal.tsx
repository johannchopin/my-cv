import * as React from 'react';

// IMPORT STYLES ZONE
import './simpleModal.scss';
// END IMPORT STYLES ZONE

// IMPORT INTERFACE ZONE
import { SimpleModalParams } from '../../../commonInterface';
// END IMPORT INTERFACE ZONE

// INTERFACE ZONE
export type SimpleModalProps = SimpleModalParams
// END INTERFACE ZONE

const SimpleModal: React.FC<SimpleModalProps> = (props) => {

    const {type = 'success', message = ''} = props

    return (
        <div className="modal fade" id="simpleModal" role="dialog" aria-labelledby="alertModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className={`alert alert-${type}`} role="alert">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default SimpleModal