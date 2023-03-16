import {ProfileResponse} from "../core/types/common";
import {TChat} from "../core/types/chat.types";
import {TMessage} from "../core/types/message.types";

interface ActiveChat {
  id: number;
  avatar: string;
  title: string;
  messages: TMessage[];
}

export interface TStore {
    currentUser?: ProfileResponse;
    active?: ActiveChat;
    chat: Array<TChat>;
    isLoadingUser: boolean;
    isLoadingChat: boolean;
    isLoadingAuth: boolean;
}
