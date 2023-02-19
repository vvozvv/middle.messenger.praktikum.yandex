import {HTTPTransport} from "../core/services/HTTP/HTTPService";

export class BaseAPI {
    protected http: HTTPTransport;

    constructor(prefix: string) {
        this.http = new HTTPTransport(prefix);
    }
    // На случай, если забудете переопределить метод и используете его, — выстрелит ошибка
    public create() { throw new Error('Not implemented'); }

    request() { throw new Error('Not implemented'); }

    update() { throw new Error('Not implemented'); }

    delete() { throw new Error('Not implemented'); }
}