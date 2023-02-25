import {BaseAPI} from "../base-api";
import {TCreateChats} from "../../core/types/chat.types";
import {Indexed} from "../../core/types/common";
import {queryString} from "../../utils/helpers/queryString";

class ChatAPI extends BaseAPI {
    constructor() {
        super('chats/');
    }

    /**
     * Получить сообщения чата;
     */
    getChatMessages() {
        return this.http.get('', {})
    }

    /**
     * Создать чат;
     */
    createChats(createObj: TCreateChats) {
        return this.http.post('', {
            data: createObj
        })
    }

    /**
     * Удалить чат;
     */
    deleteChat(id: number) {
        return this.http.delete('', {
            data: {
                chatId: id
            }
        })
    }

    getChatsArchive() {
        return this.http.get('archive')
    }

    /**
     * Добавить пользователей в чат;
     */
    addUserInChat(usersChatPayload: any) {
        return this.http.put('users', {
            data: usersChatPayload
        })
    }

    /**
     * Удалить пользователей из чата;
     */
    deleteUserInChat(usersChatPayload: any) {
        return this.http.delete('users', {
            data: usersChatPayload
        })
    }

    getChatsArchiveById(id: number) {
        return this.http.post('archive', {
            data: {
                chatId: id
            }
        })
    }

    /**
     * получить количество новых сообщений в указанном чате;
     */
    getNewMessage(id: number) {
        return this.http.get(`new/${id}`)
    }

    /**
     * Получить пользователей чата по ID;
     */
    getUserInChat(id: number) {
        return this.http.get(`${id}/users`)
    }

    setChatAvatar() {
        return this.http.put('avatar')
    }

    getToken(id: string) {
        return this.http.post(`/token/${id}`);
    }

    getChats(query: Indexed) {
        return this.http.get(queryString(query));
    }

    getUserChats(id: number) {
        return this.http.get(`${id}/users`, {})
    }

}

export default ChatAPI;