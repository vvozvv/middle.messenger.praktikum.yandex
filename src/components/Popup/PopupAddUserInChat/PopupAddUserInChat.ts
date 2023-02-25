import Popup from "../Popup";
import {compile} from "handlebars";
import PopupTmpl from "./PopupAddUserInChat.tmpl";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import ChatsController from "../../../api/chats/chats-controller";
import {withActiveChat} from "../../../hoc/withActiveChat";
import {UserController} from "../../../api/user";
import store from "../../../store/Store";

class PopupAddUserInChat extends Popup {
    protected render(): DocumentFragment {

        this.children.input = new Input({
            name: 'users',
            label: '',
            placeholder: 'Логин пользователя',
            type: 'text',
            events: {
                input: (e: Event) => {
                    const string = (e.target as HTMLInputElement).value;
                    UserController.searchUser(string).then(res => {
                        store.set('userfind', JSON.parse(res?.response))
                    })
                },
            }
        });

        this.children.buttonCreate = new Button({
            type: 'submit',
            page: 'Создать',
            title: 'Добавить пользователя',
            events: {
                click: async (e: Event) => {
                    e.preventDefault();
                    const form = document.getElementById('add-user-popup');
                    const value = form?.querySelector('input')?.value;

                    console.log(value)

                    await ChatsController.addUserInChat({
                        users: [value ?? ''],
                        chatId: Number(this.props.activeChat.id)
                    });
                }
            }
        });

        const tmpl = compile(this.getTemplate(PopupTmpl))
        return this.compile(tmpl, this.props);
    }
}

export default withActiveChat(PopupAddUserInChat);