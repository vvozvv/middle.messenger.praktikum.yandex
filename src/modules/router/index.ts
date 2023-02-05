enum PAGE {
    MAIN = '',
    LOGIN = 'authorization',
    REGISTRATION = 'registration',
    CHATS = 'chat',
    PROFILE = 'profile',
    PROFILE_EDIT = 'profile-edit',
    NOT_FOUND = '404',
    ERROR = '500',
}


const pagesList: Array<{ path: PAGE, name: string }> = [
    { path: PAGE.MAIN, name: 'Главная страница' },
    { path: PAGE.LOGIN, name: 'Авторизация' },
    { path: PAGE.REGISTRATION, name: 'Регистрация' },
    { path: PAGE.CHATS, name: 'Чаты' },
    { path: PAGE.PROFILE, name: 'Профиль' },
];

export { PAGE, pagesList }
