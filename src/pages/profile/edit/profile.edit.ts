import { compile } from "handlebars";
import {ProfileEditPageTemplate} from "./profile.edit.tmpl";
import Block from '../../../core/Block';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { profileMockData } from '../mock/profile.mock';
import { FormData } from '../../../core/types/common';
import { formArrayToObjectRequest } from '../../../utils/functions';

/**
 * Страница "Профиль"
 */
export default class ProfileEditPage extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                submit: (e: MouseEvent) => {
                    e.preventDefault();
                    const form = document.getElementById('profile-edit-form');
                    const inputs = form?.querySelectorAll('input');

                    const formData: FormData[] = [];
                    inputs?.forEach((input) => {
                        formData.push({ name: input.name, value: input.value, type: input.type });
                    });

                    const resultObj = formArrayToObjectRequest(formData);

                    console.log(resultObj);
                },
            },
        });
    }

    render() {
        this.children.inputEmail = new Input({
            name: 'email',
            label: 'Почта',
            placeholder: 'Введите почту',
            type: 'email',
            value: profileMockData.email,
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
            value: profileMockData.login,
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
            value: profileMockData.first_name,
            validation: {
                required: true,
            }
        });
        this.children.inputSurname = new Input({
            name: 'second_name',
            label: 'Фамилия',
            placeholder: 'Введите фамилию',
            type: 'text',
            value: profileMockData.second_name,
            validation: {
                required: true,
            }
        });
        this.children.inputPhone = new Input({
            name: 'phone',
            label: 'Телефон',
            placeholder: 'Введите телефон',
            type: 'tel',
            value: profileMockData.phone,
            validation: {
                required: true,
                isPhone: true
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
