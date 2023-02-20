import {PAGE} from "../modules/router";
import router from "../core/router/Router";

/**
 * Функция отлова ошибок при запросе
 *
 * @param {Promise<any>} request - запрос
 * @param {PAGE} goTo - Страница для редиректа при успехе
 * */
export const checkErrorRequest = async (request: Promise<any>, goTo?: PAGE) => {
    try {
        const res = await request;
        const {status} = res as any;

        if (status !== 200) {
            throw new Error(res)
        }

        if (goTo) {
            router.go(goTo);
        }
    } catch (e) {
        alert(e)
    }

}