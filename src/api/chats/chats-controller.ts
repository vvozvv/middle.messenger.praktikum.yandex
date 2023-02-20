import ChatAPI from "./chats-api";
import {TCreateChats} from "../../core/types/chat.types";

export class ChatsController {
    private api: ChatAPI;

    constructor() {
        this.api = new ChatAPI();
    }

    public getChatMessages() {
        return this.api.getChatMessages();
    }

    public createChats(createObj: TCreateChats) {
        return this.api.createChats(createObj);
    }

    public deleteChat(id: number) {
        return this.api.deleteChat(id);
    }

    public setChatAvatar() {
        return this.api.setChatAvatar();
    }
}

export default new ChatsController();