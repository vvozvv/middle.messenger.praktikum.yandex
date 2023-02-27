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
        const {status, response} = res as any;

        if (status === 200) {
          if (goTo) router.go(goTo);
        } else {
          const errorMessage = JSON.parse(response)?.reason ?? 'Ошибка';
          throw new Error(errorMessage)
        }
    } catch (error) {
        console.error('Произошла ошибка', error )
        alert(error)
    }

}