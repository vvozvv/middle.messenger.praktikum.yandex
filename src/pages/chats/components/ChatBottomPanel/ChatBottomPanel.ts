import Block from "core/block/Block";
import {compile} from "handlebars";
import ChatBottomPanelTmpl from "./ChatBottomPanel.tmpl";
import Input from "components/Input/Input";
import {FormData} from "core/types/common";
import {formArrayToObjectRequest} from "utils/helpers/functions";
import ChatsController from "api/chats/chats-controller";
// import FileIcon from 'assets/image/icon/file.svg';
// import SendIcon from 'assets/image/icon/send.svg';

const FileIcon = require('assets/image/icon/file.svg');
const SendIcon = require('assets/image/icon/send.svg');
import {Icon} from "components/Icon";

class ChatBottomPanel extends Block {
  constructor() {
    super({
      events: {
        submit: (e: MouseEvent) => {
          e.preventDefault()
          this.sendMessage(e);
        }
      }
    });
  }

  private sendMessage(e: MouseEvent) {
    e.preventDefault();
    const form = document.getElementById('chat-message') as HTMLFormElement;
    const inputs = form?.querySelectorAll('input');

    const formData: FormData[] = [];
    inputs?.forEach((input) => {
      formData.push({ name: input.name, value: input.value, type: input.type });
    });

    const objForm = formArrayToObjectRequest(formData);
    const resultForm = Object
      .entries(objForm)
      .reduce((acc, [key, value]) => value ? {...acc, [key]: value} : acc, {});

    if (Object.keys(resultForm).length) {
      ChatsController.sendMessage(objForm?.message);
      form.reset();
    }
  }

    protected render() {
      this.children.inputSearch = new Input({
        name: 'message',
        label: '',
        placeholder: 'Введите сообщение',
        type: 'text',
        showErrorMessage: false,
        className: 'input--transparent',
        validation: {
          required: true
        },
      });

      this.children.fileIcon = new Icon({
        content: FileIcon,
        width: 35,
        height: 35
      });

      this.children.sendFile = new Icon({
        content: SendIcon,
        width: 35,
        height: 35
      })

      const tmpl = compile(ChatBottomPanelTmpl);
      return this.compile(tmpl, this.props);
    }
}

export default ChatBottomPanel;
