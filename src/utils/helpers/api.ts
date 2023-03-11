import {getTime} from "../data";
import {truncateText} from "./functions";
import {getImagePath} from "./links";

/**
 * Трансформирует ответ по сообщением в формат для отображения
 * @param {string} obj Сообщение
 * @param {string} currentUserId ID аторизованного пользователя
 * */
export const transformMessageToDisplay = (obj: any, currentUserId: number) => {
    return {
        ...obj,
        time: getTime(obj.time),
        me: Number(obj.user_id) === Number(currentUserId),
    }
}

/**
 * Трансформирует ответ по чатам в формат для отображения
 * @param {string} obj Сообщение
 * */
export const transformChatsToDisplay = (obj: any) => {
    return {
        ...obj,
        avatar: getImagePath(obj.avatar),
        last_message: {
            ...obj.last_message,
            content: obj.last_message ? truncateText(obj.last_message?.content, 25) : 'Чат создан',
            time: getTime(obj?.last_message?.time),
        }
    }
}
