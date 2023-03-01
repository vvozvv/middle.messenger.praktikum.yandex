import {isArrayOrObject} from "./isArrayOrObject";
import {Indexed} from "../../core/types/common";


export const getKey = (key: string, parentKey?: string) => {
    return parentKey ? `${parentKey}[${key}]` : key;
};

export const getParams = (data: Indexed | [], parentKey?: string) => {
    const result: [string, string][] = [];

    for (const [key, value] of Object.entries(data)) {
        if (isArrayOrObject(value)) {
            result.push(...getParams(value, getKey(key, parentKey)));
        } else {
            result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
        }
    }

    return result;
};