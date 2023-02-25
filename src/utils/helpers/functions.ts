import { FormData } from '../../core/types/common';

/**
 * Функция для обрезания текста
 * @param {string} str Предложение
 * @param {number} maxLength Количество симоволов для обрезания
 * */
export const truncateText = (str: string, maxLength: number): string => {
	if (!str || str.length === 0) return '';
	return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
}

/**
 * Функция преобразования массива инпутов в объект запросы для формы
 * @param {Array<FormData>} array Массив инпутов
 * */
export const formArrayToObjectRequest = (array: Array<FormData>): Record<string, any> => {
    if (array.length === 0) {
        return {}
    }

    return array.reduce((obj, item) => {
        return {...obj, [item.name]: item.value}
    }, {})
}

/**
 * Сортировка сообщений
 * */
export const sortMessages = (a: any, b: any) => {
    if (!b.last_message?.time) {
        return -1
    }
    return Date.parse(b.last_message?.time) - Date.parse(a.last_message?.time);
};
