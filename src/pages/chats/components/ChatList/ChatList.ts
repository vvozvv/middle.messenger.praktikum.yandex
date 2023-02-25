import Block from "../../../../core/Block";
import {compile} from "handlebars";
import ChatsListTmpl from "./ChatsList.tmpl";
import ChatsController from "../../../../api/chats/chats-controller";
import store from "../../../../store/Store";
import {withChatsConnect} from "../../../../hoc/withChats";

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
        if (e.target.dataset.chatId) {
            try {
                const selectChatId = e.target.dataset.chatId;
                const userId = store.getState().currentUser?.id;
                await ChatsController.setSocketConnection(userId, selectChatId);
                const selectChat = store.getState().chat.find(item => Number(item.id) === Number(selectChatId));
                const newChat = store.getState()?.chat.map(item => {
                    return {...item, active: Number(item.id) === Number(selectChatId)}
                })

                store.set('chat', newChat)
                store.set('active.activeChat', {
                    id: e.target.dataset.chatId,
                    title: selectChat?.title,
                    chat: e.target.dataset.chatId,
                    messages: []
                });
            } catch (e) {
                console.log(e)
                alert('Произошла ошибка')
            }
        }
    };

    protected render(): any {
        const template = compile(ChatsListTmpl);
        return this.compile(template, this.props)
    }
}

export default withChatsConnect(ChatList);