import Handlebars from "handlebars";
import {RegistrationPageTemplate} from "./registration.templ";
import './registration.style.scss';

/**
 * Страница "Регистрация"
 */
const Registration = () => {
	const template = Handlebars.compile(RegistrationPageTemplate);
	return template({});
}

export default Registration;
