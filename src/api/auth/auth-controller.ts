import {AuthApi} from "./auth-api";
import {ProfileResponse, TAuthUser} from "../../core/types/common";
import {PAGE} from "../../modules/router";
import {checkErrorRequest} from "../../utils/checkErrorRequest";
import store from "../../store/Store";

class AuthController {
    private api: AuthApi;

    constructor() {
        this.api = new AuthApi();
    }
    public signUp(candidateUser: ProfileResponse) {
        return this.api.signUp(candidateUser);
    }

    public async signIn(authUser: TAuthUser) {
      store.set('isLoadingAuth', true);
      await checkErrorRequest(this.api.signIn(authUser), PAGE.CHATS)
      store.set('isLoadingAuth', false);
    }

    public async logout() {
        await checkErrorRequest(this.api.logout(), PAGE.LOGIN)
    }

    public async getUser() {
        store.set('isLoadingUser', true);
        return this.api.getUser();
    }
}

export default new AuthController();
