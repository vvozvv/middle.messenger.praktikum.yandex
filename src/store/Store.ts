import {EventBus} from "core/EventBus";
import { set as setStore } from "utils/helpers/set";
import {TStore} from "./Store.types";

export enum StoreEvents {
    Updated = 'updated',
}

const initStore: TStore = {
  currentUser: undefined,
  active: undefined,
  chat: []
}

export class Store extends EventBus {
    private state: TStore = initStore;

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        setStore(this.state, path, value);
        this.emit(StoreEvents.Updated);
    };
}

export default new Store();
