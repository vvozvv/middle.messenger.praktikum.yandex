import Block from "../../../../core/Block";
import {compile} from "handlebars";
import ChatMessageContentTmpl from "./ChatMessageContent.tmpl";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatBottomPanel from "../ChatBottomPanel/ChatBottomPanel";
import {FormData} from "../../../../core/types/common";
import {formArrayToObjectRequest} from "../../../../utils/helpers/functions";
import ChatsController from "../../../../api/chats/chats-controller";
import {withActiveChat} from "../../../../hoc/withActiveChat";

class ChatMessageContent extends Block {

  private sendMessage(e: MouseEvent) {
    e.preventDefault();
    const form = document.getElementById('chat-message') as HTMLFormElement;
    const inputs = form?.querySelectorAll('input');

    const formData: FormData[] = [];
    inputs?.forEach((input) => {
      formData.push({ name: input.name, value: input.value, type: input.type });
    });

    const objForm = formArrayToObjectRequest(formData);

    ChatsController.sendMessage(objForm?.message);
    form.reset();
  }

  protected render() {
    this.children.chatHeader = new ChatHeader({});
    this.children.content = new ChatMessages({});
    this.children.bottomPanel = new ChatBottomPanel({
      events: {
        submit: (e: MouseEvent) => this.sendMessage(e),
      }
    });

    const tmpl = compile(ChatMessageContentTmpl)
    return this.compile(tmpl, this.props);
  }
}

export default withActiveChat(ChatMessageContent);