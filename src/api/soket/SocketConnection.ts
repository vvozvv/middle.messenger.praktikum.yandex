import {BASE_SOCKET_PATH} from "../../constants/app";
import store from "../../store/Store";
import {transformMessageToDisplay} from "../../utils/helpers/api";

export default class SocketConnection {
    protected socket;
    protected timerId?: number;

    constructor(endpoint: string) {
        this.socket = new WebSocket(`${BASE_SOCKET_PATH}/${endpoint}`);

        this.init();
    }

    private init() {
        this.setListeners();
    }

    private setListeners() {
        this.socket.addEventListener('open', () => {
            console.log('Соединение установлено');

            this.setPing();
            this.getPrevMessages('0');
        });

        this.socket.addEventListener('close', event => {
            console.log(event)
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }

            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        this.socket.addEventListener('message', event => {
            const data = JSON.parse(event.data);
            const currentUserId = store.getState().currentUser?.id;

            if (data && data.type !== 'error' && data.type !== 'pong' && data.type !== 'user connected') {


                if (Array.isArray(data)) {
                    console.log(data)
                    const messageObj = data
                        .sort((a, b) => new Date(a.time).valueOf() - new Date(b.time).valueOf())
                        .map(item => transformMessageToDisplay(item, currentUserId));
                    store.set('active.messages', messageObj);
                } else {
                    store.set('active.messages', [
                        ...store.getState()?.active?.messages,
                        transformMessageToDisplay(data, currentUserId)
                    ]);
                }
            }
        });

        this.socket.addEventListener('error', () => {
            console.log('Ошибка');
        });
    }

    public sendMessage(message: string) {
        console.log(this.socket)
        this.socket.send(
            JSON.stringify({
                content: message,
                type: 'message',
            })
        );
    }

    public getPrevMessages(count: string) {
        this.socket.send(
            JSON.stringify({
                content: count,
                type: 'get old',
            })
        );
    }

    private setPing() {
        this.timerId = setInterval(() => {
            this.socket.send(JSON.stringify({ type: 'ping' }));
        }, 2000);
    }
}