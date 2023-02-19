import { compile } from "handlebars";
import ChatPageTemplate from "./chats.tmpl";
import './chat.style.scss';
import Block from '../../core/Block';
import { FormData } from '../../core/types/common';
import { formArrayToObjectRequest } from '../../utils/helpers/functions';
import Message from '../../components/Message/Message';
import { formatDate, getTime } from '../../utils/data';
import ChatItems from '../../components/ChatItems/ChatItems';

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

                    const formData: FormData[] = [];
                    inputs?.forEach((input) => {
                        formData.push({ name: input.name, value: input.value, type: input.type });
                    });

                    const objForm = formArrayToObjectRequest(formData);

                    console.log(objForm);
                },
            },
        });
    }

    render(): DocumentFragment {
        this.children.message = new Message({
            me: true, text: 'Теперь мое сообщение', date: formatDate(new Date()),
        });
        this.children.messageMore = new Message({
            me: false, text: 'Не мое сообщение', date: formatDate(new Date()),
        });
        this.children.chatOne = new ChatItems({
            name: 'Alexey', text: 'Не мое сообщение', time: getTime(new Date()), count: 10,
        });
        this.children.chatTwo = new ChatItems({
            name: 'Alexey', active: true, text: 'Не мое сообщение', time: getTime(new Date()), count: 0
        });
        const template = compile(ChatPageTemplate);
        return this.compile(template, this.props)
    }
}
