import {BaseAPI} from "../base-api";
import {ProfileResponse, TAuthUser} from "../../core/types/common";

export class AuthApi extends BaseAPI {
    constructor() {
        super('auth/');
    }

    public signUp(candidate: ProfileResponse) {
        return this.http.post('signUp', { data: candidate })
    }

    public signIn(user: TAuthUser) {
        return this.http.post('signIn', { data: user })
    }

    public logout() {
        return this.http.post('logout');
    }

    public getUser() {
        return this.http.get('user')
    }
}