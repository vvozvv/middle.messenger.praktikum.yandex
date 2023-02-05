import { compile } from "handlebars";
import {RegistrationPageTemplate} from "./registration.templ";
import './registration.style.scss';
import Block from '../../core/Block';
import { FormData } from '../../core/types/common';

/**
 * Страница "Регистрация"
 */
export default class Registration extends Block {
    constructor() {
        super({
            events: {
                submit: (e: MouseEvent) => {
                    e.preventDefault();
                    const form = document.getElementById('registration-form');
                    const inputs = form?.querySelectorAll('input');

                    const formData: FormData[] = [];
                    inputs?.forEach((input) => {
                        formData.push({ name: input.name, value: input.value });
                    });
                    console.log(formData);
                },
            },
        });
    }
    render() {
        const template = compile(RegistrationPageTemplate);
        return this.compile(template, this.props)
    }
}
