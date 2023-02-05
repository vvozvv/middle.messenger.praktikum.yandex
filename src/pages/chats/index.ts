import { compile } from "handlebars";
import ChatPageTemplate from "./chats.tmpl";
import './chat.style.scss';
import Block from '../../core/Block';

/**
 * Главная "Чаты"
 */
export default class ChatsPage extends Block {
    constructor() {
        super({
            chats: [
                { name: 'name', time: '22:00', text: 'text text text', count: 10, active: true },
                { name: 'Человечек  ', time: '12:00', text: 'Новое время', count: 2 }
            ],
            messages: [
                { date: '19:00', text: 'Hello', me: false },
                { date: '21:00', text: 'Привет', time: '12:00', me: true},
                { date: '21:00', text: 'Как дела?', time: '12:00', me: true}
            ],
            events: {
                submit: (e: MouseEvent) => {
                    e.preventDefault();
                    const form = document.getElementById('chat-message');
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

    render(): DocumentFragment {
        const template = compile(ChatPageTemplate);
        return this.compile(template, this.props)
    }
}
