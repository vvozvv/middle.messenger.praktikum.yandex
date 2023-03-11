import withStore from "./withStore";
import connect from "./connect";
import {TStore} from "../store/Store.types";

export const withActiveChat = withStore((state: TStore) => ({
  ...state.active,
  isLoadingUser: state.isLoadingUser,
  isLoadingChat: state.isLoadingChat,
}));

export const withActiveChatConnect = connect(state => ({
  active: state.active,
  isLoading: state.isLoadingUser,
}));
