import {BaseAPI} from "../base-api";
import {TChangePassword} from "../../core/types/user.types";

export class UserApi extends BaseAPI {
    constructor() {
        super('user/');
    }

    public updateProfile(updatedUserInfo: any): Promise<XMLHttpRequestResponseType>  {
        return this.http.put('profile', {
            data: updatedUserInfo
        })
    }

    public getUpdateAvatar() {
        return this.http.put('profile/avatar', {})
    }

    public updatePassword(passwordObj: TChangePassword) {
        return this.http.put('password', {
            data: passwordObj
        })
    }

    public getUserInfoById(id: number) {
        return this.http.get(`${id}`, {})
    }

    public searchUser(login: string) {
        return this.http.post('search', {
            data: {
                login
            }
        })
    }
}