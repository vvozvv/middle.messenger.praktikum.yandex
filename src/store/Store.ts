import { set } from "utils/helpers/set";
import {EventBus} from "../core/EventBus";
import {Indexed} from "../core/types/common";

export class Store extends EventBus {
    private state: Indexed = {};

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        set(this.state, path, value);
    };
}

const store = new Store();

export default store;