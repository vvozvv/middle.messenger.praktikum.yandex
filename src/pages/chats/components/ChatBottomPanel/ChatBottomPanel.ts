import Block from "../../../../core/Block";
import {compile} from "handlebars";
import ChatBottomPanelTmpl from "./ChatBottomPanel.tmpl";

class ChatBottomPanel extends Block {
    protected render(): any {
        const tmpl = compile(ChatBottomPanelTmpl);
        return this.compile(tmpl, this.props);
    }
}

export default ChatBottomPanel;