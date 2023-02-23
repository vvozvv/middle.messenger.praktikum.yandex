import { compile } from "handlebars";
import {ProfilePageTemplate} from "./profile.tmpl";
import './profile.style.scss';
import Block from '../../core/Block';
import store, {StoreEvents} from "../../store/Store";
import {Link} from "../../components/Link";
import router from "../../core/router/Router";
import {PAGE} from "../../modules/router";
import AuthController from "../../api/auth/auth-controller";
import {ProfileImage} from "../../components/ProfileImage";
import {PopupUploadImage} from "../../components/Popup/PupupUploadImage/PopupUploadImage";

/**
 * Страница "Профиль"
 */
export default class ProfilePage extends Block {
    constructor() {
        super({
            currentUser: store.getState()['currentUser'],
        });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        this.children.linkResetPassword = new Link({
            text: 'Изменить данные',
            events: {
                click: (e: Event) => {
                    e.preventDefault()
                    router.go(PAGE.PROFILE_EDIT)
                }
            }
        });

        this.children.linkChangePassword = new Link({
            text: 'Изменить пароль',
            events: {
                click: (e: Event) => {
                    e.preventDefault()
                    router.go(PAGE.PROFILE_PASSWORD_EDIT)
                }
            }
        });

        this.children.logout = new Link({
            text: 'Выйти',
            classList: 'link--danger',
            events: {
                click: async (e: Event) => {
                    e.preventDefault()
                    await AuthController.logout();
                }
            }
        });

        this.children.popup = new PopupUploadImage({});

        this.children.imageLoader = new ProfileImage({
            events: {
                click: (e: Event) => {
                    e.preventDefault()
                    this.children.popup.toggleClass()
                }
            }
        });

        const template = compile(ProfilePageTemplate);
        return this.compile(template, {
            ...this.props,
            ...this.props?.currentUser
        });
    }
}
