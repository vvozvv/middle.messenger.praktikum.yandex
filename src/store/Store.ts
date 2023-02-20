import {EventBus} from "../core/EventBus";
import {Indexed} from "../core/types/common";
import { set as setStore } from "../utils/helpers/set";

export class Store extends EventBus {
    private state: Indexed = {};

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        setStore(this.state, path, value);
        console.log(path, value)
        this.emit('updated');
    };
}

export default new Store();