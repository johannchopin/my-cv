// IMPORT API ZONE
import _api from './api'
// END IMPORT API ZONE

// IMPORT COOKIEHANDLER ZONE
import _cookieHandler from './cookieHandler';
const CookieHandler = new _cookieHandler();
// END IMPORT COOKIEHANDLER ZONE

// IMPORT INTERFACE ZONE
import {
    ICreateUserData,
    ICreateUserAccountResponse,
    IIsUserResponse,
    IToken,
    IIsTokenValidResponse,
    IForgetPwdData,
    IGetUserDataResponse,
    ISetLangData,
    TLanguages,
    ISetLangResponse,
    IChangePwdResponse,
    IChangePwdData
} from '../commonInterface';
// END IMPORT INTERFACE ZONE


export default class _apiCmds {

    protected Api = new _api();

    public createUserAccount(data: ICreateUserData, callbackFunction: (response: ICreateUserAccountResponse) => void) {
        this.Api.postRequest('createUserAwaitingConfirmation', data, callbackFunction);
    }

    public isUser(data: ICreateUserData, callbackFunction: (response: IIsUserResponse) => void) {
        this.Api.postRequest('isUser', data, callbackFunction);
    }

    public isTokenValid(data: IToken, callbackFunction: (response: IIsTokenValidResponse) => void) {
        this.Api.postRequest('isTokenValid', data, callbackFunction);
    }

    public sendForgetPwdMail(data: IForgetPwdData, callbackFunction: (response: IIsTokenValidResponse) => void) {
        this.Api.postRequest('sendForgetPwdMail', data, callbackFunction);
    }

    public getUserData(data: IToken, callbackFunction: (response: IGetUserDataResponse) => void) {
        this.Api.postRequest('getUserData', data, callbackFunction);
    }

    public setLang(data: ISetLangData, callbackFunction: (response: ISetLangResponse) => void) {
        data['token'] = CookieHandler.getCookie("token");

        this.Api.postRequest('setLang', data, callbackFunction, false);
    }

    public changePwd(data: IChangePwdData, callbackFunction: (response: IChangePwdResponse) => void) {
        this.Api.postRequest('changePwd', data, callbackFunction);
    }

}
