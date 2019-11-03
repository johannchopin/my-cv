const LINK_TO_PHP_LOCAL_API = 'http://localhost:8082/api-common/src/api/';
const LINK_TO_PHP_SERVER_API = 'https://api.johannchopin.fr/advents_kalender/api/cmds/';

const PATH_TO_API = LINK_TO_PHP_LOCAL_API;

// IMPORT CREDENTIALS
import * as CREDENTIALS from './credentials.json';
// END IMPORT CREDENTIALS

// INIT HELPER METHODS ZONE
import Helper from '../helper';
// END INIT HELPER METHODS ZONEy

export default class _api {

    protected getCmdLink(cmdName: string) {
        return PATH_TO_API + 'cmds/' + cmdName + '/';
    }

    protected uniformPostRequest(request) {
        return {
            'header': {
                'private_key': CREDENTIALS.private_key,
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
