import {compile} from "handlebars";
import Block from "core/block/Block";
import DeleteProfileIcon from "assets/image/icon/delete-profile.svg";
import AddSquareIcon from "assets/image/icon/add-square.svg";
import DeleteIcon from "assets/image/icon/delete.svg";
import IconButton from "components/IconButton/IconButton";
import {PopupAddUser, PopupDeleteChat, PopupDeleteUser} from "components/Popup";
import {withActiveChat} from "hoc/withActiveChat";
import ChatHeaderTmpl from "./ChatHeader.tmpl";

class ChatHeader extends Block {
    protected render(): any {
        this.children.buttonDeleteProfile = new IconButton({
            iconId: DeleteProfileIcon.id,
            title: 'Удалить пользователя',
            events: {
                click: () => {
                    this.children.popupDeleteUser.toggleClass()
                }
            }
        });
        this.children.buttonAdd = new IconButton({
          iconId: AddSquareIcon.id,
            title: 'Добавить пользователя',
            events: {
                click: () => {
                    this.children.popupAddUser.toggleClass()
                }
            }
        });
        this.children.buttonDelete = new IconButton({
            iconId: DeleteIcon.id,
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

export default withActiveChat(ChatHeader);
