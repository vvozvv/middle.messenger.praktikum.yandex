import Handlebars from "handlebars";
import {RegistrationPageTemplate} from "./registration.templ";
import './registration.style.scss';
import Block from '../../core/Block';

/**
 * Страница "Регистрация"
 */
export default class Registration extends Block {
    render() {
        const template = Handlebars.compile(RegistrationPageTemplate);
        return template({});
    }
}
