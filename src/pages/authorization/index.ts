import Handlebars from "handlebars";
import {AuthorizationPageTemplate} from "./authorization.tmpl";
import './authorization.style.scss';
import Block from '../../core/Block';

/**
 * Главная "Авторизация"
 */
export default class Authorization extends Block {
    render() {
        const template = Handlebars.compile(AuthorizationPageTemplate);
        return template({});
    }
}
