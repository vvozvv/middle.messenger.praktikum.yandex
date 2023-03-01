import { compile } from "handlebars";
import ChatPageTemplate from "./chats.tmpl";
import './chat.style.scss';
import Block from '../../core/Block';
import Button from "../../components/Button/Button";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import ChatList from "./components/ChatList/ChatList";
import Input from "../../components/Input/Input";
import {PopupAddChat} from "../../components/Popup";
import ChatMessageContent from "./components/ChatMessageContent/ChatMessageContent";
import router from "../../core/router/Router";

/**
 * Главная "Чаты"
 */
class ChatsPage extends Block {
  constructor() {
    super();
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

        this.children.chatList = new ChatList({});
        this.children.inputSearch = new Input({
            name: 'search',
            label: '',
            placeholder: 'Поиск',
            type: 'text',
            validation: {},
        });
        this.children.addChatPopup = new PopupAddChat({});
        this.children.messageContent = new ChatMessageContent({});

      this.children.buttonBack = new Button({
        type: 'button',
        page: 'profile-edit',
        appearance: 'ghost',
        title: 'Назад',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            router.back()
          }
        }
      });

        const template = compile(ChatPageTemplate);
        return this.compile(template, this.props)
    }
}

export default ChatsPage;