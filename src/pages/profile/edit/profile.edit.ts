import { compile } from "handlebars";
import router from "core/router/Router";
import Block from 'core/block/Block';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import {FormData, ProfileResponse} from 'core/types/common';
import { formArrayToObjectRequest } from 'utils/helpers/functions';
import store, {StoreEvents} from 'store/Store';
import {UserController} from "api/user";
import {ProfileImage} from "components/ProfileImage";
import {PopupUploadImage} from "components/Popup";
import IconButton from "components/IconButton/IconButton";
import BackIcon from "assets/image/icon/back-square-svgrepo-com.svg";
import {ProfileEditPageTemplate} from "./profile.edit.tmpl";
import {PAGE} from "modules/router";

/**
 * Страница "Профиль"
 */
export default class ProfileEditPage extends Block {
    constructor(props: any) {
        super({
            ...props,
            currentUser: store.getState()['currentUser'],
            events: {
                submit: async (e: MouseEvent) => {
                    e.preventDefault();
                    const form = document.getElementById('profile-edit-form');
                    const inputs = form?.querySelectorAll('input');

                    const formData: FormData[] = [];
                    inputs?.forEach((input) => {
                        formData.push({ name: input.name, value: input.value, type: input.type });
                    });

                    const resultObj = formArrayToObjectRequest(formData) as ProfileResponse;

                    await UserController.updateProfile(resultObj);
                },
            },
        });

        this.children.popup = new PopupUploadImage({});

        store.on(StoreEvents.Updated, () => {
            // вызываем обновление компонента, передав данные из хранилища
            this.setProps(store.getState());
        });
    }

    render() {
        this.children.inputEmail = new Input({
            name: 'email',
            label: 'Почта',
            placeholder: 'Введите почту',
            type: 'email',
            value: this.props?.currentUser?.email,
            validation: {
                required: true,
                isEmail: true
            }
        });
        this.children.inputLogin = new Input({
            name: 'login',
            label: 'Логин',
            placeholder: 'Введите логин',
            type: 'text',
            value: this.props?.currentUser?.login,
            validation: {
                required: true,
                min: 4,
                max: 20
            }
        });
        this.children.inputName = new Input({
            name: 'first_name',
            label: 'Имя',
            placeholder: 'Введите имя',
            type: 'text',
            value: this.props?.currentUser?.first_name,
            validation: {
                required: true,
            }
        });
        this.children.inputSurname = new Input({
            name: 'second_name',
            label: 'Фамилия',
            placeholder: 'Введите фамилию',
            type: 'text',
            value: this.props?.currentUser?.second_name,
            validation: {
                required: true,
            }
        });
        this.children.inputPhone = new Input({
            name: 'phone',
            label: 'Телефон',
            placeholder: 'Введите телефон',
            type: 'tel',
            value: this.props?.currentUser?.phone,
            validation: {
                required: true,
                isPhone: true
            }
        });
        this.children.displayName = new Input({
            name: 'display_name',
            label: 'Имя в чате',
            placeholder: 'Введите имя',
            type: 'text',
            value: this.props?.currentUser?.display_name,
            validation: {
                required: true,
            }
        });
        this.children.buttonSubmit = new Button({
            type: 'submit',
            page: 'profile-edit',
            title: 'Сохранить',
        });

        this.children.imageLoader = new ProfileImage({
            events: {
                click: (e: Event) => {
                    e.preventDefault()
                    this.children.popup.toggleClass()
                }
            }
        });

        this.children.goMessagerButton = new IconButton({
          iconId: BackIcon.id,
          title: 'Вернуться к чатам',
          events: {
            click: () => {
              router.go(PAGE.CHATS)
            }
          }
        });

        const template = compile(ProfileEditPageTemplate);
        return this.compile(template, this.props);
    }
}
