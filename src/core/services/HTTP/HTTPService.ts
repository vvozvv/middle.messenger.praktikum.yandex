import { METHODS } from './HTTP.constants';
import { queryStringify } from './HTTP.helpers';
import {isPlainObject} from "../../../utils/helpers/isPlain";
import {BASE_API_PATH} from "../../../constants/app";
import {HTTPMethod} from "./HTTP.types";

export class HTTPTransport {
    static API_URL = BASE_API_PATH;
    private readonly prefix: string;
    
    constructor(prefix: string) {
        this.prefix = prefix;
    }

    private getPath = (url: string): string => {
        return `${HTTPTransport.API_URL}${this.prefix}${url}`;
    }

    public get: HTTPMethod = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    public post: HTTPMethod = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    public put: HTTPMethod = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    public delete: HTTPMethod = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    private request: HTTPMethod = (url, options = {}, timeout = 5000) => {
        const self = this;
        const {headers = {}, method, data} = options;

        return new Promise(function(resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;
            xhr.withCredentials = true;

            xhr.open(
                method,
                isGet && !!data
                    ? self.getPath(`${url}${queryStringify(data)}`)
                    : self.getPath(url),
            )

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            if (isPlainObject(data)) {
                xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            }

            xhr.onload = function() {
                // @ts-ignore
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(isPlainObject(data) ? JSON.stringify(data) : data);
            }
        });
    };
}
