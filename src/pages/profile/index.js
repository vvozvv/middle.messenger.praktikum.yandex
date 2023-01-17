import Handlebars from "handlebars";
import {ProfilePageTemplate} from "./profile.tmpl";
import './profile.style.scss';

/**
 * Страница "Профиль"
 */
const ProfilePage = () => {
	const template = Handlebars.compile(ProfilePageTemplate);
	return template({});
}

export default ProfilePage;
