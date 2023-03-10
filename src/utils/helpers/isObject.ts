import {Indexed} from "../../core/types/common";

export const isObject = (item: Indexed<any> | undefined): boolean => {
    if (!item) return false;

    return item && typeof item === 'object' && !Array.isArray(item);
};