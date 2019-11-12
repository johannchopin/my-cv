// IMPORT CREDENTIALS
import * as CREDENTIALS from './credentials.json';
// END IMPORT CREDENTIALS

// IMPORT APP SETTINGS ZONE
import AppSettings from '../appSettings';
// END IMPORT APP SETTINGS ZONE

// INIT HELPER METHODS ZONE
import Helper from '../helper';
// END INIT HELPER METHODS ZONEy

export default class _api {

    protected PATH_TO_API: string;

    constructor() {
        this.setPathToApi();
    }

    protected setPathToApi(): void {
        this.PATH_TO_API = AppSettings.settings.api[AppSettings.settings.api_to_use];
    }

    protected getCmdLink(cmdName: string) {
        return this.PATH_TO_API + 'cmds/' + cmdName + '/';
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
