import Block from "../../../../core/Block";
import {compile} from "handlebars";
import ChatMessagesTmpl from "./ChatMessages.tmpl";
import {withActiveChat} from "../../../../hoc/withActiveChat";

class ChatMessages extends Block {
    protected render(): any {
        const tmpl = compile(ChatMessagesTmpl);
        return this.compile(tmpl, this.props);
    }
}

export default withActiveChat(ChatMessages);