import {UserApi} from "./user-api";
import {TChangePassword} from "../../core/types/user.types";

export class UserController {
    private api: UserApi;

    constructor() {
        this.api = new UserApi();
    }

    public getUpdateProfile() {
        return this.api.getUpdateProfile();
    }

    public getUpdateAvatar() {
        return this.api.getUpdateAvatar();
    }

    public getUpdatePassword(passwordObj: TChangePassword) {
        return this.api.getUpdatePassword(passwordObj);
    }

    public getUserInfoById(id: number) {
        return this.api.getUserInfoById(id);
    }

    public searchUser(login: string) {
        return this.api.searchUser(login);
    }
}