import { METHODS } from './HTTP.constants';

export type HTTPMethod = (url: string, options?: HTTPOptionTypes, timeout?: number) => Promise<XMLHttpRequest>;

export type HTTPMethodRequest = (
  url: string,
  options?: HTTPOptionTypes,
  timeout?: number,
  withBaseUrl?: boolean
) => Promise<XMLHttpRequest>;

export type HTTPOptionTypes = {
    headers?: Record<string, string>;
    method?: METHODS;
    data?: any;
    timeout?: number;
}
