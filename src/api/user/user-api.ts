import {BaseAPI} from "../base-api";
import {TChangePassword} from "../../core/types/user.types";
import {ProfileResponse} from "../../core/types/common";

export class UserApi extends BaseAPI {
    constructor() {
        super('user/');
    }

    public updateProfile(updatedUserInfo: ProfileResponse)  {
        return this.http.put('profile', {
            data: updatedUserInfo
        })
    }

    public updateAvatar(data: FormData) {
        return this.http.put('profile/avatar', {
            data
        })
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
