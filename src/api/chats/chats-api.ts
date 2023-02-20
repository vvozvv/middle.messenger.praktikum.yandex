import {BaseAPI} from "../base-api";
import {TCreateChats} from "../../core/types/chat.types";

class ChatAPI extends BaseAPI {
    constructor() {
        super('chats/');
    }

    /**
     * Получить сообщения чата;
     */
    public getChatMessages() {
        return this.http.get('', {})
    }

    /**
     * Создать чат;
     */
    public createChats(createObj: TCreateChats) {
        return this.http.post('', {
            data: createObj
        })
    }

    /**
     * Удалить чат;
     */
    public deleteChat(id: number) {
        return this.http.delete('', {
            data: {
                chatId: id
            }
        })
    }

    public getChatsArchive() {
        return this.http.get('archive')
    }

    /**
     * Добавить пользователей в чат;
     */
    public addUserInChat() {
        return this.http.put('users')
    }

    /**
     * Удалить пользователей из чата;
     */
    public deleteUserInChat() {
        return this.http.delete('users')
    }

    public getChatsArchiveById(id: number) {
        return this.http.post('archive', {
            data: {
                chatId: id
            }
        })
    }

    /**
     * получить количество новых сообщений в указанном чате;
     */
    public getNewMessage(id: number) {
        return this.http.get(`new/${id}`)
    }

    /**
     * Получить пользователей чата по ID;
     */
    public getUserInChat(id: number) {
        return this.http.get(`${id}/users`)
    }

    public setChatAvatar() {
        return this.http.put('avatar')
    }
}

export default ChatAPI;