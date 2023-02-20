import {AuthApi} from "./auth-api";
import {ProfileResponse, TAuthUser} from "../../core/types/common";

class AuthController {
    private api: AuthApi;

    constructor() {
        this.api = new AuthApi();
    }
    public signUp(candidateUser: ProfileResponse) {
        return this.api.signUp(candidateUser);
    }

    public signIn(candidateUser: TAuthUser) {
        return this.api.signIn(candidateUser);
    }

    public logout() {
        return this.api.logout();
    }

    public getUser() {
        return this.api.getUser()
    }
}

export default new AuthController();