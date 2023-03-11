import {compile} from "handlebars";
import Block from "core/block/Block";
import {withActiveChat} from "hoc/withActiveChat";
import ChatMessageContentTmpl from "./ChatMessageContent.tmpl";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatBottomPanel from "../ChatBottomPanel/ChatBottomPanel";
import store from "store/Store";
import Spinner from "components/Spinner/Spinner";

class ChatMessageContent extends Block {
  constructor() {
    super({
      events: {
        load: () => {
          if (store.getState().active?.messages?.length) {
            // document.getElementsByClassName('chat-content__scroll')[0].scrollIntoView(false);
          }
        }
      }
    });
  }

  protected render() {
    this.children.chatHeader = new ChatHeader({});
    this.children.content = new ChatMessages({});
    this.children.bottomPanel = new ChatBottomPanel();
    this.children.spinner = new Spinner();

    const tmpl = compile(ChatMessageContentTmpl);
    return this.compile(tmpl, this.props);
  }
}

export default withActiveChat(ChatMessageContent);
