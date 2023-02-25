import Popup from "../Popup";
import {compile} from "handlebars";
import PopupAddChatTmpl from "./PopupAddChat.tmpl";
import Input from "../../../components/Input/Input";
import './PopupAddChat.styles.scss';
import Button from "../../../components/Button/Button";
import ChatsController from "../../../api/chats/chats-controller";

class PopupAddChat extends Popup {
    protected render() {
        this.children.input = new Input({
            name: 'title',
            label: '',
            placeholder: 'Название чата',
            type: 'text',
            validation: {
                required: true
            }
        });

        this.children.buttonCreate = new Button({
            type: 'submit',
            page: 'Создать',
            title: 'Создать чат',
            events: {
                click: async (e: Event) => {
                    e.preventDefault();
                    const form = document.getElementById('add-chat-popup');
                    const value = form?.querySelector('input')?.value;

                    await ChatsController.createChats({
                        title: value ?? ''
                    });
                    await ChatsController.getChatMessages();

                    this.toggleClass();
                }
            }
        })

        const tmpl = compile(this.getTemplate(PopupAddChatTmpl));
        return this.compile(tmpl, this.props)
    }
}

export default PopupAddChat;