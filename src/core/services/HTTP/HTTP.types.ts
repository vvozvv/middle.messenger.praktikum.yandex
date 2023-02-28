import { METHODS } from './HTTP.constants';

export type HTTPMethod = (url: string, options?: HTTPOptionTypes, timeout?: number) => Promise<XMLHttpRequestResponseType>

export type HTTPOptionTypes = {
    headers?: Record<string, string>;
    method?: METHODS;
    data?: any;
    timeout?: number;
}
