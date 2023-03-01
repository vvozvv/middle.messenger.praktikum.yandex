import { getParams } from './getParams';
import { isPlainObject } from './isPlainObject';
import {Indexed} from "../../core/types/common";

export const queryString = (data: Indexed) => {
    if (!isPlainObject(data)) {
        throw new Error('input must be an object');
    }

    return `?${getParams(data)
        .map((arr) => arr.join('='))
        .join('&')}`;
};