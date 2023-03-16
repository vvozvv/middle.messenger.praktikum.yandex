import connect from "./connect";

export const withLoadingAuth = connect(state => ({ isLoading: state.isLoadingAuth }));
