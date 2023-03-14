import Popup from "../Popup";
import {compile} from "handlebars";
import PopupDeleteChatTmpl from "./PopupDeleteChat.tmpl";
import Button from "../../../components/Button/Button";
import './PopupDeleteChat.styles.scss';
import ChatsController from "../../../api/chats/chats-controller";
import {withActiveChat} from "../../../hoc/withActiveChat";

/**
 * Модальное окно "Удалить чат"
 */
class PopupDeleteChat extends Popup {
    protected render(): DocumentFragment {
        this.children.closeButton = new Button({
            type: 'button',
            appearance: 'bordered',
            page: 'delete-popup',
            title: 'Отмена',
            events: {
                click: () => {
                    this.toggleClass()
                }
            }
        });
        this.children.deleteButton = new Button({
            type: 'button',
            page: 'delete-popup',
            title: 'Удалить',
            events: {
                click: async () => {
                    try {
                        const chatId = this.props?.active?.id;
                        await ChatsController.deleteChat(Number(chatId));
                        await ChatsController.getChatMessages();
                    } catch (e) {
                        alert(e);
                    } finally {
                        this.toggleClass();
                    }
                }
            }
        });


        const tmpl = compile(this.getTemplate(PopupDeleteChatTmpl))
        return  this.compile(tmpl, this.props)
    }
}
export default withActiveChat(PopupDeleteChat);
