import Block from "../../../../core/Block";
import {compile} from "handlebars";
import ChatMessageContentTmpl from "./ChatMessageContent.tmpl";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatBottomPanel from "../ChatBottomPanel/ChatBottomPanel";
import {withActiveChat} from "../../../../hoc/withActiveChat";

class ChatMessageContent extends Block {

  protected render() {
    this.children.chatHeader = new ChatHeader({});
    this.children.content = new ChatMessages({});
    this.children.bottomPanel = new ChatBottomPanel();

    const tmpl = compile(ChatMessageContentTmpl)
    return this.compile(tmpl, this.props);
  }
}

export default withActiveChat(ChatMessageContent);
