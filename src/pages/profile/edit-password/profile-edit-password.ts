import { compile } from "handlebars";
import Block from '../../../core/Block';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { FormData } from '../../../core/types/common';
import { formArrayToObjectRequest } from '../../../utils/helpers/functions';
import {ProfileEditPageTemplate} from "./profile-edit-password.tmpl";
import {UserController} from "../../../api/user";
import {TFormPassword} from "../../../core/types/user.types";

/**
 * Страница "Профиль"
 */
export default class ProfileEditPasswordEditPage extends Block {
    constructor(props: any) {
        super({
            ...props,
            events: {
                submit: async (e: MouseEvent) => {
                    e.preventDefault();
                    const form = document.getElementById('profile-edit-password-form');
                    const inputs = form?.querySelectorAll('input');

                    const formData: FormData[] = [];
                    inputs?.forEach((input) => {
                        formData.push({ name: input.name, value: input.value, type: input.type });
                    });

                    const resultObj = formArrayToObjectRequest(formData) as TFormPassword;
                    const { passwordSecond, ...rest } = resultObj;

                    await UserController.updatePassword(rest);
                },
            },
        });
    }

    render() {

        this.children.inputOldPassword = new Input({
            name: 'oldPassword',
            label: 'Старый пароль',
            placeholder: 'Введите старый пароль',
            type: 'password',
            validation: {
                required: true,
                isPassword: true
            }
        });

        this.children.inputPassword = new Input({
            name: 'newPassword',
            label: 'Новый пароль',
            placeholder: 'Введите новый пароль',
            type: 'password',
            validation: {
                required: true,
                isPassword: true
            }
        });

        this.children.inputPasswordSecond = new Input({
            name: 'passwordSecond',
            label: 'Повторите новый пароль',
            placeholder: 'Повторите новый пароль',
            type: 'password',
            validation: {
                required: true,
                isRetryPassword: 'password'
            }
        });

        this.children.buttonSubmit = new Button({
            type: 'submit',
            page: 'profile-edit',
            title: 'Сохранить',
        });

        const template = compile(ProfileEditPageTemplate);
        return this.compile(template, this.props);
    }
}
