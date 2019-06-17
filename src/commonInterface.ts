// API INTERFACES
export interface IRequestResponse {
    success: boolean,
}

export interface ICreateUserAccountResponse extends IRequestResponse {
    response: {
        hasUserBeenCreated: boolean,
    }
}
// END API INTERFACES

// TYPES ZONE
export type TPages = 'introductionPage';
export type TLanguages = 'en' | 'fr' | 'de';
// END TYPES ZONE