import { METHODS } from './HTTP.constants';

export type HTTPMethod = (url: string, options?: HTTPOptionTypes, timeout?: number) => Promise<XMLHttpRequestResponseType>

export type HTTPOptionTypes = {
    headers?: any;
    method?: METHODS;
    data?: any;
    timeout?: number;
}
