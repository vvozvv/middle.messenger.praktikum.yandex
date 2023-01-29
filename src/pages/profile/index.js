import Handlebars from "handlebars";
import {ProfilePageTemplate} from "./profile.tmpl";
import './profile.style.scss';
import Block from '../../core/Block';

/**
 * Страница "Профиль"
 */
export default class ProfilePage extends Block {
    render() {
        const template = Handlebars.compile(ProfilePageTemplate);
        return template({});
    }
}
