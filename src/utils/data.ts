/**
 * Функция форматирования даты
 * @param {Date | string} date Дата
 * */
export const formatDate = (date: Date | string) => {
    date = new Date(date);

    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return year + '-' + month + '-' + day;
}

/**
 * Функция получения времени из даты
 * @param {Date | string} date Дата
 * */
export const getTime = (date: Date | string) => {
    const newDate = new Date(date);
    const hour = newDate.getHours();
    const minute = newDate.getMinutes();
    const minuteFormat = (minute < 10) ? `0${minute}` : minute;
    return date ? hour + ":" + minuteFormat : '';
}
