import {BASE_RESOURCES_PATH} from "../../constants/app";

/**
 * Получение ссылки на изображение
 * @param {string | undefined} path Ссылка на изображение
 */
export const getImagePath = (path: string | undefined): string => {
    return path ? `${BASE_RESOURCES_PATH}${path}` : '';
}