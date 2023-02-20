import {BaseAPI} from "../base-api";
import {TChangePassword} from "../../core/types/user.types";

export class UserApi extends BaseAPI {
    constructor() {
        super('user/');
    }

    public getUpdateProfile() {
        return this.http.put('profile', {})
    }

    public getUpdateAvatar() {
        return this.http.put('profile/avatar', {})
    }

    public getUpdatePassword(passwordObj: TChangePassword) {
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