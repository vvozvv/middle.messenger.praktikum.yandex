import withStore from "./withStore";

export const withUser = withStore((state: any) => ({ ...state.currentUser }));
