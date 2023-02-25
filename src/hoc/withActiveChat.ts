import withStore from "./withStore";
import connect from "./connect";

export const withActiveChat = withStore((state: any) => ({ ...state.active }));

export const withActiveChatConnect = connect(state => ({ active: state.active }));