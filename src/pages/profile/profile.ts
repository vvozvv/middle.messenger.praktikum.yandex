import { compile } from "handlebars";
import {ProfilePageTemplate} from "./profile.tmpl";
import './profile.style.scss';
import Block from '../../core/Block';
import AuthController from "../../api/auth/auth-controller";

/**
 * Страница "Профиль"
 */
export default class ProfilePage extends Block {
    constructor() {
        super();
    }

    render() {
        AuthController.getUser().then(res => {
            console.log(res?.response)
        });
        const template = compile(ProfilePageTemplate);
        return this.compile(template, this.props);
    }
}
