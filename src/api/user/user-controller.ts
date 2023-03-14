import {UserApi} from "./user-api";
import {TChangePassword} from "../../core/types/user.types";
import {PAGE} from "../../modules/router";
import {checkErrorRequest} from "../../utils/checkErrorRequest";
import {ProfileResponse} from "../../core/types/common";

class UserController {
    private api: UserApi;

    constructor() {
        this.api = new UserApi();
    }

    public async updateProfile(updatedUserInfo: ProfileResponse) {
       await checkErrorRequest(this.api.updateProfile(updatedUserInfo), PAGE.PROFILE)
    }

    public updateAvatar(data: FormData) {
        return this.api.updateAvatar(data);
    }

    public async updatePassword(passwordObj: TChangePassword) {
        await checkErrorRequest(this.api.updatePassword(passwordObj), PAGE.PROFILE)
    }

    public getUserInfoById(id: number) {
        return this.api.getUserInfoById(id);
    }

    public searchUser(login: string) {
        return this.api.searchUser(login);
    }
}

export default new UserController();
