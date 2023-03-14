import Block from "core/block/Block";
import {compile} from "handlebars";
import ChatsListTmpl from "./ChatsList.tmpl";
import ChatsController from "api/chats/chats-controller";
import store from "store/Store";
import {withChatsConnect} from "hoc/withChats";
import '../../chat.style.scss';

class ChatList extends Block {
  constructor() {
    super({
      events: {
        click: async (e: Event) => this.connection(e),
      },
    });
    ChatsController.getChatMessages();
  }

  protected async connection(event: Event) {
    const target = event.target as HTMLElement;
    const parentDiv = target.closest('.chat-item') as HTMLElement;
    const selectChatId = parentDiv.dataset.chatId;

    if (selectChatId) {
      store.set('active', undefined);

      try {
        store.set('isLoadingChat', true)
        const chat = store.getState().chat;
        const userId = store.getState()?.currentUser!.id;
        await ChatsController.setSocketConnection(Number(userId), selectChatId);
        const selectChat = chat.find(item => Number(item.id) === Number(selectChatId));
        const newChat = chat.map(item => ({
          ...item,
          active: Number(item.id) === Number(selectChatId)
        }))

        store.set('chat', newChat)
        store.set('active', {
          id: selectChatId,
          title: selectChat?.title,
          avatar: selectChat?.avatar,
          chat: selectChatId,
          messages: []
        });
      } catch (e) {
        alert('Произошла ошибка')
      }
    }
  };

  protected render() {
    const template = compile(ChatsListTmpl);
    return this.compile(template, this.props)
  }
}

export default withChatsConnect(ChatList);
