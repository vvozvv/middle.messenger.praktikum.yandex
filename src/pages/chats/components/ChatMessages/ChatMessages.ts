import Block from "../../../../core/Block";
import {compile} from "handlebars";
import ChatMessagesTmpl from "./ChatMessages.tmpl";
import store, {StoreEvents} from "../../../../store/Store";

class ChatMessages extends Block {
    constructor() {
        super();

        store.on(StoreEvents.Updated, () => {
            // вызываем обновление компонента, передав данные из хранилища
            this.setProps(store.getState());
        });
    }
    protected render(): any {
        const tmpl = compile(ChatMessagesTmpl);
        return this.compile(tmpl, this.props);
    }
}

export default ChatMessages;