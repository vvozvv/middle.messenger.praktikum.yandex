import { METHODS } from './HTTP.constants';

export type HTTPOptionTypes = {
    headers: any;
    method: METHODS;
    data: any;
    timeout: number;
}
