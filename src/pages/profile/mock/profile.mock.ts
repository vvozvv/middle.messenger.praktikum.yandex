import { ProfileResponse } from '../../../core/types/common';

export const profileMockData: Omit<ProfileResponse, 'password'> = {
    first_name: 'Иван',
    second_name: 'Иванов',
    login: 'ivanivanov',
    email: 'pochta@yandex.ru',
    phone: '+79099673030',
}
