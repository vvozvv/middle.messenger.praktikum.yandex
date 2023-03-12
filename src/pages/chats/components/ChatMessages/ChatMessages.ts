import Block from "../../../../core/block/Block";
import {compile} from "handlebars";
import ChatMessagesTmpl from "./ChatMessages.tmpl";
import {withActiveChat} from "../../../../hoc/withActiveChat";

class ChatMessages extends Block {
    protected render() {
        const tmpl = compile(ChatMessagesTmpl);
        return this.compile(tmpl, this.props);
    }
}

export default withActiveChat(ChatMessages);
