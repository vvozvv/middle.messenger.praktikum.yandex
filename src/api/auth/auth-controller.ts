import {AuthApi} from "./auth-api";
import {ProfileResponse, TAuthUser} from "../../core/types/common";
import {PAGE} from "../../modules/router";
import {checkErrorRequest} from "../../utils/checkErrorRequest";

class AuthController {
    private api: AuthApi;

    constructor() {
        this.api = new AuthApi();
    }
    public signUp(candidateUser: ProfileResponse) {
        return this.api.signUp(candidateUser);
    }

    public async signIn(authUser: TAuthUser) {
        await checkErrorRequest(this.api.signIn(authUser), PAGE.CHATS)
    }

    public async logout() {
        await checkErrorRequest(this.api.logout(), PAGE.LOGIN)
    }

    public getUser() {
        return this.api.getUser()
    }
}

export default new AuthController();