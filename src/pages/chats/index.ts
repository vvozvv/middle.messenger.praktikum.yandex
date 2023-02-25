import { compile } from "handlebars";
import ChatPageTemplate from "./chats.tmpl";
import './chat.style.scss';
import Block from '../../core/Block';
import { FormData } from '../../core/types/common';
import { formArrayToObjectRequest } from '../../utils/helpers/functions';
import ChatsController from "../../api/chats/chats-controller";
import Button from "../../components/Button/Button";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatMessages from "./components/ChatMessages/ChatMessages";
import ChatBottomPanel from "./components/ChatBottomPanel/ChatBottomPanel";
import ChatList from "./components/ChatList/ChatList";
import Input from "../../components/Input/Input";
import {PopupAddChat} from "../../components/Popup";

/**
 * Главная "Чаты"
 */
class ChatsPage extends Block {
    constructor() {
        super();
    }
    private sendMessage(e: MouseEvent) {
        e.preventDefault();
        const form = document.getElementById('chat-message');
        const inputs = form?.querySelectorAll('input');

        const formData: FormData[] = [];
        inputs?.forEach((input) => {
            formData.push({ name: input.name, value: input.value, type: input.type });
        });

        const objForm = formArrayToObjectRequest(formData);

        ChatsController.sendMessage(objForm?.message);
    }

    render(): DocumentFragment {
        this.children.newChatButton = new Button({
            type: 'button',
            page: 'Добавить чат',
            title: 'Добавить чат',
            events: {
                click: (e: Event) => {
                    e.preventDefault()
                    this.children.addChatPopup.toggleClass();
                }
            }
        });

        this.children.profileHeader = new ProfileHeader();
        this.children.chatHeader = new ChatHeader();
        this.children.content = new ChatMessages();
        this.children.bottomPanel = new ChatBottomPanel({
            events: {
                submit: (e: MouseEvent) => this.sendMessage(e),
            }
        });
        this.children.chatList = new ChatList({});
        this.children.inputSearch = new Input({
            name: 'search',
            label: '',
            placeholder: 'Поиск',
            type: 'text',
            validation: {},
        });
        this.children.addChatPopup = new PopupAddChat({});

        const template = compile(ChatPageTemplate);
        return this.compile(template, this.props)
    }
}

export default ChatsPage;