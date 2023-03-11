import Popup from "../Popup";
import {compile} from "handlebars";
import PopupDeleteUserTmpl from "./PopupDeleteUser.tmpl";
import {withActiveChatConnect} from "../../../hoc/withActiveChat";
import store from "../../../store/Store";
import ChatsController from "../../../api/chats/chats-controller";
import './PopupDeleteUser.styles.scss';
import Button from "../../../components/Button/Button";

/**
 * Модальное окно "Удалить пользователя из чата"
 */
class PopupDeleteUser extends Popup {
    constructor(props: any) {
        super(props);
          this.loadUsers()
    }

    loadUsers() {
        // TODO поправить тип
        const id = (store.getState().active as any)?.activeChat?.id;

        ChatsController.getUserChats(id).then(res => {
            const { status, response } = res as any;

            if (status === 200) {
                this.setProps({
                    user: JSON.parse(response)
                })
            }

        })
    }

    protected render(): DocumentFragment {
        this.children.deleteButton = new Button({
            type: 'button',
            page: 'Удалить',
            title: 'Удалить',
            events: {
                click: async (e: Event) => {
                    e.preventDefault();
                    // TODO: опправить тип
                    const id = (store.getState() as Record<string, any>).active?.activeChat?.id;
                    const form = document.getElementById('delete-user-popup-form');
                    const inputs = form?.querySelectorAll('input');

                    const formData: number[] = [];
                    inputs?.forEach((input) => {
                        if (input.checked) {
                            formData.push(Number(input.value));
                        }
                    });

                    const obj = {
                        users: formData,
                        chatId: Number(id)
                    }

                    try {
                        await ChatsController.deleteChatUsers(obj);
                        this.toggleClass();
                    } catch (e) {
                        alert('Ошибка удаления')
                    }
                }
            }
        });

        const tmpl = compile(this.getTemplate(PopupDeleteUserTmpl));
        return this.compile(tmpl, this.props);
    }
}

export default withActiveChatConnect(PopupDeleteUser);
