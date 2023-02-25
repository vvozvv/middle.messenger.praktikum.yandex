import Popup from "../Popup";
import {compile} from "handlebars";
import PopupDeleteUserTmpl from "./PopupDeleteUser.tmpl";
import {withActiveChatConnect} from "../../../hoc/withActiveChat";
import {UserController} from "../../../api/user";
import store from "../../../store/Store";

class PopupDeleteUser extends Popup {
    protected render(): DocumentFragment {
        const id = store.getState().active?.activeChat?.id;
        UserController.getUserChats(id)

        const tmpl = compile(this.getTemplate(PopupDeleteUserTmpl));
        return this.compile(tmpl, this.props);
    }
}

export default withActiveChatConnect(PopupDeleteUser);