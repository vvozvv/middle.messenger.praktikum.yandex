import { compile } from "handlebars";
import {ProfilePageTemplate} from "./profile.tmpl";
import './profile.style.scss';
import Block from '../../core/Block';
import {Link} from "../../components/Link";
import router from "../../core/router/Router";
import {PAGE} from "../../modules/router";
import AuthController from "../../api/auth/auth-controller";
import {ProfileImage} from "../../components/ProfileImage";
import {PopupUploadImage} from "../../components/Popup";
import {withUser} from "../../hoc/withUser";
import IconButton from "../../components/IconButton/IconButton";
import BackIcon from "../../assets/image/icon/back-square-svgrepo-com.svg";

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

        this.children.popup = new PopupUploadImage({});

        this.children.imageLoader = new ProfileImage({
            events: {
                click: (e: Event) => {
                    e.preventDefault()
                    this.children.popup.toggleClass()
                }
            }
        });

      this.children.goMessagerButton = new IconButton({
        icon: BackIcon,
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
