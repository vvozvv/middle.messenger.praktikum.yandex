import { METHODS } from './HTTP.constants';
import { HTTPOptionTypes } from './HTTP.types';
import { queryStringify } from './HTTP.helpers';
import {BASE_API_PATH} from "../../../api/constants";
import {isPlainObject} from "../../../utils/helpers/isPlain";

export class HTTPTransport {
    static API_URL = BASE_API_PATH;
    private readonly prefix: string;
    
    constructor(prefix: string) {
        this.prefix = prefix;
    }

    private getPath = (url: string): string => {
        return `${HTTPTransport.API_URL}${this.prefix}${url}`;
    }

    public get = (url: string, options: HTTPOptionTypes = {}): Promise<XMLHttpRequestResponseType>  => {
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    public post = (url: string, options: HTTPOptionTypes = {}): Promise<XMLHttpRequestResponseType>  => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    public put = (url: string, options: HTTPOptionTypes = {}): Promise<XMLHttpRequestResponseType>  => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    public delete = (url: string, options: HTTPOptionTypes = {}): Promise<XMLHttpRequestResponseType>  => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    private request = (url: string, options: HTTPOptionTypes = {}, timeout = 5000): Promise<XMLHttpRequestResponseType>  => {
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
