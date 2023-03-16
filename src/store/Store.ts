import {EventBus} from "core/event-bus/EventBus";
import { set as setStore } from "utils/helpers/set";
import {TStore} from "./Store.types";

export enum StoreEvents {
    Updated = 'updated',
}

const initStore: TStore = {
  currentUser: undefined,
  active: undefined,
  chat: [],
  isLoadingUser: true,
  isLoadingChat: false,
  isLoadingAuth: false,
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
