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

export interface ISendMeEmailData {
    from: string,
    subject: string,
    message: string,
}


export interface ISendEmailToAdminResponse extends IRequestResponse {
    response: {
        hasEmailBeSend: boolean,
    }
}

export interface ISendMeEmailResponse extends IRequestResponse {
    response: {
        hasEmailBeSend: boolean,
    }
}
// END API INTERFACES

// TYPES ZONE
// TODO: Replace personalExperiences to personalExperiencesPage
export type TPages = 'introductionPage' | 'timeLinePage' | 'skillsPage' | 'hobbiesPage' | 'personalExperiencesPage' | 'projectsPage' | 'contactPage';
export type TLanguages = 'en' | 'fr' | 'de';
export type TSimpleModalType = 'success' | 'warning' | 'danger';
// END TYPES ZONE