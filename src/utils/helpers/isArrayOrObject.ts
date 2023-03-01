import { isArray } from './isArray';
import { isPlainObject } from './isPlainObject';
import {Indexed} from "../../core/types/common";

export const isArrayOrObject = (value: unknown): value is [] | Indexed => {
    return isPlainObject(value) || isArray(value);
};