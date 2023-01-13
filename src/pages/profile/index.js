import Handlebars from "handlebars";
import {ProfilePageTemplate} from "./profile";
import './profile.style.scss';

const ProfilePage = () => {
	const template = Handlebars.compile(ProfilePageTemplate);
	return template({});
}

export default ProfilePage;
