import Handlebars from "handlebars";
import {ChatPageTemplate} from "./chats.tmpl";
import './chat.style.scss';
import Block from '../../core/Block';

/**
 * Главная "Чаты"
 */
export default class ChatsPage extends Block {
    constructor() {
        super({
            events: {
                submit: (e: MouseEvent) => {
                    e.preventDefault();
                    const form = document.querySelector('form');
                    const inputs = form?.querySelectorAll('input');
                    const tooltips = document.getElementsByClassName('tooltip');
                    const errors:Array<string> = [];
                    Array.from(tooltips).forEach((tooltip: any) => {
                        errors.push(tooltip.dataset.error);
                    });
                    if (errors.includes('false')) {
                        throw new Error('Невозможно отправить пустое сообщение');
                    }

                    const formData: { name: string; value: string }[] = [];
                    inputs?.forEach((input) => {
                        formData.push({ name: input.name, value: input.value });
                    });
                    console.log(formData);
                },
            },
        });
    }
    render() {
        // return Handlebars.compile(ChatPageTemplate, this.props);
        const template = Handlebars.compile(ChatPageTemplate, this.props);
        return template({});
    }
}
