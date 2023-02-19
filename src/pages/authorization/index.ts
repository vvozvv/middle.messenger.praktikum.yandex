import { compile } from "handlebars";
import {AuthorizationPageTemplate} from "./authorization.tmpl";
import './authorization.style.scss';
import Block from '../../core/Block';
import {FormData, TAuthUser} from '../../core/types/common';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { formArrayToObjectRequest } from '../../utils/helpers/functions';
import AuthController from "../../api/auth/auth-controller";

/**
 * Главная "Авторизация"
 */
export default class Authorization extends Block {
    constructor() {
        super({
            events: {
                submit: async (e: MouseEvent) => {
                    e.preventDefault();
                    const form = document.getElementById('authorization-form');
                    const inputs = form?.querySelectorAll('input');

                    const formData: FormData[] = [];
                    inputs?.forEach((input) => {
                        return formData.push({
                            name: input.name,
                            value: input.value,
                            type: input.type,
                        });
                    });

                    const objForm = formArrayToObjectRequest(formData);

                    await AuthController.signIn(objForm as TAuthUser);
                    const user = await AuthController.getUser();
                    console.log(JSON.parse(user?.response))
                },
            },
        });

    }
    render() {
        this.children.inputLogin = new Input({
            name: 'login',
            label: 'Логин',
            placeholder: 'Введите логин',
            type: 'text',
            validation: {
                required: true,
            }
        });
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
        this.children.button = new Button({
            type: 'submit',
            page: 'login',
            title: 'Log in',
        })

        const template = compile(AuthorizationPageTemplate);
        return this.compile(template, this.props);
    }
}
