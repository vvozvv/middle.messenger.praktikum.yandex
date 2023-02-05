import { compile } from "handlebars";
import {ProfilePageTemplate} from "./profile.tmpl";
import './profile.style.scss';
import Block from '../../core/Block';

/**
 * Страница "Профиль"
 */
export default class ProfilePage extends Block {
    constructor() {
        super();
    }

    render() {
        const template = compile(ProfilePageTemplate);
        return this.compile(template, this.props);
    }
}
