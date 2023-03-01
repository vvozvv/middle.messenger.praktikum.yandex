import { compile } from "handlebars";
import {RegistrationPageTemplate} from "./registration.templ";
import './registration.style.scss';
import Block from '../../core/Block';
import {FormData, ProfileResponse} from '../../core/types/common';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { formArrayToObjectRequest } from '../../utils/helpers/functions';
import AuthController from "../../api/auth/auth-controller";

/**
 * Страница "Регистрация"
 */
export default class Registration extends Block {
    constructor() {
        super({
            events: {
                submit: async (e: MouseEvent) => {
                    e.preventDefault();
                    const form = document.getElementById('registration-form');
                    const inputs = form?.querySelectorAll('input');

                    const formData: FormData[] = [];
                    inputs?.forEach((input) => {
                        formData.push({ name: input.name, value: input.value, type: input.type });
                    });

                    const dataWithoutRetryPassword = formData.filter(item => item.name !== 'passwordSecond');
                    const resultObj = formArrayToObjectRequest(dataWithoutRetryPassword);

                    await AuthController.signUp(resultObj as ProfileResponse);
                },
            },
        });
    }
    render() {
        this.children.inputPassword = new Input({
            name: 'password',
            label: 'Пароль',
            placeholder: 'Введите пароль',
            type: 'password',
            validation: {
                required: true,
                min: 6,
                isPassword: true
            }
        });
        this.children.inputPasswordSecond = new Input({
            name: 'passwordSecond',
            label: 'Повторите пароль',
            placeholder: 'Повторите пароль',
            type: 'password',
            validation: {
                required: true,
                isRetryPassword: 'password'
            }
        });
        this.children.inputEmail = new Input({
            name: 'email',
            label: 'Почта',
            placeholder: 'Введите почту',
            type: 'email',
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
            validation: {
                required: true,
            }
        });
        this.children.inputSurname = new Input({
            name: 'second_name',
            label: 'Фамилия',
            placeholder: 'Введите фамилию',
            type: 'text',
            validation: {
                required: true,
            }
        });
        this.children.inputPhone = new Input({
            name: 'phone',
            label: 'Телефон',
            placeholder: 'Введите телефон',
            type: 'tel',
            validation: {
                required: true,
                isPhone: true
            }
        });
        this.children.buttonSubmit = new Button({
            type: 'submit',
            page: 'register',
            title: 'Зарегистрироваться',
        });

        const template = compile(RegistrationPageTemplate);
        return this.compile(template, this.props)
    }
}
