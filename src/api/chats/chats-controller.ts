import ChatAPI from "./chats-api";
import {TChat, TCreateChats, TOperationChat} from "../../core/types/chat.types";
import SocketConnection from "../soket/SocketConnection";
import store from "../../store/Store";
import {transformChatsToDisplay} from "../../utils/helpers/api";
import {sortMessages} from "../../utils/helpers/functions";

class ChatsController {
    private api: ChatAPI;
    private socket: SocketConnection | null;

    constructor() {
        this.api = new ChatAPI();
        this.socket = null;
    }

    async getChatMessages() {
        try {
          const data = await this.api.getChatMessages();
          const content = JSON.parse((data as any)?.response ?? []) as TChat[];
          const transformData = content
            .sort(sortMessages)
            .map(item => transformChatsToDisplay(item));

          store.set('chat', transformData);
        } catch (e) {
          console.log(e)
        }
    }

    async createChats(createObj: TCreateChats) {
        try {
            await this.api.createChats(createObj);
            await this.api.getChatMessages();
        } catch (e) {
            alert('Ошибка')
        }
    }

    deleteChatUsers(usersChatPayload: TOperationChat) {
        return this.api.deleteUserInChat(usersChatPayload);
    }

    deleteChat(id: number) {
        return this.api.deleteChat(id);
    }

    setChatAvatar() {
        return this.api.setChatAvatar();
    }

    getToken(id: string) {
        return this.api.getToken(id);
    }

    getArchive(id: number) {
        return this.api.getChatsArchiveById(id);
    }

    sendMessage(message: string) {
        return this.socket?.sendMessage(message)
    }

    addUserInChat(usersChatPayload: TOperationChat) {
        return this.api.addUserInChat(usersChatPayload);
    }

    deleteUsers(usersChatPayload: TOperationChat) {
        return this.api.deleteUserInChat(usersChatPayload);
    }

    getUserChats(id: number) {
        return this.api.getUserChats(id);
    }

    async setSocketConnection(userId: string, chatId: string) {
        const data = (await this.api.getToken(chatId)) as unknown as Record<string, unknown>;
        const { response } = data as any;

        const endpoint = `${userId}/${chatId}/${JSON.parse(response)?.token}`;

        this.socket = new SocketConnection(endpoint);
    }
}

export default new ChatsController();
