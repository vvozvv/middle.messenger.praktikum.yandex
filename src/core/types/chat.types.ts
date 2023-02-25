import {ProfileResponse} from "./common";

export type TCreateChats = {
    title: string;
}

export type TDeleteChat = {
    chatId: number;
}

export type TChatInfo = {
    content: string;
    id: number;
    time: string | Date;
    user: ProfileResponse;
}

export type TChat = {
    avatar: string | null;
    created_by: number;
    id: number;
    last_message: TChatInfo;
    title: string;
    unread_count: number;
}