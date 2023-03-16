import { compile } from "handlebars";
import Block from 'core/block/Block';
import {Link} from "components/Link";
import router from "core/router/Router";
import {PAGE} from "modules/router";
import AuthController from "api/auth/auth-controller";
import {ProfileImage} from "components/ProfileImage";
import {withUser} from "hoc/withUser";
import IconButton from "components/IconButton/IconButton";
import BackIcon from "assets/image/icon/back-square-svgrepo-com.svg";
import PopupUploadUserAvatar from "components/Popup/PupupUploadImage/PopupUploadUserAvatar";
import {ProfilePageTemplate} from "./profile.tmpl";
import './profile.style.scss';

/**
 * Страница "Профиль"
 */
class ProfilePage extends Block {
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

        this.children.popup = new PopupUploadUserAvatar({});

        this.children.imageLoader = new ProfileImage({
            events: {
                click: (e: Event) => {
                    e.preventDefault()
                    this.children.popup.toggleClass()
                }
            }
        });

      this.children.goMessagerButton = new IconButton({
        iconId: BackIcon,
        title: 'Вернуться к чатам',
        events: {
          click: () => {
            router.go(PAGE.CHATS)
          }
        }
      });


        const template = compile(ProfilePageTemplate);
        return this.compile(template, this.props);
    }
}

export default withUser(ProfilePage);
