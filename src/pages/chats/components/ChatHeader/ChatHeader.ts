import Block from "../../../../core/Block";
import {compile} from "handlebars";
import ChatHeaderTmpl from "./ChatHeader.tmpl";
import store, {StoreEvents} from "../../../../store/Store";
import DeleteProfileIcon from "../../../../assets/image/icon/delete-profile.svg";
import AddSquareIcon from "../../../../assets/image/icon/add-square.svg";
import DeleteIcon from "../../../../assets/image/icon/delete.svg";
import IconButton from "../../../../components/IconButton/IconButton";
import {PopupAddUser, PopupDeleteChat, PopupDeleteUser} from "../../../../components/Popup";

export default class ChatHeader extends Block {
    constructor() {
        super();

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    protected render(): any {
        this.children.buttonDeleteProfile = new IconButton({
            icon: DeleteProfileIcon,
            title: 'Удалить пользователя',
            events: {
                click: () => {
                    this.children.popupDeleteUser.toggleClass()
                }
            }
        });
        this.children.buttonAdd = new IconButton({
            icon: AddSquareIcon,
            title: 'Добавить пользователя',
            events: {
                click: () => {
                    this.children.popupAddUser.toggleClass()
                }
            }
        });
        this.children.buttonDelete = new IconButton({
            icon: DeleteIcon,
            title: 'Удалить чат',
            events: {
                click: () => {
                    this.children.popupDeleteChat.toggleClass()
                }
            }
        });

        this.children.popupAddUser = new PopupAddUser({});
        this.children.popupDeleteChat = new PopupDeleteChat({});
        this.children.popupDeleteUser = new PopupDeleteUser({});


        const tmpl = compile(ChatHeaderTmpl);
        return this.compile(tmpl, this.props)
    }
}