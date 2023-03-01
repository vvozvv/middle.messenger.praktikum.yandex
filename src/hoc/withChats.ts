import withStore from "./withStore";
import connect from "./connect";

export const withChats = withStore((state: any) => ({ ...state.chats }));

export const withChatsConnect = connect(state => ({ chat: state.chat }));