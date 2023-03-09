import {ProfileResponse} from "../core/types/common";
import {TChat} from "../core/types/chat.types";

interface ActiveChat {
  id: number;
  avatar: string;
  title: string;
}

export interface TStore {
    currentUser?: ProfileResponse;
    active?: ActiveChat;
    chat: Array<TChat>;
}
