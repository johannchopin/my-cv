const LINK_TO_PHP_LOCAL_API = 'http://localhost/isfates_adventskalender/back-end/api/cmds/';
const LINK_TO_PHP_SERVER_API = 'https://api.johannchopin.fr/advents_kalender/api/cmds/';

const PATH_TO_API = LINK_TO_PHP_SERVER_API;

// IMPORT CREDENTIALS
import * as CREDENTIALS from './credentials.json';
// END IMPORT CREDENTIALS

// INIT HELPER METHODS ZONE
import _Helper from '../helper';
const Helper = new _Helper();
// END INIT HELPER METHODS ZONEy

export default class _api {

    protected getCmdLink(cmdName: string) {
        return PATH_TO_API + cmdName + '/';
    }

    protected uniformPostRequest(request) {
        return {
            'private_key': CREDENTIALS.private_key,
            'header': {
                'date': Helper.getTimestamp(),
            },
            'request': request,
        };
    }

    protected showLoadingAnimation() {
        $('#loadingAnimation').show();
    }

    protected hideLoadingAnimation() {
        $('#loadingAnimation').hide();
    }

    public postRequest(cmdName: string, request, callbackFunction: (response) => void, withAnimation: boolean = true) {
        if (withAnimation) {
            this.showLoadingAnimation();
        }

        $.ajax({
            type: 'POST',
            url: this.getCmdLink(cmdName),
            data: this.uniformPostRequest(request),
            dataType: 'JSON',
            success: (response) => {
                callbackFunction(response);

                this.hideLoadingAnimation();
            },
        });
    }
}
