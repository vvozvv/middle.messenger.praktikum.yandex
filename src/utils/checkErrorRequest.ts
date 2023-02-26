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

        if (status === 200 || status === 401) {
          if (goTo) router.go(goTo);
        } else {
          throw new Error(res)
        }
    } catch (e) {
        console.error('Ошибка', e)
        alert(e)
    }

}