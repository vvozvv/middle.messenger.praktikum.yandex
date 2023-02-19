import ChatAPI from "./chats-api";

export class ChatsController {
    private api: ChatAPI;

    constructor() {
        this.api = new ChatAPI();
    }
}