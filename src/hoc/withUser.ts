import withStore from "./withStore";
import connect from "./connect";

export const withUserConnect = connect(state => ({ user: state.user }));

export const withUser = withStore((state: any) => ({ ...state.currentUser }));