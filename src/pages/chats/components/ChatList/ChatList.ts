import Block from "../../../../core/block/Block";
import {compile} from "handlebars";
import ChatsListTmpl from "./ChatsList.tmpl";
import ChatsController from "../../../../api/chats/chats-controller";
import store from "../../../../store/Store";
import {withChatsConnect} from "../../../../hoc/withChats";
import {TChat} from "../../../../core/types/chat.types";

class ChatList extends Block {
    constructor() {
        super({
            events: {
                click: async (e: Event) => this.connection(e),
            },
        });
        ChatsController.getChatMessages();
    }

    protected async connection(e: any) {
      const parentDiv = e.target.closest('.chat-item');
      const selectChatId = parentDiv.dataset.chatId;

      if (selectChatId) {
          try {
                const chat = (store.getState().chat ?? []) as Array<TChat>;
                // TODO: поправить тип
                const userId = (store.getState().currentUser as any)?.id;
                await ChatsController.setSocketConnection(userId, selectChatId);
                const selectChat = chat.find(item => Number(item.id) === Number(selectChatId));
                const newChat = chat.map(item => ({
                  ...item,
                  active: Number(item.id) === Number(selectChatId)
                }))

                store.set('chat', newChat)
                store.set('active.activeChat', {
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

    protected render(): any {
      console.log(this.props)
        const template = compile(ChatsListTmpl);
        return this.compile(template, this.props)
    }
}

export default withChatsConnect(ChatList);
