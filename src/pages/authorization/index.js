import Handlebars from "handlebars";
import {AuthorizationPageTemplate} from "./authorization.tmpl";
import './authorization.style.scss';

/**
 * Главная "Авторизация"
 */
const Authorization = () => {
    const template = Handlebars.compile(AuthorizationPageTemplate);
    return template({});
}

export default Authorization;
