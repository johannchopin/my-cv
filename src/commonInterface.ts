export interface SimpleModalParams {
    type?: TSimpleModalType,
    message?: string,
}

// TYPES ZONE
export type Page = 'presentation' | 'education' | 'skills' | 'hobbies' | 'experiences' | 'projects' | 'contacts';
export type Language = 'en' | 'fr' | 'de';
export type TSimpleModalType = 'success' | 'warning' | 'danger';
// END TYPES ZONE
