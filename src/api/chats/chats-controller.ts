import ChatAPI from "./chats-api";
import {TChat, TCreateChats} from "../../core/types/chat.types";
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
        const data = await this.api.getChatMessages();
        const content = JSON.parse((data as any)?.response ?? []) as TChat[];
        const transformData = content
            .sort(sortMessages)
            .map(item => transformChatsToDisplay(item));

        store.set('chat', transformData);
    }

    async createChats(createObj: TCreateChats) {
        try {
            await this.api.createChats(createObj);
            await this.api.getChatMessages();
        } catch (e) {
            alert('Ошибка')
        }
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

    addUserInChat(usersChatPayload: any) {
        return this.api.addUserInChat(usersChatPayload);
    }

    async setSocketConnection(userId: string, chatId: string) {
        const data = (await this.api.getToken(chatId)) as unknown as Record<string, unknown>;

        const endpoint = `${userId}/${chatId}/${JSON.parse(data?.response)?.token}`;

        this.socket = new SocketConnection(endpoint);
    }
}

export default new ChatsController();