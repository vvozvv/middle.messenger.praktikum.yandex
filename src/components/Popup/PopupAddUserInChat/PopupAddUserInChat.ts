import Popup from "../Popup";
import {compile} from "handlebars";
import PopupTmpl from "./PopupAddUserInChat.tmpl";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import ChatsController from "../../../api/chats/chats-controller";
import {withActiveChat} from "../../../hoc/withActiveChat";
import {UserController} from "../../../api/user";

class PopupAddUserInChat extends Popup {
    protected render(): DocumentFragment {

        this.children.input = new Input({
            name: 'users',
            label: '',
            placeholder: 'Логин пользователя',
            type: 'text',
            events: {
                input: (e: Event) => {
                    // const string = (e.target as HTMLInputElement).value;
                    // UserController.searchUser(string).then(res => {
                    //     const { response } = res as any;
                    //     store.set('userfind', JSON.parse(response))
                    // })
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

                    const data = await UserController.searchUser(value ?? '');
                    const { response } = data as any;

                    await ChatsController.addUserInChat({
                        users: [JSON.parse(response)[0]?.id],
                        chatId: Number(this.props.activeChat?.id)
                    });
                    this.toggleClass();
                }
            }
        });

        const tmpl = compile(this.getTemplate(PopupTmpl))
        return this.compile(tmpl, this.props);
    }
}

export default withActiveChat(PopupAddUserInChat);