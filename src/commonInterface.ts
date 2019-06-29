export interface ISimpleModalParams {
    type?: TSimpleModalType,
    message?: string,
}

// API INTERFACES
export interface IRequestResponse {
    success: boolean,
}

export interface ICreateUserAccountResponse extends IRequestResponse {
    response: {
        hasUserBeenCreated: boolean,
    }
}

export interface ISendEmailToAdminData {
    subject: string,
    msg: string,
}

export interface ISendEmailToAdminResponse extends IRequestResponse {
    response: {
        hasEmailBeSend: boolean,
    }
}
// END API INTERFACES

// TYPES ZONE
export type TPages = 'introductionPage' | 'backgroundPage';
export type TLanguages = 'en' | 'fr' | 'de';
export type TSimpleModalType = 'success' | 'warning' | 'danger';
// END TYPES ZONE