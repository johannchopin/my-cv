// IMPORT API ZONE
import _api from './api'
// END IMPORT API ZONE

// IMPORT INTERFACE ZONE
import {
    ICreateUserAccountResponse, ISendMeEmailData, ISendEmailToAdminResponse,
} from '../commonInterface';
// END IMPORT INTERFACE ZONE


export default class ApiCmds {

    protected static Api = new _api();

    public static sendMeEmail(data: ISendMeEmailData, callbackFunction: (response: ISendEmailToAdminResponse) => void) {
        this.Api.postRequest('sendMeEmail', data, callbackFunction);
    }

}
