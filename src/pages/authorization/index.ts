import { compile } from "handlebars";
import {AuthorizationPageTemplate} from "./authorization.tmpl";
import './authorization.style.scss';
import Block from '../../core/Block';
import { FormData } from '../../core/types/common';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

/**
 * Главная "Авторизация"
 */
export default class Authorization extends Block {
    constructor() {
        super({
            events: {
                submit: (e: MouseEvent) => {
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

                    (inputs ?? []).forEach(item => {
                        return item
                    })

                    console.log(formData);
                },
            },
        });

    }
    render() {
        this.children.inputLogin = new Input({
            name: 'login',
            label: 'Логин',
            placeholder: 'Введите логин',
            type: 'text'
        });
        this.children.inputPassword = new Input({
            name: 'password',
            label: 'Пароль',
            placeholder: 'Введите пароль',
            type: 'password'
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
