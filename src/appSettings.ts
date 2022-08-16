// IMPORT APP SETTINGS ZONE
import * as SETTINGS from '../app-settings.json'
// END IMPORT APP SETTINGS ZONE

// INTERFACE ZONE
export interface IAppSettings {
    name: string,
    version: string,
    api_to_use: string,
    api: {
        local: string
        server: string
    }
}
// END INTERFACE ZONE

export default class AppSettings {
  public static settings: IAppSettings = SETTINGS
}
