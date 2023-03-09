import store from '../store/Store';
import Block from "../core/block/Block";
import isEqual from "../utils/helpers/isEqual";

const withStore =
    (mapStateToProps: (state: any) => Record<string, unknown>) => (Component: typeof Block) => {
        let state: Record<string, unknown>;

        return class extends Component {
            constructor(props: Record<string, unknown>) {
                state = mapStateToProps(store.getState());

                super({ ...props, ...state });

                store.on('updated', () => {
                    const newState = mapStateToProps(store.getState());

                    if (!isEqual(state, newState)) {
                        this.setProps({
                            ...newState,
                        });
                    }
                });
            }
        };
    };

export default withStore;
